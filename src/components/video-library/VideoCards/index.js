import React from 'react';
import styles from './styles.module.css';
import VideoCard from '../VideoCard';
import {videoBaseURL, videoThumbnailBaseURL} from '../../../util/util';
import Video from '../../Video.js';
import Modal from 'react-modal';

export default function VideoCards() {
  const [videoURL, setVideoURL] = React.useState();
  const [detailsOpen, setDetailsOpen] = React.useState(false);
  const videos = [
    {uuid: 'Jd8waVWCZm3bZcNjJhRF2n', title: 'Test 1', body: 'body 1'},
    {uuid: 'frpStJBTV8xeQaE95wmbHp', title: 'test 2', body: 'body 2'},
    {uuid: '1j49GXFzu8Tr5ZmyLEUxam', title: 'test 3', body: 'body 3'},
    {uuid: 'Sk9EaFTUcwKXRQ4efvsyKF', title: 'test 4', body: 'body 4'},
  ];
  const handleCloseModal = () => {
    setDetailsOpen(false);
  };

  function getThumbnailURL(uuid) {
    if (uuid) {
      return videoThumbnailBaseURL() + uuid + '.jpg';
    }
  }

  function getVideoUrl(uuid) {
    console.log(uuid);
    if (uuid) {
      return videoBaseURL() + uuid + '.html?';
    }
  }

  function openVideo(uuid) {
    setVideoURL(getVideoUrl(a.uuid));
  }

  return (
    <div className={styles.center}>
      <div className={styles.gridContainer}>
        {videos.map(function (a, index) {
          return (
            <VideoCard
              videoUrl={getVideoUrl(a.uuid)}
              thubnail={getThumbnailURL(a.uuid)}
              title={a.title}
              body={a.body}></VideoCard>
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
            <Video source={videoURL} container="vidyard" />
          </div>
        </div>
      </Modal>
    </div>
  );
}
