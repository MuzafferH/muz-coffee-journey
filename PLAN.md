# Muz's Coffee Journey Website - Implementation Plan

> **Starting a new Claude session?** Just say:
> "Let's continue building my coffee website. Read the PLAN.md first."
> Claude will read this file and know exactly what to do.

## Current Status

**Status:** Not started
**Last updated:** 2026-01-27
**Next step:** Phase 1 - Project Setup

---

## Project Location

**All project files go in this folder:**
```
/Users/muzaffer/projects/muz-coffee-journey/
```

Everything related to this project (source code, config files, images, documentation, `.gitignore`, `package.json`, etc.) must be created inside this directory. Do not create files elsewhere.

---

## Context & Key Decisions

### What This Is
A personal hobby website for Muz to document specialty coffee experiences while traveling. Not for monetization - purely for personal organization and sharing with friends.

### Design References (for style guidance)
- **Primary inspiration**: [Nana Coffee Roasters](https://nanacoffeeroasters.com/) - warm, artisanal, earthy tones
- **Secondary reference**: [Five Elephant](https://www.fiveelephant.com/) - minimal, elegant, premium feel
- **Tertiary reference**: [Ethereum.org](https://ethereum.org/) - modern card layouts, clean structure

### Key Decisions Made
| Decision | Choice | Why |
|----------|--------|-----|
| Visual style | Warm & artisanal | Fits personal travel journal vibe, not commercial |
| Maps | MapLibre (not Google/Leaflet) | Professional styling + 100% free |
| Hosting | Vercel | Free tier, auto-deploy, free subdomain |
| Content management | Markdown files | No database costs, version controlled, simple |
| Framework | Astro | Fast, content-focused, good for static sites |

### Working Style
Muz is learning to code - explain commands and concepts as you go. Break down complex operations into steps. Add comments to code explaining what each section does.

---

## Project Overview

A personal website documenting Muz's specialty coffee journey around the world. Features coffee shop reviews, bean tasting notes, and an interactive map of visited locations.

**Key Constraints:**
- 100% free hosting (Vercel)
- No database - content in Markdown files
- Professional, artisanal aesthetic
- Beginner-friendly workflow for adding content

---

## Tech Stack

| Component | Technology | Why |
|-----------|------------|-----|
| Framework | Astro | Fast, content-focused, great DX |
| Styling | Tailwind CSS | Utility-first, no separate CSS files |
| Maps | MapLibre GL JS | Professional maps, 100% free |
| Map Tiles | MapTiler (free tier) | Beautiful styles, 100K requests/month free |
| Content | Markdown + Frontmatter | Easy to edit, version controlled |
| Hosting | Vercel | Free tier, auto-deploy from GitHub |
| Domain | `*.vercel.app` subdomain | Free, HTTPS included |

---

## Site Structure

```
Pages:
├── / (Home)              - Hero, featured shops, recent visits, mini map
├── /map                  - Full interactive world map with pins
├── /shops                - Grid listing of all coffee shops
├── /shops/[slug]         - Individual shop detail page
├── /beans                - Grid listing of all beans
├── /beans/[slug]         - Individual bean detail page
└── /about                - Muz's coffee journey story
```

---

## Visual Design

### Color Palette
- **Espresso Brown** `#3D2314` - Headers, accents
- **Rust/Terracotta** `#C05717` - Buttons, links, interactive elements
- **Cream** `#FCF0E0` - Page backgrounds
- **Warm White** `#FFFAF5` - Cards, content sections
- **Charcoal** `#2C2C2C` - Body text
- **Muted Gold** `#B8860B` - Ratings, special highlights
- **Sage Green** `#7D8B6F` - Origin/region tags

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Body**: Inter (clean, readable)

### Style Reference
Warm & artisanal aesthetic inspired by Nana Coffee Roasters - earthy tones, storytelling focus, personal warmth.

---

## Content Structure

### Directory Layout
```
src/content/
├── shops/
│   └── [shop-slug].md
├── beans/
│   └── [bean-slug].md
└── config.ts              # Content collection schemas

public/images/
├── shops/
│   └── [shop-slug]/
│       ├── exterior.jpg
│       ├── interior.jpg
│       └── ...
└── beans/
    └── [bean-slug].jpg
```

### Coffee Shop Schema
```yaml
---
name: "Fuglen Tokyo"
slug: "fuglen-tokyo"
city: "Tokyo"
country: "Japan"
neighborhood: "Tomigaya"
coordinates: [35.6595, 139.6882]  # [lat, lng]
rating: 5                          # 1-5
visited: 2024-03-15
website: "https://fuglen.com"
instagram: "@fuglentokyo"
featuredImage: "/images/shops/fuglen-tokyo/exterior.jpg"
gallery:
  - "/images/shops/fuglen-tokyo/interior-1.jpg"
  - "/images/shops/fuglen-tokyo/pour-over.jpg"
beans:
  - ethiopia-yirgacheffe-fuglen
tags:
  - specialty
  - filter
  - scandinavian-style
---

Your visit notes in Markdown here...
```

### Bean Schema
```yaml
---
name: "Ethiopia Yirgacheffe"
slug: "ethiopia-yirgacheffe-fuglen"
roaster: "Fuglen"
origin: "Ethiopia"
region: "Yirgacheffe"
process: "Washed"
roastLevel: "Light"
tastingNotes:
  - citrus
  - floral
  - bergamot
rating: 5
triedAt:
  - fuglen-tokyo
image: "/images/beans/ethiopia-yirgacheffe-fuglen.jpg"
---

Your tasting notes here...
```

---

## Implementation Phases

### Phase 1: Project Setup
- [ ] Create new Astro project
- [ ] Install and configure Tailwind CSS
- [ ] Set up Google Fonts (Playfair Display, Inter)
- [ ] Create base layout with navigation
- [ ] Configure content collections with schemas
- [ ] Create folder structure for content and images

### Phase 2: Core Pages - Home & About
- [ ] Build responsive header/navigation component
- [ ] Create footer component
- [ ] Build Home page with hero section
- [ ] Create "Featured Shops" component for home
- [ ] Build About page

### Phase 3: Coffee Shops Section
- [ ] Create shop card component
- [ ] Build /shops listing page with grid layout
- [ ] Build /shops/[slug] detail page
- [ ] Add image gallery component
- [ ] Add linked beans section on shop detail

### Phase 4: Beans Section
- [ ] Create bean card component
- [ ] Build /beans listing page
- [ ] Build /beans/[slug] detail page
- [ ] Link beans back to shops where tried

### Phase 5: Interactive Map
- [ ] Install MapLibre GL JS
- [ ] Set up MapTiler account (free)
- [ ] Create /map page with full-screen map
- [ ] Add custom coffee cup markers
- [ ] Implement pin clustering for close locations
- [ ] Add popup on pin click with shop preview
- [ ] Add mini map component for home page

### Phase 6: Polish & Responsive
- [ ] Ensure all pages work on mobile
- [ ] Add loading states
- [ ] Add 404 page
- [ ] Add favicon and meta tags
- [ ] Optimize images (compression guidance)

### Phase 7: Deployment
- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Connect Vercel to GitHub repo
- [ ] Configure subdomain name
- [ ] Verify deployment

---

## Files to Create

```
muz-coffee-journey/
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── shops/
│       └── beans/
└── src/
    ├── layouts/
    │   └── BaseLayout.astro
    ├── components/
    │   ├── Header.astro
    │   ├── Footer.astro
    │   ├── ShopCard.astro
    │   ├── BeanCard.astro
    │   ├── ImageGallery.astro
    │   ├── Map.astro
    │   ├── MiniMap.astro
    │   └── Rating.astro
    ├── pages/
    │   ├── index.astro
    │   ├── about.astro
    │   ├── map.astro
    │   ├── shops/
    │   │   ├── index.astro
    │   │   └── [slug].astro
    │   └── beans/
    │       ├── index.astro
    │       └── [slug].astro
    ├── content/
    │   ├── config.ts
    │   ├── shops/
    │   │   └── (example entries)
    │   └── beans/
    │       └── (example entries)
    └── styles/
        └── global.css
```

---

## Verification Checklist

### Local Development
- [ ] `npm run dev` starts without errors
- [ ] Home page loads at localhost:4321
- [ ] Navigation works between all pages
- [ ] Can add a new shop markdown file and see it appear
- [ ] Can add a new bean markdown file and see it appear
- [ ] Map displays with pins at correct coordinates
- [ ] Clicking map pin shows shop popup
- [ ] All pages responsive on mobile (test in browser dev tools)
- [ ] Images load correctly

### Production Deployment
- [ ] `npm run build` completes without errors
- [ ] Vercel deployment succeeds
- [ ] Site loads at `[name].vercel.app`
- [ ] All pages accessible via direct URL
- [ ] Map works in production
- [ ] Images load correctly in production
- [ ] HTTPS working (green lock icon)

---

## Adding Content Workflow (Post-Launch)

1. **Add a new coffee shop:**
   - Create `src/content/shops/[shop-name].md`
   - Add photos to `public/images/shops/[shop-name]/`
   - Fill in frontmatter and write notes
   - `git add . && git commit -m "Add [shop name]" && git push`
   - Vercel auto-deploys in ~1 minute

2. **Add a new bean:**
   - Create `src/content/beans/[bean-name].md`
   - Add photo to `public/images/beans/`
   - Link to shop(s) in `triedAt` field
   - Commit and push

---

## Future Enhancements (Not in v1)

- Dark mode toggle
- Search/filter functionality
- Trip grouping (e.g., "Tokyo 2024")
- RSS feed
- Share buttons
- Statistics page (countries visited, total shops, etc.)
