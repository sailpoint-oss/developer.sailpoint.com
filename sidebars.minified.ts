import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

import {
  versionCrumb,
  versionSelector,
} from 'docusaurus-plugin-openapi-docs/lib/sidebars/utils';
import versions from './docs/api/v2026/versions.json';

// Minified sidebar config — only includes ISC API sidebars.
// openApiSidebar, iiqSideBar, iiqApiSideBar, nermSideBar, and nerm_2025_sidebar
// are intentionally omitted to keep the minified build focused on ISC API docs only.
const sidebars: SidebarsConfig = {
  isc_2026_sidebar: [
    {
      type: 'html',
      defaultStyle: true,
      value: versionSelector(versions),
      className: 'version-button',
    },
    {
      type: 'html',
      defaultStyle: true,
      value: versionCrumb(`v2026`),
    },
    {
      type: 'doc',
      id: 'api/v2026/getting-started',
    },
    {
      type: 'doc',
      id: 'api/v2026/authentication',
    },
    {
      type: 'doc',
      id: 'api/v2026/authorization',
    },
    {
      type: 'doc',
      id: 'api/v2026/api-versioning-strategy',
    },
    {
      type: 'doc',
      id: 'api/v2026/standard-collection-parameters',
    },
    {
      type: 'doc',
      id: 'api/v2026/rate-limit',
    },
    {
      type: 'doc',
      id: 'api/v2026/postman-collections',
    },
    {
      type: 'doc',
      id: 'api/v2026/patch-requests',
    },
    {
      type: 'category',
      label: 'Identity Security Cloud v2026 APIs',
      link: {
        type: 'generated-index',
        title: 'Identity Security Cloud v2026 APIs',
        description:
          'Use these APIs to interact with the Identity Security Cloud platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.',
        slug: '/api/v2026',
      },
      items: require('./docs/api/v2026/sidebar.ts'),
    },
  ],
  isc_2025_sidebar: [
    {
      type: 'html',
      defaultStyle: true,
      value: versionSelector(versions),
      className: 'version-button',
    },
    {
      type: 'html',
      defaultStyle: true,
      value: versionCrumb(`v2025`),
    },
    {
      type: 'doc',
      id: 'api/v2025/getting-started',
    },
    {
      type: 'doc',
      id: 'api/v2025/authentication',
    },
    {
      type: 'doc',
      id: 'api/v2025/authorization',
    },
    {
      type: 'doc',
      id: 'api/v2025/api-versioning-strategy',
    },
    {
      type: 'doc',
      id: 'api/v2025/standard-collection-parameters',
    },
    {
      type: 'doc',
      id: 'api/v2025/rate-limit',
    },
    {
      type: 'doc',
      id: 'api/v2025/postman-collections',
    },
    {
      type: 'doc',
      id: 'api/v2025/patch-requests',
    },
    {
      type: 'category',
      label: 'Identity Security Cloud v2025 APIs',
      link: {
        type: 'generated-index',
        title: 'Identity Security Cloud v2025 APIs',
        description:
          'Use these APIs to interact with the Identity Security Cloud platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.',
        slug: '/api/v2025',
      },
      items: require('./docs/api/v2025/sidebar.ts'),
    },
  ],
  isc_2024_sidebar: [
    {
      type: 'html',
      defaultStyle: true,
      value: versionSelector(versions),
      className: 'version-button',
    },
    {
      type: 'html',
      defaultStyle: true,
      value: versionCrumb(`v2024`),
    },
    {
      type: 'doc',
      id: 'api/v2024/getting-started',
    },
    {
      type: 'doc',
      id: 'api/v2024/authentication',
    },
    {
      type: 'doc',
      id: 'api/v2024/authorization',
    },
    {
      type: 'doc',
      id: 'api/v2024/api-versioning-strategy',
    },
    {
      type: 'doc',
      id: 'api/v2024/standard-collection-parameters',
    },
    {
      type: 'doc',
      id: 'api/v2024/rate-limit',
    },
    {
      type: 'doc',
      id: 'api/v2024/postman-collections',
    },
    {
      type: 'doc',
      id: 'api/v2024/patch-requests',
    },
    {
      type: 'category',
      label: 'Identity Security Cloud v2024 APIs',
      link: {
        type: 'generated-index',
        title: 'Identity Security Cloud v2024 APIs',
        description:
          'Use these APIs to interact with the Identity Security Cloud platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.',
        slug: '/api/v2024',
      },
      items: require('./docs/api/v2024/sidebar.ts'),
    },
  ],
  isc_beta_sidebar: [
    {
      type: 'html',
      defaultStyle: true,
      value: versionSelector(versions),
      className: 'version-button',
    },
    {
      type: 'html',
      defaultStyle: true,
      value: versionCrumb(`beta`),
    },
    {
      type: 'doc',
      id: 'api/beta/getting-started',
    },
    {
      type: 'doc',
      id: 'api/beta/authentication',
    },
    {
      type: 'doc',
      id: 'api/beta/authorization',
    },
    {
      type: 'doc',
      id: 'api/beta/api-versioning-strategy',
    },
    {
      type: 'doc',
      id: 'api/beta/standard-collection-parameters',
    },
    {
      type: 'doc',
      id: 'api/beta/rate-limit',
    },
    {
      type: 'doc',
      id: 'api/beta/postman-collections',
    },
    {
      type: 'doc',
      id: 'api/beta/patch-requests',
    },
    {
      type: 'category',
      label: 'Identity Security Cloud beta APIs',
      link: {
        type: 'generated-index',
        title: 'Identity Security Cloud beta APIs',
        description:
          'Use these APIs to interact with the Identity Security Cloud platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.',
        slug: '/api/beta',
      },
      items: require('./docs/api/beta/sidebar.ts'),
    },
  ],
  isc_v3_sidebar: [
    {
      type: 'html',
      defaultStyle: true,
      value: versionSelector(versions),
      className: 'version-button',
    },
    {
      type: 'html',
      defaultStyle: true,
      value: versionCrumb(`v3`),
    },
    {
      type: 'doc',
      id: 'api/v3/getting-started',
    },
    {
      type: 'doc',
      id: 'api/v3/authentication',
    },
    {
      type: 'doc',
      id: 'api/v3/authorization',
    },
    {
      type: 'doc',
      id: 'api/v3/api-versioning-strategy',
    },
    {
      type: 'doc',
      id: 'api/v3/standard-collection-parameters',
    },
    {
      type: 'doc',
      id: 'api/v3/rate-limit',
    },
    {
      type: 'doc',
      id: 'api/v3/postman-collections',
    },
    {
      type: 'doc',
      id: 'api/v3/patch-requests',
    },
    {
      type: 'category',
      label: 'Identity Security Cloud v3 APIs',
      link: {
        type: 'generated-index',
        title: 'Identity Security Cloud v3 APIs',
        description:
          'Use these APIs to interact with the Identity Security Cloud platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.',
        slug: '/api/v3',
      },
      items: require('./docs/api/v3/sidebar.ts'),
    },
  ],
};

export default sidebars;
