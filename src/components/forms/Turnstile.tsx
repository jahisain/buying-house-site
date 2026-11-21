'use client';

import React, { useEffect, useRef } from 'react';

interface TurnstileProps {
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          'error-callback'?: () => void;
          'expired-callback'?: () => void;
          theme?: 'light' | 'dark' | 'auto';
        }
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

export function Turnstile({ onVerify, onError, onExpire }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    // If no key is configured (local dev or unconfigured env), skip gracefully
    if (!siteKey) return;

    let widgetId: string | null = null;

    const renderWidget = () => {
      if (window.turnstile && containerRef.current) {
        try {
          widgetId = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            callback: (token: string) => onVerify(token),
            'error-callback': () => onError?.(),
            'expired-callback': () => onExpire?.(),
            theme: 'light',
          });
        } catch {
          // Ignore render conflicts
        }
      }
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      // Load script if not already present
      const scriptId = 'cloudflare-turnstile-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src =
          'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
        script.async = true;
        script.defer = true;
        script.onload = () => renderWidget();
        document.head.appendChild(script);
      }
    }

    return () => {
      if (widgetId && window.turnstile) {
        try {
          window.turnstile.remove(widgetId);
        } catch {
          // Ignore cleanup errors
        }
      }
    };
  }, [siteKey, onVerify, onError, onExpire]);

  if (!siteKey) {
    return (
      <div className="py-2 text-[11px] text-brand-ink/50 font-mono">
        &bull; Spam protection: Cloudflare Turnstile (Dev mode: unconfigured / active in production)
      </div>
    );
  }

  return <div ref={containerRef} className="my-2" />;
}
