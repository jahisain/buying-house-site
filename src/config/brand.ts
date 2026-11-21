export const brand = {
  name: 'Stitch Meridian',
  legalName: 'Stitch Meridian',
  tagline: 'Precision sourcing. Dependable delivery.',
  domain: 'jahisain.github.io/buying-house-site',
  email: { general: 'info@stitchmeridian.com', rfq: 'info@stitchmeridian.com' },
  phone: '+8801713188219',
  whatsapp: '+8801713188219',
  address: {
    line1: '796, Begum Rokeya Sarani, Kazipara, Mirpur',
    city: 'Dhaka',
    country: 'Bangladesh',
  },
  social: { linkedin: '', instagram: '', facebook: '' },
  colors: { primary: '#0F2A43', accent: '#C8963E', accentText: '#8A6420', surface: '#F7F5F0', ink: '#14202B' },
  fonts: { heading: 'Fraunces', body: 'Inter' },
  logo: { light: '/brand/logo-light.svg', dark: '/brand/logo-dark.svg', mark: '/brand/mark.svg' },
  seo: {
    titleTemplate: '%s | Stitch Meridian',
    description: 'Stitch Meridian is a Bangladesh-based garment buying house sourcing knit, woven, denim, sweater and outerwear for global brands.',
  },
  stats: [] as Array<{ label: string; value: string; helper?: string }>,
  certifications: [] as Array<{ name: string; issuer?: string; logo?: string }>,
  clients: [] as Array<{ name: string; logo?: string }>,
};

export type BrandConfig = typeof brand;
