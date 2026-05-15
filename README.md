# CareBridge Solutions Website

Premium, mobile-first marketing site for CareBridge Solutions LLC — Texas Medicaid Personal Assistance Services.

## Features

- Mobile-first layout with sticky bottom Call / Request Services bar
- Hero video on desktop (1180px+), static poster on phones and tablets
- Sections: Hero, Trust, Who We Help, Services, Medicaid Support, How It Works, Why CareBridge, Referrals, About, Contact form, FAQ
- Scroll reveal animations with `prefers-reduced-motion` support
- SEO meta tags and LocalBusiness structured data
- Compliant copy (no license/NPI display, no endorsement claims)

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

## Assets

See `public/media/ASSETS.md` and `public/images/ASSETS.md` for required hero video and image filenames.

## Contact form

Submissions open a `mailto:` draft to `admin@thecbscare.com`. Before collecting sensitive member data in production, connect a secure HIPAA-appropriate intake workflow (see TODO in `src/components/ContactForm.jsx`).

## Deploy

Push to GitHub; Vercel redeploys when connected.
