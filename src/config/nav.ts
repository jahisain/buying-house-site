import { hasCaseStudies } from '@/lib/case-studies';

export interface NavItem {
  label: string;
  href: string;
  hidden?: boolean;
}

export const mainNavItems: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Categories', href: '/categories' },
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'About', href: '/about' },
  { label: 'Factory Network', href: '/factory-network' },
  { label: 'Compliance', href: '/compliance' },
  { label: 'Case Studies', href: '/case-studies', hidden: !hasCaseStudies() },
  { label: 'Contact', href: '/contact' },
];

export const legalNavItems: NavItem[] = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];
