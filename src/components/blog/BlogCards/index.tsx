import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import BlogCard from '../BlogCard';
import NewtonsCradle from '../../NewtonsCradle';
import { discourseBaseURL, developerWebsiteDomain } from '../../../util/util';
import { getBlogPosts, getUserTitle } from '../../../services/DiscourseService';

// Define the types for props
interface BlogCardsProps {
  filterCallback?: string[];
  limit?: number;
  featured?: boolean;
}

// Define the type for the blog post data
interface BlogPost {
  name: string;
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

const BlogCards: React.FC<BlogCardsProps> = ({ filterCallback = ['identity-security-cloud'], limit, featured }) => {
  const [cardData, setCardData] = useState<BlogPost[] | undefined>();
  const [loadingCards, setLoadingCards] = useState<boolean>(true);

  const getPosts = async () => {
    const filters = featured ? ['featured'] : filterCallback;
    const data = await getBlogPosts(filters.join('+'));
    const resultset: BlogPost[] = [];
    const titleList: { group: string; title: string }[] = [];

    if (data.topic_list?.topics) {
      for (const topic of data.topic_list.topics) {
        if (topic.tags.length > 0) {
          let poster: any = {};
          for (let topicUser of topic.posters) {
            if (topicUser.description.includes('Original Poster')) {
              for (let user of data.users) {
                if (user.id === topicUser.user_id) {
                  const existingTitle = titleList.find((x) => x.group === user.primary_group_name);
                  if (!existingTitle) {
                    if (user.primary_group_name) {
                      const userTitle = await getUserTitle(user.primary_group_name);
                      titleList.push({ group: user.primary_group_name, title: userTitle.group.title });
                      user.title = userTitle.group.title;
                    }
                  } else {
                    user.title = existingTitle.title;
                  }
                  poster = user;
                }
              }
            }
          }
          if (topic.category_id !== 57) {
            if (featured || (!featured && !topic.tags.includes('featured'))) {
              resultset.push(await getPostList(topic, poster));
            }
          }
        }
      }
      setCardData(limit ? resultset.slice(0, limit) : resultset);
    } else {
      setCardData(undefined);
    }
    setLoadingCards(false);
  };

  useEffect(() => {
    setLoadingCards(true);
    setCardData(undefined);
    getPosts();
  }, [filterCallback]);

  return (
    <div className={featured ? styles.featuredCenter : styles.center}>
      {loadingCards ? (
        <div className={featured ? styles.featuredSpinnerCenter : styles.spinnerCenter}>
          <NewtonsCradle />
        </div>
      ) : cardData && cardData.length > 0 ? (
        <div className={featured ? styles.featuredGridContainer : styles.gridContainer}>
          {cardData.map((a, index) => (
            <BlogCard
              featured={featured}
              key={a.link}
              excerpt={a.excerpt}
              name={a.name}
              tags={a.tags}
              link={a.link}
              image={a.image}
              title={shortenTitle(a.title)}
              views={a.views}
              replies={a.replies}
              readTime={a.readTime}
              creatorImage={a.creatorImage}
              creatorTitle={shortenUserTitle(a.creatorTitle)}
            />
          ))}
        </div>
      ) : (
        <div className={styles.noFound}>No Blogposts Found with the Given Search Criteria</div>
      )}
    </div>
  );
};

async function getPostList(topic: any, user: any): Promise<BlogPost> {
  return {
    name: user.name,
    excerpt: styleExcerpt(topic.excerpt),
    creatorImage: getAvatarURL(user.avatar_template),
    creatorTitle: user.title,
    tags: topic.tags,
    image: topic.image_url,
    link: discourseBaseURL() + 't/' + topic.slug + '/' + topic.id,
    title: topic.title,
    views: topic.views,
    liked: topic.like_count,
    replies: topic.posts_count,
    solution: topic.has_accepted_answer,
    readTime: Math.ceil(500 / 200),
  };
}

function getAvatarURL(avatar: string): string {
  return avatar.includes(developerWebsiteDomain())
    ? `https://${developerWebsiteDomain()}${avatar.replace('{size}', '120')}`
    : avatar.replace('{size}', '120');
}

function styleExcerpt(excerpt: string): string {
  return excerpt.length > 150 ? excerpt.slice(0, 150) + '...' : excerpt.replace('&hellip;', '');
}

function shortenTitle(title: string): string {
  return title.length > 63 ? title.substring(0, 62) + '...' : title;
}

function shortenUserTitle(userTitle?: string): string {
  return userTitle && userTitle.length > 31 ? userTitle.substring(0, 30) + '...' : userTitle || '';
}

export default BlogCards;
