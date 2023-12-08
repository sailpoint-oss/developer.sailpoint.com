import React from 'react';
import styles from './styles.module.css';
import VideoCard from '../VideoCard';
import {videoBaseURL, videoThumbnailBaseURL} from '../../../util/util';
import videos from '../../../../static/videos/videos.json';

export default function VideoCards() {
  function getThumbnailURL(uuid) {
    if (uuid) {
      return videoThumbnailBaseURL() + uuid + '.jpg';
    }
  }

  function getVideoUrl(uuid) {
    if (uuid) {
      return videoBaseURL() + uuid;
    }
  }

  return (
    <div className={styles.center}>
      <div className={styles.gridContainer}>
        {videos.map(function (a, index) {
          return (
            <VideoCard
              videoURL={getVideoUrl(a.uuid)}
              thubnail={getThumbnailURL(a.uuid)}
              title={a.title}
              body={a.body}
              tags={a.tags}></VideoCard>
          );
        })}
      </div>
    </div>
  );
}
