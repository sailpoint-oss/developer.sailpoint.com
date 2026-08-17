import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import React from 'react';
import styles from './styles.module.css';

const tracks = [
  {
    label: 'Track 01',
    title: 'JIT Workflows',
    href: '/hack-day/jit-workflows',
    description:
      'Automate access that arrives exactly when it is needed. Subscribe to an event trigger and act on the payload the moment identity changes.',
  },
  {
    label: 'Track 02',
    title: 'SaaS Connectivity',
    href: '/hack-day/saas-connectivity',
    description:
      'Wire a new system into the platform with a cloud-hosted connector that aggregates accounts and entitlements — no virtual appliance required.',
  },
  {
    label: 'Track 03',
    title: 'UI Plugins',
    href: '/hack-day/ui-plugins',
    description:
      'Put a human face on identity data. Use the UI Development Kit to build, theme, and deploy a custom interface.',
  },
  {
    label: 'Track 04',
    title: 'MCP Server',
    href: '/hack-day/mcp-server',
    description:
      'Trade the UI for a conversation. Point an AI client at the SailPoint MCP Server and drive identity tasks in plain language.',
  },
];

const HackDay: React.FC = () => (
  <Layout
    title="Hack Day"
    description="Pick one of four Hack Day tracks and follow the instructions to start building on Identity Security Cloud."
  >
    <main>
      {/* Gradient bar */}
      <div className={styles.gradientBar} />

      {/* Hero */}
      <div className={styles.heroWrapper}>
        <div className={styles.heroInner}>
          <div className={styles.eyebrow}>Navigate 2026 · Hack Day</div>
          <h1 className={styles.heroHeading}>
            Pick a track and <em>start building</em>
          </h1>
          <p className={styles.heroBody}>
            Four ways to build on Identity Security Cloud. Every track is self-contained and comes
            with step-by-step instructions, so choose the one that interests you most and dive in.
          </p>
        </div>
      </div>

      {/* Tracks */}
      <div className={`${styles.section} ${styles.sectionLast}`}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionHeading}>Hack Day tracks</h2>
          <div className={styles.trackGrid}>
            {tracks.map((track) => (
              <Link key={track.href} to={track.href} className={styles.trackCard}>
                <div className={styles.trackLabel}>{track.label}</div>
                <div className={styles.trackTitle}>{track.title}</div>
                <div className={styles.trackDescription}>{track.description}</div>
                <div className={styles.trackCta}>Get started →</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  </Layout>
);

export default HackDay;
