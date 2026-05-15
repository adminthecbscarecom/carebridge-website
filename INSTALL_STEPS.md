# CareBridge Consolidated Minimal Build

This version reduces the React codebase to a small set of files:

- `src/App.jsx`
- `src/main.jsx`
- `src/styles.css`
- `index.html`
- `package.json`
- `vite.config.js`
- `public/images/*`

The old `src/components`, `src/data`, and `src/hooks` folders are no longer needed.

## Install Steps

1. Back up your current website folder.

2. Delete these old folders from your project:
   - `src/components`
   - `src/data`
   - `src/hooks`

3. Copy the new files and folders from this package into your project:
   - `src/App.jsx`
   - `src/main.jsx`
   - `src/styles.css`
   - `index.html`
   - `package.json`
   - `vite.config.js`
   - `public/images`

4. Run:

```bash
npm install
npm run dev
```

5. Hard refresh your browser:
   - Windows: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`

6. Confirm these items:
   - Mobile header shows only the logo and Call Now.
   - No hamburger menu.
   - Logo no longer has a white box in the sticky header.
   - Services use unique images or a clean icon.
   - Health plan cards show only actual MCO/health plans.
   - Long paragraphs justify on tablet/desktop, but stay left-aligned on phones.
   - Footer/contact address alignment is clean.

7. Build before deploy:

```bash
npm run build
```

## Important

If the site still looks identical after copying these files, the new files were not placed in the project Vercel/GitHub is deploying, or your browser/Vercel deployment is showing a cached older build.
