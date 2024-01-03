
exports.handler = async (event) => {
    const token = event.authorizationToken;
    try {
        console.log(event)
        // decode and check the auth token
        const base64Credentials = token.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('utf8');
        const [username, password] = credentials.split(':');

        // replace these with your own values
        const expectedUsername = process.env.AUTH_USERNAME;
        const expectedPassword = process.env.AUTH_PASSWORD;

        if (username === expectedUsername && password === expectedPassword) {
            return generatePolicy('user', 'Allow', event.methodArn);
        } else {
            return generatePolicy('user', 'Deny', event.methodArn);
        }
    } catch (e) {
        return generatePolicy('user', 'Deny', event.methodArn);
    }
};

const generatePolicy = (principalId, effect, resource) => {
    const authResponse = {};
    authResponse.principalId = principalId;
    if (effect && resource) {
        const policyDocument = {};
        policyDocument.Version = '2012-10-17';
        policyDocument.Statement = [];
        const statementOne = {};
        statementOne.Action = 'execute-api:Invoke';
        statementOne.Effect = effect;
        statementOne.Resource = resource;
        policyDocument.Statement[0] = statementOne;
        authResponse.policyDocument = policyDocument;
    }
    return authResponse;
};