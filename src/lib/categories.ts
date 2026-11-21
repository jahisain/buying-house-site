import categoriesData from '@/../content/categories.json';

export interface Category {
  slug: string;
  name: string;
  shortName: string;
  headline: string;
  description: string;
  productTypes: string[];
  fabricsAndTechniques: string[];
  typicalMoq: string;
  typicalLeadTime: string;
  qualityFocus: string[];
  pattern: 'weave' | 'grid' | 'crosshatch';
}

export function getAllCategories(): Category[] {
  return categoriesData as Category[];
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return (categoriesData as Category[]).find((cat) => cat.slug === slug);
}
