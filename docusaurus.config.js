// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const footer = require('./footer');
const navbar = require('./navbar');
const plugins = require('./plugins');
const baseUrl = '/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  future: {
    experimental_faster: {
      swcJsLoader: true,
      swcJsMinimizer: false,
      swcHtmlMinimizer: false,
      lightningCssMinimizer: false,
      rspackBundler: true,
      mdxCrossCompilerCache: false,
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          editUrl:
            'https://github.com/sailpoint-oss/developer-community-site/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          sidebarPath: require.resolve('./sidebars.js'),
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
          'json'
        ],
      },
      mermaid: {
        options: {
          er: {
            layoutDirection: 'RL',
          },
        },
      },
    }),

  plugins: plugins,

  markdown: {
    mermaid: true,
  },

  themes: ['docusaurus-theme-openapi-docs', '@docusaurus/theme-mermaid'],
};

module.exports = config;
