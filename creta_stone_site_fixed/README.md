# Creta Stone — Next.js Starter (Luxury Dark Theme)

This project is a ready-to-deploy Next.js starter for Creta Stone.

## What's included
- Next.js pages and API routes (inventory, quotes)
- TailwindCSS setup (see tailwind.config.js)
- Luxury dark theme and responsive layout
- Slider component with 10 placeholder images (in `/public/images`)
- Placeholder logo `/public/logo1 face.png` (copied from your uploaded logo if available)

## How to run locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000

## Notes
- Replace placeholder images in `/public/images` with real project photos.
- For persistent storage, integrate a database (SQLite + Prisma recommended).
- To receive quote notifications by email, integrate SendGrid or SMTP in `/pages/api/quote.js`.

## ZIP Location
The project zip is available at `/mnt/data/creta_stone_site.zip`
