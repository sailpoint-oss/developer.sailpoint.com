import React, {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import type {NotificationLevelValue, NotificationTarget} from './forum';
import {getNotificationLevel, NotificationLevel, setNotificationLevel, useForumUser} from './forum';
import {useToast} from './useToast';
import styles from './notifications.module.css';

/**
 * A bell button that subscribes the reader to forum notifications for a
 * category (for example the Community Blog), a tag, or one topic. The reader
 * picks a level from a menu. Discourse stores the choice and sends the
 * notifications, by email and on the forum.
 */

export interface NotificationOption {
  level: NotificationLevelValue;
  label: string;
  description: string;
}

/** Options for a category or a tag: a feed of posts. */
export const FEED_OPTIONS: NotificationOption[] = [
  {
    level: NotificationLevel.watchingFirstPost,
    label: 'New posts',
    description: 'Get notified when a new post is published.',
  },
  {
    level: NotificationLevel.watching,
    label: 'New posts and comments',
    description: 'Get notified about new posts and every new comment.',
  },
  {
    level: NotificationLevel.regular,
    label: 'Off',
    description: 'Get notified only when someone replies to you or mentions you.',
  },
];

/** Options for one topic: the comments on a post or a video. */
export const TOPIC_OPTIONS: NotificationOption[] = [
  {
    level: NotificationLevel.watching,
    label: 'All comments',
    description: 'Get notified about every new comment.',
  },
  {
    level: NotificationLevel.regular,
    label: 'Replies to me',
    description: 'Get notified only when someone replies to you or mentions you.',
  },
  {
    level: NotificationLevel.muted,
    label: 'Off',
    description: 'Never get notified, not even for replies.',
  },
];

/** Discourse has more levels than the menu shows. Show the closest option. */
function closestOption(options: NotificationOption[], level: NotificationLevelValue): NotificationOption {
  const exact = options.find((o) => o.level === level);
  if (exact) return exact;
  // "Tracking" only shows unread counts on the forum. It is like "regular".
  const fallback = level === NotificationLevel.tracking ? NotificationLevel.regular : level;
  return (
    options.find((o) => o.level === fallback) ??
    options.reduce((best, o) => (Math.abs(o.level - level) < Math.abs(best.level - level) ? o : best))
  );
}

// The menu renders only in the browser, so a counter gives stable ids.
let menuCount = 0;

/** Levels at which the button shows as "subscribed". */
const SUBSCRIBED: NotificationLevelValue[] = [NotificationLevel.watching, NotificationLevel.watchingFirstPost];

export interface NotificationButtonProps {
  target: NotificationTarget;
  /** The button text while the reader is not subscribed, for example "Subscribe". */
  label?: string;
  /** The button text while the reader is subscribed. */
  subscribedLabel?: string;
  /** The menu options. The default depends on the target type. */
  options?: NotificationOption[];
  /** `inverse` is for dark or colored backgrounds, for example a hero banner. */
  appearance?: 'default' | 'inverse';
  size?: 'default' | 'small';
  /** Where the menu lines up with the button. Use `end` for a button at the right edge. */
  align?: 'start' | 'end';
  /** Says what the reader subscribes to, for screen readers and the menu title. */
  description?: string;
  className?: string;
}

export default function NotificationButton({
  target,
  label = 'Subscribe',
  subscribedLabel = 'Subscribed',
  options = target.type === 'topic' ? TOPIC_OPTIONS : FEED_OPTIONS,
  appearance = 'default',
  size = 'default',
  align = 'start',
  description,
  className,
}: NotificationButtonProps): JSX.Element {
  const user = useForumUser();
  const [level, setLevel] = useState<NotificationLevelValue | null>(null);
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const {toast, showToast} = useToast();
  const root = useRef<HTMLDivElement>(null);
  const menuId = useRef(`notification-menu-${++menuCount}`).current;
  const targetKey = target.type === 'tag' ? `tag:${target.name}` : `${target.type}:${target.id}`;

  // Load the reader's level when the target changes (for example a new tag filter).
  useEffect(() => {
    setLevel(null);
    if (!user) return undefined;
    let cancelled = false;
    getNotificationLevel(target)
      .then((l) => !cancelled && setLevel(l))
      .catch(() => !cancelled && setLevel(NotificationLevel.regular));
    return () => {
      cancelled = true;
    };
    // `target` is a new object on every render. `targetKey` names it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, targetKey]);

  // Close the menu on Escape or a click outside.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onClick = (e: MouseEvent) => !root.current?.contains(e.target as Node) && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  const subscribed = level !== null && SUBSCRIBED.includes(level);
  const current = level === null ? null : closestOption(options, level);

  const onButton = () => {
    if (user === null) {
      showToast({text: 'Log in to get notifications.', logIn: true});
      return;
    }
    if (user) setOpen(!open);
  };

  const choose = async (option: NotificationOption) => {
    setOpen(false);
    if (option.level === level) return;
    const previous = level;
    setLevel(option.level);
    setSaving(true);
    try {
      await setNotificationLevel(target, option.level);
      showToast({
        text: SUBSCRIBED.includes(option.level)
          ? `Subscribed: ${option.label.toLowerCase()}.`
          : 'Notifications are off.',
      });
    } catch {
      setLevel(previous);
      showToast({text: 'Your notification setting was not saved. Try again.'});
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className={clsx(styles.wrapper, className)} ref={root}>
      <button
        type="button"
        className={clsx(
          styles.button,
          appearance === 'inverse' && styles.inverse,
          size === 'small' && styles.small,
          subscribed && styles.subscribed,
        )}
        onClick={onButton}
        disabled={user === undefined || saving}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        aria-label={description ? `${subscribed ? subscribedLabel : label}: ${description}` : undefined}>
        <i className={subscribed ? 'fa-solid fa-bell' : 'fa-regular fa-bell'} aria-hidden="true" />
        <span>{subscribed ? subscribedLabel : label}</span>
        {user && <i className={clsx('fa-solid fa-chevron-down', styles.chevron)} aria-hidden="true" />}
      </button>

      {open && (
        <div className={clsx(styles.menu, align === 'end' && styles.menuEnd)} id={menuId} role="menu" aria-label={description ?? 'Notifications'}>
          {description && <p className={styles.menuTitle}>{description}</p>}
          {options.map((option) => (
            <button
              key={option.level}
              type="button"
              role="menuitemradio"
              aria-checked={current?.level === option.level}
              className={styles.option}
              onClick={() => choose(option)}>
              <i
                className={clsx('fa-solid fa-check', styles.check, current?.level !== option.level && styles.hidden)}
                aria-hidden="true"
              />
              <span>
                <span className={styles.optionLabel}>{option.label}</span>
                <span className={styles.optionDescription}>{option.description}</span>
              </span>
            </button>
          ))}
        </div>
      )}
      {toast}
    </div>
  );
}
