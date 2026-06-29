---
id: v1-managed-cluster-types
title: ManagedClusterTypes
pagination_label: ManagedClusterTypes
sidebar_label: ManagedClusterTypes
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ManagedClusterTypes', 'v1ManagedClusterTypes']
slug: /tools/sdk/typescript/managed_cluster_types/methods/managed-cluster-types
tags: ['SDK', 'Software Development Kit', 'ManagedClusterTypes', 'v1ManagedClusterTypes']
---

# ManagedClusterTypesV1Api
  Use this API to implement managed cluster types functionality. 
With this functionality in place, administrators can modify and delete existing managed cluster types and create new ones.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-managed-cluster-type-v1**](#create-managed-cluster-type-v1) | **POST** `/managed-cluster-types/v1` | Create new managed cluster type
[**delete-managed-cluster-type-v1**](#delete-managed-cluster-type-v1) | **DELETE** `/managed-cluster-types/v1/{id}` | Delete a managed cluster type
[**get-managed-cluster-type-v1**](#get-managed-cluster-type-v1) | **GET** `/managed-cluster-types/v1/{id}` | Get a managed cluster type
[**get-managed-cluster-types-v1**](#get-managed-cluster-types-v1) | **GET** `/managed-cluster-types/v1` | List managed cluster types
[**update-managed-cluster-type-v1**](#update-managed-cluster-type-v1) | **PATCH** `/managed-cluster-types/v1/{id}` | Update a managed cluster type


## create-managed-cluster-type-v1
Create new managed cluster type
Create a new Managed Cluster Type.

The API returns a result that includes the Managed Cluster Type ID

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-managed-cluster-type-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**managedclustertypeV1** | `ManagedclustertypeV1` |  | 

### Return type

`ManagedclustertypeV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ManagedClusterTypesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ManagedClusterTypesV1Api(configuration);
const managedclustertypeV1: ManagedclustertypeV1 = ; // 
const result = await apiInstance.createManagedClusterTypeV1({ managedclustertypeV1: managedclustertypeV1 });
console.log(result);
```

[[Back to top]](#)

## delete-managed-cluster-type-v1
Delete a managed cluster type
Delete an existing Managed Cluster Type.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-managed-cluster-type-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The Managed Cluster Type ID |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ManagedClusterTypesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ManagedClusterTypesV1Api(configuration);
const id: string = aClusterTypeId; // The Managed Cluster Type ID
const result = await apiInstance.deleteManagedClusterTypeV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-managed-cluster-type-v1
Get a managed cluster type
Get a Managed Cluster Type.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-managed-cluster-type-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The Managed Cluster Type ID |  [default to undefined]

### Return type

`ManagedclustertypeV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ManagedClusterTypesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ManagedClusterTypesV1Api(configuration);
const id: string = aClusterTypeId; // The Managed Cluster Type ID
const result = await apiInstance.getManagedClusterTypeV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-managed-cluster-types-v1
List managed cluster types
Get a list of Managed Cluster Types.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-managed-cluster-types-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**type** | `string` | Type descriptor | [optional] [default to undefined]
**pod** | `string` | Pinned pod (or default) | [optional] [default to undefined]
**org** | `string` | Pinned org (or default) | [optional] [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]

### Return type

`Array<ManagedclustertypeV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ManagedClusterTypesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ManagedClusterTypesV1Api(configuration);
const type: string = IDN; // Type descriptor (optional)
const pod: string = megapod-useast1; // Pinned pod (or default) (optional)
const org: string = denali-xyz; // Pinned org (or default) (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.getManagedClusterTypesV1({  });
console.log(result);
```

[[Back to top]](#)

## update-managed-cluster-type-v1
Update a managed cluster type
Update an existing Managed Cluster Type.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-managed-cluster-type-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The Managed Cluster Type ID |  [default to undefined]
**jsonpatchV1** | `JsonpatchV1` | The JSONPatch payload used to update the schema. | 

### Return type

`ManagedclustertypeV1`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { ManagedClusterTypesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ManagedClusterTypesV1Api(configuration);
const id: string = aClusterTypeId; // The Managed Cluster Type ID
const jsonpatchV1: JsonpatchV1 = ; // The JSONPatch payload used to update the schema.
const result = await apiInstance.updateManagedClusterTypeV1({ id: id, jsonpatchV1: jsonpatchV1 });
console.log(result);
```

[[Back to top]](#)

