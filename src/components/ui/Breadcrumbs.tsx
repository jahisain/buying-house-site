import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  contained?: boolean;
}

export function Breadcrumbs({
  items,
  className,
  contained = true,
}: BreadcrumbsProps) {
  const content = (
    <nav
      aria-label="Breadcrumb"
      className={cn('py-3 text-xs sm:text-sm text-brand-ink/70', className)}
    >
      <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1 hover:text-brand-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent rounded p-0.5"
          >
            <Home className="w-3.5 h-3.5 text-brand-accent-text" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="inline-flex items-center gap-1.5 sm:gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-brand-ink/40 flex-shrink-0" />
              {isLast || !item.href ? (
                <span
                  className="font-medium text-brand-primary truncate max-w-[200px] sm:max-w-none"
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-brand-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent rounded p-0.5"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );

  if (contained) {
    return <Container>{content}</Container>;
  }

  return content;
}
