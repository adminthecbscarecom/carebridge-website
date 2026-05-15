# CareBridge Website Patch

This patch keeps the changes small and focused.

## What this patch changes

1. Keeps mobile header simple: logo + Call Now. No hamburger menu.
2. Uses a transparent/cropped header logo asset: `/public/images/logo-header.png`.
3. Updates service card images so they are unique and uses a clean icon for Light Housekeeping.
4. Updates the Health Plan section title and wording so only actual health plan cards display.
5. Adds desktop/tablet paragraph justification for long body copy only.
6. Keeps phone paragraphs left-aligned.
7. Cleans up footer/contact address alignment and uses `company.js` as the single source for public contact details.
8. Avoids public display of sensitive identifiers such as license number, NPI, EIN, provider numbers, credentialing IDs, insurance policies, banking information, internal contacts, or private/home addresses.

## Install steps

1. Back up your project.
2. Copy the `src` folder from this patch into your project and allow it to replace matching files.
3. Copy the `public/images` folder from this patch into your project and allow it to add/replace matching images.
4. Copy `index.html` into the project root if you want the updated metadata.
5. Run:

```bash
npm install
npm run dev
```

6. Review these screen sizes:
   - Phone: 390px wide
   - Tablet: 768px and 1024px wide
   - Desktop: 1280px wide

7. Then run:

```bash
npm run build
```

8. Deploy after confirming the header, service cards, health plan cards, contact area, and footer look correct.
