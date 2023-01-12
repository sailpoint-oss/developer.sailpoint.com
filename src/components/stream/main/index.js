import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import WidgetBot from '@widgetbot/react-embed';
import Modal from 'react-modal';
import Room from '../room';
import FAQ from '../faq';
import Agenda from '../agenda';
import Speakers from '../speakers';
import Survey from '../survey';
import {useState, useEffect} from 'react';
import {getSpeaker} from '../../../services/StreamService';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function Main() {
  let socket;
  const [isConnected, setIsConnected] = useState(false);

  const [streamData, setStreamData] = useState({
    connectionCounts: {total: 12, idn: 2, iiq: 3},
    stages: {
      IDN: {
        stage: 'IDN',
        active: true,
        speaker: 'Philip Ellis',
        startTime: '2023-03-16T19:00:00.000Z',
        endTime: '2023-03-16T19:30:00.000Z',
        topic: 'SaaS Connectivity, Create your first connector',
        typeformId: 'ka0jgXBw',
      },
      IIQ: {
        stage: 'IIQ',
        active: true,
        speaker: 'Colin McKibben',
        startTime: '2023-03-16T13:00:00.000Z',
        endTime: '2023-03-16T19:00:00.000Z',
        topic: 'How to migrate from IIQ to IDN',
        typeformId: 'ka0jgXBw',
      },
    },
    videoSource: {
      IDN: {
        playbackId: '8eovb9oQzltDEG02e7MwE1aBwLj00HBeKm3VbsZbvcWB4',
        env_key: 'j4iije0sv1ih8shgurfp3ldkq',
      },
      IIQ: {
        playbackId: 'DN6LQtQ5fi016Xliw4lurST62ZAmVyDHqdFPisrY00WDI',
        env_key: '6i0s80sskn2ri0661uqi5oesq',
      },
      // backup: { playbackId: "", env_key: "" },
    },
  });
  const [stage, setStage] = useState({
    stage: 'IDN',
  });

  const [speakers, setSpeakers] = React.useState([]);

  const getSpeakers = async () => {
    const data = await getSpeaker();
    console.log('Speaker Data');
    console.log(data);
    setSpeakers(data);
  };

  React.useEffect(() => {
    getSpeakers();
  }, []);

  //setting socket here
  useEffect(() => {
    const io = require('socket.io-client');
    socket = io('https://developer-community-backend.herokuapp.com');
    console.log('Creating effect');
    socket.on('connect', () => {
      console.log('Socket Connect');
      socket.emit('register');
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('stream', (data) => {
      console.log('incoming Data');
      setStreamData(data);
      console.log(data);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('stream');
    };
  }, []);

  function changeToIDNStage() {
    setStage({
      stage: 'IDN',
    });
  }
  function changeToIIQStage() {
    setStage({
      stage: 'IIQ',
    });
  }

  Modal.setAppElement('#__docusaurus');

  const eventSpeakers = streamData?.stages[stage.stage]?.speakers?.map(
    (speakerId, index) => {
      return speakers.filter((obj) => obj.id === speakerId)[0];
    },
  );

  const mainSelectedClass =
    stage.stage === 'main' ? styles.stageButtonActive : '';
  const iiqSelectedClass =
    stage.stage === 'IIQ' ? styles.stageButtonActive : '';
  const idnSelectedClass =
    stage.stage === 'IDN' ? styles.stageButtonActive : '';

  return (
    <div className={styles.main}>
      <div className="px-2 md:px-4 py-6 my-2 flex flex-col md:flex-row justify-between gap-4">
        <div className="">
          <div className={`${styles.headerText} my-auto`}>
            {streamData?.stages[stage.stage]?.topic}
          </div>

          <div className={styles.timeText}>
            {new Date(
              streamData?.stages[stage.stage]?.startTime,
            ).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) +
              ' - ' +
              new Date(
                streamData?.stages[stage.stage]?.endTime,
              ).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
          </div>
          <div className="flex flex-row flex-wrap gap-8">
            {eventSpeakers?.map((spkr) => {
              return (
                <div className="flex flex-row gap-2">
                  <img src={spkr?.image} className="rounded-full w-12 h-12" />
                  <div className="flex flex-col justify-center">
                    <div className={`${styles.speakerText} font-bold text-lg`}>
                      {spkr?.name}
                    </div>
                    <div
                      className={`${styles.speakerText} font-semibold text-base whitespace-nowrap`}>
                      {spkr?.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-1 md:gap-2 w-full justify-center md:justify-between">
            <Agenda
              description={
                'The agenda for the 3 conference days are below. If you have any questions about the agenda, reach out via the discussion forum.'
              }
              title={'Agenda'}
              image={'/homepage/team.png'}
              speakers={speakers}></Agenda>

            <FAQ
              description={
                "if you stil can't find what you are looking for, reach out to us on our discussion board"
              }
              title={'Frequently Asked Questions'}
              image={'/homepage/discuss.png'}></FAQ>

            <Speakers
              description={
                'Here are the awesome speakers we have lined up for Developer Days 2022'
              }
              title={'Speakers'}
              image={'/homepage/person-head.png'}
              speakers={speakers}></Speakers>
            <Survey
              className="w-full"
              id={streamData?.stages[stage.stage]?.typeformId}
              stage={stage}
              socket={socket}></Survey>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center md:justify-start py-1 md:py-0 px-[0.5%] w-full gap-[0.5%]">
        <button
          className={`${styles.stageButton} ${idnSelectedClass} px-4 min-w-[140px]`}
          onClick={changeToIDNStage}>
          <p className="text-lg whitespace-nowrap my-0">IdentityNow</p>
        </button>

        <button
          className={`${styles.stageButton} ${iiqSelectedClass} px-4 min-w-[140px]`}
          onClick={changeToIIQStage}>
          <p className="text-lg text-center whitespace-nowrap my-0">
            IdentityIQ
          </p>
        </button>
      </div>
      <BrowserOnly>
        {() => <Room videoSource={streamData?.stages[stage.stage]}></Room>}
      </BrowserOnly>
    </div>
  );
}
