import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './getting-started.module.css';

const applicationCriteria = [
  { label: 'Objective', items: ['Time in community', 'Level of activity', 'Types of engagement', 'Credentials earned'] },
  { label: 'Subjective', items: ['Quality of engagement', 'Why do you want to be an Ambassador?'] },
];

const tiers = [
  {
    name: 'Ambassador',
    credential: 'Identity Security Leader Credential',
    credentialUrl: 'https://university.sailpoint.com/sailpoint-identity-security-leader-credential',
    perks: [
      'Unconfigured tenant',
      'Demo tenant',
      'Forum badge',
      'Exclusive swag',
      'Access to private Ambassador space on the forum',
      'Access to Community AI',
      'Public recognition',
      'Regular check-ins with the DevRel team',
    ],
  },
  {
    name: 'Expert Ambassador',
    credential: 'Identity Security Leader Credential (same minimum as Ambassador)',
    credentialUrl: 'https://university.sailpoint.com/sailpoint-identity-security-leader-credential',
    perks: [
      'Preconfigured tenant',
      'Demo tenant',
      'Forum badge',
      'Exclusive swag',
      'Access to private Ambassador space on the forum',
      'Access to an extra private Expert Ambassador space on the forum',
      'Public recognition',
      'Regular check-ins with the DevRel team',
      'Exempt from tenant idling',
      'Edge in deciding factor for speaker selection',
      '2 week SLA for bugs on DevRel owned projects',
      'Regular roadmap sessions with PMs',
      'Partner with DevRel in building out future community programs',
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

        {/* Gradient bar */}
        <div className={styles.gradientBar}></div>

        {/* Hero */}
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroHeading}>Getting started as a SailPoint Ambassador</h1>
            <p className={styles.heroBody}>
              Everything you need to know to join the program, contribute effectively, and maintain your status.
            </p>
          </div>
        </div>

        {/* Before you apply - eligibility */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>Before you apply</h2>
            <p className={styles.sectionBody}>
              The Ambassador Program seeks to recognize and reward members of the SailPoint Developer Community who are going above and beyond, helping others, contributing to the community, and improving SailPoint's products and technologies through their expertise and feedback.
            </p>
            <p className={styles.sectionBody}>
              To be considered eligible for the program, you must have:
            </p>
            <ul className={styles.linkList}>
              <li><strong>At least 6 months of community history.</strong> We want to see a real track record, not a burst of activity right before applying.</li>
              <li><strong>Earned the <Link to="https://university.sailpoint.com/sailpoint-identity-security-leader-credential">Identity Security Leader Credential</Link>.</strong> This is required for all Ambassadors. It's free and a relatively low time investment.</li>
              <li>
                <strong>A complete forum profile.</strong> Visit your <Link to="https://developer.sailpoint.com/discuss/my/preferences/profile">profile preferences</Link> to fill out the required fields: profile picture and About Me. We also encourage adding your timezone, job title, profile header, and user card background — the more people know about you, the better. If you plan to contribute to GitHub, link your GitHub account to your forum profile so your pull requests and issues are tracked toward your Ambassador activity.
              </li>
            </ul>
            <p className={styles.sectionBody}>
              If you're not there yet, that's okay. Keep contributing and check back when you are.
            </p>
            <p className={styles.sectionBody}>
              Good contributions look like answering questions thoughtfully, writing guides or blog posts that help others, submitting CoLab projects, or contributing to open source repositories. It's not about volume. It's about the quality and consistency of how you show up.
            </p>
          </div>
        </div>

        {/* Application */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>Application</h2>
            <p className={styles.sectionBody}>
              Applications are reviewed by the DevRel team. We evaluate them based on a combination of objective and subjective criteria:
            </p>
            <div className={styles.criteriaGrid}>
              {applicationCriteria.map((group) => (
                <div key={group.label} className={styles.criteriaCard}>
                  <div className={styles.criteriaLabel}>{group.label}</div>
                  <ul className={styles.criteriaList}>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className={styles.sectionBody}>
              If an Expert Ambassador thinks someone is a good candidate but they're relatively new to the community, the Expert can sponsor the applicant, allowing them to bypass the time-in-community requirement if they pass all other checks. If you'd like to sponsor someone, have them note your name on their application and send a message to the DevRel team on the forum to confirm.
            </p>
          </div>
        </div>

        {/* Maintaining status */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>Maintaining your status</h2>
            <p className={styles.sectionBody}>
              To retain your Ambassador status, we need to see continued engagement with the community. Maintaining your status is straightforward: we look for Ambassadors who are consistently showing up for the community. Some good ways to stay active:
            </p>
            <ul className={styles.linkList}>
              <li>Participate on the <Link to="https://developer.sailpoint.com/discuss">forum</Link> (liking, commenting, posting)</li>
              <li>Submit <Link to="https://developer.sailpoint.com/colab">CoLab</Link> projects</li>
              <li>Contribute to <Link to="https://github.com/sailpoint-oss">GitHub</Link></li>
              <li>Attend <Link to="https://developer.sailpoint.com/discuss/c/community/events/76">events</Link> (DevDays, Navigate, live streams, etc.)</li>
            </ul>
            <p className={styles.sectionBody}>
              If you're ever unsure whether you're hitting the bar, reach out to the DevRel team. Ambassadors who are no longer actively contributing may have their status reviewed.
            </p>
          </div>
        </div>

        {/* Becoming Expert Ambassador */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>Becoming an Expert Ambassador</h2>
            <p className={styles.sectionBody}>
              Expert Ambassador status isn't applied for separately. Once you're an Ambassador, the DevRel team monitors contributions on an ongoing basis. If you have been an Ambassador for at least one year and consistently demonstrate expert-level contributions, you'll be elevated to Expert Ambassador automatically upon your Ambassador anniversary.
            </p>
          </div>
        </div>

        {/* Idle Tenants */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>Idle tenants</h2>
            <p className={styles.sectionBody}>
              If you haven't logged into your tenant in at least 30 days, SailPoint will deprovision it. You'll receive a backup of your data beforehand. Expert Ambassadors are exempt from this policy.
            </p>
          </div>
        </div>

        {/* Tiers & rewards */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>Tiers and rewards</h2>
            <p className={styles.sectionBody}>
              There are two tiers. Both require holding an active credential.
            </p>
            <div className={styles.tiersGrid}>
              {tiers.map((tier) => (
                <div key={tier.name} className={styles.tierCard}>
                  <div className={styles.tierHeader}>
                    <span className={styles.tierName}>{tier.name}</span>
                  </div>
                  <div className={styles.tierCredential}>
                    Requires: <Link to={tier.credentialUrl}>{tier.credential}</Link>
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

        {/* Before you apply */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>Policies and agreements</h2>
            <p className={styles.sectionBody}>Please review the following before submitting your application:</p>
            <ul className={styles.linkList}>
              <li><Link to="/docs/community-policies">Community policies</Link>, including the AI Usage Policy and Community Code of Conduct</li>
              <li><Link to="/docs/ambassador-code-of-conduct">Ambassador Code of Conduct</Link></li>
              <li><Link to="/docs/ambassador-agreement">Ambassador Program Agreement</Link></li>
            </ul>
            <div className={styles.applyBox}>
              <div className={styles.applyBoxText}>
                <strong>Ready to apply?</strong> Applications are reviewed on a rolling basis. We'll follow up via email.
              </div>
              <Link to="https://airtable.com/app2w5RqnFmiZoNvM/pagKbtaKwDcoCYgjX/form" className={styles.applyBtn}>
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
