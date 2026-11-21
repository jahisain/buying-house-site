'use client';

import React from 'react';
import { brand } from '@/config/brand';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

export function FloatingWhatsApp() {
  if (!brand.whatsapp) return null;

  // Strip non-numeric characters for wa.me link
  const cleanPhone = brand.whatsapp.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    `Hello ${brand.name}, I would like to inquire about garment sourcing.`
  )}`;

  return (
    <aside aria-label="Quick contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${brand.name} on WhatsApp`}
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-2.5 bg-[#25D366] text-white hover:bg-[#20ba59] px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
      >
        <WhatsAppIcon className="w-5 h-5 flex-shrink-0 fill-current" />
        <span className="font-medium text-sm hidden sm:inline-block tracking-tight">
          WhatsApp
        </span>
      </a>
    </aside>
  );
}
