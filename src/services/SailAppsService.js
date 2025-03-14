export async function sendCode(gatewayUrl, code, state) {
  gatewayUrl = `https://57d9ud4zp9.execute-api.us-east-1.amazonaws.com`;
  const url = new URL(`${gatewayUrl}/Prod/sailapps/code/${code}`);
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

