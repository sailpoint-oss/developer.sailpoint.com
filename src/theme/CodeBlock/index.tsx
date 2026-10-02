import React from 'react';
import OriginalCodeBlock from '@theme-original/CodeBlock';
import {
  applyCodeValues,
  useCodeValues,
} from '@site/src/components/codeValuesStore';

type Props = {
  children?: React.ReactNode;
  [key: string]: unknown;
};

/**
 * Wraps the theme's code block so placeholders are replaced in the code
 * itself, before it renders. The copy button copies the code string Docusaurus
 * was given and not the text in the DOM, so a replacement made in the DOM
 * afterwards shows in the code window but never gets copied.
 *
 * <CodeValuesInput /> holds the values. With none set, this is a pass-through.
 */
export default function CodeBlock({ children, ...props }: Props): JSX.Element {
  const values = useCodeValues();

  // A fenced code block gives one string child, but MDX can also pass several.
  // Anything else is React elements, which are left alone.
  const code =
    typeof children === 'string'
      ? children
      : Array.isArray(children) && children.every((child) => typeof child === 'string')
        ? children.join('')
        : undefined;

  if (code === undefined || Object.keys(values).length === 0) {
    return <OriginalCodeBlock {...props}>{children}</OriginalCodeBlock>;
  }

  return (
    <OriginalCodeBlock {...props}>
      {applyCodeValues(code, values)}
    </OriginalCodeBlock>
  );
}
