const {createApiPageMD} = require('./createApiPageMD');
import clsx from 'clsx';

const pluginConfig = [
  [
    function disableExpensiveBundlerOptimizationPlugin() {
      return {
        name: 'disable-expensive-bundler-optimizations',
        configureWebpack(config, isServer) {
          return {
            optimization: {
              // See https://github.com/facebook/docusaurus/discussions/11199
              concatenateModules: false,
            },
          };
        },
      };
    },
    {},
  ],
  [
    '@docusaurus/plugin-google-tag-manager',
    {
      containerId: 'GTM-KB3S9VMT',
    },
  ],
  [
    '@docusaurus/plugin-client-redirects',
    {
      redirects: [
        {
          to: '/',
          from: ['/conf', '/developerdays', '/developerdays/agenda'],
        },
        {
          to: '/ambassadors',
          from: ['/ambassador-program', '/ambassador'],
        },
      ],
      createRedirects(existingPath) {
        if (existingPath.startsWith('/docs')) {
          return [existingPath.replace('/docs', '/idn')];
        }
        return undefined; // Return a falsy value: no redirect created
      },
    },
  ],
  [
    'docusaurus-plugin-openapi-docs',
    {
      id: 'idn-api',
      docsPluginId: 'idn',
      config: {
        idn_v3: {
          specPath: 'static/api-specs/idn/sailpoint-api.v3.yaml',
          outputDir: 'docs/api/v3',
          downloadUrl:
            'https://github.com/sailpoint-oss/api-specs/releases/latest/download/deref-sailpoint-api.v3.yaml',
          sidebarOptions: {
            groupPathsBy: 'tag',
            categoryLinkSource: 'tag',
          },
          template: 'api.mustache',
        },
        idn_beta: {
          specPath: 'static/api-specs/idn/sailpoint-api.beta.yaml',
          outputDir: 'docs/api/beta',
          downloadUrl:
            'https://github.com/sailpoint-oss/api-specs/releases/latest/download/deref-sailpoint-api.beta.yaml',
          sidebarOptions: {
            groupPathsBy: 'tag',
            categoryLinkSource: 'tag',
          },
          template: 'api.mustache',
        },
      },
    },
  ],
  [
    'docusaurus-plugin-openapi-docs',
    {
      id: 'isc-api',
      docsPluginId: 'isc',
      config: {
        isc_versioned: {
          specPath: 'static/code-examples/v2025/v2025.yaml',
          outputDir: 'docs/api/v2025',
          sidebarOptions: {
            groupPathsBy: 'tag',
            categoryLinkSource: 'tag',
            sidebarGenerators: {
              createDocItem(item, {sidebarOptions: {customProps}, basePath}) {
                const sidebar_label = item.frontMatter.sidebar_label;
                const title = item.title;
                const id =
                  item.type === 'schema' ? `schemas/${item.id}` : item.id;
                const className =
                  item.type === 'api'
                    ? clsx(
                        {
                          'menu__list-item--deprecated': item.api.deprecated,
                          'menu__list-item--experimental':
                            !!item.api.parameters?.find(
                              (header) =>
                                header.name === 'X-SailPoint-Experimental',
                            ), // checks for existence of extension and adds "experimental" class
                          'api-method': !!item.api.method,
                        },
                        item.api.method,
                      )
                    : clsx(
                        {
                          'menu__list-item--deprecated': item.schema.deprecated,
                        },
                        'schema',
                      );
                return {
                  type: 'doc' as const,
                  id:
                    basePath === '' || undefined
                      ? `${id}`
                      : `${basePath}/${id}`,
                  label: (sidebar_label as string) ?? title ?? id,
                  customProps: customProps,
                  className: className ? className : undefined,
                };
              },
            },
          },
          version: 'v2025',
          label: 'v2025',
          downloadUrl:
            'https://github.com/sailpoint-oss/api-specs/releases/latest/download/deref-sailpoint-api.v2025.yaml',
          baseUrl: '/docs/api/v2025',
          template: 'api.mustache',
          markdownGenerators: {
            createApiPageMD,
          },
          versions: {
            v2026: {
              specPath: 'static/code-examples/v2026/v2026.yaml',
              outputDir: 'docs/api/v2026',
              downloadUrl:
                'https://github.com/sailpoint-oss/api-specs/releases/latest/download/deref-sailpoint-api.v2026.yaml',
              label: 'v2026',
              baseUrl: '/docs/api/v2026',
            },
            v2024: {
              specPath: 'static/code-examples/v2024/v2024.yaml',
              outputDir: 'docs/api/v2024',
              downloadUrl:
                'https://github.com/sailpoint-oss/api-specs/releases/latest/download/deref-sailpoint-api.v2024.yaml',
              label: 'v2024',
              baseUrl: '/docs/api/v2024',
            },
            v3: {
              specPath: 'static/code-examples/v3/v3.yaml',
              outputDir: 'docs/api/v3',
              downloadUrl:
                'https://github.com/sailpoint-oss/api-specs/releases/latest/download/deref-sailpoint-api.v3.yaml',
              label: 'v3',
              baseUrl: '/docs/api/v3',
            },
            beta: {
              specPath: 'static/code-examples/beta/beta.yaml',
              outputDir: 'docs/api/beta',
              downloadUrl:
                'https://github.com/sailpoint-oss/api-specs/releases/latest/download/deref-sailpoint-api.beta.yaml',
              label: 'Beta',
              baseUrl: '/docs/api/beta',
            },
          },
        },
      },
    },
  ],
  [
    'docusaurus-plugin-openapi-docs',
    {
      id: 'iiq-api',
      docsPluginId: 'iiq',
      config: {
        iiq: {
          specPath: 'static/api-specs/iiq/sailpoint-api.iiq.yaml',
          outputDir: 'docs/api/iiq',
          downloadUrl:
            'https://raw.githubusercontent.com/sailpoint-oss/api-specs/main/iiq/sailpoint-api.iiq.yaml',
          sidebarOptions: {
            groupPathsBy: 'tag',
            categoryLinkSource: 'tag',
          },
          template: 'api.mustache',
        },
      },
    },
  ],
  [
    'docusaurus-plugin-openapi-docs',
    {
      id: 'nerm-api',
      docsPluginId: 'nerm',
      config: {
        nerm_versioned: {
          version: 'v2025', // The default version shown
          label: 'v2025',
          specPath: 'static/api-specs/nerm/v2025/v2025.yaml',
          outputDir: 'docs/api/nerm/v2025',
          downloadUrl:
            'https://github.com/sailpoint-oss/api-specs/releases/latest/download/deref-sailpoint-api.nerm.v2025.yaml',
          baseUrl: '/docs/api/nerm/v2025',
          sidebarOptions: {
            groupPathsBy: 'tag',
            categoryLinkSource: 'tag',
          },
          template: 'api.mustache',
          versions: {
            v1: {
              label: 'v1',
              specPath: 'static/api-specs/nerm/openapi.yaml',
              outputDir: 'docs/api/nerm/v1',
              baseUrl: '/docs/api/nerm/v1',
              downloadUrl:
                'https://github.com/sailpoint-oss/api-specs/releases/latest/download/deref-sailpoint-api.nerm.yaml',
            },
          },
        },
      },
    },
  ],
];

export default pluginConfig;
