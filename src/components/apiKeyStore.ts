import { useEffect, useState } from 'react';

/** The literal string that stands in for a Demo API key in code examples. */
export const API_KEY_PLACEHOLDER = 'sck_your_key_here';

let apiKey = '';
const listeners = new Set<() => void>();

/**
 * Holds the Demo API key the reader typed into <ApiKeyInput />. The swizzled
 * CodeBlock reads it, so the placeholder is replaced in the code React renders
 * rather than in the DOM afterwards. That keeps the copy button, which copies
 * the source string and not the rendered text, in sync with the code window.
 */
export function setApiKey(value: string): void {
  const next = value.trim();
  if (next === apiKey) {
    return;
  }
  apiKey = next;
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/**
 * Returns the current key and re-renders the caller when it changes. The first
 * render returns an empty string, which is what the server rendered, so
 * hydration matches. The effect then picks up a key that is already set, which
 * is the case for a code block that mounts later, such as a tab the reader
 * switches to after typing the key.
 */
export function useApiKey(): string {
  const [value, setValue] = useState('');
  useEffect(() => {
    setValue(apiKey);
    return subscribe(() => setValue(apiKey));
  }, []);
  return value;
}

/** Replaces the placeholder in `code` with `apiKey`, if a key is set. */
export function applyApiKey(code: string, key: string): string {
  if (!key) {
    return code;
  }
  return code.split(API_KEY_PLACEHOLDER).join(key);
}
