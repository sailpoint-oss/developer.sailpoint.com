import React from 'react';
import styles from './styles.module.css';
import ChangeLogRecord from '../ChangeLogRecord';
import BounceLoader from 'react-spinners/BounceLoader';
import changeset from '../../../../static/data/changeset.json';

export default function ChangeLogRecords({filterCallback}) {
  const [cardData, setCardData] = React.useState();
  const [loadingCards, setLoadingCards] = React.useState(true);

  function filterDataByCategories(
    data,
    versionFilter,
    changeTypeFilter,
    levelFilter,
    startDate,
    endDate,
  ) {
    var filteredResults = [];

    for (var date in data) {
      var changes = data[date];
      var changeDate = new Date (new Date(parseDate(date)).toDateString());
      var start = startDate ? new Date (new Date(startDate).toDateString()) : new Date('1970-01-01');
      var end = endDate ? new Date (new Date(endDate).toDateString()) : new Date();

      if (changeDate < start || changeDate > end) {
        continue;
      }

      for (var i = 0; i < changes.length; i++) {
        var change = changes[i];
        var versionMatch =
          !versionFilter ||
          versionFilter.length === 0 ||
          versionFilter.includes(change.version);
        var changeTypeMatch =
          !changeTypeFilter ||
          changeTypeFilter.length === 0 ||
          changeTypeFilter.includes(change.changeType);
        var levelMatch =
          !levelFilter ||
          levelFilter.length === 0 ||
          (change.attributes && levelFilter.includes(change.attributes.level));

        if (versionMatch && changeTypeMatch && levelMatch) {
          if (!filteredResults[date]) {
            filteredResults[date] = [];
          }
          filteredResults[date].push(change);
        }
      }
    }

    return filteredResults;
  }

  const getChanges = async () => {
    const data = await changeset;
    const resultset = [];
    let versionFilter = [];
    let changeTypeFilter = [];
    let levelFilter = [];
    let startDate = [];
    let endDate = [];

    console.log('filterCallBack: ' + filterCallback);

    if (filterCallback.length > 0) {
      for (var i = 0; i < filterCallback.length; i++) {
        var filter = filterCallback[i];
        var filterType = filter.split('-')[0];
        var filterValue = filter.split('-')[1];
        if (filterType === 'version') {
          versionFilter.push(filterValue);
        } else if (filterType === 'changeType') {
          changeTypeFilter.push(filterValue);
        } else if (filterType === 'level') {
          levelFilter.push(mapLevelToNumber(filterValue));
        } else if (filterType === 'startDate') {
          startDate = filterValue;
        } else if (filterType === 'endDate') {
          endDate = filterValue;
        }
      }
    }

    const filterData = filterDataByCategories(
      data,
      versionFilter,
      changeTypeFilter,
      levelFilter,
      startDate,
      endDate,
    );

    if (filterData) {
      if (typeof filterData === 'object' && filterData !== null) {
        for (const key in filterData) {
          resultset.push(filterData[key]);
        }
      }
      setCardData(resultset);
    } else {
      setCardData(undefined);
    }

    setLoadingCards(false);
  };

  React.useEffect(() => {
    getChanges();
    setCardData(undefined);
    setLoadingCards(true);
  }, [filterCallback]);

  if (cardData && cardData.length > 0) {
    return (
      <div>
        <div className={styles.container}>
          {cardData.map(function (a, dateindex) {
            return <ChangeLogRecord data={a}></ChangeLogRecord>;
          })}
        </div>
      </div>
    );
  } else if (loadingCards) {
    return (
      <div>
        <BounceLoader
          className={styles.spinnerCenter}
          color={'#0033a1'}
          loading={true}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  } else {
    return (
      <div className={styles.noFound}>
        {' '}
        No Blogposts Found with the Given Search Criteria
      </div>
    );
  }

  function parseDate(dateStr) {
    const cleanedDateStr = dateStr.replace(/(\d+)(st|nd|rd|th)/, '$1');
    return new Date(cleanedDateStr);
  }

  function mapLevelToNumber(level) {
    switch (level) {
      case 'info':
        return 1;
      case 'warning':
        return 2;
      case 'error':
        return 3;
      default:
        return undefined;
    }
  }
}
