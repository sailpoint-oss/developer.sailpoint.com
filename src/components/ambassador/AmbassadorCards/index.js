import React from 'react';
import styles from './styles.module.css';
import AmbassadorCard from '../AmbassadorCard';
import BounceLoader from 'react-spinners/BounceLoader';
import {discourseBaseURL, developerWebsiteDomain} from '../../../util/util.ts';

import {getAmbassadors, getAmbassadorDetails} from '../../../services/DiscourseService';
export default function AmbassadorCards({
  expert
  }) {
  const [cardData, setCardData] = React.useState();
  const [loadingCards, setLoadingCards] = React.useState(true);

  const getPosts = async () => {
    let data = await getAmbassadors(expert, 1, 0);
    const resultset = []

    if (data.meta) {
      let count = 0
      while (count < data.meta.total) {
        data = await getAmbassadors(expert, 50, count);
        count += 50
        if (data.members) {
          const memberDetails = await getAmbassadorDetails(data.members.map(item => item.id))
          for (const member of data.members) {
              const memberDetail = memberDetails.users.filter(item => item.id === member.id)[0]
              if (member.avatar_template.includes("developer.sailpoint.com") && memberDetail.bio_excerpt && memberDetail.bio_excerpt.length > 150) {
                resultset.push(await getMemberList(member, memberDetail))
              }          
          }
        }
      }
    } else {
      setCardData(undefined);
      setLoadingCards(false);
      return
    }
    


    resultset.sort((a, b) => a.date - b.date)
    setCardData(resultset);

    setLoadingCards(false);
  };

  
  React.useEffect(() => {
    getPosts();
    setCardData(undefined);
    setLoadingCards(true);
  }, []);

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

async function getMemberList(member, details) {
  
  return {
    name: member.name,
    creatorImage: getavatarURL(member.avatar_template),
    title: member.title,
    bio: details.bio_excerpt,
    member_since: new Date(member.added_at).toLocaleString('default', {month: 'long'}) + ' ' + new Date(member.added_at).toISOString().slice(0, 4),
    badge_count: details.badge_count,
    answers: details.accepted_answers,
    location: details.location,
    website: details.website_name,
    link:
    discourseBaseURL() + 'u/' +
    member.username +
    '/summary',
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
  if (excerpt.length > 150) {
    return excerpt.slice(0, 150) + "..."
  } else {
    return excerpt.replace("&hellip;", "")
  }
}

