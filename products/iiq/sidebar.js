/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    iiqOpenApiSidebar: [
        {
          type: "category",
          label: "IIQ Api",
          link: {
            type: "generated-index",
            title: "IIQ Api",
            description: "These are the public APIs for SailPoint's SaaS services. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.",
            slug: "/api"
          },
          // @ts-ignore
          items: require("./api/sidebar.js")
        }
      ],
  };
  
  module.exports = sidebars;
  