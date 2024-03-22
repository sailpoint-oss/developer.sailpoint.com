import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import {addDarkToFileName} from '../../../util/util';
export default function BlogCard({
  link,
  title,
  tags,
  creatorImage,
  creatorTitle,
  image,
  excerpt,
  name,
  views,
  replies,
  readTime,
}) {
  return (
    <Link to={link} className={styles.BlogCard}>
      <div className={styles.card}>
        <div className={styles.cardText}>
          <img className={styles.cardImage} src={useBaseUrl(image)}></img>
          <div className={styles.split}></div>

          <div className={styles.cardTitle}>{title}</div>

          <div className={styles.cardUser}>
            <img
              className={styles.cardFace}
              src={useBaseUrl(creatorImage)}></img>

            <div className={styles.cardName}>{name}</div>
            <div className={styles.cardCreatorTitle}>{creatorTitle}</div>

            <div></div>
          </div>
        </div>
      </div>
    </Link>
  );
}
