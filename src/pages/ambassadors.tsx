import React, { useEffect } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
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
      'Get access to your own private Identity Security Cloud test tenant, including access to the latest beta features released by SailPoint.',
  },
  {
    title: 'Exclusive events',
    description:
      'Receive invitations to Ambassador-only roundtables, community calls, and developer events throughout the year.',
  },
  {
    title: 'And more!',
    description:
      'Exclusive swag, priority speaking consideration at Developer Days, office hours with the Developer Relations team, and other perks as the program grows.',
  },
];

const whyJoin = [
  'Grow your reputation as a recognized SailPoint expert among your peers and potential employers.',
  'Expand your network with identity professionals, architects, and developers from around the world.',
  'Deepen your product knowledge through direct engagement with SailPoint engineering and product teams.',
  'Make a real impact by helping others succeed with identity governance and the SailPoint platform.',
  'Naturally step into a leadership role — mentor newcomers, shape best practices, and leave your mark on the community.',
];

const howToJoinSteps = [
  {
    step: '1',
    color: '#00ADDC',
    title: 'Be an active member',
    description:
      'Consistently contribute to the community — answer questions, share knowledge, and engage with fellow members.',
  },
  {
    step: '2',
    color: '#00ADDC',
    title: 'Demonstrate expertise',
    description:
      'Show your depth of SailPoint knowledge through accepted solutions, community guides, or technical discussions.',
  },
  {
    step: '3',
    color: '#00ADDC',
    title: 'Apply on the forum',
    description:
      'Submit your application via the community forum. The SailPoint team reviews applications on a rolling basis.',
  },
];

const placeholderExpertAmbassadors = [
  { name: 'Alex Rivera', since: '2021', solutions: 312 },
  { name: 'Jordan Kim', since: '2021', solutions: 278 },
  { name: 'Taylor Brooks', since: '2022', solutions: 241 },
  { name: 'Morgan Chen', since: '2022', solutions: 198 },
];

const placeholderAmbassadors = [
  { name: 'Casey Patel', since: '2023', solutions: 154 },
  { name: 'Riley Nguyen', since: '2023', solutions: 133 },
  { name: 'Jamie Santos', since: '2023', solutions: 119 },
  { name: 'Drew Okafor', since: '2024', solutions: 97 },
];

const Ambassador: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('ambassador-dark-page');
    return () => document.body.classList.remove('ambassador-dark-page');
  }, []);
  return (
    <Layout title="Ambassadors" description="The SailPoint Ambassador Program has everything you need to build, extend, and automate scalable identity solutions.">
      <main className={styles.darkPage}>

        {/* Hero */}
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroPill}><span>SailPoint · Ambassador Program</span></div>
            <h1 className={styles.heroHeading}>
              Your experience and expertise<br />
              <span className={styles.heroHeadingAccent}>has the power to empower others.</span>
            </h1>
            <p className={styles.heroBody}>
              Become a SailPoint Ambassador and help shape the future of SailPoint.
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
            src={useBaseUrl('/ambassador/codey-bust-dark.png')}
            alt="Codey the SailPoint Ambassador"
          />
        </div>

        {/* What Is the Program + Why Join */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>What is the Ambassador Program?</h2>
            <p className={styles.sectionBody}>
              The SailPoint Ambassador Program recognizes exceptional members who go above
              and beyond to share knowledge, answer questions, and help others build on the SailPoint platform.
              Ambassadors are trusted voices in the community — developers, architects, and identity professionals
              who lead by example. There are two tiers: <strong>Ambassadors</strong>, who are active contributors
              making a consistent positive impact, and <strong>Expert Ambassadors</strong>, who represent the
              highest level of community leadership and SailPoint expertise.
            </p>
            <h3 className={styles.subHeading}>As an Ambassador you will:</h3>
            <ul className={styles.whyJoinList}>
              {whyJoin.map((reason) => (
                <li key={reason} className={styles.whyJoinItem}>{reason}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Benefits */}
        <div className={`${styles.section} ${styles.sectionNoBorder} ${styles.sectionTight}`}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>Program benefits</h2>
            <div className={styles.benefitsGrid}>
              {benefits.map((benefit) => (
                <div key={benefit.title} className={styles.gradientBorderWrap}>
                  <div className={styles.benefitCard}>
                    <div className={styles.benefitTitle}>{benefit.title}</div>
                    <div className={styles.benefitDescription}>{benefit.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How to Join */}
        <div className={`${styles.section} ${styles.sectionNoBorder}`}>

          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>Your path to becoming an Ambassador</h2>
            <div className={styles.stepsContainer}>
              {howToJoinSteps.map((s) => (
                <div key={s.step} className={styles.step}>
                  <div className={styles.stepCircle} style={{color: s.color}}>{s.step}</div>
                  <div className={styles.stepContent}>
                    <div className={styles.stepTitle}>{s.title}</div>
                    <div className={styles.stepDescription}>{s.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.ctaContainer}>
              <div className={styles.policyLinks}>
                <span className={styles.policyLabel}>Before you apply, please review:</span>
                <a href="#" className={styles.policyLink}>Code of Conduct</a>
                <a href="#" className={styles.policyLink}>Forum guidelines</a>
                <a href="https://developer.sailpoint.com/discuss/t/getting-started-as-a-developer-community-ambassador/11665" className={styles.policyLink}>Getting started guide</a>
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
            <div className={styles.headerText}>
              <div className={styles.headerTextOne}>Expert Ambassadors</div>
            </div>
            <div className={styles.imageContainer}>
              <div className={styles.spanLeft}></div>
              <img
                className={styles.expertAmbassadorImage}
                src={useBaseUrl('/icons/ExpertAmbassador.png')}
                alt="Expert Ambassador Icon"
              />
              <div className={styles.spanLeft}></div>
            </div>
            <div className={styles.ambassadorCardContainer}>
              <div className={styles.placeholderGrid}>
                {placeholderExpertAmbassadors.map((a) => (
                  <div key={a.name} className={styles.placeholderCard}>
                    <div className={styles.placeholderGradBorder}>
                      <img
                        className={styles.placeholderAvatar}
                        src={useBaseUrl('/ambassador/codey-bust-dark.png')}
                        alt={a.name}
                      />
                    </div>
                    <div className={styles.placeholderName}>{a.name}</div>
                    <div className={styles.placeholderMeta}>Expert Ambassador since {a.since}</div>
                    <div className={styles.placeholderSolutions}>{a.solutions} solutions</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.seeMoreContainer}>
              <a href="https://developer.sailpoint.com/discuss/g/expert_ambassadors" className={styles.seeMoreBtn}>See all Expert Ambassadors</a>
            </div>
          </div>
        </div>

        {/* Ambassador Cards */}
        <div className={`${styles.section} ${styles.sectionNoBorder} ${styles.sectionTight}`}>
          <div className={styles.sectionInner}>
            <div className={styles.headerText}>
              <div className={styles.headerTextOne}>Ambassadors</div>
            </div>
            <div className={styles.imageContainer}>
              <div className={styles.spanLeft}></div>
              <img
                className={styles.ambassadorImage}
                src={useBaseUrl('/icons/Ambassador.png')}
                alt="Ambassador Icon"
              />
              <div className={styles.spanLeft}></div>
            </div>
            <div className={styles.ambassadorCardContainer}>
              <div className={styles.placeholderGrid}>
                {placeholderAmbassadors.map((a) => (
                  <div key={a.name} className={styles.placeholderCard}>
                    <div className={styles.placeholderGradBorder}>
                      <img
                        className={styles.placeholderAvatar}
                        src={useBaseUrl('/ambassador/codey-bust-dark.png')}
                        alt={a.name}
                      />
                    </div>
                    <div className={styles.placeholderName}>{a.name}</div>
                    <div className={styles.placeholderMeta}>Ambassador since {a.since}</div>
                    <div className={styles.placeholderSolutions}>{a.solutions} solutions</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.seeMoreContainer}>
              <a href="https://developer.sailpoint.com/discuss/g/ambassadors" className={styles.seeMoreBtn}>See all Ambassadors</a>
            </div>
          </div>
        </div>

      </main>
    </Layout>
  );
};

export default Ambassador;
