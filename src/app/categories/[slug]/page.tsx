import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  PackageCheck,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ArrowRight,
  FileText,
} from 'lucide-react';
import { brand } from '@/config/brand';
import { getAllCategories, getCategoryBySlug } from '@/lib/categories';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { FadeIn } from '@/components/ui/FadeIn';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = getCategoryBySlug(params.slug);
  if (!category) {
    return {
      title: `Category Not Found | ${brand.name}`,
    };
  }

  return {
    title: `${category.name} Sourcing & Manufacturing | ${brand.name}`,
    description: `${category.headline}. Product types, fabrications, MOQ, lead times, and quality standards for ${category.name} from Bangladesh.`,
  };
}

export default function CategoryDetailPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const rfqHref = `/contact?category=${category.slug}`;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Categories', href: '/categories' },
          { label: category.name },
        ]}
      />

      {/* Hero */}
      <Section variant="surface" spacing="md" className="border-b border-brand-primary/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-accent-text block">
                Garment Division · {category.shortName}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-primary tracking-tight">
                {category.name} Sourcing
              </h1>
              <p className="text-base sm:text-lg font-medium text-brand-ink/90 font-body">
                {category.headline}
              </p>
              <p className="text-sm sm:text-base text-brand-ink/75 font-body leading-relaxed max-w-2xl">
                {category.description}
              </p>

              {/* Quick Specs Pill Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-brand-primary/10">
                  <PackageCheck className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs text-brand-ink/60 font-medium block">
                      Typical MOQ
                    </span>
                    <span className="text-sm font-semibold text-brand-primary">
                      {category.typicalMoq}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-brand-primary/10">
                  <Clock className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs text-brand-ink/60 font-medium block">
                      Lead Time
                    </span>
                    <span className="text-sm font-semibold text-brand-primary">
                      {category.typicalLeadTime}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button href={rfqHref} variant="accent" size="lg">
                  <span>Request a Quote for {category.shortName}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button href="/how-we-work" variant="outline" size="lg">
                  View Sourcing Process
                </Button>
              </div>
            </div>

            {/* Pattern Visual */}
            <div className="lg:col-span-5">
              <ImageSlot
                aspectRatio="square"
                pattern={category.pattern}
                label={`${category.name} Fabrication`}
                subtext="Technical Facility Placeholder"
                className="w-full bg-white shadow-md max-w-md mx-auto"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Product Types & Construction Capabilities */}
      <Section variant="white" spacing="lg" className="border-b border-brand-primary/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Left Col: Product Types */}
            <FadeIn direction="up">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent-text block mb-1">
                    Silhouettes & Styles
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-primary tracking-tight">
                    Product Types Manufactured
                  </h2>
                </div>

                <p className="text-sm text-brand-ink/75 font-body leading-relaxed">
                  We match each style with specialized production lines equipped with automatic spreading, template stitching, and specialized attachment feeds.
                </p>

                <div className="space-y-2.5">
                  {category.productTypes.map((type, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3.5 rounded-lg bg-brand-surface/60 border border-brand-primary/10 text-sm font-medium text-brand-ink"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                      <span>{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right Col: Fabrics & Finishing Techniques */}
            <FadeIn direction="up" delay={100}>
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent-text block mb-1">
                    Raw Materials & Processing
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-primary tracking-tight">
                    Fabrics & Techniques
                  </h2>
                </div>

                <p className="text-sm text-brand-ink/75 font-body leading-relaxed">
                  Direct sourcing from vetted spinning mills, knitting plants, and dye houses across Bangladesh and imported specialized yarn markets.
                </p>

                <div className="space-y-2.5">
                  {category.fabricsAndTechniques.map((fabric, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-lg bg-brand-surface/60 border border-brand-primary/10 text-sm font-medium text-brand-ink leading-relaxed"
                    >
                      <Layers className="w-4 h-4 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span>{fabric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Quality Control Standards */}
      <Section variant="surface" spacing="lg" className="border-b border-brand-primary/10">
        <Container>
          <FadeIn direction="up">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent-text block mb-1">
                Laboratory & Line Quality
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-primary tracking-tight">
                Quality Standards for {category.name}
              </h2>
              <p className="mt-2 text-sm text-brand-ink/75 font-body leading-relaxed">
                Specific checkpoints our on-site QC team tests for during inline and final random inspections.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.qualityFocus.map((point, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-brand-primary/10 shadow-sm"
                >
                  <ShieldCheck className="w-5 h-5 text-brand-accent mb-3" />
                  <p className="text-sm font-medium text-brand-primary leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Bottom Conversion Section */}
      <Section variant="primary" spacing="md" className="border-t border-brand-accent/20">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Request factory matching for {category.name}
            </h2>
            <p className="text-sm sm:text-base text-white/80 font-body">
              Upload your tech pack or tech specs. We will review construction viability, yarn availability, and provide an initial costing sheet.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Button href={rfqHref} variant="accent" size="lg">
                <FileText className="w-4 h-4 mr-2" />
                <span>Submit RFQ for {category.shortName}</span>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
