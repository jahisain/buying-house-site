import React from 'react';
import { cn } from '@/lib/utils';

export interface ImageSlotProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  subtext?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide' | 'tall';
  pattern?: 'weave' | 'grid' | 'crosshatch';
  variant?: 'light' | 'dark' | 'surface';
}

export function ImageSlot({
  label,
  subtext = 'Placeholder image slot',
  aspectRatio = 'video',
  pattern = 'weave',
  variant = 'surface',
  className,
  ...props
}: ImageSlotProps) {
  const aspectClasses = {
    video: 'aspect-[16/9]',
    wide: 'aspect-[21/9]',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    tall: 'aspect-[2/3]',
  }[aspectRatio];

  const variantClasses = {
    surface: 'bg-brand-surface/80 border-brand-primary/10 text-brand-ink',
    light: 'bg-white border-brand-primary/10 text-brand-ink',
    dark: 'bg-brand-primary border-white/10 text-white',
  }[variant];

  // SVG patterns representing textile weaves and grids
  const patternId = React.useId();

  return (
    <div
      role="img"
      aria-label={label || 'Image slot placeholder'}
      className={cn(
        'relative overflow-hidden rounded-lg border flex flex-col items-center justify-center p-6 text-center select-none transition-all',
        aspectClasses,
        variantClasses,
        className
      )}
      {...props}
    >
      {/* Subtle Textile Weave SVG Pattern */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.07] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {pattern === 'weave' && (
            <pattern
              id={patternId}
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 6h24M0 18h24M6 0v24M18 0v24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M3 3h6v6H3zm12 12h6v6h-6z"
                fill="currentColor"
                opacity="0.3"
              />
            </pattern>
          )}
          {pattern === 'grid' && (
            <pattern
              id={patternId}
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M20 0H0v20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          )}
          {pattern === 'crosshatch' && (
            <pattern
              id={patternId}
              width="16"
              height="16"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 16L16 0M0 0l16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          )}
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>

      {/* Decorative center icon & typography */}
      <div className="relative z-10 flex flex-col items-center gap-2 max-w-[85%]">
        <div className="w-10 h-10 rounded-full border border-current/20 flex items-center justify-center opacity-60 mb-1">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>

        {label && (
          <span className="font-heading font-medium text-sm sm:text-base tracking-tight">
            {label}
          </span>
        )}
        {subtext && (
          <span className="text-xs uppercase tracking-wider opacity-50 font-body">
            {subtext}
          </span>
        )}
      </div>
    </div>
  );
}
