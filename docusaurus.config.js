// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SailPoint Developer Community',
  url: 'https://developer.sailpoint.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  // /static folder
  favicon: 'img/SailPoint-Logo-Icon.ico',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarCollapsible: true,
          sidebarPath: require.resolve('./sidebars.js'),
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi
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
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        }
      },
      navbar: {
        title: '',
        logo: {
          alt: 'SailPoint Developer Community',
          src: 'img/SailPoint-Developer-Community-Lockup.png',
          srcDark: 'img/SailPoint-Developer-Community-Inverse-Lockup.png'
        },
        items: [
          {
            type: 'dropdown',
            label: 'IdentityNow',
            position: 'right',
            items: [
              {to: '/docs/category/identity-now-api-v3', label: 'V3 APIs'},
              {to: '/docs/category/identity-now-api-beta', label: 'Beta APIs'}
              // ... more items
            ],
          }
        ]
      },
      footer: {},
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    plugins: [
      [
        "@docusaurus/plugin-content-docs",
        {
          id: "idn",
          path: "products/idn",
          routeBasePath: "idn",
          sidebarPath: require.resolve("./products/idn/sidebar.js"),
        },
      ],
      [
        "@docusaurus/plugin-content-docs",
        {
          id: "iiq",
          path: "products/iiq",
          routeBasePath: "iiq",
          sidebarPath: require.resolve("./products/iiq/sidebar.js"),
        },
      ],
      
      [
        "docusaurus-plugin-openapi-docs",
        {
          id: "idn",
          docsPluginId: "idn",
          config: {
            idn_v3: {
              specPath: "static/idn-api/sailpoint-api.v3.yaml",
              outputDir: "products/idn/api/v3",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            idn_beta: {
              specPath: "static/idn-api/sailpoint-api.beta.yaml",
              outputDir: "products/idn/api/beta",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
          }
        }
      ],
      [
        "docusaurus-plugin-openapi-docs",
        {
          id: "iiq",
          docsPluginId: "iiq",
          config: {
            iiq: {
              specPath: "static/iiq-api/swagger.json",
              outputDir: "products/iiq/api",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
          }
        }
      ]
    ],
  
    themes: ["docusaurus-theme-openapi-docs"]
};

module.exports = config;
