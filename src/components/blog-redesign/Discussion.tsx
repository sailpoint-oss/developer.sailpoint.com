import React, {forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import PostBody from './PostBody';
import type {Post, Topic} from './types';
import {formatShortDate} from './types';
import type {ForumUser, NewReply} from './forum';
import {createReply, likedPostIds, likePost, logIn, unlikePost, useForumUser} from './forum';
import {authorPath, BlogLinksContext} from './links';
import styles from './styles.module.css';

// ---------------------------------------------------------------------------
// Status message
// ---------------------------------------------------------------------------

interface Flash {
  text: string;
  /** Shows a "Log in" button in the message. */
  logIn?: boolean;
}

/** A short status message that clears itself. */
function useFlash(): [Flash | null, (flash: Flash) => void] {
  const [flash, setFlash] = useState<Flash | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const show = (next: Flash) => {
    setFlash(next);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setFlash(null), next.logIn ? 6000 : 3500);
  };
  useEffect(() => () => clearTimeout(timer.current), []);
  return [flash, show];
}

// ---------------------------------------------------------------------------
// One comment
// ---------------------------------------------------------------------------

interface CommentProps {
  number: number;
  username: string;
  name: string;
  avatar: string;
  createdAt: string;
  isAuthor?: boolean;
  userTitle?: string | null;
  flair?: Post['flair'];
  children: React.ReactNode;
  actions?: React.ReactNode;
}

function Comment({number, username, name, avatar, createdAt, isAuthor, userTitle, flair, children, actions}: CommentProps) {
  // Members who wrote a blog post have an author page. Others have no page on the blog.
  const hasPage = useContext(BlogLinksContext).authors.has(username);
  return (
    <article className={styles.comment} id={`post-${number}`}>
      <img className={styles.avatar} src={avatar} alt="" width={32} height={32} loading="lazy" />
      <div className={styles.commentMain}>
        <header className={styles.commentHeader}>
          {hasPage ? (
            <Link className={styles.commentName} to={authorPath(username)}>
              {name}
            </Link>
          ) : (
            <span className={styles.commentName}>{name}</span>
          )}
          {isAuthor && <span className={styles.authorBadge}>Author</span>}
          {userTitle && <span className={styles.userTitle}>{userTitle}</span>}
          {flair && <img className={styles.flair} src={flair.url} alt={flair.name} title={flair.name} />}
          <a className={styles.commentDate} href={`#post-${number}`} suppressHydrationWarning>
            · {formatShortDate(createdAt)}
          </a>
        </header>
        {children}
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Composer
// ---------------------------------------------------------------------------

export interface ComposerHandle {
  replyTo: (username: string, postNumber: number) => void;
}

interface ComposerProps {
  topicId: number;
  user: ForumUser | null | undefined;
  onPosted: (reply: NewReply) => void;
  onFlash: (flash: Flash) => void;
}

const Composer = forwardRef<ComposerHandle, ComposerProps>(function Composer(
  {topicId, user, onPosted, onFlash},
  ref,
) {
  const draftKey = `blog-redesign-draft-${topicId}`;
  const [tab, setTab] = useState<'write' | 'preview'>('write');
  const [text, setText] = useState('');
  const [replyTo, setReplyTo] = useState<number | undefined>();
  const [sending, setSending] = useState(false);
  const input = useRef<HTMLTextAreaElement>(null);
  const root = useRef<HTMLDivElement>(null);

  // A reader who logs in to comment comes back to this page. Restore the draft.
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(draftKey);
      if (saved) setText(saved);
      sessionStorage.removeItem(draftKey);
    } catch {
      // Storage is not available. The draft is lost.
    }
  }, [draftKey]);

  useImperativeHandle(ref, () => ({
    replyTo(username: string, postNumber: number) {
      setTab('write');
      setReplyTo(postNumber);
      setText((current) => (current.includes(`@${username}`) ? current : `@${username} ${current}`));
      root.current?.scrollIntoView({behavior: 'smooth', block: 'center'});
      setTimeout(() => input.current?.focus(), 300);
    },
  }));

  const keepDraftAndLogIn = () => {
    try {
      if (text.trim()) sessionStorage.setItem(draftKey, text);
    } catch {
      // Storage is not available. Log in without the draft.
    }
    logIn();
  };

  const submit = async () => {
    setSending(true);
    try {
      onPosted(await createReply(topicId, text, replyTo));
      setText('');
      setReplyTo(undefined);
      setTab('write');
      onFlash({text: 'Your comment is posted.'});
    } catch {
      onFlash({text: 'Your comment was not posted. Try again.'});
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={styles.composer} ref={root}>
      <div className={styles.composerTabs} role="tablist">
        {(['write', 'preview'] as const).map((name) => (
          <button
            key={name}
            type="button"
            role="tab"
            aria-selected={tab === name}
            className={clsx(styles.composerTab, tab === name && styles.composerTabActive)}
            onClick={() => setTab(name)}>
            {name === 'write' ? 'Write' : 'Preview'}
          </button>
        ))}
      </div>
      {tab === 'write' ? (
        <textarea
          ref={input}
          className={styles.composerInput}
          placeholder="Share a question or tip about this post…"
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-label="Comment"
          rows={3}
        />
      ) : (
        <div className={clsx(styles.composerPreview, styles.prose, styles.proseComment)}>
          {text.trim() ? <ReactMarkdown>{text}</ReactMarkdown> : <p className={styles.muted}>Nothing to preview.</p>}
        </div>
      )}
      <div className={styles.composerFooter}>
        <span className={styles.muted}>
          Markdown supported
          {user && (
            <>
              {' '}
              · Commenting as <strong>{user.name}</strong>
            </>
          )}
        </span>
        {user === null ? (
          <button type="button" className={styles.primaryButton} onClick={keepDraftAndLogIn}>
            Log in to comment
          </button>
        ) : (
          <button
            type="button"
            className={styles.primaryButton}
            disabled={!user || !text.trim() || sending}
            onClick={submit}>
            {sending ? 'Posting…' : 'Post comment'}
          </button>
        )}
      </div>
    </div>
  );
});

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export default function Discussion({topic}: {topic: Topic}) {
  const comments = topic.posts.slice(1);
  const composer = useRef<ComposerHandle>(null);
  const [flash, showFlash] = useFlash();
  const user = useForumUser();
  const [likedAtLoad, setLikedAtLoad] = useState<Set<number>>(new Set());
  const [liked, setLiked] = useState<Set<number>>(new Set());
  const [newReplies, setNewReplies] = useState<NewReply[]>([]);

  // The snapshot does not know who the reader is. Ask the forum which
  // comments the reader liked.
  useEffect(() => {
    if (!user) return;
    likedPostIds(topic.id)
      .then((ids) => {
        setLikedAtLoad(ids);
        setLiked(ids);
      })
      .catch(() => undefined);
  }, [user, topic.id]);

  const toggleLike = async (post: Post) => {
    if (!user) {
      showFlash({text: 'Log in to like comments.', logIn: true});
      return;
    }
    const wasLiked = liked.has(post.id);
    const update = (on: boolean) =>
      setLiked((current) => {
        const next = new Set(current);
        if (on) next.add(post.id);
        else next.delete(post.id);
        return next;
      });
    update(!wasLiked);
    try {
      await (wasLiked ? unlikePost(post.id) : likePost(post.id));
    } catch {
      update(wasLiked);
      showFlash({text: 'The like was not saved. Try again.'});
    }
  };

  // The snapshot count includes the reader's own like from before this visit.
  const likeCount = (post: Post) =>
    post.likes + (liked.has(post.id) ? 1 : 0) - (likedAtLoad.has(post.id) ? 1 : 0);

  return (
    <section className={styles.discussion} aria-labelledby="discussion">
      <h2 id="discussion" className={styles.sectionTitle}>
        Discussion
      </h2>

      {comments.length + newReplies.length === 0 && (
        <p className={styles.muted}>No comments yet. Start the discussion.</p>
      )}

      {comments.map((post) => {
        const isLiked = liked.has(post.id);
        const count = likeCount(post);
        return (
          <Comment
            key={post.id}
            number={post.number}
            username={post.username}
            name={post.name}
            avatar={post.avatar}
            createdAt={post.createdAt}
            isAuthor={post.isAuthor}
            userTitle={post.userTitle}
            flair={post.flair}
            actions={
              <>
                <button
                  type="button"
                  className={clsx(styles.action, isLiked && styles.actionLiked)}
                  aria-pressed={isLiked}
                  aria-label={isLiked ? 'Unlike this comment' : 'Like this comment'}
                  onClick={() => toggleLike(post)}>
                  <i className={isLiked ? 'fa-solid fa-heart' : 'fa-regular fa-heart'} />
                  {count > 0 && <span>{count}</span>}
                </button>
                <button
                  type="button"
                  className={clsx(styles.action, styles.actionReply)}
                  onClick={() => composer.current?.replyTo(post.username, post.number)}>
                  <i className="fa-solid fa-reply" /> Reply
                </button>
              </>
            }>
            <PostBody body={post.body} variant="comment" />
          </Comment>
        );
      })}

      {newReplies.map((reply) => (
        <Comment
          key={reply.id}
          number={reply.number}
          username={reply.username}
          name={reply.name}
          avatar={reply.avatar}
          createdAt={reply.createdAt}>
          {/* Discourse sanitizes the HTML it returns for a post. */}
          <div
            className={clsx(styles.prose, styles.proseComment)}
            dangerouslySetInnerHTML={{__html: reply.cooked}}
          />
        </Comment>
      ))}

      <Composer
        ref={composer}
        topicId={topic.id}
        user={user}
        onPosted={(reply) => setNewReplies((current) => [...current, reply])}
        onFlash={showFlash}
      />

      <div className={clsx(styles.toast, flash && styles.toastVisible)} role="status" aria-live="polite">
        {flash?.text}
        {flash?.logIn && (
          <button type="button" className={styles.toastAction} onClick={logIn}>
            Log in
          </button>
        )}
      </div>
    </section>
  );
}
