import React from 'react';
import type { Metadata } from 'next';
import {
  Search,
  Scissors,
  CheckSquare,
  ShieldCheck,
  TrendingUp,
  Truck,
  ArrowRight,
} from 'lucide-react';
import { brand } from '@/config/brand';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FadeIn } from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: `Sourcing & Merchandising Services | ${brand.name}`,
  description: `End-to-end garment sourcing, sample development, inline QC inspections, factory compliance audits, and export logistics from Bangladesh.`,
};

const services = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Sourcing and Factory Matching',
    eyebrow: 'Service 01',
    headline: 'Selecting the right specialized manufacturing partner for your product tier',
    description:
      'Bangladesh boasts thousands of garment manufacturers, but capabilities vary widely between basic volume plants and high-end specialized units. We match your tech packs with factories that possess the exact machinery, technical skillset, and capacity to deliver your order on time.',
    deliverables: [
      'Comprehensive factory capability and machinery audit',
      'Open-book costing and competitive negotiation for yarns, fabrics, and trims',
      'Capacity reservation and production slot lock-in with factory management',
      'Material supplier evaluation for specialized yarns and accessories',
    ],
  },
  {
    id: 'development',
    icon: Scissors,
    title: 'Product Development and Sampling',
    eyebrow: 'Service 02',
    headline: 'Rapid physical prototypes and fit validation before bulk commitment',
    description:
      'Sample accuracy dictates production success. Our on-the-ground technical merchandisers translate your tech packs, grading charts, and 3D specifications into accurate physical prototypes, overseeing every sample iteration until final golden seal approval.',
    deliverables: [
      'Proto sample and initial fit development within 7 to 10 days',
      'Lab dip color formulation under D65, TL84, and CWF light sources',
      'Print strike-offs, wash blankets, and embroidery panel approvals',
      'Pre-production (PP) samples with complete size set verification',
    ],
  },
  {
    id: 'quality',
    icon: CheckSquare,
    title: 'Quality Control and Inspection',
    eyebrow: 'Service 03',
    headline: 'Rigorous 3-stage on-site inspections following international AQL standards',
    description:
      'We never rely on factory internal QC reports alone. Our independent quality assurance inspectors conduct on-site audits at raw material intake, during cutting and sewing, and prior to final packing following strict ISO and AQL 2.5 standards.',
    deliverables: [
      'Raw material inspection (4-Point System for woven and circular knit fabrics)',
      'Initial production check (IPC) during first cutting and sewing setup',
      'During-production check (DUPRO) monitoring in-line stitching and measurements',
      'Final random inspection (FRI) per ANSI/ASQ Z1.4 (AQL 1.5 / 2.5) with full digital report',
    ],
  },
  {
    id: 'compliance',
    icon: ShieldCheck,
    title: 'Compliance and Social Audit Coordination',
    eyebrow: 'Service 04',
    headline: 'Ensuring your supply chain meets verified ethical and legal benchmarks',
    description:
      'Brand reputation depends on transparent, ethical manufacturing. We only partner with factories that meet strict social, environmental, and structural safety standards, verifying current audit certifications and conducting physical spot-checks.',
    deliverables: [
      'Verification of active factory certifications (BSCI, SEDEX SMETA, WRAP, OEKO-TEX, GOTS)',
      'Structural, fire, and electrical safety verification per RSC / Accord guidelines',
      'Chemical management audit (ZDHC wastewater protocols and REACH compliance)',
      'Monitoring of fair wages, working hours, and worker safety protocols',
    ],
  },
  {
    id: 'merchandising',
    icon: TrendingUp,
    title: 'Production Follow-up and Merchandising',
    eyebrow: 'Service 05',
    headline: 'Daily milestone monitoring to eliminate bottlenecks and delays',
    description:
      'Our bilingual merchandising leads serve as your daily on-the-ground operations team in Dhaka. We track every critical path milestone—from yarn spinning and fabric knitting/weaving to sewing output and packaging—so you always know the exact status of your orders.',
    deliverables: [
      'Time and Action (T&A) calendar setup and daily milestone tracking',
      'Weekly work-in-progress (WIP) tracking reports with photo documentation',
      'Proactive bottleneck resolution before production schedules are impacted',
      'Direct liaison between your sourcing office and factory floor supervisors',
    ],
  },
  {
    id: 'logistics',
    icon: Truck,
    title: 'Logistics and Shipping Coordination',
    eyebrow: 'Service 06',
    headline: 'Seamless customs export clearance, consolidation, and vessel dispatch',
    description:
      'From the factory loading dock to Chattogram (Chittagong) port or Dhaka airport (DAC), we manage the complete export documentation and forwarding coordination to ensure smooth customs clearance and timely on-board departure.',
    deliverables: [
      'Export documentation verification (Commercial Invoice, Packing List, Certificate of Origin)',
      'Coordination with buyer-nominated freight forwarders and shipping lines',
      'Container loading supervision and security seal verification',
      'Bill of Lading (B/L) or Air Waybill (AWB) issuance and dispatch follow-up',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Services' }]} />

      {/* Hero */}
      <Section variant="surface" spacing="md" className="border-b border-brand-primary/10">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-accent-text block">
              End-to-End Execution
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-primary tracking-tight">
              Garment Sourcing & Merchandising Services
            </h1>
            <p className="text-base sm:text-lg text-brand-ink/80 font-body leading-relaxed">
              We act as your dedicated, accountable buying office in Dhaka—managing factory selection, sample engineering, rigorous quality inspections, compliance verification, and shipping coordination.
            </p>
          </div>

          {/* Quick Anchor Navigation Strip */}
          <div className="mt-10 pt-6 border-t border-brand-primary/10">
            <p className="text-xs uppercase font-mono tracking-wider text-brand-ink/60 mb-3">
              Quick Anchor Links:
            </p>
            <div className="flex flex-wrap gap-2">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="text-xs px-3 py-1.5 rounded-full bg-white border border-brand-primary/15 text-brand-ink/80 hover:text-brand-primary hover:border-brand-accent transition-colors font-medium"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Six Anchored Service Sections */}
      <div className="divide-y divide-brand-primary/10">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;

          return (
            <section
              key={service.id}
              id={service.id}
              className={`scroll-mt-24 py-16 sm:py-20 ${
                isEven ? 'bg-white' : 'bg-brand-surface'
              }`}
            >
              <Container>
                <FadeIn direction="up">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left Col: Header and Overview */}
                    <div className="lg:col-span-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-brand-primary text-brand-accent flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-xs font-semibold text-brand-accent-text tracking-wider uppercase">
                          {service.eyebrow}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-primary tracking-tight">
                        {service.title}
                      </h2>

                      <p className="text-sm sm:text-base font-semibold text-brand-ink/90 font-body">
                        {service.headline}
                      </p>

                      <p className="text-sm text-brand-ink/75 font-body leading-relaxed">
                        {service.description}
                      </p>

                      <div className="pt-2">
                        <Button href="/contact" variant="outline" size="sm">
                          <span>Inquire About This Service</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </Button>
                      </div>
                    </div>

                    {/* Right Col: Scope & Deliverables Box */}
                    <div className="lg:col-span-6">
                      <div className="p-6 sm:p-7 rounded-xl bg-white border border-brand-primary/10 shadow-sm">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-primary mb-4 pb-2 border-b border-brand-primary/10">
                          Key Deliverables & Standards
                        </h3>
                        <ul className="space-y-3">
                          {service.deliverables.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-xs sm:text-sm text-brand-ink/85 leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </Container>
            </section>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <Section variant="surface" spacing="lg" className="border-t border-brand-primary/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-primary">
              Ready to discuss your production requirements?
            </h2>
            <p className="text-sm sm:text-base text-brand-ink/75 font-body">
              Send your sketches, tech packs, or target pricing. Our merchandising team will respond within 24 business hours.
            </p>
            <div className="pt-2">
              <Button href="/contact" variant="accent" size="lg">
                Request a Custom Quote
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
