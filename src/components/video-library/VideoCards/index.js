import React from 'react';
import styles from './styles.module.css';
import VideoCard from '../VideoCard';
import {
  videoBaseURL,
  discourseBaseURL,
  developerWebsiteDomain,
} from '../../../util/util';
import NewtonsCradle from '../../newtonsCradle';
import {getVideoPosts} from '../../../services/DiscourseService';

export default function VideoCards({filterCallback, limit, featured}) {
  const [cardData, setCardData] = React.useState();
  const [loadingCards, setLoadingCards] = React.useState(true);

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
    let tags = featured ? ['featured'] : filterCallback.tags;

    const data = await getVideoPosts(tags ? tags : '');

    const resultset = [];
    if (data.topic_list) {
      for (const topic of data.topic_list.topics) {
        if (topic.tags.length > 0) {
          let {videoUrl, description} = parseVideoDetails(topic.excerpt);
          let thumbnail = videoUrl.replace('.html', '.jpg');
          let avatar = '';
          let username = '';
          let ogPoster = '';
          for (const poster of topic.posters) {
            if (poster.description.includes('Original Poster')) {
              ogPoster = poster;
              break;
            }
          }

          for (const user of data.users) {
            if (user.id === ogPoster.user_id) {
              username = user.name;
              avatar = getavatarURL(user.avatar_template);
              break;
            }
          }

          if (!description) {
            thumbnail = topic.image_url;
          }

          if (featured || (!featured && !topic.tags.includes('featured'))) {
            resultset.push({
              key: topic.id,
              title: shortenTitle(topic.title),
              tags: topic.tags,
              body: description | topic.excerpt,
              thumbnail: thumbnail,
              avatar: avatar,
              username: username,
              url: buildTopicUrl(topic.slug, topic.id),
            });
          }
        }
      }
    } else {
      setCardData(undefined);
    }
    if (limit) {
      setCardData(resultset.slice(0, limit));
    } else {
      setCardData(resultset);
    }
    setLoadingCards(false);
  };

  React.useEffect(() => {
    getVideoTopics();
    setCardData(undefined);
    setLoadingCards(true);
  }, [filterCallback]);

  return (
    <div className={featured ? null : styles.center}>
      {loadingCards ? (
        // Show loading icon when data is still loading
        <div
          className={
            featured ? styles.featuredSpinnerCenter : styles.spinnerCenter
          }>
          <NewtonsCradle />
        </div>
      ) : cardData && cardData.length > 0 ? (
        <div
          className={
            featured ? styles.featuredGridContainer : styles.gridContainer
          }>
          {cardData.map(function (a, index) {
            return (
              <VideoCard
                featured={featured}
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
            <a href="https://platform.sailpoint.com/t/about-the-sailpoint-developer-community-colab/11230">
              getting started guide
            </a>
            , and consider being the first to contribute this integration!
          </div>
        </div>
      )}
    </div>
  );
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
