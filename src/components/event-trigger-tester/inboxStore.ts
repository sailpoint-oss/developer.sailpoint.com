import {useSyncExternalStore} from 'react';
import {describe} from './api';
import type {WebhookApi} from './api';
import type {BinInfo, CapturedRequest, ResponseConfig, Watch} from './types';

/** How often the inbox asks for new deliveries while the tab is visible. */
export const POLL_INTERVAL_MS = 2000;

/** Matches the server's per-bin cap. */
export const MAX_REQUESTS = 500;

/**
 * Each poll re-reads this much recent history and removes duplicates by id.
 *
 * Request ids sort by arrival time, but two deliveries can be written out of
 * order (two Lambdas, one slightly slower). A poll that asked only for "after
 * the newest id I hold" could then skip the slower one forever. The overlap
 * makes such a delivery appear on the next poll instead.
 */
const OVERLAP_MS = 5000;

/** A synthetic request id for "everything received after this time". */
export function cursorForTime(ms: number): string {
  return `${Math.max(0, Math.floor(ms)).toString(36).padStart(9, '0')}000000`;
}

/** The arrival time encoded in a request id. */
export function timeOfId(id: string): number {
  return Number.parseInt(id.slice(0, 9), 36);
}

export interface InboxState {
  /** Oldest first. */
  requests: CapturedRequest[];
  watches: Watch[];
  bin: BinInfo | null;
  loaded: boolean;
  paused: boolean;
  pollError: string | null;
}

const EMPTY: InboxState = {
  requests: [],
  watches: [],
  bin: null,
  loaded: false,
  paused: false,
  pollError: null,
};

/**
 * The bin's captured requests and watches, kept current by polling.
 *
 * Polling rather than WebSockets: a 2-second delay is invisible when the
 * sender is an ISC trigger that itself takes seconds to fire.
 */
export class InboxStore {
  private state: InboxState = EMPTY;
  private readonly listeners = new Set<() => void>();
  private token: string | null = null;
  /** Bumped on every start and stop, so stale responses are ignored. */
  private generation = 0;
  private timer: ReturnType<typeof setTimeout> | undefined;

  constructor(private readonly api: WebhookApi) {}

  subscribe = (listener: () => void): (() => void) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };

  getState = (): InboxState => this.state;

  private set(patch: Partial<InboxState>): void {
    this.state = {...this.state, ...patch};
    this.listeners.forEach((listener) => listener());
  }

  /** Starts loading and polling for this token. A no-op if already running. */
  start(token: string): void {
    if (this.token === token) return;
    this.stop();
    this.token = token;
    void this.initialLoad(this.generation);
  }

  stop(): void {
    this.generation += 1;
    this.token = null;
    clearTimeout(this.timer);
    this.timer = undefined;
    this.set({...EMPTY, paused: this.state.paused});
  }

  setPaused(paused: boolean): void {
    this.set({paused});
    if (!paused) this.pollNow();
  }

  /** Polls immediately rather than at the next tick. */
  pollNow(): void {
    if (this.token === null) return;
    clearTimeout(this.timer);
    void this.poll(this.generation);
  }

  private async initialLoad(generation: number): Promise<void> {
    try {
      const [bin, watches] = await Promise.all([
        this.api.binInfo(),
        this.api.listWatches(),
      ]);
      if (generation !== this.generation) return;
      const requests = await this.fetchAfter(undefined, generation);
      if (generation !== this.generation) return;
      this.set({
        bin,
        watches: watches.items,
        requests: requests.slice(-MAX_REQUESTS),
        loaded: true,
        pollError: null,
      });
    } catch (error) {
      if (generation !== this.generation) return;
      this.set({pollError: describe(error, 'Could not load the bin.')});
    }
    this.schedule(generation);
  }

  private async poll(generation: number): Promise<void> {
    if (generation !== this.generation) return;
    if (!this.state.loaded) {
      // The first load failed. Try it again rather than polling.
      void this.initialLoad(generation);
      return;
    }
    const hidden =
      typeof document !== 'undefined' && document.visibilityState === 'hidden';
    if (this.state.paused || hidden) {
      this.schedule(generation);
      return;
    }
    try {
      const current = this.state.requests;
      const newest = current[current.length - 1];
      const after = newest
        ? cursorForTime(timeOfId(newest.id) - OVERLAP_MS)
        : undefined;
      const fresh = await this.fetchAfter(after, generation);
      if (generation !== this.generation) return;
      this.merge(fresh);
      if (this.state.pollError) this.set({pollError: null});
    } catch (error) {
      if (generation !== this.generation) return;
      this.set({pollError: describe(error, 'Polling failed.')});
    }
    this.schedule(generation);
  }

  private schedule(generation: number): void {
    if (generation !== this.generation) return;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => void this.poll(generation), POLL_INTERVAL_MS);
  }

  /** Follows pages until the server says there are no more. */
  private async fetchAfter(
    after: string | undefined,
    generation: number,
  ): Promise<CapturedRequest[]> {
    const collected: CapturedRequest[] = [];
    let cursor = after;
    // The server keeps at most 500 requests, so 6 pages of 100 always ends.
    for (let page = 0; page < 6; page += 1) {
      const result = await this.api.listRequests({after: cursor, limit: 100});
      if (generation !== this.generation) break;
      collected.push(...result.items);
      const last = result.items[result.items.length - 1];
      if (!result.more || !last) break;
      cursor = last.id;
    }
    return collected;
  }

  /** Adds new requests, keeping the existing objects for ones already held. */
  private merge(fresh: CapturedRequest[]): void {
    if (!fresh.length) return;
    const current = this.state.requests;
    const known = new Set(current.map((request) => request.id));
    const added = fresh.filter((request) => !known.has(request.id));
    if (!added.length) return;
    const merged = [...current, ...added].sort((a, b) =>
      a.id < b.id ? -1 : a.id > b.id ? 1 : 0,
    );
    this.set({requests: merged.slice(-MAX_REQUESTS)});
  }

  // --- mutations ----------------------------------------------------------

  async deleteRequest(id: string): Promise<void> {
    await this.api.deleteRequest(id);
    this.set({requests: this.state.requests.filter((r) => r.id !== id)});
  }

  async clearRequests(): Promise<number> {
    const result = await this.api.clearRequests();
    this.set({requests: []});
    return result.deleted;
  }

  async addWatch(path: string, label?: string): Promise<Watch> {
    const watch = await this.api.addWatch(path, label);
    const list = this.state.watches;
    if (!list.some((existing) => existing.id === watch.id)) {
      this.set({watches: [...list, watch]});
    }
    return watch;
  }

  async deleteWatch(id: string): Promise<void> {
    await this.api.deleteWatch(id);
    this.set({watches: this.state.watches.filter((w) => w.id !== id)});
  }

  async updateResponse(config: ResponseConfig): Promise<void> {
    const bin = await this.api.updateResponse(config);
    this.set({bin});
  }
}

export function useInbox(store: InboxStore): InboxState {
  return useSyncExternalStore(store.subscribe, store.getState, store.getState);
}
