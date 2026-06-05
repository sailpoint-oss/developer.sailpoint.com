const footerConfig = {
    style: 'light',
    links: [
      {
        title: 'Identity Security Cloud',
        items: [
          { label: 'Your first API call', to: 'docs/api/getting-started' },
          { label: 'Build a transform', to: 'docs/extensibility/transforms/guides/your-first-transform' },
          { label: 'Build a SaaS connector', to: 'docs/connectivity/saas-connectivity' },
          { 
            label: 'SailPoint certifications',
            href: 'https://university.sailpoint.com/page/professional-certifications-and-knowledge-credentials' 
          },
        ],
      },
      {
        title: 'IdentityIQ',
        items: [
          { 
            label: 'Build an IdentityIQ plugin',
            to: 'https://documentation.sailpoint.com/identityiq/help/plugins/develop_plugins/index.html' 
          },
          { 
            label: 'SailPoint certifications',
            href: 'https://university.sailpoint.com/page/professional-certifications-and-knowledge-credentials' 
          },
        ],
      },
      {
        title: 'Community',
        items: [
          { label: 'Developer forum', to: 'https://developer.sailpoint.com/discuss' },
          { label: 'Videos', to: '/videos' },
          { label: 'Community policies', to: '/community-policies' },
          { label: 'Submit an idea', to: 'https://developer-sailpoint.ideas.aha.io/' },
          { 
            label: 'Meet the Developer Relations team',
            to: '/devrel-team',
          },
          {
            label: 'Contact Developer Relations',
            to: 'https://developer.sailpoint.com/discuss/new-message?groupname=developer_relations' 
          },
        ],
      },
      {
        title: 'Open source',
        items: [
          { label: 'GitHub', href: 'https://github.com/sailpoint-oss' },
        ],
      },
      {
        title: 'Company',
        items: [
          { label: 'The SailPoint story', to: 'https://www.sailpoint.com/company/' },
          { 
            label: 'The SailPoint way', 
            to: 'https://www.sailpoint.com/company/diversity-inclusion-and-belonging/' 
          },
          { label: 'Leadership team', to: 'https://www.sailpoint.com/company/#h-our-leadership' },
          { label: 'Become a partner', to: 'https://www.sailpoint.com/partners/become-partner/' },
        ],
      },
      {
        title: 'Legal',
        items: [
          { label: 'Terms & conditions', to: 'https://developer.sailpoint.com/discuss/tos' },
        ],
      },
    ],
    logo: {
      alt: 'SailPoint Developers',
      src: '/img/SailPoint-Developer-Community-Lockup.png',
      srcDark: 'img/SailPoint-Developer-Community-Inverse-Lockup.png',
      href: 'https://developer.sailpoint.com',
    },
    copyright: `Copyright © ${new Date().getFullYear()} SailPoint Technologies, Inc. All Rights Reserved.`,
  };
  
  export default footerConfig;
  