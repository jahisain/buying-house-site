import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { brand } from '@/config/brand';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';

export function ClosingCta() {
  return (
    <Section variant="primary" spacing="lg" className="border-t border-brand-accent/20">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <FadeIn direction="up">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-accent block mb-3">
              Start Sourcing
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight leading-tight">
              Send us your tech pack. We&apos;ll come back with factory options and costing.
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={100}>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-body leading-relaxed">
              Whether you need proto sampling, a competitive re-costing of an existing style, or a full seasonal production run.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={200}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button href="/contact" variant="accent" size="lg" className="min-w-[190px]">
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              {brand.email.rfq && (
                <Button
                  href={`mailto:${brand.email.rfq}`}
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white hover:text-brand-primary min-w-[190px]"
                >
                  <Mail className="w-4 h-4 mr-1.5" />
                  <span>Email Tech Pack</span>
                </Button>
              )}
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={300}>
            <p className="text-xs text-white/60 pt-4">
              Fast turnaround on inquiries · Based in Dhaka, working worldwide
            </p>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
