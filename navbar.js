module.exports = {
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
        {label: 'Identity Security Cloud', to: '/docs'},
        {label: 'IdentityIQ', to: '/docs/iiq'},
      ],
    },

    {
      type: 'dropdown',
      label: 'Community',
      position: 'left',
      items: [
        {
          label: 'Developer Forum',
          to: 'https://developer.sailpoint.com/discuss/',
        },
        {
          label: 'CoLab Marketplace',
          to: '/colab',
        },

        {
          label: 'Developer Blog',
          to: '/blog',
        },
        {
          label: 'Ambassador Program',
          to: '/ambassadors',
        },
      ],
    },
    {
      position: 'left',
      label: 'Video Library',
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
        {label: 'Compass', href: 'https://community.sailpoint.com'},
        {label: 'Platform Status', href: 'https://status.sailpoint.com/'},
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
