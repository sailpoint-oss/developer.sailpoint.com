import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import MarketplaceCard from '../MarketplaceCard';
import Modal from 'react-modal';
import useBaseUrl from '@docusaurus/useBaseUrl';
import NewtonsCradle from '../../newtonsCradle';
import { discourseBaseURL, developerWebsiteDomain } from '../../../util/util';
import {
  getMarketplacePosts,
  getMarketplaceTopicRaw,
  getUserTitle,
} from '../../../services/DiscourseService';
import MarketplaceCardDetail from '../MarketplaceCardDetail';

// Define the props interface
interface MarketplaceCardsProps {
  filterCallback: {
    category: string;
    tags?: string[];
  };
  featured?: boolean;
  limit?: number;
  multiple?: boolean;
}

// Define the post interface
interface Post {
  id: number;
  creatorName: string;
  excerpt: string;
  creatorImage: string;
  creatorTitle: string;
  tags: string[];
  image: string;
  link: string;
  title: string;
  views: number;
  liked: number;
  replies: number;
  solution: boolean;
  readTime: number;
}

const MarketplaceCards: React.FC<MarketplaceCardsProps> = ({
  filterCallback,
  featured,
  limit,
  multiple,
}) => {
  const [cardData, setCardData] = useState<Post[] | undefined>();
  const [detailsOpen, setDetailsOpen] = useState<boolean>(false);
  const [details, setDetails] = useState<{ data?: Post; raw?: string }>({});
  const [loadingCards, setLoadingCards] = useState<boolean>(true);
  const xImage = useBaseUrl('/icons/circle-xmark-regular.svg');

  const getPosts = async () => {
    let tags = filterCallback.tags;
    if (featured) {
      tags = ['featured'];
    }
    const data = await getMarketplacePosts(
      tags ? tags.join('+') : '',
      filterCallback.category
    );

    const resultset: Post[] = [];
    const titleList: { group: string; title: string }[] = [];

    if (data.topic_list) {
      for (const topic of data.topic_list.topics) {
        if (topic.tags.length > 0) {
          let poster: any = {};
          for (const topicUser of topic.posters) {
            if (topicUser.description.includes('Original Poster')) {
              for (const user of data.users) {
                if (user.id === topicUser.user_id) {
                  if (!titleList.find((x) => x.group === user.primary_group_name)) {
                    let usertitle = await getUserTitle(user.primary_group_name);

                    if (usertitle.group === undefined) {
                      titleList.push({ group: user.primary_group_name, title: '' });
                    } else {
                      titleList.push({ group: user.primary_group_name, title: usertitle.group.title || '' });
                      user.title = usertitle.group.title;
                    }
                  } else {
                    user.title = titleList.find((x) => x.group === user.primary_group_name)?.title || '';
                  }
                  poster = user;
                }
              }
            }
          }

          resultset.push(await getPostList(topic, poster));
        }
      }

      setCardData(limit ? resultset.slice(0, limit) : resultset);
    } else {
      setCardData(undefined);
    }
    setLoadingCards(false);
  };

  const getDetails = async (data: Post) => {
    const raw = await getMarketplaceTopicRaw(data.id);
    setDetails({ data, raw });
  };

  const openDialog = (data: Post) => {
    setDetails({ data: undefined, raw: undefined });
    getDetails(data);
    setDetailsOpen(true);
  };

  useEffect(() => {}, [detailsOpen, details]);

  Modal.setAppElement('#__docusaurus');

  useEffect(() => {
    getPosts();
    setCardData(undefined);
    setLoadingCards(true);
  }, [filterCallback]);

  return (
    <div className={featured ? styles.featuredCenter : styles.center}>
      {loadingCards ? (
        <div>
          {featured ? (
            <div className={styles.featuredSpinnerCenter}>
              <NewtonsCradle />
            </div>
          ) : (
            <div className={multiple ? styles.spinnerCenterMultiple : styles.spinnerCenterSingle}>
              <NewtonsCradle />
            </div>
          )}
        </div>
      ) : cardData && cardData.length > 0 ? (
        <>
          {multiple ? (
            <div className={styles.multipleGridContainer}>
              {cardData.map((a, index) => (
                <MarketplaceCard key={index + a.link} featured={featured} post={a} openDialogFunc={openDialog} />
              ))}
            </div>
          ) : (
            <div className={featured ? styles.featuredGridContainer : styles.gridContainer}>
              {cardData.map((a, index) => (
                <MarketplaceCard key={index + a.link} featured={featured} post={a} openDialogFunc={openDialog} />
              ))}
            </div>
          )}
        </>
      ) : (
        <div>
          <div className={styles.noFound}>
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

// Helper functions

function shortenTitle(title: string): string {
  return title.length > 63 ? title.substring(0, 62) + '...' : title;
}

function shortenDesc(desc: string): string {
  return desc.length > 93 ? desc.substring(0, 93) + '...' : desc;
}

async function getPostList(topic: any, user: any): Promise<Post> {
  return {
    id: topic.id,
    creatorName: user.name,
    excerpt: shortenDesc(styleExcerpt(topic.excerpt)),
    creatorImage: getAvatarURL(user.avatar_template),
    creatorTitle: user.title,
    tags: topic.tags,
    image: topic.image_url,
    link: discourseBaseURL() + 't/' + topic.slug + '/' + topic.id,
    title: shortenTitle(topic.title),
    views: topic.views,
    liked: topic.like_count,
    replies: topic.posts_count,
    solution: topic.has_accepted_answer,
    readTime: parseInt((500 / 100).toString(), 10),
  };
}

function getAvatarURL(avatar: string): string {
  if (avatar.includes(developerWebsiteDomain())) {
    return 'https://' + developerWebsiteDomain() + avatar.replace('{size}', '120');
  } else {
    return avatar.replace('{size}', '120');
  }
}

function styleExcerpt(excerpt: string | undefined): string {
  if (!excerpt) return '';

  // Remove any strings that have colons between them
  excerpt = excerpt.replace(/:[^:]*:/g, '');

  // Get text between "Description" and "Legal Agreement"
  const match = excerpt.match(/Description([\s\S]*?)Legal Agreement/);
  if (match) {
    excerpt = match[1].trim();
  }

  return excerpt.length > 150 ? excerpt.slice(0, 100) + '...' : excerpt.replace('&hellip;', '');
}

export default MarketplaceCards;
