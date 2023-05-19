import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

export default function BlogBanner() {
  return (
    <div>

      <div className={styles.imageContainer}>
        <div className={styles.blogHeaderText}>
          SailPoint Developer Blog
        </div>
        {/* <img
          className={styles.background}
          src={useBaseUrl('/blog/blog_banner_template.png')}>
        </img> */}
      </div >



    </div>
  );
}
