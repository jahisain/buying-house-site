import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/FadeIn';

export interface ProcessStep {
  number: string;
  title: string;
  buyerProvides: string;
  weDeliver: string;
}

export const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Brief and tech pack',
    buyerProvides: 'Tech packs, size specs, target quantities, fabric preferences and target delivery date.',
    weDeliver: 'Initial technical feasibility assessment, factory capacity matching and projected milestone timeline.',
  },
  {
    number: '02',
    title: 'Factory matching and costing',
    buyerProvides: 'Target pricing guidelines and buyer compliance standards.',
    weDeliver: 'Vetted partner factory options, yarn/fabric availability check and transparent itemized cost sheet.',
  },
  {
    number: '03',
    title: 'Sampling and approval',
    buyerProvides: 'Fit comments, measurement corrections, lab dip approvals and trim feedback.',
    weDeliver: 'Proto samples, fit samples, lab dips, strike-offs and pre-production (PP) samples.',
  },
  {
    number: '04',
    title: 'Production with in-line QC',
    buyerProvides: 'Final PO sign-off and LC / payment confirmation.',
    weDeliver: 'Raw fabric inspection (4-point system), cutting checks, continuous in-line QC and weekly photo progress updates.',
  },
  {
    number: '05',
    title: 'Final inspection',
    buyerProvides: 'Confirmation of buyer inspection criteria and AQL standard.',
    weDeliver: 'AQL 2.5 final random inspection report, measurement audit and packaging integrity verification.',
  },
  {
    number: '06',
    title: 'Shipping and documentation',
    buyerProvides: 'Forwarder nomination and destination consignee documentation details.',
    weDeliver: 'Commercial invoice, packing list, certificate of origin, export clearance and on-board vessel tracking.',
  },
];

export function HowWeWorkTimeline() {
  return (
    <Section variant="surface" spacing="lg" className="border-b border-brand-primary/10">
      <Container>
        <div className="max-w-3xl mb-12 sm:mb-16">
          <FadeIn direction="up">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-accent-text block mb-2">
              Structured Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-primary tracking-tight">
              How We Work
            </h2>
            <p className="mt-3 text-base text-brand-ink/75 font-body leading-relaxed">
              A transparent, accountable six-step sourcing process from initial tech pack review to port departure.
            </p>
          </FadeIn>
        </div>

        {/* 6-step timeline grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <FadeIn key={step.number} direction="up" delay={index * 80}>
              <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-white border border-brand-primary/10 hover:border-brand-accent/40 shadow-sm transition-all duration-200">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-brand-primary/10">
                    <span className="font-mono text-2xl font-bold text-brand-accent">
                      {step.number}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-brand-ink/50 font-mono">
                      Step {index + 1} of 6
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-brand-primary tracking-tight mb-4">
                    {step.title}
                  </h3>

                  <div className="space-y-4 text-xs sm:text-sm font-body">
                    <div className="p-3 rounded-lg bg-brand-surface/70 border border-brand-primary/5">
                      <span className="font-semibold text-brand-primary block mb-1">
                        What you provide:
                      </span>
                      <p className="text-brand-ink/80 leading-relaxed">
                        {step.buyerProvides}
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-brand-primary/5 border border-brand-primary/10">
                      <span className="font-semibold text-brand-accent-text block mb-1">
                        What we deliver:
                      </span>
                      <p className="text-brand-ink/80 leading-relaxed">
                        {step.weDeliver}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
