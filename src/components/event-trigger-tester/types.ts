/**
 * Shapes returned by the Event Triggers Demo API.
 *
 * The backend lives in the `event-triggers-web-demo` repository. This page is
 * only a UI layer on top of it.
 */

/** The API's error body. */
export interface Problem {
  status: number;
  code: string;
  message: string;
  details?: string[];
}

export interface ResponseConfig {
  status: number;
  contentType: string;
  body: string;
}

export interface CreatedBin {
  binId: string;
  token: string;
  ingestUrl: string;
  createdAt: string;
  expiresAt: string;
  expiresInDays: number;
  warning: string;
}

export interface BinInfo {
  binId: string;
  ingestUrl: string;
  createdAt: string;
  expiresAt: string;
  secondsRemaining: number;
  requestCount: number;
  response: ResponseConfig;
}

export interface CapturedRequest {
  id: string;
  receivedAt: string;
  method: string;
  path: string;
  query: Record<string, string[]>;
  headers: Record<string, string>;
  contentType: string | null;
  body: string;
  bodyBytes: number;
  sourceIp: string | null;
}

export interface RequestPage {
  items: CapturedRequest[];
  more: boolean;
}

export interface Watch {
  id: string;
  path: string;
  label: string;
  createdAt: string;
}
