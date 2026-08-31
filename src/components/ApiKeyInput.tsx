import React, { useEffect, useRef, useState } from 'react';

const PLACEHOLDER = 'sck_your_key_here';

/**
 * Renders a text input that, when filled, replaces every occurrence of the
 * placeholder string inside code blocks on the page with the entered API key.
 * Clearing the field restores the original placeholder.
 */
export default function ApiKeyInput(): JSX.Element {
  const [apiKey, setApiKey] = useState('');
  // Tracks what value is currently written into the DOM so we can replace it
  // on the next keystroke rather than always hunting for the static placeholder.
  const liveValueRef = useRef<string>(PLACEHOLDER);

  useEffect(() => {
    const next = apiKey.trim() || PLACEHOLDER;
    const prev = liveValueRef.current;

    if (next === prev) return;

    // Walk every text node in the document body and replace in-place.
    // Prism keeps each syntax token as its own text node so the placeholder
    // will always appear as a complete substring within a single text node.
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const hits: Text[] = [];
    let node = walker.nextNode();
    while (node) {
      if ((node as Text).nodeValue?.includes(prev)) {
        hits.push(node as Text);
      }
      node = walker.nextNode();
    }

    const escaped = prev.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    hits.forEach((n) => {
      n.nodeValue = n.nodeValue!.replace(new RegExp(escaped, 'g'), next);
    });

    liveValueRef.current = next;
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
