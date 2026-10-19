/**
 * Pendo Initialization
 *
 * This module loads the Pendo agent and initializes it for anonymous visitors.
 * It runs once when the site first loads. Pendo detects client-side route
 * changes on its own, so no route listener is needed.
 *
 * The API key comes from the PENDO_API_KEY environment variable through
 * customFields in docusaurus.config.ts. If the key is empty, Pendo does not load.
 */

import siteConfig from '@generated/docusaurus.config';

declare global {
  interface Window {
    pendo: any;
  }
}

const apiKey = siteConfig.customFields?.PENDO_API_KEY as string | undefined;

if (typeof window !== 'undefined' && apiKey) {
  // Pendo install snippet: creates a command queue and loads the agent script
  (function (p: any, e: Document, n: string, d: string) {
    const o = (p[d] = p[d] || {});
    o._q = o._q || [];
    const methods = ['initialize', 'identify', 'updateOptions', 'pageLoad', 'track'];
    methods.forEach((m) => {
      o[m] =
        o[m] ||
        function (...args: unknown[]) {
          o._q[m === methods[0] ? 'unshift' : 'push']([m, ...args]);
        };
    });
    const y = e.createElement(n) as HTMLScriptElement;
    y.async = true;
    y.src = `https://cdn.pendo.io/agent/static/${apiKey}/pendo.js`;
    const z = e.getElementsByTagName(n)[0];
    z.parentNode?.insertBefore(y, z);
  })(window, document, 'script', 'pendo');

  // Visitors are not logged in, so leave the IDs empty and Pendo assigns an anonymous ID
  window.pendo.initialize({
    visitor: {
      id: '',
    },
    account: {
      id: '',
    },
  });
}

export { };
