import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './ambassador.module.css';
import AmbassadorCards from '../components/ambassador/AmbassadorCards';

const Ambassador: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        {/* <AmbassadorBanner /> */}
        <div className={styles.ambassadorPurposeContainer}>
          <img
            className={styles.ambassadorPurposeImage}
            src={useBaseUrl('/ambassador/Ambassador-Program-Banner.png')}
            alt="Ambassador Program Banner"
          />
          <div className={styles.ambassadorPurposeText}>
            Our Ambassador Program offers not just exclusive benefits but also
            an enriching learning experience on SailPoint; it's a journey to
            expertise. As an Ambassador, your contributions foster community
            growth, enabling knowledge-sharing among experts like you.
            <Link
              className={styles.link}
              to="https://developer.sailpoint.com/discuss/t/announcing-the-developer-community-ambassador-program/10634"
            >
              <div className={styles.button}>Become an Ambassador</div>
            </Link>
          </div>
        </div>
        <div className={styles.headerText}>
          <div className={styles.headerTextOne}>Expert Ambassadors</div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.spanLeft}></div>
          <img
            className={styles.expertAmbassadorImage}
            src={useBaseUrl('/icons/ExpertAmbassador.svg')}
            alt="Expert Ambassador Icon"
          />
          <div className={styles.spanLeft}></div>
        </div>
        <div className={styles.ambassadorCardContainer}>
          <AmbassadorCards expert={true} />
        </div>
        <div className={styles.headerText}>
          <div className={styles.headerTextOne}>Ambassadors</div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.spanLeft}></div>
          <img
            className={styles.ambassadorImage}
            src={useBaseUrl('/icons/Ambassador.svg')}
            alt="Ambassador Icon"
          />
          <div className={styles.spanLeft}></div>
        </div>

        <div className={styles.ambassadorCardContainer}>
          <AmbassadorCards expert={false} />
        </div>
      </main>
    </Layout>
  );
};

export default Ambassador;
