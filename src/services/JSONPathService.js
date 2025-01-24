export async function evaluateJSONPath(gatewayUrl, jsonPathQuery, jsonData) {
    try {
        const requestBody = {
            jsonPathQuery: jsonPathQuery,
            // Convert the JSON data to a string if it's not already
            jsonData: typeof jsonData === 'string' ? jsonData : JSON.stringify(jsonData)
        };

        console.log('Sending request:', requestBody);

        const response = await fetch(gatewayUrl + 'jsonpath', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error('JSONPath error:', errorText);
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const json = await response.json();
        console.log('JSONPath response:', json);
        return json;
    } catch (error) {
        console.error('JSONPath evaluation failed:', error);
        return {
            result: null,
            error: error.message
        };
    }
}