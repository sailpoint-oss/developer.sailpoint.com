import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const AmbassadorBanner: React.FC = () => {
  return (
    <div>
      <div className={styles.imageContainer}>
        <img
          className={styles.headerImage}
          src={useBaseUrl('/ambassador/ambassador_banner_template.png')}
          alt="Ambassador Banner"
        />
        <div className={styles.ambassadorHeaderText}>Ambassadors</div>
      </div>
    </div>
  );
};

export default AmbassadorBanner;
