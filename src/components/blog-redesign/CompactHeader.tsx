import React, {useEffect, useState} from 'react';
// @ts-expect-error -- @types/react-dom is not installed in this repo.
import {createPortal} from 'react-dom';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {BLOG_PATH, tagPath} from './links';
import styles from './styles.module.css';

const HTML_CLASS = 'blog-redesign-compact';

interface CompactHeaderProps {
  /** The element that, once scrolled out of view, turns the compact header on. */
  watch: React.RefObject<HTMLElement>;
  title: string;
  tags: string[];
}

/**
 * Puts the post title, categories and tags into the site navbar after the
 * reader scrolls past the page title. The navbar logo is hidden while the
 * compact header shows (see the global rules in styles.module.css).
 */
export default function CompactHeader({watch, title, tags}: CompactHeaderProps) {
  const [host, setHost] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const logo = useBaseUrl('/img/SailPoint-Logo-RGB-Color.svg');
  const logoDark = useBaseUrl('/img/SailPoint-Logo-RGB-Inverse.svg');

  // Mount a container at the start of the left navbar items.
  useEffect(() => {
    const items = document.querySelector('.navbar__inner .navbar__items:not(.navbar__items--right)');
    if (!items) return undefined;
    const el = document.createElement('div');
    el.className = styles.compactHost;
    items.insertBefore(el, items.firstChild);
    setHost(el);
    return () => {
      el.remove();
      document.documentElement.classList.remove(HTML_CLASS);
    };
  }, []);

  useEffect(() => {
    const target = watch.current;
    if (!target) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      {rootMargin: '-60px 0px 0px 0px'},
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [watch]);

  useEffect(() => {
    document.documentElement.classList.toggle(HTML_CLASS, visible);
  }, [visible]);

  if (!host) return null;

  return createPortal(
    <div className={styles.compact} aria-hidden={!visible}>
      <button
        type="button"
        className={styles.compactLogo}
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        aria-label="Back to top"
        tabIndex={visible ? 0 : -1}>
        <img src={logo} alt="" className={styles.logoLight} />
        <img src={logoDark} alt="" className={styles.logoDark} />
      </button>
      <div className={styles.compactText}>
        <div className={styles.compactTitle} title={title}>
          {title}
        </div>
        <div className={styles.compactMeta}>
          <Link to={BLOG_PATH} className={styles.categoryBadge} tabIndex={visible ? 0 : -1}>
            <span className={styles.categorySwatch} />
            Community Blog
          </Link>
          {tags.map((tag) => (
            <Link key={tag} to={tagPath(tag)} className={styles.tagSmall} tabIndex={visible ? 0 : -1}>
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>,
    host,
  );
}
