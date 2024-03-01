module.exports = {
  title: '',
  logo: {
    alt: 'SailPoint Developer Community',
    src: 'img/SailPoint-Developer-Community-Lockup.png',
    srcDark: 'img/SailPoint-Developer-Community-Inverse-Lockup.png',
  },
  items: [
    {
      position: 'left',
      label: 'Identity Security Cloud',
      to: '/docs',
    },
    {
      position: 'left',
      label: 'IdentityIQ',
      to: '/docs/iiq',
    },
    {
      position: 'left',
      label: 'CoLab',
      to: '/colab',
    },
    {
      position: 'left',
      label: 'Blog',
      to: '/blog',
    },
    {
      position: 'left',
      label: 'Ideas',
      to: 'https://ideas.sailpoint.com',
    },
    {
      position: 'left',
      label: 'Discuss',
      to: 'https://developer.sailpoint.com/discuss/',
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
