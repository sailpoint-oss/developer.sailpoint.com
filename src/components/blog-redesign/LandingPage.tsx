import React, {useEffect, useMemo, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useHistory, useLocation} from '@docusaurus/router';
import Layout from '@theme/Layout';
import type {PostSummary} from './types';
import {formatLongDate} from './types';
import styles from './styles.module.css';
import landing from './landing.module.css';

/**
 * The blog landing page at /blog-redesign. The blog-redesign plugin passes
 * every saved post as `posts`, newest first.
 *
 * The tag and author filters live in the URL (?tag=forms, ?author=username),
 * so post pages can link to a filtered list and readers can share it.
 */

const MAX_TAG_FILTERS = 10;

/**
 * Splits the tags into the ones on every post and the rest, most used first.
 * A tag on every post does not help to filter or to tell posts apart, so the
 * page does not show it.
 */
function groupTags(posts: PostSummary[]): {common: Set<string>; popular: string[]} {
  const counts = new Map<string, number>();
  for (const post of posts) for (const tag of post.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  const common = new Set([...counts].filter(([, count]) => count === posts.length).map(([tag]) => tag));
  const popular = [...counts]
    .filter(([tag]) => !common.has(tag))
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, MAX_TAG_FILTERS)
    .map(([tag]) => tag);
  return {common, popular};
}

interface Filters {
  query: string;
  tag: string | null;
  author: string | null;
}

function matches(post: PostSummary, {query, tag, author}: Filters): boolean {
  if (tag && !post.tags.includes(tag)) return false;
  if (author && post.author.username !== author) return false;
  if (!query) return true;
  const haystack = [post.title, post.excerpt, post.author.name, ...post.tags].join(' ').toLowerCase();
  return query
    .toLowerCase()
    .split(/\s+/)
    .every((word) => haystack.includes(word));
}

function Cover({post, className}: {post: PostSummary; className: string}) {
  return post.hero ? (
    <img className={className} src={post.hero.src} alt="" loading="lazy" />
  ) : (
    <div className={clsx(className, landing.coverFallback)} aria-hidden="true">
      <i className="fa-solid fa-feather-pointed" />
    </div>
  );
}

function Byline({post}: {post: PostSummary}) {
  return (
    <div className={landing.byline}>
      <img src={post.author.avatar} alt="" width={32} height={32} loading="lazy" />
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
          <i className="fa-regular fa-comment" aria-hidden="true" /> {post.comments}
        </span>
      )}
    </div>
  );
}

function FeaturedCard({post}: {post: PostSummary}) {
  return (
    <Link to={post.path} className={landing.featured}>
      <Cover post={post} className={landing.featuredCover} />
      <div className={landing.featuredBody}>
        <span className={landing.label}>Latest post</span>
        <h2 className={landing.featuredTitle}>{post.title}</h2>
        <p className={landing.excerpt}>{post.excerpt}</p>
        <Byline post={post} />
      </div>
    </Link>
  );
}

function PostCard({post, hiddenTags}: {post: PostSummary; hiddenTags: Set<string>}) {
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
        <h3 className={landing.cardTitle}>{post.title}</h3>
        <p className={clsx(landing.excerpt, landing.cardExcerpt)}>{post.excerpt}</p>
        <Byline post={post} />
      </div>
    </Link>
  );
}

export default function LandingPage({posts}: {posts: PostSummary[]}): JSX.Element {
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
  const author = params.get('author');
  const authorName = posts.find((p) => p.author.username === author)?.author.name ?? author;

  const setParam = (name: 'tag' | 'author', value: string | null) => {
    const next = new URLSearchParams(search);
    if (value) next.set(name, value);
    else next.delete(name);
    const text = next.toString();
    history.replace({search: text ? `?${text}` : ''});
  };
  const setTag = (value: string | null) => setParam('tag', value);
  const clearFilters = () => {
    setQuery('');
    history.replace({search: ''});
  };

  // A tag from a post page can be one that the chips do not show.
  const tags = tag && !popular.includes(tag) ? [tag, ...popular] : popular;

  const filtering = Boolean(query.trim() || tag || author);
  const results = posts.filter((post) => matches(post, {query: query.trim(), tag, author}));
  // Without a filter, the newest post is the large card and the grid shows the rest.
  const [featured, ...rest] = posts;
  const grid = filtering ? results : rest;

  return (
    <Layout title="Community Blog" description="Guides and lessons from the SailPoint developer community.">
      <div className={clsx(styles.root, landing.page)}>
        <section className={landing.hero}>
          <div className={styles.container}>
            <p className={landing.eyebrow}>Community Blog</p>
            <h1 className={landing.heroTitle}>Learn from people who build with SailPoint</h1>
            <p className={landing.heroLead}>
              Guides, solutions and lessons learned from developers and identity professionals in the SailPoint
              community.
            </p>
            <div className={landing.heroActions}>
              <label className={landing.search}>
                <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
                <input
                  type="search"
                  placeholder="Search posts"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search posts"
                />
              </label>
            </div>
          </div>
        </section>

        <div className={styles.container}>
          {!filtering && featured && <FeaturedCard post={featured} />}

          <div className={landing.toolbar}>
            <h2 className={landing.sectionTitle}>
              {author ? `Posts by ${authorName}` : filtering ? 'Results' : 'Recent posts'}
            </h2>
            <div className={landing.filters} role="group" aria-label="Filter by tag">
              {author && (
                <button
                  type="button"
                  className={clsx(landing.filter, landing.filterActive)}
                  onClick={() => setParam('author', null)}
                  aria-label={`Remove filter: posts by ${authorName}`}>
                  {authorName} <i className="fa-solid fa-xmark" aria-hidden="true" />
                </button>
              )}
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
                  className={clsx(landing.filter, tag === name && landing.filterActive)}
                  aria-pressed={tag === name}
                  onClick={() => setTag(tag === name ? null : name)}>
                  {name}
                </button>
              ))}
            </div>
          </div>

          {filtering && (
            <p className={styles.muted} aria-live="polite">
              {results.length} {results.length === 1 ? 'post' : 'posts'}
            </p>
          )}

          {grid.length > 0 ? (
            <div className={landing.grid}>
              {grid.map((post) => (
                <PostCard key={post.id} post={post} hiddenTags={common} />
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
      </div>
    </Layout>
  );
}
