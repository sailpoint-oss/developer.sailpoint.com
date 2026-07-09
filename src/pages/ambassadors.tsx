import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './ambassador.module.css';

const benefits = [
  {
    title: 'Tenant access',
    description:
      'Ambassadors receive an unconfigured Identity Security Cloud test tenant. Expert Ambassadors receive a preconfigured tenant.',
  },
  {
    title: 'Forum badge & recognition',
    description:
      'Receive an exclusive Ambassador badge on your community profile, access to a private Ambassador space on the forum, and public recognition for your contributions.',
  },
  {
    title: 'Exclusive swag',
    description:
      'Receive exclusive SailPoint Ambassador swag as a thank you for your contributions to the community.',
  },
  {
    title: 'Regular check ins with DevRel',
    description:
      'Stay connected with the SailPoint Developer Relations team through regular check ins to share feedback and stay in the loop.',
  },
  {
    title: 'Expert Ambassador extras',
    description:
      'Expert Ambassadors also get access to a private Expert Ambassador forum space, regular roadmap sessions with PMs, and more.',
  },
  {
    title: 'Shape the community',
    description:
      'Expert Ambassadors also have the opportunity to partner with the DevRel team in building out future community programs.',
  },
];

const howToJoinSteps = [
  {
    step: '1',
    title: 'Be an active member',
    description:
      'Consistently contribute to the community: answer questions, share knowledge, and engage with fellow members.',
  },
  {
    step: '2',
    title: 'Demonstrate expertise',
    description:
      'Show your depth of SailPoint knowledge through accepted solutions, community guides, or technical discussions.',
  },
  {
    step: '3',
    title: 'Submit your application',
    description:
      'Submit your application via the form on this page. The SailPoint team reviews applications on a rolling basis.',
  },
];

const AmbassadorContent: React.FC = () => {
  const {colorMode} = useColorMode();
  const codeyBust = useBaseUrl(
    colorMode === 'dark'
      ? '/ambassador/codey-bust-dark.png'
      : '/ambassador/codey-bust-light.png'
  );

  return (
    <main>

      {/* Gradient bar */}
      <div className={styles.gradientBar}></div>

      {/* Hero */}
      <div className={styles.heroWrapper}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeading}>
              Your experience and expertise has the power to <em>empower others</em>
            </h1>
            <p className={styles.heroBody}>
              Join the builders answering questions, shipping tools, and helping chart the future of
              identity security.
            </p>
            <Link to="/ambassadors/getting-started" className={styles.heroCta}>
              Getting Started Guide
            </Link>
          </div>
          <img
            className={styles.heroImage}
            src={codeyBust}
            alt="Codey the SailPoint Ambassador"
          />
        </div>
      </div>

      {/* What Is the Program */}
        <div className={`${styles.section} ${styles.sectionNoBorder} ${styles.sectionAlt}`}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionHeading}>What is the Ambassador Program?</h2>
          <p className={styles.sectionBody}>
            The SailPoint Ambassador Program recognizes exceptional community members who go above
            and beyond to share knowledge, answer questions, and help others build on the SailPoint platform.
            Ambassadors are trusted voices in the community — developers, architects, and identity professionals
            who lead by example. There are two tiers: <strong>Ambassadors</strong>, who are active contributors
            making a consistent positive impact, and <strong>Expert Ambassadors</strong>, who represent the
            highest level of community leadership and SailPoint expertise.
          </p>
          <h3 className={styles.subHeading}>A SailPoint Ambassador is someone who:</h3>
          <ul className={styles.qualitiesList}>
            {[
              'Actively contributes by answering questions and sharing knowledge with the community',
              'Is passionate about identity security and SailPoint technologies',
              'Leads by example and helps newcomers find their footing',
              'Brings a positive, collaborative attitude to every interaction',
              'Is eager to grow and share their expertise with others',
            ].map((item) => (
              <li key={item} className={styles.qualitiesItem}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Ambassador Directory Link */}
      <div className={`${styles.section} ${styles.sectionNoBorder} ${styles.sectionBand}`}>
        <div className={styles.sectionInner}>
          <div className={styles.directoryPromo}>
            <div className={styles.directoryPromoText}>
              <h2 className={styles.directoryPromoTitle}>Meet the Ambassadors</h2>
              <p className={styles.directoryPromoDesc}>
                Browse the full directory of SailPoint Ambassadors and Expert Ambassadors. Search by
                name, location, or area of expertise, and see who's leading the community this month.
              </p>
            </div>
            <Link to="/ambassadors/directory" className={styles.applyBtn}>
              Browse the directory
            </Link>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className={`${styles.section} ${styles.sectionAlt} ${styles.sectionNoBorder}`}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionHeading}>Program benefits</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit) => (
              <div key={benefit.title} className={styles.benefitCard}>
                <div className={styles.benefitTitle}>{benefit.title}</div>
                <div className={styles.benefitDescription}>{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Path to Ambassador */}
      <div className={`${styles.section} ${styles.sectionNoBorder} ${styles.sectionLast}`}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionHeading}>Your path to becoming an Ambassador</h2>
          <div className={styles.stepsContainer}>
            {howToJoinSteps.map((s) => (
              <div key={s.step} className={styles.step}>
                <div className={styles.stepNumber}>{s.step}</div>
                <div className={styles.stepContent}>
                  <div className={styles.stepTitle}>{s.title}</div>
                  <div className={styles.stepDescription}>{s.description}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.ctaRow}>
            <div className={styles.policyLinks}>
              <span className={styles.policyLabel}>Before you apply, please review:</span>
              <a href="/docs/ambassador-code-of-conduct" className={styles.policyLink}>Ambassador Code of Conduct</a>
              <a href="/ambassadors/getting-started" className={styles.policyLink}>Getting started guide</a>
              <a href="https://developer.sailpoint.com/docs/ai-policy" className={styles.policyLink}>AI Usage Policy</a>
            </div>
            <Link
              to="https://airtable.com/app2w5RqnFmiZoNvM/pagKbtaKwDcoCYgjX/form"
              className={styles.applyBtn}
            >
              Apply now
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
};

const Ambassador: React.FC = () => (
  <Layout title="Ambassadors" description="The SailPoint Ambassador Program — recognizing exceptional community members who go above and beyond.">
    <AmbassadorContent />
  </Layout>
);

export default Ambassador;
