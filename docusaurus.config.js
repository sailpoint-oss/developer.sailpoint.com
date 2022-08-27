// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Developer Community',
  tagline: 'Developers are cool',
  url: 'https://developer.sailpoint.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SailPoint', // Usually your GitHub org/user name.
  projectName: 'SailPoint Developer Community', // Usually your repo name.

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
            label: 'Learn',
            position: 'right',
            items: [
              {
                href: 'https://medium.com/sailpointtechblog',
                label: 'Engineering Blog',
              },
              {
                href: 'https://community.sailpoint.com/t5/Professional-Certification/ct-p/product-certification-program',
                label: 'Certifications',
              },
              // ... more items
            ],
          },
          {
            type: 'dropdown',
            label: 'IdentityNow',
            position: 'right',
            items: [
              {to: '/docs/category/identity-now-api-v3', label: 'V3 APIs'},
              {to: '/docs/category/identity-now-api-beta', label: 'Beta APIs'},
              {
                type: 'doc',
                docId: 'idn_docs/intro',
                label: 'Documentation',
              },
              // ... more items
            ],
          },
          {
            type: 'dropdown',
            label: 'IdentityIQ',
            position: 'right',
            items: [
              {to: '/docs/category/iiq-api', label: 'APIs'},
              {
                type: 'doc',
                docId: 'idn_docs/intro',
                label: 'Documentation',
              },
              // ... more items
            ],
          },
          {
            type: 'dropdown',
            label: 'ARM',
            position: 'right',
            items: [
              {to: '/docs/category/arm-agent-management', label: 'ARM APIs'}
            ],
          },
          {
            type: 'dropdown',
            label: 'Tools',
            position: 'right',
            items: [
              {
                href: 'https://github.com/sailpoint-oss',
                label: 'GitHub',
              },
              // ... more items
            ],
          },
          {
            type: 'dropdown',
            label: 'Community',
            position: 'right',
            items: [
              {
                href: 'https://developer.sailpoint.com/discuss',
                label: 'Discuss',
              },
              {
                href: 'https://developer-sailpoint.ideas.aha.io/',
                label: 'Ideas',
              },
              {
                href: 'https://community.sailpoint.com/',
                label: 'Compass',
              },
              // ... more items
            ],
          },
          {
            type: 'dropdown',
            label: 'Support',
            position: 'right',
            items: [
              {
                href: 'https://support.sailpoint.com/hc/en-us',
                label: 'Customer Support',
              },
              // ... more items
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SailPoint Technologies Holdings, Inc. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    plugins: [
      [
        "docusaurus-plugin-openapi-docs",
        {
          id: "openapi",
          docsPluginId: "classic",
          config: {
            idn_v3: {
              specPath: "static/idn-api/sailpoint-api.v3.yaml",
              outputDir: "docs/idn/sailpoint-api-v3",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            idn_beta: {
              specPath: "static/idn-api/sailpoint-api.beta.yaml",
              outputDir: "docs/idn/sailpoint-api-beta",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            iiq: {
              specPath: "static/iiq-api/swagger.json",
              outputDir: "docs/iiq/iiq-api",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_agent_management: {
              specPath: "static/arm-api/swagger-agent-management.json",
              outputDir: "docs/arm/swagger-agent-management",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_analysis: {
              specPath: "static/arm-api/swagger-analysis.json",
              outputDir: "docs/arm/swagger-analysis",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_arm: {
              specPath: "static/arm-api/swagger-arm.json",
              outputDir: "docs/arm/swagger-arm",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_arm2: {
              specPath: "static/arm-api/swagger-arm2.json",
              outputDir: "docs/arm/swagger-arm2",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_authentication: {
              specPath: "static/arm-api/swagger-authentication.json",
              outputDir: "docs/arm/swagger-authentication",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_cloud_agent: {
              specPath: "static/arm-api/swagger-cloud-agent.json",
              outputDir: "docs/arm/swagger-cloud-agent",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_jobs: {
              specPath: "static/arm-api/swagger-jobs.json",
              outputDir: "docs/arm/swagger-jobs",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_logging: {
              specPath: "static/arm-api/swagger-logging.json",
              outputDir: "docs/arm/swagger-logging",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_provisioning: {
              specPath: "static/arm-api/swagger-provisioning.json",
              outputDir: "docs/arm/swagger-provisioning",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_public: {
              specPath: "static/arm-api/swagger-public.json",
              outputDir: "docs/arm/swagger-public",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_rulebook: {
              specPath: "static/arm-api/swagger-rulebook.json",
              outputDir: "docs/arm/swagger-rulebook",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_scheduling: {
              specPath: "static/arm-api/swagger-scheduling.json",
              outputDir: "docs/arm/swagger-scheduling",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_utilization_tracking: {
              specPath: "static/arm-api/swagger-utilization-tracking.json",
              outputDir: "docs/arm/swagger-utilization-tracking",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            }
          }
        }
      ]
    ],
  
    themes: ["docusaurus-theme-openapi-docs"]
};

module.exports = config;
