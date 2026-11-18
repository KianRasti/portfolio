# GitHub Pages Deployment Guide

This document provides clear, step-by-step instructions for compiling and deploying your **Silicon & Screen** portfolio to GitHub Pages. It outlines both the automated **GitHub Actions** method (recommended) and the **Manual Build** method.

---

## 🛠️ Method A: Automated Deployment via GitHub Actions (Recommended)

Using GitHub Actions is the easiest way to deploy. Every time you push a code change to your `main` branch, GitHub will automatically build the React application and deploy it.

### Step 1: Create a GitHub Workflow Directory
Inside your project root directory on your machine, create a new folder structure:
```bash
mkdir -p .github/workflows
```

### Step 2: Create the Deploy Workflow File
Create a new file named `.github/workflows/deploy.yml` with the following content:

```yaml
name: Deploy Silicon & Screen Portfolio to GitHub Pages

on:
  push:
    branches:
      - main  # Set this to match your default branch (main or master)

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-node-version: 20
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Build Project
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist  # The folder the build script generates
          branch: gh-pages  # The branch that will host the static HTML files
```

### Step 3: Push to GitHub & Enable Pages
1. Push your repository files (including the newly created `.github/workflows/deploy.yml` file) to your main branch on GitHub:
   ```bash
   git add .
   git commit -m "Configure GitHub Actions deployment pipeline"
   git push origin main
   ```
2. Navigate to your repository on the GitHub website.
3. Click on **Settings** &gt; **Pages** (under Code and automation in the left sidebar).
4. Under **Build and deployment**, select:
   - **Source:** Deploy from a branch
   - **Branch:** `gh-pages` (Folder: `/ (root)`)
5. Click **Save**. Within 2-3 minutes, your portfolio will be live at `https://your-username.github.io/your-repo-name/`!

---

## 📦 Method B: Manual Build & Push (Alternative)

If you prefer not to use automatic pipelines, you can build the files locally and push them manually to a branch named `gh-pages`.

### Step 1: Install `gh-pages` helper package
Install the deployment utility package:
```bash
npm install gh-pages --save-dev
```

### Step 2: Add scripts to `package.json`
Open `/package.json` and add `predeploy` and `deploy` script commands under `"scripts"`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Step 3: Execute Deploy
Run the deployment command:
```bash
npm run deploy
```
This script will automatically trigger a production build, create a hidden `gh-pages` branch, commit your compiled `dist/` folder contents, and push it to your GitHub remote.

---

## 🔧 Path Resolutions for Custom Domains vs. Default Subdomain

### Case A: Custom Domain (e.g., `kianrasti.dev`)
Your site sits at the root (`/`), so your assets will resolve naturally.
- Keep `base` in `vite.config.ts` as:
  ```typescript
  base: '/'
  ```
- Inside `/public`, create a file named `CNAME` with no extension, containing only your custom domain:
  ```text
  kianrasti.dev
  ```

### Case B: Default Subdomain (e.g., `kianrasti.github.io/portfolio/`)
Vite needs to know the repository name directory offset in order to point assets to the correct path structure.
- Open `vite.config.ts` and set your `base` parameter to your repository name enclosed in slashes:
  ```typescript
  export default defineConfig({
    base: '/portfolio/', // Replace "portfolio" with your actual GitHub repository name
    plugins: [react(), tailwind()],
  })
  ```
