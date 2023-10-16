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
  image,
  excerpt,
  name,
  views,
  replies,
  readTime
}) {

  return (
    <Link to={link}>
      <div className={styles.card} >

        <div className={styles.cardData}>
          <img className={styles.cardEye} src={useBaseUrl('/blog/eye-regular.svg')}></img>
          <div className={styles.cardCommentText}>{views}</div>
          <img className={styles.cardComment} src={useBaseUrl('/blog/comment-light.svg')}></img>
          <div className={styles.cardCommentText}>{replies}</div>
          <img className={styles.cardComment} src={useBaseUrl('/blog/clock-light.svg')}></img>
        </div>

        <div className={styles.cardUser}>
          <img className={styles.cardFace} src={useBaseUrl(creatorImage)}></img>
          <div className={styles.cardName}>{name}</div>
        </div>


        <div className={styles.cardText}>
          <img className={styles.cardImage} src={useBaseUrl(image)}></img>
          <div className={styles.cardTitle}>{title}</div>
          <div className={styles.tags}>
            {tags?.map((tag, index) => {
              if (index > 2) {
                return '';
              }
              return <div key={tag} className={styles.tag}>{tag}</div>;
            })}
          </div>
          <div className={styles.cardBody}>{excerpt}</div>
        </div>
        



      </div>
    </Link>
  );
}
