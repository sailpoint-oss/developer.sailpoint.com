import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faCalendar } from '@fortawesome/free-solid-svg-icons';

// Define the props type for the component
interface AmbassadorData {
  link: string;
  creatorImage: string;
  name: string;
  bio: string;
  answers: number;
  member_since: string;
}

interface AmbassadorCardProps {
  data: AmbassadorData;
}

const AmbassadorCard: React.FC<AmbassadorCardProps> = ({ data }) => {
  return (
    <Link to={data.link} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.cardFaceContainer}>
          <img
            className={styles.cardFace}
            src={useBaseUrl(data.creatorImage)}
            alt={data.name}
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
            icon={faCalendar}
            className={styles.docCardIcon}
            size="lg"
          />
          <div className={styles.cardCommentText}>
            Ambassador since {data.member_since}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AmbassadorCard;
