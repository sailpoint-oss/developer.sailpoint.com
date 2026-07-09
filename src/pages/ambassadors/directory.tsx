import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import NewtonsCradle from '../../components/newtonsCradle';
import {
  getAmbassadorDetails,
  getAmbassadorPoints,
  getAmbassadors,
} from '../../services/DiscourseService';
import { developerWebsiteDomain, discourseBaseURL } from '../../util/util';
import styles from './directory.module.css';

/* Maps the prototype's verbatim BEM class names onto this CSS module's keys.
   Docusaurus css-loader uses the `asIs` convention, so keys like
   "member-card__head" resolve directly; unknown names fall through unchanged. */
const cx = (...names: (string | false | undefined | null)[]): string =>
  names
    .filter(Boolean)
    .map((n) => (styles as Record<string, string>)[n as string] || (n as string))
    .join(' ');

/* ---------------- Types ---------------- */
type Tier = 'expert' | 'ambassador';

interface Member {
  id: number;
  username: string;
  name: string;
  avatar: string;
  isLetterAvatar: boolean;
  tier: Tier;
  location?: string;
  website?: string;
  websiteUrl?: string;
  bio: string;
  bioText: string;
  since: string;
  forumUrl: string;
  stats: { points: number; solutions: number; likes: number };
  monthlyPoints: number;
}

// Extra last-30-days data fetched only for the spotlighted top contributor.
interface SpotlightExtra {
  likes: number;
  solutions: number;
  post?: { title: string; url: string };
}

/* ---------------- Icons (single-stroke UI glyphs) ---------------- */
const Icon = ({ path, size = 18, fill = false, stroke = 2, style }: any) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    aria-hidden="true"
    style={style}
    fill={fill ? 'currentColor' : 'none'}
    stroke={fill ? 'none' : 'currentColor'}
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {path}
  </svg>
);
const IconSearch = (p: any) => <Icon {...p} path={<><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>} />;
const IconClose = (p: any) => <Icon {...p} path={<><path d="M18 6 6 18" /><path d="M6 6l12 12" /></>} />;
const IconStar = (p: any) => <Icon {...p} fill path={<path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.9l-5.8 3.05 1.1-6.47L2.6 9.9l6.5-.95z" />} />;
const IconCheck = (p: any) => <Icon {...p} path={<path d="M20 6 9 17l-5-5" />} />;
const IconMsg = (p: any) => <Icon {...p} path={<path d="M21 11.5a8.38 8.38 0 0 1-9 8.3 8.5 8.5 0 0 1-3.8-.9L3 20l1.1-4.2A8.38 8.38 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5z" />} />;
const IconSeal = (p: any) => <Icon {...p} path={<><path d="M12 2l2.4 1.8 3 .2.9 2.9 2.2 2-1 2.9 1 2.9-2.2 2-.9 2.9-3 .2L12 22l-2.4-1.8-3-.2-.9-2.9-2.2-2 1-2.9-1-2.9 2.2-2 .9-2.9 3-.2z" /><path d="m9 12 2 2 4-4" /></>} />;
const IconArrow = (p: any) => <Icon {...p} path={<><path d="M5 12h14" /><path d="m13 5 7 7-7 7" /></>} />;
const IconChevron = (p: any) => <Icon {...p} path={<path d="m9 6 6 6-6 6" />} />;
const IconExternal = (p: any) => <Icon {...p} path={<><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" /></>} />;
const IconGrid = (p: any) => <Icon {...p} path={<><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>} />;
const IconList = (p: any) => <Icon {...p} path={<><path d="M8 6h13" /><path d="M8 12h13" /><path d="M8 18h13" /><path d="M3 6h.01" /><path d="M3 12h.01" /><path d="M3 18h.01" /></>} />;

const TIER_LABEL: Record<Tier, string> = {
  expert: 'Expert Ambassador',
  ambassador: 'Ambassador',
};
const EXPERT_ICON = 'https://developer.sailpoint.com/icons/ExpertAmbassador.svg';
const AMBASSADOR_ICON = 'https://developer.sailpoint.com/icons/Ambassador.svg';

const fmt = (n: number): string =>
  n >= 1000 ? (n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, '') + 'k' : '' + n;

const monogram = (name: string): string =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('') || '?';

const hueFor = (seed: string): number => {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 360;
  return h;
};

// bio_excerpt is HTML with entities (e.g. &hellip;); flatten to searchable plain text.
const HTML_ENTITIES: Record<string, string> = {
  '&nbsp;': ' ',
  '&hellip;': '…',
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&#39;': "'",
  '&rsquo;': "'",
  '&lsquo;': "'",
  '&quot;': '"',
  '&ldquo;': '"',
  '&rdquo;': '"',
};
// Decode entities in a SINGLE pass so an encoded entity like "&amp;lt;" is not
// re-scanned and double-unescaped; unknown entities collapse to a space. Output
// is only used for search matching, never rendered as HTML.
const stripHtml = (html: string): string =>
  html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&[a-zA-Z]+;|&#\d+;/g, (m) => HTML_ENTITIES[m.toLowerCase()] ?? ' ')
    .replace(/\s+/g, ' ')
    .trim();

/* ---------------- Presentational atoms ---------------- */
function TierPill({ tier, size = 'sm' }: { tier: Tier; size?: 'sm' | 'lg' }) {
  return (
    <span className={cx('tier-pill', `tier-pill--${tier}`, `tier-pill--${size}`)}>
      {TIER_LABEL[tier]}
    </span>
  );
}

function Avatar({ member, size = 56, ring = false }: { member: Member; size?: number; ring?: boolean }) {
  const h = hueFor(member.name);
  const bg = `linear-gradient(150deg, hsl(${h} 62% 52%), hsl(${(h + 36) % 360} 64% 38%))`;
  const useImg = member.avatar && !member.isLetterAvatar;
  return (
    <span
      className={cx('avatar', ring && 'avatar--ring')}
      style={{
        width: size,
        height: size,
        background: useImg ? undefined : bg,
        fontSize: Math.round(size * 0.36),
      }}
    >
      {useImg ? <img src={member.avatar} alt={member.name} loading="lazy" /> : monogram(member.name)}
    </span>
  );
}

function StatRow({
  member,
  compact = false,
  context = 'card',
}: {
  member: Member;
  compact?: boolean;
  context?: 'card' | 'spotlight' | 'drawer';
}) {
  // The spotlight leads with monthly points; the drawer spells out "all time"
  // so it doesn't get confused with the spotlight's monthly figure.
  const pointsItem =
    context === 'spotlight'
      ? { label: 'Points this month', num: member.monthlyPoints }
      : context === 'drawer'
        ? { label: 'All time points', num: member.stats.points }
        : { label: 'Points', num: member.stats.points };
  const items = [
    pointsItem,
    { label: context === 'spotlight' ? 'All-time solutions' : 'Solutions', num: member.stats.solutions },
    { label: context === 'spotlight' ? 'Likes received' : 'Likes', num: member.stats.likes },
  ];
  return (
    <div className={cx('stats-row', compact && 'stats-row--compact')}>
      {items.map((s) => (
        <div className={cx('stat')} key={s.label}>
          <div className={cx('stat__num')}>{fmt(s.num)}</div>
          <div className={cx('stat__label')}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

function ForumLink({ member, onColor = false }: { member: Member; onColor?: boolean }) {
  return (
    <div className={cx('socials', onColor && 'socials--on-color')}>
      <a
        className={cx('social')}
        href={member.forumUrl}
        target="_blank"
        rel="noopener"
        aria-label="Forum profile"
        onClick={(e) => e.stopPropagation()}
      >
        <IconMsg size={16} />
      </a>
    </div>
  );
}

/* ---------------- Cards ---------------- */
function MemberCard({ member, onOpen }: { member: Member; onOpen: (m: Member) => void }) {
  return (
    <article
      className={cx('card', 'member-card')}
      onClick={() => onOpen(member)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(member);
        }
      }}
    >
      <div className={cx('member-card__head')}>
        <Avatar member={member} size={56} ring />
        <div className={cx('member-card__id')}>
          <h3 className={cx('member-name')}>{member.name}</h3>
          {member.location && <p className={cx('member-co')}>{member.location}</p>}
        </div>
        <TierPill tier={member.tier} />
      </div>
      <p className={cx('member-card__tagline')} dangerouslySetInnerHTML={{ __html: member.bio }} />
      <StatRow member={member} compact />
      <div className={cx('member-card__foot')}>
        <span className={cx('member-card__since')}>Member since {member.since}</span>
        <span className={cx('member-card__open')}>
          Preview profile <IconArrow size={14} />
        </span>
      </div>
    </article>
  );
}

function Spotlight({
  member,
  extra,
  onOpen,
}: {
  member: Member;
  extra: SpotlightExtra | null;
  onOpen: (m: Member) => void;
}) {
  return (
    <article
      className={cx('card', 'spotlight')}
      onClick={() => onOpen(member)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(member)}
    >
      <div className={cx('spotlight__media')}>
        <div className={cx('spotlight__media-glow')} aria-hidden="true" />
        <Avatar member={member} size={148} ring />
        <TierPill tier={member.tier} size="lg" />
      </div>
      <div className={cx('spotlight__body')}>
        <h3 className={cx('spotlight__name')}>{member.name}</h3>
        {member.location && <p className={cx('spotlight__role')}>{member.location}</p>}
        <p className={cx('spotlight__bio')} dangerouslySetInnerHTML={{ __html: member.bio }} />
        {/* Last-30-days contributions */}
        <div className={cx('stats-row')}>
          <div className={cx('stat')}>
            <div className={cx('stat__num')}>{fmt(member.monthlyPoints)}</div>
            <div className={cx('stat__label')}>Points this month</div>
          </div>
          <div className={cx('stat')}>
            <div className={cx('stat__num')}>{fmt(extra?.solutions ?? 0)}</div>
            <div className={cx('stat__label')}>Solutions this month</div>
          </div>
          <div className={cx('stat')}>
            <div className={cx('stat__num')}>{fmt(extra?.likes ?? 0)}</div>
            <div className={cx('stat__label')}>Likes this month</div>
          </div>
        </div>
        {extra?.post && (
          <a
            className={cx('spotlight__toppost')}
            href={extra.post.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <span className={cx('spotlight__toppost-label')}>★ Top post this month</span>
            <span className={cx('spotlight__toppost-title')}>
              {extra.post.title} <IconExternal size={13} />
            </span>
          </a>
        )}
        <span className={cx('spotlight__open')}>
          Preview profile <IconArrow size={16} />
        </span>
      </div>
    </article>
  );
}

function LeaderRow({ member, rank, onOpen }: { member: Member; rank: number; onOpen: (m: Member) => void }) {
  return (
    <div
      className={cx('leader')}
      onClick={() => onOpen(member)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(member)}
    >
      <span className={cx('leader__rank', rank <= 3 && 'leader__rank--top')}>{String(rank).padStart(2, '0')}</span>
      <Avatar member={member} size={46} />
      <div className={cx('leader__id')}>
        <h3 className={cx('member-name')}>{member.name}</h3>
        {member.location && <p className={cx('member-co')}>{member.location}</p>}
      </div>
      <div className={cx('leader__tier')}>
        <TierPill tier={member.tier} />
      </div>
      <div className={cx('leader__stats')}>
        <div className={cx('stat')}>
          <div className={cx('stat__num')}>{fmt(member.stats.points)}</div>
          <div className={cx('stat__label')}>Points</div>
        </div>
        <div className={cx('stat')}>
          <div className={cx('stat__num')}>{fmt(member.stats.solutions)}</div>
          <div className={cx('stat__label')}>Solutions</div>
        </div>
      </div>
      <IconChevron size={18} style={{ opacity: 0.35, flex: 'none' }} />
    </div>
  );
}

/* ---------------- Profile drawer ---------------- */
function ProfileDrawer({ member, onClose }: { member: Member; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className={cx('drawer')}>
      <div className={cx('drawer__overlay')} onClick={onClose} />
      <aside className={cx('drawer__panel')} role="dialog" aria-label={`${member.name} profile`}>
        <button className={cx('drawer__close')} onClick={onClose} aria-label="Close">
          <IconClose size={20} />
        </button>
        <div className={cx('drawer__hero')}>
          <div className={cx('drawer__hero-glow')} aria-hidden="true" />
          <Avatar member={member} size={104} ring />
          <h2 className={cx('drawer__name')}>{member.name}</h2>
          {member.location && <p className={cx('drawer__co')}>{member.location}</p>}
          <div className={cx('drawer__pills')}>
            <TierPill tier={member.tier} />
          </div>
        </div>
        <div className={cx('drawer__content')}>
          <StatRow member={member} context="drawer" />
          <section className={cx('drawer__block')}>
            <h4 className={cx('drawer__h')}>About</h4>
            <p className={cx('drawer__bio')} dangerouslySetInnerHTML={{ __html: member.bio }} />
          </section>
          {member.website && (
            <section className={cx('drawer__block')}>
              <h4 className={cx('drawer__h')}>Website</h4>
              {member.websiteUrl ? (
                <a className={cx('drawer__link')} href={member.websiteUrl} target="_blank" rel="noopener noreferrer">
                  {member.website}
                </a>
              ) : (
                <p className={cx('drawer__bio')}>{member.website}</p>
              )}
            </section>
          )}
          <section className={cx('drawer__block', 'drawer__meta')}>
            <span>
              Member since <strong>{member.since}</strong>
            </span>
          </section>
          <a className={cx('btn', 'btn--primary', 'btn--block')} href={member.forumUrl} target="_blank" rel="noopener">
            View full profile <IconExternal size={15} />
          </a>
        </div>
      </aside>
    </div>
  );
}

/* ---------------- Layout helpers ---------------- */
function SectionHead({
  kicker,
  title,
  desc,
  accent = false,
  wide = false,
}: {
  kicker?: string;
  title: string;
  desc?: string;
  accent?: boolean;
  wide?: boolean;
}) {
  return (
    <div className={cx('section-head', wide && 'section-head--wide')}>
      {kicker && <span className={cx('section-head__kicker')}>{kicker}</span>}
      <h2 className={cx('section-head__title', accent && 'section-head__title--accent')}>{title}</h2>
      {desc && <p className={cx('section-head__desc')}>{desc}</p>}
    </div>
  );
}

/* ---------------- Data mapping ---------------- */
function resolveAvatar(template: string): string {
  if (!template) return '';
  const sized = template.replace('{size}', '120');
  if (template.startsWith('/')) return `https://${developerWebsiteDomain()}${sized}`;
  return sized;
}

async function fetchTier(expert: boolean): Promise<any[]> {
  const first: any = await getAmbassadors(expert, 1, 0);
  if (!first || !first.meta) return [];
  const total = first.meta.total as number;
  const all: any[] = [];
  for (let offset = 0; offset < total; offset += 50) {
    const page: any = await getAmbassadors(expert, 50, offset);
    if (page && page.members) all.push(...page.members);
  }
  return all;
}

// Discourse keeps email addresses private, so we can't filter by @sailpoint.com
// directly. Instead we exclude anyone who belongs to a clearly-internal SailPoint
// team group. Edit this list to add/remove groups. (Ambiguous groups like
// professional_services / customer_success / Internal-Previews are intentionally
// omitted — they can include partners or customers.)
const INTERNAL_GROUPS = [
  'sailpoint_employees', // the authoritative all-employees group
  'developer_relations_team',
  'developer_advocates',
  'community_managers',
  'community_moderators',
  'content_admins',
  'colab_admins',
  'marketing_team',
  'prod_marketing_mgmt',
  'product_management',
  'product_operations_team',
];

// Specific accounts to always hide (service/bot accounts, etc.), matched by
// Discourse username (case-insensitive).
const EXCLUDED_USERNAMES = new Set(['devrel_team']);

async function fetchGroupMemberIds(group: string): Promise<number[]> {
  const base = discourseBaseURL();
  try {
    const first: any = await (await fetch(`${base}groups/${group}/members.json?limit=1&offset=0`)).json();
    if (!first || !first.meta) return [];
    const total = first.meta.total as number;
    const ids: number[] = [];
    for (let offset = 0; offset < total; offset += 100) {
      const page: any = await (await fetch(`${base}groups/${group}/members.json?limit=100&offset=${offset}`)).json();
      for (const m of page?.members ?? []) ids.push(m.id);
    }
    return ids;
  } catch {
    return [];
  }
}

async function fetchInternalMemberIds(): Promise<Set<number>> {
  const lists = await Promise.all(INTERNAL_GROUPS.map(fetchGroupMemberIds));
  const set = new Set<number>();
  for (const ids of lists) for (const id of ids) set.add(id);
  return set;
}

// Gamification leaderboard scoped to the last 30 days (used to pick the
// "top contributor this month"). Returns id -> monthly score.
async function fetchMonthlyPoints(): Promise<Map<number, number>> {
  const map = new Map<number, number>();
  try {
    const res: any = await (await fetch(`${discourseBaseURL()}leaderboard/11.json?period=monthly`)).json();
    for (const u of res?.users ?? []) map.set(u.id, u.total_score);
  } catch {
    /* ignore — spotlight simply falls back to all-time points */
  }
  return map;
}

// All-time "likes received" per user, from the paginated forum directory
// (~11 pages of 50). Returns id -> likes_received.
async function fetchLikesReceived(): Promise<Map<number, number>> {
  const map = new Map<number, number>();
  const base = discourseBaseURL();
  for (let page = 0; page < 60; page++) {
    try {
      const res: any = await (
        await fetch(`${base}directory_items.json?period=all&order=likes_received&page=${page}`)
      ).json();
      const items = res?.directory_items ?? [];
      if (!items.length) break;
      for (const it of items) {
        const id = it.user?.id ?? it.id;
        if (id != null) map.set(id, it.likes_received ?? 0);
      }
    } catch {
      break; // out-of-range page (400) or network error — stop paging
    }
  }
  return map;
}

// Last-30-days extras for a single spotlighted contributor: monthly likes and
// their most-interacted topic (by replies + likes) created in the last 30 days.
async function fetchSpotlightExtra(username: string): Promise<SpotlightExtra> {
  const base = discourseBaseURL();
  let likes = 0;
  let solutions = 0;
  let post: SpotlightExtra['post'];
  try {
    const di: any = await (
      await fetch(`${base}directory_items.json?period=monthly&name=${encodeURIComponent(username)}`)
    ).json();
    const rows = di?.directory_items ?? [];
    const row =
      rows.find((x: any) => (x.user?.username ?? '').toLowerCase() === username.toLowerCase()) ?? rows[0];
    likes = row?.likes_received ?? 0;
    solutions = row?.solutions ?? 0;
  } catch {
    /* ignore — likes/solutions fall back to 0 */
  }
  try {
    const t: any = await (await fetch(`${base}topics/created-by/${encodeURIComponent(username)}.json`)).json();
    const topics: any[] = t?.topic_list?.topics ?? [];
    const cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000;
    const recent = topics.filter((x) => new Date(x.created_at).getTime() >= cutoff);
    const pool = recent.length ? recent : topics; // fall back to most recent if none in window
    const score = (x: any) => (x.reply_count ?? 0) + (x.like_count ?? 0);
    const best = pool.sort((a, b) => score(b) - score(a))[0];
    if (best) post = { title: best.title, url: `${base}t/${best.slug}/${best.id}` };
  } catch {
    /* ignore — no featured post */
  }
  return { likes, solutions, post };
}

function useChampions() {
  const [members, setMembers] = useState<Member[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const [expertRaw, ambassadorRaw, pointsData, internalIds, monthlyPointsById, likesById] = await Promise.all([
          fetchTier(true),
          fetchTier(false),
          getAmbassadorPoints() as Promise<any>,
          fetchInternalMemberIds(),
          fetchMonthlyPoints(),
          fetchLikesReceived(),
        ]);

        // Tag tier; a member listed as expert wins over plain ambassador.
        // Exclude SailPoint staff (internal team group members) and named
        // service/bot accounts.
        const isExcluded = (m: any) =>
          internalIds.has(m.id) || EXCLUDED_USERNAMES.has((m.username ?? '').toLowerCase());
        const byId = new Map<number, { m: any; tier: Tier }>();
        for (const m of ambassadorRaw) if (!isExcluded(m)) byId.set(m.id, { m, tier: 'ambassador' });
        for (const m of expertRaw) if (!isExcluded(m)) byId.set(m.id, { m, tier: 'expert' });

        const pointsById = new Map<number, number>();
        for (const u of (pointsData?.users ?? []) as any[]) pointsById.set(u.id, u.total_score);

        const entries = [...byId.values()];
        const detailsById = new Map<number, any>();
        // user-cards.json accepts batches of ids.
        for (let i = 0; i < entries.length; i += 50) {
          const ids = entries.slice(i, i + 50).map((e) => e.m.id);
          const details: any = await getAmbassadorDetails(ids);
          for (const u of details?.users ?? []) detailsById.set(u.id, u);
        }

        const mapped: Member[] = [];
        for (const { m, tier } of entries) {
          const d = detailsById.get(m.id);
          const bio = (d?.bio_excerpt ?? '').trim();
          if (!bio) continue; // skip stub profiles with nothing to show
          mapped.push({
            id: m.id,
            username: m.username,
            name: m.name || m.username,
            avatar: resolveAvatar(m.avatar_template),
            isLetterAvatar: /\/letter\//.test(m.avatar_template || ''),
            tier,
            location: d?.location || undefined,
            website: d?.website_name || d?.website || undefined,
            websiteUrl: d?.website || (d?.website_name ? `https://${d.website_name.replace(/^https?:\/\//, '')}` : undefined),
            bio,
            bioText: stripHtml(bio),
            // Forum-join year (user-cards created_at), not the date they were
            // (re)added to the Ambassador group — the latter is misleading for
            // long-time members who cycled in and out of the program.
            since: new Date(d?.created_at ?? m.added_at).getFullYear().toString(),
            forumUrl: `${discourseBaseURL()}u/${m.username}/summary`,
            stats: {
              points: pointsById.get(m.id) ?? 0,
              solutions: d?.accepted_answers ?? 0,
              likes: likesById.get(m.id) ?? 0,
            },
            monthlyPoints: monthlyPointsById.get(m.id) ?? 0,
          });
        }

        mapped.sort((a, b) => b.stats.points - a.stats.points);
        if (!cancelled) {
          setMembers(mapped);
          setLoading(false);
        }
      } catch (e) {
        if (!cancelled) {
          setMembers([]);
          setLoading(false);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return { members, loading };
}

const TIER_FILTERS: { key: 'all' | Tier; label: string }[] = [
  { key: 'all', label: 'All ambassadors' },
  { key: 'expert', label: 'Expert Ambassadors' },
  { key: 'ambassador', label: 'Ambassadors' },
];

/* ---------------- Page ---------------- */
const DirectoryContent: React.FC = () => {
  const codey = useBaseUrl('/ambassador/codey-full.png');
  const { members, loading } = useChampions();
  const [query, setQuery] = useState('');
  const [tier, setTier] = useState<'all' | Tier>('all');
  const [layout, setLayout] = useState<'grid' | 'leaderboard'>('grid');
  const [selected, setSelected] = useState<Member | null>(null);

  const open = useCallback((m: Member) => setSelected(m), []);

  const ranked = members ?? [];
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ranked.filter((m) => {
      const matchTier = tier === 'all' || m.tier === tier;
      const matchQ =
        !q ||
        [m.name, m.username, m.location, m.website, m.bioText].filter(Boolean).join(' ').toLowerCase().includes(q);
      return matchTier && matchQ;
    });
  }, [ranked, query, tier]);

  const totals = useMemo(() => {
    const experts = ranked.filter((m) => m.tier === 'expert').length;
    const solutions = ranked.reduce((s, m) => s + m.stats.solutions, 0);
    const points = ranked.reduce((s, m) => s + m.stats.points, 0);
    return [
      { num: '' + ranked.length, label: 'Ambassadors' },
      { num: '' + experts, label: 'Expert Ambassadors' },
      { num: fmt(solutions), label: 'Accepted solutions' },
      { num: fmt(points), label: 'Community points' },
    ];
  }, [ranked]);

  // Spotlight = the ambassador who earned the most points over the past month.
  // Falls back to the all-time leader if nobody has monthly points yet.
  const topMember = useMemo(() => {
    if (!ranked.length) return undefined;
    const best = ranked.reduce((a, b) => (b.monthlyPoints > a.monthlyPoints ? b : a));
    return best.monthlyPoints > 0 ? best : ranked[0];
  }, [ranked]);

  // Fetch last-30-days extras (monthly likes + top post) for the spotlight only.
  const [spotExtra, setSpotExtra] = useState<SpotlightExtra | null>(null);
  useEffect(() => {
    setSpotExtra(null);
    if (!topMember) return;
    let cancelled = false;
    fetchSpotlightExtra(topMember.username).then((e) => {
      if (!cancelled) setSpotExtra(e);
    });
    return () => {
      cancelled = true;
    };
  }, [topMember?.id]);

  return (
      <div className={cx('page')}>
        {/* Signature gradient bar */}
        <div className={cx('gradient-bar')} />

        {/* Hero */}
        <section className={cx('hero')}>
          <div className={cx('hero__inner')}>
            <div className={cx('hero__text')}>
              <h1 className={cx('hero__title')}>
                <em>People</em> <em>are</em> what makes our developer community <em>exceptional</em>
              </h1>
              <p className={cx('hero__sub')}>
                Every transform shared, every forum answer, every late-night connector fix. Meet the Ambassadors and
                Expert Ambassadors shaping identity security together.
              </p>
              <div className={cx('hero__stats')}>
                {totals.map((s) => (
                  <div className={cx('hero__stat')} key={s.label}>
                    <div className={cx('hero__stat-num')}>{s.num}</div>
                    <div className={cx('hero__stat-label')}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div className={cx('hero__cta')}>
                <Link className={cx('btn', 'btn--primary')} to="/ambassadors/getting-started">
                  Learn more <IconArrow size={16} />
                </Link>
                <a className={cx('btn', 'btn--ghost')} href="https://developer.sailpoint.com/discuss/" target="_blank" rel="noopener">
                  Visit the forum <IconExternal size={15} />
                </a>
              </div>
            </div>
            <img className={cx('hero__image')} src={codey} alt="Codey the SailPoint Ambassador" />
          </div>
        </section>

        {loading ? (
          <div className={cx('loading')}>
            <NewtonsCradle />
          </div>
        ) : (
          <>
            {/* Top contributor spotlight */}
            {topMember && (
              <section className={cx('section', 'section--feature')}>
                <div className={cx('wrap')}>
                  <SectionHead title="Top contributor this month" accent />
                  <Spotlight member={topMember} extra={spotExtra} onOpen={open} />
                </div>
              </section>
            )}

            {/* Directory */}
            <section className={cx('section')} id="directory">
              <div className={cx('wrap')}>
                <SectionHead
                  title="Ambassador directory"
                  desc="The community champions who are answering questions, shipping connectors, and mentoring newcomers every day."
                  accent
                  wide
                />

                <div className={cx('toolbar')}>
                  <div className={cx('toolbar__search')}>
                    <IconSearch size={16} />
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search by name, location, or expertise…"
                      aria-label="Search ambassadors"
                    />
                    {query && (
                      <button className={cx('toolbar__clear')} onClick={() => setQuery('')} aria-label="Clear">
                        <IconClose size={14} />
                      </button>
                    )}
                  </div>
                  <div className={cx('chips')}>
                    {TIER_FILTERS.map((f) => (
                      <button
                        key={f.key}
                        className={cx('chip', tier === f.key && 'chip--on')}
                        onClick={() => setTier(f.key)}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={cx('result-meta')}>
                  <span>
                    {filtered.length} {filtered.length === 1 ? 'ambassador' : 'ambassadors'}
                  </span>
                  <button
                    className={cx('result-meta__layout')}
                    onClick={() => setLayout((l) => (l === 'grid' ? 'leaderboard' : 'grid'))}
                    style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'inherit', font: 'inherit' }}
                    aria-label="Toggle layout"
                  >
                    {/* Shows the view you'll switch TO, not the current one. */}
                    {layout === 'leaderboard' ? <IconGrid size={13} /> : <IconList size={13} />}{' '}
                    {layout === 'leaderboard' ? 'Grid' : 'Leaderboard'} view
                  </button>
                </div>

                {filtered.length === 0 ? (
                  <div className={cx('empty')}>
                    No ambassadors match “{query}”.{' '}
                    <button
                      onClick={() => {
                        setQuery('');
                        setTier('all');
                      }}
                    >
                      Reset
                    </button>
                  </div>
                ) : layout === 'leaderboard' ? (
                  <div className={cx('leaderboard')}>
                    {filtered.map((m) => (
                      <LeaderRow key={m.id} member={m} rank={ranked.indexOf(m) + 1} onOpen={open} />
                    ))}
                  </div>
                ) : (
                  <div className={cx('grid')}>
                    {filtered.map((m) => (
                      <MemberCard key={m.id} member={m} onOpen={open} />
                    ))}
                  </div>
                )}
              </div>
            </section>
          </>
        )}

        {selected && <ProfileDrawer member={selected} onClose={() => setSelected(null)} />}
      </div>
  );
};

const Directory: React.FC = () => (
  <Layout
    title="Ambassador Directory"
    description="Meet the SailPoint Ambassadors and Expert Ambassadors who make our developer community great."
  >
    <DirectoryContent />
  </Layout>
);

export default Directory;
