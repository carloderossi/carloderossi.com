# carloderossi.com

Executive portfolio — Carlo De Rossi  
**AI Strategy · Agentic AI · Product Leadership · Enterprise Transformation**

## Tech Stack

- **Next.js 15** (static export)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons)
- **GitHub Pages** via GitHub Actions

## Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build & Export

```bash
npm run build
# Output in /out — ready for GitHub Pages
```

## Deployment

Push to `main` → GitHub Actions runs `.github/workflows/deploy.yml` → deploys to GitHub Pages automatically.

### GitHub Pages setup (one-time)

1. Go to repo **Settings → Pages**
2. Set Source to **GitHub Actions**
3. Add a custom domain `carloderossi.com` and enable **Enforce HTTPS**
4. Add a `CNAME` file in `/public` containing `carloderossi.com`

## Project Structure

```
app/
  layout.tsx       — Root layout, metadata, fonts
  page.tsx         — Assembles all section components
  globals.css      — CSS variables, base styles

components/
  Navbar.tsx       — Sticky navigation
  Hero.tsx         — Full-screen hero with animated name
  Expertise.tsx    — 6-card expertise grid
  Experience.tsx   — Timeline: UBS · Credit Suisse · GFT
  Metrics.tsx      — Key numbers bar
  Projects.tsx     — GitHub projects (featured + show all)
  Articles.tsx     — LinkedIn articles (top 6)
  Certifications.tsx — Category cards
  Footer.tsx       — Contact links

data/
  github-projects.json
  linkedin-articles.json
  certifications.json

public/
  cv.pdf           — Downloadable CV
  profile.jpg      — Professional photo
  favicon.ico
```

## Updating Content

- **Projects**: edit `data/github-projects.json`
- **Articles**: edit `data/linkedin-articles.json`
- **Certifications**: edit `data/certifications.json`
- **CV**: replace `public/cv.pdf`
- **Photo**: replace `public/profile.jpg`

## Color Palette

| Token       | Hex       |
|-------------|-----------|
| Background  | `#0B1020` |
| Surface     | `#111827` |
| Surface 2   | `#1a2236` |
| Accent      | `#2563EB` |
| Text        | `#F8FAFC` |
| Muted       | `#94A3B8` |
| Border      | `#1E2D45` |
