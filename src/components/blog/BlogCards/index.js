import React from 'react';
import styles from './styles.module.css';
import BlogCard from '../BlogCard';
import NewtonsCradle from '../../newtonsCradle';
import {discourseBaseURL, developerWebsiteDomain} from '../../../util/util';
import {getBlogPosts, getUserTitle} from '../../../services/DiscourseService';

export default function BlogCards({filterCallback, limit, featured}) {
  const [cardData, setCardData] = React.useState();
  const [loadingCards, setLoadingCards] = React.useState(true);

  const getPosts = async () => {
    if (!filterCallback) {
      filterCallback = ['identity-security-cloud'];
    }

    if (featured) {
      filterCallback = ['featured'];
    }
    const data = await getBlogPosts(filterCallback.join('+'));
    const resultset = [];
    const titleList = [];
    if (data.topic_list.topics) {
      for (const topic of data.topic_list.topics) {
        if (topic.tags.length > 0) {
          let poster = {};
          for (let topicUser of topic.posters) {
            if (topicUser.description.includes('Original Poster')) {
              for (let user of data.users) {
                if (user.id === topicUser.user_id) {
                  if (
                    !titleList.find((x) => x.group === user.primary_group_name)
                  ) {
                    let usertitle = await getUserTitle(user.primary_group_name);
                    titleList.push({
                      group: user.primary_group_name,
                      title: usertitle.group.title,
                    });
                    user.title = usertitle.group.title;
                  } else {
                    user.title = titleList.find(
                      (x) => x.group === user.primary_group_name,
                    ).title;
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
      if (limit) {
        setCardData(resultset.slice(0, limit));
      } else {
        setCardData(resultset);
      }
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

  return (
    <div className={featured ? null : styles.center}>
      {loadingCards ? (
        // Show loading icon when data is still loading
        <div
          className={
            featured ? styles.featuredSpinnerCenter : styles.spinnerCenter
          }>
          <NewtonsCradle />
        </div>
      ) : cardData && cardData.length > 0 ? (
        // Show cards if not loading and cardData is available
        <div
          className={
            featured ? styles.featuredGridContainer : styles.gridContainer
          }>
          {cardData.map((a, index) => (
            <BlogCard
              featured={featured}
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
              creatorImage={a.creatorImage}
              creatorTitle={a.creatorTitle}></BlogCard>
          ))}
        </div>
      ) : (
        // Show no content message if not loading and no cardData
        <div className={styles.noFound}>
          No Blogposts Found with the Given Search Criteria
        </div>
      )}
    </div>
  );
}

async function getPostList(topic, user) {
  return {
    name: user.name,
    excerpt: styleExcerpt(topic.excerpt),
    creatorImage: getavatarURL(user.avatar_template),
    creatorTitle: user.title,
    tags: topic.tags,
    image: topic.image_url,
    link: discourseBaseURL() + 't/' + topic.slug + '/' + topic.id,
    title: topic.title,
    views: topic.views,
    liked: topic.like_count,
    replies: topic.posts_count,
    solution: topic.has_accepted_answer,
    readTime: parseInt(500 / 200),
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
