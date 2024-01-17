import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

export default function ChangeLogBanner() {
  return (
    <div>
      <div className={styles.imageContainer}>
        <div className={styles.blogHeaderText}>Change Log</div>
      </div>
    </div>
  );
}
