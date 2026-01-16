import { ThemeConfig } from '@docusaurus/preset-classic';
import { Config } from '@docusaurus/types';
import 'dotenv/config';
import { themes } from 'prism-react-renderer';

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

import footer from './footer';
import navbar from './navbar';
import plugins from './plugins';

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
  onBrokenLinks: 'throw',
  onDuplicateRoutes: 'throw',
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
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          sidebarPath: require.resolve('./sidebars.js'),
          docItemComponent: '@theme/ApiItem', // Derived from docusaurus-theme-openapi
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
    image: 'img/SailPoint-Developer-Community-Lockup.png',  // your default OG image
    metadata: [
      // HTML
      { name: 'description', content: 'The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.' },

      // Open Graph
      { property: 'og:url', content: 'https://developer.sailpoint.com' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'SailPoint Developer Community' },
      { property: 'og:description', content: 'The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.' },
      { property: 'og:image', content: 'https://developer.sailpoint.com/img/SailPoint-Logo-OG.png' },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:domain', content: 'developer.sailpoint.com' },
      { name: 'twitter:url', content: 'https://developer.sailpoint.com' },
      { name: 'twitter:title', content: 'SailPoint Developer Community' },
      { name: 'twitter:description', content: 'The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.' },
      { name: 'twitter:image', content: 'https://developer.sailpoint.com/img/SailPoint-Logo-OG.png' },
    ],
    algolia: {
      appId: 'TB01H1DFAM',
      apiKey: process.env.ALGOLIA_SEARCH_KEY || 'dummy-key',
      indexName: 'crawler_Developer_Documentation',
      searchPagePath: false,
      placeholder: 'Search the Developer Community',
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
        'our latest announcement in the SailPoint Developer Community Forum: <a target="_blank" rel="noopener noreferrer" href="https://developer.sailpoint.com/discuss/t/the-developer-community-colab-a-new-way-to-find-build-and-collaborate-on-extensibility-solutions/18847">Announcing the Developer Community CoLab!</a> 🎉',
    },
    navbar: navbar,
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

  plugins: plugins,

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw'
    }
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
