import { useEffect, useState } from 'react';

/** The literal strings that stand in for a reader's own values in code examples. */
export const API_KEY_PLACEHOLDER = 'sck_your_key_here';
export const NAME_PLACEHOLDER = 'yourname';
export const GROUP_ID_PLACEHOLDER = 'grp_your_group_id';
export const ACCOUNT_ID_PLACEHOLDER = 'usr_your_account_id';
export const ENTITLEMENT_ID_PLACEHOLDER = 'your-entitlement-id-from-step-5';
export const CONNECTION_ID_PLACEHOLDER = 'your-connection-id-from-step-8';
/** Replaced with a JSON array, built by <JitPolicyMerge /> from a pasted policy. */
export const MERGED_ENTITLEMENT_IDS_PLACEHOLDER = 'your-merged-entitlement-ids';

type Values = Readonly<Record<string, string>>;

const EMPTY: Values = Object.freeze({});

let values: Values = EMPTY;
const listeners = new Set<() => void>();

/**
 * Holds the values a reader typed into <CodeValuesInput />, keyed by the
 * placeholder each one replaces. The swizzled CodeBlock reads them, so
 * placeholders are replaced in the code React renders rather than in the DOM
 * afterwards. That keeps the copy button, which copies the source string and
 * not the rendered text, in sync with the code window.
 */
export function setCodeValue(placeholder: string, value: string): void {
  const next = value.trim();
  if ((values[placeholder] ?? '') === next) {
    return;
  }
  const updated: Record<string, string> = { ...values };
  if (next) {
    updated[placeholder] = next;
  } else {
    delete updated[placeholder];
  }
  values = Object.freeze(updated);
  listeners.forEach((listener) => listener());
}

/**
 * Drops every value, restoring the placeholders. Called when the last input on
 * a page unmounts, because other pages must keep their placeholders.
 */
export function clearCodeValues(): void {
  if (values === EMPTY) {
    return;
  }
  values = EMPTY;
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/**
 * Returns the current values and re-renders the caller when they change. The
 * first render returns nothing, which is what the server rendered, so
 * hydration matches. The effect then picks up values that are already set,
 * which is the case for a code block that mounts later, such as one inside a
 * details block the reader opens after typing.
 */
export function useCodeValues(): Values {
  const [snapshot, setSnapshot] = useState<Values>(EMPTY);
  useEffect(() => {
    setSnapshot(values);
    return subscribe(() => setSnapshot(values));
  }, []);
  return snapshot;
}

/** Replaces every placeholder in `code` that has a value set. */
export function applyCodeValues(code: string, current: Values): string {
  // Longest placeholder first, so one that contains another is replaced whole.
  return Object.keys(current)
    .sort((a, b) => b.length - a.length)
    .reduce(
      (result, placeholder) => result.split(placeholder).join(current[placeholder]),
      code,
    );
}
