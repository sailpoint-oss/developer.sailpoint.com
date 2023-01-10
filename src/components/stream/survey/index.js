import React, { useEffect } from "react";
import { Widget } from "@typeform/embed-react";
import styles from "./styles.module.css";
import Modal from "react-modal";
export default function Survey({ id, stage, socket }) {
  const [surveyModalIsOpen, setSurveyIsOpen] = React.useState(false);
  useEffect(() => {
    socket.on("survey", (data) => {
      console.log(data);
      console.log(stage.stage);
      if (stage.stage === data) {
        setSurveyIsOpen(true);
      }
    });

    return () => {
      socket.off("survey");
    };
  }, [stage]);

  function openSurveyModal() {
    setSurveyIsOpen(true);
  }

  function closeSurveyModal() {
    setSurveyIsOpen(false);
  }

  return (
    <div>
      <button
        className="cursor-pointer border-[color:var(--ifm-color-primary)] md:grow border-2 hover:bg-[color:var(--ifm-color-primary)] hover:text-white text-[color:var(--ifm-color-primary)] text-center font-bold py-2 px-4 rounded"
        onClick={openSurveyModal}
      >
        Survey
      </button>
      <Modal
        isOpen={surveyModalIsOpen}
        onRequestClose={closeSurveyModal}
        className={styles.modal}
        contentLabel="Survey"
      >
        <div className="md:w-[50vw] md:h-[50vh] w-[95vw] h-[80vh] overflow-hidden">
          <Widget className="h-full w-full p-8" id={id}>
            Join the Waitlist
          </Widget>
          <button className={styles.modalButton} onClick={closeSurveyModal}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
