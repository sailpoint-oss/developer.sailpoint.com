// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SailPoint Developer Community',
  url: 'https://developer.sailpoint.com',
  baseUrl: '/',
  favicon: 'img/SailPoint-Logo-Icon.ico',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',
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
          editUrl: "https://github.com/sailpoint-oss/developer-community-site/edit/main/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
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
          autoCollapseCategories: false,
        },
      },
      colorMode: {
        defaultMode: "light",
        respectPrefersColorScheme: true
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
            position: 'left',
            items: [
              {to: "#", label: "API Specifications", className: "navbar__section",},
              {to: '/idn/api/v3', label: 'V3 APIs', className: "indent"},
              {to: '/idn/api/beta', label: 'Beta APIs', className: "indent"},
              {to: "#", label: "Documentation", className: "navbar__section",},
              {to: '/idn/docs/getting-started', label: 'IDN Documentation', className: "indent"},
              {to: "#", label: "Training", className: "navbar__section",},
              {href: 'https://university.sailpoint.com/Saba/Web_spf/NA10P1PRD075/guest/categorydetail/categ000000000003041/true/xxemptyxx/', label: 'IdentityNow Certifications', className: "indent"},
            ],
          },
          {
            type: 'dropdown',
            label: 'IdentityIQ',
            position: 'left',
            items: [
              {to: "#", label: "API Specifications", className: "navbar__section",},
              {to: '/iiq/api', label: 'IIQ APIs', className: "indent"},
              {to: "#", label: "Training", className: "navbar__section",},
              {href: 'https://university.sailpoint.com/Saba/Web_spf/NA10P1PRD075/guest/categorydetail/categ000000000003042/true/xxemptyxx/', label: 'IdentityIQ Certifications', className: "indent"},
            ],
          },
          {
            position: "left",
            label: "Ideas",
            to: "https://developer-sailpoint.ideas.aha.io/"
          },
          {
            position: "left",
            label: "Discuss",
            to: "https://developer.sailpoint.com/discuss"
          },
          {
            type: "dropdown",
            label: "Support",
            position: "right",
            items: [
              {label: "Compass", href: "https://community.sailpoint.com"},
              {label: "Submit Support Ticket", href: "https://support.sailpoint.com/hc/en-us/requests/new?ticket_form_id=360000629992"}
            ]
          },
          {
            position: "right",
            label: "Status",
            to: "https://status.sailpoint.com/"
          },
          {
            position: "right",
            to: "https://github.com/sailpoint-oss",
            className: "header-github-link",
            "aria-label": "SailPoint Open-source GitHub"
          },
          {
            href: "https://medium.com/sailpointtechblog",
            className: "header-blog-link",
            position: "right",
            "aria-label": "SailPoint Engineering Blog",
          },
        ]
      },
      footer: {
        style: "light",
        links: [
          {
            title: "IdentityNow",
            items: [
              {
                label: "Your First API Call",
                to: "idn/docs/getting-started"
              },
              {
                label: "Build A Transform",
                to: "idn/docs/transforms"
              },
              {
                label: "Build A SaaS Connector",
                to: "idn/docs/saas-connectors"
              },
              {
                label: "Get Certified",
                to: "https://university.sailpoint.com/Saba/Web_spf/NA10P1PRD075/guest/categorydetail/categ000000000003041/true/xxemptyxx/"
              }
            ]
          },
          {
            title: "IdentityIQ",
            items: [
              {
                label: "Build A Plugin",
                to: "https://documentation.sailpoint.com/"
              },
              {
                label: "Get Certified",
                to: "https://university.sailpoint.com/Saba/Web_spf/NA10P1PRD075/guest/categorydetail/categ000000000003042/true/xxemptyxx/"
              }
            ]
          },
          {
            title: "Community",
            items: [
              {
                label: "Discuss",
                to: "https://developer.sailpoint.com/discuss"
              },
              {
                label: "Submit an Idea",
                to: "https://developer-sailpoint.ideas.aha.io/"
              },
              {
                label: "Contact Our Team",
                to: "https://developer.sailpoint.com/discuss/new-message?groupname=developer_relations"
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "Engineering Blog",
                href: "https://medium.com/sailpointtechblog"
              },
              {
                label: "GitHub",
                href: "https://github.com/sailpoint-oss"
              },
              {
                label: "Twitter",
                href: "https://twitter.com/sailpoint"
              },
            ]
          },
          {
            title: "Company",
            items: [
              {
                label: "The SailPoint Story",
                to: "https://www.sailpoint.com/company/"
              },
              {
                label: "The SailPoint Way",
                to: "https://www.sailpoint.com/company/diversity-inclusion-and-belonging/"
              },
              {
                label: "Leadership Team",
                to: "https://www.sailpoint.com/company/#h-our-leadership"
              },
              {
                label: "Become A Partner",
                to: "https://www.sailpoint.com/partners/become-partner/"
              }
            ]
          },
          {
            title: "Legal",
            items: [
              {
                label: "Terms & Conditions",
                to: "https://developet.sailpoint.com"
              }
            ]
          }
        ],
        logo: {
          alt: 'SailPoint Developer Community Logo',
          src: '/img/SailPoint-Developer-Community-Lockup.png',
          href: 'https://developer.sailpoint.com',
        },
        copyright: `Copyright © ${new Date().getFullYear()} SailPoint Technologies Holdings, Inc. All Rights Reserved.`,
      },
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
