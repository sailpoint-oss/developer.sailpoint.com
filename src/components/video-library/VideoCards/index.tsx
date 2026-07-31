import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';
import VideoCard from '../VideoCard';
import {
  videoBaseURL,
  discourseBaseURL,
  developerWebsiteDomain,
} from '../../../util/util';
import NewtonsCradle from '../../newtonsCradle';
import { getVideoPosts, getTopic } from '../../../services/DiscourseService';
import { findVideoThumbnail, videoThumbnailURL } from '../../../util/videoThumbnail';

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

// Thumbnails scraped out of a topic's body, keyed by topic id. Shared across
// renders so switching tag filters doesn't refetch the same topics.
const scrapedThumbnails = new Map<number, string>();

// Cards whose thumbnail couldn't be derived from the topic list fall back to
// reading the first post of the topic, where the player iframe/link lives.
// Fetched a handful at a time so a wide result set doesn't fire off dozens of
// simultaneous requests.
const resolveMissingThumbnails = async (posts: VideoPost[]): Promise<VideoPost[]> => {
  const pending = posts.filter((post) => !post.thumbnail);
  const batchSize = 6;

  for (let i = 0; i < pending.length; i += batchSize) {
    await Promise.all(
      pending.slice(i, i + batchSize).map(async (post) => {
        if (scrapedThumbnails.has(post.key)) {
          post.thumbnail = scrapedThumbnails.get(post.key) as string;
          return;
        }

        const topic = await getTopic(post.key);
        const cooked = topic?.post_stream?.posts?.[0]?.cooked;
        const thumbnail = findVideoThumbnail(cooked) ?? '';

        scrapedThumbnails.set(post.key, thumbnail);
        post.thumbnail = thumbnail;
      })
    );
  }

  return posts;
};

const VideoCards: React.FC<VideoCardsProps> = ({ filterCallback, limit, featured }) => {
  const [cardData, setCardData] = useState<VideoPost[] | undefined>();
  const [loadingCards, setLoadingCards] = useState<boolean>(true);
  const latestRequest = useRef(0);

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
    // Scraping thumbnails adds a round trip per card, so make sure a slow run
    // can't overwrite the results of a filter the user picked in the meantime.
    const requestId = ++latestRequest.current;
    let tags = featured ? ['featured'] : filterCallback.tags;
    const data = await getVideoPosts(tags || []);

    const resultset: VideoPost[] = [];
    if (data.topic_list) {
      for (const topic of data.topic_list.topics) {
        if (topic.tags.length > 0) {
          let { videoUrl, description } = parseVideoDetails(topic.excerpt || '');
          // The excerpt only leads with the player URL on posts that start with
          // the video; otherwise fall back to whatever preview image Discourse
          // picked, and finally to scraping the post body below.
          let thumbnail = videoThumbnailURL(videoUrl) || topic.image_url || '';
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

    const visible = limit ? resultset.slice(0, limit) : resultset;
    const withThumbnails = await resolveMissingThumbnails(visible);

    if (requestId !== latestRequest.current) return;
    setCardData(withThumbnails);
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
              username={a.username}
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
