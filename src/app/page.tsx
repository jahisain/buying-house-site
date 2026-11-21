import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { WhatWeDoStrip } from '@/components/home/WhatWeDoStrip';
import { CategoriesGrid } from '@/components/home/CategoriesGrid';
import { HowWeWorkTimeline } from '@/components/home/HowWeWorkTimeline';
import { WhyWorkWithUs } from '@/components/home/WhyWorkWithUs';
import { ConditionalSections } from '@/components/home/ConditionalSections';
import { ClosingCta } from '@/components/home/ClosingCta';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. What We Do Strip */}
      <WhatWeDoStrip />

      {/* 3. Product Categories Grid (Five Cards) */}
      <CategoriesGrid />

      {/* 4. Six-Step How We Work Timeline */}
      <HowWeWorkTimeline />

      {/* 5. Why Work With Us */}
      <WhyWorkWithUs />

      {/* 6. Stats, Certifications and Clients (Auto-hide when empty in brand.ts) */}
      <ConditionalSections />

      {/* 7. Closing Call to Action */}
      <ClosingCta />
    </>
  );
}
