import React, {useEffect, useMemo, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useHistory, useLocation} from '@docusaurus/router';
import Layout from '@theme/Layout';
import CommunityTheme from '../community/CommunityTheme';
import NotificationButton from '../community/NotificationButton';
import type {PostSummary} from './types';
import {BLOG_CATEGORY_ID, formatLongDate} from './types';
import TagCover from './TagCover';
import styles from './styles.module.css';
import landing from './landing.module.css';

/**
 * The blog landing page at /blog-redesign. The blog-redesign plugin passes
 * every saved post as `posts`, newest first.
 *
 * The tag filter and the search live in the URL (?tag=forms&q=api), so post
 * pages can link to a filtered list and readers can share it.
 */

const MAX_TAG_FILTERS = 10;

/**
 * Splits the tags into the ones on every post and the rest, most used first.
 * A tag on every post does not help to filter or to tell posts apart, so the
 * page does not show it.
 */
function groupTags(posts: PostSummary[]): {
  common: Set<string>;
  popular: string[];
} {
  const counts = new Map<string, number>();
  for (const post of posts)
    for (const tag of post.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  const common = new Set(
    [...counts]
      .filter(([, count]) => count === posts.length)
      .map(([tag]) => tag),
  );
  const popular = [...counts]
    .filter(([tag]) => !common.has(tag))
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, MAX_TAG_FILTERS)
    .map(([tag]) => tag);
  return {common, popular};
}

/** The words of a search, lowercase. */
function searchWords(query: string): string[] {
  return query.trim().toLowerCase().split(/\s+/).filter(Boolean);
}

/** Wraps the parts of `text` that match a search word in <mark>. */
function Highlight({text, words}: {text: string; words: string[]}) {
  if (words.length === 0) return <>{text}</>;
  const escaped = words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const parts = text.split(new RegExp(`(${escaped.join('|')})`, 'gi'));
  return (
    <>
      {parts.map((part, i) =>
        // split() with a capture group puts the matches at the odd indexes.
        i % 2 === 1 ? (
          <mark key={i} className={landing.match}>
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}

function matches(
  post: PostSummary,
  query: string,
  tag: string | null,
): boolean {
  if (tag && !post.tags.includes(tag)) return false;
  const words = searchWords(query);
  if (words.length === 0) return true;
  const haystack = [post.title, post.excerpt, post.author.name, ...post.tags]
    .join(' ')
    .toLowerCase();
  return words.every((word) => haystack.includes(word));
}

function Cover({post, className}: {post: PostSummary; className: string}) {
  return <TagCover tags={post.tags} className={className} />;
}

function Byline({post}: {post: PostSummary}) {
  return (
    <div className={landing.byline}>
      <img
        src={post.author.avatar}
        alt=""
        width={32}
        height={32}
        loading="lazy"
      />
      <div className={landing.bylineText}>
        <span className={landing.author}>{post.author.name}</span>
        <span className={landing.bylineMeta}>
          <time dateTime={post.createdAt} suppressHydrationWarning>
            {formatLongDate(post.createdAt)}
          </time>
          <span aria-hidden="true">·</span>
          <span>{post.readMinutes} min read</span>
        </span>
      </div>
      {post.comments > 0 && (
        <span className={landing.comments} title={`${post.comments} comments`}>
          <i className="fa-regular fa-comment" aria-hidden="true" />{' '}
          {post.comments}
        </span>
      )}
    </div>
  );
}

/** The newest post, as a card in the hero banner. */
function FeaturedCard({post}: {post: PostSummary}) {
  return (
    <Link to={post.path} className={landing.featured}>
      <Cover post={post} className={landing.featuredCover} />
      <div className={landing.featuredBody}>
        <h2 className={landing.featuredTitle}>{post.title}</h2>
        <p className={landing.featuredExcerpt}>{post.excerpt}</p>
        <Byline post={post} />
      </div>
    </Link>
  );
}

function PostCard({
  post,
  hiddenTags,
  words,
}: {
  post: PostSummary;
  hiddenTags: Set<string>;
  words: string[];
}) {
  const tags = post.tags.filter((tag) => !hiddenTags.has(tag)).slice(0, 2);
  return (
    <Link to={post.path} className={landing.card}>
      <Cover post={post} className={landing.cardCover} />
      <div className={landing.cardBody}>
        {tags.length > 0 && (
          <div className={landing.cardTags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className={landing.cardTitle}>
          <Highlight text={post.title} words={words} />
        </h3>
        <p className={clsx(landing.excerpt, landing.cardExcerpt)}>
          <Highlight text={post.excerpt} words={words} />
        </p>
        <Byline post={post} />
      </div>
    </Link>
  );
}

export default function LandingPage({
  posts,
}: {
  posts: PostSummary[];
}): JSX.Element {
  const [query, setQuery] = useState('');
  const {common, popular} = useMemo(() => groupTags(posts), [posts]);

  // The static HTML has no query string. Read it after the first render, so
  // the first client render matches the server HTML.
  const location = useLocation();
  const history = useHistory();
  const [search, setSearch] = useState('');
  useEffect(() => setSearch(location.search), [location.search]);
  const params = new URLSearchParams(search);
  const tag = params.get('tag');

  // Read the search from the URL once, when the page opens. After that the
  // input is the source, and the effect below copies it to the URL. Reading
  // the URL on every change would undo keystrokes made during the delay.
  useEffect(() => {
    setQuery(new URLSearchParams(window.location.search).get('q') ?? '');
  }, []);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const next = new URLSearchParams(window.location.search);
      const value = query.trim();
      if ((next.get('q') ?? '') === value) return;
      if (value) next.set('q', value);
      else next.delete('q');
      const text = next.toString();
      history.replace({search: text ? `?${text}` : ''});
    }, 300);
    return () => window.clearTimeout(timer);
  }, [query, history]);

  const setTag = (value: string | null) => {
    const next = new URLSearchParams(search);
    if (value) next.set('tag', value);
    else next.delete('tag');
    const text = next.toString();
    history.replace({search: text ? `?${text}` : ''});
  };
  const clearFilters = () => {
    setQuery('');
    history.replace({search: ''});
  };

  // A tag from a post page can be one that the chips do not show.
  const tags = tag && !popular.includes(tag) ? [tag, ...popular] : popular;

  const words = searchWords(query);
  const filtering = Boolean(words.length || tag);
  const results = posts.filter((post) => matches(post, query.trim(), tag));
  // Without a filter, the newest post is the large card and the grid shows the rest.
  const [featured, ...rest] = posts;
  const grid = filtering ? results : rest;

  return (
    <Layout
      title="Community Blog"
      description="Guides and lessons from the SailPoint developer community.">
      <CommunityTheme className={clsx(styles.root, landing.page)}>
        <section className={landing.hero}>
          <div className={clsx(styles.container, landing.heroGrid)}>
            <div className={landing.heroText}>
              <p className={landing.eyebrow}>Community Blog</p>
              <h1 className={landing.heroTitle}>
                Learn from people who build with SailPoint
              </h1>
              <p className={landing.heroLead}>
                Guides, solutions and lessons learned from developers and
                identity professionals in the SailPoint community.
              </p>
              <div className={landing.heroActions}>
                <NotificationButton
                  target={{type: 'category', id: BLOG_CATEGORY_ID}}
                  appearance="inverse"
                  description="New posts on the Community Blog"
                />
              </div>
            </div>
            {featured && <FeaturedCard post={featured} />}
          </div>
        </section>

        <div className={styles.container}>
          <h2 className={landing.sectionTitle}>
            {filtering ? 'Results' : 'Recent posts'}
          </h2>

          {/* Sticks under the navbar, so the filters stay next to the posts
              they change. */}
          <div className={landing.toolbar}>
            <label className={landing.search}>
              <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
              <input
                type="search"
                placeholder="Search posts"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Escape' && setQuery('')}
                aria-label="Search posts"
              />
              {query && (
                <button
                  type="button"
                  className={landing.searchClear}
                  onClick={() => setQuery('')}
                  aria-label="Clear search">
                  <i className="fa-solid fa-xmark" aria-hidden="true" />
                </button>
              )}
            </label>
            <div
              className={landing.filters}
              role="group"
              aria-label="Filter by tag">
              <button
                type="button"
                className={clsx(landing.filter, !tag && landing.filterActive)}
                aria-pressed={!tag}
                onClick={() => setTag(null)}>
                All
              </button>
              {tags.map((name) => (
                <button
                  key={name}
                  type="button"
                  className={clsx(
                    landing.filter,
                    tag === name && landing.filterActive,
                  )}
                  aria-pressed={tag === name}
                  onClick={() => setTag(tag === name ? null : name)}>
                  {name}
                </button>
              ))}
            </div>
          </div>

          {filtering && (
            <div className={landing.resultBar}>
              <p className={landing.resultText} aria-live="polite">
                <strong>{results.length}</strong>{' '}
                {results.length === 1 ? 'post' : 'posts'}
                {words.length > 0 && (
                  <>
                    {' '}
                    matching <strong>“{query.trim()}”</strong>
                  </>
                )}
                {tag && (
                  <>
                    {' '}
                    tagged <strong>{tag}</strong>
                  </>
                )}
                <button
                  type="button"
                  className={landing.clearLink}
                  onClick={clearFilters}>
                  Clear
                </button>
              </p>
              {tag && (
                <NotificationButton
                  target={{type: 'tag', name: tag}}
                  label={`Subscribe to ${tag}`}
                  subscribedLabel={`Subscribed to ${tag}`}
                  size="small"
                  align="end"
                  description={`New posts tagged ${tag}`}
                />
              )}
            </div>
          )}

          {grid.length > 0 ? (
            <div className={landing.grid}>
              {grid.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  hiddenTags={common}
                  words={words}
                />
              ))}
            </div>
          ) : (
            <div className={landing.empty}>
              <p>No posts match your search.</p>
              <button
                type="button"
                className={landing.filter}
                onClick={clearFilters}>
                Clear filters
              </button>
            </div>
          )}
        </div>
      </CommunityTheme>
    </Layout>
  );
}
