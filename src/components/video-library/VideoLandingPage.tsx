import React, {useMemo} from 'react';
import ListingPage from '../shared/ListingPage';
import type {ListingCopy, ListingItem} from '../shared/ListingPage';
import type {VideoSummary} from '../shared/types';
import {VIDEO_CATEGORY_ID} from '../shared/types';
import videoTheme from './videoTheme.module.css';

/**
 * The video landing page at /videos. The discourse-content plugin passes every
 * video from the build as `videos`, newest first. ListingPage adds newer
 * videos from the forum when the page opens.
 */

const COPY: ListingCopy = {
  title: 'Video Library',
  description: 'Educational videos, live streams and conference sessions from the SailPoint developer community.',
  eyebrow: 'Video Library',
  heading: 'Watch how the community builds with SailPoint',
  lead: 'Educational videos from the Developer Relations team, live streams, conference sessions and community members.',
  categoryId: VIDEO_CATEGORY_ID,
  categoryPath: 'content/video-library/127',
  video: true,
  subscribeNoun: {one: 'video', many: 'videos'},
  noun: {one: 'video', many: 'videos'},
  themeClassName: videoTheme.videoTheme,
};

export default function VideoLandingPage({videos}: {videos: VideoSummary[]}): JSX.Element {
  const items = useMemo<ListingItem[]>(() => videos.map((video) => ({...video, video: true})), [videos]);
  return <ListingPage items={items} copy={COPY} />;
}
