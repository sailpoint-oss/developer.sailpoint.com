import React from 'react';
import clsx from 'clsx';
import theme from './theme.module.css';

/**
 * Applies the community design: colors for light and dark mode, and the page
 * font. Every community component must be inside it.
 */
export default function CommunityTheme({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}): JSX.Element {
  return <div className={clsx(theme.theme, className)}>{children}</div>;
}
