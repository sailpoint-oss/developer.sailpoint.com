import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import React from 'react';
import styles from './styles.module.css';

const miniHacks = [
  {
    label: 'Track 01',
    title: 'JIT Workflows',
    href: '/hack-day/jit-workflows',
    description:
      'Grant access at the exact time a user needs it. You subscribe to an event trigger and act on the payload when an identity changes.',
  },
  {
    label: 'Track 02',
    title: 'SaaS Connectivity',
    href: '/hack-day/saas-connectivity',
    description:
      'Connect a new system to the platform with a cloud-hosted connector. The connector aggregates accounts and entitlements, and it needs no virtual appliance.',
  },
  {
    label: 'Track 03',
    title: 'UI Plugins',
    href: '/hack-day/ui-plugins',
    description:
      'A UI plugin adds your own interface to Identity Security Cloud. You build the interface, then you deploy the plugin to your tenant with the SailPoint CLI.',
  },
];

const HackDay: React.FC = () => (
  <Layout
    title="Hack Day"
    description="Choose a one-hour mini hack or the main hack that takes several hours. Then follow the instructions and build on Identity Security Cloud."
  >
    <main>
      {/* Gradient bar */}
      <div className={styles.gradientBar} />

      {/* Hero */}
      <div className={styles.heroWrapper}>
        <div className={styles.heroInner}>
          <div className={styles.eyebrow}>Navigate 2026 · Hack Day</div>
          <h1 className={styles.heroHeading}>
            Pick a hack and <em>start building</em>
          </h1>
          <p className={styles.heroBody}>
            You have two ways to build on Identity Security Cloud today. A mini hack is a small
            project with step-by-step instructions that you can complete in about one hour. The
            main hack takes most of the afternoon, and you design your own solution.
          </p>
        </div>
      </div>

      {/* Mini hacks */}
      <div className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionHeading}>Mini hacks</h2>
          <p className={styles.sectionBody}>
            Each track takes about one hour and ends with something that works. The step-by-step
            instructions cover every task. You can do one track, or you can do all three.
          </p>
          <div className={`${styles.trackGrid} ${styles.trackGridThree}`}>
            {miniHacks.map((track) => (
              <Link key={track.href} to={track.href} className={styles.trackCard}>
                <div className={styles.trackLabel}>{track.label}</div>
                <div className={styles.trackTitle}>{track.title}</div>
                <div className={styles.trackBadge}>About 1 hour</div>
                <div className={styles.trackDescription}>{track.description}</div>
                <div className={styles.trackCta}>Get started →</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main hack */}
      <div className={`${styles.section} ${styles.sectionBand} ${styles.sectionLast}`}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionHeading}>The main hack</h2>
          <p className={styles.sectionBody}>
            The main hack takes several hours and gives you room for creativity. It includes
            templates that give you a start, but you must bring your own solution. It is also the
            only track that the judges score. The best projects start with a real business
            problem.
          </p>
          <div className={styles.featureCard}>
            <div className={styles.featureLabel}>Main Hack</div>
            <div className={styles.featureTitle}>MCP Server</div>
            <div className={`${styles.trackBadge} ${styles.featureBadge}`}>Several hours</div>
            <p className={styles.featureDescription}>
              Replace the UI with a conversation. You add your own tools to a prebuilt MCP
              Server. Then an AI client can do real identity tasks in plain language.
            </p>
            <div className={styles.featureActions}>
              <Link
                to="/hack-day/mcp-server"
                className={`${styles.trackCta} ${styles.featureCta} ${styles.stretchedLink}`}
              >
                Get started →
              </Link>
              <Link to="/hack-day/judging-criteria" className={`${styles.trackCta} ${styles.featureCta} ${styles.stretchedLink}`}>
                See how the judges score the main hack →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
);

export default HackDay;
