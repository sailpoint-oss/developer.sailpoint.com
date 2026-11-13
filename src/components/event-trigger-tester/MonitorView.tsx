import React, {useMemo, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import type {ToolContext} from './context';
import {formatTime} from './format';
import {formatPath, parsePath} from './jsonPath';
import {buildSeries} from './series';
import type {Series, SeriesPoint} from './series';
import type {Watch} from './types';
import ValueChart from './ValueChart';
import styles from './styles.module.css';

interface WatchView {
  watch: Watch;
  error: string | null;
  series: Series | null;
  latest: SeriesPoint | null;
  /** History rows, newest first. */
  history: SeriesPoint[];
}

const HISTORY_PREVIEW = 25;

/**
 * One chart per watched field, built in the browser from the captured
 * requests. The charts are derived, not stored, so a new watch immediately
 * covers every event that arrived before it.
 */
export default function MonitorView({ctx}: {ctx: ToolContext}) {
  const {state, store, notify, go} = ctx;
  const [newPath, setNewPath] = useState('');
  const [newLabel, setNewLabel] = useState('');
  const [pathError, setPathError] = useState<string | null>(null);
  const [adding, setAdding] = useState(false);
  const [includeMissing, setIncludeMissing] = useState(false);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const views = useMemo<WatchView[]>(
    () =>
      state.watches.map((watch) => {
        let segments;
        try {
          segments = parsePath(watch.path);
        } catch (error) {
          return {
            watch,
            error: (error as Error).message,
            series: null,
            latest: null,
            history: [],
          };
        }
        const series = buildSeries(state.requests, segments, {includeMissing});
        return {
          watch,
          error: null,
          series,
          latest: series.points[series.points.length - 1] ?? null,
          history: [...series.points].reverse(),
        };
      }),
    [state.watches, state.requests, includeMissing],
  );

  const addWatch = async (event: React.FormEvent) => {
    event.preventDefault();
    let path: string;
    try {
      // Normalized, so "$.a.b" and "a.b" do not become two charts.
      path = formatPath(parsePath(newPath));
    } catch (error) {
      setPathError((error as Error).message);
      return;
    }
    setPathError(null);
    setAdding(true);
    try {
      await store.addWatch(path, newLabel.trim() || undefined);
      setNewPath('');
      setNewLabel('');
    } catch (error) {
      notify.error(error, 'Could not add the watch.');
    } finally {
      setAdding(false);
    }
  };

  const removeWatch = async (watch: Watch) => {
    try {
      await store.deleteWatch(watch.id);
    } catch (error) {
      notify.error(error, 'Could not remove the watch.');
    }
  };

  const openRequest = (requestId: string) => go('inbox', requestId);

  return (
    <>
      <p className={styles.muted}>
        Each chart shows one field from the JSON body of every event, at the
        time the event arrived. Text values get one row for each distinct value,
        so a change shows as a step.
      </p>

      <form
        className={`${styles.panel} ${styles.addWatch}`}
        onSubmit={addWatch}>
        <label className={`${styles.field} ${styles.pathField}`}>
          <span>Field path</span>
          <input
            className={styles.input}
            name="path"
            autoComplete="off"
            spellCheck={false}
            placeholder="changes[0].newValue"
            value={newPath}
            onChange={(e) => {
              setNewPath(e.target.value);
              setPathError(null);
            }}
          />
          {pathError ? (
            <small className={styles.errorText}>{pathError}</small>
          ) : (
            <small className={styles.muted}>
              Dots for fields, [0] for array items, ["a b"] for unusual names.
            </small>
          )}
        </label>
        <label className={`${styles.field} ${styles.labelField}`}>
          <span>Label (optional)</span>
          <input
            className={styles.input}
            name="label"
            autoComplete="off"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
          />
          <small>&nbsp;</small>
        </label>
        <button
          type="submit"
          className={`button button--primary ${styles.addButton}`}
          disabled={!newPath.trim() || adding}>
          + Watch
        </button>
        <span className={styles.spacer} />
        <label
          className={styles.checkbox}
          title="Off: events without the field are left out. This suits a bin that receives several trigger types.">
          <input
            type="checkbox"
            checked={includeMissing}
            onChange={(e) => setIncludeMissing(e.target.checked)}
          />
          Include events without the field
        </label>
      </form>

      {!views.length && (
        <div className={`${styles.panel} ${styles.empty}`}>
          <h3>No fields watched yet</h3>
          <p className={styles.muted}>
            Open a request in the{' '}
            <button
              type="button"
              className={styles.linkButton}
              onClick={() => go('inbox')}>
              inbox
            </button>
            , hover a value in its JSON body and press the chart button. Or type
            a path above.
          </p>
        </div>
      )}

      {views.map((view) => (
        <article
          key={view.watch.id}
          className={`${styles.panel} ${styles.watchCard}`}
          aria-labelledby={`watch-${view.watch.id}`}>
          <header className={styles.watchHeader}>
            <div className={styles.watchTitle}>
              <h3 id={`watch-${view.watch.id}`}>{view.watch.label}</h3>
              {view.watch.label !== view.watch.path && (
                <code>{view.watch.path}</code>
              )}
            </div>
            <button
              type="button"
              className="button button--secondary button--sm"
              title="Stop watching this field"
              aria-label={`Stop watching ${view.watch.label}`}
              onClick={() => removeWatch(view.watch)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </header>

          {view.error ? (
            <p className={styles.errorText}>
              This path cannot be read: {view.error}
            </p>
          ) : view.series ? (
            <>
              <dl className={styles.stats}>
                <div>
                  <dt>Latest value</dt>
                  <dd className={styles.latest}>{view.latest?.text ?? '—'}</dd>
                </div>
                <div>
                  <dt>Events</dt>
                  <dd>{view.series.points.length}</dd>
                </div>
                <div>
                  <dt>Changes</dt>
                  <dd>{view.series.changes}</dd>
                </div>
                <div>
                  <dt>
                    {view.series.kind === 'numeric'
                      ? 'Kind'
                      : 'Distinct values'}
                  </dt>
                  <dd>
                    {view.series.kind === 'numeric'
                      ? 'Number'
                      : view.series.categories.length}
                  </dd>
                </div>
              </dl>

              {view.series.points.length ? (
                <>
                  <ValueChart
                    series={view.series}
                    label={view.watch.label}
                    onPick={openRequest}
                  />
                  <details className={styles.history}>
                    <summary>
                      Table view ({view.history.length} events, newest first)
                    </summary>
                    <table>
                      <thead>
                        <tr>
                          <th scope="col">Received</th>
                          <th scope="col">Value</th>
                          <th scope="col">
                            <span className={styles.visuallyHidden}>
                              Request
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {(expanded.has(view.watch.id)
                          ? view.history
                          : view.history.slice(0, HISTORY_PREVIEW)
                        ).map((point) => (
                          <tr
                            key={point.requestId}
                            className={
                              point.changed ? styles.changedRow : undefined
                            }>
                            <td className={styles.time}>
                              {formatTime(point.t)}
                            </td>
                            <td className={styles.value}>
                              {point.text}
                              {point.changed && (
                                <span className={styles.changeTag}>
                                  changed
                                </span>
                              )}
                            </td>
                            <td>
                              <button
                                type="button"
                                className={styles.linkButton}
                                onClick={() => openRequest(point.requestId)}>
                                Open
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {view.history.length > HISTORY_PREVIEW &&
                      !expanded.has(view.watch.id) && (
                        <button
                          type="button"
                          className="button button--link button--sm"
                          onClick={() =>
                            setExpanded((set) =>
                              new Set(set).add(view.watch.id),
                            )
                          }>
                          Show all {view.history.length}
                        </button>
                      )}
                  </details>
                </>
              ) : (
                <p className={styles.muted}>
                  No captured event has this field yet. The chart fills in as
                  matching events arrive.
                </p>
              )}
            </>
          ) : null}
        </article>
      ))}
    </>
  );
}
