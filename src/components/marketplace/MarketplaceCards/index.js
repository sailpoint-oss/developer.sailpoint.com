import React from 'react';
import styles from './styles.module.css';
import MarketplaceCard from '../MarketplaceCard';
import Modal from 'react-modal';
import useBaseUrl from '@docusaurus/useBaseUrl';
import BounceLoader from "react-spinners/BounceLoader";


import {getMarketplacePosts, getMarketplaceTopic, getMarketplaceTopicRaw} from '../../../services/DiscourseService';
import MarketplaceCardDetail from '../MarketplaceCardDetail';
export default function BlogCards({
  filterCallback
  }) {
  const [cardData, setCardData] = React.useState();
  const [detailsOpen, setDetailsOpen] = React.useState(false);
  const [details, setDetails] = React.useState("");
  const [loadingCards, setLoadingCards] = React.useState(true);

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
    setLoadingCards(false)
  };

  const openDialog = (data) => {
    setDetails(data);
    setDetailsOpen(true);
  }
  Modal.setAppElement('#__docusaurus');
  React.useEffect(() => {
    getPosts();
    setCardData(undefined);
    setLoadingCards(true);
  }, [filterCallback]);

  if (cardData) {
    return (
      <div className={styles.center}>
        <div className={styles.gridContainer}>
          {cardData.map(function(a, index){
            return <MarketplaceCard 
            post={a}
            id={index + a.link}
            openDialogFunc={openDialog}
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
        <img className={styles.cardExit} src={useBaseUrl('/icons/circle-xmark-regular.svg')} 
        onClick={async () => {
          setDetailsOpen(false);
        }}
        ></img>

      </Modal>


      </div>
    );
  } else if (loadingCards) {
    return   <BounceLoader
              className={styles.spinnerCenter}
              color={"#0033a1"}
              loading={true}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
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
    id: topic.id,
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
    // remove any strings that have colons between them
    excerpt = excerpt.replace(/:[^:]*:/g,"")
    if (excerpt.length > 150) {
      return excerpt.slice(0, 150) + "..."
    } else {
      return excerpt.replace("&hellip;", "")
    }
  } else {
    return ""
  }

}

