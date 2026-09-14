import React, { useState } from 'react';
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
  tags?: (string | { id: number; name: string; slug: string })[];
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
  // Not every topic gives us a usable poster image, and a stale one can 404, so
  // fall back to a titled placeholder rather than a broken image.
  const [thumbnailFailed, setThumbnailFailed] = useState(false);
  const showPlaceholder = !thumbnail || thumbnailFailed;

  return (
    <Link to={videoURL}>
      <div title={username} className={featured ? styles.featuredCard : styles.card}>
        <div className={styles.cardText}>
          <div className={featured ? styles.featuredThumbContainer : styles.thumbContainer}>
            {showPlaceholder ? (
              <div
                className={featured ? styles.featuredPlaceholder : styles.placeholder}
                role="img"
                aria-label={title}
              >
                <span className={styles.placeholderTitle}>{title}</span>
              </div>
            ) : (
              <img
                className={featured ? styles.featuredCardImage : styles.cardImage}
                src={thumbnail}
                alt={title}
                onError={() => setThumbnailFailed(true)}
              />
            )}
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
              <div key={typeof tag === 'object' ? tag.name : tag} className={styles.tag}>
                {typeof tag === 'object' ? tag.name : tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
