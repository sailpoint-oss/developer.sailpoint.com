import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const primaryLinks = [
  {
    label: 'Documentation',
    title: 'Build with SailPoint',
    description: 'Explore guides, reference material, and product-specific developer resources.',
    link: '/docs',
  },
  {
    label: 'API specifications',
    title: 'Automate identity workflows',
    description: 'Find REST API specs, authentication details, versioning, and examples.',
    link: '/docs/api/v2026',
  },
  {
    label: 'Tools',
    title: 'Install developer tools',
    description: 'Set up SDKs, the CLI, development kits, and helpful utilities.',
    link: '/docs/tools',
  },
  {
    label: 'Community',
    title: 'Get answers from developers',
    description: 'Join forum discussions, browse community content, and connect with programs.',
    link: 'https://developer.sailpoint.com/discuss/',
  },
];

export default function HomepageGettingStarted(): JSX.Element {
  return (
    <div>
      <div className={styles.mainCard}>
        <div className={styles.contentContainer}>
          <div className={styles.gettingStartedText}>
            <div className={styles.gettingStartedOne}>
              SailPoint Developers
            </div>
            <div className={styles.gettingStartedTwo}>
              Build, extend, and automate identity security.
            </div>
            <div className={styles.gettingStartedThree}>
              Start with developer documentation, API specifications, tools,
              and community resources for SailPoint platforms.
            </div>
          </div>
          <div className={styles.resourceGrid}>
            {primaryLinks.map((item) => (
              <Link key={item.label} className={styles.resourceCard} to={item.link}>
                <div className={styles.resourceLabel}>{item.label}</div>
                <div className={styles.resourceTitle}>{item.title}</div>
                <div className={styles.resourceDescription}>
                  {item.description}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
