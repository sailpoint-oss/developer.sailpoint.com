import {useCallback, useEffect, useState} from 'react';
import type {FC} from 'react';
import styles from './styles.module.css';
import VideoCard from '../VideoCard';
import {
  discourseBaseURL,
  developerWebsiteDomain,
} from '../../../util/util';
import NewtonsCradle from '../../newtonsCradle';
import { getVideoPosts } from '../../../services/DiscourseService';

// Define the props interface
interface VideoCardsProps {
  filterCallback: { tags?: string[] };
  limit?: number;
  featured?: boolean;
}

// Define the post interface
interface VideoPost {
  key: number;
  title: string;
  tags: (string | { id: number; name: string; slug: string })[];
  body: string;
  thumbnail: string;
  avatar: string;
  username: string;
  url: string;
}

interface TopicPoster {
  description: string;
  user_id: number;
}

interface VideoUser {
  id: number;
  name: string;
  avatar_template: string;
}

const buildTopicUrl = (slug: string, id: number): string => {
  return `${discourseBaseURL()}t/${slug}/${id}`;
};

const parseVideoDetails = (inputStr: string) => {
  const parts = inputStr.split('\n\nDescription\n');
  const videoUrl = parts[0].trim();
  const description = parts.length > 1 ? parts[1].trim() : '';
  return { videoUrl, description };
};

const shortenTitle = (title: string): string => {
  return title.length > 63 ? title.substring(0, 62) + '...' : title;
};

const VideoCards: FC<VideoCardsProps> = ({ filterCallback, limit, featured }) => {
  const [cardData, setCardData] = useState<VideoPost[] | undefined>();
  const [loadingCards, setLoadingCards] = useState<boolean>(true);

  const getVideoTopics = useCallback(async () => {
    const tags = featured ? ['featured'] : filterCallback.tags;
    const data = await getVideoPosts(tags || []);

    const resultset: VideoPost[] = [];
    if (data.topic_list) {
      for (const topic of data.topic_list.topics) {
        if (topic.tags.length > 0) {
          const { videoUrl, description } = parseVideoDetails(topic.excerpt);
          let thumbnail = videoUrl.replace('.html', '.jpg');
          let avatar = '';
          let username = '';
          const ogPoster = topic.posters.find((poster: TopicPoster) =>
            poster.description.includes('Original Poster')
          );

          if (ogPoster) {
            const user = data.users.find((user: VideoUser) => user.id === ogPoster.user_id);
            if (user) {
              username = user.name;
              avatar = getAvatarURL(user.avatar_template);
            }
          }

          if (!description) {
            thumbnail = topic.image_url;
          }

          if (featured || (!featured && !topic.tags.includes('featured'))) {
            resultset.push({
              key: topic.id,
              title: shortenTitle(topic.title),
              tags: topic.tags,
              body: description || topic.excerpt,
              thumbnail: thumbnail,
              avatar: avatar,
              username: username,
              url: buildTopicUrl(topic.slug, topic.id),
            });
          }
        }
      }
    } else {
      setCardData(undefined);
    }
    setCardData(limit ? resultset.slice(0, limit) : resultset);
    setLoadingCards(false);
  }, [featured, filterCallback.tags, limit]);

  useEffect(() => {
    setCardData(undefined);
    setLoadingCards(true);
    getVideoTopics();
  }, [getVideoTopics]);

  return (
    <div className={featured ? undefined : styles.center}>
      {loadingCards ? (
        <div className={featured ? styles.featuredSpinnerCenter : styles.spinnerCenter}>
          <NewtonsCradle />
        </div>
      ) : cardData && cardData.length > 0 ? (
        <div className={featured ? styles.featuredGridContainer : styles.gridContainer}>
          {cardData.map((a) => (
            <VideoCard
              featured={featured}
              key={a.key}
              videoURL={a.url}
              thumbnail={a.thumbnail}
              title={a.title}
              body={a.body}
              avatar={a.avatar}
              tags={a.tags}
            />
          ))}
        </div>
      ) : (
        <div>
          <div className={styles.noFound}>
            {' '}
            No videos match your current filters. Try removing a filter, or{' '}
            <a href="https://developer.sailpoint.com/discuss/new-topic?category=content/video-library&title=Video%20library%20contribution&body=Share%20the%20video%20title,%20source,%20and%20why%20it%20should%20be%20included.">
              suggest a video
            </a>
            {' '}for the library.
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function to get avatar URL
const getAvatarURL = (avatar: string): string => {
  return avatar.includes(developerWebsiteDomain())
    ? `https://${developerWebsiteDomain()}${avatar.replace('{size}', '120')}`
    : avatar.replace('{size}', '120');
};

export default VideoCards;
