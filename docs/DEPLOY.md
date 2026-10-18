# Deploy

The site is static. Hostinger serves `public_html`; Cloudflare sits in front as a proxy and does not cache the HTML.

## Steps

1. **Back up what is live.** In Hostinger's File Manager, compress `public_html` and download the zip. This is the only copy of production outside this repo.
2. **Build from a clean tree.**
   ```sh
   git status          # must be clean
   pnpm install --frozen-lockfile
   pnpm build
   ```
3. **Upload the contents of `dist/`, not the folder itself.** `public_html/index.html` must exist after the upload, not `public_html/dist/index.html`.
4. **Upload `.htaccess` too.** It is a hidden file, so make sure the File Manager shows hidden files. It serves the clean legal URLs (`/politica-de-privacidad`, etc.) with a 200. If `public_html` already has an `.htaccess`, merge the rules instead of overwriting it.
5. **Replace `index.html`.** Files in `_astro/` have hashed names, so new ones never collide with old ones. Leftover old files are harmless and can be removed later.
6. **Check the live site.** Open https://aqtech.com.ar in a private window and send a test message through the contact form. Then run `curl -I https://aqtech.com.ar/politica-de-privacidad`: it must return `HTTP 200`, not a redirect or a 404.

## Rules

- Deploy only committed code. If it is not in git, it does not go to the server.
- Tag each deploy: `git tag deploy-YYYY-MM-DD && git push --tags`.
