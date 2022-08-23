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
              {
                type: 'doc',
                docId: 'idn/docs/getting-started/getting-started',
                label: 'Documentation',
              },
              // ... more items
            ]
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
        "docusaurus-plugin-openapi-docs",
        {
          id: "openapi",
          docsPluginId: "classic",
          config: {
            idn_v3: {
              specPath: "static/idn-api/sailpoint-api.v3.yaml",
              outputDir: "docs/idn/api/v3",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            idn_beta: {
              specPath: "static/idn-api/sailpoint-api.beta.yaml",
              outputDir: "docs/idn/api/beta",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            iiq: {
              specPath: "static/iiq-api/swagger.json",
              outputDir: "docs/iiq/api",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_agent_management: {
              specPath: "static/arm-api/swagger-agent-management.json",
              outputDir: "docs/arm/api/swagger-agent-management",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_analysis: {
              specPath: "static/arm-api/swagger-analysis.json",
              outputDir: "docs/arm/api/swagger-analysis",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_arm: {
              specPath: "static/arm-api/swagger-arm.json",
              outputDir: "docs/arm/api/swagger-arm",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_arm2: {
              specPath: "static/arm-api/swagger-arm2.json",
              outputDir: "docs/arm/api/swagger-arm2",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_authentication: {
              specPath: "static/arm-api/swagger-authentication.json",
              outputDir: "docs/arm/api/swagger-authentication",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_cloud_agent: {
              specPath: "static/arm-api/swagger-cloud-agent.json",
              outputDir: "docs/arm/api/swagger-cloud-agent",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_jobs: {
              specPath: "static/arm-api/swagger-jobs.json",
              outputDir: "docs/arm/api/swagger-jobs",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_logging: {
              specPath: "static/arm-api/swagger-logging.json",
              outputDir: "docs/arm/api/swagger-logging",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_provisioning: {
              specPath: "static/arm-api/swagger-provisioning.json",
              outputDir: "docs/arm/api/swagger-provisioning",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_public: {
              specPath: "static/arm-api/swagger-public.json",
              outputDir: "docs/arm/api/swagger-public",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_rulebook: {
              specPath: "static/arm-api/swagger-rulebook.json",
              outputDir: "docs/arm/api/swagger-rulebook",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_scheduling: {
              specPath: "static/arm-api/swagger-scheduling.json",
              outputDir: "docs/arm/api/swagger-scheduling",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            arm_utilization_tracking: {
              specPath: "static/arm-api/swagger-utilization-tracking.json",
              outputDir: "docs/arm/api/swagger-utilization-tracking",
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
