import React, {useCallback, useContext, useEffect, useState} from 'react';
import CodeBlock from '@theme/CodeBlock';
import Mermaid from '@theme/Mermaid';
import type {BodyNode} from './types';
import type {CommunityLinks} from './links';
import {CommunityLinksContext} from './links';
import styles from './richtext.module.css';

const VOID_TAGS = new Set(['br', 'hr', 'img', 'input', 'col', 'source', 'wbr']);

const ATTR_NAMES: Record<string, string> = {
  class: 'className',
  for: 'htmlFor',
  srcset: 'srcSet',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  tabindex: 'tabIndex',
  'aria-label': 'aria-label',
  allowfullscreen: 'allowFullScreen',
  frameborder: 'frameBorder',
  crossorigin: 'crossOrigin',
  referrerpolicy: 'referrerPolicy',
};

/** Turns `color: red; padding: 4px` into a React style object. */
function parseStyle(value: string): React.CSSProperties {
  const style: Record<string, string> = {};
  for (const declaration of value.split(';')) {
    const index = declaration.indexOf(':');
    if (index < 0) continue;
    const prop = declaration.slice(0, index).trim();
    const val = declaration.slice(index + 1).trim();
    if (!prop || !val) continue;
    const key = prop.startsWith('--')
      ? prop
      : prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    style[key] = val;
  }
  return style as React.CSSProperties;
}

function toProps(attrs: Record<string, string | undefined> = {}, key: React.Key, links: CommunityLinks) {
  const props: Record<string, unknown> = {key};
  for (const [name, value] of Object.entries(attrs)) {
    if (value === undefined) continue;
    if (name === 'style') props.style = parseStyle(value);
    else props[ATTR_NAMES[name] ?? name] = value;
  }
  if (typeof props.href === 'string') {
    const link = links.resolveHref(props.href);
    props.href = link.href;
    // Links that leave developer.sailpoint.com open in a new tab.
    if (link.external) {
      props.target = '_blank';
      props.rel = 'noopener noreferrer';
    }
  }
  return props;
}

interface LightboxImage {
  full: string;
  alt: string;
}

interface RenderContext {
  openImage: (img: LightboxImage) => void;
  links: CommunityLinks;
}

function renderNodes(nodes: BodyNode[] | undefined, ctx: RenderContext, keyPrefix = ''): React.ReactNode[] {
  return (nodes ?? []).map((node, index) => {
    const key = `${keyPrefix}${index}`;
    if (typeof node === 'string') return node;
    const {t: tag, a = {}, c} = node;

    if (tag === 'codeblock') {
      return (
        <div className={styles.codeBlock} key={key}>
          <CodeBlock language={a.lang === 'text' ? undefined : a.lang}>
            {a.value ?? ''}
          </CodeBlock>
        </div>
      );
    }

    if (tag === 'mermaid') {
      return (
        <div className={styles.mermaid} key={key}>
          <Mermaid value={a.value ?? ''} />
        </div>
      );
    }

    if (tag === 'lightbox') {
      return (
        <button
          type="button"
          key={key}
          className={styles.lightbox}
          onClick={() => ctx.openImage({full: a.full ?? a.src ?? '', alt: a.alt ?? ''})}
          aria-label={`Open image: ${a.alt || 'image'}`}>
          <img
            src={a.src}
            srcSet={a.srcSet}
            alt={a.alt}
            width={a.width}
            height={a.height}
            loading="lazy"
          />
        </button>
      );
    }

    // Heading anchors: show a link icon on hover.
    if (/^h[2-4]$/.test(tag) && a.id) {
      return React.createElement(
        tag,
        {key, id: a.id, className: styles.heading},
        ...renderNodes(c, ctx, `${key}-`),
        <a
          key="anchor"
          className={styles.headingAnchor}
          href={`#${a.id}`}
          aria-label="Link to this section">
          #
        </a>,
      );
    }

    // @mentions point at forum profiles. Link members who have a page on this
    // section of the site. Show the others as a name without a link.
    if (tag === 'a' && (a.class ?? '').split(' ').includes('mention')) {
      const username = decodeURIComponent(a.href?.match(/\/u\/([^/?#]+)/)?.[1] ?? '');
      const profile = ctx.links.profileHref(username);
      if (profile) {
        return (
          <a key={key} className="mention" href={profile}>
            {renderNodes(c, ctx, `${key}-`)}
          </a>
        );
      }
      return (
        <span key={key} className="mention">
          {renderNodes(c, ctx, `${key}-`)}
        </span>
      );
    }

    if (tag === 'img') {
      return React.createElement('img', {...toProps(a, key, ctx.links), loading: 'lazy'});
    }

    if (VOID_TAGS.has(tag)) return React.createElement(tag, toProps(a, key, ctx.links));

    return React.createElement(tag, toProps(a, key, ctx.links), ...renderNodes(c, ctx, `${key}-`));
  });
}

/** Full-screen image viewer. Closes on Escape or a click. */
function ImageViewer({image, onClose}: {image: LightboxImage; onClose: () => void}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  return (
    <div className={styles.viewer} role="dialog" aria-modal="true" aria-label={image.alt} onClick={onClose}>
      <img src={image.full} alt={image.alt} />
      <div className={styles.viewerBar}>
        <span>{image.alt}</span>
        <a href={image.full} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
          Open original <i className="fa-solid fa-arrow-up-right-from-square" />
        </a>
        <button type="button" onClick={onClose} aria-label="Close image">
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
    </div>
  );
}

interface RichTextProps {
  body: BodyNode[];
  variant?: 'article' | 'comment';
}

/**
 * Renders the body of a forum post (a snapshot tree from BodyNode). Use the
 * `comment` variant for comments and short text such as author bios.
 */
export default function RichText({body, variant = 'article'}: RichTextProps) {
  const [image, setImage] = useState<LightboxImage | null>(null);
  const close = useCallback(() => setImage(null), []);
  const links = useContext(CommunityLinksContext);

  return (
    <div className={variant === 'article' ? styles.prose : `${styles.prose} ${styles.proseComment}`}>
      {renderNodes(body, {openImage: setImage, links})}
      {image && <ImageViewer image={image} onClose={close} />}
    </div>
  );
}
