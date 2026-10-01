# ManagedClusterTypes

# ManagedClusterTypesService
  Use this API to implement managed cluster types functionality. 
With this functionality in place, administrators can modify and delete existing managed cluster types and create new ones.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

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

The service takes one object that holds every parameter. Its type is `CreateManagedClusterTypeV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**managedClusterType** | `ManagedClusterType` |  | 

### Return type

`Observable<ManagedClusterType>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ManagedClusterTypesService } from '@sailpoint/angular-sdk/managed_cluster_types';
import { ManagedClusterType } from '@sailpoint/angular-sdk/managed_cluster_types';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ManagedClusterTypesService);

  createManagedClusterTypeV1(): void {
    const managedClusterType: ManagedClusterType = ; // 
    this.api.createManagedClusterTypeV1({ managedClusterType: managedClusterType }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-managed-cluster-type-v1
Delete a managed cluster type
Delete an existing Managed Cluster Type.

[API Spec](https://developer.sailpoint.com/docs/api/delete-managed-cluster-type-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteManagedClusterTypeV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The Managed Cluster Type ID |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ManagedClusterTypesService } from '@sailpoint/angular-sdk/managed_cluster_types';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ManagedClusterTypesService);

  deleteManagedClusterTypeV1(): void {
    const id: string = ; // The Managed Cluster Type ID
    this.api.deleteManagedClusterTypeV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-managed-cluster-type-v1
Get a managed cluster type
Get a Managed Cluster Type.

[API Spec](https://developer.sailpoint.com/docs/api/get-managed-cluster-type-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetManagedClusterTypeV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The Managed Cluster Type ID |  [default to undefined]

### Return type

`Observable<ManagedClusterType>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ManagedClusterTypesService } from '@sailpoint/angular-sdk/managed_cluster_types';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ManagedClusterTypesService);

  getManagedClusterTypeV1(): void {
    const id: string = ; // The Managed Cluster Type ID
    this.api.getManagedClusterTypeV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-managed-cluster-types-v1
List managed cluster types
Get a list of Managed Cluster Types.

[API Spec](https://developer.sailpoint.com/docs/api/get-managed-cluster-types-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetManagedClusterTypesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**type** | `string` | Type descriptor | [optional] [default to undefined]
**pod** | `string` | Pinned pod (or default) | [optional] [default to undefined]
**org** | `string` | Pinned org (or default) | [optional] [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]

### Return type

`Observable<Array<ManagedClusterType>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ManagedClusterTypesService } from '@sailpoint/angular-sdk/managed_cluster_types';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ManagedClusterTypesService);

  getManagedClusterTypesV1(): void {
    const type: string = ; // Type descriptor (optional)
    const pod: string = ; // Pinned pod (or default) (optional)
    const org: string = ; // Pinned org (or default) (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.getManagedClusterTypesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-managed-cluster-type-v1
Update a managed cluster type
Update an existing Managed Cluster Type.

[API Spec](https://developer.sailpoint.com/docs/api/update-managed-cluster-type-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateManagedClusterTypeV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The Managed Cluster Type ID |  [default to undefined]
**jsonPatch** | `JsonPatch` | The JSONPatch payload used to update the schema. | 

### Return type

`Observable<ManagedClusterType>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ManagedClusterTypesService } from '@sailpoint/angular-sdk/managed_cluster_types';
import { JsonPatch } from '@sailpoint/angular-sdk/managed_cluster_types';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ManagedClusterTypesService);

  updateManagedClusterTypeV1(): void {
    const id: string = ; // The Managed Cluster Type ID
    const jsonPatch: JsonPatch = ; // The JSONPatch payload used to update the schema.
    this.api.updateManagedClusterTypeV1({ id: id, jsonPatch: jsonPatch }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

