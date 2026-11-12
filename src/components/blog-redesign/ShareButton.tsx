import React, {useEffect, useRef, useState} from 'react';
import styles from './styles.module.css';

/** Copies the link to this page and shows "Link copied" for a short time. */
export default function ShareButton() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);

  const share = async () => {
    const url = window.location.origin + window.location.pathname;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      window.prompt('Copy this link:', url);
      return;
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button type="button" className={styles.shareButton} onClick={share} aria-live="polite">
      <i className={copied ? 'fa-solid fa-check' : 'fa-solid fa-arrow-up-from-bracket'} aria-hidden="true" />
      {copied ? 'Link copied' : 'Share'}
    </button>
  );
}
