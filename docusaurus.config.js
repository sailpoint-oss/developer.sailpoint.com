// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const footer = require('./footer');
const navbar = require('./navbar');
const plugins = require('./plugins');
const baseUrl = '/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SailPoint Developer Community',
  tagline:
    'The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.',
  url: 'https://developer.sailpoint.com',
  baseUrl,
  favicon: 'img/SailPoint-Logo-Icon.ico',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          editUrl:
            'https://github.com/sailpoint-oss/developer-community-site/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          sidebarPath: require.resolve('./sidebars.js'),
          docLayoutComponent: '@theme/DocPage',
          docItemComponent: '@theme/ApiItem', // Derived from docusaurus-theme-openapi
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'TB01H1DFAM',
        apiKey: '726952a7a9389c484b6c96808a3e0010',
        indexName: 'prod_DEVELOPER_SAILPOINT_COM',
        searchPagePath: false,
        placeholder: 'Search the Developer Community',
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
        id: 'java_docs_announcement',
        content:
          'Checkout our latest announcement in the SailPoint Developer Community Forum: <a target="_blank" rel="noopener noreferrer" href="https://developer.sailpoint.com/discuss/t/announcing-developer-community-events/14633">Announcing Developer Community Events!</a> 🎉',
      },
      navbar: navbar,
      footer: footer,
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['http', 'java', 'ruby', 'php', 'csharp'],
      },
      mermaid: {
        options: {
          er: {
            layoutDirection: 'RL'
          }
        },
      }
    }),

  plugins: plugins,

  markdown: {
    mermaid: true,
  },

  themes: ['docusaurus-theme-openapi-docs', '@docusaurus/theme-mermaid'],
};

module.exports = config;
