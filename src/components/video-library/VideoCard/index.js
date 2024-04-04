import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function VideoCard({
  featured,
  videoURL,
  thumbnail,
  title,
  body,
  avatar,
  username,
  tags,
}) {
  return (
    <Link to={videoURL}>
      <div
        title={username}
        className={featured ? styles.featuredCard : styles.card}>
        <div className={styles.cardText}>
          <div
            className={
              featured ? styles.featuredThumbContainer : styles.thumbContainer
            }>
            <img
              className={featured ? styles.featuredCardImage : styles.cardImage}
              src={thumbnail}></img>
          </div>

          <div
            className={featured ? styles.featuredCardTitle : styles.cardTitle}>
            <div className={styles.avatarContainer}>
              <img
                title={username}
                className={styles.avatar}
                src={useBaseUrl(avatar)}></img>
            </div>

            <div
              className={
                featured ? styles.featuredTitleContainer : styles.titleContainer
              }>
              {title}
            </div>
          </div>
          <div className={styles.tags}>
            {tags?.map((tag, index) => {
              return (
                <div key={tag} className={styles.tag}>
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}
