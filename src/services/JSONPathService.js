export async function evaluateJSONPath(gatewayUrl, jsonPathQuery, jsonData) {
    try {
        const response = await fetch(gatewayUrl + 'jsonpath', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ jsonPathQuery, jsonData })
        });
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        return [];
    }
}