---
id: v1-machine-account-mappings
title: MachineAccountMappings
pagination_label: MachineAccountMappings
sidebar_label: MachineAccountMappings
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MachineAccountMappings', 'v1MachineAccountMappings']
slug: /tools/sdk/typescript/machine_account_mappings/methods/machine-account-mappings
tags: ['SDK', 'Software Development Kit', 'MachineAccountMappings', 'v1MachineAccountMappings']
---

# MachineAccountMappingsV1Api
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-account-mappings-v1**](#create-machine-account-mappings-v1) | **POST** `/sources/v1/{sourceId}/machine-account-mappings` | Create machine account mappings
[**delete-machine-account-mappings-v1**](#delete-machine-account-mappings-v1) | **DELETE** `/sources/v1/{sourceId}/machine-account-mappings` | Delete source\&#39;s machine account mappings
[**list-machine-account-mappings-v1**](#list-machine-account-mappings-v1) | **GET** `/sources/v1/{sourceId}/machine-account-mappings` | Machine account mapping for source
[**set-machine-account-mappings-v1**](#set-machine-account-mappings-v1) | **PUT** `/sources/v1/{sourceId}/machine-mappings` | Update source\&#39;s machine account mappings


## create-machine-account-mappings-v1
Create machine account mappings
Creates Machine Account Mappings for both identities and accounts for a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-machine-account-mappings-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**attributemappingsV1** | `AttributemappingsV1` |  | 

### Return type

`Array<AttributemappingsV1>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MachineAccountMappingsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MachineAccountMappingsV1Api(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // Source ID.
const attributemappingsV1: AttributemappingsV1 = ; // 
const result = await apiInstance.createMachineAccountMappingsV1({ sourceId: sourceId, attributemappingsV1: attributemappingsV1 });
console.log(result);
```

[[Back to top]](#)

## delete-machine-account-mappings-v1
Delete source\'s machine account mappings
Use this API to remove machine account attribute mappings for a Source. 
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-machine-account-mappings-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | source ID. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineAccountMappingsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MachineAccountMappingsV1Api(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // source ID.
const result = await apiInstance.deleteMachineAccountMappingsV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## list-machine-account-mappings-v1
Machine account mapping for source
Retrieves Machine account mappings for a specified source using Source ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-machine-account-mappings-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Array<AttributemappingsV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineAccountMappingsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MachineAccountMappingsV1Api(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // Source ID
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listMachineAccountMappingsV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## set-machine-account-mappings-v1
Update source\'s machine account mappings
Use this API to update Machine Account Attribute Mapping for a Source. A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-machine-account-mappings-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**attributemappingsV1** | `AttributemappingsV1` |  | 

### Return type

`Array<AttributemappingsV1>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MachineAccountMappingsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MachineAccountMappingsV1Api(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // Source ID.
const attributemappingsV1: AttributemappingsV1 = ; // 
const result = await apiInstance.setMachineAccountMappingsV1({ sourceId: sourceId, attributemappingsV1: attributemappingsV1 });
console.log(result);
```

[[Back to top]](#)

