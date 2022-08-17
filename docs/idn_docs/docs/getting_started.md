# Getting Started with SailPoint APIs

## Finding your Org/Tenant Name

You will need to know your org/tenant name in order to form the proper URL for an API request.  You can find your org/tenant name by logging into IdentityNow, navigating to the Admin UI, and clicking on the Dashboard dropdown and selecting the Overview page.  The org name is displayed within the Org Details section of the dashboard.  If you do not have admin access, you can find your tenant name, as well as the API base URL that you will use for API calls, by viewing your session details when logged into your IdentityNow instance.  Simply change your URL to the following: `https://{your-IdentityNow-hostname}.com/ui/session`, where `{your-IdentityNow-hostname}` is your company's domain name for accessing IdentityNow.  The session detail you want is the `baseUrl`, which will have the form of `https://{tenant}.api.identitynow.com`.

## Making Your First API Call

To get started, you will need create a [personal access token](./authentication.md#personal-access-tokens), which can then be used to generate access tokens to authenticate your API calls.  To generate a personal access token from the IdentityNow UI, perform the following steps after logging into your IdentityNow instance:

1. Select **Preferences** from the drop-down menu under your username, then **Personal Access Tokens** on the left.  You can also go straight to the page using this URL, replacing `{tenant}` with your IdentityNow tenant: `https://{tenant}.identitynow.com/ui/d/user-preferences/personal-access-tokens`.

2. Click **New Token** and enter a meaningful description to help differentiate the token from others.

    >**Note**: The **New Token** button will be disabled when you’ve reached the limit of 10 personal access tokens per user. To avoid reaching this limit, we recommend you delete any tokens that are no longer needed.

3. Click **Create Token** to generate and view the two components that comprise the token: the `Secret` and the `Client ID`.

    >**IMPORTANT**: After you create the token, the value of the `Client ID` will be visible in the Personal Access Tokens list, but the corresponding `Secret` will not be visible after you close the window.  You will need to store the `Secret` somewhere secure.

4. Copy both values somewhere that will be secure and accessible to you when you need to use the the token.

5. To create an `access_token` that can be used to authenticate API requests, use the following cURL command, replacing `{tenant}` with your IdentityNow tenant.  The response body will contain an `access_token`, which will look like a long string of random characters.

    ```sh
    curl --location --request POST 'https://{tenant}.api.identitynow.com/oauth/token?grant_type=client_credentials&client_id={client_id}&client_secret={secret}'
    ```

6. To test your `access_token`, execute the following cURL command, replacing `{tenant}` with your IdentityNow tenant and `access_token` with the token you generated in the previous step. If successful, you should get a JSON representation of an identity in your tenant.

    ```sh
    curl --request GET --url 'https://{tenant}.api.identitynow.com/v3/public-identities?limit=1' --header 'authorization: Bearer {access_token}'
    ```

For more information about SailPoint Platform authentication, see [API Authentication](./authentication.md)

## Rate Limits

There is a rate limit of 100 requests per `access_token` per 10 seconds for V3 API calls through the API gateway. If you exceed the rate limit, expect the following response from the API.

**HTTP Status Code**: 429 Too Many Requests

**Headers**:

* **Retry-After**: {seconds to wait before rate limit resets}

## Authorization

Each API resource requires a specific level of authorization attached to your `access_token`. Please review the authorization constraints for each API endpoint.  Tokens generated outside of a user context, like the [Client Credentials](./authentication.md#client-credentials-grant-flow) we generated above to make your first API call, will be limited in the endpoints that it can call.  If your token doesn't have permission to call an endpoint, you will receive the following response:

**HTTP Status Code**: 403 Forbidden

**Response Body**:

```JSON
{
    "detailCode": "403 Forbidden",
    "trackingId": "fca9eb2227514d6d90cd4a1d1cdc255c",
    "messages": [
        {
            "locale": "en-US",
            "localeOrigin": "DEFAULT",
            "text": "The server understood the request but refuses to authorize it."
        }
    ]
}
```

## Using an API Tool

There are several API tools that make exploring and testing APIs easier than using the command line or a programming language.  One such tool is [Postman](https://www.postman.com/downloads/).  To import the SailPoint REST APIs into a tool like Postman, you must first download the REST specification.  Navigate to [https://developer.sailpoint.com/apis/v3](https://developer.sailpoint.com/apis/v3) and click the "Download OpenAPI specification" button.  You can then import the JSON file in Postman by using the [import wizard](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/) within Postman.
