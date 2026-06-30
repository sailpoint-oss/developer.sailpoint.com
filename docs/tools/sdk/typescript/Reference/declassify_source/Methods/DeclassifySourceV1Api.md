---
id: v1-declassify-source
title: DeclassifySource
pagination_label: DeclassifySource
sidebar_label: DeclassifySource
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'DeclassifySource', 'v1DeclassifySource']
slug: /tools/sdk/typescript/declassify_source/methods/declassify-source
tags: ['SDK', 'Software Development Kit', 'DeclassifySource', 'v1DeclassifySource']
---

# DeclassifySourceV1Api
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**send-declassify-machine-account-from-source-v1**](#send-declassify-machine-account-from-source-v1) | **POST** `/sources/v1/{sourceId}/declassify` | Declassify source\&#39;s all accounts


## send-declassify-machine-account-from-source-v1
Declassify source\'s all accounts
Use this API to declassify all the accounts from a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/send-declassify-machine-account-from-source-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DeclassifySourceV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DeclassifySourceV1Api(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // Source ID.
const result = await apiInstance.sendDeclassifyMachineAccountFromSourceV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

