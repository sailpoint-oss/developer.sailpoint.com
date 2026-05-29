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
            resolve: {
              fallback: {
                // postman-code-generators uses Node's `path` module, which is
                // not available in the browser. Polyfill it so Rspack can bundle it.
                path: require.resolve('path-browserify'),
              },
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
        {
          to: '/docs/tools/ui-development-kit',
          from: ['/docs/tools/community-toolbox', '/idn/tools/community-toolbox'],
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
      id: 'isc-api',
      docsPluginId: 'isc',
      config: {
        isc_versioned: {
          specPath: 'static/api-specs/idn/sailpoint-api.yaml',
          outputDir: 'docs/api/',
          sidebarOptions: {
            groupPathsBy: 'tag',
            categoryLinkSource: 'tag',
            sidebarGenerators: {
              createDocItem(item, {sidebarOptions: {customProps}, basePath}) {
                const sidebar_label = item.frontMatter.sidebar_label;
                const title = item.title;
                const id =
                  item.type === 'schema' ? `schemas/${item.id}` : item.id;
                const versionMatch = id.match(/v-(\d+)$/);
                const versionClass = versionMatch
                  ? `menu__list-item--v${versionMatch[1]}`
                  : null;
                const className =
                  item.type === 'api'
                    ? clsx(
                        {
                          'menu__list-item--deprecated': item.api.deprecated,
                          'menu__list-item--experimental':
                            !!item.api.parameters?.find(
                              (header) =>
                                header.name === 'X-SailPoint-Experimental',
                            ),
                          'api-method': !!item.api.method,
                        },
                        item.api.method,
                        versionClass,
                      )
                    : clsx(
                        {
                          'menu__list-item--deprecated': item.schema.deprecated,
                        },
                        'schema',
                        versionClass,
                      );
                return {
                  type: 'doc' as const,
                  id:
                    basePath === '' || undefined
                      ? `${id}`
                      : `${basePath}/${id}`,
                  label: (sidebar_label as string) ?? title ?? id,
                  key: id + '-' + title.toLowerCase().replace(/ /g, '-'),
                  customProps: customProps,
                  className: className ? className : undefined,
                };
              },
            },
          },
          version: 'v1',
          label: 'v1',
          downloadUrl:
            'https://github.com/sailpoint-oss/api-specs/releases/latest/download/deref-sailpoint-api.v2026.yaml',
          baseUrl: '/docs/api',
          template: 'api.mustache',
          markdownGenerators: {
            createApiPageMD,
          }
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
            sidebarGenerators: {
              createDocItem(item, {sidebarOptions: {customProps}, basePath}) {
                const sidebar_label = item.frontMatter.sidebar_label;
                const title = item.title;
                const id =
                  item.type === 'schema' ? `schemas/${item.id}` : item.id;
                const versionMatch = id.match(/v-(\d+)$/);
                const versionClass = versionMatch
                  ? `menu__list-item--v${versionMatch[1]}`
                  : null;
                const className =
                  item.type === 'api'
                    ? clsx(
                        {
                          'menu__list-item--deprecated': item.api.deprecated,
                          'menu__list-item--experimental':
                            !!item.api.parameters?.find(
                              (header) =>
                                header.name === 'X-SailPoint-Experimental',
                            ),
                          'api-method': !!item.api.method,
                        },
                        item.api.method,
                        versionClass,
                      )
                    : clsx(
                        {
                          'menu__list-item--deprecated': item.schema.deprecated,
                        },
                        'schema',
                        versionClass,
                      );
                return {
                  type: 'doc' as const,
                  id:
                    basePath === '' || undefined
                      ? `${id}`
                      : `${basePath}/${id}`,
                  label: (sidebar_label as string) ?? title ?? id,
                  key: id + '-' + title.toLowerCase().replace(/ /g, '-'),
                  customProps: customProps,
                  className: className ? className : undefined,
                };
              },
            },
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
