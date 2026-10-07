# ManagedClients

# ManagedClientsService
  Use this API to implement managed client functionality. 
With this functionality in place, administrators can modify and delete existing managed clients, create new ones, and view and make changes to their log configurations.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-managed-client-v1**](#create-managed-client-v1) | **POST** `/managed-clients/v1` | Create managed client
[**delete-managed-client-v1**](#delete-managed-client-v1) | **DELETE** `/managed-clients/v1/{id}` | Delete managed client
[**get-managed-client-health-indicators-v1**](#get-managed-client-health-indicators-v1) | **GET** `/managed-clients/v1/{id}/health-indicators` | Get managed client health indicators
[**get-managed-client-status-v1**](#get-managed-client-status-v1) | **GET** `/managed-clients/v1/{id}/status` | Get managed client status
[**get-managed-client-v1**](#get-managed-client-v1) | **GET** `/managed-clients/v1/{id}` | Get managed client
[**get-managed-clients-v1**](#get-managed-clients-v1) | **GET** `/managed-clients/v1` | Get managed clients
[**update-managed-client-v1**](#update-managed-client-v1) | **PATCH** `/managed-clients/v1/{id}` | Update managed client


## create-managed-client-v1
Create managed client
Create a new managed client.
The API returns a result that includes the managed client ID.

[API Spec](https://developer.sailpoint.com/docs/api/create-managed-client-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateManagedClientV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**managedClientRequest** | `ManagedClientRequest` |  | 

### Return type

`Observable<ManagedClient>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ManagedClientsService } from '@sailpoint/angular-sdk/managed_clients';
import { ManagedClientRequest } from '@sailpoint/angular-sdk/managed_clients';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ManagedClientsService);

  createManagedClientV1(): void {
    const managedClientRequest: ManagedClientRequest = ; // 
    this.api.createManagedClientV1({ managedClientRequest: managedClientRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-managed-client-v1
Delete managed client
Delete an existing managed client.

[API Spec](https://developer.sailpoint.com/docs/api/delete-managed-client-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteManagedClientV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Managed client ID. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ManagedClientsService } from '@sailpoint/angular-sdk/managed_clients';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ManagedClientsService);

  deleteManagedClientV1(): void {
    const id: string = ; // Managed client ID.
    this.api.deleteManagedClientV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-managed-client-health-indicators-v1
Get managed client health indicators
Get a managed client's health indicators, using its ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-managed-client-health-indicators-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetManagedClientHealthIndicatorsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Managed client ID to get health indicators for. |  [default to undefined]

### Return type

`Observable<ManagedClientHealthIndicators>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ManagedClientsService } from '@sailpoint/angular-sdk/managed_clients';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ManagedClientsService);

  getManagedClientHealthIndicatorsV1(): void {
    const id: string = ; // Managed client ID to get health indicators for.
    this.api.getManagedClientHealthIndicatorsV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-managed-client-status-v1
Get managed client status
Get a managed client's status, using its ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-managed-client-status-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetManagedClientStatusV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Managed client ID to get status for. |  [default to undefined]
**type** | `ManagedClientType` | Managed client type to get status for. |  [default to undefined]

### Return type

`Observable<ManagedClientStatus>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ManagedClientsService } from '@sailpoint/angular-sdk/managed_clients';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ManagedClientsService);

  getManagedClientStatusV1(): void {
    const id: string = ; // Managed client ID to get status for.
    const type: ManagedClientType = ; // Managed client type to get status for.
    this.api.getManagedClientStatusV1({ id: id, type: type }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-managed-client-v1
Get managed client
Get managed client by ID. 

[API Spec](https://developer.sailpoint.com/docs/api/get-managed-client-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetManagedClientV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Managed client ID. |  [default to undefined]

### Return type

`Observable<ManagedClient>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ManagedClientsService } from '@sailpoint/angular-sdk/managed_clients';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ManagedClientsService);

  getManagedClientV1(): void {
    const id: string = ; // Managed client ID.
    this.api.getManagedClientV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-managed-clients-v1
Get managed clients
List managed clients.

[API Spec](https://developer.sailpoint.com/docs/api/get-managed-clients-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetManagedClientsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **clientId**: *eq*  **clusterId**: *eq* | [optional] [default to undefined]

### Return type

`Observable<Array<ManagedClient>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ManagedClientsService } from '@sailpoint/angular-sdk/managed_clients';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ManagedClientsService);

  getManagedClientsV1(): void {
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **clientId**: *eq*  **clusterId**: *eq* (optional)
    this.api.getManagedClientsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-managed-client-v1
Update managed client
Update an existing managed client.

[API Spec](https://developer.sailpoint.com/docs/api/update-managed-client-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateManagedClientV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Managed client ID. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | JSONPatch payload used to update the object. | 

### Return type

`Observable<ManagedClient>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ManagedClientsService } from '@sailpoint/angular-sdk/managed_clients';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/managed_clients';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ManagedClientsService);

  updateManagedClientV1(): void {
    const id: string = ; // Managed client ID.
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // JSONPatch payload used to update the object.
    this.api.updateManagedClientV1({ id: id, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

