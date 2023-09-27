---
id: getting-started
title: Getting Started
pagination_label: Getting Started
sidebar_label: Getting Started
sidebar_position: 1
sidebar_class_name: gettingStarted
keywords: ['getting started']
description: This is this place to get started with IdentityNow APIs.
slug: /api/getting-started
tags: ['Getting Started']
---

## Overview

This guide is intended to help you quickly make your first API call to SailPoint IdentityNow, and assumes an intermediate level of understanding of APIs.  For beginners to APIs, we recommend you watch this presentation that covers the fundamentals of APIs with visual demonstrations of how to make an API call in SailPoint.

<iframe width="560" height="315" src="https://www.youtube.com/embed/YFRz8AcdWXg?si=9AvO6gMT1oCqYXAj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Find Your Tenant Name

To form the proper URL for an API request, you must know your tenant name. To find your tenant name, log into IdentityNow, navigate to Admin, select the Dashboard dropdown, and select Overview. The org name is displayed within the Org Details section of the dashboard. If you do not have admin access, you can still find your tenant name and the API base URL you will use for API calls. To do so, view your session details when you are logged into your IdentityNow instance. Change your URL to the following: `https://{your-IdentityNow-hostname}.com/ui/session`, where `{your-IdentityNow-hostname}` is your company's domain name for accessing IdentityNow. The session detail you want is the `baseUrl`, which has the form of `https://{tenant}.api.identitynow.com`.

## Make Your First API Call

To get started, create a [personal access token](./authentication.md#personal-access-tokens), which can then be used to generate access tokens to authenticate your API calls. To generate a personal access token from IdentityNow, after logging into your IdentityNow instance, do the following:

1. Select **Preferences** from the drop-down menu under your username. Then select **Personal Access Tokens** on the left. You can also go straight to the page using this URL, replacing `{tenant}` with your IdentityNow tenant: `https://{tenant}.identitynow.com/ui/d/user-preferences/personal-access-tokens`.

2. Select **New Token** and enter a meaningful description to differentiate the token from others.

:::caution

The **New Token** button will be disabled when you reach the limit of 10 personal access tokens per user. To avoid reaching this limit, delete any tokens that are no longer needed.

:::

3. Select **Create Token** to generate and view two components the token comprises: the `Secret` and the `Client ID`.

   :::danger Important

   After you create the token, the value of the `Client ID` will be visible in the Personal Access Tokens list, but the corresponding `Secret` will not be visible after you close the window. Store the `Secret` somewhere secure.

   :::

4. Copy both values somewhere that will be secure and accessible to you when you need to use the the token.

5. To create an `access_token` that can be used to authenticate API requests, use the following cURL command, replacing `{tenant}` with your IdentityNow tenant. The response body will contain an `access_token`, which will look like a long string of random characters.

```bash
curl --location --request POST 'https://{tenant}.api.identitynow.com/oauth/token?grant_type=client_credentials&client_id={client_id}&client_secret={secret}'
```

6. To test your `access_token`, execute the following cURL command, replacing `{tenant}` with your IdentityNow tenant and `access_token` with the token you generated in the previous step. If this is successful, you should get a JSON representation of an identity in your tenant.

```bash
curl --request GET --url 'https://{tenant}.api.identitynow.com/v3/public-identities?limit=1' --header 'authorization: Bearer {access_token}'
```

For more information about SailPoint Platform authentication, see [API Authentication](./authentication.md)

## Rate Limits

There is a rate limit of 100 requests per `access_token` per 10 seconds for V3 API calls through the API gateway. If you exceed the rate limit, expect the following response from the API:

**HTTP Status Code**: 429 Too Many Requests

**Headers**:

- **Retry-After**: {seconds to wait before rate limit resets}

## API Tools

There are several API tools that make exploring and testing APIs easier than using the command line or a programming language. One tool is [Postman](https://www.postman.com/downloads/). SailPoint provides an official Postman workspace where our collections are always up to date with the latest API changes. [Click here](https://developer.sailpoint.com/discuss/t/official-identitynow-postman-workspace/6153) to get started with our Postman workspace.
