# Brand & Launch Confirmation Checklist (TODO)

This document tracks items marked in square brackets `[...]` from `docs/SPEC.md` that must be confirmed by the owner before launch. None of these placeholders appear as visible brackets on the public website.

---

## 1. Brand Identity & Contact Details
- [ ] **Business Name (`brand.name`)**: Confirm final business name (currently `[Brand Name]`).
- [ ] **Legal Entity (`brand.legalName`)**: Confirm legal entity name (currently `[Brand Name] Limited`).
- [ ] **Office Address (`brand.address.line1`)**: Confirm physical office address in Dhaka, Bangladesh (currently `[Office address]`).
- [ ] **Phone & WhatsApp (`brand.phone`, `brand.whatsapp`)**: Supply working phone and WhatsApp contact numbers.
- [ ] **Emails (`brand.email.general`, `brand.email.rfq`)**: Register and configure production domain emails.
- [ ] **Logo Files**: Provide SVG files for `/public/brand/logo-light.svg`, `logo-dark.svg`, and `mark.svg` once branding is final.

---

## 2. Positioning & Value Proposition (Home / Why Work With Us)
- [ ] **Operational Deliverables**:
  - Review the "Why Work With Us" points:
    1. Single point of contact between buyer and factory.
    2. Vetted factory network in Bangladesh.
    3. Transparent costing breakdown.
    4. In-line and final QC inspections (AQL 2.5).
    5. Daily/weekly proactive communication across time zones.
  - *Rule*: Keep only what you can honestly and reliably deliver at launch.

---

## 3. Product Categories & Capabilities (Phase 2)
- [ ] **MOQ (Minimum Order Quantity)**: Confirm realistic minimum order quantities per style/color for each category:
  - Knit: typical MOQ per style.
  - Woven: typical MOQ per style.
  - Denim: typical MOQ per style/wash.
  - Sweaters: typical MOQ per gauge/style.
  - Outerwear: typical MOQ per style.
- [ ] **Lead Times**: Confirm sampling lead times (typically 7–14 days) and production lead times (typically 45–90 days depending on fabric availability).

---

## 4. Factory Network & Compliance (Phase 3)
- [ ] **Factory Permissions**: Obtain explicit written permission from partner factories before naming them or showcasing their premises on the site.
- [ ] **Capacity Figures**: Confirm actual monthly/annual production capacity ranges across knit, woven, denim, sweater, and outerwear facilities.
- [ ] **Certifications**: Add partner-factory certifications (BSCI, WRAP, OEKO-TEX, GOTS, SEDEX) to `brand.certifications` *only* after verifying active certificates.

---

## 5. Company Story & Team (Phase 3)
- [ ] **Founder Story**: Supply the founder's background in garment merchandising and quality control.
- [ ] **Team & Organization**: Confirm key roles (merchandisers, QC inspectors, logistics leads).

---

## 6. Legal & Pre-Launch Compliance (Phase 3 & 5)
- [ ] **Privacy Policy**: Have a legal advisor review the website Privacy Policy (covering RFQ data and tech pack uploads).
- [ ] **Terms of Service**: Have a legal advisor review commercial terms and jurisdiction (Dhaka, Bangladesh).
- [ ] **Indexing**: Toggle `NEXT_PUBLIC_ALLOW_INDEXING=true` in production environment variables once custom domain and content are verified.
