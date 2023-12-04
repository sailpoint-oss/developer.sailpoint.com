---
id: typescript-sdk-error-handling
title: Error Handling with The TypeScript SDK
pagination_label: Error Handling
sidebar_label: Error Handling
sidebar_position: 8
sidebar_class_name: typescriptsdk
keywords: ['tsc', 'typescript', 'sdk', 'error']
description: Learn how to configure error handling when using the TypeScript SDK.
slug: /tools/sdk/typescript/error-handling
tags: ['SDK']
---

The SDK uses the Axios library to handle HTTP requests.  Axios will throw an error for any response status that falls out of the range of 2xx.  A non-2xx response will immediately halt the program and produce a stack trace. Axios provides two methods for gracefully handling error responses from an API.

Using a `catch` function, you can intercept any non success response and take actions on the results, such as logging the message or performing additional actions before exiting the program.

```typescript showLineNumbers
// Catch any non 2xx response and log the error message and metadata
let transforms = await api.listTransforms().catch(function (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
})
```

You can also define which HTTP status codes should throw an error for a given request using the `validateStatus` option.  This gives you an opportunity to recover from a bad request without exiting the program.

If you don't want the program to exit for 4xx response codes, you can use the following configuration.

```typescript showLineNumbers
// Resolve only if the status code is less than 500
let transforms = await api.listTransforms({filters: 'id eq'}, {validateStatus: function (status) { return status < 500 }})

if (transforms.status === 200) {
    console.log(transforms)
} else if (transforms.status === 400 ) {
    console.log("The filter is invalid.  Continuing execution.")
}
```

If you don't want the program to exit for any error response, you can use the following configuration.

```typescript
await api.listTransforms({}, {validateStatus: function (status) { return true }})
```
