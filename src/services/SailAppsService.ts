export async function sendCode(gatewayUrl: string, code: string, state: string) {
  const url = new URL(`${gatewayUrl}sailapps/code`);
  url.searchParams.set('state', state);
  url.searchParams.set('code', code);
  try {
    const response = await fetch(url, {
      method: 'POST',
    });
    return await response.json();
  } catch (error) {
    return [];
  }
}

