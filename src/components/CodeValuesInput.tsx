import React, { useEffect } from 'react';
import {
  ACCOUNT_ID_PLACEHOLDER,
  API_KEY_PLACEHOLDER,
  CONNECTION_ID_PLACEHOLDER,
  ENTITLEMENT_ID_PLACEHOLDER,
  GROUP_ID_PLACEHOLDER,
  NAME_PLACEHOLDER,
  clearCodeValues,
  setCodeValue,
  useCodeValues,
} from './codeValuesStore';

export type CodeValueField = {
  /** The placeholder string this field replaces in code examples. */
  placeholder: string;
  /** Label shown above the input. */
  label: string;
  /** Greyed-out example shown inside the empty input. */
  example: string;
  /** Used for the input's id, so the label points at it. */
  id: string;
};

/**
 * Every value a hack day page can ask a reader for, keyed by the short name
 * pages use. A value the reader only obtains partway through a track is
 * prompted for at the step that produces it, not up front.
 */
export const CODE_VALUE_FIELDS: Record<string, CodeValueField> = {
  apiKey: {
    placeholder: API_KEY_PLACEHOLDER,
    label: 'Your Demo API key',
    example: 'sck_...',
    id: 'demo-api-key-input',
  },
  name: {
    placeholder: NAME_PLACEHOLDER,
    label: 'Your name, as you want it on the objects you create',
    example: 'firstname.lastname',
    id: 'hack-name-input',
  },
  groupId: {
    placeholder: GROUP_ID_PLACEHOLDER,
    label: 'Your group id, from the response above',
    example: 'grp_a1b2c3d4e5f6',
    id: 'group-id-input',
  },
  accountId: {
    placeholder: ACCOUNT_ID_PLACEHOLDER,
    label: 'Your account id, from the response above',
    example: 'usr_a1b2c3d4e5f6',
    id: 'account-id-input',
  },
  entitlementId: {
    placeholder: ENTITLEMENT_ID_PLACEHOLDER,
    label: "The entitlement's id in the tenant, from the command above",
    example: 'ae735f40-4de9-4163-801d-4a1444e59d35',
    id: 'entitlement-id-input',
  },
  connectionId: {
    placeholder: CONNECTION_ID_PLACEHOLDER,
    label: 'Your connection id, from the response above',
    example: '6c692d9972f8400ca4560a68f62c4c5f',
    id: 'connection-id-input',
  },
};

// Counted so the values survive while any input on the page is still mounted,
// and are dropped only once the reader navigates away from all of them.
let mountedInputs = 0;

/**
 * Renders one text input per field. Filling one replaces every occurrence of
 * that field's placeholder inside the code blocks on the page, and clearing it
 * restores the placeholder.
 *
 * The replacement happens in the swizzled CodeBlock (src/theme/CodeBlock), so
 * the copy button copies the reader's values as well as the code window
 * showing them. Values are read back from the store rather than held locally,
 * so two of these on one page always agree.
 *
 * `compact` drops the surrounding card, for a single input sitting inline
 * between a response and the next command that needs a value out of it.
 */
export default function CodeValuesInput({
  fields,
  compact = false,
}: {
  fields: CodeValueField[];
  compact?: boolean;
}): JSX.Element {
  const values = useCodeValues();

  useEffect(() => {
    mountedInputs += 1;
    return () => {
      mountedInputs -= 1;
      if (mountedInputs === 0) {
        clearCodeValues();
      }
    };
  }, []);

  return (
    <div
      style={
        compact
          ? {
              margin: '1rem 0',
              paddingLeft: '0.9rem',
              borderLeft: '3px solid var(--ifm-color-primary)',
            }
          : {
              margin: '1.25rem 0',
              padding: '1rem 1.25rem',
              background: 'var(--ifm-code-background)',
              borderRadius: '8px',
              border: '1px solid var(--ifm-color-emphasis-300)',
            }
      }
    >
      {fields.map((field, index) => (
        <div
          key={field.placeholder}
          style={{ marginTop: index === 0 ? 0 : '0.9rem' }}
        >
          <label
            htmlFor={field.id}
            style={{
              display: 'block',
              fontWeight: 600,
              fontSize: compact ? '0.85rem' : undefined,
              marginBottom: '0.4rem',
            }}
          >
            {field.label}
          </label>
          <input
            id={field.id}
            type="text"
            value={values[field.placeholder] ?? ''}
            onChange={(e) => setCodeValue(field.placeholder, e.target.value)}
            placeholder={field.example}
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
        </div>
      ))}
      <p
        style={{
          fontSize: '0.8rem',
          color: 'var(--ifm-color-emphasis-600)',
          marginTop: '0.5rem',
          marginBottom: 0,
        }}
      >
        {compact
          ? 'Paste it here, and every later command fills itself in.'
          : 'Every code example on this page will update automatically, so you can copy them straight out.'}
      </p>
    </div>
  );
}
