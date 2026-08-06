// Mount Masaba High School — Supabase client + data helpers
// Public anon key: safe to expose in client code, access is governed by RLS.
const SUPABASE_URL = "https://iswnnvmptnabnnzdcskc.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlzd25udm1wdG5hYm5uemRjc2tjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU4MDMyMDYsImV4cCI6MjEwMTM3OTIwNn0.uscY4_0f6uw6NOvjfHj3YL4VntAJAm02bKc_gERkWJM";

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ---------- Public content helpers ----------
async function getSchoolSettings() {
  const { data, error } = await sb.from("school_settings").select("*").eq("id", 1).single();
  if (error) { console.warn("settings fetch failed", error.message); return null; }
  return data;
}

async function getNews({ limit = 20, pinnedFirst = true } = {}) {
  let query = sb.from("news").select("*").eq("published", true).order("created_at", { ascending: false }).limit(limit);
  const { data, error } = await query;
  if (error) { console.warn("news fetch failed", error.message); return []; }
  if (pinnedFirst) data.sort((a, b) => (b.pinned === a.pinned ? 0 : b.pinned ? 1 : -1));
  return data;
}

async function getGallery({ category = null, limit = 40 } = {}) {
  let query = sb.from("gallery").select("*").order("created_at", { ascending: false }).limit(limit);
  if (category) query = query.eq("category", category);
  const { data, error } = await query;
  if (error) { console.warn("gallery fetch failed", error.message); return []; }
  return data;
}

async function getEvents({ upcomingOnly = true, limit = 10 } = {}) {
  let query = sb.from("events").select("*").order("event_date", { ascending: true }).limit(limit);
  if (upcomingOnly) query = query.gte("event_date", new Date().toISOString().slice(0, 10));
  const { data, error } = await query;
  if (error) { console.warn("events fetch failed", error.message); return []; }
  return data;
}

async function getDownloads({ category = null } = {}) {
  let query = sb.from("downloads").select("*").order("uploaded_at", { ascending: false });
  if (category) query = query.eq("category", category);
  const { data, error } = await query;
  if (error) { console.warn("downloads fetch failed", error.message); return []; }
  return data;
}

function timeAgo(dateStr) {
  const d = new Date(dateStr);
  const diff = (Date.now() - d.getTime()) / 1000;
  if (diff < 60) return "just now";
  if (diff < 3600) return Math.floor(diff / 60) + "m ago";
  if (diff < 86400) return Math.floor(diff / 3600) + "h ago";
  if (diff < 86400 * 30) return Math.floor(diff / 86400) + "d ago";
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}
