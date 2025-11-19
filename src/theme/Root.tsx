/**
 * Root component wrapper for the entire Docusaurus app.
 * This component tracks route changes and pushes events to GTM dataLayer.
 */

import { useLocation } from '@docusaurus/router';
import React, { useEffect } from 'react';

// Declare global dataLayer type
declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * Determines the page type based on the current path
 */
function getPageType(path: string): string {
  if (path === '/') return 'homepage';
  if (path.startsWith('/docs/api/v3/')) return 'api-v3';
  if (path.startsWith('/docs/api/beta/')) return 'api-beta';
  if (path.startsWith('/docs/api/v2024/')) return 'api-v2024';
  if (path.startsWith('/docs/api/')) return 'api-reference';
  if (path.startsWith('/docs/extensibility/')) return 'docs-extensibility';
  if (path.startsWith('/docs/connectivity/')) return 'docs-connectivity';
  if (path.startsWith('/docs/tools/')) return 'docs-tools';
  if (path.startsWith('/docs/guides/')) return 'docs-guides';
  if (path.startsWith('/docs/iiq/')) return 'docs-iiq';
  if (path.startsWith('/docs/reporting/')) return 'docs-reporting';
  if (path.startsWith('/docs/')) return 'documentation';
  if (path.startsWith('/blog/')) return 'blog';
  if (path.startsWith('/colab/')) return 'colab';
  if (path.startsWith('/videos/')) return 'video';
  if (path.startsWith('/ambassadors')) return 'ambassadors';
  if (path.startsWith('/sailapps')) return 'sailapps';
  return 'other';
}

/**
 * Pushes a pageview event to the GTM dataLayer
 */
function pushPageView(path: string, title: string) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page: {
        path,
        title,
        type: getPageType(path),
        url: window.location.href,
        referrer: document.referrer,
      },
      timestamp: new Date().toISOString(),
    });
    
    // Optional: Log for debugging (remove in production if needed)
    if (process.env.NODE_ENV === 'development') {
      console.log('[GTM DataLayer] Route change tracked:', {
        path,
        type: getPageType(path),
      });
    }
  }
}

/**
 * Root component that wraps the entire app
 */
export default function Root({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    // Track route changes
    // Skip the initial load since it's already tracked by the client module
    const isInitialLoad = sessionStorage.getItem('gtm_initial_load') === null;
    
    if (isInitialLoad) {
      sessionStorage.setItem('gtm_initial_load', 'true');
      return;
    }

    // Get the page title after a short delay to allow the document title to update
    setTimeout(() => {
      const pageTitle = document.title;
      pushPageView(location.pathname, pageTitle);
    }, 0);
  }, [location.pathname]);

  return <>{children}</>;
}

