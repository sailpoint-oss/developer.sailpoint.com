import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import AmbassadorCards from '../../components/ambassador/AmbassadorCards';
import styles from './directory.module.css';

const Directory: React.FC = () => {
  return (
    <Layout
      title="Ambassador Directory"
      description="Meet the SailPoint Ambassadors and Expert Ambassadors who make our developer community great."
    >
      <main className={styles.page}>

        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroHeading}>Ambassador directory</h1>
            <p className={styles.heroBody}>
              Meet the Ambassadors and Expert Ambassadors who make the SailPoint Developer Community great.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <img
                className={styles.badgeImageLarge}
              src={useBaseUrl('/icons/ExpertAmbassadorBadge.png')}
              alt="Expert Ambassador badge"
              />
              <h2 className={styles.sectionHeading}>Expert Ambassadors</h2>
            </div>
            <AmbassadorCards expert={true} />
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <img
                className={styles.badgeImage}
              src={useBaseUrl('/icons/AmbassadorBadge.png')}
              alt="Ambassador badge"
              />
              <h2 className={styles.sectionHeading}>Ambassadors</h2>
            </div>
            <AmbassadorCards expert={false} />
          </div>
        </div>

      </main>
    </Layout>
  );
};

export default Directory;
