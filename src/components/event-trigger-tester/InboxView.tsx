import React, {useMemo, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCopy,
  faPause,
  faPaperPlane,
  faPlay,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import {copyText} from './context';
import type {ToolContext} from './context';
import {formatNumber, formatShort, formatTime} from './format';
import JsonTree from './JsonTree';
import {nextSampleEvent} from './sampleEvent';
import {parseBody} from './series';
import type {CapturedRequest} from './types';
import styles from './styles.module.css';

type Tab = 'body' | 'headers' | 'query';

const byKey = (a: [string, unknown], b: [string, unknown]) =>
  a[0].localeCompare(b[0]);

function methodClass(method: string): string {
  return `${styles.method} ${styles[`method_${method.toLowerCase()}`] ?? ''}`;
}

interface Props {
  ctx: ToolContext;
  /** The pinned request id from the URL, if any. */
  pinned: string | null;
}

/**
 * The live inbox. With no request chosen, the newest one is shown and the
 * view follows new deliveries as they arrive. Choosing a request pins it, by
 * putting its id in the URL, so a link from a chart opens the right one.
 */
export default function InboxView({ctx, pinned}: Props) {
  const {state, store, api, notify, go} = ctx;
  const [tab, setTab] = useState<Tab>('body');
  const [bodyView, setBodyView] = useState<'tree' | 'raw'>('tree');
  const [sending, setSending] = useState(false);

  const newestFirst = useMemo(
    () => [...state.requests].reverse(),
    [state.requests],
  );
  const watchedPaths = useMemo(
    () => new Set(state.watches.map((watch) => watch.path)),
    [state.watches],
  );

  const selected: CapturedRequest | null = pinned
    ? newestFirst.find((item) => item.id === pinned) ?? null
    : newestFirst[0] ?? null;
  const pinnedMissing = !!pinned && state.loaded && selected === null;
  const parsed = selected ? parseBody(selected) : null;
  const prettyBody = selected
    ? parsed?.ok
      ? JSON.stringify(parsed.value, null, 2)
      : selected.body
    : '';

  const select = (id: string) => go('inbox', id);
  const followLatest = () => go('inbox', null);

  const sendTestEvent = async () => {
    const url = state.bin?.ingestUrl;
    if (!url) return;
    setSending(true);
    try {
      await api.sendTestEvent(url, nextSampleEvent());
      store.pollNow();
    } catch (error) {
      notify.error(error, 'Could not send the test event.');
    } finally {
      setSending(false);
    }
  };

  const watch = async (path: string) => {
    if (watchedPaths.has(path)) {
      go('monitor');
      return;
    }
    try {
      await store.addWatch(path);
      notify.info(`Watching ${path}.`, {
        label: 'Open the chart',
        run: () => go('monitor'),
      });
    } catch (error) {
      notify.error(error, 'Could not add the watch.');
    }
  };

  const deleteRequest = async (request: CapturedRequest) => {
    try {
      await store.deleteRequest(request.id);
      if (pinned === request.id) followLatest();
    } catch (error) {
      notify.error(error, 'Could not delete the request.');
    }
  };

  const clearAll = async () => {
    const confirmed = window.confirm(
      'Delete every captured request?\n\nThe bin, its URL and its watches stay. Charts empty until new events arrive.',
    );
    if (!confirmed) return;
    try {
      const deleted = await store.clearRequests();
      followLatest();
      notify.success(`Deleted ${deleted} request${deleted === 1 ? '' : 's'}.`);
    } catch (error) {
      notify.error(error, 'Could not delete the requests.');
    }
  };

  const onListKey = (event: React.KeyboardEvent, id: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      select(id);
    }
  };

  const bin = state.bin;
  const headerEntries = selected
    ? Object.entries(selected.headers).sort(byKey)
    : [];
  const queryEntries = selected
    ? Object.entries(selected.query).sort(byKey)
    : [];

  return (
    <>
      {bin && (
        <section
          className={`${styles.panel} ${styles.endpoint}`}
          aria-label="Webhook URL">
          <div className={styles.endpointUrl}>
            <span className={styles.label}>Webhook URL</span>
            <code>{bin.ingestUrl}</code>
          </div>
          <div className={styles.buttonRow}>
            <button
              type="button"
              className="button button--secondary button--sm"
              onClick={() => copyText(notify, bin.ingestUrl, 'Webhook URL')}>
              <FontAwesomeIcon icon={faCopy} /> Copy
            </button>
            <button
              type="button"
              className="button button--secondary button--sm"
              disabled={sending}
              onClick={sendTestEvent}>
              <FontAwesomeIcon icon={faPaperPlane} /> Send a test event
            </button>
            <button
              type="button"
              className="button button--secondary button--sm"
              aria-pressed={state.paused}
              onClick={() => store.setPaused(!state.paused)}>
              <FontAwesomeIcon icon={state.paused ? faPlay : faPause} />{' '}
              {state.paused ? 'Resume' : 'Pause'}
            </button>
          </div>
          <p className={styles.muted}>
            Any method and any sub-path is captured, for example{' '}
            <code>{bin.ingestUrl}/identity-created</code>. The sender gets{' '}
            <strong>{bin.response.status}</strong> with the body set in
            Settings.
          </p>
        </section>
      )}

      {state.pollError && (
        <div className="alert alert--danger margin-bottom--md" role="alert">
          {state.pollError} Retrying every 2 seconds.
        </div>
      )}

      <div className={styles.inboxLayout}>
        <section
          className={`${styles.panel} ${styles.list}`}
          aria-label="Captured requests">
          <header className={styles.listHeader}>
            <h3>
              Requests{' '}
              <span className={styles.muted}>({state.requests.length})</span>
            </h3>
            {state.requests.length > 0 && (
              <button
                type="button"
                className="button button--link button--sm"
                onClick={clearAll}>
                Clear
              </button>
            )}
          </header>

          {pinned && (
            <button
              type="button"
              className={`button button--link button--sm ${styles.follow}`}
              onClick={followLatest}>
              ↑ Follow the newest request
            </button>
          )}

          {!state.loaded && !state.pollError ? (
            <p className={styles.muted}>Loading…</p>
          ) : !state.requests.length ? (
            <div className={styles.empty}>
              <p>Nothing has arrived yet.</p>
              <p className={styles.muted}>
                Point an ISC event trigger subscription at the webhook URL, or
                press <strong>Send a test event</strong>.
              </p>
            </div>
          ) : (
            <ul
              className={styles.items}
              role="listbox"
              aria-label="Captured requests, newest first">
              {newestFirst.map((item) => {
                const isSelected = selected?.id === item.id;
                return (
                  <li
                    key={item.id}
                    role="option"
                    tabIndex={0}
                    aria-selected={isSelected}
                    className={isSelected ? styles.itemSelected : undefined}
                    onClick={() => select(item.id)}
                    onKeyDown={(e) => onListKey(e, item.id)}>
                    <span className={methodClass(item.method)}>
                      {item.method}
                    </span>
                    <span className={styles.itemMain}>
                      <span className={styles.itemPath}>{item.path}</span>
                      <span className={styles.itemMeta}>
                        {formatShort(item.receivedAt)} ·{' '}
                        {formatNumber(item.bodyBytes)} B
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        <section
          className={`${styles.panel} ${styles.detail}`}
          aria-label="Request detail">
          {selected ? (
            <>
              <header className={styles.detailHeader}>
                <div>
                  <h3 className={styles.detailTitle}>
                    <span className={methodClass(selected.method)}>
                      {selected.method}
                    </span>
                    <code>{selected.path}</code>
                  </h3>
                  <p className={styles.muted}>
                    {formatTime(selected.receivedAt)}
                    {selected.sourceIp
                      ? ` · from ${selected.sourceIp}`
                      : ''} · {selected.contentType ?? 'no content type'} ·{' '}
                    {formatNumber(selected.bodyBytes)} bytes
                  </p>
                </div>
                <button
                  type="button"
                  className="button button--secondary button--sm"
                  title="Delete this request"
                  aria-label="Delete this request"
                  onClick={() => deleteRequest(selected)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </header>

              <ul className="tabs" role="tablist">
                {(
                  [
                    ['body', 'Body'],
                    ['headers', `Headers (${headerEntries.length})`],
                    ['query', `Query (${queryEntries.length})`],
                  ] as [Tab, string][]
                ).map(([key, text]) => (
                  <li
                    key={key}
                    role="tab"
                    tabIndex={0}
                    aria-selected={tab === key}
                    className={`tabs__item ${
                      tab === key ? 'tabs__item--active' : ''
                    }`}
                    onClick={() => setTab(key)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setTab(key);
                      }
                    }}>
                    {text}
                  </li>
                ))}
              </ul>

              <div className={styles.tabBody}>
                {tab === 'body' && (
                  <>
                    <div className={styles.bodyToolbar}>
                      {parsed?.ok ? (
                        <>
                          <div
                            className="button-group"
                            role="group"
                            aria-label="Body view">
                            <button
                              type="button"
                              className={`button button--sm button--secondary ${
                                bodyView === 'tree' ? 'button--active' : ''
                              }`}
                              aria-pressed={bodyView === 'tree'}
                              onClick={() => setBodyView('tree')}>
                              Tree
                            </button>
                            <button
                              type="button"
                              className={`button button--sm button--secondary ${
                                bodyView === 'raw' ? 'button--active' : ''
                              }`}
                              aria-pressed={bodyView === 'raw'}
                              onClick={() => setBodyView('raw')}>
                              Raw
                            </button>
                          </div>
                          <span className={styles.muted}>
                            Hover a value and press the chart button to watch it
                            over time.
                          </span>
                        </>
                      ) : selected.body ? (
                        <span className={styles.muted}>
                          The body is not JSON, so it shows as text.
                        </span>
                      ) : null}
                      <span className={styles.spacer} />
                      {selected.body && (
                        <button
                          type="button"
                          className="button button--link button--sm"
                          onClick={() => copyText(notify, prettyBody, 'Body')}>
                          <FontAwesomeIcon icon={faCopy} /> Copy
                        </button>
                      )}
                    </div>
                    {!selected.body ? (
                      <p className={styles.muted}>This request has no body.</p>
                    ) : parsed?.ok && bodyView === 'tree' ? (
                      <JsonTree
                        key={selected.id}
                        value={parsed.value}
                        watched={watchedPaths}
                        onWatch={watch}
                      />
                    ) : (
                      <pre className={styles.raw}>{prettyBody}</pre>
                    )}
                  </>
                )}

                {tab === 'headers' && (
                  <table className={styles.kv}>
                    <tbody>
                      {headerEntries.map(([key, value]) => (
                        <tr key={key}>
                          <th scope="row">{key}</th>
                          <td>{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}

                {tab === 'query' &&
                  (queryEntries.length ? (
                    <table className={styles.kv}>
                      <tbody>
                        {queryEntries.map(([key, values]) => (
                          <tr key={key}>
                            <th scope="row">{key}</th>
                            <td>{values.join(', ')}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p className={styles.muted}>
                      This request has no query string.
                    </p>
                  ))}
              </div>
            </>
          ) : pinnedMissing ? (
            <div className={styles.empty}>
              <p>That request is no longer in this bin.</p>
              <button
                type="button"
                className="button button--secondary button--sm"
                onClick={followLatest}>
                Show the newest request
              </button>
            </div>
          ) : (
            <div className={styles.empty}>
              <p className={styles.muted}>
                Requests appear here as soon as they arrive.
              </p>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
