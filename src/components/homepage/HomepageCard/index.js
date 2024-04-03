import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import {addDarkToFileName} from '../../../util/util';

export default function HomepageCard({link, title, image, product}) {
  const productStyles = product === 'isc' ? styles.idn : styles.iiq;

  return (
    <Link to={link}>
      <div className={styles.card}>
        {image && (
          <>
            <img className={styles.cardIcon} src={useBaseUrl(image)} />
            <ThemedImage
              className={styles.cardArrow}
              sources={{
                light: useBaseUrl('/homepage/arrow-right.png'),
                dark: useBaseUrl('/homepage/arrow-right-dark.png'),
              }}
            />
          </>
        )}
        <div className={styles.cardText}>{title}</div>
        <div className={`${styles.product} ${productStyles}`}>{product}</div>
      </div>
    </Link>
  );
}
