import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import AmbassadorCard from '../AmbassadorCard';
import NewtonsCradle from '../../newtonsCradle';
import { discourseBaseURL, developerWebsiteDomain } from '../../../util/util';

import {
  getAmbassadors,
  getAmbassadorDetails,
  getAmbassadorPoints,
} from '../../../services/DiscourseService';

// Define types for the component props
interface AmbassadorCardsProps {
  expert: boolean;
}

// Define types for an ambassador member
interface AmbassadorMember {
  id: number;
  name: string;
  avatar_template: string;
  title?: string;
  added_at: string;
  username: string;
}

// Define types for detailed ambassador data
interface AmbassadorDetails {
  users: {
    id: number;
    bio_excerpt: string;
    badge_count: number;
    accepted_answers: number;
    location?: string;
    website_name?: string;
  }[];
}

// Define types for ambassador points
interface AmbassadorPoints {
  users: {
    id: number;
    total_score: number;
  }[];
}

// Define types for transformed member data
interface AmbassadorData {
  name: string;
  creatorImage: string;
  title?: string;
  bio: string;
  member_since: string;
  badge_count: number;
  answers: number;
  location?: string;
  website?: string;
  link: string;
  points?: number;
}

const AmbassadorCards: React.FC<AmbassadorCardsProps> = ({ expert }) => {
  const [cardData, setCardData] = useState<AmbassadorData[] | undefined>();
  const [loadingCards, setLoadingCards] = useState<boolean>(true);

  const getPosts = async () => {
    let data = await getAmbassadors(expert, 1, 0);
    let pointsData: AmbassadorPoints = await getAmbassadorPoints();
    const resultset: AmbassadorData[] = [];

    if (data.meta) {
      let count = 0;
      while (count < data.meta.total) {
        data = await getAmbassadors(expert, 50, count);
        count += 50;

        if (data.members) {
          const memberDetails: AmbassadorDetails = await getAmbassadorDetails(
            data.members.map((item: AmbassadorMember) => item.id)
          );

          for (const member of data.members) {
            const memberDetail = memberDetails.users.find(
              (item) => item.id === member.id
            );

            if (
              member.avatar_template.includes('developer.sailpoint.com') &&
              memberDetail?.bio_excerpt &&
              memberDetail.bio_excerpt.length > 150
            ) {
              const transformedMember = await getMemberList(member, memberDetail);
              resultset.push(transformedMember);
            }

            for (const points of pointsData.users) {
              if (points.id === member.id && resultset.length > 0) {
                resultset[resultset.length - 1].points = points.total_score;
              }
            }
          }
        }
      }
    } else {
      setCardData(undefined);
      setLoadingCards(false);
      return;
    }

    // Sort ambassadors by points in descending order
    resultset.sort((a, b) => (b.points ?? 0) - (a.points ?? 0));
    setCardData(resultset);
    setLoadingCards(false);
  };

  useEffect(() => {
    getPosts();
    setCardData(undefined);
    setLoadingCards(true);
  }, []);

  if (cardData) {
    return (
      <div className={styles.center}>
        <div className={styles.gridContainer}>
          {cardData.map((a) => (
            <AmbassadorCard key={a.link} data={a} />
          ))}
        </div>
      </div>
    );
  } else if (loadingCards) {
    return (
      <div className={styles.spinnerCenter}>
        <NewtonsCradle />
      </div>
    );
  } else {
    return (
      <div className={styles.noFound}>
        No Ambassadors Found with the Given Search Criteria
      </div>
    );
  }
};

async function getMemberList(
  member: AmbassadorMember,
  details: AmbassadorDetails['users'][0]
): Promise<AmbassadorData> {
  return {
    name: member.name,
    creatorImage: getAvatarURL(member.avatar_template),
    title: member.title,
    bio: details.bio_excerpt,
    member_since:
      new Date(member.added_at).toLocaleString('default', { month: 'long' }) +
      ' ' +
      new Date(member.added_at).getFullYear().toString(),
    badge_count: details.badge_count,
    answers: details.accepted_answers,
    location: details.location,
    website: details.website_name,
    link: `${discourseBaseURL()}u/${member.username}/summary`,
  };
}

function getAvatarURL(avatar: string): string {
  if (avatar.includes(developerWebsiteDomain())) {
    return `https://${developerWebsiteDomain()}${avatar.replace('{size}', '120')}`;
  } else {
    return avatar.replace('{size}', '120');
  }
}

export default AmbassadorCards;
