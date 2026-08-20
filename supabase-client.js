// Mount Masaba High School — Supabase client + public data helpers
(function(){
  "use strict";
  const SUPABASE_URL="https://iswnnvmptnabnnzdcskc.supabase.co";
  const SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlzd25udm1wdG5hYm5uemRjc2tjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU4MDMyMDYsImV4cCI6MjEwMTM3OTIwNn0.uscY4_0f6uw6NOvjfHj3YL4VntAJAm02bKc_gERkWJM";
  function init(){
    if(!window.supabase||typeof window.supabase.createClient!=="function") return false;
    if(!window.sb) window.sb=window.supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
    window.supabaseClient=window.sb;
    return true;
  }
  init();
  window.MountMasabaAuth={ready:init};
  window.getSchoolSettings=async function(){const {data,error}=await window.sb.from("school_settings").select("*").eq("id",1).maybeSingle();return error?null:data};
  window.getNews=async function({limit=20}={}){const {data,error}=await window.sb.from("news").select("*").eq("published",true).order("created_at",{ascending:false}).limit(limit);return error?[]:data||[]};
  window.getGallery=async function({category=null,limit=40}={}){let q=window.sb.from("gallery").select("*").order("created_at",{ascending:false}).limit(limit);if(category)q=q.eq("category",category);const {data,error}=await q;return error?[]:data||[]};
  window.getEvents=async function({upcomingOnly=true,limit=10}={}){let q=window.sb.from("events").select("*").order("event_date",{ascending:true}).limit(limit);if(upcomingOnly)q=q.gte("event_date",new Date().toISOString().slice(0,10));const {data,error}=await q;return error?[]:data||[]};
  window.getDownloads=async function({category=null}={}){let q=window.sb.from("downloads").select("*").order("uploaded_at",{ascending:false});if(category)q=q.eq("category",category);const {data,error}=await q;return error?[]:data||[]};
  window.timeAgo=function(dateStr){const d=new Date(dateStr),diff=(Date.now()-d.getTime())/1000;if(diff<60)return"just now";if(diff<3600)return Math.floor(diff/60)+"m ago";if(diff<86400)return Math.floor(diff/3600)+"h ago";if(diff<2592000)return Math.floor(diff/86400)+"d ago";return d.toLocaleDateString()};
})();