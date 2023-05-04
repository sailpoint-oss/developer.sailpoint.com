module.exports = [
  [
    '@docusaurus/plugin-client-redirects',
    {
      redirects: [
        {
          to: '/',
          from: ['/conf', '/developerdays', '/developerdays/agenda'],
        },
      ],
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'idn',
      path: 'products/idn',
      routeBasePath: 'idn',
      editUrl:
        'https://github.com/sailpoint-oss/developer-community-site/edit/main/',
      showLastUpdateAuthor: true,
      showLastUpdateTime: true,
      sidebarPath: require.resolve('./products/idn/sidebar.js'),
      docItemComponent: '@theme/ApiItem',
    },
  ]
];
