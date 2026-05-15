# CareBridge Solutions Website

Premium single-page site for CareBridge Solutions LLC — Texas Medicaid Personal Assistance Services.

## Features

- Refined typography (Source Serif 4 + DM Sans) and responsive layout (phone, tablet, laptop)
- Mobile navigation with accessible menu
- Health plan cards with MCO logos (`/public/images/plans/`)
- Sections: Hero, About, Services, How It Works, Referrals, Values, Health Plans, Service Area, Care Stories, Careers, FAQ, Contact
- Updated marketing copy and compliance disclaimers

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Health plan logos

Replace placeholder SVGs in `public/images/plans/` with official plan logos (PNG or SVG) using the same filenames listed in `src/data/healthPlans.js`. Cards fall back to initials if an image fails to load.

## Deploy

Commit and push to GitHub. Vercel redeploys automatically when connected.
