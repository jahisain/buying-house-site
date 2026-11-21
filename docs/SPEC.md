# Garment Buying House Website: Build Pack for Antigravity

Prepared for Jahid. Config-driven build, so the business name, logo and contact details can be swapped in at the end with a one-file change.

## 1. Positioning

**Who the site must convince:** sourcing managers and merchandisers at brands and importers in the EU, US, UK and beyond. They are comparing you to dozens of other Bangladeshi buying houses and need to feel three things within 30 seconds: you are organized, you understand quality and compliance, and you are easy to work with.

**Core message:** One accountable partner between your brand and Bangladesh's best factories. We handle sourcing, sampling, quality and shipping.

**Secondary audience:** factories that want to join your network (a small, separate 'Partner with us' page is enough).

**Honesty rules for launch (you have no certifications, photos or track record yet):**

- Never invent certifications, client logos, order counts or years of experience.
- Sections for certifications, case studies, client logos and statistics are built to hide automatically when their data is empty.
- Partner-factory certifications can be shown only if the factories actually hold them and have confirmed it to you.
- Use clean typography, process diagrams and category illustrations in place of photos until real photos exist.

## 2. Tech stack

- **Next.js (App Router) + TypeScript + Tailwind CSS.** Static-first for speed and SEO, which matters for buyer search traffic.
- **Content in files** (`/content/*.json` or MDX), not a database. No CMS at launch; editing a file and redeploying is enough.
- **Forms:** Next.js API route sending email through Resend (or Formspree as a no-code fallback). Spam protection with a honeypot field plus Cloudflare Turnstile.
- **Hosting:** Vercel or Netlify, with the domain pointed after the name is final.
- **Analytics:** Plausible or Google Analytics, loaded only after the owner supplies an ID.

**Known limit:** serverless hosts cap request size (about 4.5 MB on Vercel). The RFQ form accepts attachments up to 4 MB total and shows an email address for larger tech packs. Direct-to-storage upload (Cloudflare R2 or UploadThing) is a later upgrade.

## 3. The brand config (the key to the name-later plan)

Everything brand-specific lives in `src/config/brand.ts`. No page, component or metadata file may hardcode the business name, tagline, contact details, colors or logo paths.

```ts
export const brand = {
  name: '[Brand Name]',
  legalName: '[Brand Name] Limited',
  tagline: 'Your sourcing partner in Bangladesh',
  domain: 'example.com',
  email: { general: 'info@example.com', rfq: 'rfq@example.com' },
  phone: '+880-XXXX-XXXXXX',
  whatsapp: '+880XXXXXXXXXX',
  address: { line1: '[Office address]', city: 'Dhaka', country: 'Bangladesh' },
  social: { linkedin: '', instagram: '', facebook: '' },
  colors: { primary: '#0F2A43', accent: '#C8963E', surface: '#F7F5F0', ink: '#14202B' },
  fonts: { heading: 'Fraunces', body: 'Inter' },
  logo: { light: '/brand/logo-light.svg', dark: '/brand/logo-dark.svg', mark: '/brand/mark.svg' },
  seo: { titleTemplate: '%s | [Brand Name]', description: '[Brand Name] is a Bangladesh-based garment buying house sourcing knit, woven, denim, sweater and outerwear for global brands.' },
  stats: [],            // only real numbers; section hides when empty
  certifications: [],   // only verified; section hides when empty
  clients: [],          // only with permission; section hides when empty
};
```

Colors and fonts above are starting defaults and can change when the logo is final. A `<Wordmark />` component renders the name as styled text until a real logo file exists.

## 4. Sitemap and page copy

All copy below uses the brand name through the config. Items in \[square brackets\] are for you to confirm.

**Home**

- Hero: *From Bangladesh's best factories to your shelves: sourced, quality-controlled, delivered.* Sub: *One accountable partner for knit, woven, denim, sweater and outerwear sourcing.* Buttons: Request a Quote / Explore Categories.
- Strip of what we do: Sourcing, Development, Quality, Compliance, Logistics.
- Product categories grid (five cards).
- How we work: six-step timeline.
- Why work with us: single point of contact, vetted factory network, transparent costing, in-line and final quality checks, clear communication across time zones. \[Keep only what you can honestly deliver.\]
- Stats, certifications and clients: render only if the config has data.
- Closing call to action: *Send us your tech pack. We'll come back with factory options and costing.*

**About:** who you are, why you started, your approach to quality and ethics, and a short 'Based in Dhaka, working worldwide' section. \[Founder story and team: you supply.\]

**Services** (one page, six sections with anchors): Sourcing and factory matching; Product development and sampling; Quality control and inspection; Compliance and social audit coordination; Production follow-up and merchandising; Logistics and shipping coordination.

**Product categories** (index plus one page per category): Knit (T-shirts, polos, hoodies, joggers, activewear), Woven (shirts, trousers, shorts, jackets), Denim (jeans, jackets, washes and finishes), Sweaters (flat knit, cut and sew, gauges), Outerwear (puffers, parkas, shells, fleece). Each page: product types, fabrics and techniques, typical MOQ \[confirm\], lead time \[confirm\], and an RFQ button prefilled with the category.

**How we work:** 1) Brief and tech pack, 2) Factory matching and costing, 3) Sampling and approval, 4) Production with in-line QC, 5) Final inspection, 6) Shipping and documentation. Each step states what the buyer provides and what you deliver.

**Factory network:** capability overview by category (not factory names unless the factories agree), capacity ranges \[confirm\], and your vetting criteria. Includes a 'Factories: join our network' form.

**Compliance and quality:** your QC process (inline, midline, final), AQL standards, how you handle audits and social compliance. Partner certifications appear only if verified.

**Case studies:** hidden until you have real ones.

**Contact and RFQ:** the RFQ form (see below), office address, WhatsApp, email, a map embed, and business hours with a time-zone note.

**Legal:** Privacy Policy, Terms. \[Have these reviewed before launch.\]

## 5. Feature spec

- **RFQ form:** name, company, email, phone/WhatsApp, country, product category (multi-select), style description, estimated quantity per style, target price (optional), target delivery date, file attachment (tech pack, up to 4 MB), message. Server-side validation, honeypot plus Turnstile, confirmation email to the sender, notification to `brand.email.rfq`, and a success state.
- **Floating WhatsApp button** on all pages, using `brand.whatsapp`.
- **Downloadable company profile (PDF):** a link slot that stays hidden until a file is placed at `/public/downloads/company-profile.pdf`.
- **Section auto-hide** for stats, certifications, clients and case studies when empty.
- **Category pages generated** from `/content/categories.json`.
- **Sticky header** with a persistent 'Request a Quote' button, mobile menu, and footer with contact and legal links.
- **SEO:** per-page metadata from config, Open Graph images, sitemap.xml, robots.txt, JSON-LD for Organization and Service, clean URLs, and target keywords such as 'garment buying house Bangladesh', 'knitwear sourcing Bangladesh', 'denim sourcing Bangladesh'.
- **Performance and accessibility:** Lighthouse 90+ on all four scores, WCAG AA contrast, keyboard navigation, alt text, reduced-motion support.
- **Language:** English only at launch; structure text so other languages can be added later.

## 6. Design direction

B2B credibility, not retail. Deep navy primary with a restrained warm accent, generous whitespace, a serif for headings and a clean sans for body. Subtle motion only (fade and slide on scroll, hover states). Photo-free launch plan: large typography, thin-line category icons or fabric-weave patterns, numbered process steps, and an `<ImageSlot />` component that renders a tasteful pattern placeholder until real photos are dropped into `/public/images`. Layout must feel premium on mobile, since many buyers will open the link on a phone.

## 7. How to run this in Antigravity

1. Create a new repo and add this whole document as `docs/SPEC.md`.
2. Give the agent **one phase at a time**. For each phase, ask it to show a short plan first, approve it, then let it build.
3. After each phase, run the site, check it in the browser, and send me screenshots or notes. I'll audit them against this spec and write exact fix prompts.
4. Commit to git after each approved phase so you can roll back.

### Phase 0: Foundation

```
Read docs/SPEC.md fully. Build Phase 0 only.
- Scaffold Next.js (App Router), TypeScript, Tailwind.
- Create src/config/brand.ts exactly as specified in section 3 of the spec.
- Set up design tokens from brand.colors and brand.fonts as CSS variables and Tailwind theme values.
- Build layout: Header (Wordmark, nav, sticky Request a Quote button, mobile menu), Footer (contact info, legal links), floating WhatsApp button.
- Build components: Wordmark (styled text from brand.name), ImageSlot (pattern placeholder), Button, Section, Container.
- Rule: do not hardcode the business name, tagline, contact details, colors or logo paths anywhere. Everything comes from brand.ts.
- Show your plan first, wait for approval, then build. Finish with a summary of files created.
```

### Phase 1: Home page

```
Build the Home page per section 4 of docs/SPEC.md.
- Sections: hero, what-we-do strip, product categories grid, six-step How We Work timeline, Why Work With Us, closing call to action.
- Stats, certifications and clients sections must render only if their arrays in brand.ts are non-empty.
- Use the exact copy from the spec; bracketed items stay as visible TODO markers in a /docs/TODO.md list, not on the page.
- Subtle scroll animations with prefers-reduced-motion support. Mobile-first.
- No stock-photo claims, no invented numbers.
```

### Phase 2: Services, categories, process

```
Build Services, Product Categories (index and dynamic pages) and How We Work.
- Create /content/categories.json with Knit, Woven, Denim, Sweaters, Outerwear (product types, fabrics, MOQ and lead time as clearly marked placeholders).
- Generate category pages from that file with generateStaticParams. Each has an RFQ button that links to /contact?category=<slug>.
- Services page with six anchored sections. How We Work page with the six steps, each stating what the buyer provides and what we deliver.
- Add breadcrumb navigation and per-page metadata from brand.ts.
```

### Phase 3: About, Factory Network, Compliance, Case Studies

```
Build About, Factory Network, Compliance and Quality, and Case Studies.
- Case Studies page and its nav link must be hidden entirely when /content/case-studies.json is empty.
- Factory Network: capability overview by category, vetting criteria, and a 'Join our network' form (reuse the form components from Phase 4 if present, otherwise stub them).
- Compliance page: QC process (inline, midline, final), AQL explanation. Certifications appear only from brand.certifications.
- Add Privacy Policy and Terms pages with clearly marked placeholder text.
```

### Phase 4: Contact and RFQ

```
Build the Contact page and RFQ form per section 5 of docs/SPEC.md.
- Fields as specified. Prefill category from the query string.
- Client and server validation (zod). Honeypot field plus Cloudflare Turnstile (read keys from env vars; skip gracefully if unset in dev).
- API route sends two emails through Resend: confirmation to the sender, notification to brand.email.rfq. Read keys from env vars.
- Attachments up to 4 MB total; if larger, show the email address and instructions.
- Success and error states, loading state, and accessible error messages.
- Add .env.example listing every variable. Never commit secrets.
```

### Phase 5: SEO, performance, QA, deploy

```
Final pass.
- Metadata, Open Graph, sitemap.xml, robots.txt, JSON-LD (Organization, Service), canonical URLs, all driven by brand.ts.
- Run Lighthouse; fix anything under 90 in any category.
- Accessibility audit: contrast, focus states, labels, alt text, keyboard nav.
- Check responsive layouts at 360, 768 and 1280 widths.
- Search the whole repo and confirm the business name, domain and contact details appear ONLY in src/config/brand.ts and /content files. Report any leaks and fix them.
- Write README with run, build, deploy and 'how to rebrand' steps.
- Do not publish indexing: add noindex until I switch it off via an env variable.
```

## 8. Swap-in checklist (when the name is final)

1. Edit `src/config/brand.ts` (name, domain, emails, phone, colors, fonts).
2. Drop logo files into `/public/brand`.
3. Add real photos into `/public/images` (shot list below).
4. Set the production environment variables and domain.
5. Remove the noindex flag, submit the sitemap to Google Search Console.

## 9. Photo and logo briefs

**Shot list for factory visits (a phone with good light is enough to start):** production floor wide shots, cutting and sewing close-ups with workers' consent, QC table in action, fabric rolls and trims, finished garments laid flat by category, sample room, packing and loading, and a portrait of you or your team at work. Shoot in landscape and in daylight where possible.

**Logo brief:** a wordmark first, with an optional simple mark. Navy with a warm accent works well on both light and dark backgrounds. It must stay legible at 24 px height for the header and in a single color for stamps and email signatures. Avoid needle-and-thread clichés and flag motifs.

## 10. Before launch

- Confirm every MOQ, lead time and capacity figure with your factories.
- Get factory permission before naming or showing them.
- Have Privacy Policy and Terms reviewed.
- Register the domain and business email once the name is final.
- Plan to add real certifications, photos and case studies as you earn them; the site is built to show each the moment the data exists.
