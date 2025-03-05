// Common function to handle JSONPath evaluation
async function evaluateJSONPath(
    gatewayUrl: string,
    endpoint: string,
    jsonPathQuery: string,
    jsonData: string | object
): Promise<any> {
    // Ensure we have a proper JSON string
    const jsonString = typeof jsonData === 'string'
        ? jsonData
        : JSON.stringify(jsonData);

    const requestBody = {
        path: jsonPathQuery,
        json: jsonString
    };

    try {
        const response = await fetch(`${gatewayUrl}jsonpath/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            console.error('JSONPath error:', errorResponse.error);

            // Handle rate limiting specifically
            if (response.status === 429) {
                throw new Error('Too many requests. Please wait a moment and try again.');
            }

            throw new Error(`JSON Path evaluation error: ${errorResponse.error}`);
        }

        const json = await response.json();

        // Parse the result if it's a string containing JSON
        if (json.result && typeof json.result === 'string') {
            try {
                json.result = JSON.parse(json.result);
            } catch (e) {
                // If it's not valid JSON, keep the original string
                console.log('Result was not JSON parseable, keeping as is');
            }
        }

        return json;
    } catch (error) {
        console.error('Error evaluating JSONPath:', error);
        throw error;
    }
}

// Specific implementation functions that use the common logic
export function evaluateJSONPathJava(
    gatewayUrl: string,
    jsonPathQuery: string,
    jsonData: string | object
): Promise<any> {
    return evaluateJSONPath(gatewayUrl, 'java', jsonPathQuery, jsonData);
}

export function evaluateJSONPathGo(
    gatewayUrl: string,
    jsonPathQuery: string,
    jsonData: string | object
): Promise<any> {
    return evaluateJSONPath(gatewayUrl, 'go', jsonPathQuery, jsonData);
}
