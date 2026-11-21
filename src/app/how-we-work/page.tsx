import React from 'react';
import type { Metadata } from 'next';
import {
  FileText,
  DollarSign,
  Scissors,
  Layers,
  CheckSquare,
  Ship,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { brand } from '@/config/brand';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FadeIn } from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: `How We Work — Our Sourcing Process | ${brand.name}`,
  description: `Our 6-step apparel sourcing and manufacturing process in Bangladesh. From tech packs and costing to in-line QC inspections and port clearance.`,
};

const processSteps = [
  {
    step: '01',
    icon: FileText,
    title: 'Brief and Tech Pack',
    duration: '1–2 Days',
    summary:
      'Every successful production begins with unambiguous technical clarity. We review your design files, measurements, and target standards to map an exact manufacturing blueprint.',
    buyerProvides: [
      'Tech pack including flat sketches, POM (points of measure), and graded spec sheets',
      'Bill of Materials (BOM) indicating yarn, fabric composition, weights (GSM), and trim specs',
      'Target quantity breakdown per colorway, size distribution, and desired delivery window',
      'Packaging and labeling guidelines (hangtags, care labels, barcode polybags)',
    ],
    weDeliver: [
      'Thorough technical feasibility review and pattern construction check',
      'Yarn and fabric availability assessment with regional Bangladesh mills',
      'Initial production timeline mapping and risk factor identification',
      'Clarification questions and recommendations on construction efficiency',
    ],
  },
  {
    step: '02',
    icon: DollarSign,
    title: 'Factory Matching and Costing',
    duration: '2–4 Days',
    summary:
      'We pair your orders with vetted, compliant partner factories specialized in your specific garment silhouette and negotiate completely transparent, open-book costing.',
    buyerProvides: [
      'Target FOB price expectations or acceptable price bracket',
      'Required compliance audits (BSCI, SMETA, WRAP, OEKO-TEX, GOTS)',
      'Preferred currency and international commercial terms (FOB Chittagong/Dhaka)',
    ],
    weDeliver: [
      'Evaluation and selection of 2–3 suitable partner factories matching capacity and compliance',
      'Itemized transparent cost breakdown (fabric, trims, cut-and-make CM, washing, packing)',
      'Fabric lead times, minimum milling quantities, and surcharges for smaller runs',
      'Factory audit status summary and proof of current certification renewals',
    ],
  },
  {
    step: '03',
    icon: Scissors,
    title: 'Sampling and Approval',
    duration: '7–14 Days',
    summary:
      'We physically validate every dimension, drape, and color before bulk yarn or fabric is cut. Our sample merchandisers oversee pattern cutting, fit testing, and finishing.',
    buyerProvides: [
      'Fit comments, measurement corrections, and technical pattern revision requests',
      'Color standard swatches (Pantone TCX / TPX codes) for lab dip approval',
      'Printed artwork strike-off and embroidery swatch feedback',
      'Final Golden Sample / Pre-Production (PP) sign-off',
    ],
    weDeliver: [
      'Proto sample / 1st fit sample tailored to your measurement specs',
      'Lab dips under 3 designated light sources (D65 primary, TL84/CWF store lighting)',
      'Artwork strike-offs, print strike-offs, and wash blanket shade bands',
      'Complete size-set samples and sealed PP sample with full measurement audit log',
    ],
  },
  {
    step: '04',
    icon: Layers,
    title: 'Production with In-Line QC',
    duration: '45–75 Days',
    summary:
      'Continuous daily monitoring on the factory floor. We catch deviations early during fabric knitting/weaving, cutting, and sewing—not at the end of the line.',
    buyerProvides: [
      'Official Purchase Order (PO) sign-off and LC establishment / deposit payment',
      'Approved PP sample and signed technical specification sheet',
      'Barcode master data and carton marking artwork approvals',
    ],
    weDeliver: [
      'Raw material inspection using the 4-Point System before fabric spreading begins',
      'Cutting room checks (ply count, tension, notch accuracy, bundling verification)',
      'Continuous in-line QC (DUPRO) monitoring needle holes, seam tension, and SPI (stitches per inch)',
      'Weekly Work-In-Progress (WIP) tracking reports with real photos from the production line',
    ],
  },
  {
    step: '05',
    icon: CheckSquare,
    title: 'Final Inspection',
    duration: '2–3 Days Prior to Ex-Factory',
    summary:
      'Our dedicated quality engineers execute rigorous final random inspections per international standards before any cartons are sealed or loaded for transit.',
    buyerProvides: [
      'Confirmation of inspection protocol and agreed AQL standards (typically AQL 2.5)',
      'Consignee shipping mark confirmations and palletization preferences',
    ],
    weDeliver: [
      'Final Random Inspection (FRI) per ANSI/ASQ Z1.4 / ISO 2859-1 standards',
      'Comprehensive digital inspection report: workmanship, critical/major/minor defect count',
      'Full size-spec measurement verification across all graded sizes',
      'Barcode scannability check, carton drop tests, and metal detection certification',
    ],
  },
  {
    step: '06',
    icon: Ship,
    title: 'Shipping and Documentation',
    duration: 'Export & Vessel Dispatch',
    summary:
      'Smooth transit from factory floor to port of departure. We coordinate inland trucking, customs paperwork, forwarder handoff, and export clearance.',
    buyerProvides: [
      'Freight forwarder nomination and local forwarding agent contact info',
      'Consignee details, Notify Party, and port of destination (POD) instructions',
      'Special customs tariff documentation requests (GSP Form A, EUR.1 where applicable)',
    ],
    weDeliver: [
      'Factory container loading supervision and security bolt-seal verification',
      'Commercial Invoice, detailed Packing List, and Certificate of Origin (COO)',
      'Customs export clearance processing at Chattogram Port or Dhaka Airport (DAC)',
      'Bill of Lading (B/L) tracking and departure confirmation notification',
    ],
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'How We Work' }]} />

      {/* Hero */}
      <Section variant="surface" spacing="md" className="border-b border-brand-primary/10">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-accent-text block">
              Operational Roadmap
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-primary tracking-tight">
              Our Sourcing & Production Process
            </h1>
            <p className="text-base sm:text-lg text-brand-ink/80 font-body leading-relaxed">
              Transparent, repeatable, and disciplined. Here is exactly what happens at every step—defining what you supply and what our team delivers in Bangladesh.
            </p>
          </div>
        </Container>
      </Section>

      {/* Process Steps */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="space-y-12 sm:space-y-16">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <FadeIn key={step.step} direction="up" delay={index * 50}>
                  <div className="rounded-2xl border border-brand-primary/10 bg-brand-surface/30 p-6 sm:p-8 lg:p-10 shadow-sm hover:border-brand-accent/40 transition-all duration-200">
                    {/* Step Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-primary/10">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-primary text-brand-accent flex items-center justify-center font-mono font-bold text-lg flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-primary tracking-tight">
                            {step.title}
                          </h2>
                          <span className="text-xs uppercase font-mono tracking-wider text-brand-ink/60">
                            Typical Timeline: {step.duration}
                          </span>
                        </div>
                      </div>

                      <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-brand-primary/10 text-xs font-medium text-brand-primary">
                        <Icon className="w-4 h-4 text-brand-accent" />
                        <span>Step {index + 1} of 6</span>
                      </div>
                    </div>

                    {/* Step Summary */}
                    <p className="mt-6 text-sm sm:text-base text-brand-ink/80 font-body leading-relaxed max-w-3xl">
                      {step.summary}
                    </p>

                    {/* Deliverables Breakdown: Buyer vs We Deliver */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-8">
                      {/* Buyer Provides */}
                      <div className="p-5 sm:p-6 rounded-xl bg-white border border-brand-primary/10">
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-brand-primary/10">
                          <span className="w-2 h-2 rounded-full bg-brand-primary flex-shrink-0" />
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
                            What you provide:
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {step.buyerProvides.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-ink/80 leading-relaxed"
                            >
                              <span className="text-brand-accent-text font-bold">&bull;</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What We Deliver */}
                      <div className="p-5 sm:p-6 rounded-xl bg-brand-primary/5 border border-brand-primary/15">
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-brand-primary/15">
                          <ShieldCheck className="w-4 h-4 text-brand-accent flex-shrink-0" />
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-accent-text font-bold">
                            What we deliver:
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {step.weDeliver.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-ink leading-relaxed font-medium"
                            >
                              <span className="text-brand-accent font-bold">&check;</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section variant="primary" spacing="lg" className="border-t border-brand-accent/20">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
              Ready to submit your first tech pack?
            </h2>
            <p className="text-sm sm:text-base text-white/80 font-body leading-relaxed">
              We review your initial specifications, suggest optimized factory options in Bangladesh, and return with a realistic costing sheet.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Button href="/contact" variant="accent" size="lg">
                <span>Start Step 1: Submit Tech Pack</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
