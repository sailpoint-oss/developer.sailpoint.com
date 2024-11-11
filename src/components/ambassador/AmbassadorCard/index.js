import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faCalendar } from '@fortawesome/free-solid-svg-icons'; // Fallback classic icons

export default function AmbassadorCard({ data }) {
  return (
    <Link to={data.link} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.cardFaceContainer}>
          <img
            className={styles.cardFace}
            src={useBaseUrl(data.creatorImage)} // Dynamic base URL for image
            alt={data.name} // Always good to add an alt attribute for accessibility
          />
          <div className={styles.cardNameContainer}>
            <div className={styles.name}>{data.name}</div>
          </div>
        </div>

        <div
          className={styles.bio}
          dangerouslySetInnerHTML={{ __html: data.bio }} // Render the bio with HTML content
        />

        <div className={styles.cardData}>
          <FontAwesomeIcon
            icon={faSquareCheck} // Use Pro icon if available, else fallback to Free
            className={styles.docCardIcon}
            size="lg"
          />
          <div className={styles.cardCommentTextUpper}>
            {data.answers} solutions
          </div>
        </div>
        <div className={styles.cardDataLower}>
          <FontAwesomeIcon
            icon={faCalendar} // Use Pro icon if available, else fallback to Free
            className={styles.docCardIcon}
            size="lg"
          />
          <div className={styles.cardCommentText}>
            ambassador since {data.member_since}
          </div>
        </div>
      </div>
    </Link>
  );
}
