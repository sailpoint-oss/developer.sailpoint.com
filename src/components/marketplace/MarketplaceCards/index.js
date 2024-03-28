import React from 'react';
import styles from './styles.module.css';
import MarketplaceCard from '../MarketplaceCard';
import Modal from 'react-modal';
import useBaseUrl from '@docusaurus/useBaseUrl';
import NewtonsCradle from '../../newtonsCradle';
import {discourseBaseURL, developerWebsiteDomain} from '../../../util/util';

import {
  getMarketplacePosts,
  getMarketplaceTopic,
  getMarketplaceTopicRaw,
  getUserTitle,
} from '../../../services/DiscourseService';
import MarketplaceCardDetail from '../MarketplaceCardDetail';
export default function MarketplaceCards({filterCallback, limit, multiple}) {
  const [cardData, setCardData] = React.useState();
  const [detailsOpen, setDetailsOpen] = React.useState(false);
  const [details, setDetails] = React.useState('');
  const [loadingCards, setLoadingCards] = React.useState(true);
  const xImage = useBaseUrl('/icons/circle-xmark-regular.svg');

  const handleCloseModal = () => {
    setDetailsOpen(false);
  };

  const getPosts = async () => {
    const data = await getMarketplacePosts(
      filterCallback.tags.join('+'),
      filterCallback.category,
    );

    const resultset = [];
    const titleList = [];
    if (data.topic_list) {
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

                    if (usertitle.group === undefined) {
                      titleList.push({
                        group: user.primary_group_name,
                        title: '',
                      });
                    } else {
                      titleList.push({
                        group: user.primary_group_name,
                        title: usertitle.group.title || '',
                      });
                      user.title = usertitle.group.title;
                    }
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

          resultset.push(await getPostList(topic, poster));
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

  return (
    <div className={styles.center}>
      {loadingCards ? (
        // Show loading icon when data is still loading
        <div className={multiple ? styles.spinnerCenterMultiple : styles.spinnerCenterSingle}>
          <NewtonsCradle />
        </div>
      ) : cardData && cardData.length > 0 ? (
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
      ) : (
        <div>
          <div className={styles.noFound}>
            {' '}
            Hey there, looks like no integrations match your search criteria.
            Check out our{' '}
            <a href="https://developer.sailpoint.com/discuss/t/about-the-sailpoint-developer-community-colab/11230">
              getting started guide
            </a>
            , and consider being the first to contribute this integration!
          </div>
        </div>
      )}
    </div>
  );
}

function shortenTitle(title) {
  if (title.length > 63) {
    return title.substring(0, 62) + '...';
  }
  return title;
}

function shortenDesc(desc) {
  if (desc.length > 93) {
    return desc.substring(0, 93) + '...';
  }
  return desc;
}

async function getPostList(topic, user) {
  return {
    id: topic.id,
    creatorName: user.name,
    excerpt: shortenDesc(styleExcerpt(topic.excerpt)),
    creatorImage: getavatarURL(user.avatar_template),
    creatorTitle: user.title,
    tags: topic.tags,
    image: topic.image_url,
    link: discourseBaseURL() + 't/' + topic.slug + '/' + topic.id,
    title: shortenTitle(topic.title),
    views: topic.views,
    liked: topic.like_count,
    replies: topic.posts_count,
    solution: topic.has_accepted_answer,
    readTime: parseInt(500 / 100),
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
  if (excerpt) {
    // remove any strings that have colons between them
    excerpt = excerpt.replace(/:[^:]*:/g, '');
    // get text between "Description" and "Legal Agreement"
    const match = excerpt.match(/Description([\s\S]*?)Legal Agreement/);
    if (match) {
      excerpt = match[1].trim();
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
