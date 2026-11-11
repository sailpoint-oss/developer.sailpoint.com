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
}

const HomepageCard: React.FC<HomepageCardProps> = ({ link, title, image }) => {
  return (
    <Link to={link} className={styles.cardLink}>
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
