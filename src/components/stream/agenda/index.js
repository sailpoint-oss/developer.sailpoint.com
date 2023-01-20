import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Modal from 'react-modal';
import {addDarkToFileName} from '../../../util/util';
import ThemedImage from '@theme/ThemedImage';
import {getAgenda} from '../../../services/StreamService';
import AgendaContent from '../../agenda/agenda';
export default function Agenda({title, image, description, speakers}) {
  const [agendaModalIsOpen, setAgendaIsOpen] = React.useState(false);
  const [agenda, setAgenda] = useState({
    day1: [],
    day2: [],
    day3: [],
  });
  const [filterSelection, setFilterSelection] = React.useState('IDN');
  const [loading, setLoading] = useState(true);

  const dates = {
    day1: new Date('2023-03-07').toLocaleDateString([], {dateStyle: 'full'}),
    day2: new Date('2023-03-08').toLocaleDateString([], {dateStyle: 'full'}),
    day3: new Date('2023-03-09').toLocaleDateString([], {dateStyle: 'full'}),
  };

  function formatSpeaker(id) {
    return speakers?.filter((spkr) => spkr.id === id)[0];
  }

  function diff_minutes(dt2, dt1) {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
  }

  const sessionFilter = (obj) => {
    if (obj.hidden === true) return false;
    return obj.stage === filterSelection;
  };

  useEffect(async () => {
    const tempAgenda = await getAgenda();
    setAgenda(tempAgenda);
    console.log(tempAgenda);
    setLoading(false);
    console.log('Done Loading');
  }, []);

  return (
    <div>
      <button
        className="cursor-pointer border-[color:var(--ifm-color-primary)] md:grow border-2 hover:bg-[color:var(--ifm-color-primary)] hover:text-white text-[color:var(--ifm-color-primary)] text-center font-bold py-2 px-4 rounded"
        onClick={() => setAgendaIsOpen(true)}>
        Agenda
      </button>
      <Modal
        isOpen={agendaModalIsOpen}
        onRequestClose={() => setAgendaIsOpen(false)}
        className={styles.modal}
        contentLabel="Agenda">
        <div className="">
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
          <div className="md:h-[50vh] xl:w-[90vw] h-[60vh] overflow-auto p-4">
            <AgendaContent
              speakers={speakers}
              agenda={agenda}
              loading={loading}
            />
          </div>
        </div>
        <div className="flex flex-row justify-end">
          <button
            className={styles.modalButton}
            onClick={() => setAgendaIsOpen(false)}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
