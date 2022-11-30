import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import WidgetBot from '@widgetbot/react-embed'
import Modal from 'react-modal';
import Room from "../room";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
export default function Main() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let subtitle;
  Modal.setAppElement('#__docusaurus');

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.headerText}>Let's talk platform</div>
          <div className={styles.timeText}>3:15 - 4:15 PM</div>
          <div className={styles.speakerText}>JANE DOE, ENGINEERING MANAGER</div>
        </div>

        <div className={styles.headerContent}>
          <div className={styles.buttonsContainer}>
            <div className={styles.buttonsContent}>
              <div className={styles.button} onClick={openModal}>Agenda</div>
            </div>
            <div className={styles.buttonsContent}>
              <div className={styles.button} onClick={openModal}>Speakers</div>
            </div>
            <div className={styles.buttonsContent}>
              <div className={styles.button} onClick={openModal}>FAQ</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.stageButtonsContainer}>
          <div className={styles.stageButtonsContent}>
              <div className={styles.stageButton}>Main Stage</div>
          </div>
          <div className={styles.stageButtonsContent}>
            <div className={styles.stageButton}>IdentityNow</div>
          </div>
          <div className={styles.stageButtonsContent}>
            <div className={styles.stageButton}>IdentityIQ</div>
          </div>
        </div>

      </div>
      <Room></Room>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
      </Modal>
    </div>
  );
}

