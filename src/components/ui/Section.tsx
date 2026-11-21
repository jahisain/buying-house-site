import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  variant?: 'surface' | 'primary' | 'white' | 'plain';
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  contained?: boolean;
  containerSize?: 'default' | 'narrow' | 'wide' | 'full';
}

export function Section({
  as: Component = 'section',
  variant = 'surface',
  spacing = 'md',
  contained = true,
  containerSize = 'default',
  className,
  children,
  ...props
}: SectionProps) {
  const variantClasses = {
    surface: 'bg-brand-surface text-brand-ink',
    primary: 'bg-brand-primary text-white',
    white: 'bg-white text-brand-ink',
    plain: 'bg-transparent text-brand-ink',
  }[variant];

  const spacingClasses = {
    none: 'py-0',
    sm: 'py-8 sm:py-12',
    md: 'py-14 sm:py-20',
    lg: 'py-20 sm:py-28',
    xl: 'py-24 sm:py-36',
  }[spacing];

  const content = contained ? (
    <Container size={containerSize}>{children}</Container>
  ) : (
    children
  );

  return (
    <Component
      className={cn('relative w-full', variantClasses, spacingClasses, className)}
      {...props}
    >
      {content}
    </Component>
  );
}
