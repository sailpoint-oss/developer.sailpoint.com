// Extensibility minified Docusaurus config — builds everything except docs/api/**
// and docs/tools/**/Reference/** for faster iteration in PRs.
// Run with: npm run start-extensibility  or  npm run build-extensibility
//
// Key differences from the main config:
//   - onBrokenLinks/onBrokenMarkdownLinks set to 'warn' (some links may point to excluded content)
//   - Uses sidebars.extensibility.ts (openApiSidebar + iiqSideBar only, no API sidebars)
//   - Docs plugin excludes api/** and tools/**/Reference/**
//   - All docusaurus-plugin-openapi-docs plugins filtered out (no API doc generation)
//   - Navbar omits the API specifications dropdown

import type { ThemeConfig } from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import 'dotenv/config';
import { themes } from 'prism-react-renderer';
import allPlugins from './plugins';
import navbar from './navbar';
import footer from './footer';

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

// Drop all OpenAPI doc-generation plugins — they only produce content under docs/api/
// which is excluded from this build.
const extensibilityPlugins = allPlugins.filter((plugin: any) => {
  if (!Array.isArray(plugin)) return true;
  const [nameOrFn] = plugin;
  if (nameOrFn === 'docusaurus-plugin-openapi-docs') return false;
  return true;
});

// Remove the API specifications dropdown from the navbar since those routes won't exist.
const extensibilityNavbar = {
  ...navbar,
  items: navbar.items.filter(
    (item: any) => item.label !== 'API specifications',
  ),
};

const baseUrl = '/';

const config: Config = {
  future: {
    v4: true,
    experimental_faster: true,
  },
  title: 'SailPoint Developers',
  tagline:
    'SailPoint Developers gives you everything you need to build, extend, and automate scalable identity solutions.',
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
          sidebarPath: require.resolve('./sidebars.extensibility.ts'),
          docItemComponent: '@theme/ApiItem',
          // Exclude API docs entirely and SDK Reference folders (auto-generated,
          // very large, and not needed for extensibility/connectivity/guides work).
          exclude: [
            'api/**',
            'tools/**/Reference/**',
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
    metadata: [
      { name: 'description', content: 'SailPoint Developers gives you everything you need to build, extend, and automate scalable identity solutions.' },
      { property: 'og:url', content: 'https://developer.sailpoint.com' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'SailPoint Developers' },
      { property: 'og:description', content: 'SailPoint Developers gives you everything you need to build, extend, and automate scalable identity solutions.' },
      { property: 'og:image', content: 'https://developer.sailpoint.com/img/SailPoint-Logo-OG.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:domain', content: 'developer.sailpoint.com' },
      { name: 'twitter:url', content: 'https://developer.sailpoint.com' },
      { name: 'twitter:title', content: 'SailPoint Developers' },
      { name: 'twitter:description', content: 'SailPoint Developers gives you everything you need to build, extend, and automate scalable identity solutions.' },
      { name: 'twitter:image', content: 'https://developer.sailpoint.com/img/SailPoint-Logo-OG.png' },
    ],
    algolia: {
      appId: 'TB01H1DFAM',
      apiKey: process.env.ALGOLIA_SEARCH_KEY || 'dummy-key',
      indexName: 'crawler_Developer_Documentation',
      searchPagePath: false,
      placeholder: 'Search SailPoint Developers',
      contextualSearch: false,
    },
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
        'See our latest announcement in the SailPoint Developer Forum: <a target="_blank" rel="noopener noreferrer" href="https://developer.sailpoint.com/discuss/t/the-developer-community-colab-a-new-way-to-find-build-and-collaborate-on-extensibility-solutions/18847">Announcing the Developer Community CoLab!</a> 🎉',
    },
    navbar: extensibilityNavbar,
    footer: footer,
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

  plugins: extensibilityPlugins,

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
