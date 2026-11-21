import React from 'react';
import { CheckCircle2, ShieldCheck, DollarSign, Layers, Clock } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/FadeIn';

export interface WhyReason {
  icon: React.ElementType;
  title: string;
  description: string;
}

export const reasons: WhyReason[] = [
  {
    icon: CheckCircle2,
    title: 'Single point of contact',
    description: 'One dedicated, accountable merchandising team in Dhaka bridging your headquarters directly with partner factories.',
  },
  {
    icon: ShieldCheck,
    title: 'Vetted factory network',
    description: 'Carefully evaluated factories selected specifically for your product category, machine capabilities, and verified compliance standards.',
  },
  {
    icon: DollarSign,
    title: 'Transparent costing',
    description: 'Clear, itemized cost breakdowns covering yarn, fabric, trims, cut-and-make (CM), and logistics with no hidden margins.',
  },
  {
    icon: Layers,
    title: 'In-line and final quality checks',
    description: 'On-site technical inspections throughout production—from raw fabric testing to in-line audits and final AQL 2.5 sign-off.',
  },
  {
    icon: Clock,
    title: 'Clear communication across time zones',
    description: 'Proactive milestone updates, detailed photo inspection reports, and responsive communication scheduled to overlap with your working hours.',
  },
];

export function WhyWorkWithUs() {
  return (
    <Section variant="white" spacing="lg" className="border-b border-brand-primary/10">
      <Container>
        <div className="max-w-3xl mb-12 sm:mb-16">
          <FadeIn direction="up">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-accent-text block mb-2">
              Buyer Assurance
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-primary tracking-tight">
              Why Work With Us
            </h2>
            <p className="mt-3 text-base text-brand-ink/75 font-body leading-relaxed">
              We eliminate the friction, risk, and unpredictability of overseas apparel sourcing through rigorous on-the-ground management.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <FadeIn
                key={reason.title}
                direction="up"
                delay={index * 80}
                className={index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <div className="h-full p-6 sm:p-7 rounded-xl bg-brand-surface/50 border border-brand-primary/10 hover:border-brand-accent/40 shadow-sm transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-brand-primary/5 flex items-center justify-center text-brand-accent mb-5">
                    <Icon className="w-5 h-5 text-brand-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-primary tracking-tight mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-brand-ink/80 leading-relaxed font-body">
                    {reason.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
