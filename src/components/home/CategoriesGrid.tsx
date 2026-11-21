import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { FadeIn } from '@/components/ui/FadeIn';

export interface CategoryItem {
  id: string;
  name: string;
  types: string;
  description: string;
  pattern: 'weave' | 'grid' | 'crosshatch';
}

export const categories: CategoryItem[] = [
  {
    id: 'knit',
    name: 'Knit',
    types: 'T-shirts, polos, hoodies, joggers, activewear',
    description: 'Single jersey, pique, interlock, fleece and French terry with custom dyeing and washes.',
    pattern: 'weave',
  },
  {
    id: 'woven',
    name: 'Woven',
    types: 'Shirts, trousers, shorts, jackets',
    description: 'Cotton poplin, twill, linen blends and tailored constructions with precision sewing.',
    pattern: 'grid',
  },
  {
    id: 'denim',
    name: 'Denim',
    types: 'Jeans, jackets, washes and finishes',
    description: 'Rigid and stretch denim, sustainable ozone/laser washing, distress detailing and custom hardware.',
    pattern: 'crosshatch',
  },
  {
    id: 'sweaters',
    name: 'Sweaters',
    types: 'Flat knit, cut and sew, gauges',
    description: 'Gauge 3 to 14 circular and flat-bed knitting in cotton, acrylic, wool blends and fancy yarns.',
    pattern: 'weave',
  },
  {
    id: 'outerwear',
    name: 'Outerwear',
    types: 'Puffers, parkas, shells, fleece',
    description: 'Water-resistant, windproof, bonded fabrics and insulated outerwear built for cold climates.',
    pattern: 'grid',
  },
];

export function CategoriesGrid() {
  return (
    <Section id="categories" variant="white" spacing="lg" className="border-b border-brand-primary/10">
      <Container>
        <div className="max-w-2xl mb-12 sm:mb-16">
          <FadeIn direction="up">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-accent-text block mb-2">
              Manufacturing Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-primary tracking-tight">
              Product Categories
            </h2>
            <p className="mt-3 text-base text-brand-ink/75 font-body leading-relaxed">
              Targeted sourcing across Bangladesh&apos;s leading production hubs, structured to meet international retail standards.
            </p>
          </FadeIn>
        </div>

        {/* 5-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat, index) => (
            <FadeIn key={cat.id} direction="up" delay={index * 100} className={index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}>
              <div className="h-full group flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-brand-surface/60 border border-brand-primary/10 hover:border-brand-accent/40 hover:shadow-md transition-all duration-200">
                <div className="space-y-4">
                  <ImageSlot
                    aspectRatio="video"
                    pattern={cat.pattern}
                    label={`${cat.name} Production`}
                    subtext="Factory Floor Placeholder"
                    className="mb-4 bg-white/70"
                  />
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-brand-primary tracking-tight flex items-center justify-between">
                      <span>{cat.name}</span>
                      <ArrowUpRight className="w-5 h-5 text-brand-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                    <p className="text-xs font-semibold text-brand-accent-text uppercase tracking-wider mt-1">
                      {cat.types}
                    </p>
                  </div>
                  <p className="text-sm text-brand-ink/80 leading-relaxed font-body">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-primary/10 flex items-center justify-between">
                  <Link
                    href={`/contact?category=${cat.id}`}
                    className="text-xs font-semibold text-brand-primary hover:text-brand-accent transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent rounded p-1"
                  >
                    Request Quote for {cat.name} &rarr;
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
