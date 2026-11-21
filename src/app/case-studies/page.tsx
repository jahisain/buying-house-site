import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { brand } from '@/config/brand';
import { getAllCaseStudies, hasCaseStudies } from '@/lib/case-studies';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: `Case Studies & Sourcing Track Record | ${brand.name}`,
  description: `Real-world apparel production case studies, quality turnarounds, and sourcing solutions managed by ${brand.name} in Bangladesh.`,
};

export default function CaseStudiesPage() {
  // Spec requirement: Case Studies page must be hidden entirely when /content/case-studies.json is empty.
  if (!hasCaseStudies()) {
    notFound();
  }

  const caseStudies = getAllCaseStudies();

  return (
    <>
      <Breadcrumbs items={[{ label: 'Case Studies' }]} />

      <Section variant="surface" spacing="md" className="border-b border-brand-primary/10">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-accent-text block">
              Proven Performance
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-primary tracking-tight">
              Case Studies & Sourcing Solutions
            </h1>
            <p className="text-base sm:text-lg text-brand-ink/80 font-body leading-relaxed">
              Real-world examples of how our Dhaka team resolves production challenges, accelerates lead times, and maintains uncompromising AQL standards for global brands.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="white" spacing="lg">
        <Container>
          <div className="space-y-10">
            {caseStudies.map((study) => (
              <div
                key={study.slug}
                className="p-8 rounded-2xl border border-brand-primary/10 bg-brand-surface/40"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs px-2.5 py-1 rounded bg-brand-primary text-white font-mono">
                    {study.category}
                  </span>
                  <span className="text-xs text-brand-ink/60 font-medium">
                    {study.clientType}
                  </span>
                </div>
                <h2 className="text-2xl font-heading font-bold text-brand-primary mb-4">
                  {study.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-brand-ink/80">
                  <div>
                    <h3 className="font-semibold text-brand-primary mb-1">Challenge</h3>
                    <p>{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-primary mb-1">Solution</h3>
                    <p>{study.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
