import React, {useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopy, faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {copyText} from './context';
import type {ToolContext} from './context';
import {formatMedium} from './format';
import {MAX_REQUESTS} from './inboxStore';
import type {ResponseConfig} from './types';
import styles from './styles.module.css';

interface Preset {
  name: string;
  description: string;
  config: ResponseConfig;
}

/**
 * Starting points for the response. ISC fire-and-forget triggers ignore the
 * body. Request-response triggers read it, and each trigger defines its own
 * output schema, so the second preset is a shape to edit, not a final answer.
 */
const PRESETS: Preset[] = [
  {
    name: 'Acknowledge',
    description: 'For fire-and-forget triggers. Any 2xx counts as delivered.',
    config: {
      status: 200,
      contentType: 'application/json',
      body: '{"received": true}',
    },
  },
  {
    name: 'Request-response output',
    description:
      'A JSON body for a request-response trigger. Replace it with the output your trigger expects.',
    config: {
      status: 200,
      contentType: 'application/json',
      body: '{\n  "output": {}\n}',
    },
  },
  {
    name: 'Fail delivery',
    description: 'A 500, to see how ISC retries and reports a failed delivery.',
    config: {
      status: 500,
      contentType: 'application/json',
      body: '{"error": "Simulated failure"}',
    },
  },
];

function maskToken(token: string): string {
  const dot = token.indexOf('.');
  return dot > 0 ? `${token.slice(0, dot)}.••••${token.slice(-4)}` : token;
}

export default function SettingsView({ctx}: {ctx: ToolContext}) {
  const {state, store, api, notify, token, forget} = ctx;
  const [status, setStatus] = useState(200);
  const [contentType, setContentType] = useState('application/json');
  const [body, setBody] = useState('');
  const [saving, setSaving] = useState(false);
  const [reveal, setReveal] = useState(false);
  const formLoaded = useRef(false);

  // Fill the form once the bin has loaded, then leave the user's edits alone.
  useEffect(() => {
    const response = state.bin?.response;
    if (response && !formLoaded.current) {
      formLoaded.current = true;
      applyConfig(response);
    }
  }, [state.bin]);

  function applyConfig(config: ResponseConfig) {
    setStatus(config.status);
    setContentType(config.contentType);
    setBody(config.body);
  }

  // A warning, not a block: a non-JSON body is legal, just unusual.
  let bodyIsInvalidJson = false;
  if (/json/i.test(contentType) && body.trim()) {
    try {
      JSON.parse(body);
    } catch {
      bodyIsInvalidJson = true;
    }
  }

  const saved = state.bin?.response;
  const dirty =
    !!saved &&
    (saved.status !== Number(status) ||
      saved.contentType !== contentType ||
      saved.body !== body);

  const save = async (event: React.FormEvent) => {
    event.preventDefault();
    setSaving(true);
    try {
      await store.updateResponse({
        status: Number(status),
        contentType: contentType.trim(),
        body,
      });
      notify.success('Response saved. The next delivery gets it.');
    } catch (error) {
      notify.error(error, 'Could not save the response.');
    } finally {
      setSaving(false);
    }
  };

  const deleteBin = async () => {
    const confirmed = window.confirm(
      'Delete this bin?\n\nThe webhook URL stops working at once, and every captured request and watch is deleted. ISC deliveries to the URL will fail.',
    );
    if (!confirmed) return;
    try {
      await api.deleteBin();
      forget();
      notify.success('The bin was deleted.');
    } catch (error) {
      notify.error(error, 'Could not delete the bin.');
    }
  };

  const bin = state.bin;
  if (!bin) {
    return <p className={styles.muted}>Loading…</p>;
  }

  return (
    <>
      <section className={styles.panel} aria-labelledby="response-heading">
        <h3 id="response-heading">Response to the sender</h3>
        <p className={styles.muted}>
          What the webhook URL answers with. Fire-and-forget triggers only need
          a 2xx status. Request-response triggers read the body, so put the
          output that your trigger expects here.
        </p>

        <div className={styles.buttonRow}>
          {PRESETS.map((preset) => (
            <button
              key={preset.name}
              type="button"
              className="button button--secondary button--sm"
              title={preset.description}
              onClick={() => applyConfig(preset.config)}>
              {preset.name}
            </button>
          ))}
        </div>

        <form onSubmit={save}>
          <div className={styles.settingsRow}>
            <label className={`${styles.field} ${styles.statusField}`}>
              <span>Status code</span>
              <input
                className={styles.input}
                type="number"
                name="status"
                min={200}
                max={599}
                required
                value={status}
                onChange={(e) => setStatus(Number(e.target.value))}
              />
            </label>
            <label className={`${styles.field} ${styles.grow}`}>
              <span>Content type</span>
              <input
                className={styles.input}
                name="contentType"
                required
                value={contentType}
                onChange={(e) => setContentType(e.target.value)}
              />
              <small className={styles.muted}>
                application/json, application/*+json or text/plain
              </small>
            </label>
          </div>
          <label className={styles.field}>
            <span>Body</span>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              name="body"
              rows={8}
              spellCheck={false}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            {bodyIsInvalidJson ? (
              <small className={styles.warnText}>
                The content type says JSON, but this body is not valid JSON.
              </small>
            ) : (
              <small className={styles.muted}>
                Leave it empty to send no body.
              </small>
            )}
          </label>
          <div className={styles.cardActions}>
            <button
              type="submit"
              className="button button--primary"
              disabled={saving || !dirty}>
              Save response
            </button>
          </div>
        </form>
      </section>

      <section className={styles.panel} aria-labelledby="bin-heading">
        <h3 id="bin-heading">This bin</h3>
        <dl className={styles.facts}>
          <dt>Webhook URL</dt>
          <dd>
            <code>{bin.ingestUrl}</code>
            <button
              type="button"
              className={styles.iconButton}
              aria-label="Copy the webhook URL"
              onClick={() => copyText(notify, bin.ingestUrl, 'Webhook URL')}>
              <FontAwesomeIcon icon={faCopy} />
            </button>
          </dd>
          <dt>Bin token</dt>
          <dd>
            <code>{reveal ? token : maskToken(token ?? '')}</code>
            <button
              type="button"
              className={styles.iconButton}
              aria-label={reveal ? 'Hide the token' : 'Show the token'}
              onClick={() => setReveal(!reveal)}>
              <FontAwesomeIcon icon={reveal ? faEyeSlash : faEye} />
            </button>
            <button
              type="button"
              className={styles.iconButton}
              aria-label="Copy the bin token"
              onClick={() => copyText(notify, token ?? '', 'Bin token')}>
              <FontAwesomeIcon icon={faCopy} />
            </button>
          </dd>
          <dt>Created</dt>
          <dd>{formatMedium(bin.createdAt)}</dd>
          <dt>Expires</dt>
          <dd>{formatMedium(bin.expiresAt)}</dd>
          <dt>Requests held</dt>
          <dd>
            {state.requests.length} of {MAX_REQUESTS}. The oldest are dropped
            first.
          </dd>
        </dl>
        <p className={styles.muted}>
          To open this bin in another browser, paste the token on the start
          page. Anyone with the token can read every captured request.
        </p>
      </section>

      <section
        className={`${styles.panel} ${styles.danger}`}
        aria-labelledby="danger-heading">
        <h3 id="danger-heading">Delete the bin</h3>
        <p className={styles.muted}>
          The URL stops working and every captured request and watch is deleted
          now, instead of at expiry.
        </p>
        <button
          type="button"
          className="button button--danger"
          onClick={deleteBin}>
          Delete the bin
        </button>
      </section>
    </>
  );
}
