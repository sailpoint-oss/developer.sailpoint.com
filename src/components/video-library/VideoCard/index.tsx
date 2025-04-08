import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

// Define the props interface
interface VideoCardProps {
  featured?: boolean;
  videoURL: string;
  thumbnail: string;
  title: string;
  body?: string;
  avatar: string;
  username: string;
  tags?: string[];
}

const VideoCard: React.FC<VideoCardProps> = ({
  featured = false,
  videoURL,
  thumbnail,
  title,
  avatar,
  username,
  tags = [],
}) => {
  return (
    <Link to={videoURL}>
      <div title={username} className={featured ? styles.featuredCard : styles.card}>
        <div className={styles.cardText}>
          <div className={featured ? styles.featuredThumbContainer : styles.thumbContainer}>
            <img className={featured ? styles.featuredCardImage : styles.cardImage} src={thumbnail} alt={title} />
          </div>

          <div className={featured ? styles.featuredCardTitle : styles.cardTitle}>
            <div className={styles.avatarContainer}>
              <img title={username} className={styles.avatar} src={useBaseUrl(avatar)} alt={username} />
            </div>

            <div className={featured ? styles.featuredTitleContainer : styles.titleContainer}>
              {title}
            </div>
          </div>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <div key={tag} className={styles.tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
