import React, {useEffect, useMemo, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useHistory, useLocation} from '@docusaurus/router';
import Layout from '@theme/Layout';
import CommunityTheme from '../community/CommunityTheme';
import NotificationButton from '../community/NotificationButton';
import {formatLongDate} from './types';
import PlainCover from './PlainCover';
import {useLiveTopics} from './liveTopics';
import TagSearch from './TagSearch';
import styles from './styles.module.css';
import landing from './landing.module.css';

/**
 * The layout of the blog (/blog) and video (/videos) landing pages: a hero
 * with the newest item, then a search, tag filters and a grid of cards.
 *
 * The tag filters and the search live in the URL (?tag=forms&tag=apis&q=api),
 * so item pages can link to a filtered list and readers can share it.
 */

/** One card. The landing pages turn posts and videos into these. */
export interface ListingItem {
  id: number;
  path: string;
  title: string;
  excerpt: string;
  createdAt: string;
  tags: string[];
  comments: number;
  author: {name: string; username: string; avatar: string};
  /** Shown after the date in the byline, for example "7 min read". */
  detail?: string;
  /** A poster image. Without one, the card shows the tag cover. */
  thumbnail?: string | null;
  /** Shows a play button on the cover. */
  video?: boolean;
}

/** The words that differ between the blog and the video landing pages. */
export interface ListingCopy {
  /** The page <title> and meta description. */
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  lead: string;
  /** The forum category that the Subscribe button follows. */
  categoryId: number;
  /** The category path on the forum, for example "content/community-blog/125". */
  categoryPath: string;
  /** True when the items are videos. New topics from the forum get a play button. */
  video?: boolean;
  /** The noun in the Subscribe buttons, for example {one: 'blog', many: 'blogs'}. */
  subscribeNoun: {one: string; many: string};
  /** The item noun: {one: 'post', many: 'posts'}. */
  noun: {one: string; many: string};
  /** A color scheme class for the page, for example the video theme. */
  themeClassName?: string;
}

const MAX_TAG_FILTERS = 10;
/** Cards in the grid before "Load more": four rows of three. */
const PAGE_SIZE = 12;

/**
 * Splits the tags into the ones on every post and the rest, most used first.
 * A tag on every post does not help to filter or to tell posts apart, so the
 * page does not show it.
 */
function groupTags(posts: ListingItem[]): {
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

function matches(post: ListingItem, query: string, tags: string[]): boolean {
  if (!tags.every((tag) => post.tags.includes(tag))) return false;
  const words = searchWords(query);
  if (words.length === 0) return true;
  const haystack = [post.title, post.excerpt, post.author.name, ...post.tags]
    .join(' ')
    .toLowerCase();
  return words.every((word) => haystack.includes(word));
}

function Cover({post, className}: {post: ListingItem; className: string}) {
  if (!post.thumbnail) return <PlainCover className={className} />;
  return (
    <div className={clsx(className, landing.thumb)} aria-hidden="true">
      <img src={post.thumbnail} alt="" loading="lazy" />
      {post.video && (
        <span className={landing.play}>
          <i className="fa-solid fa-play" />
        </span>
      )}
    </div>
  );
}

function Byline({post}: {post: ListingItem}) {
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
          {post.detail && (
            <>
              <span aria-hidden="true">·</span>
              <span>{post.detail}</span>
            </>
          )}
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

/** The newest item, as a card in the hero banner. */
function FeaturedCard({post}: {post: ListingItem}) {
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
  post: ListingItem;
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

export default function ListingPage({
  items,
  copy,
}: {
  /** Newest first. */
  items: ListingItem[];
  copy: ListingCopy;
}): JSX.Element {
  // The build items, plus newer topics from the forum after the page opens.
  const posts = useLiveTopics(items, copy.categoryPath, Boolean(copy.video));
  const noun = (count: number) => (count === 1 ? copy.noun.one : copy.noun.many);
  const [query, setQuery] = useState('');
  const {common, popular} = useMemo(() => groupTags(posts), [posts]);

  // The static HTML has no query string. Read it after the first render, so
  // the first client render matches the server HTML.
  const location = useLocation();
  const history = useHistory();
  const [search, setSearch] = useState('');
  useEffect(() => setSearch(location.search), [location.search]);
  const params = new URLSearchParams(search);
  const selected = [...new Set(params.getAll('tag'))];
  // The effects below compare the tags as one string.
  const tagKey = selected.join(',');

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

  const setSelected = (tags: string[]) => {
    // Read the URL, not `search`: a tag chosen right after typing must keep
    // the latest ?q=.
    const next = new URLSearchParams(window.location.search);
    next.delete('tag');
    for (const tag of tags) next.append('tag', tag);
    const text = next.toString();
    history.replace({search: text ? `?${text}` : ''});
  };
  const clearFilters = () => {
    setQuery('');
    history.replace({search: ''});
  };

  const words = searchWords(query);
  const filtering = Boolean(words.length || selected.length);
  const results = posts.filter((post) => matches(post, query.trim(), selected));
  // Without a filter, the newest post is the large card and the grid shows the rest.
  const [featured, ...rest] = posts;
  const grid = filtering ? results : rest;
  // A new search or tag starts again at the first page.
  const [shown, setShown] = useState(PAGE_SIZE);
  useEffect(() => setShown(PAGE_SIZE), [query, tagKey]);

  return (
    <Layout title={copy.title} description={copy.description}>
      <CommunityTheme className={clsx(styles.root, landing.page, copy.themeClassName)}>
        <section className={landing.hero}>
          <div className={clsx(styles.container, landing.heroGrid)}>
            <div className={landing.heroText}>
              <p className={landing.eyebrow}>{copy.eyebrow}</p>
              <h1 className={landing.heroTitle}>{copy.heading}</h1>
              <p className={landing.heroLead}>{copy.lead}</p>
              <div className={landing.heroActions}>
                <NotificationButton
                  target={{type: 'category', id: copy.categoryId}}
                  appearance="inverse"
                  noun={copy.subscribeNoun}
                />
              </div>
            </div>
            {featured && <FeaturedCard post={featured} />}
          </div>
        </section>

        <div className={styles.container}>
          <h2 className={landing.sectionTitle}>
            {filtering ? 'Results' : `Recent ${copy.noun.many}`}
          </h2>

          {/* Sticks under the navbar, so the filters stay next to the cards
              they change. */}
          <TagSearch
            items={posts}
            hiddenTags={common}
            popular={popular}
            query={query}
            onQueryChange={setQuery}
            selected={selected}
            onSelectedChange={setSelected}
            noun={copy.noun.many}
          />

          {filtering && (
            <div className={landing.resultBar}>
              <p className={landing.resultText} aria-live="polite">
                <strong>{results.length}</strong>{' '}
                {noun(results.length)}
                {words.length > 0 && (
                  <>
                    {' '}
                    matching <strong>“{query.trim()}”</strong>
                  </>
                )}
                {selected.length > 0 && (
                  <>
                    {' '}
                    tagged{' '}
                    {selected.map((name, i) => (
                      <React.Fragment key={name}>
                        {i > 0 && (i === selected.length - 1 ? ' and ' : ', ')}
                        <strong>{name}</strong>
                      </React.Fragment>
                    ))}
                  </>
                )}
                <button
                  type="button"
                  className={landing.clearLink}
                  onClick={clearFilters}>
                  Clear
                </button>
              </p>
              {/* Discourse follows one tag at a time. */}
              {selected.length === 1 && (
                <NotificationButton
                  target={{type: 'tag', name: selected[0]}}
                  noun={copy.subscribeNoun}
                  size="small"
                  align="end"
                />
              )}
            </div>
          )}

          {grid.length > 0 ? (
            <div className={landing.grid}>
              {grid.slice(0, shown).map((post) => (
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
              <p>No {copy.noun.many} match your search.</p>
              <button
                type="button"
                className={landing.filter}
                onClick={clearFilters}>
                Clear filters
              </button>
            </div>
          )}
          {shown < grid.length && (
            <div className={landing.more}>
              <button
                type="button"
                className={landing.moreButton}
                onClick={() => setShown(shown + PAGE_SIZE)}>
                Load more {copy.noun.many}
              </button>
              <span>
                Showing {shown} of {grid.length}
              </span>
            </div>
          )}
        </div>
      </CommunityTheme>
    </Layout>
  );
}
