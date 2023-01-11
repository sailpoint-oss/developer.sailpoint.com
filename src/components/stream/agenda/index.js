import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Modal from 'react-modal';
import {addDarkToFileName} from '../../../util/util';
import ThemedImage from '@theme/ThemedImage';
import {getAgenda} from '../../../services/StreamService';
export default function Agenda({title, image, description, speakers}) {
  const [agendaModalIsOpen, setAgendaIsOpen] = React.useState(false);
  const [agenda, setAgenda] = React.useState({day1: [], day2: []});

  function openAgendaModal() {
    setAgendaIsOpen(true);
  }

  function closeAgendaModal() {
    setAgendaIsOpen(false);
  }

  const getAgendas = async () => {
    const data = await getAgenda();
    console.log(data);
    setAgenda(data);
  };
  React.useEffect(() => {
    getAgendas();
  }, []);

  let day1 = agenda?.day1?.map((item, index) => {
    return (
      <div
        className={`${styles.dayContent} hover:-translate-y-1 hover:!shadow-2xl grow flex flex-row justify-start gap-2 overflow-hidden h-[139px]`}>
        <div className="flex flex-col justify-center">
          <p className="font-bold text-xl">
            {new Date(item?.startTime).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        </div>
        <div className="grow border-l-4">
          <div
            className={`${styles.agendaAnswer} flex flex-row gap-2`}
            key={`${index}-answer`}>
            <p className="text-lg font-medium">{item?.topic}</p>
          </div>

          <div className="" key={`${index}-question`}>
            <div className="flex flex-row pl-8 pr-16 gap-4 justify-between">
              {item.speakers.map((speakerId, index) => {
                const speaker = speakers.filter(
                  (obj) => obj.id === speakerId,
                )[0];

                return (
                  <div
                    className="flex flex-row gap-2"
                    key={`${item?.topic}-speaker-${index}`}>
                    <img
                      className="w-16 h-16 rounded-full"
                      src={speaker?.image}
                    />
                    <div className="flex flex-col justify-center">
                      <p className="">{speaker?.name}</p>
                      <p className="">{speaker?.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  });
  let day2 = agenda?.day2?.map((item, index) => {
    return (
      <div
        className={`${styles.dayContent} hover:-translate-y-1 hover:!shadow-2xl grow flex flex-row justify-start gap-2 overflow-hidden h-[139px]`}>
        <div className="flex flex-col justify-center">
          <p className="font-bold text-xl">
            {new Date(item?.startTime).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        </div>
        <div className="grow border-l-4">
          <div
            className={`${styles.agendaAnswer} flex flex-row gap-2`}
            key={`${index}-answer`}>
            <p className="text-lg font-medium">{item?.topic}</p>
          </div>

          <li className="" key={`${index}-question`}>
            <div className="flex flex-row pl-8 pr-16 gap-4 justify-between">
              {item.speakers.map((speakerId, index) => {
                const speaker = speakers.filter(
                  (obj) => obj.id === speakerId,
                )[0];

                return (
                  <div
                    className="flex flex-row gap-2"
                    key={`${item?.topic}-speaker-${index}`}>
                    <img
                      className="w-16 h-16 rounded-full"
                      src={speaker?.image}
                    />
                    <div className="flex flex-col justify-center">
                      <p className="">{speaker?.name}</p>
                      <p className="">{speaker?.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </li>
        </div>
      </div>
    );
  });
  let day3 = agenda?.day3?.map((item, index) => {
    return (
      <div
        className={`${styles.dayContent} hover:-translate-y-1 hover:!shadow-2xl grow flex flex-row justify-start gap-2 overflow-hidden h-[139px]`}>
        <div className="flex flex-col justify-center">
          <p className="font-bold text-xl">
            {new Date(item?.startTime).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        </div>
        <div className="grow border-l-4">
          <div
            className={`${styles.agendaAnswer} flex flex-row gap-2`}
            key={`${index}-answer`}>
            <p className="text-lg font-medium">{item?.topic}</p>
          </div>

          <li className="" key={`${index}-question`}>
            <div className="flex flex-row pl-8 pr-16 gap-4 justify-between">
              {item.speakers.map((speakerId, index) => {
                const speaker = speakers.filter(
                  (obj) => obj.id === speakerId,
                )[0];

                return (
                  <div
                    className="flex flex-row gap-2"
                    key={`${item?.topic}-speaker-${index}`}>
                    <img
                      className="w-16 h-16 rounded-full"
                      src={speaker?.image}
                    />
                    <div className="flex flex-col justify-center">
                      <p className="">{speaker?.name}</p>
                      <p className="">{speaker?.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </li>
        </div>
      </div>
    );
  });

  return (
    <div>
      <button
        className="cursor-pointer border-[color:var(--ifm-color-primary)] md:grow border-2 hover:bg-[color:var(--ifm-color-primary)] hover:text-white text-[color:var(--ifm-color-primary)] text-center font-bold py-2 px-4 rounded"
        onClick={openAgendaModal}>
        Agenda
      </button>
      <Modal
        isOpen={agendaModalIsOpen}
        onRequestClose={closeAgendaModal}
        className={styles.modal}
        contentLabel="Agenda">
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
          <div className="md:h-[50vh] w-full h-[40vh] overflow-auto p-4 gap-2 flex flex-col">
            <div className="border-b-4 pb-4">
              <div className={`${styles.dayHeader} py-8`}>Day 1</div>
              <ul className="flex flex-col gap-2">{day1}</ul>
            </div>
            <div className="border-b-4 pb-4">
              <div className={`${styles.dayHeader} py-8`}>Day 2</div>
              <ul className="flex flex-col gap-2">{day2}</ul>
            </div>
            <div className="border-b-4 pb-4">
              <div className={`${styles.dayHeader} py-8`}>Day 3</div>
              <ul className="flex flex-col gap-2">{day3}</ul>
            </div>
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
