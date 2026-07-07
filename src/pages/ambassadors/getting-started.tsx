import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './getting-started.module.css';

const steps = [
  {
    number: '01',
    title: 'Apply to the program',
    body: 'Submit your application via the community forum. The SailPoint team reviews applications on a rolling basis and will reach out with next steps.',
  },
  {
    number: '02',
    title: 'Link your GitHub account',
    body: 'If you plan to contribute pull requests to SailPoint-related open source repositories, link your GitHub account to your forum profile. Code contributions are one of the most impactful ways to demonstrate expertise.',
  },
  {
    number: '03',
    title: 'Complete your forum profile',
    body: 'Add a profile picture, short biography, profile header, and user card background. These are required to become an Ambassador and will be used on the Ambassadors page at developer.sailpoint.com.',
  },
  {
    number: '04',
    title: 'Start contributing',
    body: "The best Ambassadors are active, helpful community members. Answer questions, write guides, contribute to open source, and engage with your peers. The SailPoint team tracks contributions quarterly to determine and maintain Ambassador status.",
  },
];

const contributionTiers = [
  {
    label: 'High impact',
    examples: 'Presenting at Developer Days or a community live stream, submitting a Colab connector, workflow, or tool, participating in discovery sessions with the SailPoint team',
  },
  {
    label: 'Meaningful',
    examples: 'Writing a blog post or knowledge base article, merging a GitHub pull request, opening or completing a GitHub issue',
  },
  {
    label: 'Everyday',
    examples: "Answering questions with accepted solutions, writing helpful replies, flagging low-quality content, engaging with others' posts",
  },
];

const tiers = [
  {
    name: 'Ambassador',
    label: 'Active contributor',
    perks: [
      'Ambassador badge on your forum profile',
      'Access to an unconfigured Identity Security Cloud test tenant',
      'Access to exclusive Ambassador-only forum category and chat',
      'Early access to new product features',
      'Invitations to Ambassador-only roundtables, community calls, and events throughout the year',
      'Office hours with the Developer Relations team',
      'Custom social share package for LinkedIn',
      'Exclusive swag',
    ],
  },
  {
    name: 'Expert Ambassador',
    label: 'Top contributor',
    perks: [
      'Everything Ambassadors receive',
      'Preconfigured ISC test tenant (instead of barebones)',
      'Exempt from tenant idling policy',
      'Access to Community AI for building transforms, workflows, connectors, and more',
      'Temporary additional ISC tenants for demos or short-term projects',
      'Priority recognition on the Ambassadors page',
      'Edge in speaker selection for DevDays and Navigate',
      'SLAs for bugs on DevRel-owned projects',
      'Quarterly roadmap sessions with PMs',
      'Partner with DevRel in building future community programs',
    ],
  },
];

const GettingStarted: React.FC = () => {
  return (
    <Layout
      title="Getting Started as a SailPoint Ambassador"
      description="Everything you need to know to become and maintain your status as a SailPoint Ambassador."
    >
      <main className={styles.page}>

        {/* Hero */}
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroHeading}>Getting started as a SailPoint Ambassador</h1>
            <p className={styles.heroBody}>
              Everything you need to know to join the program, contribute effectively, and maintain your status.
            </p>
            <Link to="https://airtable.com/appcMNtQsUg0kCkGW/pag5CikTCH2dmZ47I/form" className={styles.heroCta}>
              Apply now
            </Link>
          </div>
        </div>

        {/* How it works */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>How it works</h2>
            <div className={styles.steps}>
              {steps.map((s) => (
                <div key={s.number} className={styles.step}>
                  <div className={styles.stepNumber}>{s.number}</div>
                  <div className={styles.stepContent}>
                    <div className={styles.stepTitle}>{s.title}</div>
                    <div className={styles.stepBody}>{s.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What counts */}
        <div className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>What kinds of contributions count?</h2>
            <p className={styles.sectionBody}>
              The SailPoint team looks at the breadth and quality of your contributions, not just the volume. Here's a rough sense of what carries the most weight:
            </p>
            <div className={styles.contributionTiers}>
              {contributionTiers.map((t) => (
                <div key={t.label} className={styles.contributionCard}>
                  <div className={styles.contributionLabel}>{t.label}</div>
                  <div className={styles.contributionExamples}>{t.examples}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tiers & rewards */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>Tiers and rewards</h2>
            <p className={styles.sectionBody}>
              Status is reviewed quarterly. There are two tiers — both require continued contribution to maintain.
            </p>
            <div className={styles.tiersGrid}>
              {tiers.map((tier) => (
                <div key={tier.name} className={styles.tierCard}>
                  <div className={styles.tierHeader}>
                    <span className={styles.tierName}>{tier.name}</span>
                    <span className={styles.tierLabel}>{tier.label}</span>
                  </div>
                  <ul className={styles.perksList}>
                    {tier.perks.map((perk) => (
                      <li key={perk} className={styles.perkItem}>{perk}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Maintaining status */}
        <div className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>Maintaining your status</h2>
            <p className={styles.sectionBody}>
              Ambassador status is reviewed each quarter. To keep your status, you need to remain an active contributor. The minimum is at least one accepted solution or four substantive replies per quarter. New Ambassadors have a 90-day probationary window to hit the mark for the first time.
            </p>
            <p className={styles.sectionBody}>
              If your activity drops significantly for two consecutive quarters, your status will be reviewed and you'll be notified before any changes are made. You can reapply at any time.
            </p>
          </div>
        </div>

        {/* Before you apply */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>Before you apply</h2>
            <p className={styles.sectionBody}>Please review the following before submitting your application:</p>
            <ul className={styles.linkList}>
              <li><Link to="/docs/community-policies">Community policies</Link> — including the AI Usage Policy and Community Code of Conduct</li>
              <li><Link to="/docs/ambassador-code-of-conduct">Ambassador Code of Conduct</Link></li>
              <li><Link to="/docs/ambassador-agreement">Ambassador Program Agreement</Link></li>
            </ul>
            <div className={styles.applyBox}>
              <div className={styles.applyBoxText}>
                <strong>Ready to apply?</strong> Applications are reviewed on a rolling basis. We'll follow up via email.
              </div>
              <Link to="https://airtable.com/appcMNtQsUg0kCkGW/pag5CikTCH2dmZ47I/form" className={styles.applyBtn}>
                Apply now
              </Link>
            </div>
          </div>
        </div>

      </main>
    </Layout>
  );
};

export default GettingStarted;
