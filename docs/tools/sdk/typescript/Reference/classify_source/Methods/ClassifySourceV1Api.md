---
id: v1-classify-source
title: ClassifySource
pagination_label: ClassifySource
sidebar_label: ClassifySource
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ClassifySource', 'v1ClassifySource']
slug: /tools/sdk/typescript/classify_source/methods/classify-source
tags: ['SDK', 'Software Development Kit', 'ClassifySource', 'v1ClassifySource']
---

# ClassifySourceV1Api
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-classify-machine-account-from-source-v1**](#delete-classify-machine-account-from-source-v1) | **DELETE** `/sources/v1/{sourceId}/classify` | Cancel classify source\&#39;s accounts process
[**get-classify-machine-account-from-source-status-v1**](#get-classify-machine-account-from-source-status-v1) | **GET** `/sources/v1/{sourceId}/classify` | Source accounts classification status
[**send-classify-machine-account-from-source-v1**](#send-classify-machine-account-from-source-v1) | **POST** `/sources/v1/{sourceId}/classify` | Classify source\&#39;s all accounts


## delete-classify-machine-account-from-source-v1
Cancel classify source\'s accounts process
Use this API to cancel account classification process on a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-classify-machine-account-from-source-v1)

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
import { ClassifySourceV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ClassifySourceV1Api(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // Source ID.
const result = await apiInstance.deleteClassifyMachineAccountFromSourceV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## get-classify-machine-account-from-source-status-v1
Source accounts classification status
Use this API to get the status of Machine Account Classification process for a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-classify-machine-account-from-source-status-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]

### Return type

`SourceclassificationstatusV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ClassifySourceV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ClassifySourceV1Api(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // Source ID.
const result = await apiInstance.getClassifyMachineAccountFromSourceStatusV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## send-classify-machine-account-from-source-v1
Classify source\'s all accounts
Use this API to classify all the accounts from a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/send-classify-machine-account-from-source-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]

### Return type

`SendClassifyMachineAccountFromSourceV1200ResponseV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ClassifySourceV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ClassifySourceV1Api(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // Source ID.
const result = await apiInstance.sendClassifyMachineAccountFromSourceV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

