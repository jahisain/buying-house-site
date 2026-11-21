import caseStudiesData from '@/../content/case-studies.json';

export interface CaseStudy {
  slug: string;
  title: string;
  clientType: string;
  category: string;
  challenge: string;
  solution: string;
  results: string[];
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudiesData as CaseStudy[];
}

export function hasCaseStudies(): boolean {
  return Array.isArray(caseStudiesData) && caseStudiesData.length > 0;
}
