const sidebars = {
    nermOpenApiSidebar: [
      {
        type: 'category',
        label: 'NERM',
        collapsible: false,
        items: [
          {
            type: 'doc',
            id: 'api/getting-started'
          },
          {
            type: 'doc',
            id: 'api/authentication'
          },
          {
            type: 'doc',
            id: 'api/pagination-metadata-filtering'
          },
          {
            type: 'category',
            label: 'NERM v1 API',
            link: {
              type: 'generated-index',
              title: 'NERM v1 API',
              description:
                "These are the Non-employee Lifecycle Management APIs for SailPoint. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.",
              slug: '/api',
            },
            // @ts-ignore
            items: require('./api/sidebar.js'),
          }
        ]
      }
    ],
  };

  module.exports = sidebars;