export async function evaluateJSONPath(gatewayUrl, jsonPathQuery, jsonData) {
    try {
        // Parse the input if it's a string, otherwise use as is
        const parsedData = typeof jsonData === 'string' 
            ? JSON.parse(jsonData.trim())
            : jsonData;

        const requestBody = {
            jsonPathQuery: jsonPathQuery,
            jsonData: JSON.stringify(parsedData)  // Single stringify of the parsed data
        };

        console.log('Sending request:', {
            jsonPathQuery,
            jsonData: parsedData  // Log the parsed data for clarity
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