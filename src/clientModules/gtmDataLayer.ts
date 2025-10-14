/**
 * Google Tag Manager Data Layer Initialization
 * 
 * This module initializes the global dataLayer array for GTM tracking.
 * It runs once when the site first loads.
 */

// Declare global dataLayer type
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Initialize dataLayer if it doesn't exist
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
  
  // Push initial page load event
  const initialPath = window.location.pathname;
  const initialTitle = document.title;
  
  // Determine page type based on path
  const getPageType = (path: string): string => {
    if (path === '/') return 'homepage';
    if (path.startsWith('/docs/api/')) return 'api-reference';
    if (path.startsWith('/docs/')) return 'documentation';
    if (path.startsWith('/blog/')) return 'blog';
    if (path.startsWith('/colab/')) return 'colab';
    if (path.startsWith('/videos/')) return 'video';
    if (path.startsWith('/ambassadors')) return 'ambassadors';
    return 'other';
  };
  
  window.dataLayer.push({
    event: 'page_view',
    page: {
      path: initialPath,
      title: initialTitle,
      type: getPageType(initialPath),
      url: window.location.href,
    },
    timestamp: new Date().toISOString(),
  });
  
  console.log('[GTM DataLayer] Initialized with initial pageview:', {
    path: initialPath,
    type: getPageType(initialPath),
  });
}

export { };

