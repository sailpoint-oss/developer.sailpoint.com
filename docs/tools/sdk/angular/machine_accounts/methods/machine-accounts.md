# MachineAccounts

# MachineAccountsService
   
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-account-subtype-v1**](#create-machine-account-subtype-v1) | **POST** `/sources/v1/{sourceId}/subtypes` | Create subtype
[**delete-machine-account-async-v1**](#delete-machine-account-async-v1) | **POST** `/machine-accounts/v1/{id}/remove` | Remove machine account
[**delete-machine-account-subtype-by-technical-name-v1**](#delete-machine-account-subtype-by-technical-name-v1) | **DELETE** `/sources/v1/{sourceId}/subtypes/{technicalName}` | Delete subtype
[**delete-machine-account-v1**](#delete-machine-account-v1) | **POST** `/machine-accounts/v1/{id}/delete` | Delete machine account
[**disable-machine-account-v1**](#disable-machine-account-v1) | **POST** `/machine-accounts/v1/{id}/disable` | Disable machine account
[**disable-machine-accounts-in-bulk-v1**](#disable-machine-accounts-in-bulk-v1) | **POST** `/machine-accounts/v1/bulk-disable` | Disable machine accounts in bulk
[**enable-machine-account-v1**](#enable-machine-account-v1) | **POST** `/machine-accounts/v1/{id}/enable` | Enable machine account
[**enable-machine-accounts-in-bulk-v1**](#enable-machine-accounts-in-bulk-v1) | **POST** `/machine-accounts/v1/bulk-enable` | Enable machine accounts in bulk
[**get-machine-account-entitlements-v1**](#get-machine-account-entitlements-v1) | **GET** `/machine-accounts/v1/{id}/entitlements` | List machine account entitlements
[**get-machine-account-subtype-by-id-v1**](#get-machine-account-subtype-by-id-v1) | **GET** `/sources/v1/subtypes/{subtypeId}` | Retrieve subtype by subtype id
[**get-machine-account-subtype-by-technical-name-v1**](#get-machine-account-subtype-by-technical-name-v1) | **GET** `/sources/v1/{sourceId}/subtypes/{technicalName}` | Retrieve subtype by source and technicalName
[**get-machine-account-v1**](#get-machine-account-v1) | **GET** `/machine-accounts/v1/{id}` | Get machine account details
[**get-machine-account-v2**](#get-machine-account-v2) | **GET** `/machine-accounts/v2/{id}` | Get machine account details
[**get-machine-accounts-summary-v1**](#get-machine-accounts-summary-v1) | **GET** `/machine-accounts/v1/machine-accounts-summary` | Get machine account candidate summary
[**list-machine-account-machine-identities-v1**](#list-machine-account-machine-identities-v1) | **GET** `/machine-accounts/v1/{id}/machine-identities` | List linked machine identities
[**list-machine-account-subtypes-v1**](#list-machine-account-subtypes-v1) | **GET** `/sources/v1/{sourceId}/subtypes` | Retrieve all subtypes by source
[**list-machine-accounts-v1**](#list-machine-accounts-v1) | **GET** `/machine-accounts/v1` | List machine accounts
[**list-machine-accounts-v2**](#list-machine-accounts-v2) | **GET** `/machine-accounts/v2` | List machine accounts
[**patch-machine-account-subtype-by-technical-name-v1**](#patch-machine-account-subtype-by-technical-name-v1) | **PATCH** `/sources/v1/{sourceId}/subtypes/{technicalName}` | Patch subtype
[**reload-machine-account-v1**](#reload-machine-account-v1) | **POST** `/machine-accounts/v1/{id}/reload` | Reload machine account
[**reload-machine-accounts-in-bulk-async-v1**](#reload-machine-accounts-in-bulk-async-v1) | **POST** `/machine-accounts/v1/bulk-reload-async` | Bulk reload machine accounts asynchronously
[**reload-machine-accounts-in-bulk-v1**](#reload-machine-accounts-in-bulk-v1) | **POST** `/machine-accounts/v1/bulk-reload` | Reload machine accounts in bulk
[**unlock-machine-account-v1**](#unlock-machine-account-v1) | **POST** `/machine-accounts/v1/{id}/unlock` | Unlock machine account
[**update-machine-account-v1**](#update-machine-account-v1) | **PATCH** `/machine-accounts/v1/{id}` | Update machine account details
[**update-machine-account-v2**](#update-machine-account-v2) | **PATCH** `/machine-accounts/v2/{id}` | Update machine account details
[**update-machine-accounts-in-bulk-v1**](#update-machine-accounts-in-bulk-v1) | **POST** `/machine-accounts/v1/bulk-update` | Update machine accounts in bulk


## create-machine-account-subtype-v1
:::caution deprecated
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create subtype
Create a new machine account subtype for a source.

[API Spec](https://developer.sailpoint.com/docs/api/create-machine-account-subtype-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateMachineAccountSubtypeV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The ID of the source. |  [default to undefined]
**createMachineAccountSubtypeV1Request** | `CreateMachineAccountSubtypeV1Request` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<SourceSubtype>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';
import { CreateMachineAccountSubtypeV1Request } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  createMachineAccountSubtypeV1(): void {
    const sourceId: string = ; // The ID of the source.
    const createMachineAccountSubtypeV1Request: CreateMachineAccountSubtypeV1Request = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createMachineAccountSubtypeV1({ sourceId: sourceId, createMachineAccountSubtypeV1Request: createMachineAccountSubtypeV1Request }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-machine-account-async-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Remove machine account
Use this API to remove a machine account from SailPoint Identity Security. The source account is left unchanged, and a removed machine account can be re-created during the next aggregation. The response returns the task ID.

This endpoint is intended for:

* Removing machine accounts that no longer exist on the source.

* Removing machine accounts that will not be aggregated after a source configuration change.

* Forcing machine accounts to be re-created on the next aggregation so account processing can run again.

A caller who owns the machine account can remove it. Other callers need the **idn:mis-account:remove** right.


[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-account-async-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteMachineAccountAsyncV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Account ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineAccountsAsyncResult>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  deleteMachineAccountAsyncV1(): void {
    const id: string = ; // Machine Account ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteMachineAccountAsyncV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-machine-account-subtype-by-technical-name-v1
:::caution deprecated
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete subtype
Delete a machine account subtype by source ID and technical name.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-account-subtype-by-technical-name-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteMachineAccountSubtypeByTechnicalNameV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The ID of the source. |  [default to undefined]
**technicalName** | `string` | The technical name of the subtype. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  deleteMachineAccountSubtypeByTechnicalNameV1(): void {
    const sourceId: string = ; // The ID of the source.
    const technicalName: string = ; // The technical name of the subtype.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteMachineAccountSubtypeByTechnicalNameV1({ sourceId: sourceId, technicalName: technicalName }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-machine-account-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete machine account
Use this API to submit a request to delete a machine account from its source. Depending on the tenant's account deletion approval settings, the request can need approval before the account is deleted. The response returns the ID of the account request.

The machine account must be linked to a machine identity; otherwise this API returns `404`. Machine accounts aggregated from a dataset can be rejected with `400`.

A caller who owns the machine account can delete it. Other callers need the **idn:mis-account:delete** right.


[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-account-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteMachineAccountV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Account ID. |  [default to undefined]
**machineAccountDeleteRequest** | `MachineAccountDeleteRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineAccountRequestAsyncResult>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';
import { MachineAccountDeleteRequest } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  deleteMachineAccountV1(): void {
    const id: string = ; // Machine Account ID.
    const machineAccountDeleteRequest: MachineAccountDeleteRequest = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteMachineAccountV1({ id: id, machineAccountDeleteRequest: machineAccountDeleteRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## disable-machine-account-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Disable machine account
This API submits a task to disable a machine account and returns the task ID.

A caller who owns the machine account can disable it. Other callers need the **idn:mis-account:disable** right.


[API Spec](https://developer.sailpoint.com/docs/api/disable-machine-account-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DisableMachineAccountV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Account ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineAccountsAsyncResult>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  disableMachineAccountV1(): void {
    const id: string = ; // Machine Account ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.disableMachineAccountV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## disable-machine-accounts-in-bulk-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Disable machine accounts in bulk
Use this API to submit one task that disables up to 100 machine accounts, and get the task ID. Machine accounts that are already disabled or that can't be disabled are skipped. When none of the machine accounts can be disabled, the task completes with an error.

The request fails with `400` when `ids` is empty or has more than 100 entries.

A caller who owns the machine accounts can disable them. Other callers need the **idn:mis-account:disable** right. For a caller without the right, machine accounts they do not own are skipped.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/disable-machine-accounts-in-bulk-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DisableMachineAccountsInBulkV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**machineAccountBulkRequest** | `MachineAccountBulkRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineAccountRequestAsyncResult>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';
import { MachineAccountBulkRequest } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  disableMachineAccountsInBulkV1(): void {
    const machineAccountBulkRequest: MachineAccountBulkRequest = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.disableMachineAccountsInBulkV1({ machineAccountBulkRequest: machineAccountBulkRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## enable-machine-account-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Enable machine account
This API submits a task to enable a machine account and returns the task ID.

A caller who owns the machine account can enable it. Other callers need the **idn:mis-account:enable** right.


[API Spec](https://developer.sailpoint.com/docs/api/enable-machine-account-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `EnableMachineAccountV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Account ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineAccountsAsyncResult>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  enableMachineAccountV1(): void {
    const id: string = ; // Machine Account ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.enableMachineAccountV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## enable-machine-accounts-in-bulk-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Enable machine accounts in bulk
Use this API to submit one task that enables up to 100 machine accounts, and get the task ID. Machine accounts that are already enabled or that can't be enabled are skipped. When none of the machine accounts can be enabled, the task completes with an error.

The request fails with `400` when `ids` is empty or has more than 100 entries.

A caller who owns the machine accounts can enable them. Other callers need the **idn:mis-account:enable** right. For a caller without the right, machine accounts they do not own are skipped.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/enable-machine-accounts-in-bulk-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `EnableMachineAccountsInBulkV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**machineAccountBulkRequest** | `MachineAccountBulkRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineAccountRequestAsyncResult>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';
import { MachineAccountBulkRequest } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  enableMachineAccountsInBulkV1(): void {
    const machineAccountBulkRequest: MachineAccountBulkRequest = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.enableMachineAccountsInBulkV1({ machineAccountBulkRequest: machineAccountBulkRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-machine-account-entitlements-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List machine account entitlements
Use this API to list the entitlements held by a machine account. Use `limit` and `offset` to page through the results.

This API requires the **idn:mis-account:read** right. Owning the machine account is not enough.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-entitlements-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMachineAccountEntitlementsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Account ID. |  [default to undefined]
**limit** | `number` | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<MachineAccountEntitlement>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  getMachineAccountEntitlementsV1(): void {
    const id: string = ; // Machine Account ID.
    const limit: number = ; // Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getMachineAccountEntitlementsV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-machine-account-subtype-by-id-v1
:::caution deprecated
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieve subtype by subtype id
Get a machine account subtype by its unique ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-subtype-by-id-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMachineAccountSubtypeByIdV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**subtypeId** | `string` | The ID of the machine account subtype. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<SourceSubtype>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  getMachineAccountSubtypeByIdV1(): void {
    const subtypeId: string = ; // The ID of the machine account subtype.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getMachineAccountSubtypeByIdV1({ subtypeId: subtypeId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-machine-account-subtype-by-technical-name-v1
:::caution deprecated
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieve subtype by source and technicalName
Get a machine account subtype by source ID and technical name.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-subtype-by-technical-name-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMachineAccountSubtypeByTechnicalNameV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The ID of the source. |  [default to undefined]
**technicalName** | `string` | The technical name of the subtype. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<SourceSubtype>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  getMachineAccountSubtypeByTechnicalNameV1(): void {
    const sourceId: string = ; // The ID of the source.
    const technicalName: string = ; // The technical name of the subtype.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getMachineAccountSubtypeByTechnicalNameV1({ sourceId: sourceId, technicalName: technicalName }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-machine-account-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get machine account details
Use this API to return the details for a single machine account by its ID.  

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMachineAccountV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Account ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineAccount>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  getMachineAccountV1(): void {
    const id: string = ; // Machine Account ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getMachineAccountV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-machine-account-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get machine account details
Use this API to get the details of a machine account, including all of its linked machine identities.

A caller who owns the machine account can get it. Other callers need the **idn:mis-account:read** right.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMachineAccountV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Account ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineAccountV2>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  getMachineAccountV2(): void {
    const id: string = ; // Machine Account ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getMachineAccountV2({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-machine-accounts-summary-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get machine account candidate summary
Use this API to count the machine account candidates that are not yet linked to a machine identity, grouped by the classification method that found them. Candidates that are correlated to a human identity are counted in `human`; candidates that are not correlated to any identity are counted in `uncorrelated`.

This API requires the **idn:mis-account-list:read** right.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-accounts-summary-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMachineAccountsSummaryV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **source.id**: *eq, in*  Filtering on any other field returns &#x60;400&#x60;. | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineAccountsSummary>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  getMachineAccountsSummaryV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **source.id**: *eq, in*  Filtering on any other field returns &#x60;400&#x60;. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getMachineAccountsSummaryV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-machine-account-machine-identities-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List linked machine identities
Use this API to list the machine identities that are linked to a machine account through source resource links. The response is an empty list when no machine identities are linked.

This API returns `400` when the machine account has no native identity or source.

A caller who owns the machine account can list its machine identities. Other callers need the **idn:mis-account:read** right.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-account-machine-identities-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListMachineAccountMachineIdentitiesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Account ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<MachineAccountLinkedMachineIdentity>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  listMachineAccountMachineIdentitiesV1(): void {
    const id: string = ; // Machine Account ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listMachineAccountMachineIdentitiesV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-machine-account-subtypes-v1
:::caution deprecated
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieve all subtypes by source
Get all machine account subtypes for a given source.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-account-subtypes-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListMachineAccountSubtypesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The ID of the source. |  [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **displayName**: *eq, sw*  **technicalName**: *eq, sw* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Observable<Array<SourceSubtype>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  listMachineAccountSubtypesV1(): void {
    const sourceId: string = ; // The ID of the source.
    const filters: string = ; // Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **displayName**: *eq, sw*  **technicalName**: *eq, sw* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    this.api.listMachineAccountSubtypesV1({ sourceId: sourceId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-machine-accounts-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List machine accounts
This returns a list of machine accounts.  

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-accounts-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListMachineAccountsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  &#x60;risk.severity&#x60;, &#x60;permissionLevel&#x60;, and &#x60;lastUsedAt&#x60; require Entro enrichment to be enabled for the tenant. When it is not, those filters return &#x60;400&#x60;. &#x60;compliance&#x60; and &#x60;complianceViolationsCount&#x60; are not filter fields. With unknown-severity enabled, a null stored severity matches &#x60;risk.severity eq \&quot;UNKNOWN\&quot;&#x60;. | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, ownerIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, manuallyCorrelated, enabled, locked, hasEntitlements, ownerIdentity.id, ownerIdentity.name, attributes, source.id, source.name, created, modified, risk.severity, permissionLevel, lastUsedAt**  &#x60;risk.severity&#x60;, &#x60;permissionLevel&#x60;, and &#x60;lastUsedAt&#x60; require Entro enrichment to be enabled; otherwise those sorters return &#x60;400&#x60;. &#x60;risk.severity&#x60; sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. Null Entro values sort last. &#x60;compliance&#x60; is not sortable. | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<MachineAccount>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  listMachineAccountsV1(): void {
    const limit: number = ; // Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  &#x60;risk.severity&#x60;, &#x60;permissionLevel&#x60;, and &#x60;lastUsedAt&#x60; require Entro enrichment to be enabled for the tenant. When it is not, those filters return &#x60;400&#x60;. &#x60;compliance&#x60; and &#x60;complianceViolationsCount&#x60; are not filter fields. With unknown-severity enabled, a null stored severity matches &#x60;risk.severity eq \&quot;UNKNOWN\&quot;&#x60;. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, ownerIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, manuallyCorrelated, enabled, locked, hasEntitlements, ownerIdentity.id, ownerIdentity.name, attributes, source.id, source.name, created, modified, risk.severity, permissionLevel, lastUsedAt**  &#x60;risk.severity&#x60;, &#x60;permissionLevel&#x60;, and &#x60;lastUsedAt&#x60; require Entro enrichment to be enabled; otherwise those sorters return &#x60;400&#x60;. &#x60;risk.severity&#x60; sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. Null Entro values sort last. &#x60;compliance&#x60; is not sortable. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listMachineAccountsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-machine-accounts-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List machine accounts
Use this API to get a list of machine accounts. By default, the list includes machine accounts that are linked to a machine identity or to a source resource.

When the whole filter is a single comparison on `machineIdentity.id` or `machineIdentity.name`, the list also includes machine accounts linked to the matching machine identities through source resource links.

A caller without the **idn:mis-account-list:read** right can call this API only when every returned machine account is one they own; otherwise this API returns `403`. Use `ownerIdentity=self` to list only the caller's own machine accounts.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-accounts-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `ListMachineAccountsV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to false]
**ownerIdentity** | `string` | Return only machine accounts whose owner identity is this identity ID. Use &#x60;self&#x60; for the caller\&#39;s own identity. This parameter can\&#39;t be combined with a filter on &#x60;ownerIdentity.id&#x60;; that combination returns &#x60;400&#x60;. | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **owners.primary.id**: *eq, in*  **owners.primary.name**: *eq, in, sw*  **owners.secondaryIdentity.id**: *eq, in*  **owners.secondaryIdentity.name**: *eq, in, sw*  **owners.governanceGroup.id**: *eq, in*  **owners.governanceGroup.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **connectorAttributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **datasetId**: *eq, in*  **resource.id**: *eq, in*  **type**: *eq, in*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  Use &#x60;me&#x60; as the value of &#x60;ownerIdentity.id&#x60; to match the caller\&#39;s own identity.  The &#x60;owners.*&#x60; fields are available only when expanded machine account ownership is enabled for the tenant. The &#x60;risk.severity&#x60;, &#x60;permissionLevel&#x60; and &#x60;lastUsedAt&#x60; fields are available only when machine account risk enrichment is enabled for the tenant. Filtering on an unavailable field returns &#x60;400&#x60;. | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, ownerIdentity, ownerIdentity.id, ownerIdentity.name, owners.primary.id, owners.primary.name, owners.secondaryIdentity.id, owners.secondaryIdentity.name, owners.governanceGroup.id, owners.governanceGroup.name, manuallyCorrelated, enabled, locked, hasEntitlements, attributes, connectorAttributes, source.id, source.name, datasetId, resource.id, type, created, modified, risk.severity, permissionLevel, lastUsedAt**  The same availability rules as for &#x60;filters&#x60; apply to the &#x60;owners.*&#x60;, &#x60;risk.severity&#x60;, &#x60;permissionLevel&#x60; and &#x60;lastUsedAt&#x60; fields. &#x60;risk.severity&#x60; sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<MachineAccountV2>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  listMachineAccountsV2(): void {
    const limit: number = ; // Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const ownerIdentity: string = ; // Return only machine accounts whose owner identity is this identity ID. Use &#x60;self&#x60; for the caller\&#39;s own identity. This parameter can\&#39;t be combined with a filter on &#x60;ownerIdentity.id&#x60;; that combination returns &#x60;400&#x60;. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **owners.primary.id**: *eq, in*  **owners.primary.name**: *eq, in, sw*  **owners.secondaryIdentity.id**: *eq, in*  **owners.secondaryIdentity.name**: *eq, in, sw*  **owners.governanceGroup.id**: *eq, in*  **owners.governanceGroup.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **connectorAttributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **datasetId**: *eq, in*  **resource.id**: *eq, in*  **type**: *eq, in*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  Use &#x60;me&#x60; as the value of &#x60;ownerIdentity.id&#x60; to match the caller\&#39;s own identity.  The &#x60;owners.*&#x60; fields are available only when expanded machine account ownership is enabled for the tenant. The &#x60;risk.severity&#x60;, &#x60;permissionLevel&#x60; and &#x60;lastUsedAt&#x60; fields are available only when machine account risk enrichment is enabled for the tenant. Filtering on an unavailable field returns &#x60;400&#x60;. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, ownerIdentity, ownerIdentity.id, ownerIdentity.name, owners.primary.id, owners.primary.name, owners.secondaryIdentity.id, owners.secondaryIdentity.name, owners.governanceGroup.id, owners.governanceGroup.name, manuallyCorrelated, enabled, locked, hasEntitlements, attributes, connectorAttributes, source.id, source.name, datasetId, resource.id, type, created, modified, risk.severity, permissionLevel, lastUsedAt**  The same availability rules as for &#x60;filters&#x60; apply to the &#x60;owners.*&#x60;, &#x60;risk.severity&#x60;, &#x60;permissionLevel&#x60; and &#x60;lastUsedAt&#x60; fields. &#x60;risk.severity&#x60; sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listMachineAccountsV2({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-machine-account-subtype-by-technical-name-v1
:::caution deprecated
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Patch subtype
Update fields of a machine account subtype by source ID and technical name.
Patchable fields include: `displayName`, `description`.

[API Spec](https://developer.sailpoint.com/docs/api/patch-machine-account-subtype-by-technical-name-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchMachineAccountSubtypeByTechnicalNameV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The ID of the source. |  [default to undefined]
**technicalName** | `string` | The technical name of the subtype. |  [default to undefined]
**requestBody** | `Array<object>` | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<SourceSubtype>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  patchMachineAccountSubtypeByTechnicalNameV1(): void {
    const sourceId: string = ; // The ID of the source.
    const technicalName: string = ; // The technical name of the subtype.
    const requestBody: Array<object> = ; // A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.patchMachineAccountSubtypeByTechnicalNameV1({ sourceId: sourceId, technicalName: technicalName, requestBody: requestBody }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## reload-machine-account-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Reload machine account
This API asynchronously reloads the machine account directly from the connector and performs a one-time aggregation. It returns the task ID.

A caller who owns the machine account can reload it. Other callers need the **idn:mis-account:reload** right.


[API Spec](https://developer.sailpoint.com/docs/api/reload-machine-account-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ReloadMachineAccountV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Account ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineAccountsAsyncResult>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  reloadMachineAccountV1(): void {
    const id: string = ; // Machine Account ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.reloadMachineAccountV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## reload-machine-accounts-in-bulk-async-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Bulk reload machine accounts asynchronously
Use this API to submit one task that reloads up to 100 machine accounts from their sources, and get the task ID. Machine accounts that can't be reloaded are skipped. When none of the machine accounts can be reloaded, the task completes with an error.

The request fails with `400` when `ids` is empty or has more than 100 entries.

A caller who owns the machine accounts can reload them. Other callers need the **idn:mis-account:reload** right. For a caller without the right, machine accounts they do not own are skipped.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/reload-machine-accounts-in-bulk-async-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ReloadMachineAccountsInBulkAsyncV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**machineAccountBulkRequest** | `MachineAccountBulkRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineAccountRequestAsyncResult>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';
import { MachineAccountBulkRequest } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  reloadMachineAccountsInBulkAsyncV1(): void {
    const machineAccountBulkRequest: MachineAccountBulkRequest = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.reloadMachineAccountsInBulkAsyncV1({ machineAccountBulkRequest: machineAccountBulkRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## reload-machine-accounts-in-bulk-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Reload machine accounts in bulk
Use this API to reload up to 100 machine accounts from their sources. The response has one result per requested machine account, in no particular order. Each result has its own HTTP-style `status`: `200` when the reload was queued, or an error status such as `400`, `404` or `500`.

To track the whole reload with a single task instead, use the asynchronous bulk reload API.

The request fails with `400` when `ids` is empty or has more than 100 entries.

A caller who owns the machine accounts can reload them. Other callers need the **idn:mis-account:reload** right. For a caller without the right, machine accounts they do not own get a result with status `404`.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/reload-machine-accounts-in-bulk-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ReloadMachineAccountsInBulkV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**machineAccountBulkRequest** | `MachineAccountBulkRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<MachineAccountBulkResult>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';
import { MachineAccountBulkRequest } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  reloadMachineAccountsInBulkV1(): void {
    const machineAccountBulkRequest: MachineAccountBulkRequest = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.reloadMachineAccountsInBulkV1({ machineAccountBulkRequest: machineAccountBulkRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## unlock-machine-account-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Unlock machine account
This API submits a task to unlock a machine account and returns the task ID.

A caller who owns the machine account can unlock it. Other callers need the **idn:mis-account:unlock** right.


[API Spec](https://developer.sailpoint.com/docs/api/unlock-machine-account-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UnlockMachineAccountV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Account ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineAccountsAsyncResult>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  unlockMachineAccountV1(): void {
    const id: string = ; // Machine Account ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.unlockMachineAccountV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-machine-account-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update machine account details
Use this API to update machine accounts details. 


[API Spec](https://developer.sailpoint.com/docs/api/update-machine-account-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateMachineAccountV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Account ID. |  [default to undefined]
**requestBody** | `Array<object>` | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following fields are patchable:           * description           * environment           * accessType           * attributes           * manuallyEdited           * ownerIdentity           * subtype           * machineIdentity           * owners  Non-dataset accounts may patch ownerIdentity, subtype, and machineIdentity. Dataset accounts may patch owners. When expanded ownership is enabled, non-dataset accounts may also patch owners, and dataset accounts may also patch ownerIdentity. &#x60;risk&#x60;, &#x60;permissionLevel&#x60;, &#x60;compliance&#x60;, and &#x60;lastUsedAt&#x60; are read-only. Do not patch them; aggregation is the only writer. A patch of other fields still succeeds when those values are present on the account. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineAccount>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  updateMachineAccountV1(): void {
    const id: string = ; // Machine Account ID.
    const requestBody: Array<object> = ; // A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following fields are patchable:           * description           * environment           * accessType           * attributes           * manuallyEdited           * ownerIdentity           * subtype           * machineIdentity           * owners  Non-dataset accounts may patch ownerIdentity, subtype, and machineIdentity. Dataset accounts may patch owners. When expanded ownership is enabled, non-dataset accounts may also patch owners, and dataset accounts may also patch ownerIdentity. &#x60;risk&#x60;, &#x60;permissionLevel&#x60;, &#x60;compliance&#x60;, and &#x60;lastUsedAt&#x60; are read-only. Do not patch them; aggregation is the only writer. A patch of other fields still succeeds when those values are present on the account.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.updateMachineAccountV1({ id: id, requestBody: requestBody }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-machine-account-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update machine account details
Use this API to update a machine account with a [JSON Patch](https://tools.ietf.org/html/rfc6902) document. The response is the updated machine account.

A caller who owns the machine account can update it. Other callers need the **idn:mis-account:update** right.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/update-machine-account-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateMachineAccountV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Account ID. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following fields are patchable:           * description           * environment           * accessType           * attributes           * manuallyEdited           * ownerIdentity           * subtype           * machineIdentities           * owners  Non-dataset accounts may patch ownerIdentity, subtype, and machineIdentities. Dataset accounts may patch owners. When expanded ownership is enabled, non-dataset accounts may also patch owners, and dataset accounts may also patch ownerIdentity. Patching ownerIdentity and owners in the same request returns &#x60;400&#x60;.  To change the machine identity, use a single &#x60;replace&#x60; operation on &#x60;/machineIdentities&#x60; whose value is a list of exactly one machine identity reference with its &#x60;id&#x60;. The &#x60;/machineIdentity&#x60; path, indexed or nested paths such as &#x60;/machineIdentities/0&#x60;, other operations on &#x60;/machineIdentities&#x60;, and a value that is not a one-element list all return &#x60;400&#x60;.  All other fields, including &#x60;risk&#x60;, &#x60;permissionLevel&#x60;, &#x60;compliance&#x60;, and &#x60;lastUsedAt&#x60;, are read-only. A patch that changes one of them returns &#x60;400&#x60;. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineAccountV2>`

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  updateMachineAccountV2(): void {
    const id: string = ; // Machine Account ID.
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following fields are patchable:           * description           * environment           * accessType           * attributes           * manuallyEdited           * ownerIdentity           * subtype           * machineIdentities           * owners  Non-dataset accounts may patch ownerIdentity, subtype, and machineIdentities. Dataset accounts may patch owners. When expanded ownership is enabled, non-dataset accounts may also patch owners, and dataset accounts may also patch ownerIdentity. Patching ownerIdentity and owners in the same request returns &#x60;400&#x60;.  To change the machine identity, use a single &#x60;replace&#x60; operation on &#x60;/machineIdentities&#x60; whose value is a list of exactly one machine identity reference with its &#x60;id&#x60;. The &#x60;/machineIdentity&#x60; path, indexed or nested paths such as &#x60;/machineIdentities/0&#x60;, other operations on &#x60;/machineIdentities&#x60;, and a value that is not a one-element list all return &#x60;400&#x60;.  All other fields, including &#x60;risk&#x60;, &#x60;permissionLevel&#x60;, &#x60;compliance&#x60;, and &#x60;lastUsedAt&#x60;, are read-only. A patch that changes one of them returns &#x60;400&#x60;.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.updateMachineAccountV2({ id: id, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-machine-accounts-in-bulk-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update machine accounts in bulk
Use this API to apply the same [JSON Patch](https://tools.ietf.org/html/rfc6902) to up to 100 machine accounts. The response has one result per requested machine account, in no particular order. Each result has its own HTTP-style `status`: `200` when the update succeeded, or an error status such as `400` or `404`.

Each patch operation must target one of these top-level fields:
  * description
  * subtype
  * environment
  * machineIdentity
  * ownerIdentity
  * manuallyEdited

The request fails with `400` when `ids` is empty or has more than 100 entries, when `jsonPatch` is missing, or when a patch operation targets any other field. A patch that changes `subtype` must only include machine accounts from one source; otherwise every result has status `400`.

A caller who owns the machine accounts can update them. Other callers need the **idn:mis-account:update** right. For a caller without the right, machine accounts they do not own get a result with status `404`.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/update-machine-accounts-in-bulk-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateMachineAccountsInBulkV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**machineAccountBulkUpdateRequest** | `MachineAccountBulkUpdateRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<MachineAccountBulkResult>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountsService } from '@sailpoint/angular-sdk/machine_accounts';
import { MachineAccountBulkUpdateRequest } from '@sailpoint/angular-sdk/machine_accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountsService);

  updateMachineAccountsInBulkV1(): void {
    const machineAccountBulkUpdateRequest: MachineAccountBulkUpdateRequest = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.updateMachineAccountsInBulkV1({ machineAccountBulkUpdateRequest: machineAccountBulkUpdateRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

