import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import type {TocEntry} from './types';
import styles from './styles.module.css';

/** Distance from the top of the viewport where a section counts as "current". */
const ACTIVE_OFFSET = 140;

export default function TableOfContents({entries}: {entries: TocEntry[]}) {
  const [active, setActive] = useState(entries[0]?.id);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = entries[0]?.id;
      for (const entry of entries) {
        const el = document.getElementById(entry.id);
        if (el && el.getBoundingClientRect().top <= ACTIVE_OFFSET) current = entry.id;
      }
      // At the bottom of the page the last section can never reach the offset.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) current = entries[entries.length - 1]?.id;
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, {passive: true});
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [entries]);

  return (
    <nav className={styles.toc} aria-label="On this page">
      <div className={styles.tocTitle}>On this page</div>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <a
              href={`#${entry.id}`}
              className={clsx(styles.tocLink, active === entry.id && styles.tocLinkActive)}
              aria-current={active === entry.id ? 'location' : undefined}>
              {entry.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
