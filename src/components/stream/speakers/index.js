import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Modal from 'react-modal';
import {addDarkToFileName} from '../../../util/util';
import ThemedImage from '@theme/ThemedImage';
export default function Speakers({title, image, description, speakers}) {
  const [speakersModalIsOpen, setSpeakerIsOpen] = React.useState(false);

  function openSpeakersModal() {
    setSpeakerIsOpen(true);
  }

  function closeSpeakersModal() {
    setSpeakerIsOpen(false);
  }

  const speakerFilter = (obj) => {
    if (obj.name === 'Speaker Coming Soon') return false;
    return true;
  };

  let itemsList = speakers.filter(speakerFilter).map((item, index) => {
    return (
      <a
        target="_blank"
        rel="noreferrer"
        href={item?.link}
        key={`${index}-link`}>
        <div className="card_src-components-homepage-TeamCard-styles-module !h-fit p-4 flex flex-row gap-2">
          {item?.image && (
            <img
              className="!h-16 !w-16 rounded-full"
              src={item?.image}
              key={`${index}-image`}
            />
          )}
          <div className="flex flex-col justify-center">
            <p className="text-xl font-bold !m-0" key={`${index}-name`}>
              {item?.name}
            </p>
            <p className="!m-0" key={`${index}-title`}>
              {item?.title}
            </p>
          </div>
        </div>
      </a>
    );
  });

  return (
    <div>
      <button
        className="cursor-pointer border-[color:var(--ifm-color-primary)] md:grow border-2 hover:bg-[color:var(--ifm-color-primary)] hover:text-white text-[color:var(--ifm-color-primary)] text-center font-bold py-2 px-4 rounded"
        onClick={openSpeakersModal}>
        Speakers
      </button>
      <Modal
        isOpen={speakersModalIsOpen}
        onRequestClose={closeSpeakersModal}
        className={styles.modal}
        contentLabel="Speakers">
        <div className="">
          <div className={styles.gettingStartedText}>
            <ThemedImage
              className={styles.gettingStartedCardIcon}
              sources={{
                light: useBaseUrl(image),
                dark: useBaseUrl(addDarkToFileName(image)),
              }}></ThemedImage>
            <div className={styles.gettingStartedOne}>{title}</div>
            <div
              className={styles.gettingStartedThree}
              dangerouslySetInnerHTML={{__html: description}}></div>
          </div>

          <ul className="md:h-[50vh] w-full h-[40vh] overflow-auto p-4 gap-2 flex flex-col">
            {itemsList}
          </ul>
        </div>
        <div className="flex flex-row justify-end">
          <button className={styles.modalButton} onClick={closeSpeakersModal}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
