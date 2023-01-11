import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
export default function TeamCard({link, title, name, expertise, image}) {
  return (
    <Link to={link}>
      <div className={styles.card}>
        <div className={styles.cardFaceContainer}>
          <img className={styles.cardFace} src={useBaseUrl(image)}></img>
        </div>
        <ThemedImage
          className={styles.cardArrow}
          sources={{
            light: useBaseUrl('/homepage/arrow-right.png'),
            dark: useBaseUrl('/homepage/arrow-right-dark.png'),
          }}></ThemedImage>
        <div className={styles.cardText}>{name}</div>
        <div className={styles.titleText}>{title}</div>
        <div className={styles.expertiseText}>{expertise}</div>
      </div>
    </Link>
  );
}
