# Mount Masaba High School — Website

Public site + (in progress) student/parent/teacher/admin portals for Mount Masaba High School, Mbale, Uganda.

Plain HTML/CSS/JS — no build step, no framework. Backed by a live Supabase project (auth, database, storage).

## Status

- ✅ Homepage (`index.html`) — hero, quick links, live news feed, footer
- ⏳ About, Academics, Admissions, News, Gallery, Contact — not built yet
- ⏳ Student/Parent login + portals — not built yet
- ⏳ Teacher portal, Admin dashboard — not built yet
- ✅ Supabase backend: full schema, row-level security, auth, storage buckets — all live

## Run it locally

No build step needed. Just open `index.html` in a browser, or serve the folder:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Deploy

### Netlify (fastest)
Drag this folder onto [app.netlify.com/drop](https://app.netlify.com/drop) — no account needed, live link in seconds.

### Vercel (via GitHub)
1. Push this repo to GitHub
2. In Vercel: **Add New → Project → Import** this repo
3. Framework preset: **Other** (it's a static site, no build command needed)
4. Deploy — every future push to `main` auto-deploys

## Backend

Supabase project: `iswnnvmptnabnnzdcskc` (see `js/supabase-client.js` for the connection details — the anon key there is safe to be public, access is controlled by row-level security policies in the database, not by hiding the key).

## Structure

```
index.html          homepage
css/styles.css       design system (colors, components, layout)
js/supabase-client.js  Supabase connection + data-fetch helpers
js/main.js            nav toggle, ripple buttons, scroll-reveal, time formatting
manifest.json         PWA config
assets/               logo + generated app icons
```
