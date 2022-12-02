import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import WidgetBot from '@widgetbot/react-embed'
import Modal from 'react-modal';
import Room from "../room";
import FAQ from "../faq";
import { useState, useEffect } from 'react';
import io from 'socket.io-client';


const socket = io("http://localhost:4202");

export default function Main() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let subtitle;


  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastSpeaker, setLastSpeaker] = useState(null);

  
 useEffect(() => {
  console.log("Creating effect");
   socket.on("connect", () => {
    console.log("Socket Connect");
     setIsConnected(true);
   });

   socket.on("disconnect", () => {
     setIsConnected(false);
   });

   socket.on("speaker", (msg) => {
    console.log("recieved message")
    setLastSpeaker(msg);
  })

  return () =>{
    socket.off("connect");
    socket.off("disconnect");
    socket.off("speaker");
  }
 }, []); 
 








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
          <div className={styles.headerText}>{lastSpeaker?.main.topic}</div>
          <div className={styles.timeText}>{lastSpeaker?.main.timeFrame}</div>
          <div className={styles.speakerText}>{lastSpeaker?.main.presenter}</div>
        </div>

        <div className={styles.headerContent}>
          <div className={styles.buttonsContainer}>
            <div className={styles.buttonsContent}>
              <div className={styles.button} onClick={openModal}>
                Agenda
              </div>
            </div>
            <div className={styles.buttonsContent}>
              <div className={styles.button} onClick={openModal}>
                Speakers
              </div>
            </div>
            <div className={styles.buttonsContent}>
              <div className={styles.button} onClick={openModal}>
                FAQ
              </div>
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
      {/* <Room></Room> */}

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
          image={"/homepage/person-head.png"}
        ></FAQ>
        <button className={styles.modalButton} onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
}

