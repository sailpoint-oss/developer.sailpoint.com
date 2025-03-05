import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const MarketplaceBanner: React.FC = () => {
  return (
    <Link to="/colab">
      <div className={styles.titleContainer}>
        {/* <h1 className={styles.colabTitle}>CoLab</h1> */}
      </div>
    </Link>
  );
};

export default MarketplaceBanner;
