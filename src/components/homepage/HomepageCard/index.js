import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import {addDarkToFileName} from '../../../util/util.ts';

export default function HomepageCard({link, title, image, product}) {
  const productStyles = product === 'idn' ? styles.idn : styles.iiq;

  return (
    <Link to={link}>
      <div className={styles.card}>
        <ThemedImage
          className={styles.cardIcon}
          sources={{
            light: useBaseUrl(image),
            dark: useBaseUrl(addDarkToFileName(image)),
          }}></ThemedImage>
        <ThemedImage
          className={styles.cardArrow}
          sources={{
            light: useBaseUrl('/homepage/arrow-right.png'),
            dark: useBaseUrl('/homepage/arrow-right-dark.png'),
          }}></ThemedImage>
        <div className={styles.cardText}>{title}</div>
        <div className={`${styles.product} ${productStyles}`}>{product}</div>
      </div>
    </Link>
  );
}
