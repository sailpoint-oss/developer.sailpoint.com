import React from 'react';
import styles from './styles.module.css';
import BlogCard from '../BlogCard';

import {getBlogPosts} from '../../../services/DiscourseService';
export default function BlogCards() {
  const [ans, setAns] = React.useState();

  const getPosts = async () => {
    const data = await getBlogPosts();
    console.log(data)
    const resultset = [
      getPostList(data, 0),
      getPostList(data, 1),
    ];
    setAns(resultset);
  };

  React.useEffect(() => {
    getPosts();
  }, []);

  if (ans) {
    return (
      <div className={styles.center}>

        <div className={styles.gridContainer}>
          <BlogCard
            excerpt={ans[0].excerpt}
            name={ans[0].name}
            tags={ans[0].tags}
            link={ans[0].link}
            title={ans[0].title}
            image={ans[0].image}></BlogCard>
          <BlogCard
            excerpt={ans[1].excerpt}
            name={ans[1].name}
            tags={ans[1].tags}
            link={ans[1].link}
            title={ans[1].title}
            image={ans[1].image}></BlogCard>
          <BlogCard
            excerpt={ans[0].excerpt}
            name={ans[0].name}
            tags={ans[0].tags}
            link={ans[0].link}
            title={ans[0].title}
            image={ans[0].image}></BlogCard>
          <BlogCard
            excerpt={ans[1].excerpt}
            name={ans[1].name}
            tags={ans[1].tags}
            link={ans[1].link}
            title={ans[1].title}
            image={ans[1].image}></BlogCard>
          <BlogCard
            excerpt={ans[0].excerpt}
            name={ans[0].name}
            tags={ans[0].tags}
            link={ans[0].link}
            title={ans[0].title}
            image={ans[0].image}></BlogCard>
          <BlogCard
            excerpt={ans[1].excerpt}
            name={ans[1].name}
            tags={ans[1].tags}
            link={ans[1].link}
            title={ans[1].title}
            image={ans[1].image}></BlogCard>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function getPostList(posts, index) {
  return {
    name: posts.posts[index].name,
    excerpt: styleExcerpt(posts.topics[index].excerpt),
    image: getavatarURL(posts.posts[index].avatar_template),
    tags: posts.topics[index].tags,
    link:
      'https://developer.sailpoint.com/discuss/t/' +
      posts.topics[index].slug +
      '/' +
      posts.topics[index].id,
    title: posts.topics[index].title,
    views: posts.topics[index].views,
    liked: posts.topics[index].like_count,
    solution: posts.topics[index].has_accepted_answer,
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

