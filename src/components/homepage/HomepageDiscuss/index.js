import React from 'react';
import styles from './styles.module.css';
import DiscussCard from '../DiscussCard';
import {discourseBaseURL, developerWebsiteDomain} from '../../../util/util';

import {getTopPosts} from '../../../services/DiscourseService';
export default function HomepageDiscuss() {
  const [ans, setAns] = React.useState();

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

  React.useEffect(() => {
    getPosts();
  }, []);

  if (ans) {
    return (
      <div className={styles.center}>
        <div className={styles.gridContainer}>
          <DiscussCard
            solution={ans[0].solution}
            liked={ans[0].liked}
            tags={ans[0].tags}
            link={ans[0].link}
            title={ans[0].title}
            views={ans[0].views}></DiscussCard>
          <DiscussCard
            solution={ans[1].solution}
            liked={ans[1].liked}
            tags={ans[1].tags}
            link={ans[1].link}
            title={ans[1].title}
            views={ans[1].views}></DiscussCard>
          <DiscussCard
            solution={ans[2].solution}
            liked={ans[2].liked}
            tags={ans[2].tags}
            link={ans[2].link}
            title={ans[2].title}
            views={ans[2].views}></DiscussCard>
          <DiscussCard
            solution={ans[3].solution}
            liked={ans[3].liked}
            tags={ans[3].tags}
            link={ans[3].link}
            title={ans[3].title}
            views={ans[3].views}></DiscussCard>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function getPostList(posts, index) {
  return {
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
  };
}

function findSolutionPost(posts) {
  let index = 0;
  for (const post of posts) {
    if (post.has_accepted_answer && index > 2) {
      return index;
    }
    index++;
  }
  return index;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
