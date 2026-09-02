import React, { useEffect, useRef, useState } from 'react';

const PLACEHOLDER = 'sck_your_key_here';

/**
 * Renders a text input that, when filled, replaces every occurrence of the
 * placeholder string inside code blocks on the page with the entered API key.
 * Clearing the field restores the original placeholder.
 */
export default function ApiKeyInput(): JSX.Element {
  const [apiKey, setApiKey] = useState('');
  // Text node -> its original text, captured the first time we see the
  // placeholder in it. Every update rewrites from that original, so we never
  // search the page for a partially typed key: replacing the previous value
  // would turn a one-character key into a find-and-replace across all prose.
  const originalsRef = useRef<Map<Text, string>>(new Map());

  useEffect(() => {
    const next = apiKey.trim() || PLACEHOLDER;
    const originals = originalsRef.current;

    // Pick up any text node we have not seen yet. Newly mounted content -- a
    // tab the reader just switched to, for example -- still holds the
    // untouched placeholder. Prism keeps each syntax token in its own text
    // node, so the placeholder always appears whole within a single node.
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      const text = node as Text;
      if (!originals.has(text) && text.nodeValue?.includes(PLACEHOLDER)) {
        originals.set(text, text.nodeValue);
      }
    }

    originals.forEach((original, text) => {
      if (!text.isConnected) {
        originals.delete(text);
        return;
      }
      const replaced = original.split(PLACEHOLDER).join(next);
      if (text.nodeValue !== replaced) {
        text.nodeValue = replaced;
      }
    });
  }, [apiKey]);

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
        htmlFor="demo-api-key-input"
        style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}
      >
        Paste your Demo API key here
      </label>
      <input
        id="demo-api-key-input"
        type="text"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="sck_..."
        spellCheck={false}
        autoComplete="off"
        style={{
          width: '100%',
          padding: '0.5rem 0.75rem',
          fontFamily: 'var(--ifm-font-family-monospace)',
          fontSize: '0.9rem',
          borderRadius: '4px',
          border: '1px solid var(--ifm-color-emphasis-400)',
          background: 'var(--ifm-background-color)',
          color: 'var(--ifm-font-color-base)',
          boxSizing: 'border-box',
        }}
      />
      <p
        style={{
          fontSize: '0.8rem',
          color: 'var(--ifm-color-emphasis-600)',
          marginTop: '0.4rem',
          marginBottom: 0,
        }}
      >
        Every code example on this page will update automatically.
      </p>
    </div>
  );
}
