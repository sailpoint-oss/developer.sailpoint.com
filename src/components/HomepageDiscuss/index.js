import React from "react";
import styles from "./styles.module.css";
import DiscussCard from "../DiscussCard";

import { getTopPosts } from "../../services/DiscourseService";
export default function HomepageDiscuss() {



  const [ans, setAns] = React.useState();

  const getPosts = async () => {
    const data = await getTopPosts()
    const resultset = [
      getPostList(data, 0),
      getPostList(data, 1),
      getPostList(data, 2),
      getPostList(data, findSolutionPost(data.topic_list.topics))
    ]
    setAns(resultset);
  };

  
  React.useEffect(() => {
    getPosts();
  }, []);

  if (ans) {
    return (
      <div className={styles.center}>
        <div className={styles.gridContainer}>
          <DiscussCard tags={ans[0].tags} link={"/docs/idn_docs/intro"} title={ans[0].title} views={ans[0].views}></DiscussCard>
          <DiscussCard tags={ans[1].tags} link={"/docs/idn_docs/intro"} title={ans[1].title} views={ans[1].views}></DiscussCard>
          <DiscussCard tags={ans[2].tags} link={"/docs/idn_docs/intro"} title={ans[2].title} views={ans[2].views}></DiscussCard>
          <DiscussCard tags={ans[3].tags} link={"/docs/idn_docs/intro"} title={ans[3].title} views={ans[3].views}></DiscussCard>
        </div> 
      </div>
    );
  } else {
    return (
      <div></div>
    )
  }
}

function getPostList(posts, index) {
  return {
          'tags': posts.topic_list.topics[index].tags, 
          'link': 'https://developer.sailpoint.com/discuss/t/' + posts.topic_list.topics[index].slug + '/' + posts.topic_list.topics[index].id, 
          'title': posts.topic_list.topics[index].title, 
          'views': posts.topic_list.topics[index].views
        }
}

function findSolutionPost(posts) {
  let index = 0;
  for (const post of posts) {
    if (post.has_accepted_answer && index > 2) {
      return index;
    }
    index ++;
  }
  return index;
}