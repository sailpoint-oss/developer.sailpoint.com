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
  const [filterSelection, setFilterSelection] = React.useState('');

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

  function processSessions(item, index) {
    return (
      <div
        className={`${styles.dayContent} hover:!shadow-2xl grow flex flex-col md:flex-row justify-start md:gap-2 md:h-[171px] overflow-hidden`}
        key={`day-${item.day}-${index}`}>
        <div className="flex flex-col justify-center">
          <p className="font-bold md:text-xl md:text-center m-0">
            {new Date(item?.startTime).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        </div>
        <div className="grow md:border-l-4">
          <div
            className={`${styles.agendaAnswer} flex flex-row gap-2`}
            key={`${index}-answer`}>
            <p className="text-lg font-medium">{item?.topic}</p>
          </div>

          <div className="" key={`${index}-question`}>
            <div className="flex flex-row flex-wrap md:flex-nowrap pl-4 md:pl-8 md:pr-16 gap-8 justify-start">
              {item.speakers.map((speakerId, index) => {
                const speaker = speakers.filter(
                  (obj) => obj.id === speakerId,
                )[0];

                return (
                  <div
                    className="flex flex-row gap-2"
                    key={`${item?.topic}-speaker-${index}`}>
                    <img
                      className="!w-16 !h-16 rounded-full"
                      src={speaker?.image}
                    />
                    <div className="flex flex-col justify-center">
                      <p className="m-0">{speaker?.name}</p>
                      <p className="m-0 text-xs">{speaker?.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const sessionFilter = (obj) => {
    if (filterSelection === '') return true;
    return obj.stage === filterSelection || obj.allStages === true;
  };

  let day1 = agenda?.day1?.filter(sessionFilter)?.map(processSessions);
  let day2 = agenda?.day2?.filter(sessionFilter)?.map(processSessions);
  let day3 = agenda?.day3?.filter(sessionFilter)?.map(processSessions);

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
        <div className="py-2">
          <div className={`!m-0 flex flex-col justify-center`}>
            <div className="flex flex-row justify-center">
              <ThemedImage
                className={`w-16 h-16`}
                sources={{
                  light: useBaseUrl(image),
                  dark: useBaseUrl(addDarkToFileName(image)),
                }}
              />
            </div>
            <div className={`${styles.gettingStartedOne} text-center`}>
              {title}
            </div>
            <div
              className={`${styles.gettingStartedThree} text-center px-4`}
              dangerouslySetInnerHTML={{__html: description}}></div>
          </div>
          <div className="p-2 md:flex md:flex-row md:justify-end">
            <select
              className="w-full md:w-fit px-4 py-2 bg-slate-200 rounded-xl"
              onChange={(evt) => setFilterSelection(evt.target.value)}>
              <option value={''}>Both</option>
              <option value={'IDN'}>IDN</option>
              <option value={'IIQ'}>IIQ</option>
            </select>
          </div>
          <div className="md:h-[50vh] w-full h-[40vh] overflow-auto p-4 gap-2 flex flex-col">
            <div className="border-b-4 pb-4">
              <div className={`${styles.dayHeader} py-8`}>Day 1</div>
              <div className="flex flex-col gap-2">{day1}</div>
            </div>
            <div className="border-b-4 pb-4">
              <div className={`${styles.dayHeader} py-8`}>Day 2</div>
              <div className="flex flex-col gap-2">{day2}</div>
            </div>
            <div className="border-b-4 pb-4">
              <div className={`${styles.dayHeader} py-8`}>Day 3</div>
              <div className="flex flex-col gap-2">{day3}</div>
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
