import React from 'react';
import { brand } from '@/config/brand';
import { cn } from '@/lib/utils';

export interface WordmarkProps {
  variant?: 'dark' | 'light' | 'auto';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export function Wordmark({
  variant = 'dark',
  size = 'md',
  showTagline = false,
  className,
}: WordmarkProps) {
  const sizeStyles = {
    sm: 'text-lg tracking-tight',
    md: 'text-xl sm:text-2xl tracking-tight',
    lg: 'text-2xl sm:text-3xl tracking-tight',
  }[size];

  const colorStyles = {
    dark: 'text-brand-primary',
    light: 'text-white',
    auto: 'text-inherit',
  }[variant];

  return (
    <div className={cn('inline-flex flex-col', className)}>
      <span
        className={cn(
          'font-heading font-semibold leading-none flex items-baseline gap-1 select-none',
          sizeStyles,
          colorStyles
        )}
      >
        <span>{brand.name}</span>
        <span
          className="inline-block w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0"
          aria-hidden="true"
        />
      </span>
      {showTagline && (
        <span
          className={cn(
            'text-xs font-body tracking-wider uppercase mt-1 font-medium',
            variant === 'light' ? 'text-white/90' : 'text-brand-ink/80'
          )}
        >
          {brand.tagline}
        </span>
      )}
    </div>
  );
}
