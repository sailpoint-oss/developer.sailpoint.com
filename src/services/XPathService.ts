// Common function to handle XPath evaluation
export async function evaluateXPath(
    gatewayUrl: string,
    xPathQuery: string,
    rootPath: string,
    xmlData: string | object
): Promise<any> {
	const buffer = Buffer.from(xmlData);
    const xmlb64String = buffer.toString('base64');

    const requestBody = {
        attributeMappings: {
			'XPath Query Result': xPathQuery
		},
		rootPath: rootPath,
        xml: xmlb64String
    };

    try {
        const response = await fetch(`${gatewayUrl}`, {
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

            throw new Error(`XPath evaluation error: ${errorResponse.error}`);
        }

        const json = await response.json();
		console.log('Response JSON: ' + json);

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
        console.error('Error evaluating XPath:', error);
        throw error;
    }
}