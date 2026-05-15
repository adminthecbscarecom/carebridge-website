# Clean Install Steps for CareBridge Website

1. Back up your current website folder.

2. In your project root, delete old install/build files:

```bash
rm -rf node_modules dist .vercel
rm -f package-lock.json npm-shrinkwrap.json .npmrc
```

Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules, dist, .vercel -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json, npm-shrinkwrap.json, .npmrc -ErrorAction SilentlyContinue
```

3. Delete these old folders if they exist:

```text
src/components
src/data
src/hooks
```

4. Copy the contents of this clean package into your project root.

Your project should now have:

```text
index.html
package.json
vite.config.js
.npmrc
src/App.jsx
src/main.jsx
src/styles.css
public/images/...
```

5. Install with the public npm registry:

```bash
npm config set registry https://registry.npmjs.org/
npm install
npm run build
npm run dev
```

6. Commit the cleaned project:

```bash
git add .
git rm -r --cached node_modules dist .vercel 2>/dev/null || true
git rm --cached package-lock.json npm-shrinkwrap.json 2>/dev/null || true
git commit -m "Clean consolidated CareBridge website build"
git push
```

7. In Vercel, redeploy using **Redeploy without Build Cache**.

8. If Vercel still tries to use an internal registry, search your repo for:

```text
applied-caas-gateway
```

Delete or replace any file that contains it.
