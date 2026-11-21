import React from 'react';
import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Download,
  FileCheck2,
} from 'lucide-react';
import { brand } from '@/config/brand';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { RfqForm } from '@/components/forms/RfqForm';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
  title: `Request a Quote (RFQ) & Contact Dhaka Office | ${brand.name}`,
  description: `Submit your tech pack or inquire about garment sourcing, costing, and factory production in Bangladesh. Direct communication with ${brand.name}.`,
};

function hasCompanyProfile(): boolean {
  try {
    const filePath = path.join(
      process.cwd(),
      'public',
      'downloads',
      'company-profile.pdf'
    );
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}

export default function ContactPage() {
  const showDownloadProfile = hasCompanyProfile();
  const cleanPhone = brand.whatsapp ? brand.whatsapp.replace(/\D/g, '') : '';

  return (
    <>
      <Breadcrumbs items={[{ label: 'Contact & RFQ' }]} />

      {/* Hero Header */}
      <Section variant="surface" spacing="md" className="border-b border-brand-primary/10">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-accent-text block">
              Inquiries & RFQ Submission
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-primary tracking-tight">
              Request a Sourcing Quote
            </h1>
            <p className="text-base sm:text-lg text-brand-ink/80 font-body leading-relaxed">
              Send us your tech pack, sketches, or order specifications. Our Dhaka merchandising team evaluates factory capabilities and responds with costing and feasibility within 24 business hours.
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Two-Column Layout */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Direct Office Contact, Operating Hours & Downloadable Profile */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Inquiries Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-brand-surface/60 border border-brand-primary/10 space-y-6">
                <div>
                  <h2 className="text-xl font-heading font-bold text-brand-primary">
                    Dhaka Headquarters
                  </h2>
                  <p className="text-xs text-brand-ink/60 mt-1">
                    Central operational base for garment merchandising and quality control.
                  </p>
                </div>

                <ul className="space-y-4 text-sm text-brand-ink/85 font-body">
                  {brand.address.line1 && (
                    <li className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-brand-primary text-xs uppercase tracking-wider">
                          Office Address:
                        </strong>
                        <span>
                          {brand.address.line1}, {brand.address.city},{' '}
                          {brand.address.country}
                        </span>
                      </div>
                    </li>
                  )}

                  {brand.email.rfq && (
                    <li className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-brand-primary text-xs uppercase tracking-wider">
                          RFQ & Tech Packs:
                        </strong>
                        <a
                          href={`mailto:${brand.email.rfq}`}
                          className="font-medium text-brand-primary hover:text-brand-accent transition-colors"
                        >
                          {brand.email.rfq}
                        </a>
                      </div>
                    </li>
                  )}

                  {brand.email.general && (
                    <li className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-brand-primary text-xs uppercase tracking-wider">
                          General Inquiries:
                        </strong>
                        <a
                          href={`mailto:${brand.email.general}`}
                          className="text-brand-ink/80 hover:text-brand-primary transition-colors"
                        >
                          {brand.email.general}
                        </a>
                      </div>
                    </li>
                  )}

                  {brand.phone && (
                    <li className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-brand-primary text-xs uppercase tracking-wider">
                          Telephone:
                        </strong>
                        <a
                          href={`tel:${brand.phone}`}
                          className="text-brand-ink/80 hover:text-brand-primary transition-colors"
                        >
                          {brand.phone}
                        </a>
                      </div>
                    </li>
                  )}

                  {brand.whatsapp && (
                    <li className="flex items-start gap-3">
                      <WhatsAppIcon className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-brand-primary text-xs uppercase tracking-wider">
                          Direct WhatsApp Chat:
                        </strong>
                        <a
                          href={`https://wa.me/${cleanPhone}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#25D366] hover:underline font-semibold"
                        >
                          {brand.whatsapp}
                        </a>
                      </div>
                    </li>
                  )}
                </ul>

                {/* Operating Hours Block */}
                <div className="pt-4 border-t border-brand-primary/10 space-y-2">
                  <div className="flex items-center gap-2 text-brand-primary font-semibold text-xs uppercase tracking-wider">
                    <Clock className="w-4 h-4 text-brand-accent" />
                    <span>Business Hours & Time Zone</span>
                  </div>
                  <p className="text-xs text-brand-ink/80 leading-relaxed">
                    Sunday &ndash; Thursday: 9:00 AM &ndash; 6:00 PM (GMT+6 / Dhaka Time)
                  </p>
                  <p className="text-[11px] text-brand-ink/60 leading-relaxed">
                    Our merchandising leads schedule communication overlaps to accommodate European (CET/GMT) and North American (EST/PST) working hours.
                  </p>
                </div>
              </div>

              {/* Downloadable Company Profile Slot (Rule: Hides until /public/downloads/company-profile.pdf exists) */}
              {showDownloadProfile && (
                <div className="p-6 rounded-2xl bg-brand-primary text-white space-y-3">
                  <div className="flex items-center gap-3">
                    <FileCheck2 className="w-6 h-6 text-brand-accent" />
                    <h3 className="font-heading text-lg font-bold">
                      Company Profile (PDF)
                    </h3>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Download our comprehensive corporate credentials, production capabilities, and quality guidelines in one document.
                  </p>
                  <a
                    href="/downloads/company-profile.pdf"
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-accent text-white text-xs font-semibold hover:bg-brand-accent/90 transition-colors shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Company Profile</span>
                  </a>
                </div>
              )}

              {/* Stylized Dhaka Map / Geographic Hub Card */}
              <div className="p-6 rounded-2xl border border-brand-primary/10 bg-brand-surface/40 space-y-3">
                <h3 className="font-heading text-base font-bold text-brand-primary">
                  Industrial Hub Proximity
                </h3>
                <p className="text-xs text-brand-ink/75 leading-relaxed">
                  Our Dhaka office is centrally located within 45 to 90 minutes of Bangladesh&apos;s principal apparel zones:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-brand-ink/80">
                  <div className="p-2 rounded bg-white border border-brand-primary/5">
                    &bull; Gazipur (Knit/Sweater)
                  </div>
                  <div className="p-2 rounded bg-white border border-brand-primary/5">
                    &bull; Narayanganj (Knitwear)
                  </div>
                  <div className="p-2 rounded bg-white border border-brand-primary/5">
                    &bull; Savar / Ashulia (Woven)
                  </div>
                  <div className="p-2 rounded bg-white border border-brand-primary/5">
                    &bull; DEPZ (Outerwear)
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: RFQ Form */}
            <div className="lg:col-span-7">
              <RfqForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
