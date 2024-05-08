// module.exports = {
//   title: '',
//   logo: {
//     alt: 'SailPoint Developer Community',
//     src: 'img/SailPoint-Developer-Community-Lockup.png',
//     srcDark: 'img/SailPoint-Developer-Community-Inverse-Lockup.png',
//   },
//   items: [
//     {
//       type: 'dropdown',
//       label: 'Documentation',
//       position: 'left',
//       items: [
//         {label: 'Identity Security Cloud', to: '/docs'},
//         {label: 'IdentityIQ', to: '/docs/iiq'},
//       ],
//     },

//     {
//       type: 'dropdown',
//       label: 'Community',
//       position: 'left',
//       items: [
//         {
//           label: 'Developer Forum',
//           to: 'https://developer.sailpoint.com/discuss/',
//         },
//         {
//           label: 'CoLab Marketplace',
//           to: '/colab',
//         },

//         {
//           label: 'Developer Blog',
//           to: '/blog',
//         },
//         {
//           label: 'Ambassador Program',
//           to: '/ambassadors',
//         },
//       ],
//     },
//     {
//       position: 'left',
//       label: 'Video Library',
//       to: '/videos',
//     },
//     {
//       type: 'dropdown',
//       label: 'Support',
//       position: 'right',
//       items: [
//         {
//           label: 'Submit Support Ticket',
//           href: 'https://support.sailpoint.com/csm?id=sc_cat_item&sys_id=a78364e81bec151050bcc8866e4bcb5c&referrer=popular_items',
//         },
//         {label: 'Compass', href: 'https://community.sailpoint.com'},
//         {label: 'Platform Status', href: 'https://status.sailpoint.com/'},
//       ],
//     },
//     {
//       position: 'right',
//       to: 'https://github.com/sailpoint-oss',
//       className: 'header-github-link',
//       'aria-label': 'SailPoint Open-source GitHub',
//     },
//   ],
// };


module.exports = {
  title: "",
  logo: {
    alt: 'SailPoint Developer Community',
    src: 'img/SailPoint-Developer-Community-Lockup.png',
    srcDark: 'img/SailPoint-Developer-Community-Inverse-Lockup.png',
  },
  items: [
    {
      label: "Developer Docs",
      className: "margin-left--lg",
      megaNav: true,
      items: [
        {
          label: "Cloud Native Security",
          to: "#",
          colorclass: "cloud-native-security",
          description:
            "Discover the APIs, tools and techniques necessary for bringing DevOps practices to the cloud.",
          products: [
            {
              label: "Prisma Cloud Enterprise Edition",
              to: "#",
              logoClass: "prisma",
              apiDocs: [
                {
                  to: "/prisma-cloud/api",
                  label: "Prisma Cloud",
                  icon: "api-doc",
                },
              ],
              docs: [
                {
                  to: "/prisma-cloud/docs",
                  label: "API Workflows",
                  icon: "doc",
                },
              ],
            },
            {
              label: "Prisma Cloud Compute Edition",
              to: "#",
              logoClass: "prisma",
              apiDocs: [
                {
                  to: "/compute/api/",
                  label: "Compute Edition",
                  icon: "api-doc",
                },
              ],
            },
          ],
        },
        {
          label: "Security Operations",
          to: "#",
          colorclass: "security-operations",
          description:
            "Browse reference docs, tutorials, the XSOAR Marketplace and more.",
          products: [
            {
              to: "#",
              label: "Cortex XSOAR",
              logoClass: "xsoar",
              apiDocs: [
                {
                  label: "XSOAR (Demisto) API",
                  to: "https://xsoar.pan.dev/docs/reference/api/demisto-class",
                  icon: "api-doc",
                },
              ],
              docs: [
                {
                  label: "Cortex XSOAR Developer Hub",
                  to: "https://xsoar.pan.dev/docs/welcome",
                  icon: "doc",
                },
              ],
            },
            {
              label: "Cortex",
              to: "#",
              logoClass: "cortex",
              apiDocs: [
                {
                  label: "Expander API",
                  to: "https://cortex.pan.dev/api/expander/annotations-api",
                  icon: "api-doc",
                },
              ],
              docs: [
                {
                  label: "Xpanse Python SDK",
                  to: "https://cortex-xpanse-python-sdk.readthedocs.io/en/latest/",
                  icon: "doc",
                },
              ],
            },
          ],
        },
        {
          label: "Network Security",
          to: "#",
          colorclass: "network-security",
          description:
            "Learn how to make the most of the PAN-OS APIs, SDKs, Expedition, Terraform, Ansible, and more.",
          products: [
            {
              label: "PAN-OS",
              to: "#",
              logoClass: "panos",
              docs: [
                {
                  label: "APIs, SDKs, & Tutorials",
                  to: "panos/docs",
                  icon: "doc",
                },
                {
                  label: "Terraform for VM-Series",
                  to: "swfw",
                  icon: "doc",
                },
                {
                  label: "Terraform for PAN-OS",
                  to: "terraform/docs/panos",
                  icon: "doc",
                },
                {
                  label: "Ansible",
                  to: "ansible/docs/panos",
                  icon: "doc",
                },
              ],
              apiDocs: [
                {
                  label: "Ansible Module Reference",
                  to: "https://galaxy.ansible.com/ui/repo/published/paloaltonetworks/panos/docs",
                  icon: "api-doc",
                },
                {
                  label: "Terraform Provider Reference",
                  to: "https://registry.terraform.io/providers/PaloAltoNetworks/panos/latest/docs",
                  icon: "api-doc",
                },
              ],
            },
            {
              label: "Cloud NGFW",
              to: "#",
              logoClass: "panos",
              docs: [
                {
                  label: "Introduction",
                  to: "cloudngfw/docs",
                  icon: "doc",
                },
                {
                  label: "Terraform - AWS",
                  to: "terraform/docs/cloudngfw",
                  icon: "doc",
                },
                {
                  label: "Terraform - Azure",
                  to: "terraform/docs/cloudngfw",
                  icon: "doc",
                },
              ],
              apiDocs: [
                {
                  to: "cloudngfw/aws/api/",
                  label: "Cloud NGFW for AWS API",
                  icon: "api-doc",
                },
              ],
            },
            {
              label: "Cortex Data Lake",
              to: "#",
              logoClass: "panos",
              docs: [
                {
                  label: "Log Forwarding Developer's Guide",
                  to: "cdl/docs/log-forwarding",
                  icon: "doc",
                },
                {
                  label: "Log Forwarding Change Log",
                  to: "cdl/docs/logforwarding/release-notes/changelog",
                  icon: "doc",
                },
                {
                  label: "Log Forwarding Release Notes",
                  to: "cdl/docs/logforwarding/release-notes/relnotes",
                  icon: "doc",
                },
              ],
              apiDocs: [
                {
                  label: "Log Forwarding",
                  to: "cdl/api/log-forwarding",
                  icon: "api-doc",
                },
              ],
            },
            {
              label: "Cloud-Delivered Security Services",
              to: "#",
              logoClass: "panos",
              docs: [
                {
                  label: "Cloud-Delivered Security Services",
                  to: "/cdss/docs",
                  icon: "doc",
                },
              ],
              apiDocs: [
                {
                  to: "/aiops-ngfw-bpa/api",
                  label: "AIOps for NGFW Best Practice Assessment API",
                  icon: "api-doc",
                },
                {
                  to: "/threat-vault/api",
                  label: "Threat Vault APIs",
                  icon: "api-doc",
                },
                {
                  to: "/iot/api",
                  label: "IoT API",
                  icon: "api-doc",
                },
                {
                  to: "/dns-security/api",
                  label: "DNS Security API",
                  icon: "api-doc",
                },
                {
                  to: "dlp/api",
                  label: "Data Loss Prevention API",
                  icon: "api-doc",
                },
                {
                  to: "email-dlp/api",
                  label: "Email Data Loss Prevention API",
                  icon: "api-doc",
                },
                {
                  to: "https://docs.paloaltonetworks.com/saas-security/saas-security-admin/saas-security-api",
                  label: "SaaS Security API",
                  icon: "api-doc",
                },
                {
                  to: "https://docs.paloaltonetworks.com/wildfire/u-v/wildfire-api",
                  label: "WildFire API",
                  icon: "api-doc",
                },
              ],
            },
            {
              label: "Expedition",
              to: "#",
              logoClass: "panos",
              docs: [
                {
                  label: "Expedition",
                  to: "expedition/docs",
                  icon: "doc",
                },
              ],
              apiDocs: [],
            },
          ],
        },
        {
          label: "Secure Access Service Edge",
          to: "#",
          colorclass: "sase",
          description:
            "Discover Prisma SASE APIs, including Prisma Access and Prisma SD-WAN.",
          products: [
            {
              label: "Prisma SASE",
              to: "#",
              logoClass: "prisma",
              docs: [
                {
                  to: "sase/docs",
                  label: "Prisma SASE Developer's Guide",
                  icon: "doc",
                },
                {
                  to: "/sase/docs/release-notes/changelog",
                  label: "Prisma SASE Changelog",
                  icon: "doc",
                },
                {
                  to: "sase/docs/release-notes/release-notes",
                  label: "Prisma SASE Release Notes",
                  icon: "doc",
                },
              ],
              apiDocs: [
                {
                  to: "sase/api/tenancy",
                  label: "Tenancy Service",
                  icon: "api-doc",
                },
                {
                  to: "sase/api/iam",
                  label: "Identity and Access Management",
                  icon: "api-doc",
                },
                {
                  to: "sase/api/auth",
                  label: "Authentication Service",
                  icon: "api-doc",
                },
                {
                  to: "sase/api/subscription",
                  label: "Subscription Service",
                  icon: "api-doc",
                },
                {
                  to: "/access/api/prisma-access-config",
                  label: "Prisma Access Configuration",
                  icon: "api-doc",
                },
                {
                  to: "/access/api/ztna/ztna-connector-apis",
                  label: "ZTNA Connector",
                  icon: "api-doc",
                },
                {
                  to: "sdwan/api",
                  label: "Prisma SD-WAN",
                  icon: "api-doc",
                },
                {
                  to: "sase/api/mt-monitor",
                  label: "Aggregate Monitoring",
                  icon: "api-doc",
                },
                {
                  to: "sase/api/mt-notifications",
                  label: "Multitenant Notifications",
                  icon: "api-doc",
                },
                {
                  to: "access/api/adem/autonomous-dem-api",
                  label: "Autonomous DEM",
                  icon: "api-doc",
                },
                {
                  to: "access/api/insights",
                  label: "Prisma Access Insights",
                  icon: "api-doc",
                },
                {
                  label: "Log Forwarding",
                  to: "cdl/api/log-forwarding",
                  icon: "api-doc",
                },
              ],
            },
            {
              label: "Prisma Access Configuration",
              to: "#",
              logoClass: "prisma",
              docs: [
                {
                  label: "Prisma Access Configuration Developer's Guide",
                  to: "access/docs/prisma-access-config",
                  icon: "doc",
                },
              ],
              apiDocs: [
                {
                  to: "access/api/prisma-access-config",
                  label: "Prisma Access Configuration",
                  icon: "api-doc",
                },
              ],
            },
            {
              label: "Prisma Access Insights",
              to: "#",
              logoClass: "prisma",
              docs: [
                {
                  label: "Get Started 1.0",
                  to: "access/docs/insights/getting_started-10",
                  icon: "doc",
                },
                {
                  label: "Get Started 2.0",
                  to: "access/docs/insights/getting_started-20",
                  icon: "doc",
                },
                {
                  label: "API FAQs",
                  to: "access/docs/insights/pai-faqs",
                  icon: "doc",
                },
              ],
              apiDocs: [
                {
                  to: "access/api/insights/1.0",
                  label: "Prisma Access Insights 1.0",
                  icon: "api-doc",
                },
                {
                  to: "access/api/insights",
                  label: "Prisma Access Insights 2.0",
                  icon: "api-doc",
                },
              ],
            },
            {
              label: "Prisma SD-WAN",
              to: "#",
              logoClass: "prisma",
              docs: [
                {
                  label: "Prisma SD-WAN Overview",
                  to: "/sdwan/docs",
                  icon: "doc",
                },
              ],
              apiDocs: [
                {
                  to: "sdwan/api",
                  label: "Prisma SD-WAN Unified",
                  icon: "api-doc",
                },
                {
                  to: "sdwan/api/legacy",
                  label: "Prisma SD-WAN Legacy",
                  icon: "api-doc",
                },
              ],
            },
          ],
        },
        {
          label: "Partner Integrations",
          to: "#",
          colorclass: "partner-integrations",
          description: "Discover technology partner integrations.",
          products: [
            {
              label: "Automation",
              to: "#",
              docs: [
                {
                  label: "Terraform for Software NGFW",
                  to: "swfw",
                  icon: "doc",
                },
                {
                  label: "Terraform and Palo Alto Networks",
                  to: "terraform",
                  icon: "doc",
                },
                {
                  label: "Ansible",
                  to: "ansible",
                  icon: "doc",
                },
              ],
            },
            {
              label: "SIEM",
              to: "#",
              docs: [
                {
                  label: "Splunk App/Add-on",
                  to: "splunk/docs",
                  icon: "doc",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      to: "https://gallery.pan.dev",
      className: "header-github-link",
      position: "right",
    },
    {
      href: "https://medium.com/palo-alto-networks-developer-blog",
      className: "header-blog-link",
      position: "right",
      "aria-label": "Palo Alto Networks Developer Blog",
    },
  ],
}
