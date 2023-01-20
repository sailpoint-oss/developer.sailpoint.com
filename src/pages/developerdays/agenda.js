import React, {useEffect, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {getAgenda, getSpeaker} from '../../services/StreamService';
import {flushSync} from 'react-dom';
import AgendaContent from '../../components/agenda/agenda';

export default function Stream() {
  const {siteConfig} = useDocusaurusContext();
  const [agenda, setAgenda] = useState({
    day1: [],
    day2: [],
    day3: [],
  });
  const [speakers, setSpeakers] = useState([]);
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
    const tempSpeakers = await getSpeaker();
    setAgenda(tempAgenda);
    setSpeakers(tempSpeakers);
    console.log(tempAgenda);
    console.log(tempSpeakers);
    setLoading(false);
    console.log('Done Loading');
  }, []);

  return (
    <Layout>
      <main>
        <div className="p-2 lg:px-28 my-24">
          <p className="text-3xl text-center">Agenda</p>
          <AgendaContent
            agenda={agenda}
            speakers={speakers}
            loading={loading}
          />
        </div>
      </main>
    </Layout>
  );
}
