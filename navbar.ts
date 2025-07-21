const navbarConfig = {
    title: '',
    logo: {
      alt: 'SailPoint Developer Community',
      src: 'img/SailPoint-Developer-Community-Lockup.png',
      srcDark: 'img/SailPoint-Developer-Community-Inverse-Lockup.png',
    },
    items: [
      {
        type: 'dropdown',
        label: 'Documentation',
        position: 'left',
        items: [
          { label: 'Identity Security Cloud', to: '/docs' },
          { label: 'IdentityIQ', to: '/docs/iiq' },
        ],
      },
      {
        type: 'dropdown',
        label: 'API specifications',
        position: 'left',
        items: [
          { label: 'Identity Security Cloud', to: '/docs/api/v2025' },
          { label: 'IdentityIQ', to: '/docs/api/iiq' },
          { label: 'NERM', to: '/docs/api/nerm/v1' },
        ],
      },
      {
        type: 'dropdown',
        label: 'Tools',
        position: 'left',
        items: [
          { label: 'SDKs', to: '/docs/tools/sdk' },
          { label: 'CLI', to: '/docs/tools/cli' },
          { label: 'Escaping Tool Formatter', to: '/tools/escaping-tool-formatter' },
          { label: 'JSON Path Evaluator', to: '/tools/json-path-evaluator' },
          { label: 'Rule Development Kit', to: '/docs/tools/rule-development-kit' },
          { label: 'UI Development Kit', to: '/docs/tools/ui-development-kit' },
          { label: 'Community Toolbox', to: '/docs/tools/community-toolbox' },
        ],
      },
      {
        type: 'dropdown',
        label: 'Community',
        position: 'left',
        items: [
          { label: 'Developer forum', to: 'https://developer.sailpoint.com/discuss/' },
          { label: 'CoLab marketplace', to: '/colab' },
          { label: 'Developer blog', to: '/blog' },
          { label: 'Ambassador program', to: '/ambassadors' },
        ],
      },
      {
        position: 'left',
        label: 'Video library',
        to: '/videos',
      },
      {
        type: 'dropdown',
        label: 'Support',
        position: 'right',
        items: [
          {
            label: 'Submit Support Ticket',
            href: 'https://support.sailpoint.com/csm?id=sc_cat_item&sys_id=a78364e81bec151050bcc8866e4bcb5c&referrer=popular_items',
          },
          { label: 'Compass', href: 'https://community.sailpoint.com' },
          { label: 'Platform Status', href: 'https://status.sailpoint.com/' },
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
  