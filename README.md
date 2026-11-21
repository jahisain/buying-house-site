# Garment Buying House Website: Production Platform

A config-driven, high-performance B2B garment buying house website built for apparel sourcing and merchandising in Bangladesh.

The site is built with a **"name-later, photo-free launch architecture"**: the business name, domain, contact details, colors, fonts, and category data are entirely driven by configuration files. Rebranding or updating contact information requires changing only one file (`src/config/brand.ts`).

---

## 1. Tech Stack

- **Framework**: Next.js 14+ (App Router, Static-Site Generation)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (v3.4) with dynamic CSS design tokens
- **Typography**: Variable font loading via `next/font/google` (`Fraunces` serif headings, `Inter` sans-serif body)
- **Validation**: Zod schema validation (client and server)
- **Email Delivery**: Resend SDK with HTML templates and attachment support
- **Anti-Spam**: Cloudflare Turnstile security challenge + invisible honeypot field
- **SEO & Structured Data**: Dynamic `sitemap.ts`, `robots.ts`, Open Graph, Twitter cards, and Schema.org JSON-LD (Organization & Service)

---

## 2. Quick Start & Local Development

### Prerequisites
- Node.js 18.17+ (Node v20 or v24 recommended)
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install
```

### Environment Configuration

Copy the example environment file:
```bash
cp .env.example .env.local
```

Edit `.env.local` as needed:
```env
# Set to 'false' during development (adds noindex, nofollow)
NEXT_PUBLIC_ALLOW_INDEXING=false

# Optional in development (bypasses gracefully if unset)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
CLOUDFLARE_TURNSTILE_SECRET_KEY=

# Optional in development (logs RFQ submissions to terminal console if unset)
RESEND_API_KEY=
RESEND_FROM_EMAIL=
```

### Run Locally

```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 3. Building for Production

```bash
# Type check and lint
npm run lint

# Build production static bundle
npm run build

# Start local production preview
npm run start
```

---

## 4. Deployment Guides

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. In the Vercel dashboard, click **Add New > Project** and import the repository.
3. Keep default build settings:
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. Add Environment Variables under **Project Settings > Environment Variables**:
   - `NEXT_PUBLIC_ALLOW_INDEXING`: `true` (when ready for public indexing)
   - `NEXT_PUBLIC_TURNSTILE_SITE_KEY`: Your Cloudflare Turnstile public site key
   - `CLOUDFLARE_TURNSTILE_SECRET_KEY`: Your Cloudflare Turnstile secret key
   - `RESEND_API_KEY`: Your Resend API production key
   - `RESEND_FROM_EMAIL`: Verified sender address (e.g. `RFQ Desk <rfq@yourdomain.com>`)
5. Point your custom domain in Vercel DNS settings.

### Deploying to Netlify
1. Link your Git repository in Netlify.
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Configure environment variables in Netlify Site Configuration.

*Note on Serverless Upload Limits:* Vercel and Netlify impose a ~4.5 MB request payload limit on serverless functions. The RFQ form enforces a strict 4.0 MB file attachment cap and displays direct email instructions for larger tech packs.

---

## 5. Step-by-Step Rebranding Guide ("How to Rebrand")

When the business name, logo, and brand identity are finalized, follow this checklist to swap branding across the entire site with zero code changes:

### Step 1: Update Brand Configuration
Open [`src/config/brand.ts`](file:///e:/buying-house-site/src/config/brand.ts) and enter your finalized information:
```ts
export const brand = {
  name: 'Your Final Brand Name',
  legalName: 'Your Brand Name Limited',
  tagline: 'Your Verified Tagline',
  domain: 'yourdomain.com',
  email: {
    general: 'info@yourdomain.com',
    rfq: 'rfq@yourdomain.com'
  },
  phone: '+880 17XX XXXXXX',
  whatsapp: '+88017XXXXXXXX',
  address: {
    line1: 'Road XX, Sector XX, Uttara',
    city: 'Dhaka',
    country: 'Bangladesh'
  },
  social: {
    linkedin: 'https://linkedin.com/company/yourbrand',
    instagram: '',
    facebook: ''
  },
  colors: {
    primary: '#0F2A43',     // Deep Navy
    accent: '#C8963E',      // Warm Gold Accent
    accentText: '#8A6420',  // WCAG AA Compliant Dark Gold Text for Light Backgrounds
    surface: '#F7F5F0',     // Light Warm Gray / Off-White
    ink: '#14202B'          // Crisp Charcoal Text
  },
  fonts: { heading: 'Fraunces', body: 'Inter' },
  // ...
};
```

### Step 2: Swap Logo Files
Place SVG or PNG logo assets into the `/public/brand/` directory:
- `/public/brand/logo-light.svg` (for navy/dark backgrounds)
- `/public/brand/logo-dark.svg` (for light backgrounds)
- `/public/brand/mark.svg` (square mark / favicon)

*Note:* Until logo files exist, the built-in `<Wordmark />` component renders the brand name in styled typography across the header and footer.

### Step 3: Add Company Profile PDF (Optional)
Drop your completed corporate credentials PDF into:
- `/public/downloads/company-profile.pdf`
The "Download Company Profile" button on the Contact page will automatically appear once this file exists.

### Step 4: Add Real Photos (When Available)
When factory floor photos are taken, drop images into `/public/images/`. The current `<ImageSlot />` pattern placeholders provide a clean, textile-weave visual until real photography is introduced.

### Step 5: Enable Search Engine Indexing
1. In your production hosting dashboard, update `NEXT_PUBLIC_ALLOW_INDEXING=true`.
2. Redeploy the application.
3. Submit `https://yourdomain.com/sitemap.xml` to Google Search Console.

---

## 6. Content Management & Data Files

All product catalog and case study content lives in flat JSON files:

- **Categories**: [`content/categories.json`](file:///e:/buying-house-site/content/categories.json)
  - Edit MOQs, lead times, fabrications, and product types.
  - Static category pages are automatically generated from this file via `generateStaticParams`.
- **Case Studies**: [`content/case-studies.json`](file:///e:/buying-house-site/content/case-studies.json)
  - When empty (`[]`), the Case Studies page and its navigation link are hidden completely.
  - Adding case study objects automatically enables the navigation link and publishes `/case-studies`.
- **Navigation**: [`src/config/nav.ts`](file:///e:/buying-house-site/src/config/nav.ts)
  - Single source of truth for all desktop and mobile header and footer links.
- **Pre-Launch Checklist**: [`docs/TODO.md`](file:///e:/buying-house-site/docs/TODO.md)
  - Tracks all bracketed items that must be reviewed with factories and legal counsel before launch.

---

## 7. Accessibility & Compliance Verification

- **Color Contrast**: All text tokens meet or exceed WCAG AA contrast ratios (4.5:1 minimum; `accentText: #8A6420` achieves 4.89:1 against surface `#F7F5F0`).
- **Focus States**: High-contrast, visible keyboard focus rings (`focus-visible:ring-2 focus-visible:ring-brand-accent`) on all interactive buttons, inputs, and links.
- **Reduced Motion**: Full support for `prefers-reduced-motion: reduce`. All scroll animations and transitions are automatically disabled when requested by user OS settings.
- **Mobile Usability**: Thoroughly tested for viewports down to 360px with focus trapping and ESC key closing on the mobile drawer.
