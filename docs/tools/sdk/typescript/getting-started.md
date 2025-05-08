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
  let transforms = await api.listTransforms();
  console.log(transforms);
};

getTransforms();
```

To compile the file, first run the `tsc src/index.ts` command. This command creates a corresponding `index.js` file you can use to run the SDK.

To run the SDK, run the `node src/index.js` command. This command sends the request and outputs a list of transforms stored in your tenant.

### Use query parameters to filter your tenant's transform list

Using the same SDK function, you can list your transforms but limit the results to only what you want. This example wants a list of no more than 10 transforms that start with the name "Test":

Refer to [List Transforms](https://developer.sailpoint.com/docs/api/v3/list-transforms) for all its supported query parameters.

```typescript
import {Configuration, TransformsApi} from 'sailpoint-api-client';

const getTransforms = async () => {
  let apiConfig = new Configuration();
  let api = new TransformsApi(apiConfig);
  let transforms = await api.listTransforms({
    limit: 10,
    filters: 'name sw "Test"',
  });
  console.log(transforms);
};

getTransforms();
```

Run this command to compile and run the code:

```bash
tsc src/index.ts && node src/index.js
```
