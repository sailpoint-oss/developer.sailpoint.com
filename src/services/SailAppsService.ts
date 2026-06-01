export class SailAppsAuthError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'SailAppsAuthError';
    this.status = status;
  }
}

async function parseErrorMessage(response: Response): Promise<string> {
  const text = (await response.text()).trim();
  if (!text) {
    return `Request failed (${response.status})`;
  }
  try {
    const json = JSON.parse(text) as { message?: string };
    if (typeof json.message === 'string' && json.message.length > 0) {
      return json.message;
    }
  } catch {
    // Hono HTTPException returns plain-text body
  }
  return text;
}

export async function sendCode(
  gatewayUrl: string,
  code: string,
  state: string,
) {
  const url = new URL(`${gatewayUrl}sailapps/auth/code`);
  let response: Response;
  try {
    response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, state }),
    });
  } catch {
    throw new SailAppsAuthError('Network error occurred', 0);
  }

  if (!response.ok) {
    const message = await parseErrorMessage(response);
    throw new SailAppsAuthError(message, response.status);
  }

  return (await response.json()) as { message?: string };
}
