import React from 'react';
import { brand } from '@/config/brand';

export function JsonLd() {
  const baseUrl = `https://${brand.domain}`;
  const socialProfiles = Object.values(brand.social).filter(Boolean);

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: brand.name,
    legalName: brand.legalName,
    url: baseUrl,
    logo: `${baseUrl}${brand.logo.light}`,
    description: brand.seo.description,
    email: brand.email.general,
    telephone: brand.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: brand.address.line1,
      addressLocality: brand.address.city,
      addressCountry: brand.address.country,
    },
    sameAs: socialProfiles.length > 0 ? socialProfiles : undefined,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: brand.phone,
        contactType: 'customer service',
        email: brand.email.general,
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'Bengali'],
      },
      {
        '@type': 'ContactPoint',
        telephone: brand.whatsapp,
        contactType: 'sales',
        email: brand.email.rfq,
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'Bengali'],
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${baseUrl}/#service`,
    name: 'Apparel Sourcing, Production & Quality Control',
    serviceType: 'Garment Buying House & Quality Assurance',
    provider: {
      '@id': `${baseUrl}/#organization`,
    },
    description:
      'End-to-end garment sourcing, sample development, inline QC inspections, factory compliance audits, and export logistics from Bangladesh.',
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'European Union' },
      { '@type': 'AdministrativeArea', name: 'United Kingdom' },
      { '@type': 'AdministrativeArea', name: 'United States' },
      { '@type': 'AdministrativeArea', name: 'Canada' },
      { '@type': 'AdministrativeArea', name: 'Worldwide' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Garment Manufacturing Divisions',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Knitwear Sourcing & Production' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Woven Garments Sourcing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Denim & Jeans Manufacturing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sweaters & Knitwear Production' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Technical Outerwear Manufacturing' } },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
