const navbarConfig = {
    title: '',
    logo: {
      alt: 'SailPoint Developer Community',
      src: 'img/SailPoint-Developer-Community-Lockup.png',
      srcDark: 'img/SailPoint-Developer-Community-Inverse-Lockup.png',
    },
    items: [
      {
        type: 'custom-megaDropdown',
        label: 'Documentation',
        position: 'left',
        groups: [
          {
            label: 'Identity Security Cloud',
            items: [
              { label: 'Overview', to: '/docs' },
              { label: 'Extensibility', to: '/docs/extensibility' },
              { label: 'Connectivity', to: '/docs/connectivity' },
              { label: 'Reporting', to: '/docs/reporting' },
              { label: 'Guides', to: '/docs/guides' },
            ],
          },
          {
            label: 'IdentityIQ',
            items: [
              { label: 'Overview', to: '/docs/iiq' },
              { label: 'Plugin Developer Guide', to: '/docs/iiq/plugin-developer-guide' },
            ],
          },
        ],
      },
      {
        type: 'custom-megaDropdown',
        label: 'API specifications',
        position: 'left',
        groups: [
          {
            label: 'Identity Security Cloud',
            items: [
              { label: 'Getting Started', to: '/docs/api/getting-started' },
              { label: 'Authentication', to: '/docs/api/authentication' },
              { label: 'Authorization', to: '/docs/api/authorization' },
              { label: 'API Versioning Strategy', to: '/docs/api/api-versioning-strategy' },
              { label: 'Standard Collection Parameters', to: '/docs/api/standard-collection-parameters' },
              { label: 'Rate Limits', to: '/docs/api/rate-limit' },
              { label: 'Postman Collections', to: '/docs/api/postman-collections' },
              { label: 'Patch Requests', to: '/docs/api/patch-requests' },
              { label: 'All ISC API Specs', to: '/docs/api' },
            ],
          },
          {
            label: 'Other platforms',
            items: [
              { label: 'IdentityIQ', to: '/docs/api/iiq' },
              { label: 'NERM', to: '/docs/api/nerm/v1' },
              { label: 'Legacy Specs', to: '/apis/legacy' },
            ],
          },
        ],
      },
      {
        type: 'custom-megaDropdown',
        label: 'Tools',
        position: 'left',
        groups: [
          {
            label: 'SDKs & CLI',
            items: [
              { label: 'SDKs', to: '/docs/tools/sdk' },
              { label: 'CLI', to: '/docs/tools/cli' },
              { label: 'Rule Development Kit', to: '/docs/tools/rule-development-kit' },
              { label: 'UI Development Kit', to: '/docs/tools/ui-development-kit' },
            ],
          },
          {
            label: 'Utilities',
            items: [
              { label: 'Escaping Tool Formatter', to: '/tools/escaping-tool-formatter' },
              { label: 'JSON Path Evaluator', to: '/tools/json-path-evaluator' },
              { label: 'Velocity PlayGround', to: '/tools/velocity-playground' },
            ],
          },
        ],
      },
      {
        type: 'custom-megaDropdown',
        label: 'Community',
        position: 'left',
        groups: [
          {
            label: 'Connect',
            items: [
              { label: 'Developer forum', to: 'https://developer.sailpoint.com/discuss/' },
              { label: 'CoLab marketplace', to: '/colab' },
              { label: 'Ambassador program', to: '/ambassadors' },
            ],
          },
          {
            label: 'Learn',
            items: [
              { label: 'Video library', to: '/videos' },
              { label: 'Developer blog', to: '/blog' },
              { label: 'Community policies', to: '/docs/community-policies' },
              { label: 'About Developer Relations', to: '/about-developer-relations' },
            ],
          },
        ],
      },
      {
        type: 'custom-megaDropdown',
        label: 'Support',
        position: 'right',
        groups: [
          {
            items: [
              {
                label: 'Submit Support Ticket',
                href: 'https://support.sailpoint.com/csm?id=sc_cat_item&sys_id=a78364e81bec151050bcc8866e4bcb5c&referrer=popular_items',
              },
              { label: 'Compass', href: 'https://community.sailpoint.com' },
              { label: 'Platform Status', href: 'https://status.sailpoint.com/' },
            ],
          },
        ],
      },
      {
        position: 'right',
        to: 'https://github.com/sailpoint-oss',
        className: 'header-github-link',
        'aria-label': 'SailPoint Open-source GitHub',
      },
    ],
  };

  export default navbarConfig;
