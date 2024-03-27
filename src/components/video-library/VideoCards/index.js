import React from 'react';
import styles from './styles.module.css';
import VideoCard from '../VideoCard';
import {videoBaseURL, discourseBaseURL} from '../../../util/util';
import {newtonsCradle} from 'ldrs';
import {getVideoPosts} from '../../../services/DiscourseService';

export default function VideoCards({filterCallback}) {
  const [cardData, setCardData] = React.useState();
  const [loadingCards, setLoadingCards] = React.useState(true);
  newtonsCradle.register();

  function buildTopicUrl(slug, id) {
    return discourseBaseURL() + `t/${slug}/${id}`;
  }

  function parseVideoDetails(inputStr) {
    // Split the string by the known separator for the description
    const parts = inputStr.split('\n\nDescription\n');
    const videoUrl = parts[0].trim(); // Get the video URL, trimming any whitespace(
    const lastSegment = videoUrl.split('/').pop();
    const page = lastSegment.replace('.html', '');
    const description = parts.length > 1 ? parts[1].trim() : ''; // Get the description if it exists
    return {
      videoUrl,
      description,
      page,
    };
  }

  function shortenTitle(title) {
    if (title.length > 63) {
      return title.substring(0, 62) + '...';
    }
    return title;
  }

  const getVideoTopics = async () => {
    let tags = filterCallback.tags;

    const data = await getVideoPosts(tags ? filterCallback.tags.join('+') : '');
    // const data = await topicData;
    const resultset = [];
    if (data.topic_list) {
      for (const topic of data.topic_list.topics) {
        if (topic.tags.length > 0) {
          let {videoUrl, description} = parseVideoDetails(topic.excerpt);
          let thumbnail = videoUrl.replace('.html', '.jpg');
          let avatar = '';
          let ogPoster = '';
          for (const poster of topic.posters) {
            if (poster.description.includes('Original Poster')) {
              ogPoster = poster;
              break;
            }
          }

          for (const user of data.users) {
            if (user.id === ogPoster.user_id) {
              avatar =
                'https://sea1.discourse-cdn.com/sailpoint' +
                user.avatar_template.replace('{size}', '45');
              break;
            }
          }

          if (description) {
            resultset.push({
              key: topic.id,
              title: shortenTitle(topic.title),
              tags: topic.tags,
              body: description,
              thumbnail: thumbnail,
              avatar: avatar,
              url: buildTopicUrl(topic.slug, topic.id),
            });
          } else {
            resultset.push({
              key: topic.id,
              title: shortenTitle(topic.title),
              tags: topic.tags,
              body: topic.excerpt,
              thumbnail: topic.image_url,
              avatar: avatar,
              url: buildTopicUrl(topic.slug, topic.id),
            });
          }
        }
      }
    } else {
      setCardData(undefined);
    }
    setCardData(resultset);
    setLoadingCards(false);
  };

  React.useEffect(() => {
    getVideoTopics();
    setCardData(undefined);
    setLoadingCards(true);
  }, [filterCallback]);

  return (
    <div className={styles.center}>
      {loadingCards ? (
        // Show loading icon when data is still loading
        <div className={styles.spinnerCenter}>
          <l-newtons-cradle
            size="150"
            speed="1.4"
            color="#0033a1"></l-newtons-cradle>
        </div>
      ) : cardData && cardData.length > 0 ? (
        <div className={styles.gridContainer}>
          {cardData.map(function (a, index) {
            return (
              <VideoCard
                key={a.key}
                videoURL={a.url}
                thumbnail={a.thumbnail}
                title={a.title}
                body={a.body}
                avatar={a.avatar}
                tags={a.tags}></VideoCard>
            );
          })}
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

  // } else if (loadingCards) {
  //   return (
  //     <BounceLoader
  //       className={styles.spinnerCenter}
  //       color={'#0033a1'}
  //       loading={true}
  //       size={150}
  //       aria-label="Loading Spinner"
  //       data-testid="loader"
  //     />
  //   );
  // } else {
  //   return (
  //     <div>
  //       <div className={styles.noFound}>
  //         {' '}
  //         Hey there, looks like no integrations match your search criteria.
  //         Check out our{' '}
  //         <a href="https://developer.sailpoint.com/discuss/t/about-the-sailpoint-developer-community-colab/11230">
  //           getting started guide
  //         </a>
  //         , and consider being the first to contribute this integration!
  //       </div>
  //     </div>
  //   );
  // }
}
