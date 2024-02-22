import React from 'react';
import styles from './styles.module.css';
import TopicCard from '../TopicCard/index.js';
import BounceLoader from 'react-spinners/BounceLoader';
import {discourseBaseURL, developerWebsiteDomain} from '@site/src/util/util';

import {getAllPosts} from '../../../../services/DiscourseService';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {max: 4000, min: 2500},
    items: 7,
    partialVisibilityGutter: 30,
  },
  desktop: {
    breakpoint: {max: 2500, min: 1600},
    items: 5,
    partialVisibilityGutter: 30,
  },
  laptop: {
    breakpoint: {max: 1600, min: 1300},
    items: 4,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {max: 1300, min: 900},
    items: 3,
    partialVisibilityGutter: 30,
  },
  smallTablet: {
    breakpoint: {max: 900, min: 650},
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: {max: 650, min: 0},
    items: 1,
    partialVisibilityGutter: 30,
  },
};

export default function TopicCards({filterCallback}) {
  const [cardData, setCardData] = React.useState();
  const [loadingCards, setLoadingCards] = React.useState(true);

  function createTopicUrl(slug, id) {
    return discourseBaseURL() + '/t/' + slug + '/' + id;
  }

  const getPosts = async () => {
    // let categories = 'announcements';
    let filterCategories = [];
    const resultset = [];

    if (filterCallback.length > 0) {
      for (const filter of filterCallback) {
        filterCategories.push(filter);
      }
    } else {
      filterCategories.push('announcements');
    }

    for (const category of filterCategories) {
      const data = await getAllPosts('', category);

      if (data.topic_list) {
        for (const topic of data.topic_list.topics) {
          if (topic.tags.length > 0 || category.includes('incidents')) {
            resultset.push({
              key: topic.id,
              slug: topic.slug,
              title: topic.title,
              body: topic.excerpt,
              tags: topic.tags,
            });
          }
        }
      } else {
        setCardData(undefined);
      }
    }
    setCardData(resultset);
    setLoadingCards(false);
  };

  React.useEffect(() => {
    getPosts();
    setCardData(undefined);
    setLoadingCards(true);
  }, [filterCallback]);
  if (cardData && cardData.length > 0) {
    return (
      <Carousel showDots={true} partialVisible={false} responsive={responsive}>
        {cardData.map(function (a, index) {
          return (
            <TopicCard
              key={a.key}
              discourseURL={createTopicUrl(a.slug, a.key)}
              title={a.title}
              body={a.body}
              tags={a.tags}></TopicCard>
          );
        })}
      </Carousel>
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
        Hey there, looks like no integrations match your search criteria. Check
        out our{' '}
        <a href="https://developer.sailpoint.com/discuss">
          getting started guide
        </a>
        , and consider being the first to contribute this integration!
      </div>
    );
  }
}
