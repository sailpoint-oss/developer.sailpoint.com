import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { sendCode } from '../services/SailAppsService';
import styles from './sailapps.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function SailApps() {
  const [authCode, setAuthCode] = useState('');
  const [state, setState] = useState('');
  const [uuid, setUuid] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendResult, setSendResult] = useState('');
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const stateParam = urlParams.get('state');


    if (code) setAuthCode(code);
    if (stateParam) setState(stateParam);
    const decodedState = JSON.parse(atob(stateParam));
    setUuid(decodedState.id);

  }, []);

  const handleConfirm = async () => {
    if (!authCode) {
      setSendResult('No auth code available');
      return;
    }

    setIsSending(true);
    try {
      await sendCode(siteConfig.customFields.CMS_APP_API_ENDPOINT, authCode, state);
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
          style={{fontSize: '3rem'}}
          className={styles.docCardIcon}
          size="3x"
        />
        <h1 className={styles.gettingStartedOne}>SailPoint Application Authentication</h1>
        <p className={styles.gettingStartedTwo}>Please confirm the application you are trying to access provides the same code as the one below</p>
        {state && (
          <div className={styles.gettingStartedThree}>
            <p>Your confirmation code: <br/><span className={styles.bold}>{uuid.slice(uuid.length-8, uuid.length-4).toUpperCase()}-{uuid.slice(uuid.length-4, uuid.length).toUpperCase()}</span></p>
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