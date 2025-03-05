import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import DiscussCard from '../DiscussCard';
import { discourseBaseURL } from '../../../util/util';
import { getTopPosts } from '../../../services/DiscourseService';

interface Post {
  tags: string[];
  link: string;
  title: string;
  views: number;
  liked: number;
  solution: boolean;
}

const HomepageDiscuss: React.FC = () => {
  const [ans, setAns] = useState<Post[] | null>(null);

  const getPosts = async () => {
    const data = await getTopPosts();
    const resultset = [
      getPostList(data, 0),
      getPostList(data, 1),
      getPostList(data, 2),
      getPostList(data, findSolutionPost(data.topic_list.topics)),
    ];
    setAns(resultset);
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (ans) {
    return (
      <div className={styles.center}>
        <div className={styles.gridContainer}>
          {ans.map((post, index) => (
            <DiscussCard
              key={index}
              solution={post.solution}
              liked={post.liked}
              tags={post.tags}
              link={post.link}
              title={post.title}
              views={post.views}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const getPostList = (posts: any, index: number): Post => ({
  tags: posts.topic_list.topics[index].tags,
  link:
    discourseBaseURL() +
    't/' +
    posts.topic_list.topics[index].slug +
    '/' +
    posts.topic_list.topics[index].id,
  title: posts.topic_list.topics[index].title,
  views: posts.topic_list.topics[index].views,
  liked: posts.topic_list.topics[index].like_count,
  solution: posts.topic_list.topics[index].has_accepted_answer,
});

const findSolutionPost = (posts: any[]): number => {
  let index = 0;
  for (const post of posts) {
    if (post.has_accepted_answer && index > 2) {
      return index;
    }
    index++;
  }
  return index;
};

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default HomepageDiscuss;
