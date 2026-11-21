import React from 'react';
import type { Metadata } from 'next';
import { AlertCircle } from 'lucide-react';
import { brand } from '@/config/brand';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: `Privacy Policy | ${brand.name}`,
  description: `Privacy policy and data protection practices for ${brand.name}. Information handling, tech pack security, and client confidentiality.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <Section variant="surface" spacing="md" className="border-b border-brand-primary/10">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-accent-text block">
              Legal Documentation
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-primary tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-brand-ink/80 font-body leading-relaxed">
              Effective Date: November 2026 &middot; Last updated: November 2026
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="white" spacing="lg">
        <Container size="narrow">
          {/* Clearly marked legal review placeholder banner */}
          <div className="mb-8 p-4 sm:p-5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
            <div className="text-xs sm:text-sm leading-relaxed">
              <strong>Pre-Launch Legal Notice:</strong> This privacy policy is a development draft prepared for {brand.name}. Have this document reviewed and finalized by qualified legal counsel in accordance with applicable Bangladesh data laws and international buyer jurisdictions prior to official commercial operations.
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-brand-ink/80 font-body leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-primary">
                1. Overview and Scope
              </h2>
              <p>
                {brand.legalName || brand.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy and confidentiality of our clients, prospective apparel buyers, factory partners, and website visitors. This Privacy Policy outlines how we collect, store, handle, and safeguard commercial inquiries, contact details, and proprietary design files submitted through {brand.domain}.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-primary">
                2. Information We Collect
              </h2>
              <p>
                As a B2B garment buying and merchandising agency, we collect information necessary to prepare costing sheets, factory evaluations, and production proposals. This includes:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li><strong>Contact Information:</strong> Full name, corporate email address, business phone/WhatsApp number, company name, and country.</li>
                <li><strong>Product Specifications & RFQ Data:</strong> Target garment categories, quantity requirements, price targets, construction details, and delivery timelines.</li>
                <li><strong>Technical Files & Artwork:</strong> Tech packs, spec sheets, Bill of Materials (BOM), CAD files, and label artwork uploaded through our forms or sent via email.</li>
                <li><strong>Technical Usage Data:</strong> Anonymized server logs, browser type, and page access timestamps to ensure security and prevent automated form spam.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-primary">
                3. Protection of Tech Packs & Proprietary Designs
              </h2>
              <p>
                We understand that apparel tech packs and design specifications represent valuable intellectual property. Any design file, pattern, or technical pack shared with {brand.name} is treated with strict commercial confidentiality:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>Your designs are shared only with audited partner factories that have executed commercial non-disclosure agreements (NDAs) for sampling and costing purposes.</li>
                <li>We do not resell, publicly display, or transfer your proprietary patterns or brand trademarks to third parties.</li>
                <li>Should an inquiry not proceed to production, design files may be permanently removed from our active servers upon written request.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-primary">
                4. How We Use Collected Data
              </h2>
              <p>
                We process your information exclusively for legitimate commercial purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>Evaluating production feasibility, material consumption, and factory capacities.</li>
                <li>Generating accurate, itemized quotation and costing sheets.</li>
                <li>Coordinating prototype sample development, fit approvals, and shipping schedules.</li>
                <li>Communicating critical order status and milestone progress reports.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-primary">
                5. Data Security & Storage
              </h2>
              <p>
                We implement industry-standard encryption (TLS/HTTPS), secure cloud infrastructure, and access-controlled mail servers to prevent unauthorized access, alteration, or interception of your commercial communications.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-primary">
                6. Contact for Privacy & Legal Requests
              </h2>
              <p>
                For questions regarding this policy, data deletion requests, or formal Non-Disclosure Agreement (NDA) execution, please contact our administrative office:
              </p>
              <div className="p-4 rounded-lg bg-brand-surface border border-brand-primary/10 text-sm space-y-1">
                <p><strong>{brand.legalName || brand.name}</strong></p>
                <p>Location: {brand.address.line1}, {brand.address.city}, {brand.address.country}</p>
                <p>Email: <a href={`mailto:${brand.email.general}`} className="text-brand-accent-text hover:underline">{brand.email.general}</a></p>
                {brand.phone && <p>Phone: {brand.phone}</p>}
              </div>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
