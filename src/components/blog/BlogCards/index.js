import React from 'react';
import styles from './styles.module.css';
import BlogCard from '../BlogCard';

import {getBlogPosts, getTopic} from '../../../services/DiscourseService';
export default function BlogCards() {
  const [ans, setAns] = React.useState();

  const getPosts = async () => {
    const data = await getBlogPosts();
    console.log(data.topics)
    const resultset = []
    let i = 0;
    for (const topic of data.topics) {
      resultset.push(await getPostList(topic))
      i++
    }
    setAns(resultset);
  };

  React.useEffect(() => {
    getPosts();
  }, []);

  if (ans) {
    return (
      <div className={styles.center}>
        <div className={styles.gridContainer}>

          {ans.map(function(a, index){
            return <BlogCard
            excerpt={a.excerpt}
            name={a.name}
            tags={a.tags}
            link={a.link}
            title={a.title}
            views={a.views}
            replies={a.replies}
            image={a.image}></BlogCard>
          })}
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

async function getPostList(topic) {
  const fullTopic = await getTopic(topic.id);
  console.log(fullTopic)
  return {
    name: fullTopic.details.created_by.name,
    excerpt: styleExcerpt(topic.excerpt),
    image: getavatarURL(fullTopic.details.created_by.avatar_template),
    tags: topic.tags,
    link:
      'https://developer.sailpoint.com/discuss/t/' +
      topic.slug +
      '/' +
      topic.id,
    title: topic.title,
    views: fullTopic.views,
    liked: topic.like_count,
    replies: fullTopic.posts_count,
    solution: topic.has_accepted_answer,
  };
}

function getavatarURL(avatar) {
  return "https://developer.sailpoint.com" + avatar.replace("{size}", "120")
}

function styleExcerpt(excerpt) {
  if (excerpt.length > 150) {
    return excerpt.slice(0, 150) + "..."
  } else {
    return excerpt.replace("&hellip;", "")
  }
}

