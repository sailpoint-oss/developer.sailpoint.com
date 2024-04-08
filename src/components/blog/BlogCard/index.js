import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
export default function BlogCard({
  featured,
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
    <Link to={link}>
      <div className={featured ? styles.featuredCard : styles.card}>
        <div className={styles.cardText}>
          <img
            className={featured ? styles.featuredCardImage : styles.cardImage}
            src={useBaseUrl(image)}></img>
          <div className={styles.split}></div>

          <div
            className={featured ? styles.featuredCardTitle : styles.cardTitle}>
            {title}
          </div>

          <div className={styles.cardUser}>
            <img
              className={featured ? styles.featuredCardFace : styles.cardFace}
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
