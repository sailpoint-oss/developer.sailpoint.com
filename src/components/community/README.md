# Community components

These components show forum content on developer.sailpoint.com pages. Discourse stores the content, but readers stay on our pages. The blog at `/blog` and the video library at `/videos` use them.

## Components

| Component | What it does |
| --- | --- |
| `CommunityTheme` | Applies the colors (light and dark mode) and the font. Put it around the page, because every other component needs it. |
| `Comments` | Shows the comments on a forum topic, with likes, replies, the comment box and a notification button. |
| `NotificationButton` | A bell button. Readers use it to get notifications for a category, a tag or one topic. |
| `RichText` | Shows the body of a forum post from a snapshot (`BodyNode[]`). |
| `useToast` | Shows a short status message. |

## Example

```tsx
import CommunityTheme from '@site/src/components/community/CommunityTheme';
import Comments from '@site/src/components/community/Comments';
import NotificationButton from '@site/src/components/community/NotificationButton';
import RichText from '@site/src/components/community/RichText';

export default function VideoPage({topic}) {
  return (
    <CommunityTheme>
      <NotificationButton
        target={{type: 'category', id: 127}} // Video Library
        label="Subscribe"
        description="New videos"
      />
      <RichText body={topic.posts[0].body} />
      <Comments topicId={topic.id} comments={topic.posts.slice(1)} />
    </CommunityTheme>
  );
}
```

## Notifications

`NotificationButton` takes a `target`:

- `{type: 'category', id}`: new posts in a category, for example the Community Blog (`125`) or the Video Library (`127`).
- `{type: 'tag', name}`: new posts with a tag.
- `{type: 'topic', id}`: new comments on one post or video. `Comments` shows this button for you. To hide it, pass `notifications={false}`.

Discourse stores the reader's choice and sends the notifications by email and on the forum. Discourse cannot notify readers about one author. For that, the blog gives an RSS feed for each author.

The default menu options are in `FEED_OPTIONS` (categories and tags) and `TOPIC_OPTIONS` (topics). To use other options, pass `options`.

For a category or a tag, pass `noun` (for example `{one: 'video', many: 'videos'}`) to get words for that kind of item. The button then says "Subscribe to new videos", or "Subscribe to videos tagged “x”" for a tag, and the menu options say "New videos" and "New videos and comments". `feedWords` builds these words. A `label`, `description` or `options` prop replaces its part of them.

## Links

Links in forum content point at forum URLs. A page section can change them with `CommunityLinksContext`. For example, the blog links a forum post to its blog page and a member to their author page:

```tsx
<CommunityLinksContext.Provider value={{resolveHref, profileHref}}>…</CommunityLinksContext.Provider>
```

`src/components/shared/links.ts` (`blogLinks`) contains the rules for the blog.

## Forum API

`forum.ts` calls the Discourse API: the reader, likes, replies and notification levels. If the page and the forum are not on the same origin, the forum blocks the calls (CORS). On localhost, the calls fail, and the components show the logged-out state.
