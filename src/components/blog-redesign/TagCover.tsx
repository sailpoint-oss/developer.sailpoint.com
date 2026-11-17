import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {tagIconPath} from './tagIcons';
import cover from './cover.module.css';

/**
 * A post cover: the SailPoint title-card gradient with an icon for the post's
 * tags. Lists use it in place of the forum title card, because that card only
 * repeats the post title.
 */
export default function TagCover({
  tags,
  className,
}: {
  tags: string[];
  className?: string;
}): JSX.Element {
  const src = useBaseUrl(tagIconPath(tags));
  return (
    <div className={clsx(cover.cover, className)} aria-hidden="true">
      <img className={cover.icon} src={src} alt="" loading="lazy" />
    </div>
  );
}
