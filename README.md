# Fulshear Roofing — website

Marketing site for **Fulshear Roofing**, built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS. Content reflects the public site at [fulshearroof.com](https://fulshearroof.com).

## Local development

Prerequisites: [Node.js](https://nodejs.org/) 20+ (or the version your team standardizes on).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Edit copy in [`content/site.ts`](content/site.ts) and layout in [`app/page.tsx`](app/page.tsx) and [`components/`](components/).

Other commands:

```bash
npm run build   # production build
npm run start   # run production server locally
npm run lint    # ESLint
```

## Deploy with GitHub and Vercel

Use the **same Google/email account** on both products (for example **tiescreativeagency@gmail.com**) so Vercel can install the GitHub app and import private repos without friction.

1. **Sign in to GitHub** at [github.com](https://github.com) as the account that should own the repo (e.g. Ties Creative or the org tied to **tiescreativeagency@gmail.com**).
2. **Create a new repository** (empty, no README): **New repository** → name it (e.g. `fulshear-roofing`) → **Create repository**.
3. **Push this project** from your machine in the project folder (replace `YOUR_ORG` and `YOUR_REPO` with the GitHub owner and repo name):

   ```bash
   cd "/Users/elnino/Documents/Fulshear Roofing"
   git remote add origin https://github.com/YOUR_ORG/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

   If `origin` already exists, use `git remote set-url origin https://github.com/YOUR_ORG/YOUR_REPO.git` instead of `add`.

4. **Import the repo in Vercel**
   - Sign in at [vercel.com](https://vercel.com) with **Continue with Google** using **tiescreativeagency@gmail.com** (or the email linked to that Vercel team).
   - When asked, **authorize the Vercel GitHub App** for the account/org that holds the repo.
   - Choose **Add New… → Project** and **Import** your GitHub repository.
   - Framework preset: **Next.js** (auto-detected). Root directory: **`.`** (repository root).
   - Click **Deploy**. Production updates run on every push to the branch you connect (usually `main`).

5. **Optional: production URL for metadata**
   - In Vercel → Project → **Settings → Environment Variables**, add `NEXT_PUBLIC_SITE_URL` with your canonical URL (for example `https://www.your-domain.com`).
   - Redeploy so Open Graph URLs use the right base. If unset, the app defaults to `https://fulshearroof.com` for `metadataBase`.

6. **Custom domain**
   - In Vercel → **Settings → Domains**, add your domain and follow DNS instructions from Vercel.

## Project structure

| Path | Purpose |
|------|---------|
| [`app/layout.tsx`](app/layout.tsx) | Root layout, fonts, SEO metadata |
| [`app/page.tsx`](app/page.tsx) | Home page sections |
| [`content/site.ts`](content/site.ts) | Phone, address, services, service areas, and other copy |
| [`components/`](components/) | Header, hero, services, areas search, footer |

## License

Private — for Fulshear Roofing use.
