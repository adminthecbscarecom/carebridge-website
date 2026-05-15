# CareBridge Solutions Website

Clean consolidated Vite + React build for CareBridge Solutions LLC.

## Production structure

```text
index.html
package.json
vite.config.js
.npmrc
src/
  App.jsx
  main.jsx
  styles.css
public/
  images/
```

## Important deployment note

This package intentionally does **not** include `package-lock.json`.
Delete any old `package-lock.json`, `node_modules`, and old `.npmrc` before installing.
Then use the included clean `.npmrc`, which points to the public npm registry.

## Local install

```bash
rm -rf node_modules
rm -f package-lock.json
npm install
npm run build
npm run dev
```

## Vercel

After pushing to GitHub, redeploy in Vercel using **Redeploy without Build Cache**.
