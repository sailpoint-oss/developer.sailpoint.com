---
id: typescript-sdk-getting-started
title: Getting started with The TypeScript SDK
pagination_label: Getting Started
sidebar_label: Getting Started
sidebar_position: 1
sidebar_class_name: typescriptsdk
keywords: ['tsc', 'typescript', 'sdk', 'start']
description: Learn how to use the TypeScript SDK in this guide.
slug: /tools/sdk/typescript/getting-started
tags: ['SDK']
---

Once your SDK is installed and configured, you can start accessing the SDK's different functionalities. To learn how to install and configure the Typescript SDK, refer to [Installation and Configuration](./index.mdx).

This guide will walk through some examples of this functionality.

To make sure that your SDK is connecting to the APIs you need, you can specify the API within the curly brackets in `import {}` at the top of the "index.ts" file. In this example, you could add `Configuration` and `TransformsApi` to add the functionality to list transforms.

The SDK is organized by API resource rather than by API version, so there are no version namespaces to import. Each method name is suffixed with the version of the endpoint it calls. For example, `listTransformsV1` calls the `v1` version of the List Transforms endpoint. This lets a single SDK access every version of every endpoint without having to import a separate version package.

### List transforms in your tenant

```typescript
import {Configuration, TransformsApi} from 'sailpoint-api-client';

const getTransforms = async () => {
  // Initialize configuration, this requests a token using your configured credentials
  // to be able to call out to APIs
  let apiConfig = new Configuration();

  // Initialize the TransformsApi, this creates an instance of the TransformsApi.
  // The configuration object is passed in so that the API can add your token to the request
  let api = new TransformsApi(apiConfig);

  // Call out to your tenant to get the list of transforms.
  let transforms = await api.listTransformsV1();
  console.log(transforms);
};

getTransforms();
```

To run the SDK, run the `bun src/index.ts` command. This command sends the request and outputs a list of transforms stored in your tenant.

### Use query parameters to filter your tenant's transform list

Using the same SDK function, you can list your transforms but limit the results to only what you want. This example wants a list of no more than 10 transforms that start with the name "Test":

Refer to [List Transforms](https://developer.sailpoint.com/docs/api/list-transforms-v-1) for all its supported query parameters.

```typescript
import {Configuration, TransformsApi} from 'sailpoint-api-client';

const getTransforms = async () => {
  let apiConfig = new Configuration();
  let api = new TransformsApi(apiConfig);
  let transforms = await api.listTransformsV1({
    limit: 10,
    filters: 'name sw "Test"',
  });
  console.log(transforms);
};

getTransforms();
```

Run this command to run the code:

```bash
bun src/index.ts
```
