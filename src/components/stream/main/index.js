import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import WidgetBot from '@widgetbot/react-embed'
import Modal from 'react-modal';
import Room from "../room";
import FAQ from "../faq";
import Agenda from "../agenda"
import Speakers from "../speakers";
import { useState, useEffect } from 'react';
import io from 'socket.io-client';


const socket = io("http://localhost:4202");

export default function Main() {
  const [faqModalIsOpen, setFaqIsOpen] = React.useState(false);
  const [agendaModalIsOpen, setAgendaIsOpen] = React.useState(false);
  const [speakersModalIsOpen, setSpeakerIsOpen] = React.useState(false);
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

  function openFaqModal() {
    setFaqIsOpen(true);
  }

  function closeFaqModal() {
    setFaqIsOpen(false);
  }

  function openAgendaModal() {
    setAgendaIsOpen(true);
  }

  function closeAgendaModal() {
    setAgendaIsOpen(false);
  }

  function openSpeakersModal() {
    setSpeakerIsOpen(true);
  }

  function closeSpeakersModal() {
    setSpeakerIsOpen(false);
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
              <div className={styles.button} onClick={openAgendaModal}>
                Agenda
              </div>
            </div>
            <div className={styles.buttonsContent}>
              <div className={styles.button} onClick={openSpeakersModal}>
                Speakers
              </div>
            </div>
            <div className={styles.buttonsContent}>
              <div className={styles.button} onClick={openFaqModal}>
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
        isOpen={faqModalIsOpen}
        onRequestClose={closeFaqModal}
        className={styles.modal}
        contentLabel="FAQ"
      >
        <FAQ
          description={
            "if you stil can't find what you are looking for, reach out to us on our discussion board"
          }
          title={"Frequently Asked Questions"}
          image={"/homepage/discuss.png"}
        ></FAQ>
        <button className={styles.modalButton} onClick={closeFaqModal}>
          Close
        </button>
      </Modal>

      <Modal
        isOpen={agendaModalIsOpen}
        onRequestClose={closeAgendaModal}
        className={styles.modal}
        contentLabel="Agenda"
      >
        <Agenda
          description={
            "The agenda for the 3 conference days are below. If you have any questions about the agenda, reach out via the discussion forum."
          }
          title={"Agenda"}
          image={"/homepage/team.png"}
        ></Agenda>
        <button className={styles.modalButton} onClick={closeAgendaModal}>
          Close
        </button>
      </Modal>


      <Modal
        isOpen={speakersModalIsOpen}
        onRequestClose={closeSpeakersModal}
        className={styles.modal}
        contentLabel="Speakers"
      >
        <Speakers
          description={
            "Here are the awesome speakers we have lined up for Developer Days 2022"
          }
          title={"Speakers"}
          image={"/homepage/person-head.png"}
        ></Speakers>
        <button className={styles.modalButton} onClick={closeSpeakersModal}>
          Close
        </button>
      </Modal>
    </div>
  );
}

