import React from 'react';
import CodeValuesInput, { CODE_VALUE_FIELDS } from './CodeValuesInput';

/**
 * Asks a reader for values that fill in the code examples on a hack day track.
 *
 * With no props it asks for the two values a reader has before they start: the
 * demo API key, and the name that goes on the objects they create in a shared
 * tenant. Pass `fields` with a space-separated list of names from
 * CODE_VALUE_FIELDS to prompt for an id at the step that produces it, for
 * example `<HackDayInputs fields="groupId" compact />`.
 */
export default function HackDayInputs({
  fields = 'apiKey name',
  compact = false,
}: {
  fields?: string;
  compact?: boolean;
}): JSX.Element {
  const selected = fields
    .trim()
    .split(/\s+/)
    .map((name) => {
      const field = CODE_VALUE_FIELDS[name];
      if (!field) {
        throw new Error(
          `Unknown code value field "${name}". Known fields: ${Object.keys(
            CODE_VALUE_FIELDS,
          ).join(', ')}.`,
        );
      }
      return field;
    });

  return <CodeValuesInput fields={selected} compact={compact} />;
}
