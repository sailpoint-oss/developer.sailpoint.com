import React from 'react';
import styles from './styles.module.css';
import AmbassadorCard from '../AmbassadorCard';
import BounceLoader from 'react-spinners/BounceLoader';

import {getAmbassadors, checkImage} from '../../../services/DiscourseService';
export default function AmbassadorCards({
  filterCallback
  }) {
  const [cardData, setCardData] = React.useState();
  const [loadingCards, setLoadingCards] = React.useState(true);

  const getPosts = async () => {
    const data = await getAmbassadors(filterCallback.join(','));
    const resultset = []
    if (data.members) {
      for (const member of data.members) {
          resultset.push(await getMemberList(member))
      }
      setCardData(resultset);
    } else {
      setCardData(undefined);
    }
    setLoadingCards(false);
  };

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
            return <AmbassadorCard 
            key={a.link}
            data={a}
          ></AmbassadorCard>
          })}
        </div>
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
        No Ambassadors Found with the Given Search Criteria
      </div>
    );
  }
}

async function getMemberList(member) {
  
  return {
    name: member.name,
    creatorImage: getavatarURL(member.avatar_template),
    title: member.title,
    link:
    'https://developer.sailpoint.com/discuss/u/' +
    member.username +
    '/summary',
  };
}

function getavatarURL(avatar) {
  if (avatar.includes("developer.sailpoint.com")) {
    return "https://developer.sailpoint.com" + avatar.replace("{size}", "120")
  } else {
    return avatar.replace("{size}", "120")
  }
  
}

function styleExcerpt(excerpt) {
  if (excerpt.length > 150) {
    return excerpt.slice(0, 150) + "..."
  } else {
    return excerpt.replace("&hellip;", "")
  }
}

