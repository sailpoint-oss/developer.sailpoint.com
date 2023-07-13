import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

export default function MarketplaceBanner() {
  return (
    <div>

      <div className={styles.imageContainer}>
      <img className={styles.headerImage} src={useBaseUrl('/blog/marketplace_banner_template.png')}></img>
        <div className={styles.blogHeaderText}>
          Marketplace
        </div>
      </div >



    </div>
  );
}
