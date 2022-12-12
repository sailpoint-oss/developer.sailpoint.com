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
  const [lastSpeaker, setLastSpeaker] = useState(
    {
      main: {
          presenter: "JANE DOE, ENGINEERING MANAGER",
          timeFrame: "3:15 - 4:15 PM",
          topic: "Let's talk platform"
      },
      idn: {
          presenter: "JANE DOE, ENGINEERING MANAGER",
          timeFrame: "3:15 - 4:15 PM",
          topic: "Let's talk IDN platform"
      },
      iiq: {
          presenter: "JANE DOE, ENGINEERING MANAGER",
          timeFrame: "3:15 - 4:15 PM",
          topic: "Let's talk IIQ platform"
      }
  }
  );
  const [stage, setStage] = useState('main');


  

//setting socket here
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
    console.log("received message")
    setLastSpeaker(msg);
  })

  return () =>{
    socket.off("connect");
    socket.off("disconnect");
    socket.off("speaker");
  }
 }, []); 
 



 // setting stage here
 function changeToMainStage() {
  setStage('main')
}
function changeToIDNStage() {
  setStage('idn')
}
function changeToIIQStage() {
  setStage('iiq')
}


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
          <div className={styles.headerText}>{lastSpeaker?.[stage].topic}</div>
          <div className={styles.timeText}>{lastSpeaker?.[stage].timeFrame}</div>
          <div className={styles.speakerText}>{lastSpeaker?.[stage].presenter}</div>
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
            <div className={styles.stageButton}  onClick={changeToMainStage}>Main Stage</div>
          </div>
          <div className={styles.stageButtonsContent}>
            <div className={styles.stageButton}  onClick={changeToIDNStage}>IdentityNow</div>
          </div>
          <div className={styles.stageButtonsContent}>
            <div className={styles.stageButton} onClick={changeToIIQStage}>IdentityIQ</div>
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

