# What to Keep and What to Delete

## Keep

```text
index.html
package.json
vite.config.js
.npmrc
.gitignore
src/App.jsx
src/main.jsx
src/styles.css
public/images/logo-header.png
public/images/logo-icon.png
public/images/hero-care.png
public/images/about-care.png
public/images/personal-care-assistance.png
public/images/mobility-transfer-support.png
public/images/meal-preparation.png
public/images/laundry-linens.png
public/images/attendant-support.png
```

## Delete from the old project

```text
node_modules/
dist/
package-lock.json
npm-shrinkwrap.json
.vercel/
```

Delete these old source folders if they still exist:

```text
src/components/
src/data/
src/hooks/
```

Delete any old `.npmrc` first, then copy the clean `.npmrc` included in this package.

## Optional to delete

These are not required for the website to run:

```text
INSTALL_STEPS.md
old README copies
old ZIP files
unused images in public/images/
```

## Do not commit

```text
node_modules/
dist/
.vercel/
```
