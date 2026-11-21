import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { brand } from '@/config/brand';
import { mainNavItems, legalNavItems } from '@/config/nav';
import { Wordmark } from '@/components/ui/Wordmark';
import { Container } from '@/components/ui/Container';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const visibleNavItems = mainNavItems.filter((item) => !item.hidden);
  const cleanPhone = brand.whatsapp ? brand.whatsapp.replace(/\D/g, '') : '';

  return (
    <footer className="bg-brand-primary text-white mt-auto border-t border-brand-accent/20">
      {/* pt-14 pb-28 on mobile gives ample clearance for the fixed floating WhatsApp button */}
      <Container className="pt-14 pb-28 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Wordmark & Brand summary */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded p-1"
              aria-label="Home"
            >
              <Wordmark variant="light" size="lg" showTagline />
            </Link>
            <p className="text-white/85 text-sm max-w-sm leading-relaxed">
              {brand.seo.description}
            </p>
            <p className="text-xs text-white/80">
              Registered as {brand.legalName}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading text-base font-semibold tracking-wide text-brand-accent">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {visibleNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/85 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent rounded"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-heading text-base font-semibold tracking-wide text-brand-accent">
              Contact & Inquiries
            </h3>
            <ul className="space-y-3 text-sm text-white/90">
              {brand.address.line1 && (
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-brand-accent flex-shrink-0" />
                  <span>
                    {brand.address.line1}, {brand.address.city},{' '}
                    {brand.address.country}
                  </span>
                </li>
              )}
              {brand.email.general && (
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-accent flex-shrink-0" />
                  <div>
                    <span className="text-white/80 text-xs block font-medium">General Inquiries</span>
                    <a
                      href={`mailto:${brand.email.general}`}
                      className="hover:text-white transition-colors underline-offset-2 hover:underline"
                    >
                      {brand.email.general}
                    </a>
                  </div>
                </li>
              )}
              {brand.email.rfq && (
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-accent flex-shrink-0" />
                  <div>
                    <span className="text-white/80 text-xs block font-medium">RFQ & Tech Packs</span>
                    <a
                      href={`mailto:${brand.email.rfq}`}
                      className="hover:text-white transition-colors font-medium text-white underline-offset-2 hover:underline"
                    >
                      {brand.email.rfq}
                    </a>
                  </div>
                </li>
              )}
              {brand.phone && (
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-accent flex-shrink-0" />
                  <div>
                    <span className="text-white/80 text-xs block font-medium">Phone</span>
                    <a
                      href={`tel:${brand.phone}`}
                      className="hover:text-white transition-colors"
                    >
                      {brand.phone}
                    </a>
                  </div>
                </li>
              )}
              {brand.whatsapp && (
                <li className="flex items-center gap-3">
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                  <div>
                    <span className="text-white/80 text-xs block font-medium">WhatsApp</span>
                    <a
                      href={`https://wa.me/${cleanPhone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {brand.whatsapp}
                    </a>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-12 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80">
          <p>
            &copy; {currentYear} {brand.legalName || brand.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors underline-offset-2 hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
