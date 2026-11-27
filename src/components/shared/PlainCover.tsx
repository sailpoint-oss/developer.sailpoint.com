import React from 'react';
import clsx from 'clsx';
import cover from './cover.module.css';

/**
 * The cover of a post or video that has no image on Discourse: the gradient
 * of the SailPoint blog title cards.
 */
export default function PlainCover({className}: {className?: string}): JSX.Element {
  return <div className={clsx(cover.cover, className)} aria-hidden="true" />;
}
