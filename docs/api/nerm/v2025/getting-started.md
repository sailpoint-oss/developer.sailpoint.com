# Getting Started

## Find Your Tenant Name

Before you can make API calls, you must identify what tenant and url you should use to make your calls. The url used is the same as the url for your browser client. For example, if you log in to `https://mycompany.nonemployee.com`, then you will make your API calls to `https://mycompany.nonemployee.com/api/<resource>`

## Authentication Options

NERM supports two authentication methods:

### 1. NERM API Key (Legacy)

:::caution Deprecated

Legacy NERM API keys are deprecated and do not support scopes. Use SailPoint Identity Security API tokens instead, as described below. For details on the scopes available with SailPoint Identity Security API tokens, refer to [Authorization](./authorization.md).

:::

To authenticate with a NERM-specific API key, you will need to generate a token by following the instructions here: [Generating a New API Key](https://documentation.sailpoint.com/ne-admin/help/setup/api.html). Once you have your token, you are ready to start making calls!

<a id="2-identity-security-cloud-isc-api-token-recommended" class="legacy-anchor"></a>

### 2. SailPoint Identity Security API Token (Recommended)

NERM now supports authentication using SailPoint Identity Security personal access tokens. This allows you to use the same authentication method across both SailPoint Identity Security and NERM APIs.

To authenticate with a SailPoint Identity Security token:

1. **Find your SailPoint Identity Security tenant's OAuth details** - Your tenant is likely using the domain name supplied by SailPoint (`[tenant].api.identitynow.com`). If you have admin access but don't know your tenant name, you can find it in your tenant under Dashboard > Overview > Org Details.

2. **Generate a personal access token (PAT)** - Follow these steps:
   - Select **Preferences** from the drop-down menu under your username, then **Personal Access Tokens** on the left
   - Click **New Token** and enter a meaningful description
   - Click **Create Token** to generate and view the `Client ID` and `Client Secret`
   - Copy both values somewhere secure (the Secret will not be visible after you close the window)

3. **Request an access token** - Use your PAT to get a JWT access token by making a POST request:

```bash
curl --location 'https://[tenant].api.identitynow.com/oauth/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'client_id={clientId}' \
--data-urlencode 'client_secret={clientSecret}'
```

4. **Use the access token** - Include the JWT access token in your NERM API requests:

```bash
curl --location 'https://mycompany.nonemployee.com/api/v2025/non-employee-sources' \
--header 'Authorization: Bearer {access_token}'
```

For more detailed information about SailPoint Identity Security authentication, refer to the [Authentication Guide](/docs/api/authentication).

## API Tools

There are several API tools that make exploring and testing APIs easier than using the command line or a programming language. One tool is [Postman](https://www.postman.com/downloads/). SailPoint provides an official Postman workspace where our collections are always up to date with the latest API changes. [Click here](https://developer.sailpoint.com/discuss/t/official-identitynow-postman-workspace/6153) to get started with our Postman workspace.

For more information about using Postman with SailPoint APIs, see the [Postman Collections](/docs/api/postman-collections) guide.
