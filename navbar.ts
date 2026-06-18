const navbarConfig = {
    title: '',
    logo: {
      alt: 'SailPoint Developers',
      src: 'img/SailPoint-Developer-Community-Lockup.png',
      srcDark: 'img/SailPoint-Developer-Community-Inverse-Lockup.png',
    },
    items: [
      {
        type: 'dropdown',
        label: 'Documentation',
        to: '/docs',
        position: 'left',
        items: [
          { label: 'Identity Security Cloud developer docs', to: '/docs' },
          {
            label: 'IdentityIQ plugin developer guide',
            to: '/docs/iiq/plugin-developer-guide',
          },
          {
            label: 'IdentityIQ product documentation',
            href: 'https://documentation.sailpoint.com/identityiq/help/iiqlandingpage.html',
          },
          {
            label: 'SailPoint product documentation',
            href: 'https://documentation.sailpoint.com',
          },
        ],
      },
      {
        type: 'dropdown',
        label: 'API specifications',
        to: '/docs/api',
        position: 'left',
        items: [
          { label: 'Identity Security Cloud', to: '/docs/api/v2026' },
          { label: 'IdentityIQ', to: '/docs/api/iiq' },
          { label: 'NERM APIs', to: '/docs/api/nerm/v1' },
        ],
      },
      {
        type: 'dropdown',
        label: 'Getting started',
        position: 'left',
        items: [
          { label: 'Developer tools overview', to: '/docs/tools' },
          { label: 'SDKs', to: '/docs/tools/sdk' },
          { label: 'CLI', to: '/docs/tools/cli' },
          {
            label: 'Build a transform',
            to: '/docs/extensibility/transforms/guides/your-first-transform',
          },
          {
            label: 'Build a rule',
            to: '/docs/extensibility/rules/guides/your-first-rule',
          },
          { label: 'Rule Development Kit', to: '/docs/tools/rule-development-kit' },
          { label: 'UI Development Kit', to: '/docs/tools/ui-development-kit' },
          { label: 'Java/.NET string escaper', to: '/tools/escaping-tool-formatter' },
          { label: 'JSON path evaluator', to: '/tools/json-path-evaluator' },
          { label: 'Velocity playground', to: '/tools/velocity-playground' },
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
          { label: 'Videos', to: '/videos' },
          { label: 'Ambassador program', to: '/ambassadors' },
          { label: 'Community policies', to: '/community-policies' },
        ],
      },
      {
        type: 'dropdown',
        label: 'Support',
        position: 'right',
        items: [
          {
            label: 'Submit a support ticket',
            href: 'https://support.sailpoint.com/csm?id=sc_cat_item&sys_id=a78364e81bec151050bcc8866e4bcb5c&referrer=popular_items',
          },
          { label: 'Developer Relations team', to: '/devrel-team' },
          { label: 'SailPoint Compass', href: 'https://community.sailpoint.com' },
          { label: 'Platform status', href: 'https://status.sailpoint.com/' },
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
  