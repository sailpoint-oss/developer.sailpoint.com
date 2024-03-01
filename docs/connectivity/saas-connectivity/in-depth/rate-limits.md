---
id: handling-rate-limits
title: Handling Rate Limits
pagination_label: Handling Rate Limits
sidebar_label: Handling Rate Limits
sidebar_position: 6
sidebar_class_name: handlingRateLimits
keywords: ['connectivity', 'connectors', 'rate limits']
description: Rate limiting for SaaS Connectivity.
slug: /connectivity/saas-connectivity/in-depth/handling-rate-limits
tags: ['Connectivity']
---

APIs often implement rate limits to prevent any one user from abusing the API or using an unfair amount of resources, limiting what other users of the API can do. The rate limits can manifest in many ways, but one of the most common ways is the 429 (Too Many Requests) HTTP status code. You must check the documentation of the API you are using to see whether it enforces rate limits and how it notifies you when you reach that limit. An example of rate limit documentation for Stripe’s API can be found [here](https://stripe.com/docs/rate-limits).

If you are using a vendor supplied client library for the API, check the documentation for that client library to see whether it handles rate limits for you. If it does, you do not need to worry about rate limits. If it does not or if you have to implement your own library for interacting with the target API, you must handle rate limiting yourself. If you are implementing your own library for the target API, the easiest way to handle rate limits is to use the [axios-retry](https://www.npmjs.com/package/axios-retry) NPM package in conjunction with the [axios](https://www.npmjs.com/package/axios) HTTP request library. Start by including both packages in the dependencies section of your `package.json` file:

```json
...
"dependencies": {
    "@sailpoint/connector-sdk": "github:sailpoint-oss/sp-connector-sdk-js#main",
    "axios": "^0.24.0",
    "axios-retry": "^3.2.4"
  }
...
```

Next, run `npm install` in your project directory to install the packages. Once they are installed, go to the section of your code that handles API calls to your source and wrap your Axios HTTP client object in an Axios retry object. In the following snippet, the code automatically retries an API call that fails with a 429 error code three times, using exponential back-off between each API call. You can configure this better to suit your API’s rate limit. The following code snippet from [discourse-client.ts](https://github.com/sailpoint-oss/discourse-connector-2/blob/main/src/discourse-client.ts) shows the code necessary to set up the retry logic:

```javascript
import { ConnectorError } from "@sailpoint/connector-sdk"
import axios, { AxiosInstance } from "axios"
import axiosRetry from "axios-retry"

/**
 * DiscourseClient is the client that communicates with Discourse APIs.
 */
export class DiscourseClient {
    private readonly apiKey?: string
    private readonly apiUsername?: string
    private readonly baseUrl?: string

    httpClient: AxiosInstance

    constructor(config: any) {
        // Fetch necessary properties from config.
        this.apiKey = config?.apiKey
        if (this.apiKey == null) {
            throw new ConnectorError('apiKey must be provided from config')
        }

        this.apiUsername = config?.apiUsername
        if (this.apiUsername == null) {
            throw new ConnectorError('apiUsername must be provided from config')
        }

        this.baseUrl = config?.baseUrl
        if (this.baseUrl == null) {
            throw new ConnectorError('baseUrl must be provided from config')
        }

        this.httpClient = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Api-Key': this.apiKey,
                'Api-Username': this.apiUsername
            }
        })

        // Wrap our Axios HTTP client in an Axios retry object to automatically
        // handle rate limiting.  By default, this logic will retry a given
        // API call 3 times before failing.  Read the documentation for
        // axios-retry on NPM to see more configuration options.
        axiosRetry(this.httpClient, {
            retryDelay: axiosRetry.exponentialDelay,
            retryCondition: (error) => {
                // Only retry if the API call recieves an error code of 429
                // this logic can be replaced with whatever approach is necessary for your connector
                return error.response!.status === 429
            }
        })
    }
...
```

Because `axios-retry` wraps an `axios` object, you can make API calls like you normally would with Axios without any special options or configuration.

```javascript
private async getUserEmailAddress(username: string): Promise<string> {
    // Use our axios httpClient object like we normally would.  If this call
    // fails with a 429, it will automatically wait 30 seconds before retrying
    // the call.  It will do this three times before hard failing.  The catch
    // function will catch any other error besides a 429.
    const response = await this.httpClient.get<UserEmail>(`/u/${username}/emails.json`).catch(error => {
        throw new ConnectorError(`Failed to retrieve email for user ${username}`)
    })

    return response.data.email!
}
```
