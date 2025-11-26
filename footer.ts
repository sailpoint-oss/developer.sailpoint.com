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
            label: 'Get certified', 
            href: 'https://university.sailpoint.com/page/professional-certifications-and-knowledge-credentials' 
          },
        ],
      },
      {
        title: 'IdentityIQ',
        items: [
          { 
            label: 'Build a plugin', 
            to: 'https://documentation.sailpoint.com/identityiq/help/plugins/develop_plugins/index.html' 
          },
          { 
            label: 'Get certified', 
            href: 'https://university.sailpoint.com/page/professional-certifications-and-knowledge-credentials' 
          },
        ],
      },
      {
        title: 'Community',
        items: [
          { label: 'Discuss', to: 'https://developer.sailpoint.com/discuss' },
          { label: 'Submit an idea', to: 'https://developer-sailpoint.ideas.aha.io/' },
          { 
            label: 'Contact our team', 
            to: 'https://developer.sailpoint.com/discuss/new-message?groupname=developer_relations' 
          },
        ],
      },
      {
        title: 'More',
        items: [
          { label: 'GitHub', href: 'https://github.com/sailpoint-oss' },
          { label: 'Twitter', href: 'https://twitter.com/sailpoint' },
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
      alt: 'SailPoint Developer Community Logo',
      src: '/img/SailPoint-Developer-Community-Lockup.png',
      srcDark: 'img/SailPoint-Developer-Community-Inverse-Lockup.png',
      href: 'https://developer.sailpoint.com',
    },
    copyright: `Copyright © ${new Date().getFullYear()} SailPoint Technologies, Inc. All Rights Reserved.`,
  };
  
  export default footerConfig;
  