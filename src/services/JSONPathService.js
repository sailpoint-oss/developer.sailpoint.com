export async function evaluateJSONPath(gatewayUrl, jsonPathQuery, jsonData) {
    try {
        // Always convert the data to a proper JSON string
        const jsonString = JSON.stringify(
            typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData
        );

        const requestBody = {
            jsonPathQuery: jsonPathQuery,
            jsonData: jsonString
        };

        console.log('Sending request:', {
            jsonPathQuery,
            jsonData: JSON.parse(jsonString)  // Log the parsed version for readability
        });

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