import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function VideoCard({
  videoURL,
  thumbnail,
  title,
  body,
  avatar,
  tags,
}) {
  return (
    <Link to={videoURL}>
      <div className={styles.card}>
        <div className={styles.cardText}>
          <div className={styles.thumbContainer}>
            <img className={styles.cardImage} src={thumbnail}></img>
          </div>

          <div className={styles.cardTitle}>
            <div className={styles.avatarContainer}>
              <img className={styles.avatar} src={avatar}></img>
            </div>

            <div className={styles.titleContainer}>{title}</div>
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
