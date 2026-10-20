import React, { useEffect, useState } from 'react';
import { setApiKey as publishApiKey } from './apiKeyStore';

/**
 * Renders a text input that, when filled, replaces every occurrence of the
 * placeholder string inside code blocks on the page with the entered API key.
 * Clearing the field restores the original placeholder.
 *
 * The replacement happens in the swizzled CodeBlock (src/theme/CodeBlock), so
 * the copy button copies the key as well as the code window showing it.
 */
export default function ApiKeyInput(): JSX.Element {
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    publishApiKey(apiKey);
  }, [apiKey]);

  // The key lives in a module-level store, so clear it when the reader leaves
  // this page. Other pages must keep their placeholders.
  useEffect(() => () => publishApiKey(''), []);

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
