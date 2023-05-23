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
  image,
  excerpt,
  name,
  views
}) {

  return (
    <Link to={link}>
      <div className={styles.card}>

        <span className={styles.cardData}>
          <img className={styles.cardEye} src={useBaseUrl('/blog/eye-regular.svg')}></img>
          <span className={styles.cardDataTextAlign}><div>100</div></span>
          <span className={styles.cardDataText}>100</span>
          <img className={styles.cardComment} src={useBaseUrl('/blog/comment-light.svg')}></img>
          <span className={styles.cardDataTextAlign}><div>8</div></span>
          <span className={styles.cardDataText}>8</span>
        </span>

        <img className={styles.cardFace} src={useBaseUrl(image)}></img>
        <div className={styles.cardText}>
          <div className={styles.cardTitle}>{title}</div>
          <div className={styles.cardBody}>{excerpt}</div>
        </div>
        <div className={styles.cardName}>{name}</div>


        <div className={styles.tags}>
          {tags?.map((tag, index) => {
            if (index > 2) {
              return '';
            }
            return <div className={styles.tag}>{tag}</div>;
          })}
        </div>
      </div>
    </Link>
  );
}
