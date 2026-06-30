---
id: v1-tenant-context
title: TenantContext
pagination_label: TenantContext
sidebar_label: TenantContext
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'TenantContext', 'v1TenantContext']
slug: /tools/sdk/typescript/tenant_context/methods/tenant-context
tags: ['SDK', 'Software Development Kit', 'TenantContext', 'v1TenantContext']
---

# TenantContextV1Api
  The purpose of this API is to manage key-value pairs specific to a tenant&#39;s context, enabling dynamic configuration and personalized settings per tenant.
Context key-value pairs will consist of common terms and acronyms used within your organization.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-tenant-context-v1**](#get-tenant-context-v1) | **GET** `/tenant-context/v1` | Retrieve tenant context
[**patch-tenant-context-v1**](#patch-tenant-context-v1) | **PATCH** `/tenant-context/v1` | Update tenant context


## get-tenant-context-v1
Retrieve tenant context
Returns all key-value pairs representing the current state of the tenant's context.
Each tenant is limited to a maximum of 100 key-value pairs.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-tenant-context-v1)

### Parameters

This endpoint does not need any parameter.

### Return type

`Array<GetTenantContextV1200ResponseInnerV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { TenantContextV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new TenantContextV1Api(configuration);
const result = await apiInstance.getTenantContextV1({  });
console.log(result);
```

[[Back to top]](#)

## patch-tenant-context-v1
Update tenant context
Allows the user to make incremental updates to tenant context records using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

This endpoint is specifically designed to modify the `/Key/*` field, supporting operations such as `add`, `remove`, or `replace` to manage key-value pairs. 

Note that each tenant is limited to a maximum of 100 key-value pairs.


[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-tenant-context-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**jsonpatchoperationV1** | `JsonpatchoperationV1` |  | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { TenantContextV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new TenantContextV1Api(configuration);
const jsonpatchoperationV1: JsonpatchoperationV1 = [{"op":"add","path":"/Key/IAS","value":"Integrated Automation System"},{"op":"replace","path":"/Key/IAS","value":"International Accounting Standards"},{"op":"remove","path":"/Key/NDR"}]; // 
const result = await apiInstance.patchTenantContextV1({ jsonpatchoperationV1: jsonpatchoperationV1 });
console.log(result);
```

[[Back to top]](#)

