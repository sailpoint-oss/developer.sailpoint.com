import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import {addDarkToFileName} from '../../../util/util';
export default function AmbassadorCard({
  data
}) {

  return (
    <Link to={data.link} className={styles.link}>


      <div className={styles.card}>
        <div className={styles.cardFaceContainer}>
          <img className={styles.cardFace} src={useBaseUrl(data.creatorImage)}></img>
          <div className={styles.cardNameContainer}>
            <div className={styles.name}>{data.name}</div>
            <div className={styles.titleText}>{data.title}</div>
            <div className={styles.location}>{data.location}</div>
          </div>
        </div>

        <div className={styles.bio} dangerouslySetInnerHTML={{__html: data.bio}}></div>

        <div className={styles.cardData}>
          <img className={styles.cardEye} src={useBaseUrl('/icons/square-check-regular.svg')}></img>
          <div className={styles.cardCommentText}>{data.answers} solutions</div>
        </div>
        <div className={styles.cardDataLower}>
          <img className={styles.cardEye} src={useBaseUrl('/icons/calendar-clock-light.svg')}></img>
          <div className={styles.cardCommentText}>member since {data.member_since}</div>
        </div>

      </div>

    </Link>
  );
}
