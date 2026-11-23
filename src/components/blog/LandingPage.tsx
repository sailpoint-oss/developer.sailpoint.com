import React, {useMemo} from 'react';
import ListingPage from '../shared/ListingPage';
import type {ListingCopy, ListingItem} from '../shared/ListingPage';
import type {PostSummary} from '../shared/types';
import {BLOG_CATEGORY_ID} from '../shared/types';

/**
 * The blog landing page at /blog. The blog-redesign plugin passes every post
 * from the build as `posts`, newest first. ListingPage adds newer posts from
 * the forum when the page opens.
 */

const COPY: ListingCopy = {
  title: 'Community Blog',
  description: 'Guides and lessons from the SailPoint developer community.',
  eyebrow: 'Community Blog',
  heading: 'Learn from people who build with SailPoint',
  lead: 'Guides, solutions and lessons learned from developers and identity professionals in the SailPoint community.',
  categoryId: BLOG_CATEGORY_ID,
  categoryPath: 'content/community-blog/125',
  subscribeNoun: {one: 'blog', many: 'blogs'},
  noun: {one: 'post', many: 'posts'},
};

export default function LandingPage({posts}: {posts: PostSummary[]}): JSX.Element {
  const items = useMemo<ListingItem[]>(
    () => posts.map((post) => ({...post, detail: `${post.readMinutes} min read`})),
    [posts],
  );
  return <ListingPage items={items} copy={COPY} />;
}
