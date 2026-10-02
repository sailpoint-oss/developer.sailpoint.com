import React, { useEffect, useMemo, useState } from 'react';
import {
  ENTITLEMENT_ID_PLACEHOLDER,
  MERGED_ENTITLEMENT_IDS_PLACEHOLDER,
  setCodeValue,
  useCodeValues,
} from './codeValuesStore';

type Parsed =
  | { state: 'empty' }
  | { state: 'invalid'; message: string }
  | { state: 'ok'; existing: string[] };

/**
 * Reads `entitlementIds` out of a pasted JIT activation policy. Tolerant of
 * anything the CLI prints around the JSON body, and of the list being absent,
 * which is what a tenant with nothing governed yet returns.
 */
export function parsePolicy(text: string): Parsed {
  const trimmed = text.trim();
  if (!trimmed) {
    return { state: 'empty' };
  }

  const start = trimmed.indexOf('{');
  const end = trimmed.lastIndexOf('}');
  if (start === -1 || end <= start) {
    return {
      state: 'invalid',
      message: 'That does not contain a JSON object. Paste the whole response.',
    };
  }

  let policy: unknown;
  try {
    policy = JSON.parse(trimmed.slice(start, end + 1));
  } catch {
    return {
      state: 'invalid',
      message:
        'That is not valid JSON. Paste the whole response, both braces included.',
    };
  }

  const ids = (policy as { entitlementIds?: unknown })?.entitlementIds;
  if (ids === undefined || ids === null) {
    // entitlementIds is optional, so an absent list means nothing is governed.
    return { state: 'ok', existing: [] };
  }
  if (!Array.isArray(ids) || ids.some((id) => typeof id !== 'string')) {
    return {
      state: 'invalid',
      message: 'entitlementIds is present, but it is not a list of strings.',
    };
  }
  return { state: 'ok', existing: ids as string[] };
}

/** Appends `yourId` to `existing` unless it is already there. */
export function mergeEntitlementIds(
  existing: string[],
  yourId: string,
): string[] {
  return existing.includes(yourId) ? existing : [...existing, yourId];
}

/**
 * Builds the `/entitlementIds` value for the JIT policy patch out of the
 * policy the reader pasted, with their own entitlement appended.
 *
 * This exists because the policy is one object per tenant, and a `replace` on
 * that array silently drops every id the reader leaves out. Doing the merge
 * here means a reader cannot take another participant's entitlement out of the
 * policy by copying an example.
 */
export default function JitPolicyMerge(): JSX.Element {
  const [text, setText] = useState('');
  const values = useCodeValues();
  const yourId = values[ENTITLEMENT_ID_PLACEHOLDER] ?? '';

  const parsed = useMemo(() => parsePolicy(text), [text]);

  const merged = useMemo(() => {
    if (parsed.state !== 'ok' || !yourId) {
      return undefined;
    }
    return mergeEntitlementIds(parsed.existing, yourId);
  }, [parsed, yourId]);

  useEffect(() => {
    setCodeValue(
      MERGED_ENTITLEMENT_IDS_PLACEHOLDER,
      merged ? JSON.stringify(merged) : '',
    );
  }, [merged]);

  // Dropped when the reader leaves, so the placeholder comes back.
  useEffect(() => () => setCodeValue(MERGED_ENTITLEMENT_IDS_PLACEHOLDER, ''), []);

  let status: { tone: 'wait' | 'bad' | 'good'; text: string };
  if (parsed.state === 'empty') {
    status = { tone: 'wait', text: 'Paste the response to build the command below.' };
  } else if (parsed.state === 'invalid') {
    status = { tone: 'bad', text: parsed.message };
  } else if (!yourId) {
    status = {
      tone: 'bad',
      text: 'Found the policy. Now fill in your entitlement id in step 5, above.',
    };
  } else if (parsed.existing.includes(yourId)) {
    const others = parsed.existing.length - 1;
    status = {
      tone: 'good',
      text:
        others === 0
          ? 'Your entitlement is already the only one in the policy. The command below leaves the list as it is.'
          : `Your entitlement is already in the policy, alongside ${others} ${
              others === 1 ? 'other' : 'others'
            }. The command below leaves the list as it is.`,
    };
  } else {
    status = {
      tone: 'good',
      text: `Found ${parsed.existing.length} governed ${
        parsed.existing.length === 1 ? 'entitlement' : 'entitlements'
      }, and added yours. The command below sends all ${
        parsed.existing.length + 1
      }.`,
    };
  }

  const toneColor = {
    wait: 'var(--ifm-color-emphasis-600)',
    bad: 'var(--ifm-color-danger-darker)',
    good: 'var(--ifm-color-success-darker)',
  }[status.tone];

  return (
    <div
      style={{
        margin: '1.25rem 0',
        padding: '1rem 1.25rem',
        background: 'var(--ifm-code-background)',
        borderRadius: '8px',
        border: '1px solid var(--ifm-color-emphasis-300)',
      }}
    >
      <label
        htmlFor="jit-policy-paste"
        style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}
      >
        Paste the policy response here
      </label>
      <textarea
        id="jit-policy-paste"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={8}
        spellCheck={false}
        placeholder={'{\n  "id": "...",\n  "entitlementIds": [ ... ],\n  ...\n}'}
        style={{
          width: '100%',
          padding: '0.5rem 0.75rem',
          fontFamily: 'var(--ifm-font-family-monospace)',
          fontSize: '0.85rem',
          borderRadius: '4px',
          border: '1px solid var(--ifm-color-emphasis-400)',
          background: 'var(--ifm-background-color)',
          color: 'var(--ifm-font-color-base)',
          boxSizing: 'border-box',
          resize: 'vertical',
        }}
      />
      <p
        style={{
          fontSize: '0.85rem',
          color: toneColor,
          fontWeight: status.tone === 'wait' ? 400 : 600,
          marginTop: '0.5rem',
          marginBottom: 0,
        }}
      >
        {status.text}
      </p>
      {merged && (
        <pre
          style={{
            marginTop: '0.75rem',
            marginBottom: 0,
            fontSize: '0.8rem',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all',
          }}
        >
          {JSON.stringify(merged, null, 2)}
        </pre>
      )}
    </div>
  );
}
