# School Government Bill Portal (Next.js)

An “official portal” style website for publishing a bill you wrote (full text + timeline + sponsors + references) using **React + Next.js**.

## Run locally

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build / production

```bash
npm run build
npm run start
```

## Update the bill text (main thing you’ll edit)

Edit:
- `content/bill.ts`

That one file controls:
- **Title / short title**
- **Status + last updated date**
- **Summary (Home + Bill pages)**
- **Full bill text** (as sections with paragraphs)
- **Sponsors**
- **Timeline**
- **References**
- **Footer disclaimer + contact email**

## Site pages

- `/` Home (summary + “Read the bill” CTA)
- `/bill` Full bill text with table of contents
- `/timeline` Milestones (introduced / committee / vote / etc.)
- `/sponsors` Sponsors list
- `/references` Supporting sources/citations
- `/about` Purpose + disclaimer
- `/contact` Contact email (from `content/bill.ts`)

## Project structure

- `src/app/` Next.js App Router pages and layout
- `src/components/` Shared UI components (header, footer, sections, TOC)
- `content/bill.ts` Bill content model + your bill data

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

1. Push this repo to GitHub and [import it in Vercel](https://vercel.com/new).
2. **Root Directory:** leave blank (use the repo root where `package.json` lives).
3. **Output Directory:** leave blank. Do **not** set a custom output directory (e.g. `out` or `dist`) or you’ll get 404s.
4. **Build Command:** `npm run build` (default).
5. **Install Command:** `npm install` (default).
6. Deploy. The project includes a `vercel.json` so the framework is detected as Next.js.

If you still get 404: in the Vercel project **Settings → General**, ensure **Root Directory** is empty, and under **Build & Development** ensure **Output Directory** is empty.
