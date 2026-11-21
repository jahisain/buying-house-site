import React from 'react';
import type { Metadata } from 'next';
import {
  ShieldCheck,
  Building2,
  Cpu,
  Layers,
  CheckCircle2,
  FileCheck2,
} from 'lucide-react';
import { brand } from '@/config/brand';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JoinNetworkForm } from '@/components/forms/JoinNetworkForm';
import { FadeIn } from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: `Partner Factory Network & Vetting Standards | ${brand.name}`,
  description: `Overview of our vetted apparel manufacturing partner network in Bangladesh across knit, woven, denim, sweaters, and technical outerwear.`,
};

const clusters = [
  {
    category: 'Knitwear Network',
    locations: 'Gazipur, Narayanganj & Savar',
    capacityRange: 'Typical partner facility: 150,000 to 500,000 pcs / month',
    strengths:
      'High-speed multi-gauge circular knitting machines, automated computer-controlled cutting tables, in-house continuous bleaching and softflow dyeing, and high-volume screen printing units.',
    audits: 'BSCI, OEKO-TEX Standard 100, GOTS, SEDEX SMETA',
  },
  {
    category: 'Woven Garments Network',
    locations: 'Ashulia, Savar & Gazipur',
    capacityRange: 'Typical partner facility: 80,000 to 250,000 pcs / month',
    strengths:
      'Automated collar and cuff profile stitchers, multi-head embroidery machines, computerized pattern markers, and strict interlining fusing peel-strength testing.',
    audits: 'BSCI, WRAP, SEDEX SMETA, ISO 9001',
  },
  {
    category: 'Denim & Jeans Network',
    locations: 'Dhaka Industrial Zone & Chattogram',
    capacityRange: 'Typical partner facility: 100,000 to 300,000 pcs / month',
    strengths:
      'Sustainable eco-laundry plants equipped with Tonello and Jeanologia laser marking systems, ozone bleaching chambers, nano-bubble technology, and heavy-duty automatic pocket set sewers.',
    audits: 'BSCI, OEKO-TEX, ZDHC Level 3 Wastewater, HIGG Index',
  },
  {
    category: 'Sweaters Network',
    locations: 'Gazipur, Mymensingh & Konabari',
    capacityRange: 'Typical partner facility: 60,000 to 200,000 pcs / month',
    strengths:
      'Fully computerized flat knitting machines (Shima Seiki and Stoll 3GG to 14GG), precision linking stations, industrial dry-cleaning and yarn conditioning ovens.',
    audits: 'BSCI, WRAP, SEDEX, GRS (Global Recycled Standard)',
  },
  {
    category: 'Technical Outerwear Network',
    locations: 'Dhaka Export Processing Zone (DEPZ) & Savar',
    capacityRange: 'Typical partner facility: 40,000 to 120,000 pcs / month',
    strengths:
      'Hot air seam-sealing taping equipment, ultrasonic quilting, automated down-injection chambers, hydrostatic water-pressure tester, and clean-room assembly lines.',
    audits: 'BSCI, ISO 14001, OEKO-TEX Step, RSC Structural Approved',
  },
];

const vettingCriteria = [
  {
    icon: ShieldCheck,
    title: 'Social & Ethical Compliance Audits',
    desc: 'Active, verified certifications from international auditing bodies (BSCI minimum Grade C, SEDEX SMETA 4-Pillar, or WRAP). Strict enforcement of minimum wage laws, overtime regulations, and zero tolerance for child or forced labor.',
  },
  {
    icon: Building2,
    title: 'Structural, Fire & Electrical Safety',
    desc: 'Full certification under the RMG Sustainability Council (RSC) and Accord structural guidelines. Verified building blueprints, functional emergency exits, automated sprinkler systems, and regular fire evacuation drills.',
  },
  {
    icon: Cpu,
    title: 'Modern Machinery & Technical Setup',
    desc: 'Audited equipment maintenance logs, automatic spreading machines, digital needle detectors on all packaging exits, and dedicated sample rooms with pattern-grading CAD software (Gerber / Lectra).',
  },
  {
    icon: FileCheck2,
    title: 'In-House Laboratory & Testing Facilities',
    desc: 'On-site physical testing labs capable of evaluating color fastness (washing, perspiration, rubbing), dimensional stability, fabric weight (GSM), and button/snap pull testing (90N standard).',
  },
  {
    icon: Layers,
    title: 'Financial Stability & Direct Traceability',
    desc: 'Established banking relationships and transparent material purchasing histories with certified yarn and fabric mills to prevent unexpected mid-production financial freezes.',
  },
];

export default function FactoryNetworkPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Factory Network' }]} />

      {/* Hero */}
      <Section variant="surface" spacing="md" className="border-b border-brand-primary/10">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-accent-text block">
              Vetted Production Infrastructure
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-primary tracking-tight">
              Our Manufacturing Network
            </h1>
            <p className="text-base sm:text-lg text-brand-ink/80 font-body leading-relaxed">
              We connect international buyers with pre-vetted, socially compliant factories in Bangladesh. Each partner is selected exclusively for their specialized category capability, machine infrastructure, and verified safety record.
            </p>
          </div>
        </Container>
      </Section>

      {/* Vetting Criteria */}
      <Section variant="white" spacing="lg" className="border-b border-brand-primary/10">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent-text block mb-1">
              Quality & Safety Assurance
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-primary tracking-tight">
              Our 5-Pillar Factory Vetting Standard
            </h2>
            <p className="mt-2 text-sm sm:text-base text-brand-ink/75 font-body leading-relaxed">
              Before we place any sampling or bulk order with a factory, our Dhaka technical compliance team conducts an extensive on-site audit against these strict criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {vettingCriteria.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeIn
                  key={item.title}
                  direction="up"
                  delay={index * 60}
                  className={index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}
                >
                  <div className="h-full p-6 sm:p-7 rounded-xl bg-brand-surface/40 border border-brand-primary/10 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-primary text-brand-accent flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-brand-primary">
                      {item.title}
                    </h3>
                    <p className="text-sm text-brand-ink/75 font-body leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Network Capability Overview by Category */}
      <Section variant="surface" spacing="lg" className="border-b border-brand-primary/10">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent-text block mb-1">
              Industrial Hubs
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-primary tracking-tight">
              Capability Overview by Category
            </h2>
            <p className="mt-2 text-sm sm:text-base text-brand-ink/75 font-body leading-relaxed">
              To protect partner agreements, specific factory names are disclosed directly to buyers upon commercial matching and NDA confirmation.
            </p>
          </div>

          <div className="space-y-6">
            {clusters.map((cluster, index) => (
              <FadeIn key={cluster.category} direction="up" delay={index * 60}>
                <div className="p-6 sm:p-8 rounded-2xl bg-white border border-brand-primary/10 shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-brand-primary/10">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-primary">
                        {cluster.category}
                      </h3>
                      <span className="text-xs font-mono text-brand-accent-text uppercase font-semibold">
                        Hub Locations: {cluster.locations}
                      </span>
                    </div>
                    <span className="text-xs px-3 py-1.5 rounded-full bg-brand-surface text-brand-primary font-mono font-medium self-start sm:self-auto border border-brand-primary/10">
                      {cluster.capacityRange}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-sm text-brand-ink/80 font-body">
                    <div className="lg:col-span-8">
                      <strong className="block text-brand-primary mb-1 text-xs uppercase tracking-wider font-semibold">
                        Technical Setup & Equipment
                      </strong>
                      <p className="leading-relaxed">{cluster.strengths}</p>
                    </div>

                    <div className="lg:col-span-4 p-4 rounded-xl bg-brand-surface/60 border border-brand-primary/5">
                      <div className="flex items-center gap-2 mb-1.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                        <strong className="text-brand-primary text-xs uppercase tracking-wider font-semibold">
                          Verified Audit Standards
                        </strong>
                      </div>
                      <p className="text-xs text-brand-ink/70 leading-relaxed">
                        {cluster.audits}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Partner With Us Form Section */}
      <Section id="join-network" variant="white" spacing="lg">
        <Container size="narrow">
          <JoinNetworkForm />
        </Container>
      </Section>
    </>
  );
}
