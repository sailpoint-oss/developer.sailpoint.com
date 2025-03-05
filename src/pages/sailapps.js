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
    if (!authCode) {
      setSendResult('No auth code available');
      return;
    }

    setIsSending(true);
    try {
      await sendCode(authCode);
      setIsConfirmed(true);
      setSendResult('Your application can now access your data, you can close this window');
    } catch (error) {
      setSendResult(`Error sending authentication: ${error.message}`);
    }
    setIsSending(false);
  };

  return (
    <Layout noFooter title="SailPoint Application Authentication">
      <div className={styles.gettingStartedText}>
        <FontAwesomeIcon
          icon={faKey}
          className={styles.docCardIcon}
          size="3x"
        />
        <h1 className={styles.gettingStartedOne}>SailPoint Application Authentication</h1>
        {state && (
          <div className={styles.gettingStartedThree}>
            <p>Your identity confirmation code: <span className={styles.bold}>{state}</span></p>
            {!isConfirmed && (
              <div className={styles.button}>
                <button 
                  onClick={handleConfirm} 
                  disabled={isSending}
                  className={styles.link}
                >
                  {isSending ? 'Confirming and Sending...' : 'Grant Application Access'}
                </button>
              </div>
            )}
          </div>
        )}
        {sendResult && <p className={styles.gettingStartedThree}>{sendResult}</p>}
      </div>
    </Layout>
  );
}

export default SailApps;