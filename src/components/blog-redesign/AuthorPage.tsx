import React, {useMemo, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import PostBody from './PostBody';
import type {AuthorProfile, PostSummary} from './types';
import {formatLongDate, formatMonthYear} from './types';
import {BLOG_PATH, blogLinks, BlogLinksContext, tagPath} from './links';
import styles from './styles.module.css';
import author from './author.module.css';

/**
 * An author page at /blog-redesign/author/<username>. The blog-redesign plugin
 * passes the saved profile as `author` and every saved post as `posts`.
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
  if (host.endsWith('linkedin.com')) return {icon: 'fa-brands fa-linkedin', label: 'LinkedIn'};
  if (host.endsWith('github.com')) return {icon: 'fa-brands fa-github', label: 'GitHub'};
  if (host === 'x.com' || host.endsWith('twitter.com')) return {icon: 'fa-brands fa-x-twitter', label: 'X'};
  return {icon: 'fa-solid fa-globe', label: name || host};
}

/** The tags of the author's posts, most used first. */
function topics(posts: PostSummary[]): {tag: string; count: number}[] {
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
        {post.hero ? (
          <img src={post.hero.src} alt="" loading="lazy" />
        ) : (
          <span className={author.coverFallback}>
            <i className="fa-solid fa-feather-pointed" />
          </span>
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

export default function AuthorPage({
  author: profile,
  posts: allPosts,
}: {
  author: AuthorProfile;
  posts: PostSummary[];
}): JSX.Element {
  const posts = useMemo(
    () => allPosts.filter((p) => p.author.username === profile.username),
    [allPosts, profile.username],
  );
  const links = useMemo(() => blogLinks(allPosts), [allPosts]);
  const [shown, setShown] = useState(PAGE_SIZE);
  const authorTopics = topics(posts);
  const website = profile.website && websiteLink(profile.website.url, profile.website.name);
  const feedUrl = `${BLOG_PATH}/author/${profile.username}/rss.xml`;
  const comments = posts.reduce((sum, p) => sum + p.comments, 0);
  const subtitle = [profile.jobTitle, profile.title].filter(Boolean).join(' · ');

  return (
    <Layout title={profile.name} description={`Posts by ${profile.name} on the SailPoint Developer Community blog.`}>
      <BlogLinksContext.Provider value={links}>
        <div className={clsx(styles.root, author.page)}>
          <div className={styles.gradientBar} aria-hidden="true" />

          <div className={styles.container}>
            <nav className={author.breadcrumb} aria-label="Breadcrumb">
              <Link to={BLOG_PATH}>Blog</Link>
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
                  <a
                    href={feedUrl}
                    className={author.socialLink}
                    aria-label={`RSS feed of posts by ${profile.name}`}
                    title="RSS feed">
                    <i className="fa-solid fa-rss" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {profile.bio.length > 0 && (
                <div className={author.bio}>
                  <PostBody body={profile.bio} variant="comment" />
                </div>
              )}

              <dl className={author.stats}>
                <div>
                  <dt>Posts</dt>
                  <dd>{posts.length}</dd>
                </div>
                <div>
                  <dt>Comments</dt>
                  <dd>{comments}</dd>
                </div>
                <div>
                  <dt>Likes</dt>
                  <dd>{posts.reduce((sum, p) => sum + p.likes, 0)}</dd>
                </div>
              </dl>
            </section>

            {authorTopics.length > 0 && (
              <section className={author.section} aria-labelledby="author-topics">
                <h2 id="author-topics" className={author.sectionTitle}>
                  Topics
                </h2>
                <div className={author.topics}>
                  {authorTopics.map(({tag, count}) => (
                    <Link key={tag} to={tagPath(tag)} className={author.topic}>
                      {tag}
                      <span className={author.topicCount}>{count}</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <section className={author.section} aria-labelledby="author-posts">
              <h2 id="author-posts" className={author.sectionTitle}>
                Posts by {profile.name}
              </h2>
              {posts.length === 0 ? (
                <p className={styles.muted}>No posts yet.</p>
              ) : (
                <div className={author.list}>
                  {posts.slice(0, shown).map((post) => (
                    <PostRow key={post.id} post={post} />
                  ))}
                </div>
              )}
              {shown < posts.length && (
                <div className={author.more}>
                  <button type="button" className={author.moreButton} onClick={() => setShown(shown + PAGE_SIZE)}>
                    Load more posts
                  </button>
                  <span className={styles.muted}>
                    Showing {shown} of {posts.length}
                  </span>
                </div>
              )}
            </section>
          </div>
        </div>
      </BlogLinksContext.Provider>
    </Layout>
  );
}
