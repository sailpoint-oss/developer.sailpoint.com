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
    experimental_faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      rspackBundler: true,
      mdxCrossCompilerCache: true,
      rspackPersistentCache: true,
      ssgWorkerThreads: true,
    },
  },
  title: 'SailPoint Developer Community',
  tagline:
    'The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.',
  url: 'https://developer.sailpoint.com',
  baseUrl,
  favicon: 'img/SailPoint-Logo-Icon.ico',
  // onBrokenLinks: 'throw',
  // onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

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
            'https://github.com/sailpoint-oss/developer-community-site/edit/main/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          sidebarCollapsible: true,
          sidebarPath: require.resolve('./sidebars.js'),
          docItemComponent: '@theme/ApiItem', // Derived from docusaurus-theme-openapi
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    algolia: {
      appId: 'TB01H1DFAM',
      apiKey: '726952a7a9389c484b6c96808a3e0010',
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
        er: {
          layoutDirection: 'RL',
        },
      },
    },
  } as ThemeConfig,

  plugins: plugins,

  markdown: {
    mermaid: true,
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