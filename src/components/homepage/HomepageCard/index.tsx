import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import { addDarkToFileName } from '../../../util/util';

export interface HomepageCardProps {
  link: string;
  title: string;
  image?: string;
  product: 'shf' | 'iiq';
}

const HomepageCard: React.FC<HomepageCardProps> = ({ link, title, image, product }) => {
  const productStyles = product === 'shf' ? styles.shf : styles.iiq;

  return (
    <Link to={link}>
      <div className={styles.card}>
        {image && (
          <ThemedImage
            className={styles.cardIcon}
            sources={{
              light: useBaseUrl(image),
              dark: useBaseUrl(addDarkToFileName(image)),
            }}
          />
        )}
        <div className={`${styles.product} ${productStyles}`}>{product}</div>
        <div className={styles.cardText}>{title}</div>
        {image && (
          <ThemedImage
            className={styles.cardArrow}
            sources={{
              light: useBaseUrl('/homepage/arrow-right.png'),
              dark: useBaseUrl('/homepage/arrow-right-dark.png'),
            }}
          />
        )}
      </div>
    </Link>
  );
};

export default HomepageCard;
