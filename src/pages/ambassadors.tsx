import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './ambassador.module.css';
import AmbassadorCards from '../components/ambassador/AmbassadorCards';

const benefits = [
  {
    title: 'Recognition & badge',
    description:
      'Receive an exclusive Ambassador badge displayed on your community profile, signaling your expertise to peers across the SailPoint ecosystem.',
  },
  {
    title: 'Early access',
    description:
      'Get early previews of new SailPoint developer features, APIs, and tooling before they reach general availability.',
  },
  {
    title: 'Direct product access',
    description:
      'Gain a direct line to SailPoint product and the Developer Relations teams — your feedback shapes the product roadmap.',
  },
  {
    title: 'Free sandbox tenant',
    description:
      'Get access to your own unconfigured Identity Security Cloud test tenant to build and test solutions. Expert Ambassadors receive a pre-configured tenant with access to the latest beta features.',
  },
  {
    title: 'Exclusive events',
    description:
      'Receive invitations to Ambassador-only roundtables, community calls, and developer events throughout the year.',
  },
  {
    title: 'And more!',
    description:
      'Exclusive swag, office hours with the Developer Relations team, and other perks as the program grows.',
  },
];

const howToJoinSteps = [
  {
    step: '1',
    title: 'Be an active member',
    description:
      'Consistently contribute to the community — answer questions, share knowledge, and engage with fellow members.',
  },
  {
    step: '2',
    title: 'Demonstrate expertise',
    description:
      'Show your depth of SailPoint knowledge through accepted solutions, community guides, or technical discussions.',
  },
  {
    step: '3',
    title: 'Apply on the forum',
    description:
      'Submit your application via the community forum. The SailPoint team reviews applications on a rolling basis.',
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
            Your experience and expertise has the power to empower others.
          </h1>
          <p className={styles.heroBody}>
            Help us chart the future of identity security.
          </p>
          <Link
            to="https://developer.sailpoint.com/discuss/t/announcing-the-developer-community-ambassador-program/10634"
            className={styles.heroCta}
          >
            Become an Ambassador
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
      <div className={`${styles.section} ${styles.sectionNoBorder}`}>
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
              <a href="#" className={styles.policyLink}>Ambassador Code of Conduct</a>
              <a href="#" className={styles.policyLink}>Forum guidelines</a>
              <a href="https://developer.sailpoint.com/discuss/t/getting-started-as-a-developer-community-ambassador/11665" className={styles.policyLink}>Getting started guide</a>
              <a href="https://developer.sailpoint.com/docs/ai-policy" className={styles.policyLink}>AI Usage Policy</a>
            </div>
            <Link
              to="https://developer.sailpoint.com/discuss/t/announcing-the-developer-community-ambassador-program/10634"
              className={styles.applyBtn}
            >
              Apply now
            </Link>
          </div>
        </div>
      </div>

      {/* Expert Ambassador Cards */}
      <div className={`${styles.section} ${styles.sectionNoBorder}`}>
        <div className={styles.sectionInner}>
          <div className={styles.cardSectionBadge}>
            <img
              className={styles.badgeImageLarge}
              src={useBaseUrl('/icons/ExpertAmbassador.svg')}
              alt="Expert Ambassador badge"
            />
          </div>
          <div className={styles.cardSectionHeader}>
            <div className={styles.spanLeft}></div>
            <div className={styles.cardSectionTitle}>Expert Ambassadors</div>
            <div className={styles.spanLeft}></div>
          </div>
          <div className={styles.ambassadorCardContainer}>
            <AmbassadorCards expert={true} limit={6} />
          </div>
          <div className={styles.seeMoreContainer}>
            <a href="https://developer.sailpoint.com/discuss/g/expert_ambassadors" className={styles.seeMoreBtn}>See all Expert Ambassadors</a>
          </div>
        </div>
      </div>

      {/* Ambassador Cards */}
      <div className={`${styles.section} ${styles.sectionNoBorder} ${styles.sectionLast}`}>
        <div className={styles.sectionInner}>
          <div className={styles.cardSectionBadge}>
            <img
              className={styles.badgeImage}
              src={useBaseUrl('/icons/Ambassador.svg')}
              alt="Ambassador badge"
            />
          </div>
          <div className={styles.cardSectionHeader}>
            <div className={styles.spanLeft}></div>
            <div className={styles.cardSectionTitle}>Ambassadors</div>
            <div className={styles.spanLeft}></div>
          </div>
          <div className={styles.ambassadorCardContainer}>
            <AmbassadorCards expert={false} limit={6} />
          </div>
          <div className={styles.seeMoreContainer}>
            <a href="https://developer.sailpoint.com/discuss/g/ambassadors" className={styles.seeMoreBtn}>See all Ambassadors</a>
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
