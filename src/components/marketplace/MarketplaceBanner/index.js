import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function MarketplaceBanner() {
  return (
    <Link to={'/colab'}>
      <div className={styles.titleContainer}>
        {/* <h1 className={styles.colabTitle}>CoLab</h1> */}
      </div>
    </Link>
  );
}
