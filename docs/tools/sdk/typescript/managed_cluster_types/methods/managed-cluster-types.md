# ManagedClusterTypes

# ManagedClusterTypesApi
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

[API Spec](https://developer.sailpoint.com/docs/api/create-managed-cluster-type-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**managedClusterType** | `ManagedClusterType` |  | 

### Return type

`ManagedClusterType`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ManagedClusterTypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { ManagedClusterType } from '@sailpoint/api-client/dist/managed_cluster_types/api';

const configuration = new Configuration();
const apiInstance = new ManagedClusterTypesApi(configuration);
const managedClusterType: ManagedClusterType = {
  "managedProcessIds" : [ "someId", "someId2" ],
  "pod" : "megapod-useast1",
  "org" : "denali-cjh",
  "id" : "aClusterTypeId",
  "type" : "idn"
}; // 
const result = await apiInstance.createManagedClusterTypeV1({ managedClusterType: managedClusterType });
console.log(result);
```

[[Back to top]](#)

## delete-managed-cluster-type-v1
Delete a managed cluster type
Delete an existing Managed Cluster Type.

[API Spec](https://developer.sailpoint.com/docs/api/delete-managed-cluster-type-v-1)

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
import { ManagedClusterTypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new ManagedClusterTypesApi(configuration);
const id: string = aClusterTypeId; // The Managed Cluster Type ID
const result = await apiInstance.deleteManagedClusterTypeV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-managed-cluster-type-v1
Get a managed cluster type
Get a Managed Cluster Type.

[API Spec](https://developer.sailpoint.com/docs/api/get-managed-cluster-type-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The Managed Cluster Type ID |  [default to undefined]

### Return type

`ManagedClusterType`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ManagedClusterTypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new ManagedClusterTypesApi(configuration);
const id: string = aClusterTypeId; // The Managed Cluster Type ID
const result = await apiInstance.getManagedClusterTypeV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-managed-cluster-types-v1
List managed cluster types
Get a list of Managed Cluster Types.

[API Spec](https://developer.sailpoint.com/docs/api/get-managed-cluster-types-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**type** | `string` | Type descriptor | [optional] [default to undefined]
**pod** | `string` | Pinned pod (or default) | [optional] [default to undefined]
**org** | `string` | Pinned org (or default) | [optional] [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]

### Return type

`Array<ManagedClusterType>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ManagedClusterTypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new ManagedClusterTypesApi(configuration);
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

[API Spec](https://developer.sailpoint.com/docs/api/update-managed-cluster-type-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The Managed Cluster Type ID |  [default to undefined]
**jsonPatch** | `JsonPatch` | The JSONPatch payload used to update the schema. | 

### Return type

`ManagedClusterType`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { ManagedClusterTypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatch } from '@sailpoint/api-client/dist/managed_cluster_types/api';

const configuration = new Configuration();
const apiInstance = new ManagedClusterTypesApi(configuration);
const id: string = aClusterTypeId; // The Managed Cluster Type ID
const jsonPatch: JsonPatch = {
  "operations" : [ {
    "op" : "replace",
    "path" : "/description",
    "value" : "New description"
  }, {
    "op" : "replace",
    "path" : "/description",
    "value" : "New description"
  } ]
}; // The JSONPatch payload used to update the schema.
const result = await apiInstance.updateManagedClusterTypeV1({ id: id, jsonPatch: jsonPatch });
console.log(result);
```

[[Back to top]](#)

