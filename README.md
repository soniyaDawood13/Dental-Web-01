# BrightSmile Dental — Next.js Website

## Setup
```bash
npm install
cp .env.local.example .env.local   # then fill in your SMTP details
npm run dev
```
Open http://localhost:3000

## Contact form emails
The appointment form on the site posts to `src/app/api/contact/route.ts`,
which sends you an email via Nodemailer/SMTP — no database, no third-party
form service. Fill in `.env.local` with your email provider's SMTP settings
(Gmail example included) and every submission lands straight in your inbox.

## Replacing the placeholder image
Every image on the site currently points to `public/images/placeholder.svg`.
Swap that one file for your own image (same filename, or update the path in
each component) to update the whole site at once.

## Structure
- `src/app/page.tsx` — assembles all sections
- `src/components/` — Navbar, Hero, Stats, Services, WhyChooseUs, Team, Testimonials, FAQ, ContactSection, Footer
- `src/app/api/contact/route.ts` — email-sending API route
