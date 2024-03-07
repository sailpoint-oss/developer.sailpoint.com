import React from 'react';
import styles from './styles.module.css';
import MarketplaceSidebarButton from './VideoSidebarButton';
import {getVideoPosts} from '../../../services/DiscourseService';

export default function MarketplaceSidebar({filterCallback}) {
  const [tagProductData, setTagProductData] = React.useState();
  const [filterTags, setFilterTags] = React.useState(true);

  const getTagData = async () => {
    const uniqueTags = new Set();
    const data = await getVideoPosts();
    //  const data = await topicData;
    const resultset = [];
    if (data.topic_list) {
      for (const topic of data.topic_list.topics) {
        if (topic.tags.length > 0) {
          topic.tags.forEach((tag) => {
            uniqueTags.add(tag);
          });
        }
      }
    }
    setTagProductData(Array.from(uniqueTags));
  };

  function displayText(text) {
    if (text === 'identity-security-cloud') {
      return 'Identity Security Cloud';
    }
    if (text === 'access-intelligence-center') {
      return 'Access Intelligence Center';
    }
    if (text === 'developer-days-2023-iiq') {
      return 'Developer Days 2023 iiq';
    }
  }

  React.useEffect(() => {
    getTagData();
  }, []);

  const filterText = filterTags ? 'See All Tags' : 'See Less Tags';

  if (tagProductData) {
    return (
      <div className={styles.sidebar}>
        {/* <div className={styles.tagHeader}>Video Search</div>
        <div className={styles.tagContainer}>
          <input type="text" id="search" placeholder="Search for Video" />
        </div> */}
        <div className={styles.tagHeader}>Video Tags</div>
        <div className={styles.tagContainer}>
          {tagProductData.map(function (a, index) {
            return (
              <MarketplaceSidebarButton
                key={a}
                text={displayText(a)}
                id={a}
                filterCallback={filterCallback}></MarketplaceSidebarButton>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
