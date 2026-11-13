/**
 * How community components turn forum URLs into links. Each page section
 * (blog, videos) gives its own rules with <CommunityLinksContext.Provider>,
 * so readers stay on that section's pages.
 */
import {createContext} from 'react';

export interface ResolvedLink {
  href: string;
  /** True when the link leaves developer.sailpoint.com. It opens in a new tab. */
  external: boolean;
}

export interface CommunityLinks {
  /** The URL to use for a link in forum content. */
  resolveHref: (href: string) => ResolvedLink;
  /** The page for a member, or null when the member has no page. */
  profileHref: (username: string) => string | null;
}

const SITE = /^https?:\/\/developer\.sailpoint\.com(?=\/|$)/;

/**
 * Default rules: links to developer.sailpoint.com open in the same tab,
 * other links open in a new tab, and members have no page.
 */
export function defaultResolveHref(href: string): ResolvedLink {
  if (SITE.test(href)) return {href, external: false};
  return {href, external: /^https?:/.test(href)};
}

export const CommunityLinksContext = createContext<CommunityLinks>({
  resolveHref: defaultResolveHref,
  profileHref: () => null,
});
