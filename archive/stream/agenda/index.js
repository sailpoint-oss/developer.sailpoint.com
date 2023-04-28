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
  const [loading, setLoading] = useState(true);

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
        className="cursor-pointer border-[color:var(--ifm-color-primary)] md:grow border-2 hover:bg-[color:var(--ifm-color-primary)] hover:text-white text-[color:var(--ifm-color-primary)] border-solid bg-transparent text-center py-2 px-4 rounded"
        onClick={() => setAgendaIsOpen(true)}>
        Agenda
      </button>
      <Modal
        isOpen={agendaModalIsOpen}
        onRequestClose={() => setAgendaIsOpen(false)}
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
          <div className="md:h-[50vh] sm:w-[90vw] h-[45vh] overflow-auto p-4">
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
