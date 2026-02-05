import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import VideoCard from '../VideoCard';
import {
  videoBaseURL,
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

const VideoCards: React.FC<VideoCardsProps> = ({ filterCallback, limit, featured }) => {
  const [cardData, setCardData] = useState<VideoPost[] | undefined>();
  const [loadingCards, setLoadingCards] = useState<boolean>(true);

  const buildTopicUrl = (slug: string, id: number): string => {
    return `${discourseBaseURL()}t/${slug}/${id}`;
  };

  const parseVideoDetails = (inputStr: string) => {
    const parts = inputStr.split('\n\nDescription\n');
    const videoUrl = parts[0].trim();
    const lastSegment = videoUrl.split('/').pop() || '';
    const page = lastSegment.replace('.html', '');
    const description = parts.length > 1 ? parts[1].trim() : '';
    return { videoUrl, description, page };
  };

  const shortenTitle = (title: string): string => {
    return title.length > 63 ? title.substring(0, 62) + '...' : title;
  };

  const getVideoTopics = async () => {
    let tags = featured ? ['featured'] : filterCallback.tags;
    const data = await getVideoPosts(tags || []);

    const resultset: VideoPost[] = [];
    if (data.topic_list) {
      for (const topic of data.topic_list.topics) {
        if (topic.tags.length > 0) {
          let { videoUrl, description } = parseVideoDetails(topic.excerpt);
          let thumbnail = videoUrl.replace('.html', '.jpg');
          let avatar = '';
          let username = '';
          let ogPoster = topic.posters.find((poster: any) =>
            poster.description.includes('Original Poster')
          );

          if (ogPoster) {
            let user = data.users.find((user: any) => user.id === ogPoster.user_id);
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
  };

  useEffect(() => {
    getVideoTopics();
    setCardData(undefined);
    setLoadingCards(true);
  }, [filterCallback]);

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
            Hey there, looks like no integrations match your search criteria.
            Check out our{' '}
            <a href="https://developer.sailpoint.com/discuss/t/about-the-sailpoint-developer-community-colab/11230">
              getting started guide
            </a>
            , and consider being the first to contribute this integration!
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
