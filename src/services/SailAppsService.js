export async function sendCode(gatewayUrl, code) {
  try {
    const response = await fetch(`${gatewayUrl}code/${code}`);
    return await response.json();
  } catch (error) {
    return [];
  }
}