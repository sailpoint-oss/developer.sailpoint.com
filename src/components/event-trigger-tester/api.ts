import type {
  BinInfo,
  CreatedBin,
  Problem,
  RequestPage,
  ResponseConfig,
  Watch,
} from './types';

/** The deployed Event Triggers Demo API. Override with a site custom field. */
export const DEFAULT_API_BASE_URL =
  'https://7pg0igc0y3.execute-api.us-east-1.amazonaws.com';

/** A non-2xx response from the API, with its error body when it has one. */
export class HttpError extends Error {
  constructor(
    readonly status: number,
    readonly statusText: string,
    readonly problem: Problem | null,
  ) {
    super(problem?.message ?? `${status} ${statusText}`);
  }
}

/** A readable message for any error, with the API's per-field details. */
export function describe(error: unknown, fallback: string): string {
  if (error instanceof HttpError) {
    if (error.problem?.message) {
      const details = error.problem.details?.length
        ? ` (${error.problem.details.join(' ')})`
        : '';
      return `${error.problem.message}${details}`;
    }
    return `${error.status} ${error.statusText || fallback}`;
  }
  if (error instanceof TypeError) {
    // fetch rejects with a TypeError when the network or CORS fails.
    return 'Could not reach the demo API. Check your connection.';
  }
  if (error instanceof Error && error.message) {
    return error.message;
  }
  return fallback;
}

/**
 * Typed client for the management API.
 *
 * The bin token goes only to `/v1` calls. The test event posts to the public
 * ingest URL without credentials, like any other webhook sender.
 */
export class WebhookApi {
  constructor(
    readonly baseUrl: string,
    private readonly getToken: () => string | null,
    private readonly onUnauthorized: () => void,
  ) {}

  createBin(): Promise<CreatedBin> {
    return this.call('POST', '/v1/bins');
  }

  binInfo(): Promise<BinInfo> {
    return this.call('GET', '/v1/bins/current');
  }

  deleteBin(): Promise<{deleted: boolean; itemsDeleted: number}> {
    return this.call('DELETE', '/v1/bins/current');
  }

  updateResponse(config: ResponseConfig): Promise<BinInfo> {
    return this.call('PUT', '/v1/bins/current/response', config);
  }

  listRequests(options: {
    after?: string;
    limit?: number;
  }): Promise<RequestPage> {
    const params = new URLSearchParams({limit: String(options.limit ?? 100)});
    if (options.after) {
      params.set('after', options.after);
    }
    return this.call('GET', `/v1/requests?${params.toString()}`);
  }

  deleteRequest(id: string): Promise<{deleted: boolean}> {
    return this.call('DELETE', `/v1/requests/${encodeURIComponent(id)}`);
  }

  clearRequests(): Promise<{deleted: number}> {
    return this.call('DELETE', '/v1/requests');
  }

  listWatches(): Promise<{items: Watch[]}> {
    return this.call('GET', '/v1/watches');
  }

  addWatch(path: string, label?: string): Promise<Watch> {
    return this.call('POST', '/v1/watches', {path, label});
  }

  deleteWatch(id: string): Promise<{deleted: boolean}> {
    return this.call('DELETE', `/v1/watches/${encodeURIComponent(id)}`);
  }

  /** Posts to the public ingest URL, exactly as ISC would. No credentials. */
  async sendTestEvent(ingestUrl: string, payload: unknown): Promise<void> {
    const response = await fetch(`${ingestUrl}/test-event`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new HttpError(
        response.status,
        response.statusText,
        await readProblem(response),
      );
    }
  }

  private async call<T>(
    method: string,
    path: string,
    body?: unknown,
  ): Promise<T> {
    const headers: Record<string, string> = {};
    const token = this.getToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    if (body !== undefined) {
      headers['Content-Type'] = 'application/json';
    }
    const response = await fetch(`${this.baseUrl}${path}`, {
      method,
      headers,
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    if (!response.ok) {
      // Bins expire, so a 401 means "the bin is gone".
      if (response.status === 401 && token) {
        this.onUnauthorized();
      }
      throw new HttpError(
        response.status,
        response.statusText,
        await readProblem(response),
      );
    }
    return (await response.json()) as T;
  }
}

async function readProblem(response: Response): Promise<Problem | null> {
  try {
    const parsed = (await response.json()) as Problem;
    return parsed && typeof parsed === 'object' ? parsed : null;
  } catch {
    return null;
  }
}
