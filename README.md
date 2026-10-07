# BootRise Marketing Website

Interactive product marketing site for BootRise — *Build like you have a CTO.*

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Resend (waitlist)

## Getting started

```bash
npm install
cp .env.example .env.local
# Fill in RESEND_API_KEY, WAITLIST_TO_EMAIL, WAITLIST_FROM_EMAIL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Explore the Marketly interactive preview at `/demo`.

## Environment variables (Vercel / hosting)

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes | Resend API key |
| `WAITLIST_TO_EMAIL` | Yes | Inbox that receives signup notifications |
| `WAITLIST_FROM_EMAIL` | Recommended | Sender address. Must be on a [verified Resend domain](https://resend.com/domains) for production. Until then you can use `BootRise <onboarding@resend.dev>` (Resend test sender). |
| `NEXT_PUBLIC_DEMO_VIDEO_URL` | Optional | Loom share or embed URL. When set, the homepage video section plays it. |

## Deploy checklist (Vercel)

1. Push the repo and import the project in Vercel.
2. Add the env vars above in **Project → Settings → Environment Variables** (Production).
3. Deploy.
4. When your Loom is ready tonight, set `NEXT_PUBLIC_DEMO_VIDEO_URL` and redeploy (or trigger a redeploy after saving the env).

## Demo video

Leave `NEXT_PUBLIC_DEMO_VIDEO_URL` empty until the Loom is ready. Paste either the share or embed link — the site converts share links to embeds automatically.
