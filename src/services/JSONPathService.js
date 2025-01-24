export async function evaluateJSONPath(gatewayUrl, jsonPathQuery, jsonData) {
    try {
        // Ensure jsonData is a properly formatted JSON string
        const jsonString = typeof jsonData === 'string' 
            ? jsonData.trim() // Remove any whitespace
            : JSON.stringify(jsonData);

        const requestBody = {
            jsonPathQuery: jsonPathQuery,
            jsonData: jsonString
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