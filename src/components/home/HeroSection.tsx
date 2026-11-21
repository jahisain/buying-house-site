import React from 'react';
import { brand } from '@/config/brand';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';

export function HeroSection() {
  return (
    <Section variant="surface" spacing="xl" className="border-b border-brand-primary/10 overflow-hidden">
      <Container>
        <div className="max-w-4xl space-y-8">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-brand-primary/10 text-xs sm:text-sm font-medium tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-accent flex-shrink-0" />
              <span className="text-brand-accent-text font-semibold uppercase tracking-wider">
                {brand.tagline}
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={100}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-brand-primary leading-[1.12] tracking-tight">
              From Bangladesh&apos;s best factories to your shelves: sourced, quality-controlled, delivered.
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={200}>
            <p className="text-lg sm:text-xl text-brand-ink/80 leading-relaxed max-w-2xl font-body">
              One accountable partner for knit, woven, denim, sweater and outerwear sourcing.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={300}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/contact" variant="accent" size="lg" className="min-w-[170px]">
                Request a Quote
              </Button>
              <Button href="#categories" variant="outline" size="lg" className="min-w-[170px]">
                Explore Categories
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
