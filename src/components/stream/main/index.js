import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import WidgetBot from '@widgetbot/react-embed'
import Modal from 'react-modal';
import Room from "../room";
import FAQ from "../faq";

const customStyles = {
  content: {
    top: '20%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#FFFFFF',
    boxShadow: '2px 3px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px',
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
    //subtitle.style.color = '#f00';
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
        className={styles.modal}
        contentLabel="FAQ"
      >
        <FAQ        
          description={
            "if you stil can't find what you are looking for, reach out to us on our discussion board"
          }
          title={"Frequently Asked Questions"}
          image={"/homepage/person-head.png"} ></FAQ>
        <button className={styles.modalButton} onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

