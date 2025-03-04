import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { sendCode } from '../services/SailAppsService';
import styles from './sailapps.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';

function SailApps() {
  const [authCode, setAuthCode] = useState('');
  const [state, setState] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendResult, setSendResult] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const stateParam = urlParams.get('state');

    if (code) setAuthCode(code);
    if (stateParam) setState(stateParam);
  }, []);

  const handleConfirm = async () => {
    setIsConfirmed(true);
    await handleSendCode();
  };

  const handleSendCode = async () => {
    if (!authCode) {
      setSendResult('No auth code available');
      return;
    }

    setIsSending(true);
    try {
      await sendCode(authCode);
      setSendResult('Code sent successfully');
    } catch (error) {
      setSendResult(`Error sending code: ${error.message}`);
    }
    setIsSending(false);
  };

  return (
    <Layout title="SailApps OAuth2 Redirect">
      <div className={styles.gettingStartedText}>
        <FontAwesomeIcon
          icon={faKey}
          className={styles.docCardIcon}
          size="3x"
        />
        <h1 className={styles.gettingStartedOne}>SailApps OAuth2 Redirect</h1>
        {state && (
          <div className={styles.gettingStartedThree}>
            <p>Your identity confirmation GUID: <span className={styles.bold}>{state}</span></p>
            {!isConfirmed && (
              <div className={styles.button}>
                <button 
                  onClick={handleConfirm} 
                  disabled={isSending}
                  className={styles.link}
                >
                  {isSending ? 'Confirming and Sending...' : 'Confirm Identity'}
                </button>
              </div>
            )}
          </div>
        )}
        {isConfirmed && (
          <div className={styles.gettingStartedThree}>
            <p>Identity confirmed. Auth code has been sent.</p>
          </div>
        )}
        {sendResult && <p className={styles.gettingStartedThree}>{sendResult}</p>}
      </div>
    </Layout>
  );
}

export default SailApps;