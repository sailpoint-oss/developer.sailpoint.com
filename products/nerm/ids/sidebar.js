const sidebars = {
    nermOpenApiSidebar: [
      {
        type: 'category',
        label: 'NERM API',
        link: {
          type: 'generated-index',
          title: 'NERM API',
          description:
            "These are the Non-employee Lifecycle Management APIs for SailPoint. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.",
          slug: '/api/ids',
        },
        // @ts-ignore
        items: require('./api/sidebar.js'),
      },
    ],
  };
  
  module.exports = sidebars;