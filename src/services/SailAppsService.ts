export async function sendCode(gatewayUrl: string, code: string, state: string) {
  const url = new URL(`${gatewayUrl}sailapps/code/${code}`);
  url.searchParams.set('state', state);
  try {
    const response = await fetch(url, {
      method: 'POST',
    });
    return await response.json();
  } catch (error) {
    return [];
  }
}

