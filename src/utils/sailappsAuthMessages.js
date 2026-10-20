/**
 * User-facing copy for the SailPoint OAuth callback page (/sailapps).
 * The page never calls an API, so every message here describes a problem in
 * the callback URL itself.
 */

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
  return {
    title: 'Invalid session state',
    message: 'The state value in the callback URL is not valid.',
    hint: 'Start sign-in again from your application.',
    severity: 'error',
  };
}
