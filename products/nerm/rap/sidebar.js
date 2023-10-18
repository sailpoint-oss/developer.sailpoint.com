const sidebars = {
    nermOpenApiSidebar: [
      {
        type: 'category',
        label: 'NERM Roles and Permissions API',
        link: {
          type: 'generated-index',
          title: 'NERM Roles and Permissions  API',
          description:
            "These are the Non-employee Lifecycle Management Roles and Permissions APIs for SailPoint. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.",
          slug: '/api/rap',
        },
        // @ts-ignore
        items: require('./api/sidebar.js'),
      },
    ],
  };
  
  module.exports = sidebars;