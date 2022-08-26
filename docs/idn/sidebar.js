

const openApiSidebar = {
    openApiSidebar: [
      {
        type: "category",
        label: "IDN V3",
        link: {
          type: "generated-index",
          title: "IDN V3",
          description: "These are the public APIs for SailPoint's SaaS services. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.",
          slug: "/category/identity-now-api-v3"
        },
        // @ts-ignore
        items: require("./api/v3/sidebar.js")
      },
      {
        type: "category",
        label: "IDN Beta",
        link: {
          type: "generated-index",
          title: "IDN Beta",
          description: "These are the public APIs for SailPoint's SaaS services. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.",
          slug: "/category/identity-now-api-beta"
        },
        // @ts-ignore
        items: require("./api/beta/sidebar.js")
      }
    ],
    idnDocs: [
        'idn/getting-started'
    ]
  };
  
  module.exports = openApiSidebar;