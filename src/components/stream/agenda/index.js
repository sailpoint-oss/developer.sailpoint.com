import React, {useState, useEffect} from 'react';
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
          <div className="flex flex-row gap-2 justify-center">
            <button
              className={`rounded  p-2  hover:scale-[.90] w-[50px] border-2 ${
                filterSelection === 'IDN'
                  ? 'border-[#cc27b0] bg-[#cc27b0] text-white'
                  : 'border-slate-600'
              }`}
              onClick={() => setFilterSelection('IdentityNow')}>
              IDN
            </button>
            <button
              className={`rounded  p-2  hover:scale-[.90] w-[50px] border-2 ${
                filterSelection === 'IIQ'
                  ? 'border-[#cc27b0] bg-[#cc27b0] text-white'
                  : 'border-slate-600'
              }`}
              onClick={() => setFilterSelection('IdentityIQ')}>
              IIQ
            </button>
          </div>
          <div className="my-2 md:h-[50vh] md:w-[70vw] h-[60vh] overflow-auto p-4 gap-2 flex flex-col">
            {loading && (
              <>
                <div className="flex flex-row justify-center">
                  <p className="text-center">Loading...</p>
                </div>
              </>
            )}
            {!loading && (
              <>
                {['Day 1', 'Day 2', 'Day 3'].map((label) => {
                  const day = label.replace(' ', '').toLowerCase();
                  const sessions = agenda[day]?.filter(sessionFilter);

                  if (sessions.length > 0)
                    return (
                      <div key={day} className="p-2 flex flex-col ">
                        <p className="text-center">
                          {label} - {dates[day]}
                        </p>
                        <div className="flex flex-col gap-2">
                          {sessions.map((session) => {
                            return (
                              <>
                                <div className="flex flex-row gap-4">
                                  <div className="hidden lg:flex flex-col justify-center">
                                    <p className="whitespace-nowrap">
                                      {new Date(
                                        session?.startTime,
                                      ).toLocaleTimeString([], {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        timeZoneName: 'short',
                                      })}
                                    </p>
                                  </div>
                                  <div
                                    key={session.title}
                                    className="flex flex-col bg-[#0033a1] border-l-8 text-white border-[#54c0e8] rounded-lg p-4 grow hover:scale-[1.04] transform-gpu transition-all">
                                    <div className="flex flex-col">
                                      <div className="lg:hidden">
                                        <p className="whitespace-nowrap">
                                          {new Date(
                                            session?.startTime,
                                          ).toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            timeZoneName: 'short',
                                          })}
                                        </p>
                                      </div>
                                      <div className="flex flex-row">
                                        <div className="flex flex-col grow">
                                          <div className="flex flex-row gap-2">
                                            <p className="!m-0 text-2xl">
                                              {session?.topic}
                                            </p>
                                            {/* <p className="!m-0 text-gray-200/50 my-auto">
                                  - {session?.stage}
                                </p> */}
                                          </div>
                                          <div className="flex flex-col">
                                            {session?.speakers?.map((spkr) => {
                                              const speaker =
                                                formatSpeaker(spkr);
                                              return (
                                                <div
                                                  key={spkr}
                                                  className="flex flex-row gap-2 text-slate-300/50">
                                                  {/* <img
                                        className="w-16 h-16 rounded-full"
                                        src={speaker?.image}
                                      /> */}

                                                  <p className="my-auto text-xl">
                                                    {speaker?.name} -{' '}
                                                    {speaker?.title}
                                                  </p>
                                                </div>
                                              );
                                            })}
                                          </div>
                                        </div>
                                        <div className="hidden lg:flex flex-col justify-center font-medium pr-8">
                                          <p className="!m-0 text-center">
                                            {diff_minutes(
                                              new Date(session?.endTime),
                                              new Date(session?.startTime),
                                            )}
                                          </p>
                                          <p className="!m-0">min</p>
                                        </div>
                                      </div>
                                      <div className="lg:hidden">
                                        <p className="!m-0">
                                          {diff_minutes(
                                            new Date(session?.endTime),
                                            new Date(session?.startTime),
                                          )}{' '}
                                          min
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    );
                })}
              </>
            )}
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
