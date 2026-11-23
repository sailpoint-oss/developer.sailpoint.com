import React, {useMemo, useRef} from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import CommunityTheme from '../community/CommunityTheme';
import RichText from '../community/RichText';
import Comments from '../community/Comments';
import NotificationButton from '../community/NotificationButton';
import {CommunityLinksContext} from '../community/links';
import CompactHeader from '../shared/CompactHeader';
import ShareButton from '../shared/ShareButton';
import PlainCover from '../shared/PlainCover';
import type {PostSummary, VideoSummary, VideoTopic} from '../shared/types';
import {VIDEO_CATEGORY_ID, formatLongDate} from '../shared/types';
import {VIDEOS_PATH, authorPath, blogLinks, videoTagPath} from '../shared/links';
import styles from '../shared/styles.module.css';
import video from './video.module.css';
import videoTheme from './videoTheme.module.css';

/**
 * One video at /videos/<slug>. The blog-redesign plugin creates a route for
 * every Video Library topic and passes its snapshot as `topic`, every video
 * as `videos` and every post as `posts`.
 */

const MORE_VIDEOS = 4;
const SECTION = {label: 'Video Library', path: VIDEOS_PATH, tagHref: videoTagPath};

/** Other videos, the ones that share the most tags first, then the newest. */
function moreVideos(current: VideoTopic, videos: VideoSummary[]): VideoSummary[] {
  const tags = new Set(current.tags);
  return videos
    .filter((v) => v.id !== current.id)
    .map((v, index) => ({v, index, shared: v.tags.filter((t) => tags.has(t)).length}))
    .sort((a, b) => b.shared - a.shared || a.index - b.index)
    .slice(0, MORE_VIDEOS)
    .map(({v}) => v);
}

function Player({topic}: {topic: VideoTopic}) {
  if (!topic.video) {
    return (
      <a className={video.missing} href={topic.url}>
        {topic.thumbnail ? <img src={topic.thumbnail} alt="" /> : <PlainCover />}
        <span>
          <i className="fa-solid fa-play" aria-hidden="true" /> Watch this video on the forum
        </span>
      </a>
    );
  }
  return (
    <div className={video.player}>
      <iframe
        src={topic.video.embed}
        title={topic.title}
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}

export default function VideoPage({
  topic,
  videos,
  posts,
}: {
  topic: VideoTopic;
  videos: VideoSummary[];
  posts: PostSummary[];
}): JSX.Element {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const article = topic.posts[0];
  const comments = topic.posts.length - 1;
  const links = useMemo(() => blogLinks(posts, videos), [posts, videos]);
  const more = useMemo(() => moreVideos(topic, videos), [topic, videos]);

  const tagLinks = (
    <span className={styles.tags}>
      {topic.tags.map((tag) => (
        <Link key={tag} className={styles.tag} to={videoTagPath(tag)}>
          {tag}
        </Link>
      ))}
    </span>
  );

  return (
    <Layout title={topic.title} description="Video from the SailPoint Developer Community Video Library.">
      <CommunityLinksContext.Provider value={links}>
        <CommunityTheme className={clsx(styles.root, videoTheme.videoTheme)}>
          <CompactHeader watch={titleRef} title={topic.title} tags={topic.tags} section={SECTION} />
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
                    title={`More from ${article.name}`}>
                    <img src={article.avatar} alt="" width={40} height={40} />
                    <span>{article.name}</span>
                  </Link>
                  <time dateTime={topic.createdAt} suppressHydrationWarning>
                    {formatLongDate(topic.createdAt)}
                  </time>
                  {tagLinks}
                  <a className={styles.commentCount} href="#discussion">
                    <i className="fa-solid fa-comment" aria-hidden="true" /> {comments}{' '}
                    {comments === 1 ? 'comment' : 'comments'}
                  </a>
                  <ShareButton />
                </div>
              </header>

              <div className={styles.main}>
                <Player topic={topic} />

                <RichText body={article.body} />

                <footer className={styles.articleFooter}>
                  {tagLinks}
                  <span className={styles.footerActions}>
                    <NotificationButton
                      target={{type: 'category', id: VIDEO_CATEGORY_ID}}
                      noun={{one: 'video', many: 'videos'}}
                      size="small"
                      align="end"
                    />
                    <ShareButton />
                  </span>
                </footer>

                <Comments topicId={topic.id} comments={topic.posts.slice(1)} />
              </div>

              {more.length > 0 && (
                <aside className={video.aside} aria-labelledby="more-videos">
                  <div className={video.more}>
                    <h2 id="more-videos" className={video.moreTitle}>
                      More videos
                    </h2>
                    <ul>
                      {more.map((v) => (
                        <li key={v.id}>
                          <Link to={v.path} className={video.moreItem}>
                            {v.thumbnail ? (
                              <img src={v.thumbnail} alt="" loading="lazy" className={video.moreThumb} />
                            ) : (
                              <PlainCover className={video.moreThumb} />
                            )}
                            <span className={video.moreText}>
                              <span className={video.moreItemTitle}>{v.title}</span>
                              <span className={video.moreAuthor}>{v.author.name}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link to={VIDEOS_PATH} className={video.moreAll}>
                      All videos <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                    </Link>
                  </div>
                </aside>
              )}
            </div>
          </div>
        </CommunityTheme>
      </CommunityLinksContext.Provider>
    </Layout>
  );
}
