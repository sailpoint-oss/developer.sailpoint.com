import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import React from 'react';
import styles from './getting-started.module.css';

const applicationCriteria = [
  { label: 'Objective', items: ['Time in community', 'Level of activity', 'Types of engagement', 'Credentials earned'] },
  { label: 'Subjective', items: ['Quality of engagement', 'Why do you want to be an Ambassador?'] },
];

const tiers = [
  {
    name: 'Ambassador',
    perks: [
      'Unconfigured tenant',
      'Forum badge',
      'Exclusive swag',
      'Access to private Ambassador space on the forum',
      'Access to the forum AI bot',
      'Public recognition',
      'Regular check-ins with the DevRel team',
    ],
  },
  {
    name: 'Expert Ambassador',
    perks: [
      'Preconfigured tenant',
      'Temporary demo tenant upon request',
      'Forum badge',
      'Exclusive swag',
      'Access to private Ambassador space on the forum',
      'Access to an extra private Expert Ambassador space on the forum',
      'Access to the forum AI bot',
      'Public recognition',
      'Regular check-ins with the DevRel team',
      'Exempt from tenant idling',
      'Increased edge in deciding factor for Developer Days speaker selection',
      'Two week SLA for bugs reported on DevRel owned projects',
      'Regular roadmap sessions with PMs',
      'Partner with DevRel in building out future developer community programs',
    ],
  },
];

const GettingStarted: React.FC = () => {
  return (
    <Layout
      title="Getting Started as a SailPoint Ambassador"
      description="Everything you need to know to join the program, contribute effectively, and maintain your status."
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
            <p className={styles.heroBody}>
              The Ambassador Program seeks to recognize and reward members of the SailPoint Developer Community who are going above and beyond, helping others, contributing to the community, and improving SailPoint's products and technologies through their expertise and feedback.
            </p>
          </div>
        </div>

        {/* Before you apply - eligibility */}
        <div className={`${styles.section} ${styles.sectionCompactFollow}`}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>Before you apply</h2>
            <p className={styles.sectionBody}>
              To be considered eligible for the program, you must have:
            </p>
            <ul className={styles.linkList}>
              <li>
                <strong>At least 6 months of community history.</strong> We want to see a real track record, not a burst of activity right before applying.
                <ul className={styles.subLinkList}>
                  <li>
                    Good contributions look like answering questions thoughtfully, writing guides or blog posts that help others, submitting <Link to="https://developer.sailpoint.com/colab">CoLab</Link> projects, or contributing to <Link to="https://github.com/sailpoint-oss">open source repositories</Link>. It's not about volume. It's about the quality and consistency of how you show up.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Earned the <Link to="https://university.sailpoint.com/sailpoint-identity-security-leader-credential">Identity Security Leader Credential</Link>.</strong> This is required for all Ambassadors. It's free and a relatively low time investment.
              </li>
              <li>
                <strong>A complete forum profile.</strong> Visit your <Link to="https://developer.sailpoint.com/discuss/my/preferences/profile">profile preferences</Link> to fill out the required fields: <strong>About Me</strong> and a <strong>profile picture</strong>, and a user card background.
                <ul className={styles.subLinkList}>
                  <li>
                    We also encourage adding your timezone, job title, profile header, and a user card background.
                  </li>
                  <li>
                    If you plan on contributing pull requests to SailPoint-related open source repositories, <Link to="https://developer.sailpoint.com/discuss/my/preferences/github">link your GitHub account</Link> to your forum profile.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* Application */}
        <div className={`${styles.section} ${styles.sectionCompactStart}`}>
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
              <li>Participate on the <Link to="https://developer.sailpoint.com/discuss">forum</Link> (liking, commenting, posting, writing solutions, etc.)</li>
              <li>Submit <Link to="https://developer.sailpoint.com/colab">CoLab</Link> projects</li>
              <li>Contribute to <Link to="https://github.com/sailpoint-oss">GitHub</Link></li>
              <li>Attend <Link to="https://developer.sailpoint.com/discuss/c/community/events/76">events</Link> (livestreams, DevDays, Navigate, etc.)</li>
            </ul>
            <p className={styles.sectionBody}>
              Ambassadors who stop actively contributing may have their status reviewed.
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

        {/* Tiers & rewards */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>Tiers and rewards</h2>
            <div className={styles.criteriaGrid}>
              {tiers.map((tier) => (
                <div key={tier.name} className={styles.criteriaCard}>
                  <div className={styles.criteriaLabel}>{tier.name}</div>
                  <ul className={styles.criteriaList}>
                    {tier.perks.map((perk) => (
                      <li key={perk}>{perk}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Idle tenants */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>Idle tenants</h2>
            <p className={styles.sectionBody}>
              If you haven't logged into your tenant in at least 30 days, SailPoint will deprovision it. Expert Ambassadors are exempt from this policy.
            </p>
          </div>
        </div>

        {/* Before you apply */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>Policies and agreements</h2>
            <p className={styles.sectionBody}>
              Please take time to review the following before submitting your application. As a participant in the program, you'll be held to these standards.
            </p>
            <ul className={styles.linkList}>
              <li><Link to="/docs/ambassador-code-of-conduct">Ambassador Code of Conduct</Link></li>
              <li><Link to="/docs/ambassador-agreement">Ambassador Program Agreement</Link></li>
            </ul>
            <div className={styles.applyCta}>
              <p className={styles.applyCtaText}>
                Ready to show us what you've got? Apply below.
              </p>
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
