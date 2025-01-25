export async function evaluateJSONPath(gatewayUrl, jsonPathQuery, jsonData) {
    try {
        // Ensure we have a proper JSON string
        const jsonString = typeof jsonData === 'string' 
            ? jsonData  // Keep string as is
            : JSON.stringify(jsonData);  // Convert object to string

        const requestBody = {
            jsonPathQuery,
            jsonData: jsonString
        };

        // Log the actual data being sent
        console.log('Sending request:', JSON.stringify(requestBody, null, 2));

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