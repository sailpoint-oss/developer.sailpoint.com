---
id: v1-tenant
title: Tenant
pagination_label: Tenant
sidebar_label: Tenant
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Tenant', 'v1Tenant']
slug: /tools/sdk/typescript/tenant/methods/tenant
tags: ['SDK', 'Software Development Kit', 'Tenant', 'v1Tenant']
---

# TenantV1Api
  API for reading tenant details. 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-tenant-v1**](#get-tenant-v1) | **GET** `/tenant/v1` | Get tenant information.


## get-tenant-v1
Get tenant information.
This rest endpoint can be used to retrieve tenant details.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-tenant-v1)

### Parameters

This endpoint does not need any parameter.

### Return type

`TenantV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { TenantV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new TenantV1Api(configuration);
const result = await apiInstance.getTenantV1({  });
console.log(result);
```

[[Back to top]](#)

