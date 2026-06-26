// Minified Docusaurus config — builds only docs/api/v* (ISC API) for faster iteration in PRs.
// Run with: npm run start-minified  or  npm run build-minified
//
// Key differences from the main config:
//   - onBrokenLinks/onBrokenMarkdownLinks set to 'warn' (api docs may link to non-api pages)
//   - Uses sidebars.minified.ts (ISC API sidebars only)
//   - Docs plugin excludes all non-API directories
//   - Plugins imported from plugins.ts with iiq-api, nerm-api, GTM, and redirects filtered out
//   - Simplified navbar with only ISC API-spec link

import { ThemeConfig } from '@docusaurus/preset-classic';
import { Config } from '@docusaurus/types';
import 'dotenv/config';
import { themes } from 'prism-react-renderer';
import allPlugins from './plugins';

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

// Exclude plugins that are not needed for the ISC API-only minified build.
const EXCLUDED_PLUGIN_NAMES = new Set([
  '@docusaurus/plugin-google-tag-manager',
  '@docusaurus/plugin-client-redirects',
]);
const EXCLUDED_PLUGIN_IDS = new Set(['iiq-api', 'nerm-api']);

const minifiedPlugins = allPlugins.filter((plugin: any) => {
  if (!Array.isArray(plugin)) return true;
  const [nameOrFn, options] = plugin;
  if (typeof nameOrFn === 'string' && EXCLUDED_PLUGIN_NAMES.has(nameOrFn)) return false;
  if (options?.id && EXCLUDED_PLUGIN_IDS.has(options.id)) return false;
  return true;
});

const baseUrl = '/';

const config: Config = {
  future: {
    v4: true,
    experimental_faster: true,
  },
  title: 'SailPoint Developer Community',
  tagline:
    'The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.',
  url: 'https://developer.sailpoint.com',
  baseUrl,
  favicon: 'img/SailPoint-Logo-Icon.ico',
  onBrokenLinks: 'warn',
  onDuplicateRoutes: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  clientModules: [
    require.resolve('./src/clientModules/gtmDataLayer.ts'),
  ],

  scripts: [
    {
      src: 'https://code.jquery.com/jquery-3.7.1.min.js',
      async: true,
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          editUrl:
            'https://github.com/sailpoint-oss/developer.sailpoint.com/edit/main/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          sidebarCollapsible: true,
          sidebarPath: require.resolve('./sidebars.minified.ts'),
          docItemComponent: '@theme/ApiItem',
          // Exclude all non-API doc directories so the plugin skips them entirely.
          // This is what makes the minified build faster — we avoid indexing
          // connectivity, extensibility, guides, iiq, reporting, and tools content.
          exclude: [
            'connectivity/**',
            'connectivity.md',
            'extensibility/**',
            'extensibility.md',
            'guides/**',
            'guides.md',
            'iiq/**',
            'iiq.md',
            'plugin-developer-guide.md',
            'reporting/**',
            'reporting.md',
            'tools/**',
            'tools.md',
            'index.md',
            'api/iiq/**',
            'api/nerm/**',
          ],
        },
        theme: {
          customCss: [
            require.resolve('@fortawesome/fontawesome-free/css/all.min.css'),
            require.resolve('./src/css/custom.css'),
          ],
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/SailPoint-Developer-Community-Lockup.png',
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'newAnnouncement3',
      isCloseable: true,
      content:
        'our latest announcement in the SailPoint Developer Community Forum: <a target="_blank" rel="noopener noreferrer" href="https://developer.sailpoint.com/discuss/t/the-developer-community-colab-a-new-way-to-find-build-and-collaborate-on-extensibility-solutions/18847">Announcing the Developer Community CoLab!</a> 🎉',
    },
    navbar: {
      title: '',
      logo: {
        alt: 'SailPoint Developer Community',
        src: 'img/SailPoint-Developer-Community-Lockup.png',
        srcDark: 'img/SailPoint-Developer-Community-Inverse-Lockup.png',
      },
      items: [
        {
          type: 'dropdown',
          label: 'API specifications',
          position: 'left',
          items: [
            { label: 'Identity Security Cloud', to: '/docs/api' },
          ],
        },
        {
          position: 'right',
          to: 'https://github.com/sailpoint-oss',
          className: 'header-github-link',
          'aria-label': 'SailPoint Open-source GitHub',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} SailPoint Technologies, Inc. All Rights Reserved.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: [
        'http',
        'java',
        'ruby',
        'php',
        'csharp',
        'powershell',
        'bash',
        'go',
        'python',
        'json',
      ],
    },
    mermaid: {
      options: {
        securityLevel: 'loose',
        flowchart: {
          htmlLabels: true,
        },
        er: {
          layoutDirection: 'RL',
        },
      },
    },
  } as ThemeConfig,

  plugins: minifiedPlugins,

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['docusaurus-theme-openapi-docs', '@docusaurus/theme-mermaid'],

  customFields: {
    AUTH_USERNAME: process.env.AUTH_USERNAME || '',
    AUTH_PASSWORD: process.env.AUTH_PASSWORD || '',
    ENDPOINT_OVERRIDE: process.env.ENDPOINT_OVERRIDE || '',
    SAMPLE_TABLE: process.env.SAMPLE_TABLE || '',
    CMS_APP_API_ENDPOINT:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/'
        : process.env.CMS_APP_API_ENDPOINT || '',
  },
};

export default config;
