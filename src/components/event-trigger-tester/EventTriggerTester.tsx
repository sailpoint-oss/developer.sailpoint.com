import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useHistory, useLocation} from '@docusaurus/router';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopy, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {WebhookApi, describe} from './api';
import {copyText} from './context';
import type {Notify, Toast, ToolContext, View} from './context';
import {InboxStore, useInbox} from './inboxStore';
import InboxView from './InboxView';
import MonitorView from './MonitorView';
import SettingsView from './SettingsView';
import type {CreatedBin} from './types';
import WelcomeView from './WelcomeView';
import styles from './styles.module.css';

const STORAGE_KEY = 'event-trigger-tester.binToken';
const SECONDS_PER_DAY = 86_400;
const VIEWS: View[] = ['inbox', 'monitor', 'settings'];

/**
 * localStorage, not sessionStorage: a webhook bin is something you set up in
 * ISC and come back to over several days, and a lost token cannot be
 * recovered. The bin expires on its own, and "Forget this bin" removes it.
 */
function readToken(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function writeToken(token: string | null): void {
  try {
    if (token) localStorage.setItem(STORAGE_KEY, token);
    else localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Private browsing can refuse storage. React state still works for the tab.
  }
}

/** A disposable webhook receiver for ISC event triggers. */
export default function EventTriggerTester({apiBaseUrl}: {apiBaseUrl: string}) {
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const viewParam = params.get('view') as View | null;
  const view: View =
    viewParam && VIEWS.includes(viewParam) ? viewParam : 'inbox';
  const pinned = params.get('request');

  const [token, setTokenState] = useState<string | null>(readToken);
  const tokenRef = useRef(token);
  const [expired, setExpired] = useState(false);
  const [created, setCreated] = useState<CreatedBin | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const toastId = useRef(0);

  const setToken = useCallback((next: string | null) => {
    tokenRef.current = next;
    writeToken(next);
    setTokenState(next);
  }, []);

  const api = useMemo(
    () =>
      new WebhookApi(
        apiBaseUrl.replace(/\/$/, ''),
        () => tokenRef.current,
        () => {
          setToken(null);
          setCreated(null);
          setExpired(true);
        },
      ),
    [apiBaseUrl, setToken],
  );
  const store = useMemo(() => new InboxStore(api), [api]);
  const state = useInbox(store);

  // The store follows the token: a new token starts polling, no token stops it.
  useEffect(() => {
    if (token) store.start(token);
    else store.stop();
  }, [store, token]);
  useEffect(() => () => store.stop(), [store]);

  const push = useCallback((toast: Omit<Toast, 'id'>, duration: number) => {
    toastId.current += 1;
    const id = toastId.current;
    setToasts((list) => [...list, {...toast, id}]);
    setTimeout(
      () => setToasts((list) => list.filter((t) => t.id !== id)),
      duration,
    );
  }, []);

  const notify = useMemo<Notify>(
    () => ({
      success: (message) => push({kind: 'success', message}, 4000),
      info: (message, action) => push({kind: 'info', message, action}, 6000),
      error: (error, fallback = 'Something went wrong.') =>
        push({kind: 'error', message: describe(error, fallback)}, 10000),
    }),
    [push],
  );

  const go = useCallback(
    (next: View, request?: string | null) => {
      const search = new URLSearchParams();
      if (next !== 'inbox') search.set('view', next);
      if (next === 'inbox' && request) search.set('request', request);
      const query = search.toString();
      history.replace({
        pathname: location.pathname,
        search: query ? `?${query}` : '',
      });
    },
    [history, location.pathname],
  );

  const forget = useCallback(() => {
    setToken(null);
    setCreated(null);
    go('inbox');
  }, [setToken, go]);

  const ctx: ToolContext = {api, store, state, token, notify, go, forget};

  const daysRemaining = state.bin
    ? Math.ceil(state.bin.secondsRemaining / SECONDS_PER_DAY)
    : null;
  const expiryLabel =
    daysRemaining === null
      ? ''
      : daysRemaining <= 0
      ? 'Expired'
      : daysRemaining === 1
      ? '1 day left'
      : `${daysRemaining} days left`;
  const liveLabel = state.pollError
    ? 'Not connected'
    : state.paused
    ? 'Paused'
    : state.loaded
    ? 'Live'
    : 'Connecting';

  const showWelcome = !token || created !== null;

  return (
    <div className={styles.root}>
      <header className={styles.toolHeader}>
        <div>
          <h1>Event Trigger Tester</h1>
          <p className={styles.muted}>
            A disposable webhook receiver for Identity Security Cloud{' '}
            <a href="/docs/extensibility/event-triggers/">event triggers</a>.
          </p>
        </div>
        {!showWelcome && (
          <div className={styles.headerActions}>
            <span
              role="status"
              className={`${styles.live} ${
                liveLabel === 'Live'
                  ? styles.liveOk
                  : liveLabel === 'Not connected'
                  ? styles.liveError
                  : ''
              }`}
              title={
                state.pollError ??
                'Checks for new deliveries every 2 seconds while this tab is visible.'
              }>
              <span className={styles.liveDot} aria-hidden="true" />
              {liveLabel}
            </span>
            {state.bin && (
              <button
                type="button"
                className="button button--secondary button--sm"
                title={`Copy the webhook URL. ${expiryLabel}`}
                onClick={() =>
                  copyText(notify, state.bin!.ingestUrl, 'Webhook URL')
                }>
                <FontAwesomeIcon icon={faCopy} /> /hooks/{state.bin.binId}
              </button>
            )}
            <button
              type="button"
              className="button button--secondary button--sm"
              title="Forget this bin on this device"
              aria-label="Forget this bin on this device"
              onClick={forget}>
              <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
          </div>
        )}
      </header>

      {showWelcome ? (
        <WelcomeView
          api={api}
          notify={notify}
          expired={expired}
          created={created}
          onCreated={(bin) => {
            setExpired(false);
            setToken(bin.token);
            setCreated(bin);
          }}
          onToken={(value) => {
            setExpired(false);
            setToken(value);
            go('inbox');
          }}
          onOpenInbox={() => {
            setCreated(null);
            go('inbox');
          }}
        />
      ) : (
        <>
          {daysRemaining !== null && daysRemaining <= 1 && (
            <div
              className="alert alert--warning margin-bottom--md"
              role="status">
              This bin and every request it captured expire in{' '}
              <strong>{expiryLabel}</strong>. Create a new bin and update your
              ISC subscription before then.
            </div>
          )}

          <nav aria-label="Tool sections">
            <ul className={`tabs ${styles.viewTabs}`}>
              {(
                [
                  ['inbox', 'Inbox', state.requests.length],
                  ['monitor', 'Monitor', state.watches.length],
                  ['settings', 'Settings', 0],
                ] as [View, string, number][]
              ).map(([key, label, count]) => (
                <li
                  key={key}
                  className={`tabs__item ${
                    view === key ? 'tabs__item--active' : ''
                  }`}
                  aria-current={view === key ? 'page' : undefined}
                  role="link"
                  tabIndex={0}
                  onClick={() => go(key)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') go(key);
                  }}>
                  {label}
                  {count > 0 && <span className={styles.count}>{count}</span>}
                </li>
              ))}
            </ul>
          </nav>

          {view === 'inbox' && <InboxView ctx={ctx} pinned={pinned} />}
          {view === 'monitor' && <MonitorView ctx={ctx} />}
          {view === 'settings' && <SettingsView ctx={ctx} />}
        </>
      )}

      <div className={styles.toasts} aria-live="polite">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`alert ${
              toast.kind === 'error'
                ? 'alert--danger'
                : toast.kind === 'success'
                ? 'alert--success'
                : 'alert--info'
            } ${styles.toast}`}
            role={toast.kind === 'error' ? 'alert' : 'status'}>
            <span>{toast.message}</span>
            {toast.action && (
              <button
                type="button"
                className="button button--link button--sm"
                onClick={() => {
                  toast.action!.run();
                  setToasts((list) => list.filter((t) => t.id !== toast.id));
                }}>
                {toast.action.label}
              </button>
            )}
            <button
              type="button"
              className="clean-btn close"
              aria-label="Dismiss"
              onClick={() =>
                setToasts((list) => list.filter((t) => t.id !== toast.id))
              }>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
