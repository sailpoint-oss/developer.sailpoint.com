---
id: v1-jit-access
title: JITAccess
pagination_label: JITAccess
sidebar_label: JITAccess
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'JITAccess', 'v1JITAccess']
slug: /tools/sdk/typescript/jit_access/methods/jit-access
tags: ['SDK', 'Software Development Kit', 'JITAccess', 'v1JITAccess']
---

# JITAccessV1Api
  Use these APIs to configure JIT provisioning activation policy for the tenant.
OAuth scopes: **idn:jit-policy:read** and **idn:jit-policy:manage** (get config), **idn:jit-policy:update** and **idn:jit-policy:manage** (update config). JIT activation workflow APIs use **idn:jit-activation-workflow:*** scopes (activate, extend, deactivate, manage, and **idn:jit-activation-workflow-internal:manage**).
For REST contract details, use the JIT Access operations in this specification and the [SailPoint API documentation](https://developer.sailpoint.com/idn/api/).
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-jit-activation-config-v1**](#get-jit-activation-config-v1) | **GET** `/jit-activation-config/v1/{configType}` | Get JIT activation policy configuration
[**patch-jit-activation-config-v1**](#patch-jit-activation-config-v1) | **PATCH** `/jit-activation-config/v1/{configType}` | Update JIT activation policy configuration


## get-jit-activation-config-v1
Get JIT activation policy configuration
Returns the tenant's current JIT activation policy configuration, including governed entitlement IDs, activation and extension time limits, default periods, notification settings, and whether the policy applies to future assignments.

The tenant comes from the authenticated request context (not the URL). Use **configType** to select which configuration to read. Returns **404** if that configuration has not been stored yet.

**User level:** POLICY_ADMIN (policy administrator).


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-jit-activation-config-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**configType** | `'policy'` | Configuration kind to read. Only **policy** (JIT activation policy) is supported today.  |  [default to undefined]

### Return type

`JitactivationconfigresponseV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { JITAccessV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new JITAccessV1Api(configuration);
const configType: string = policy; // Configuration kind to read. Only **policy** (JIT activation policy) is supported today. 
const result = await apiInstance.getJitActivationConfigV1({ configType: configType });
console.log(result);
```

[[Back to top]](#)

## patch-jit-activation-config-v1
Update JIT activation policy configuration
Updates the tenant's JIT activation policy configuration by applying one or more **replace** operations (same shape as JSON Patch: **op**, **path**, **value**). Use this to change entitlement lists, max/default activation and extension durations, notification recipients or template, and the apply-to-future-assignments flag.

The body must be a non-empty array. Only **replace** is supported; each **path** must be one of the values documented on the request item schema. The tenant is taken from the request context. **configType** selects which configuration to update. Returns **404** if the configuration does not exist, or **400** for an empty body, unknown **configType**, or invalid path/value.

**User level:** POLICY_ADMIN (policy administrator).


[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-jit-activation-config-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**configType** | `'policy'` | Configuration kind to update. Only **policy** (JIT activation policy) is supported today.  |  [default to undefined]
**jitaccessoperationrequestV1** | `Array<JitaccessoperationrequestV1>` |  | 

### Return type

`JitactivationconfigresponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { JITAccessV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new JITAccessV1Api(configuration);
const configType: string = policy; // Configuration kind to update. Only **policy** (JIT activation policy) is supported today. 
const jitaccessoperationrequestV1: Array&lt;JitaccessoperationrequestV1&gt; = ; // 
const result = await apiInstance.patchJitActivationConfigV1({ configType: configType, jitaccessoperationrequestV1: jitaccessoperationrequestV1 });
console.log(result);
```

[[Back to top]](#)

