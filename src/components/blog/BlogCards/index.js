import React from 'react';
import styles from './styles.module.css';
import BlogCard from '../BlogCard';
import BounceLoader from 'react-spinners/BounceLoader';
import {discourseBaseURL, developerWebsiteDomain} from '../../../util/util';

import {getBlogPosts} from '../../../services/DiscourseService';
export default function BlogCards({filterCallback}) {
  const [cardData, setCardData] = React.useState();
  const [loadingCards, setLoadingCards] = React.useState(true);

  const getPosts = async () => {
    if (!filterCallback) {
      filterCallback = ['identity-security-cloud'];
    }
    const data = await getBlogPosts(filterCallback.join('+'));
    const resultset = [];
    if (data.topic_list.topics) {
      for (const topic of data.topic_list.topics) {
        if (topic.tags.length > 0) {
          let poster = {};
          for (let topicUser of topic.posters) {
            if (topicUser.description.includes('Original Poster')) {
              for (let user of data.users) {
                if (user.id === topicUser.user_id) {
                  console.log(user);
                  poster = user;
                }
              }
            }
          }
          if (topic.category_id !== 57) {
            resultset.push(await getPostList(topic, poster));
          }
        }
      }
      setCardData(resultset);
    } else {
      setCardData(undefined);
    }
    setLoadingCards(false);
  };

  function shortenTitle(title) {
    if (title.length > 63) {
      return title.substring(0, 62) + '...';
    }
    return title;
  }

  React.useEffect(() => {
    getPosts();
    setCardData(undefined);
    setLoadingCards(true);
  }, [filterCallback]);

  if (cardData && cardData.length > 0) {
    return (
      <div className={styles.center}>
        <div className={styles.gridContainer}>
          {cardData.map(function (a, index) {
            return (
              <BlogCard
                key={a.link}
                id={index + a.link}
                excerpt={a.excerpt}
                name={a.name}
                tags={a.tags}
                link={a.link}
                image={a.image}
                title={shortenTitle(a.title)}
                views={a.views}
                replies={a.replies}
                readTime={a.readTime}
                creatorImage={a.creatorImage}></BlogCard>
            );
          })}
        </div>
      </div>
    );
  } else if (loadingCards) {
    return (
      <BounceLoader
        className={styles.spinnerCenter}
        color={'#0033a1'}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  } else {
    return (
      <div className={styles.noFound}>
        {' '}
        No Blogposts Found with the Given Search Criteria
      </div>
    );
  }
}

async function getPostList(topic, user) {
  return {
    name: user.name,
    excerpt: styleExcerpt(topic.excerpt),
    creatorImage: getavatarURL(user.avatar_template),
    tags: topic.tags,
    image: topic.image_url,
    link: discourseBaseURL() + 't/' + topic.slug + '/' + topic.id,
    title: topic.title,
    views: topic.views,
    liked: topic.like_count,
    replies: topic.posts_count,
    solution: topic.has_accepted_answer,
    readTime: parseInt(500 / 100),
  };
}

function getavatarURL(avatar) {
  if (avatar.includes(developerWebsiteDomain())) {
    return (
      'https://' + developerWebsiteDomain() + avatar.replace('{size}', '120')
    );
  } else {
    return avatar.replace('{size}', '120');
  }
}

function styleExcerpt(excerpt) {
  if (excerpt.length > 150) {
    return excerpt.slice(0, 150) + '...';
  } else {
    return excerpt.replace('&hellip;', '');
  }
}
