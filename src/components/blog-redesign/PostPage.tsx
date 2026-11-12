import React, {useMemo, useRef} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import PostBody from './PostBody';
import TableOfContents from './TableOfContents';
import Discussion from './Discussion';
import CompactHeader from './CompactHeader';
import ShareButton from './ShareButton';
import type {PostSummary, Topic} from './types';
import {formatLongDate} from './types';
import {authorPath, PostPathsContext, tagPath} from './links';
import styles from './styles.module.css';

/**
 * One blog post at /blog-redesign/<slug>. The blog-redesign plugin creates a
 * route for every snapshot in ./data and passes the snapshot as `topic`, and
 * the list of all saved posts as `posts`.
 */
export default function PostPage({
  topic,
  posts,
}: {
  topic: Topic;
  posts: PostSummary[];
}): JSX.Element {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const article = topic.posts[0];
  const comments = topic.posts.length - 1;
  const postPaths = useMemo(
    () => Object.fromEntries(posts.map((p) => [p.id, p.path])),
    [posts],
  );
  const toc = [...topic.toc, {id: 'discussion', title: 'Discussion'}];

  return (
    <Layout
      title={topic.title}
      description="Community blog post on the SailPoint Developer Community.">
      <PostPathsContext.Provider value={postPaths}>
        <div className={styles.root}>
          <CompactHeader
            watch={titleRef}
            title={topic.title}
            tags={topic.tags}
          />
          <div className={styles.gradientBar} aria-hidden="true" />

          <div className={styles.container}>
            <div className={styles.layout}>
              <header className={styles.header}>
                <h1 ref={titleRef} className={styles.title}>
                  {topic.title}
                </h1>
                <div className={styles.meta}>
                  <Link
                    className={styles.byline}
                    to={authorPath(article.username)}
                    title={`More posts by ${article.name}`}>
                    <img src={article.avatar} alt="" width={40} height={40} />
                    <span>{article.name}</span>
                  </Link>
                  <time dateTime={topic.createdAt} suppressHydrationWarning>
                    {formatLongDate(topic.createdAt)}
                  </time>
                  <span>{topic.readMinutes} min read</span>
                  <span className={styles.tags}>
                    {topic.tags.map((tag) => (
                      <Link key={tag} className={styles.tag} to={tagPath(tag)}>
                        {tag}
                      </Link>
                    ))}
                  </span>
                  <a className={styles.commentCount} href="#discussion">
                    <i className="fa-solid fa-comment" aria-hidden="true" />{' '}
                    {comments} {comments === 1 ? 'comment' : 'comments'}
                  </a>
                  <ShareButton />
                </div>
              </header>

              <div className={styles.main}>
                {topic.hero && (
                  <img
                    className={styles.hero}
                    src={topic.hero.src}
                    alt={topic.hero.alt}
                    width={1672}
                    height={941}
                  />
                )}

                <PostBody body={article.body} />

                <Discussion topic={topic} />
              </div>

              <aside className={styles.aside}>
                <TableOfContents entries={toc} />
              </aside>
            </div>
          </div>
        </div>
      </PostPathsContext.Provider>
    </Layout>
  );
}
