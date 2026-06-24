import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';


// Minified sidebar config — only includes ISC API sidebars.
// openApiSidebar, iiqSideBar, iiqApiSideBar, nermSideBar, and nerm_2025_sidebar
// are intentionally omitted to keep the minified build focused on ISC API docs only.
const sidebars: SidebarsConfig = {
  isc_api_sidebar: [
    {
      type: 'doc',
      id: 'api/getting-started',
    },
    {
      type: 'doc',
      id: 'api/authentication',
    },
    {
      type: 'doc',
      id: 'api/authorization',
    },
    {
      type: 'doc',
      id: 'api/api-versioning-strategy',
    },
    {
      type: 'doc',
      id: 'api/standard-collection-parameters',
    },
    {
      type: 'doc',
      id: 'api/rate-limit',
    },
    {
      type: 'doc',
      id: 'api/postman-collections',
    },
    {
      type: 'doc',
      id: 'api/patch-requests',
    },
    {
      type: 'category',
      label: 'SailPoint APIs',
      link: {
        type: 'generated-index',
        title: 'SailPoint APIs',
        description:
          'Use these APIs to interact with the IdentityNow platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.',
        slug: '/api',
      },
      items: require('./docs/api/sidebar.ts'),
    },
  ]
};

export default sidebars;
