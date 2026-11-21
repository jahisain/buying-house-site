import React from 'react';
import type { Metadata } from 'next';
import { ArrowRight, Clock, PackageCheck } from 'lucide-react';
import { brand } from '@/config/brand';
import { getAllCategories } from '@/lib/categories';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { FadeIn } from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: `Product Categories & Apparel Sourcing | ${brand.name}`,
  description: `Sourcing knitwear, woven apparel, denim & jeans, sweaters, and technical outerwear from Bangladesh factories.`,
};

export default function CategoriesIndexPage() {
  const categories = getAllCategories();

  return (
    <>
      <Breadcrumbs items={[{ label: 'Categories' }]} />

      {/* Hero */}
      <Section variant="surface" spacing="md" className="border-b border-brand-primary/10">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-accent-text block">
              Manufacturing Capabilities
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-primary tracking-tight">
              Apparel Product Categories
            </h1>
            <p className="text-base sm:text-lg text-brand-ink/80 font-body leading-relaxed">
              Specialized production across Bangladesh&apos;s leading garment clusters. Explore technical specifications, fabric selections, typical MOQs, and lead times.
            </p>
          </div>
        </Container>
      </Section>

      {/* Categories Listing */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="space-y-12">
            {categories.map((category, index) => {
              const isReversed = index % 2 === 1;

              return (
                <FadeIn key={category.slug} direction="up" delay={index * 60}>
                  <div className="rounded-2xl border border-brand-primary/10 bg-brand-surface/40 p-6 sm:p-8 lg:p-10 hover:border-brand-accent/30 transition-all duration-200">
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                        isReversed ? 'lg:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Visual Pattern Slot */}
                      <div
                        className={`lg:col-span-5 ${
                          isReversed ? 'lg:order-2' : 'lg:order-1'
                        }`}
                      >
                        <ImageSlot
                          aspectRatio="video"
                          pattern={category.pattern}
                          label={`${category.name} Manufacturing`}
                          subtext="Production Line Placeholder"
                          className="w-full bg-white shadow-sm"
                        />
                      </div>

                      {/* Content Overview */}
                      <div
                        className={`lg:col-span-7 space-y-5 ${
                          isReversed ? 'lg:order-1' : 'lg:order-2'
                        }`}
                      >
                        <div>
                          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-accent-text block mb-1">
                            Division 0{index + 1}
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-primary tracking-tight">
                            {category.name}
                          </h2>
                          <p className="text-sm font-semibold text-brand-ink/90 font-body mt-1">
                            {category.headline}
                          </p>
                        </div>

                        <p className="text-sm text-brand-ink/75 font-body leading-relaxed">
                          {category.description}
                        </p>

                        {/* Product Types Sample Pill List */}
                        <div>
                          <span className="text-xs uppercase font-semibold tracking-wider text-brand-ink/60 block mb-2">
                            Product Range:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {category.productTypes.slice(0, 4).map((type, idx) => (
                              <span
                                key={idx}
                                className="text-xs px-2.5 py-1 rounded-md bg-white border border-brand-primary/10 text-brand-ink/80 font-medium"
                              >
                                {type}
                              </span>
                            ))}
                            {category.productTypes.length > 4 && (
                              <span className="text-xs px-2 py-1 text-brand-ink/60 font-medium">
                                +{category.productTypes.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Key Specs Pills */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-brand-primary/10">
                            <PackageCheck className="w-4 h-4 text-brand-accent flex-shrink-0" />
                            <div className="text-xs">
                              <span className="text-brand-ink/60 block font-medium">
                                Typical MOQ:
                              </span>
                              <span className="text-brand-ink font-semibold">
                                {category.typicalMoq}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-brand-primary/10">
                            <Clock className="w-4 h-4 text-brand-accent flex-shrink-0" />
                            <div className="text-xs">
                              <span className="text-brand-ink/60 block font-medium">
                                Lead Time:
                              </span>
                              <span className="text-brand-ink font-semibold">
                                {category.typicalLeadTime}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                          <Button
                            href={`/categories/${category.slug}`}
                            variant="primary"
                            size="sm"
                          >
                            <span>View Full Specifications</span>
                            <ArrowRight className="w-3.5 h-3.5 ml-1" />
                          </Button>

                          <Button
                            href={`/contact?category=${category.slug}`}
                            variant="outline"
                            size="sm"
                          >
                            <span>Request Quote for {category.shortName}</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
