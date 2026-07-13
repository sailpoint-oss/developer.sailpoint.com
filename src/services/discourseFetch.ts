/**
 * Throttled fetch for Discourse.
 *
 * The Ambassador directory kicks off dozens of Discourse requests on mount
 * (member tiers, per-group employee filtering, leaderboard pages, likes,
 * user-cards…). Fired unthrottled they burst past Discourse's anonymous
 * per-IP rate limit and come back as HTTP 429, which the callers then swallow
 * as empty data.
 *
 * This wrapper keeps every one of those calls but:
 *   1. bounds how many run concurrently (a simple semaphore/queue), and
 *   2. retries a 429 automatically, honoring the server's `Retry-After`
 *      header when present, otherwise backing off exponentially with jitter.
 *
 * The queue is module-global, so all callers share the same budget and
 * coordinate no matter which function issued the request.
 */

// How many Discourse requests may be in flight at once. Low enough to stay
// under the rate limit, high enough to keep total load time reasonable.
const MAX_CONCURRENT = 4;

// How many times to retry a single request that keeps coming back 429.
const MAX_RETRIES = 4;

// Cap for the exponential backoff (ms) used when no Retry-After is given.
const MAX_BACKOFF_MS = 30_000;

let active = 0;
const waiters: Array<() => void> = [];

function acquire(): Promise<void> {
  if (active < MAX_CONCURRENT) {
    active++;
    return Promise.resolve();
  }
  return new Promise<void>((resolve) => waiters.push(resolve));
}

function release(): void {
  active--;
  const next = waiters.shift();
  if (next) {
    active++;
    next();
  }
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Drop-in replacement for `fetch` that participates in the shared concurrency
 * budget and transparently retries 429 responses. Non-429 responses (including
 * other errors) are returned to the caller unchanged, exactly like `fetch`.
 */
export async function discourseFetch(
  input: string | URL,
  init?: RequestInit,
): Promise<Response> {
  await acquire();
  try {
    let response = await fetch(input, init);
    for (let attempt = 0; response.status === 429 && attempt < MAX_RETRIES; attempt++) {
      // Discourse sends Retry-After in seconds; prefer it when available.
      const retryAfter = Number(response.headers.get('Retry-After'));
      const waitMs =
        Number.isFinite(retryAfter) && retryAfter > 0
          ? retryAfter * 1000
          : Math.min(MAX_BACKOFF_MS, 500 * 2 ** attempt) + Math.random() * 250;
      await sleep(waitMs);
      response = await fetch(input, init);
    }
    return response;
  } finally {
    release();
  }
}
