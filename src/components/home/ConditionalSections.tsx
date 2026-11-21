import React from 'react';
import { brand } from '@/config/brand';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/FadeIn';

export function ConditionalSections() {
  const hasStats = Boolean(brand.stats && brand.stats.length > 0);
  const hasCertifications = Boolean(brand.certifications && brand.certifications.length > 0);
  const hasClients = Boolean(brand.clients && brand.clients.length > 0);

  if (!hasStats && !hasCertifications && !hasClients) {
    return null;
  }

  return (
    <>
      {/* Stats Section: Automatically rendered only when verified numbers exist in brand.ts */}
      {hasStats && (
        <Section variant="surface" spacing="md" className="border-b border-brand-primary/10">
          <Container>
            <FadeIn direction="up">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {brand.stats.map((stat, idx) => (
                  <div key={idx} className="p-6 rounded-lg bg-white border border-brand-primary/10 text-center">
                    <p className="font-heading text-3xl sm:text-4xl font-bold text-brand-primary">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm text-brand-ink/80 mt-1 font-medium">
                      {stat.label}
                    </p>
                    {stat.helper && (
                      <p className="text-xs text-brand-ink/60 mt-0.5">
                        {stat.helper}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
          </Container>
        </Section>
      )}

      {/* Certifications Section: Rendered only when verified in brand.ts */}
      {hasCertifications && (
        <Section variant="white" spacing="md" className="border-b border-brand-primary/10">
          <Container>
            <FadeIn direction="up">
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent-text block mb-1">
                  Verified Compliance
                </span>
                <h2 className="text-2xl font-heading font-bold text-brand-primary">
                  Factory Certifications
                </h2>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6">
                {brand.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="px-6 py-4 rounded-lg bg-brand-surface border border-brand-primary/10 text-center"
                  >
                    <span className="font-heading font-semibold text-brand-primary">
                      {cert.name}
                    </span>
                    {cert.issuer && (
                      <span className="block text-xs text-brand-ink/60 mt-0.5">
                        {cert.issuer}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
          </Container>
        </Section>
      )}

      {/* Client Logos Section: Rendered only with explicit buyer permission in brand.ts */}
      {hasClients && (
        <Section variant="surface" spacing="md" className="border-b border-brand-primary/10">
          <Container>
            <FadeIn direction="up">
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent-text block mb-1">
                  Trusted Partnerships
                </span>
                <h2 className="text-2xl font-heading font-bold text-brand-primary">
                  Brands & Importers We Serve
                </h2>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {brand.clients.map((client, idx) => (
                  <div
                    key={idx}
                    className="px-6 py-3 rounded bg-white border border-brand-primary/10 font-heading font-medium text-brand-primary"
                  >
                    {client.name}
                  </div>
                ))}
              </div>
            </FadeIn>
          </Container>
        </Section>
      )}
    </>
  );
}
