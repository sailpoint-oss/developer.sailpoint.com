# ManagedClusters

# ManagedClustersService
  Use this API to implement managed cluster functionality. 
With this functionality in place, administrators can modify and delete existing managed clients, get their statuses, and create new ones. 
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-managed-cluster-v1**](#create-managed-cluster-v1) | **POST** `/managed-clusters/v1` | Create create managed cluster
[**delete-managed-cluster-v1**](#delete-managed-cluster-v1) | **DELETE** `/managed-clusters/v1/{id}` | Delete managed cluster
[**get-client-log-configuration-v1**](#get-client-log-configuration-v1) | **GET** `/managed-clusters/v1/{id}/log-config` | Get managed cluster log configuration
[**get-managed-cluster-v1**](#get-managed-cluster-v1) | **GET** `/managed-clusters/v1/{id}` | Get managed cluster
[**get-managed-clusters-v1**](#get-managed-clusters-v1) | **GET** `/managed-clusters/v1` | Get managed clusters
[**put-client-log-configuration-v1**](#put-client-log-configuration-v1) | **PUT** `/managed-clusters/v1/{id}/log-config` | Update managed cluster log configuration
[**update-managed-cluster-v1**](#update-managed-cluster-v1) | **PATCH** `/managed-clusters/v1/{id}` | Update managed cluster
[**update-v1**](#update-v1) | **POST** `/managed-clusters/v1/{id}/manualUpgrade` | Trigger manual upgrade for managed cluster


## create-managed-cluster-v1
Create create managed cluster
Create a new Managed Cluster.
The API returns a result that includes the managed cluster ID.

[API Spec](https://developer.sailpoint.com/docs/api/create-managed-cluster-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateManagedClusterV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**managedClusterRequest** | `ManagedClusterRequest` |  | 

### Return type

`Observable<ManagedCluster>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ManagedClustersService } from '@sailpoint/angular-sdk/managed_clusters';
import { ManagedClusterRequest } from '@sailpoint/angular-sdk/managed_clusters';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ManagedClustersService);

  createManagedClusterV1(): void {
    const managedClusterRequest: ManagedClusterRequest = ; // 
    this.api.createManagedClusterV1({ managedClusterRequest: managedClusterRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-managed-cluster-v1
Delete managed cluster
Delete an existing managed cluster.

[API Spec](https://developer.sailpoint.com/docs/api/delete-managed-cluster-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteManagedClusterV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Managed cluster ID. |  [default to undefined]
**removeClients** | `boolean` | Flag to determine the need to delete a cluster with clients. | [optional] [default to false]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ManagedClustersService } from '@sailpoint/angular-sdk/managed_clusters';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ManagedClustersService);

  deleteManagedClusterV1(): void {
    const id: string = ; // Managed cluster ID.
    const removeClients: boolean = ; // Flag to determine the need to delete a cluster with clients. (optional)
    this.api.deleteManagedClusterV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-client-log-configuration-v1
Get managed cluster log configuration
Get a managed cluster's log configuration.

[API Spec](https://developer.sailpoint.com/docs/api/get-client-log-configuration-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetClientLogConfigurationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of managed cluster to get log configuration for. |  [default to undefined]

### Return type

`Observable<ClientLogConfiguration>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ManagedClustersService } from '@sailpoint/angular-sdk/managed_clusters';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ManagedClustersService);

  getClientLogConfigurationV1(): void {
    const id: string = ; // ID of managed cluster to get log configuration for.
    this.api.getClientLogConfigurationV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-managed-cluster-v1
Get managed cluster
Get a managed cluster by ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-managed-cluster-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetManagedClusterV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Managed cluster ID. |  [default to undefined]

### Return type

`Observable<ManagedCluster>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ManagedClustersService } from '@sailpoint/angular-sdk/managed_clusters';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ManagedClustersService);

  getManagedClusterV1(): void {
    const id: string = ; // Managed cluster ID.
    this.api.getManagedClusterV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-managed-clusters-v1
Get managed clusters
List current organization's managed clusters, based on request context.

[API Spec](https://developer.sailpoint.com/docs/api/get-managed-clusters-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetManagedClustersV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq* | [optional] [default to undefined]

### Return type

`Observable<Array<ManagedCluster>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ManagedClustersService } from '@sailpoint/angular-sdk/managed_clusters';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ManagedClustersService);

  getManagedClustersV1(): void {
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq* (optional)
    this.api.getManagedClustersV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## put-client-log-configuration-v1
Update managed cluster log configuration
Update a managed cluster's log configuration. You may only specify one of `durationMinutes` or `expiration`, up to 1440 minutes (24 hours) in the future. If neither is specified, the default value for `durationMinutes` is 240.

[API Spec](https://developer.sailpoint.com/docs/api/put-client-log-configuration-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PutClientLogConfigurationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the managed cluster to update the log configuration for. |  [default to undefined]
**putClientLogConfigurationV1Request** | `PutClientLogConfigurationV1Request` | Client log configuration for the given managed cluster. | 

### Return type

`Observable<ClientLogConfiguration>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ManagedClustersService } from '@sailpoint/angular-sdk/managed_clusters';
import { PutClientLogConfigurationV1Request } from '@sailpoint/angular-sdk/managed_clusters';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ManagedClustersService);

  putClientLogConfigurationV1(): void {
    const id: string = ; // ID of the managed cluster to update the log configuration for.
    const putClientLogConfigurationV1Request: PutClientLogConfigurationV1Request = ; // Client log configuration for the given managed cluster.
    this.api.putClientLogConfigurationV1({ id: id, putClientLogConfigurationV1Request: putClientLogConfigurationV1Request }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-managed-cluster-v1
Update managed cluster
Update an existing managed cluster.

[API Spec](https://developer.sailpoint.com/docs/api/update-managed-cluster-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateManagedClusterV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Managed cluster ID. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | JSONPatch payload used to update the object. | 

### Return type

`Observable<ManagedCluster>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ManagedClustersService } from '@sailpoint/angular-sdk/managed_clusters';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/managed_clusters';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ManagedClustersService);

  updateManagedClusterV1(): void {
    const id: string = ; // Managed cluster ID.
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // JSONPatch payload used to update the object.
    this.api.updateManagedClusterV1({ id: id, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-v1
Trigger manual upgrade for managed cluster
Trigger Manual Upgrade for Managed Cluster.
AMS Security: API, Internal A token with SYSTEM_ADMINISTRATOR authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/update-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of managed cluster to trigger manual upgrade. |  [default to undefined]

### Return type

`Observable<ClusterManualUpgrade>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ManagedClustersService } from '@sailpoint/angular-sdk/managed_clusters';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ManagedClustersService);

  updateV1(): void {
    const id: string = ; // ID of managed cluster to trigger manual upgrade.
    this.api.updateV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

