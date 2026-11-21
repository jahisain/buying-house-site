import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, Eye, Compass, MapPin, Globe2, ArrowRight } from 'lucide-react';
import { brand } from '@/config/brand';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FadeIn } from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: `About Us — Garment Buying House in Dhaka | ${brand.name}`,
  description: `Learn about ${brand.name}, an accountable apparel sourcing and merchandising partner based in Dhaka, Bangladesh, serving international brands and importers worldwide.`,
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'About' }]} />

      {/* Hero */}
      <Section variant="surface" spacing="md" className="border-b border-brand-primary/10">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-accent-text block">
              Our Identity & Purpose
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-primary tracking-tight">
              One Accountable Partner Between Your Brand and Bangladesh&apos;s Best Factories
            </h1>
            <p className="text-base sm:text-lg text-brand-ink/80 font-body leading-relaxed">
              {brand.name} was established to solve the core challenges international fashion brands face when manufacturing in Bangladesh: inconsistent communication, hidden costs, and quality variance.
            </p>
          </div>
        </Container>
      </Section>

      {/* Who We Are & Why We Started */}
      <Section variant="white" spacing="lg" className="border-b border-brand-primary/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent-text block">
                Origin & Mission
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-primary tracking-tight">
                Bridging the Gap with Radical Transparency
              </h2>
              <p className="text-sm sm:text-base text-brand-ink/80 font-body leading-relaxed">
                Bangladesh is one of the world&apos;s leading apparel exporters, home to state-of-the-art LEED-certified green factories and unmatched craftsmanship across knit, woven, denim, and outerwear. Yet, managing overseas production remotely can feel unpredictable without trusted eyes and ears on the factory floor.
              </p>
              <p className="text-sm sm:text-base text-brand-ink/80 font-body leading-relaxed">
                We founded {brand.name} to act as an authentic extension of your own merchandising and technical team. We do not operate as passive middlemen who simply pass messages along. We actively verify yarn availability, calculate open-book costing, conduct daily on-site inline inspections, and safeguard your brand&apos;s quality standards before goods ever leave Dhaka.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 rounded-2xl bg-brand-surface border border-brand-primary/10 shadow-sm space-y-6">
                <h3 className="font-heading text-xl font-bold text-brand-primary">
                  Our Core Commitments
                </h3>
                <div className="space-y-4 text-sm font-body">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-brand-primary block">100% On-Site QC Oversight</strong>
                      <span className="text-brand-ink/75">
                        Independent inspections at fabric intake, during sewing, and final AQL 2.5 checks.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-brand-primary block">Transparent Costing Sheets</strong>
                      <span className="text-brand-ink/75">
                        Clear visibility into fabric, trim, making charges (CM), and logistics breakdown.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Compass className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-brand-primary block">Verified Compliance Only</strong>
                      <span className="text-brand-ink/75">
                        Partnering exclusively with vetted factories holding active social and safety certifications.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Approach to Quality & Ethics */}
      <Section variant="surface" spacing="lg" className="border-b border-brand-primary/10">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent-text block mb-1">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-primary tracking-tight">
              Our Approach to Quality and Ethics
            </h2>
            <p className="mt-2 text-sm sm:text-base text-brand-ink/75 font-body leading-relaxed">
              We believe sustainable business is built on uncompromising ethical standards and rigorous technical discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <FadeIn direction="up" delay={0}>
              <div className="h-full p-6 sm:p-7 rounded-xl bg-white border border-brand-primary/10 shadow-sm space-y-3">
                <span className="font-mono text-xs font-bold text-brand-accent tracking-wider uppercase">
                  Pillar 01
                </span>
                <h3 className="text-xl font-heading font-bold text-brand-primary">
                  Worker Welfare & Safety
                </h3>
                <p className="text-sm text-brand-ink/75 font-body leading-relaxed">
                  We inspect and confirm that all partner factories adhere strictly to Bangladesh labor laws, international safety standards (RSC/Accord), fair wages, and humane working environments.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={100}>
              <div className="h-full p-6 sm:p-7 rounded-xl bg-white border border-brand-primary/10 shadow-sm space-y-3">
                <span className="font-mono text-xs font-bold text-brand-accent tracking-wider uppercase">
                  Pillar 02
                </span>
                <h3 className="text-xl font-heading font-bold text-brand-primary">
                  Environmental Accountability
                </h3>
                <p className="text-sm text-brand-ink/75 font-body leading-relaxed">
                  We actively champion water-efficient dyeing techniques, organic and BCI cotton sourcing, OEKO-TEX Standard 100 chemical safety, and sustainable eco-washing in our denim lines.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={200}>
              <div className="h-full p-6 sm:p-7 rounded-xl bg-white border border-brand-primary/10 shadow-sm space-y-3">
                <span className="font-mono text-xs font-bold text-brand-accent tracking-wider uppercase">
                  Pillar 03
                </span>
                <h3 className="text-xl font-heading font-bold text-brand-primary">
                  Zero False Claims
                </h3>
                <p className="text-sm text-brand-ink/75 font-body leading-relaxed">
                  We never inflate factory capacities, invent certifications, or make unrealistic delivery promises. If a production risk or bottleneck arises, we report it immediately with solutions.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Based in Dhaka, Working Worldwide */}
      <Section variant="white" spacing="lg" className="border-b border-brand-primary/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/5 border border-brand-primary/10 text-xs font-semibold text-brand-primary">
                <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                <span>Dhaka Operational Base</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-primary tracking-tight">
                Based in Dhaka, Working Worldwide
              </h2>
              <p className="text-sm sm:text-base text-brand-ink/80 font-body leading-relaxed">
                Operating directly from Dhaka ({brand.address.city}, {brand.address.country}) places our team within short driving distance of Bangladesh&apos;s key textile manufacturing hubs—including Gazipur, Narayanganj, Savar, Ashulia, and the export ports of Chattogram.
              </p>
              <p className="text-sm text-brand-ink/75 font-body leading-relaxed">
                Our merchandisers communicate seamlessly across time zones, aligning daily updates with European, British, and North American business hours so you never wait days for an answer.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="p-8 rounded-2xl bg-brand-primary text-white space-y-6">
                <div className="flex items-center gap-3">
                  <Globe2 className="w-8 h-8 text-brand-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl font-bold">
                      Global Sourcing Reach
                    </h3>
                    <span className="text-xs text-white/70">
                      Coordinated from Dhaka (GMT+6)
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-lg bg-white/10 border border-white/10">
                    <span className="text-xs font-mono uppercase text-brand-accent block mb-1">
                      Region
                    </span>
                    <strong className="block text-white text-sm">European Union</strong>
                    <span className="text-xs text-white/70">Germany, France, Netherlands, Scandinavia</span>
                  </div>

                  <div className="p-4 rounded-lg bg-white/10 border border-white/10">
                    <span className="text-xs font-mono uppercase text-brand-accent block mb-1">
                      Region
                    </span>
                    <strong className="block text-white text-sm">United Kingdom</strong>
                    <span className="text-xs text-white/70">London & retail fashion importers</span>
                  </div>

                  <div className="p-4 rounded-lg bg-white/10 border border-white/10">
                    <span className="text-xs font-mono uppercase text-brand-accent block mb-1">
                      Region
                    </span>
                    <strong className="block text-white text-sm">North America</strong>
                    <span className="text-xs text-white/70">United States & Canada wholesale/brands</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Closing CTA */}
      <Section variant="surface" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-primary">
              Partner with an honest, on-the-ground team
            </h2>
            <p className="text-sm sm:text-base text-brand-ink/75 font-body">
              Start with a brief conversation about your current sourcing challenges or send a tech pack for competitive factory matching.
            </p>
            <div className="pt-2">
              <Button href="/contact" variant="accent" size="lg">
                <span>Contact Our Dhaka Office</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
