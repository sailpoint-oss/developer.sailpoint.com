export async function sendCode(gatewayUrl: string, code: string, state: string) {
  const url = new URL(`${gatewayUrl}sailapps/auth/code`);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, state }),
    });
    return await response.json();
  } catch (error) {
    return [];
  }
}

