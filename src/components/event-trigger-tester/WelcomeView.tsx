import React, {useState} from 'react';
import {describe} from './api';
import type {WebhookApi} from './api';
import {copyText} from './context';
import type {Notify} from './context';
import {formatMedium} from './format';
import type {CreatedBin} from './types';
import styles from './styles.module.css';

/** True when the text has the shape of a bin token. */
export function looksLikeToken(text: string): boolean {
  return /^whk_[a-z0-9]{18}\.[A-Za-z0-9_-]{32}$/.test(text.trim());
}

interface Props {
  api: WebhookApi;
  notify: Notify;
  expired: boolean;
  created: CreatedBin | null;
  onCreated(created: CreatedBin): void;
  onToken(token: string): void;
  onOpenInbox(): void;
}

/**
 * The front door: create a bin, or reopen one with its token.
 *
 * A created token is shown once, here, with a copy button. It is also saved
 * on this device, but no endpoint returns it again, so the page says so.
 */
export default function WelcomeView({
  api,
  notify,
  expired,
  created,
  onCreated,
  onToken,
  onOpenInbox,
}: Props) {
  const [pasted, setPasted] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createBin = async () => {
    setBusy(true);
    setError(null);
    try {
      onCreated(await api.createBin());
    } catch (e) {
      setError(describe(e, 'Could not create a bin.'));
    } finally {
      setBusy(false);
    }
  };

  const submitToken = (event: React.FormEvent) => {
    event.preventDefault();
    const token = pasted.trim();
    if (!looksLikeToken(token)) {
      setError(
        'That does not look like a bin token. A token starts with "whk_" and contains one ".".',
      );
      return;
    }
    setError(null);
    // A wrong or expired token comes back here through the 401 handler.
    onToken(token);
  };

  return (
    <div className={styles.welcome}>
      <section className={styles.intro}>
        <h2>Test ISC event triggers without a server of your own</h2>
        <p>
          Create a webhook bin, paste its URL into an Identity Security Cloud
          event trigger subscription, and watch the events arrive. Pick any
          field in an event to chart how its value changes from one event to the
          next.
        </p>
      </section>

      <div className="alert alert--warning margin-bottom--md" role="note">
        Do not send production data or real credentials to this tool. Use a test
        tenant or test data.
      </div>

      {expired && (
        <div className="alert alert--info margin-bottom--md" role="alert">
          The bin token on this device is no longer valid. The bin expired or
          was deleted. Create a new bin to continue.
        </div>
      )}

      {created ? (
        <div className={`card ${styles.panel}`}>
          <div className="card__header">
            <h3>Your bin is ready</h3>
            <p className={styles.muted}>
              Expires {formatMedium(created.expiresAt)}
            </p>
          </div>
          <div className="card__body">
            <h4>Webhook URL</h4>
            <p className={styles.muted}>
              Use this as the integration URL of your event trigger
              subscription.
            </p>
            <div className={styles.copyRow}>
              <code>{created.ingestUrl}</code>
              <button
                type="button"
                className="button button--secondary button--sm"
                onClick={() =>
                  copyText(notify, created.ingestUrl, 'Webhook URL')
                }>
                Copy
              </button>
            </div>

            <h4>Bin token</h4>
            <p className={styles.muted}>
              This browser keeps the token for you. Save a copy if you want to
              open the bin on another device. It is not shown again.
            </p>
            <div className={styles.copyRow}>
              <code>{created.token}</code>
              <button
                type="button"
                className="button button--secondary button--sm"
                onClick={() => copyText(notify, created.token, 'Bin token')}>
                Copy
              </button>
            </div>
          </div>
          <div className={`card__footer ${styles.cardActions}`}>
            <button
              type="button"
              className="button button--primary"
              onClick={onOpenInbox}>
              Open the inbox →
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.choices}>
          <div className={`card ${styles.panel}`}>
            <div className="card__header">
              <h3>Create a new bin</h3>
              <p className={styles.muted}>
                No sign-up. Deleted automatically after 7 days.
              </p>
            </div>
            <div className="card__body">
              <ul>
                <li>
                  Captures every request sent to its URL: method, path, headers
                  and body.
                </li>
                <li>Keeps the latest 500 requests.</li>
                <li>
                  Answers with a response you choose, for request-response
                  triggers.
                </li>
              </ul>
              <p className={styles.warnText}>
                Use test tenants and test data only. Anyone with the bin token
                can read what the bin captured.
              </p>
            </div>
            <div className={`card__footer ${styles.cardActions}`}>
              <button
                type="button"
                className="button button--primary"
                disabled={busy}
                onClick={createBin}>
                {busy ? 'Creating…' : 'Create a bin'}
              </button>
            </div>
          </div>

          <div className={`card ${styles.panel}`}>
            <div className="card__header">
              <h3>Open an existing bin</h3>
              <p className={styles.muted}>
                Paste the token that you saved when you created it.
              </p>
            </div>
            <form onSubmit={submitToken}>
              <div className="card__body">
                <label className={styles.field}>
                  <span>Bin token</span>
                  <input
                    className={styles.input}
                    name="token"
                    autoComplete="off"
                    spellCheck={false}
                    placeholder="whk_…"
                    value={pasted}
                    onChange={(e) => setPasted(e.target.value)}
                  />
                </label>
              </div>
              <div className={`card__footer ${styles.cardActions}`}>
                <button
                  type="submit"
                  className="button button--secondary"
                  disabled={!pasted.trim()}>
                  Open the bin
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {error && (
        <div className="alert alert--danger margin-top--md" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}
