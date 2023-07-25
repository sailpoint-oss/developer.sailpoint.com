import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

export default function Header() {
  return (
    <div>
      <div className={styles.imageContainer}>
        <img
          className={styles.headerImage}
          src={useBaseUrl('/blog/blog_banner_template.png')}
        />
        <div className={styles.headerText}> Services AI </div>
      </div>
    </div>
  );
}
