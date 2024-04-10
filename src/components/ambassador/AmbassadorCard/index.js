import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import {addDarkToFileName} from '../../../util/util';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faSquareCheck,
  faCalendarClock,
} from '@fortawesome/pro-duotone-svg-icons';
export default function AmbassadorCard({data}) {
  return (
    <Link to={data.link} className={styles.link}>
      
      <div className={styles.card}>
        <div className={styles.cardFaceContainer}>
          <img
            className={styles.cardFace}
            src={useBaseUrl(data.creatorImage)}></img>
          <div className={styles.cardNameContainer}>
            <div className={styles.name}>{data.name}</div>
          </div>
        </div>

        <div
          className={styles.bio}
          dangerouslySetInnerHTML={{__html: data.bio}}></div>

        <div className={styles.cardData}>
          <FontAwesomeIcon
            icon={faSquareCheck}
            className={styles.docCardIcon}
            size="lg"
          />
          <div className={styles.cardCommentTextUpper}>
            {data.answers} solutions
          </div>
        </div>
        <div className={styles.cardDataLower}>
          <FontAwesomeIcon
            icon={faCalendarClock}
            className={styles.docCardIcon}
            size="lg"
          />
          <div className={styles.cardCommentText}>
            member since {data.member_since}
          </div>
        </div>
      </div>
    </Link>
  );
}
