// Common function to handle JSONPath evaluation
async function evaluateJSONPath(gatewayUrl, endpoint, jsonPathQuery, jsonData) {
    try {
        // Ensure we have a proper JSON string
        const jsonString = typeof jsonData === 'string' 
            ? jsonData 
            : JSON.stringify(jsonData);

        const requestBody = {
            path: jsonPathQuery,
            json: jsonString
        };

        // Log the actual data being sent
        console.log('Sending request:', JSON.stringify(requestBody, null, 2));

        const response = await fetch(`${gatewayUrl}jsonpath/${endpoint}`, {
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

// Specific implementation functions that use the common logic
export function evaluateJSONPathJava(gatewayUrl, jsonPathQuery, jsonData) {
    return evaluateJSONPath(gatewayUrl, 'java', jsonPathQuery, jsonData);
}

export function evaluateJSONPathGo(gatewayUrl, jsonPathQuery, jsonData) {
    return evaluateJSONPath(gatewayUrl, 'go', jsonPathQuery, jsonData);
}