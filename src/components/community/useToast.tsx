import React, {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import {logIn} from './forum';
import styles from './toast.module.css';

export interface ToastMessage {
  text: string;
  /** Shows a "Log in" button in the message. */
  logIn?: boolean;
}

/**
 * A short status message that clears itself. Render `toast` once in the
 * component, and call `showToast` to show a message.
 */
export function useToast(): {toast: JSX.Element; showToast: (message: ToastMessage) => void} {
  const [message, setMessage] = useState<ToastMessage | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);

  const showToast = (next: ToastMessage) => {
    setMessage(next);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMessage(null), next.logIn ? 6000 : 3500);
  };

  const toast = (
    <div className={clsx(styles.toast, message && styles.toastVisible)} role="status" aria-live="polite">
      {message?.text}
      {message?.logIn && (
        <button type="button" className={styles.toastAction} onClick={logIn}>
          Log in
        </button>
      )}
    </div>
  );
  return {toast, showToast};
}
