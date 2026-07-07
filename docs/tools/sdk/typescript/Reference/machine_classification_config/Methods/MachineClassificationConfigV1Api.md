---
id: v1-machine-classification-config
title: MachineClassificationConfig
pagination_label: MachineClassificationConfig
sidebar_label: MachineClassificationConfig
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MachineClassificationConfig', 'v1MachineClassificationConfig']
slug: /tools/sdk/typescript/machine_classification_config/methods/machine-classification-config
tags: ['SDK', 'Software Development Kit', 'MachineClassificationConfig', 'v1MachineClassificationConfig']
---

# MachineClassificationConfigV1Api
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-machine-classification-config-v1**](#delete-machine-classification-config-v1) | **DELETE** `/sources/v1/{sourceId}/machine-classification-config` | Delete source\&#39;s classification config
[**get-machine-classification-config-v1**](#get-machine-classification-config-v1) | **GET** `/sources/v1/{sourceId}/machine-classification-config` | Machine classification config for source
[**set-machine-classification-config-v1**](#set-machine-classification-config-v1) | **PUT** `/sources/v1/{sourceId}/machine-classification-config` | Update source\&#39;s classification config


## delete-machine-classification-config-v1
Delete source\'s classification config
Use this API to remove Classification Config for a Source. 
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-machine-classification-config-v1)

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
import { MachineClassificationConfigV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MachineClassificationConfigV1Api(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // Source ID.
const result = await apiInstance.deleteMachineClassificationConfigV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## get-machine-classification-config-v1
Machine classification config for source
This API returns a Machine Classification Config for a Source using Source ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-machine-classification-config-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID |  [default to undefined]

### Return type

`MachineclassificationconfigV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineClassificationConfigV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MachineClassificationConfigV1Api(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // Source ID
const result = await apiInstance.getMachineClassificationConfigV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## set-machine-classification-config-v1
Update source\'s classification config
Use this API to update Classification Config for a Source. A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-machine-classification-config-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**machineclassificationconfigV1** | `MachineclassificationconfigV1` |  | 

### Return type

`MachineclassificationconfigV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MachineClassificationConfigV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MachineClassificationConfigV1Api(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // Source ID.
const machineclassificationconfigV1: MachineclassificationconfigV1 = ; // 
const result = await apiInstance.setMachineClassificationConfigV1({ sourceId: sourceId, machineclassificationconfigV1: machineclassificationconfigV1 });
console.log(result);
```

[[Back to top]](#)

