import React from 'react';
import type { Metadata } from 'next';
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Award,
  ArrowRight,
} from 'lucide-react';
import { brand } from '@/config/brand';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FadeIn } from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: `Quality Assurance, QC Process & AQL Standards | ${brand.name}`,
  description: `Our comprehensive apparel quality control process in Bangladesh: inline inspections, midline DUPRO audits, final AQL 2.5 inspections, and social compliance standards.`,
};

const qcStages = [
  {
    step: 'Stage 01',
    name: 'Pre-Production & Raw Material Intake',
    timing: 'Before cutting commences',
    description:
      'Defects caught in bulk fabric cannot be corrected once cut. We inspect roll inventory as soon as it arrives at the factory.',
    protocols: [
      'Fabric 4-Point System inspection on minimum 10% of total roll count',
      'Fabric weight verification (GSM cutter and precision digital scale)',
      'Shade continuity and center-to-selvedge shading checks under standardized lighting (D65)',
      'Shrinkage and torque/spirality wash testing prior to spreading',
      'Trim and accessory pull testing (zippers, snaps, rivets, drawcords)',
    ],
  },
  {
    step: 'Stage 02',
    name: 'In-Line QC (Initial Production Check)',
    timing: 'At 5%–10% of sewing output',
    description:
      'We verify that machine settings, seam tension, and pattern attachments accurately match the approved Pre-Production (PP) golden sample.',
    protocols: [
      'Pattern alignment and ply tension audit in cutting room',
      'Stitch per inch (SPI) and needle gauge verification across sewing lines',
      'Critical seam strength and elasticity testing',
      'Inspection of early finished units against graded measurement spec charts',
      'Immediate machine recalibration if seam puckering or tension variance is spotted',
    ],
  },
  {
    step: 'Stage 03',
    name: 'Mid-Line / DUPRO (During Production Check)',
    timing: 'At 30%–50% of order completion',
    description:
      'Comprehensive audit of sewing lines, wash houses, and finishing areas to detect systematic defects while corrective action is still possible.',
    protocols: [
      'Random line sampling of semi-assembled and fully assembled garments',
      'Wash shade continuity against the approved master shade band',
      'Print fastness, embroidery registration, and graphic placement checks',
      'Measurement audits across all sizes (XS through XXL)',
      'Defect classification tally to compute preliminary internal defect percentage',
    ],
  },
  {
    step: 'Stage 04',
    name: 'Final Inspection (FRI) & Packing Audit',
    timing: '100% produced, minimum 80% packed into export cartons',
    description:
      'Rigorous final evaluation per international statistical sampling standards before ex-factory sign-off and shipping release.',
    protocols: [
      'ANSI/ASQ Z1.4 (ISO 2859-1) Normal Single Sampling Plan Level II',
      'Defect categorization under strict Critical, Major, and Minor thresholds',
      'Full size-set measurement verification across selected sample cartons',
      '100% calibration through calibrated 9-point metal detection tunnels',
      'Barcode readability scan and carton drop-test verification per ISTA 1A standard',
    ],
  },
];

const defectCategories = [
  {
    tier: 'Critical Defects',
    aql: '0.0 Acceptance (Zero Tolerance)',
    description:
      'Any defect that creates a safety hazard, biological contamination, or fails legal consumer protection regulations.',
    examples: [
      'Broken needle fragments (verified by 9-point metal detector)',
      'Sharp exposed pins, wire fragments, or hazardous burrs',
      'Blood spots, insect contamination, or visible mold / mildew',
      'Missing required safety labels (flammability or choking warning)',
    ],
  },
  {
    tier: 'Major Defects',
    aql: 'AQL 2.5 (or 1.5 upon buyer protocol)',
    description:
      'Defects that adversely affect the saleability, structural durability, or visual aesthetics of the garment.',
    examples: [
      'Open seams, broken stitches, or run-off stitching',
      'Measurements exceeding agreed tolerance specifications (+/- 0.5 cm to 1.0 cm)',
      'Visible fabric holes, slubs, or conspicuous color shading between panels',
      'Malfunctioning zippers, loose snaps, or failed button pull-test (< 90N)',
    ],
  },
  {
    tier: 'Minor Defects',
    aql: 'AQL 4.0 Standard',
    description:
      'Slight cosmetic imperfections that do not diminish the garment’s functional performance or consumer usability.',
    examples: [
      'Untrimmed loose threads exceeding 1.5 cm in non-critical zones',
      'Minor removable surface chalk marks or dust',
      'Slightly crooked size or care label placement',
      'Minor packaging wrinkles or carton tape imperfections',
    ],
  },
];

export default function CompliancePage() {
  const verifiedCerts = brand.certifications || [];
  const hasCerts = verifiedCerts.length > 0;

  return (
    <>
      <Breadcrumbs items={[{ label: 'Compliance & Quality' }]} />

      {/* Hero */}
      <Section variant="surface" spacing="md" className="border-b border-brand-primary/10">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-accent-text block">
              Integrity & Standards
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-primary tracking-tight">
              Quality Assurance & Compliance Framework
            </h1>
            <p className="text-base sm:text-lg text-brand-ink/80 font-body leading-relaxed">
              We protect your brand by maintaining independent, daily quality control on the ground in Dhaka. Explore our 4-stage inspection process, international AQL standards, and ethical compliance oversight.
            </p>
          </div>
        </Container>
      </Section>

      {/* 4-Stage QC Process */}
      <Section variant="white" spacing="lg" className="border-b border-brand-primary/10">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent-text block mb-1">
              On-Site Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-primary tracking-tight">
              Our 4-Stage Quality Control Process
            </h2>
            <p className="mt-2 text-sm sm:text-base text-brand-ink/75 font-body leading-relaxed">
              Quality cannot be inspected into a garment at the very end—it must be systematically engineered and controlled at every milestone.
            </p>
          </div>

          <div className="space-y-8">
            {qcStages.map((stage, index) => (
              <FadeIn key={stage.step} direction="up" delay={index * 60}>
                <div className="p-6 sm:p-8 rounded-2xl bg-brand-surface/40 border border-brand-primary/10 shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-brand-primary/10">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-brand-accent tracking-wider uppercase">
                        {stage.step}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-primary">
                        {stage.name}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-brand-ink/60 bg-white px-3 py-1 rounded-full border border-brand-primary/10 self-start sm:self-auto">
                      Timing: {stage.timing}
                    </span>
                  </div>

                  <p className="text-sm text-brand-ink/80 font-body leading-relaxed">
                    {stage.description}
                  </p>

                  <div>
                    <strong className="block text-xs font-semibold uppercase tracking-wider text-brand-primary mb-2.5">
                      Key Inspection Checkpoints:
                    </strong>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-brand-ink/80">
                      {stage.protocols.map((protocol, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" />
                          <span>{protocol}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* AQL Explained */}
      <Section variant="surface" spacing="lg" className="border-b border-brand-primary/10">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent-text block mb-1">
              Statistical Quality Control
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-primary tracking-tight">
              Understanding AQL Standards (Acceptance Quality Limit)
            </h2>
            <p className="mt-2 text-sm sm:text-base text-brand-ink/75 font-body leading-relaxed">
              We conduct final random inspections using the globally recognized ANSI/ASQ Z1.4 (ISO 2859-1) statistical sampling system. Here is how defect levels are categorized:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {defectCategories.map((cat, index) => (
              <FadeIn key={cat.tier} direction="up" delay={index * 80}>
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-white border border-brand-primary/10 shadow-sm flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-brand-primary/10">
                      <h3 className="font-heading text-xl font-bold text-brand-primary">
                        {cat.tier}
                      </h3>
                      <span className="font-mono text-xs font-bold text-brand-accent-text">
                        {cat.aql}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-brand-ink/75 font-body mt-3 leading-relaxed">
                      {cat.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-brand-primary/5">
                      <strong className="block text-xs uppercase tracking-wider text-brand-primary mb-2">
                        Common Examples:
                      </strong>
                      <ul className="space-y-1.5 text-xs text-brand-ink/80">
                        {cat.examples.map((ex, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-brand-accent font-bold">&bull;</span>
                            <span>{ex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Social Compliance & Partner Certifications */}
      <Section variant="white" spacing="lg" className="border-b border-brand-primary/10">
        <Container>
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent-text block mb-1">
              Ethical Supply Chain
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-primary tracking-tight">
              Social Audit & Structural Safety Compliance
            </h2>
            <p className="mt-2 text-sm sm:text-base text-brand-ink/75 font-body leading-relaxed">
              We inspect beyond garment stitches. We verify that the individuals who craft your products work in verified, safe, and dignified conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="p-6 sm:p-8 rounded-2xl bg-brand-surface/40 border border-brand-primary/10 space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-brand-accent" />
                <h3 className="text-xl font-heading font-bold text-brand-primary">
                  Structural & Fire Safety Oversight
                </h3>
              </div>
              <p className="text-sm text-brand-ink/80 font-body leading-relaxed">
                All manufacturing facilities in our network must be compliant with RMG Sustainability Council (RSC) and Accord structural, fire, and electrical safety standards. We physically verify unblocked emergency exits, functioning automated alarms, and certified architectural load capacities.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-brand-surface/40 border border-brand-primary/10 space-y-4">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-brand-accent" />
                <h3 className="text-xl font-heading font-bold text-brand-primary">
                  Environmental Chemical Safety (ZDHC)
                </h3>
              </div>
              <p className="text-sm text-brand-ink/80 font-body leading-relaxed">
                For wet processing, dyeing, and denim laundries, we verify compliance with Zero Discharge of Hazardous Chemicals (ZDHC) guidelines, operational Effluent Treatment Plants (ETP), and OEKO-TEX Standard 100 chemical safety tests.
              </p>
            </div>
          </div>

          {/* Partner Certifications Slot (Rule: Appears ONLY from brand.certifications) */}
          {hasCerts ? (
            <div className="mt-12 pt-10 border-t border-brand-primary/10">
              <h3 className="text-lg font-heading font-bold text-brand-primary mb-4 text-center">
                Verified Certifications Held
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-6">
                {verifiedCerts.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-brand-surface border border-brand-primary/10 text-center"
                  >
                    <strong className="block font-heading text-brand-primary">
                      {cert.name}
                    </strong>
                    {cert.issuer && (
                      <span className="text-xs text-brand-ink/60">{cert.issuer}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-10 p-5 rounded-xl bg-brand-surface/70 border border-brand-primary/10 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-brand-accent-text mt-0.5 flex-shrink-0" />
              <p className="text-xs sm:text-sm text-brand-ink/75 leading-relaxed font-body">
                <strong>Certification Verification Note:</strong> Partner factory certifications (BSCI, SEDEX, WRAP, OEKO-TEX, GOTS) are held individually by each manufacturing plant. Active certificates, audit validity dates, and summary reports are verified on-site by our team and delivered directly to buyers alongside factory matching dossiers.
              </p>
            </div>
          )}
        </Container>
      </Section>

      {/* Bottom Conversion */}
      <Section variant="surface" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-primary">
              Have specific AQL or audit requirements?
            </h2>
            <p className="text-sm sm:text-base text-brand-ink/75 font-body">
              Whether your brand operates under AQL 1.5, requires custom defect grading, or needs specialized chemical test protocols, our Dhaka QC team will tailor an exact inspection manual for your orders.
            </p>
            <div className="pt-2">
              <Button href="/contact" variant="accent" size="lg">
                <span>Discuss Your Quality Protocol</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
