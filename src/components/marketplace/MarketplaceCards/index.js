import React from 'react';
import styles from './styles.module.css';
import MarketplaceCard from '../MarketplaceCard';
import Modal from 'react-modal';

import {getMarketplacePosts, getMarketplaceTopic, getMarketplaceTopicRaw} from '../../../services/DiscourseService';
import MarketplaceCardDetail from '../MarketplaceCardDetail';
export default function BlogCards({
  filterCallback
  }) {
  const [cardData, setCardData] = React.useState();
  const [detailsOpen, setDetailsOpen] = React.useState(false);
  const [details, setDetails] = React.useState("");

  const getPosts = async () => {
    const data = await getMarketplacePosts(filterCallback.join(','));
    const resultset = []
    if (data.topics) {
      for (const topic of data.topics) {
        resultset.push(await getPostList(topic))
      }
      setCardData(resultset);
    } else {
      setCardData(undefined);
    }
    
  };

  const openDialog = (data) => {
    setDetails(data);
    setDetailsOpen(true);
  }
  Modal.setAppElement('#__docusaurus');
  React.useEffect(() => {
    getPosts();
  }, [filterCallback]);

  if (cardData) {
    return (
      <div className={styles.center}>
        <div className={styles.gridContainer}>
          {cardData.map(function(a, index){
            return <MarketplaceCard 
            key={a.link}
            id={index + a.link}
            excerpt={a.excerpt}
            name={a.name}
            tags={a.tags}
            link={a.link}
            image={a.image}
            title={a.title}
            views={a.views}
            replies={a.replies}
            readTime={a.readTime}
            creatorImage={a.creatorImage}
            openDialogFunc={openDialog}
            rawData={a.raw}
            ></MarketplaceCard>
          })}
        </div>
        <Modal
        isOpen={detailsOpen}
        className={styles.modal}
        contentLabel="Details">
        <div>
          <MarketplaceCardDetail details={details}></MarketplaceCardDetail>
        </div>
        <button
          className={styles.modalButton}
          onClick={async () => {
            setDetailsOpen(false);
          }}>
          OK
        </button>
      </Modal>


      </div>
    );
  } else {
    return <div className={styles.noFound}> No Marketplace Item Found with the Given Search Criteria</div>;
  }
}

async function getPostList(topic) {
  console.log(topic)
  const fullTopic = await getMarketplaceTopic(topic.id);
  const fullTopicRaw = await getMarketplaceTopicRaw(topic.id);
  console.log(fullTopic)
  console.log(fullTopicRaw)
  return {
    raw: fullTopicRaw,
    name: fullTopic.details.created_by.name,
    excerpt: styleExcerpt(topic.excerpt),
    creatorImage: getavatarURL(fullTopic.details.created_by.avatar_template),
    tags: topic.tags,
    image: fullTopic.image_url,
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
    readTime: parseInt(fullTopic.word_count/100),
  };
}

function getavatarURL(avatar) {
  return "https://developer.sailpoint.com" + avatar.replace("{size}", "120")
}

function styleExcerpt(excerpt) {
  if (excerpt) {
    if (excerpt.length > 150) {
      return excerpt.slice(0, 150) + "..."
    } else {
      return excerpt.replace("&hellip;", "")
    }
  } else {
    return ""
  }

}

