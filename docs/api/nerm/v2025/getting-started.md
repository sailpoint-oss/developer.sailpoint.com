---
id: getting-started
title: Getting Started
pagination_label: Getting Started
sidebar_label: Getting Started
sidebar_position: 1
sidebar_class_name: gettingStarted
keywords: ['getting started']
description: Start using the NERM APIs.
slug: /api/nerm/v2025/getting-started
tags: ['Getting Started']
---

## Find Your Tenant Name

Before you can make API calls, you must identify what tenant and url you should use to make your calls. The url used is the same as the url for your browser client. For example, if you log in to `https://mycompany.nonemployee.com`, then you will make your API calls to `https://mycompany.nonemployee.com/api/<resource>`

## Authentication Options

NERM supports two authentication methods:

### 1. NERM API Key (Legacy)

To authenticate with a NERM-specific API key, you will need to generate a token by following the instructions here: [Generating a New API Key](https://documentation.sailpoint.com/ne-admin/help/setup/api.html). Once you have your token, you are ready to start making calls!

### 2. Identity Security Cloud (ISC) API Token (Recommended)

NERM now supports authentication using Identity Security Cloud (ISC) personal access tokens. This allows you to use the same authentication method across both ISC and NERM APIs.

To authenticate with an ISC token:

1. **Find your ISC tenant's OAuth details** - Your ISC instance is likely using the domain name supplied by SailPoint (`[tenant].api.identitynow.com`). If you have admin access but don't know your tenant name, you can find it in your ISC instance under Dashboard > Overview > Org Details.

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

For more detailed information about ISC authentication, refer to the [ISC Authentication Guide](/docs/api/authentication).

## API Tools

There are several API tools that make exploring and testing APIs easier than using the command line or a programming language. One tool is [Postman](https://www.postman.com/downloads/). SailPoint provides an official Postman workspace where our collections are always up to date with the latest API changes. [Click here](https://developer.sailpoint.com/discuss/t/official-identitynow-postman-workspace/6153) to get started with our Postman workspace.

For more information about using Postman with SailPoint APIs, see the [Postman Collections](/docs/api/postman-collections) guide.
