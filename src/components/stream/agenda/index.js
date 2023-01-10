import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Modal from "react-modal";
import { addDarkToFileName } from "../../../util/util";
import ThemedImage from "@theme/ThemedImage";
import { getAgenda } from "../../../services/StreamService";
export default function Agenda({ title, image, description }) {
  const [agendaModalIsOpen, setAgendaIsOpen] = React.useState(false);
  const [agenda, setAgenda] = React.useState({ day1: [], day2: [] });

  function openAgendaModal() {
    setAgendaIsOpen(true);
  }

  function closeAgendaModal() {
    setAgendaIsOpen(false);
  }

  const getAgendas = async () => {
    const data = await getAgenda();
    setAgenda(data);
  };
  React.useEffect(() => {
    getAgendas();
  }, []);

  let day1 = agenda?.day1?.map((item, index) => {
    return (
      <div>
        <li className={styles.agendaQuestion} key={`${index}-question`}>
          {item?.topic}
        </li>
        <div className={styles.agendaAnswer} key={`${index}-answer`}>
          {new Date(item?.startTime).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }) +
            " - " +
            new Date(item?.endTime).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
        </div>
      </div>
    );
  });
  let day2 = agenda?.day2?.map((item, index) => {
    return (
      <div>
        <li className={styles.agendaQuestion} key={`${index}-question`}>
          {item?.topic}
        </li>
        <div className={styles.agendaAnswer} key={`${index}-answer`}>
          {new Date(item?.startTime).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }) +
            " - " +
            new Date(item?.endTime).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
        </div>
      </div>
    );
  });
  let day3 = agenda?.day3?.map((item, index) => {
    return (
      <div>
        <li className={styles.agendaQuestion} key={`${index}-question`}>
          {item?.topic}
        </li>
        <div className={styles.agendaAnswer} key={`${index}-answer`}>
          {new Date(item?.startTime).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }) +
            " - " +
            new Date(item?.endTime).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
        </div>
      </div>
    );
  });

  return (
    <div>
      <button
        className="cursor-pointer border-[color:var(--ifm-color-primary)] md:grow border-2 hover:bg-[color:var(--ifm-color-primary)] hover:text-white text-[color:var(--ifm-color-primary)] text-center font-bold py-2 px-4 rounded"
        onClick={openAgendaModal}
      >
        Agenda
      </button>
      <Modal
        isOpen={agendaModalIsOpen}
        onRequestClose={closeAgendaModal}
        className={styles.modal}
        contentLabel="Agenda"
      >
        <div className="">
          <div className={styles.gettingStartedText}>
            <ThemedImage
              className={styles.gettingStartedCardIcon}
              sources={{
                light: useBaseUrl(image),
                dark: useBaseUrl(addDarkToFileName(image)),
              }}
            ></ThemedImage>
            <div className={styles.gettingStartedOne}>{title}</div>
            <div
              className={styles.gettingStartedThree}
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </div>
          <div className="md:h-[50vh] w-full h-[40vh] overflow-auto p-4 gap-2 flex flex-col">
            <div className={styles.dayHeader}>Day 1</div>
            <ul className={styles.dayContent}>{day1}</ul>
            <div className={styles.dayHeader}>Day 2</div>
            <ul className={styles.dayContent}>{day2}</ul>
            <div className={styles.dayHeader}>Day 3</div>
            <ul className={styles.dayContent}>{day3}</ul>
          </div>
        </div>
        <div className="flex flex-row justify-end">
          <button className={styles.modalButton} onClick={closeAgendaModal}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
