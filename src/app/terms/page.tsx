import React from 'react';
import type { Metadata } from 'next';
import { AlertCircle } from 'lucide-react';
import { brand } from '@/config/brand';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: `Terms of Service & Commercial Conditions | ${brand.name}`,
  description: `Standard commercial terms, sampling conditions, quotation validity, and order execution terms for ${brand.name} in Bangladesh.`,
};

export default function TermsOfServicePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

      <Section variant="surface" spacing="md" className="border-b border-brand-primary/10">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-accent-text block">
              Commercial Terms
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-primary tracking-tight">
              Terms of Service
            </h1>
            <p className="text-sm sm:text-base text-brand-ink/80 font-body leading-relaxed">
              Standard commercial terms governing quotations, sampling, merchandising representation, and orders.
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
              <strong>Pre-Launch Legal Notice:</strong> These Terms of Service represent a standard draft. Commercial apparel contracts, Letters of Credit (L/C) requirements, and jurisdiction clauses should be reviewed by qualified legal counsel prior to formal execution of commercial purchase orders.
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-brand-ink/80 font-body leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-primary">
                1. Acceptance of Terms & Agency Role
              </h2>
              <p>
                By engaging {brand.legalName || brand.name} (&ldquo;the Company&rdquo;) for apparel sourcing, sample development, quality inspection, or merchandising services, the client (&ldquo;Buyer&rdquo;) agrees to the general commercial terms set forth herein. Specific production orders are governed by mutually signed Purchase Orders (POs) and formal commercial contracts.
              </p>
              <p>
                {brand.name} operates as an accountable buying, sourcing, and quality assurance liaison in Bangladesh, representing the buyer&apos;s technical and commercial interests with vetted manufacturing facilities.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-primary">
                2. Quotations, Pricing & Validity
              </h2>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li><strong>Validity Window:</strong> Unless otherwise specified in writing, all FOB price quotations remain valid for 15 calendar days due to fluctuations in global cotton, yarn, synthetic fiber, and currency exchange markets.</li>
                <li><strong>Basis of Quotation:</strong> Costings are calculated based on the specifications, fabric GSM, order quantities, and size breakdowns provided in the buyer&apos;s tech pack. Any subsequent alteration to design, fabric blend, or quantity may result in revised pricing.</li>
                <li><strong>Incoterms:</strong> Standard quotations are provided on an FOB (Free on Board) Chattogram (Chittagong) Port or FOB Dhaka Airport basis unless CIF/DDP terms are explicitly negotiated in writing.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-primary">
                3. Sampling & Development
              </h2>
              <p>
                Proto samples and development samples are engineered following the buyer&apos;s technical instructions:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>Proto sample charges, courier costs, and specialized strike-off / screen setup fees may apply for new developments and are agreed prior to sampling commencement.</li>
                <li>Bulk manufacturing will not proceed without signed Pre-Production (PP) sample approval or written golden seal authorization from the buyer.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-primary">
                4. Quality Standards & Inspections
              </h2>
              <p>
                All production orders are monitored under the agreed quality standards outlined in our technical agreement:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>Final inspections are conducted per ANSI/ASQ Z1.4 (ISO 2859-1) Normal Single Sampling Plan Level II with standard AQL 2.5 Major / 4.0 Minor tolerances (or stricter buyer-specified protocols).</li>
                <li>In the event an inspection fails AQL thresholds, the partner factory is required to re-inspect, 100% sort, or rectify defective units at its expense prior to re-inspection and vessel release.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-primary">
                5. Payment Terms & Commercial Financing
              </h2>
              <p>
                Standard international trade payment methods accepted include:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>Irrevocable, confirmed Letter of Credit (L/C) at sight opened through a recognized international prime bank.</li>
                <li>Telegraphic Transfer (T/T) with an agreed advance deposit upon purchase order confirmation and balance against original shipping documents.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-primary">
                6. Governing Law & Jurisdiction
              </h2>
              <p>
                These terms and any disputes arising out of commercial engagements with {brand.name} shall be governed by and construed in accordance with the laws of Bangladesh. The courts of Dhaka, Bangladesh shall have jurisdiction, without prejudice to international commercial arbitration provisions agreed in specific contracts.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-primary">
                7. Inquiries & Contact
              </h2>
              <p>
                For questions concerning commercial contracts or formal supplier representation agreements:
              </p>
              <div className="p-4 rounded-lg bg-brand-surface border border-brand-primary/10 text-sm space-y-1">
                <p><strong>{brand.legalName || brand.name}</strong></p>
                <p>Address: {brand.address.line1}, {brand.address.city}, {brand.address.country}</p>
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
