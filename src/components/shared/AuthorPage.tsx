import React, {useMemo, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import CommunityTheme from '../community/CommunityTheme';
import RichText from '../community/RichText';
import {CommunityLinksContext} from '../community/links';
import theme from '../community/theme.module.css';
import type {AuthorProfile, PostSummary, VideoSummary} from './types';
import {formatLongDate, formatMonthYear} from './types';
import {BLOG_PATH, VIDEOS_PATH, blogLinks, forumProfileUrl, tagPath, videoTagPath} from './links';
import PlainCover from './PlainCover';
import styles from './styles.module.css';
import author from './author.module.css';

/**
 * An author page at /blog/author/<username>. The discourse-content plugin passes
 * the forum profile as `author`, every post as `posts` and every video as
 * `videos`. The page lists the author's posts and videos.
 */

const PAGE_SIZE = 5;

/** Icon and label for the profile website. Most members link LinkedIn or GitHub. */
function websiteLink(url: string, name: string): {icon: string; label: string} {
  const host = (() => {
    try {
      return new URL(url).hostname.replace(/^www\./, '');
    } catch {
      return '';
    }
  })();
  // The host must be the domain or a subdomain of it. A plain endsWith check
  // also matches hosts such as "evilgithub.com".
  const isOn = (domain: string) => host === domain || host.endsWith(`.${domain}`);
  if (isOn('linkedin.com')) return {icon: 'fa-brands fa-linkedin', label: 'LinkedIn'};
  if (isOn('github.com')) return {icon: 'fa-brands fa-github', label: 'GitHub'};
  if (isOn('x.com') || isOn('twitter.com')) return {icon: 'fa-brands fa-x-twitter', label: 'X'};
  return {icon: 'fa-solid fa-globe', label: name || host};
}

type Tab = 'posts' | 'videos';

/** The tags of the author's posts or videos, most used first. */
function topics(posts: {tags: string[]}[]): {tag: string; count: number}[] {
  const counts = new Map<string, number>();
  for (const post of posts) for (const tag of post.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  return [...counts]
    .map(([tag, count]) => ({tag, count}))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

function PostRow({post}: {post: PostSummary}) {
  return (
    <article className={author.row}>
      <Link to={post.path} className={author.rowCover} tabIndex={-1} aria-hidden="true">
        {post.thumbnail ? (
          <span className={author.thumb}>
            <img src={post.thumbnail} alt="" loading="lazy" />
          </span>
        ) : (
          <PlainCover className={author.cover} />
        )}
      </Link>
      <div className={author.rowBody}>
        <div className={author.rowMeta}>
          <time dateTime={post.createdAt} suppressHydrationWarning>
            {formatLongDate(post.createdAt)}
          </time>
          <span aria-hidden="true">·</span>
          <span>{post.readMinutes} min read</span>
          <span className={author.counts}>
            <span title={`${post.comments} comments`}>
              <i className="fa-regular fa-comment" aria-hidden="true" /> {post.comments}
            </span>
            <span title={`${post.likes} likes`}>
              <i className="fa-regular fa-heart" aria-hidden="true" /> {post.likes}
            </span>
          </span>
        </div>
        <h3 className={author.rowTitle}>
          <Link to={post.path}>{post.title}</Link>
        </h3>
        <p className={author.rowExcerpt}>{post.excerpt}</p>
        <div className={author.rowTags}>
          {post.tags.map((tag) => (
            <Link key={tag} to={tagPath(tag)} className={styles.tag}>
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}

function VideoRow({video}: {video: VideoSummary}) {
  return (
    <article className={author.row}>
      <Link to={video.path} className={author.rowCover} tabIndex={-1} aria-hidden="true">
        {video.thumbnail ? (
          <span className={author.thumb}>
            <img src={video.thumbnail} alt="" loading="lazy" />
            <span className={author.play}>
              <i className="fa-solid fa-play" />
            </span>
          </span>
        ) : (
          <PlainCover className={author.cover} />
        )}
      </Link>
      <div className={author.rowBody}>
        <div className={author.rowMeta}>
          <time dateTime={video.createdAt} suppressHydrationWarning>
            {formatLongDate(video.createdAt)}
          </time>
          <span aria-hidden="true">·</span>
          <span>Video</span>
          <span className={author.counts}>
            <span title={`${video.comments} comments`}>
              <i className="fa-regular fa-comment" aria-hidden="true" /> {video.comments}
            </span>
            <span title={`${video.likes} likes`}>
              <i className="fa-regular fa-heart" aria-hidden="true" /> {video.likes}
            </span>
          </span>
        </div>
        <h3 className={author.rowTitle}>
          <Link to={video.path}>{video.title}</Link>
        </h3>
        <p className={author.rowExcerpt}>{video.excerpt}</p>
        <div className={author.rowTags}>
          {video.tags.map((tag) => (
            <Link key={tag} to={videoTagPath(tag)} className={styles.tag}>
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function AuthorPage({
  author: profile,
  posts: allPosts,
  videos: allVideos = [],
}: {
  author: AuthorProfile;
  posts: PostSummary[];
  videos?: VideoSummary[];
}): JSX.Element {
  const posts = useMemo(
    () => allPosts.filter((p) => p.author.username === profile.username),
    [allPosts, profile.username],
  );
  const videos = useMemo(
    () => allVideos.filter((v) => v.author.username === profile.username),
    [allVideos, profile.username],
  );
  const links = useMemo(() => blogLinks(allPosts, allVideos), [allPosts, allVideos]);
  // Start on the posts, unless the author has only videos.
  const [tab, setTab] = useState<Tab>(posts.length === 0 && videos.length > 0 ? 'videos' : 'posts');
  const [shown, setShown] = useState(PAGE_SIZE);
  const items = tab === 'posts' ? posts : videos;
  const authorTopics = topics(items);
  const topicHref = tab === 'posts' ? tagPath : videoTagPath;
  const website = profile.website && websiteLink(profile.website.url, profile.website.name);
  const feedUrl = `${BLOG_PATH}/author/${profile.username}/rss.xml`;
  const all = [...posts, ...videos];
  const comments = all.reduce((sum, p) => sum + p.comments, 0);
  const likes = all.reduce((sum, p) => sum + p.likes, 0);
  const subtitle = [profile.jobTitle, profile.title].filter(Boolean).join(' · ');
  const noun = tab === 'posts' ? 'posts' : 'videos';
  const chooseTab = (next: Tab) => {
    setTab(next);
    setShown(PAGE_SIZE);
  };

  return (
    <Layout
      title={profile.name}
      description={`Posts and videos by ${profile.name} on the SailPoint Developer Community.`}>
      <CommunityLinksContext.Provider value={links}>
        <CommunityTheme className={clsx(styles.root, author.page)}>
          <div className={styles.gradientBar} aria-hidden="true" />

          <div className={styles.container}>
            <nav className={author.breadcrumb} aria-label="Breadcrumb">
              {posts.length > 0 || videos.length === 0 ? (
                <Link to={BLOG_PATH}>Blog</Link>
              ) : (
                <Link to={VIDEOS_PATH}>Videos</Link>
              )}
              <i className="fa-solid fa-chevron-right" aria-hidden="true" />
              <span aria-current="page">{profile.name}</span>
            </nav>

            <section className={author.profile} aria-labelledby="author-name">
              <div
                className={author.banner}
                style={profile.cover ? {backgroundImage: `url(${profile.cover})`} : undefined}
                aria-hidden="true"
              />
              <div className={author.profileBody}>
                <img className={author.avatar} src={profile.avatar} alt="" width={144} height={144} />
                <div className={author.identity}>
                  <h1 id="author-name" className={author.name}>
                    {profile.name}
                    {profile.flair && (
                      <img className={author.flair} src={profile.flair.url} alt="" title={profile.flair.name} />
                    )}
                  </h1>
                  {subtitle && <p className={author.subtitle}>{subtitle}</p>}
                  <ul className={author.facts}>
                    {profile.location && (
                      <li>
                        <i className="fa-solid fa-location-dot" aria-hidden="true" /> {profile.location}
                      </li>
                    )}
                    <li suppressHydrationWarning>
                      <i className="fa-regular fa-calendar" aria-hidden="true" /> Member since{' '}
                      {formatMonthYear(profile.joinedAt)}
                    </li>
                  </ul>
                </div>
                <div className={author.social}>
                  {website && profile.website && (
                    <a
                      href={profile.website.url}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className={author.socialLink}
                      aria-label={website.label}
                      title={website.label}>
                      <i className={website.icon} aria-hidden="true" />
                    </a>
                  )}
                  {!profile.noForumProfile && (
                    <a
                      href={forumProfileUrl(profile.username)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={author.socialLink}
                      aria-label={`${profile.name} on the Developer Community forum`}
                      title="Forum profile">
                      <i className="fa-brands fa-discourse" aria-hidden="true" />
                    </a>
                  )}
                  {/* The feed lists blog posts only. */}
                  {posts.length > 0 && (
                    <a
                      href={feedUrl}
                      className={author.socialLink}
                      aria-label={`RSS feed of posts by ${profile.name}`}
                      title="RSS feed">
                      <i className="fa-solid fa-rss" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>

              {profile.bio.length > 0 && (
                <div className={author.bio}>
                  <RichText body={profile.bio} variant="comment" />
                </div>
              )}

              <dl className={author.stats}>
                {(posts.length > 0 || videos.length === 0) && (
                  <div>
                    <dt>Posts</dt>
                    <dd>{posts.length}</dd>
                  </div>
                )}
                {videos.length > 0 && (
                  <div>
                    <dt>Videos</dt>
                    <dd>{videos.length}</dd>
                  </div>
                )}
                <div>
                  <dt>Comments</dt>
                  <dd>{comments}</dd>
                </div>
                <div>
                  <dt>Likes</dt>
                  <dd>{likes}</dd>
                </div>
              </dl>
            </section>

            {/* Authors with posts and videos get a tab for each. The topics
                follow the tab, so each tag links to the matching list. */}
            {posts.length > 0 && videos.length > 0 && (
              <div className={author.tabs} role="tablist" aria-label={`Work by ${profile.name}`}>
                {(['posts', 'videos'] as Tab[]).map((name) => (
                  <button
                    key={name}
                    type="button"
                    role="tab"
                    id={`tab-${name}`}
                    aria-selected={tab === name}
                    aria-controls="author-work"
                    className={clsx(author.tab, tab === name && author.tabActive)}
                    onClick={() => chooseTab(name)}>
                    {name === 'posts' ? 'Posts' : 'Videos'}
                    <span className={author.topicCount}>{name === 'posts' ? posts.length : videos.length}</span>
                  </button>
                ))}
              </div>
            )}

            <div
              id="author-work"
              role={posts.length > 0 && videos.length > 0 ? 'tabpanel' : undefined}
              aria-labelledby={posts.length > 0 && videos.length > 0 ? `tab-${tab}` : undefined}>
              {authorTopics.length > 0 && (
                <section className={author.section} aria-labelledby="author-topics">
                  <h2 id="author-topics" className={author.sectionTitle}>
                    Topics
                  </h2>
                  <div className={author.topics}>
                    {authorTopics.map(({tag, count}) => (
                      <Link key={tag} to={topicHref(tag)} className={author.topic}>
                        {tag}
                        <span className={author.topicCount}>{count}</span>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              <section className={author.section} aria-labelledby="author-items">
                <h2 id="author-items" className={author.sectionTitle}>
                  {tab === 'posts' ? 'Posts' : 'Videos'} by {profile.name}
                </h2>
                {items.length === 0 ? (
                  <p className={theme.muted}>No {noun} yet.</p>
                ) : (
                  <div className={author.list}>
                    {tab === 'posts'
                      ? posts.slice(0, shown).map((post) => <PostRow key={post.id} post={post} />)
                      : videos.slice(0, shown).map((v) => <VideoRow key={v.id} video={v} />)}
                  </div>
                )}
                {shown < items.length && (
                  <div className={author.more}>
                    <button type="button" className={author.moreButton} onClick={() => setShown(shown + PAGE_SIZE)}>
                      Load more {noun}
                    </button>
                    <span className={theme.muted}>
                      Showing {shown} of {items.length}
                    </span>
                  </div>
                )}
              </section>
            </div>
          </div>
        </CommunityTheme>
      </CommunityLinksContext.Provider>
    </Layout>
  );
}
