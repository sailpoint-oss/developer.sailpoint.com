import {describe} from './api';
import type {WebhookApi} from './api';
import type {InboxState, InboxStore} from './inboxStore';

export type View = 'inbox' | 'monitor' | 'settings';

export interface Toast {
  id: number;
  kind: 'success' | 'error' | 'info';
  message: string;
  action?: {label: string; run: () => void};
}

export interface Notify {
  success(message: string): void;
  info(message: string, action?: Toast['action']): void;
  error(error: unknown, fallback?: string): void;
}

/** What every view gets from the page shell. */
export interface ToolContext {
  api: WebhookApi;
  store: InboxStore;
  state: InboxState;
  token: string | null;
  notify: Notify;
  /** Changes the view, and optionally pins a request in the inbox. */
  go(view: View, request?: string | null): void;
  /** Removes the bin token from this device. */
  forget(): void;
}

export function copyText(notify: Notify, text: string, what: string): void {
  navigator.clipboard
    .writeText(text)
    .then(() => notify.success(`${what} copied to the clipboard.`))
    .catch(() =>
      notify.error(new Error(`Could not copy the ${what.toLowerCase()}.`)),
    );
}

export {describe};
