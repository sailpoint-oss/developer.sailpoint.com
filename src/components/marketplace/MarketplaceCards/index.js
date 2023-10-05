import React from 'react';
import styles from './styles.module.css';
import MarketplaceCard from '../MarketplaceCard';
import Modal from 'react-modal';
import useBaseUrl from '@docusaurus/useBaseUrl';
import BounceLoader from 'react-spinners/BounceLoader';
import {discourseBaseURL, developerWebsiteDomain} from '../../../util/util';

import {
  getMarketplacePosts,
  getMarketplaceTopic,
  getMarketplaceTopicRaw,
} from '../../../services/DiscourseService';
import MarketplaceCardDetail from '../MarketplaceCardDetail';
export default function MarketplaceCards({filterCallback}) {
  const [cardData, setCardData] = React.useState();
  const [detailsOpen, setDetailsOpen] = React.useState(false);
  const [details, setDetails] = React.useState('');
  const [loadingCards, setLoadingCards] = React.useState(true);


  const handleCloseModal = () => {
    setDetailsOpen(false);
  }

  const getPosts = async () => {
    const data = await getMarketplacePosts(filterCallback.tags.join('+'), filterCallback.category);
    console.log(data)
    const resultset = [];
    if (data.topic_list) {
      for (const topic of data.topic_list.topics) {
        if (topic.tags.length > 0) {
          let poster = {}
          for (let topicUser of topic.posters) {
            if (topicUser.description.includes("Original Poster")) {
              for (let user of data.users) {
                if (user.id === topicUser.user_id) {
                  poster = user
                }
              }
            }
          }

          resultset.push(await getPostList(topic, poster));
        }
      }
      setCardData(resultset);
    } else {
      setCardData(undefined);
    }
    setLoadingCards(false);
  };

  const getDetails = async (data) => {
    const raw = await getMarketplaceTopicRaw(data.id);
    setDetails({data: data, raw: raw});
  };

  // callback that gets called when clicking on a card
  const openDialog = (data) => {
    setDetails({data: undefined, raw: undefined});
    getDetails(data);
    setDetailsOpen(true);
  };

  React.useEffect(() => {}, [detailsOpen, details]);

  Modal.setAppElement('#__docusaurus');
  React.useEffect(() => {
    getPosts();
    setCardData(undefined);
    setLoadingCards(true);
  }, [filterCallback]);


  const xImage = useBaseUrl('/icons/circle-xmark-regular.svg')

  if (cardData) {
    return (
      <div className={styles.center}>
        <div className={styles.gridContainer}>
          {cardData.map(function (a, index) {
            return (
              <MarketplaceCard
                post={a}
                key={index + a.link}
                openDialogFunc={openDialog}></MarketplaceCard>
            );
          })}
        </div>
        <Modal
          isOpen={detailsOpen}
          className={styles.modal}
          onRequestClose={handleCloseModal}
          contentLabel="Details">
          <div>
            <div>
              <MarketplaceCardDetail
                details={details.data}
                rawPost={details.raw}></MarketplaceCardDetail>
            </div>
            <img
              className={styles.cardExit}
              src={xImage}
              onClick={async () => {
                setDetailsOpen(false);
              }}></img>
          </div>
        </Modal>
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
        No Marketplace Item Found with the Given Search Criteria
      </div>
    );
  }
}

async function getPostList(topic, user) {
  return {
    id: topic.id,
    name: user.name,
    excerpt: styleExcerpt(topic.excerpt),
    creatorImage: getavatarURL(user.avatar_template),
    tags: topic.tags,
    image: topic.image_url,
    link:
    discourseBaseURL() + 'discuss/t/' +
      topic.slug +
      '/' +
      topic.id,
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
    return "https://" + developerWebsiteDomain() + avatar.replace("{size}", "120")
  } else {
    return avatar.replace("{size}", "120")
  }
}

function styleExcerpt(excerpt) {
  if (excerpt) {
    // remove any strings that have colons between them
    excerpt = excerpt.replace(/:[^:]*:/g, '');
    // get text between "summary" and "Repository Link"
    const match = excerpt.match(/Summary([\s\S]*?)Repository Link/)
    if (match) {
      excerpt = match[1].trim()
    }
    if (excerpt.length > 150) {
      return excerpt.slice(0, 100) + '...';
    } else {
      return excerpt.replace('&hellip;', '');
    }
  } else {
    return '';
  }
}
