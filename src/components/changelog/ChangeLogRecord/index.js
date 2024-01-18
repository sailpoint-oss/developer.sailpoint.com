import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import dateFormat from 'dateformat';
export default function ChangeLogRecord({data}) {
  return (
    <div className={styles.card}>
      {data.map(function (a, index) {
        let parts = a.changeDate.split('-');
        let date = new Date(parts[0], parts[1] - 1, parts[2]);
        let formatDate = dateFormat(date, 'mmmm dS, yyyy');

        return (
          <>
            {index === 0 && <h1 className={styles.date}>{formatDate}</h1>}
            <div className={styles.recordContainer}>
              <div className={styles.tableContainer}>
                <div className={styles.col250}>
                  <div>
                    {index === 0 && (
                      <span className={styles.header}>Change Type</span>
                    )}
                    <hr className={styles.hideonmobile} />
                  </div>
                  <span className={styles.showonmobile}>Change Type:</span>
                  <span className={styles.value}>{a.changeType}</span>
                </div>
                <div className={styles.col250}>
                  <div>
                    {index === 0 && (
                      <span className={styles.header}>Version</span>
                    )}

                    <hr className={styles.hideonmobile} />
                  </div>
                  <span className={styles.showonmobile}>Version:</span>
                  <span className={styles.value}>{a.version}</span>
                </div>
                <div className={styles.col250}>
                  <div>
                    {index === 0 && (
                      <span className={styles.header}>Severity</span>
                    )}
                    <hr className={styles.hideonmobile} />
                  </div>
                  <span className={styles.showonmobile}>Severity:</span>
                  <div
                    className={
                      a.attributes.level == 1
                        ? styles.info
                        : a.attributes.level == 2
                        ? styles.warning
                        : styles.error
                    }>
                    <div className={styles.tooltip}>
                      <span className={styles.value}>
                        {a.attributes.level == 1 && 'info'}
                        {a.attributes.level == 2 && 'warning'}
                        {a.attributes.level == 3 && 'error'}
                      </span>

                      <span className={styles.tooltiptext}>
                        {' '}
                        {a.attributes.level == 1 &&
                          'Info is something developers should be aware of but does not effect the core functionality of the code'}
                        {a.attributes.level == 2 &&
                          'Warnings are potential breaking changes which developers should be aware of.'}
                        {a.attributes.level == 3 &&
                          'Errors are categorized as a breaking change.'}{' '}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.col400}>
                  <div>
                    {index === 0 && (
                      <span className={styles.header}>Operation</span>
                    )}
                    <hr className={styles.hideonmobile} />
                  </div>
                  <span className={styles.showonmobile}>Operation:</span>
                  <Link to={a.attributes.url}>
                    <span className={styles.value}>
                      {a.attributes.operationId || ''}
                    </span>
                  </Link>
                </div>
                <div className={styles.col2000}>
                  <div>
                    {index === 0 && (
                      <span className={styles.headerDesc}>Description</span>
                    )}
                    <hr className={styles.hideonmobile} />
                  </div>
                  <span className={styles.showonmobile}>Description:</span>
                  <span className={styles.value}>
                    {a.attributes.text || ''}
                  </span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
