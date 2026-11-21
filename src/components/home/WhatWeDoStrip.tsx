import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/FadeIn';

const pillars = [
  {
    step: '01',
    title: 'Sourcing',
    desc: 'Factory matching & costing',
    href: '/services#sourcing',
  },
  {
    step: '02',
    title: 'Development',
    desc: 'Tech packs & sampling',
    href: '/services#development',
  },
  {
    step: '03',
    title: 'Quality',
    desc: 'In-line & final inspection',
    href: '/services#quality',
  },
  {
    step: '04',
    title: 'Compliance',
    desc: 'Audit & standards checks',
    href: '/services#compliance',
  },
  {
    step: '05',
    title: 'Logistics',
    desc: 'Shipping & export paperwork',
    href: '/services#logistics',
  },
];

export function WhatWeDoStrip() {
  return (
    <section className="bg-brand-primary text-white border-y border-brand-accent/20">
      <Container className="py-6 sm:py-8">
        <FadeIn direction="up">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
            {pillars.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className={`group block ${
                  index !== 0 ? 'pt-4 sm:pt-0 lg:pl-6' : ''
                } hover:opacity-95 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded p-1`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-xs font-semibold text-brand-accent tracking-wider">
                    {item.step}
                  </span>
                  <span className="h-px flex-1 bg-white/10 group-hover:bg-brand-accent/50 transition-colors" />
                </div>
                <h2 className="font-heading text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-brand-accent transition-colors">
                  {item.title}
                </h2>
                <p className="text-xs text-white/70 font-body mt-1">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
