# MachineAccounts

# MachineAccountsService
   
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-account-subtype-v1**](#create-machine-account-subtype-v1) | **POST** `/sources/v1/{sourceId}/subtypes` | Create subtype
[**delete-machine-account-async-v1**](#delete-machine-account-async-v1) | **POST** `/machine-accounts/v1/{id}/remove` | Remove machine account
[**delete-machine-account-subtype-by-technical-name-v1**](#delete-machine-account-subtype-by-technical-name-v1) | **DELETE** `/sources/v1/{sourceId}/subtypes/{technicalName}` | Delete subtype
[**disable-machine-account-v1**](#disable-machine-account-v1) | **POST** `/machine-accounts/v1/{id}/disable` | Disable machine account
[**enable-machine-account-v1**](#enable-machine-account-v1) | **POST** `/machine-accounts/v1/{id}/enable` | Enable machine account
[**get-machine-account-subtype-by-id-v1**](#get-machine-account-subtype-by-id-v1) | **GET** `/sources/v1/subtypes/{subtypeId}` | Retrieve subtype by subtype id
[**get-machine-account-subtype-by-technical-name-v1**](#get-machine-account-subtype-by-technical-name-v1) | **GET** `/sources/v1/{sourceId}/subtypes/{technicalName}` | Retrieve subtype by source and technicalName
[**get-machine-account-v1**](#get-machine-account-v1) | **GET** `/machine-accounts/v1/{id}` | Get machine account details
[**list-machine-account-subtypes-v1**](#list-machine-account-subtypes-v1) | **GET** `/sources/v1/{sourceId}/subtypes` | Retrieve all subtypes by source
[**list-machine-accounts-v1**](#list-machine-accounts-v1) | **GET** `/machine-accounts/v1` | List machine accounts
[**patch-machine-account-subtype-by-technical-name-v1**](#patch-machine-account-subtype-by-technical-name-v1) | **PATCH** `/sources/v1/{sourceId}/subtypes/{technicalName}` | Patch subtype
[**reload-machine-account-v1**](#reload-machine-account-v1) | **POST** `/machine-accounts/v1/{id}/reload` | Reload machine account
[**unlock-machine-account-v1**](#unlock-machine-account-v1) | **POST** `/machine-accounts/v1/{id}/unlock` | Unlock machine account
[**update-machine-account-v1**](#update-machine-account-v1) | **PATCH** `/machine-accounts/v1/{id}` | Update machine account details


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
Use this API to remove a machine account from Identity Security Cloud. The source account is left unchanged, and a removed machine account can be re-created during the next aggregation. The response returns the task ID.

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
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **displayName**: *eq, sw*  **technicalName**: *eq, sw* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

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
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **displayName**: *eq, sw*  **technicalName**: *eq, sw* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
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
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, ownerIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, manuallyCorrelated, enabled, locked, hasEntitlements, ownerIdentity.id, ownerIdentity.name, attributes, source.id, source.name, created, modified** | [optional] [default to undefined]
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
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, ownerIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, manuallyCorrelated, enabled, locked, hasEntitlements, ownerIdentity.id, ownerIdentity.name, attributes, source.id, source.name, created, modified** (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listMachineAccountsV1({  }).subscribe({
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
**requestBody** | `Array<object>` | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following fields are patchable:           * description           * ownerIdentity           * subType           * accessType           * environment           * attributes           * classificationMethod           * manuallyEdited           * nativeIdentity           * uuid           * source           * manuallyCorrelated           * enabled           * locked           * hasEntitlements           * connectorAttributes | 
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
    const requestBody: Array<object> = ; // A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following fields are patchable:           * description           * ownerIdentity           * subType           * accessType           * environment           * attributes           * classificationMethod           * manuallyEdited           * nativeIdentity           * uuid           * source           * manuallyCorrelated           * enabled           * locked           * hasEntitlements           * connectorAttributes
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.updateMachineAccountV1({ id: id, requestBody: requestBody }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

