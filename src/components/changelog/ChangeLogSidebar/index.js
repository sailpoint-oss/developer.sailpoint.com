import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import ChangeLogSidebarButton from '../../changelog/ChangeLogSidebar/ChangeLogSideBarButton';
import changeset from '../../../../static/data/changeset.json';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function ChangeLogSidebar({filterCallback}) {
  const [filterTags, setFilterTags] = React.useState(true);
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [versions, setVersions] = React.useState([]);
  const [versionData, setVersionData] = React.useState([]);
  const [changeTypes, setChangeTypes] = React.useState([]);
  const [changeTypeData, setChangeTypeData] = React.useState([]);
  const [levels, setLevels] = React.useState([]);
  const [levelData, setLevelData] = React.useState([]);

  function findUniqueRecords(
    obj,
    versions = new Set(),
    changeTypes = new Set(),
    levels = new Set(),
  ) {
    const versionDataSet = [];
    const changeTypeDataSet = [];
    const levelsDataSet = [];
    if (typeof obj === 'object' && obj !== null) {
      for (const key in obj) {
        if (key === 'version') {
          versions.add(obj[key]);
          versionDataSet.push(obj);
        } else if (key === 'changeType') {
          changeTypes.add(obj[key]);
          changeTypeDataSet.push(obj);
        } else if (key === 'attributes') {
          if (obj[key].level) {
            levels.add(obj[key].level);
            levelsDataSet.push(obj);
          }
        } else if (typeof obj[key] === 'object') {
          findUniqueRecords(obj[key], versions, changeTypes, levels);
        }
      }
    } else if (Array.isArray(obj)) {
      obj.forEach((item) =>
        findUniqueRecords(item, versions, changeTypes, level),
      );
    }
    setVersions(Array.from(versions));
    setChangeTypes(Array.from(changeTypes));
    setLevels(Array.from(levels).sort());
    setVersionData(versionDataSet);
    setChangeTypeData(changeTypeDataSet);
    setLevelData(levelsDataSet);
  }

  // function toggleSeeAll() {
  //   filterTags ? setFilterTags(false) : setFilterTags(true);
  // }

  React.useEffect(() => {
    findUniqueRecords(changeset);
  }, []);

  const filterText = filterTags ? 'See All Tags' : 'See Less Tags';

  if (versionData && changeTypeData && levelData) {
    return (
      <div className={styles.sidebar}>
        <h1>Filter Results</h1>
        <div className={styles.topTagHeader}>Version</div>
        <div className={styles.tagContainer}>
          {versions.map(function (a, index) {
            return (
              <ChangeLogSidebarButton
                key={a}
                text={a}
                field={'version'}
                filterCallback={filterCallback}></ChangeLogSidebarButton>
            );
          })}
        </div>
        <div className={styles.tagHeader}>Change Type</div>
        <div className={styles.tagContainer}>
          {changeTypes.map(function (a, index) {
            return (
              <div
                key={'div' + a}
                className={index > 10 && filterTags ? styles.hidden : ''}>
                {' '}
                <ChangeLogSidebarButton
                  key={a}
                  text={a}
                  field={'changeType'}
                  filterCallback={filterCallback}></ChangeLogSidebarButton>
              </div>
            );
          })}
        </div>

        <div className={styles.tagHeader}>Change Severity</div>
        <div className={styles.tagContainer}>
          {levels.map(function (a, index) {
            return (
              <div
                key={'div' + a}
                className={index > 10 && filterTags ? styles.hidden : ''}>
                {' '}
                <ChangeLogSidebarButton
                  key={a}
                  text={a == 1 ? 'info' : a == 2 ? 'warning' : 'error'}
                  field={'level'}
                  filterCallback={filterCallback}></ChangeLogSidebarButton>
              </div>
            );
          })}
        </div>

        <div className={styles.tagHeader}>Change Date</div>
        <div className={styles.tagContainer}>
          <div className={styles.datepickerContainer}>
            <label> Start </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                filterCallback('startDate-' + date);
              }}
            />
          </div>

          <div className={styles.datepickerContainer}>
            <label> End </label>
            <DatePicker
              selected={endDate}
              onChange={(date) => {
                setEndDate(date);
                filterCallback('endDate-' + date);
              }}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
