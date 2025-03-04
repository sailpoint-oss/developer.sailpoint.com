import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { sendCode } from '../services/SailAppsService';

// http://localhost:4200/sailapps?code=12345&state=phil

function SailApps() {
  const [authCode, setAuthCode] = useState('');
  const [state, setState] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendResult, setSendResult] = useState('');

  useEffect(() => {
    // Extract auth code and state from URL parameters
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
      <div style={{ padding: '2rem' }}>
        <h1>SailApps OAuth2 Redirect</h1>
        {state && (
          <div>
            <p>Your identity confirmation GUID: {state}</p>
            {!isConfirmed && (
              <button onClick={handleConfirm} disabled={isSending}>
                {isSending ? 'Confirming and Sending...' : 'Confirm Identity'}
              </button>
            )}
          </div>
        )}
        {isConfirmed && (
          <div>
            <p>Identity confirmed. Auth code has been sent.</p>
          </div>
        )}
        {sendResult && <p>{sendResult}</p>}
      </div>
    </Layout>
  );
}

export default SailApps;