/**
 * User-facing copy for SailApps OAuth callback (/sailapps).
 * Keys match mithrandir HTTPException messages and common OAuth redirect errors.
 */

const DEFAULT_ERROR = {
  title: 'Authentication failed',
  message:
    'Something went wrong while connecting your application. Please close this window and start sign-in again from your application.',
  hint: null,
  severity: 'error',
};

/** OAuth authorization-server redirect errors (query: ?error=...) */
const OAUTH_REDIRECT_ERRORS = {
  access_denied: {
    title: 'Access not granted',
    message:
      'You chose not to authorize the application, or your organization blocked access.',
    hint: 'Return to your application and try again if you want to continue.',
    severity: 'warning',
  },
  invalid_request: {
    title: 'Invalid sign-in request',
    message: 'The authorization request was malformed or incomplete.',
    hint: 'Start sign-in again from your application.',
    severity: 'error',
  },
  unauthorized_client: {
    title: 'Application not authorized',
    message: 'This application is not allowed to use this sign-in flow.',
    hint: 'Contact your administrator or the application vendor.',
    severity: 'error',
  },
  unsupported_response_type: {
    title: 'Unsupported response type',
    message: 'The authorization server does not support this type of response.',
    hint: 'Contact the application vendor.',
    severity: 'error',
  },
  invalid_scope: {
    title: 'Invalid permissions',
    message: 'The requested permissions are invalid or not allowed.',
    hint: 'Contact your administrator or try again from your application.',
    severity: 'error',
  },
  server_error: {
    title: 'Identity server error',
    message: 'The identity server encountered an error and could not complete sign-in.',
    hint: 'Wait a moment and try again from your application.',
    severity: 'error',
  },
  temporarily_unavailable: {
    title: 'Service temporarily unavailable',
    message: 'The identity server is temporarily unavailable.',
    hint: 'Try again in a few minutes.',
    severity: 'error',
  },
};

/** Mithrandir /sailapps/auth/code and related failures */
const API_ERRORS = {
  'Code already used': {
    title: 'Code already used',
    message:
      'This authorization code was already exchanged. Your application may already have access.',
    hint: 'Close this window and check your application. To sign in again, start a new authorization from the app.',
    severity: 'warning',
  },
  'Code expired': {
    title: 'Code expired',
    message: 'The authorization code has expired.',
    hint: 'Close this window and start sign-in again from your application.',
    severity: 'error',
  },
  'Invalid authorization code': {
    title: 'Invalid authorization code',
    message: 'The authorization code could not be validated.',
    hint: 'Start sign-in again from your application. Do not refresh this page.',
    severity: 'error',
  },
  'Code exchange failed': {
    title: 'Code exchange failed',
    message: 'We could not exchange your authorization code for an access token.',
    hint: 'Start sign-in again from your application.',
    severity: 'error',
  },
  'Code not provided': {
    title: 'Missing authorization code',
    message: 'No authorization code was returned from the identity server.',
    hint: 'Start sign-in again from your application.',
    severity: 'error',
  },
  'State not provided': {
    title: 'Missing session state',
    message: 'The sign-in response did not include required session information.',
    hint: 'Start sign-in again from your application.',
    severity: 'error',
  },
  'Invalid state parameter': {
    title: 'Invalid session state',
    message: 'The sign-in session state could not be read or is corrupt.',
    hint: 'Start sign-in again from your application.',
    severity: 'error',
  },
  'Invalid UUID': {
    title: 'Session expired',
    message:
      'Your sign-in session is no longer valid. Sessions expire after a few minutes.',
    hint: 'Close this window and start sign-in again from your application.',
    severity: 'error',
  },
  'Error retrieving data': {
    title: 'Session not found',
    message: 'We could not load your sign-in session.',
    hint: 'Start sign-in again from your application.',
    severity: 'error',
  },
  'Invalid stored data': {
    title: 'Incomplete session',
    message: 'Your sign-in session is missing required information.',
    hint: 'Start sign-in again from your application.',
    severity: 'error',
  },
  'Invalid stored data: missing PKCE verifier': {
    title: 'Incomplete session',
    message: 'Your sign-in session is missing security verification data.',
    hint: 'Start sign-in again from your application.',
    severity: 'error',
  },
  'Failed to encrypt token': {
    title: 'Could not secure token',
    message: 'The access token could not be encrypted for your application.',
    hint: 'Start sign-in again. If this continues, contact the application vendor.',
    severity: 'error',
  },
  'Error storing token': {
    title: 'Could not save token',
    message: 'The access token was received but could not be stored for pickup.',
    hint: 'Try again. If this continues, contact support.',
    severity: 'error',
  },
  'Invalid token response': {
    title: 'Invalid token response',
    message: 'The identity server returned an unexpected token response.',
    hint: 'Start sign-in again from your application.',
    severity: 'error',
  },
  'Error exchanging code for token': {
    title: 'Connection error',
    message: 'We could not reach the identity server to complete sign-in.',
    hint: 'Check your network connection and try again.',
    severity: 'error',
  },
  'Invalid OAuth client configuration': {
    title: 'Configuration error',
    message: 'The OAuth client is not configured correctly for this environment.',
    hint: 'Contact the application vendor or your administrator.',
    severity: 'error',
  },
  'Invalid OAuth request': {
    title: 'Invalid OAuth request',
    message: 'The token request was rejected by the identity server.',
    hint: 'Start sign-in again from your application.',
    severity: 'error',
  },
  'Unauthorized OAuth client': {
    title: 'Unauthorized application',
    message: 'This application is not authorized for the requested grant.',
    hint: 'Contact your administrator.',
    severity: 'error',
  },
  'Access denied': {
    title: 'Access denied',
    message: 'The identity server denied the authorization request.',
    hint: 'Contact your administrator or try again.',
    severity: 'warning',
  },
  'Unsupported grant type': {
    title: 'Unsupported grant type',
    message: 'This type of authorization is not supported.',
    hint: 'Contact the application vendor.',
    severity: 'error',
  },
  'Invalid JSON body': {
    title: 'Request error',
    message: 'The sign-in confirmation request was invalid.',
    hint: 'Refresh the page once. If the problem persists, start sign-in again.',
    severity: 'error',
  },
  'Internal server error': {
    title: 'Server error',
    message: 'An unexpected error occurred on our servers.',
    hint: 'Try again in a few minutes.',
    severity: 'error',
  },
  'Unknown error': {
    title: 'Unknown error',
    message: 'An unknown error occurred while completing sign-in.',
    hint: 'Start sign-in again from your application.',
    severity: 'error',
  },
  'Network error occurred': {
    title: 'Network error',
    message: 'Could not reach the authentication service.',
    hint: 'Check your connection and try again.',
    severity: 'error',
  },
};

/**
 * @param {string} [apiMessage]
 * @param {number} [status]
 */
export function getApiErrorDisplay(apiMessage, status) {
  const trimmed = apiMessage?.trim();
  if (trimmed && API_ERRORS[trimmed]) {
    return API_ERRORS[trimmed];
  }
  if (status === 500) {
    return API_ERRORS['Internal server error'];
  }
  if (trimmed) {
    return {
      ...DEFAULT_ERROR,
      message: trimmed,
    };
  }
  return DEFAULT_ERROR;
}

/**
 * @param {string} oauthError
 * @param {string | null} [oauthErrorDescription]
 */
export function getOAuthRedirectErrorDisplay(oauthError, oauthErrorDescription) {
  const known = OAUTH_REDIRECT_ERRORS[oauthError];
  if (known) {
    return known;
  }
  return {
    title: 'Sign-in interrupted',
    message:
      oauthErrorDescription?.trim() ||
      `The identity server returned an error (${oauthError || 'unknown'}).`,
    hint: 'Start sign-in again from your application.',
    severity: 'error',
  };
}

/**
 * @param {boolean} hasCode
 * @param {boolean} hasState
 */
export function getMissingCallbackParamsDisplay(hasCode, hasState) {
  if (!hasCode && !hasState) {
    return {
      title: 'Invalid callback URL',
      message:
        'This page expects to be opened after authorizing an application. No authorization data was found.',
      hint: 'Open your application and use its sign-in or connect option.',
      severity: 'error',
    };
  }
  if (!hasCode) {
    return {
      title: 'Missing authorization code',
      message: 'The callback URL is missing the authorization code.',
      hint: 'Complete sign-in at your identity provider or start again from your application.',
      severity: 'error',
    };
  }
  return {
    title: 'Missing session state',
    message: 'The callback URL is missing session state from the authorization request.',
    hint: 'Start sign-in again from your application.',
    severity: 'error',
  };
}

export function getInvalidStateDisplay() {
  return API_ERRORS['Invalid state parameter'];
}

export const SUCCESS_DISPLAY = {
  title: 'Access granted',
  message:
    'Your application can now access your data. You may close this window and return to the application.',
  severity: 'success',
};
