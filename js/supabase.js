/* Mount Masaba High School — global Supabase/data layer. */
(function(){
  "use strict";
  const client=window.sb||window.supabaseClient||null;
  async function run(query,fallback){try{const result=await query;if(result.error){console.warn("Mount Masaba data request failed:",result.error.message);return fallback}return result.data??fallback}catch(error){console.warn("Mount Masaba data request failed:",error);return fallback}}
  async function settings(){if(!client)return null;return run(client.from("school_settings").select("*").eq("id",1).maybeSingle(),null)}
  async function news(options={}){if(!client)return [];let q=client.from("news").select("*").eq("published",true).order("created_at",{ascending:false}).limit(Number(options.limit)||20);const data=await run(q,[]);return Array.isArray(data)?data.sort((a,b)=>Number(Boolean(b.pinned))-Number(Boolean(a.pinned))):[]}
  async function gallery(options={}){if(!client)return [];let q=client.from("gallery").select("*").order("created_at",{ascending:false}).limit(Number(options.limit)||40);if(options.category)q=q.eq("category",options.category);return run(q,[])}
  async function events(options={}){if(!client)return [];let q=client.from("events").select("*").order("event_date",{ascending:true}).limit(Number(options.limit)||20);if(options.upcomingOnly!==false)q=q.gte("event_date",new Date().toISOString().slice(0,10));return run(q,[])}
  async function downloads(options={}){if(!client)return [];let q=client.from("downloads").select("*").order("uploaded_at",{ascending:false});if(options.category)q=q.eq("category",options.category);return run(q,[])}
  async function mediaByKey(key){if(!client||!key)return null;for(const table of ["school_media","media","school_settings"]){try{const r=await client.from(table).select("*").eq("key",key).maybeSingle();if(!r.error&&r.data)return r.data}catch(_){}}return null}
  function storageUrl(bucket,path){if(!client||!path)return "";if(/^https?:\/\//i.test(path))return path;return client.storage.from(bucket).getPublicUrl(path).data.publicUrl}
  function escapeHtml(value){return String(value??"").replace(/[&<>\'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[c]))}
  window.MountMasabaData={client,settings,news,gallery,events,downloads,mediaByKey,storageUrl,escapeHtml};
})();
