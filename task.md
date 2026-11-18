# Silicon & Screen Portfolio — Launch Checklist

This document tracks the tasks required to finalize, optimize, and upload Kian Rasti's personal portfolio website to GitHub Pages under your custom domain (or default `github.io` subdomain).

---

## 🚀 Pre-Launch Engineering Tasks

### 1. Resume / CV asset injection
- [ ] Place your official résumé PDF inside the public folder of the project.
- [ ] Rename the file to `kian_rasti_cv.pdf` (or update the file name in `src/App.tsx`).
- [ ] Run a local compile build to verify that clicking the **Résumé** or **Download CV** buttons triggers a direct download of the asset.

### 2. Social & Communication Channel Binding
- [ ] Inside `src/App.tsx`, update the GitHub profile hyperlinks from `https://github.com` to your real GitHub handle (e.g. `https://github.com/kianrasti`).
- [ ] Update the copy-to-clipboard email from `hello@kianrasti.dev` to your active email, or purchase/configure the workspace domain inbox on Google Workspace/Cloudflare.
- [ ] *(Optional)* Integrate an active email service like [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/) inside the `ContactForm.tsx` component if you want real contact submissions routed directly to your inbox. Currently, it runs a terminal-like encryption animation payload which is highly engaging and responsive.

### 3. Portrait Image Hosting & Verification
- [ ] The portrait photo is currently hotlinked using a public Google Content URL (`https://lh3.googleusercontent.com/...`). To avoid potential rate limits or expired session links in the future, save this portrait image directly inside your repository.
- [ ] Download the portrait image and save it under `/public/images/portrait.jpg`.
- [ ] Update the `img src` reference in `src/App.tsx` from the Google URL to `/images/portrait.jpg`.

---

## 🌐 Domain & GitHub Pages Setup

### 4. Vite Base Path Verification
- [ ] If you are deploying to a custom domain (e.g. `kianrasti.dev`), keep the `base` configuration in `vite.config.ts` as `'/'`.
- [ ] If you are deploying to the default free user subdomain (e.g. `username.github.io/repository-name/`), make sure to configure `base: '/repository-name/'` inside `vite.config.ts` so that your static asset paths resolve correctly.

### 5. DNS Custom Domain Mapping
- [ ] In your domain registrar account (e.g. Cloudflare, Namecheap, Google Domains), set up an **A record** pointing to GitHub Pages server IP addresses:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- [ ] Add a **CNAME record** pointing `www` to `your-username.github.io`.
- [ ] Add a `CNAME` file inside the `public/` directory of your repository containing only your domain name (e.g., `kianrasti.dev`) so GitHub Pages registers it automatically upon every build.

---

## 📈 Search Engine Optimization (SEO) & Analytics

### 6. Search Console & Sitemap Submission
- [ ] Generate a static `sitemap.xml` inside `/public/sitemap.xml` listing your landing page.
- [ ] Create a `robots.txt` file in `/public/robots.txt` allowing search engines to index all assets.
- [ ] Submit the URL to **Google Search Console** to accelerate indexing and search discoverability.
