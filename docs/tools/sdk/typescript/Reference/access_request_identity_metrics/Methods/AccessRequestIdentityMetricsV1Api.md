---
id: v1-access-request-identity-metrics
title: AccessRequestIdentityMetrics
pagination_label: AccessRequestIdentityMetrics
sidebar_label: AccessRequestIdentityMetrics
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessRequestIdentityMetrics', 'v1AccessRequestIdentityMetrics']
slug: /tools/sdk/typescript/access_request_identity_metrics/methods/access-request-identity-metrics
tags: ['SDK', 'Software Development Kit', 'AccessRequestIdentityMetrics', 'v1AccessRequestIdentityMetrics']
---

# AccessRequestIdentityMetricsV1Api
  Use this API to implement access request identity metrics functionality.
With this functionality in place, access request reviewers can see relevant details about the requested access item and associated source activity. 
This allows reviewers to see how many of the identities who share a manager with the access requester have this same type of access and how many of them have had activity in the related source. 
This additional context about whether the access has been granted before and how often it has been used can help those approving access requests make more informed decisions.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-access-request-identity-metrics-v1**](#get-access-request-identity-metrics-v1) | **GET** `/access-request-identity-metrics/v1/{identityId}/requested-objects/{requestedObjectId}/type/{type}` | Return access request identity metrics


## get-access-request-identity-metrics-v1
Return access request identity metrics
Use this API to return information access metrics.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-access-request-identity-metrics-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityId** | `string` | Manager\&#39;s identity ID. |  [default to undefined]
**requestedObjectId** | `string` | Requested access item\&#39;s ID. |  [default to undefined]
**type** | `'ENTITLEMENT' | 'ROLE' | 'ACCESS_PROFILE'` | Requested access item\&#39;s type. |  [default to undefined]

### Return type

`object`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccessRequestIdentityMetricsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccessRequestIdentityMetricsV1Api(configuration);
const identityId: string = 7025c863-c270-4ba6-beea-edf3cb091573; // Manager\&#39;s identity ID.
const requestedObjectId: string = 2db501be-f0fb-4cc5-a695-334133c52891; // Requested access item\&#39;s ID.
const type: string = ENTITLEMENT; // Requested access item\&#39;s type.
const result = await apiInstance.getAccessRequestIdentityMetricsV1({ identityId: identityId, requestedObjectId: requestedObjectId, type: type });
console.log(result);
```

[[Back to top]](#)

