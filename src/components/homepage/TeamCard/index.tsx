import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

interface TeamCardProps {
  link: string;
  title: string;
  name: string;
  expertise: string;
  image: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ link, title, name, expertise, image }) => {
  return (
    <Link to={link}>
      <div className={styles.card}>
        <div className={styles.cardFaceContainer}>
          <img className={styles.cardFace} src={useBaseUrl(image)} alt={name} />
        </div>
        <ThemedImage
          className={styles.cardArrow}
          sources={{
            light: useBaseUrl('/homepage/arrow-right.png'),
            dark: useBaseUrl('/homepage/arrow-right-dark.png'),
          }}
        />
        <div className={styles.cardText}>{name}</div>
        <div className={styles.titleText}>{title}</div>
        <div className={styles.expertiseText}>{expertise}</div>
      </div>
    </Link>
  );
};

export default TeamCard;
