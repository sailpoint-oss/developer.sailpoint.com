import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';

export default function AgendaContent({
  agenda = {
    day1: [],
    day2: [],
    day3: [],
  },
  speakers = [],
  loading = true,
}) {
  const [filterSelection, setFilterSelection] = React.useState('IDN');

  const dates = {
    day1: new Date('2023-03-07').toLocaleDateString([], {
      dateStyle: 'full',
    }),
    day2: new Date('2023-03-08').toLocaleDateString([], {
      dateStyle: 'full',
    }),
    day3: new Date('2023-03-09').toLocaleDateString([], {
      dateStyle: 'full',
    }),
  };

  function formatSpeaker(id) {
    return speakers?.filter((spkr) => spkr?.id === id)[0];
  }

  function diff_minutes(dt2, dt1) {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
  }

  const sessionFilter = (obj) => {
    if (obj?.hidden === true) return false;
    return obj?.stage === filterSelection;
  };

  const iiqSelectedClass =
    filterSelection === 'IIQ' ? styles.stageButtonActive : '';
  const idnSelectedClass =
    filterSelection === 'IDN' ? styles.stageButtonActive : '';

  return (
    <>
      <div className="flex flex-row gap-2 justify-center">
        <button
          className={`${
            styles.stageButton
          } rounded hover:scale-[.90] border-2 px-2 ${
            filterSelection === 'IDN'
              ? 'border-[#cc27b0] bg-[#cc27b0] text-white'
              : 'border-slate-600'
          }`}
          onClick={() => setFilterSelection('IDN')}>
          IdentityNow
        </button>
        <button
          className={`${
            styles.stageButton
          } rounded hover:scale-[.90] border-2 px-2 ${
            filterSelection === 'IIQ'
              ? 'border-[#cc27b0] bg-[#cc27b0] text-white'
              : 'border-slate-600 !bg-none'
          }`}
          onClick={() => setFilterSelection('IIQ')}>
          IdentityIQ
        </button>
      </div>

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
            const day = label?.replace(' ', '')?.toLowerCase();
            const sessions = agenda[day]?.filter(sessionFilter);

            if (sessions?.length > 0)
              return (
                <div key={day} className="p-2 flex flex-col">
                  <div className="flex flex-row justify-center gap-4">
                    <div className="hidden xl:inline w-[104px]"></div>
                    <p className="xl:!w-[834px] text-xl font-extrabold">
                      {label} - {dates[day]}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    {sessions.map((session) => {
                      return (
                        <>
                          <div className="flex flex-row gap-4 justify-center">
                            <div className="hidden lg:flex flex-col justify-center">
                              <p className="w-[105px] whitespace-nowrap">
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
                              key={session?.title}
                              className={`flex flex-col border-l-8 grow md:grow-0 text-white rounded-lg p-4 md:!w-[834px] hover:scale-[1.04] transform-gpu transition-all border-[#54c0e8] bg-[#0033a1]`}>
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
                                        const speaker = formatSpeaker(spkr);
                                        return (
                                          <div
                                            key={spkr}
                                            className={`flex flex-row gap-2 ${
                                              filterSelection === 'IIQ'
                                                ? 'text-slate-300/50'
                                                : 'text-slate-300/50'
                                            }`}>
                                            {/* <img
                                        className="w-16 h-16 rounded-full"
                                        src={speaker?.image}
                                      /> */}

                                            <p className="my-auto text-xl">
                                              {speaker?.name}
                                              {speaker?.title &&
                                                ` - ${speaker.title}`}
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
    </>
  );
}
