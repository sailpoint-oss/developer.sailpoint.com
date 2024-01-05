exports.authHandler = async (event) => {
    const token = event.headers.Authorization;
    
    // Expected credentials
    const expectedUsername = process.env.AUTH_USERNAME;
    const expectedPassword = process.env.AUTH_PASSWORD;

    try {
        const { username, password } = decodeAuthToken(token);
        if (username === expectedUsername && password === expectedPassword) {
            return generatePolicy('user', 'Allow', event.routeArn);
        } else {
            throw new Error('Unauthorized');
        }
    } catch (err) {
        console.log(err.message);
        return generatePolicy('user', 'Deny', event.routeArn);
    }
};

function decodeAuthToken(token) {
    if (!token || !token.startsWith('Basic ')) {
        throw new Error('Missing or invalid Authorization header');
    }

    const base64Credentials = token.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');
    return { username, password };
}

function generatePolicy(principalId, effect, resource) {
    return {
        principalId,
        policyDocument: {
            Version: '2012-10-17',
            Statement: [
                {
                    Action: 'execute-api:Invoke',
                    Effect: effect,
                    Resource: resource
                }
            ]
        }
    };
}

