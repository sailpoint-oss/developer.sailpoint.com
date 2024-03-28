import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

export default function BlogBanner() {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.blogTitle}>Blog</h1>
    </div>
  );
}
