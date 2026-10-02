import React from 'react';
import CodeValuesInput, { CODE_VALUE_FIELDS } from './CodeValuesInput';

/**
 * Asks for the Demo API key alone. Use this on a page whose code examples need
 * the key and nothing else. For a page that also names objects after the
 * reader, or that prompts for ids as the reader obtains them, use
 * <HackDayInputs /> instead.
 */
export default function ApiKeyInput(): JSX.Element {
  return <CodeValuesInput fields={[CODE_VALUE_FIELDS.apiKey]} />;
}
