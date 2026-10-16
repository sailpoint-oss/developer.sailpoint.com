# Apps

# AppsService
  Use this API to implement source application functionality. 
With this functionality in place, you can create, customize, and manage applications within sources.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-source-app-v1**](#create-source-app-v1) | **POST** `/source-apps/v1` | Create source app
[**delete-access-profiles-from-source-app-by-bulk-v1**](#delete-access-profiles-from-source-app-by-bulk-v1) | **POST** `/source-apps/v1/{id}/access-profiles/bulk-remove` | Bulk remove access profiles from the specified source app
[**delete-source-app-v1**](#delete-source-app-v1) | **DELETE** `/source-apps/v1/{id}` | Delete source app by id
[**get-source-app-v1**](#get-source-app-v1) | **GET** `/source-apps/v1/{id}` | Get source app by id
[**list-access-profiles-for-source-app-v1**](#list-access-profiles-for-source-app-v1) | **GET** `/source-apps/v1/{id}/access-profiles` | List access profiles for the specified source app
[**list-all-source-app-v1**](#list-all-source-app-v1) | **GET** `/source-apps/v1/all` | List all source apps
[**list-all-user-apps-v1**](#list-all-user-apps-v1) | **GET** `/user-apps/v1/all` | List all user apps
[**list-assigned-source-app-v1**](#list-assigned-source-app-v1) | **GET** `/source-apps/v1/assigned` | List assigned source apps
[**list-available-accounts-for-user-app-v1**](#list-available-accounts-for-user-app-v1) | **GET** `/user-apps/v1/{id}/available-accounts` | List available accounts for user app
[**list-available-source-apps-v1**](#list-available-source-apps-v1) | **GET** `/source-apps/v1` | List available source apps
[**list-owned-user-apps-v1**](#list-owned-user-apps-v1) | **GET** `/user-apps/v1` | List owned user apps
[**patch-source-app-v1**](#patch-source-app-v1) | **PATCH** `/source-apps/v1/{id}` | Patch source app by id
[**patch-user-app-v1**](#patch-user-app-v1) | **PATCH** `/user-apps/v1/{id}` | Patch user app by id
[**update-source-apps-in-bulk-v1**](#update-source-apps-in-bulk-v1) | **POST** `/source-apps/v1/bulk-update` | Bulk update source apps


## create-source-app-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create source app
This endpoint creates a source app using the given source app payload

[API Spec](https://developer.sailpoint.com/docs/api/create-source-app-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateSourceAppV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceAppCreateDto** | `SourceAppCreateDto` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<SourceApp>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AppsService } from '@sailpoint/angular-sdk/apps';
import { SourceAppCreateDto } from '@sailpoint/angular-sdk/apps';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AppsService);

  createSourceAppV1(): void {
    const sourceAppCreateDto: SourceAppCreateDto = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createSourceAppV1({ sourceAppCreateDto: sourceAppCreateDto }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-access-profiles-from-source-app-by-bulk-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Bulk remove access profiles from the specified source app
This API returns the final list of access profiles for the specified source app after removing

[API Spec](https://developer.sailpoint.com/docs/api/delete-access-profiles-from-source-app-by-bulk-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteAccessProfilesFromSourceAppByBulkV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the source app |  [default to undefined]
**requestBody** | `Array<string>` | List of access profile IDs for removal | 
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<AccessProfileDetails>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AppsService } from '@sailpoint/angular-sdk/apps';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AppsService);

  deleteAccessProfilesFromSourceAppByBulkV1(): void {
    const id: string = ; // ID of the source app
    const requestBody: Array<string> = ; // List of access profile IDs for removal
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteAccessProfilesFromSourceAppByBulkV1({ id: id, requestBody: requestBody }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-source-app-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete source app by id
Use this API to delete a specific source app

[API Spec](https://developer.sailpoint.com/docs/api/delete-source-app-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteSourceAppV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | source app ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<SourceApp>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AppsService } from '@sailpoint/angular-sdk/apps';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AppsService);

  deleteSourceAppV1(): void {
    const id: string = ; // source app ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteSourceAppV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-source-app-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get source app by id
This API returns a source app by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-source-app-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetSourceAppV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the source app |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<SourceApp>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AppsService } from '@sailpoint/angular-sdk/apps';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AppsService);

  getSourceAppV1(): void {
    const id: string = ; // ID of the source app
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getSourceAppV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-access-profiles-for-source-app-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List access profiles for the specified source app
This API returns the list of access profiles for the specified source app

[API Spec](https://developer.sailpoint.com/docs/api/list-access-profiles-for-source-app-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListAccessProfilesForSourceAppV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the source app |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<AccessProfileDetails>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AppsService } from '@sailpoint/angular-sdk/apps';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AppsService);

  listAccessProfilesForSourceAppV1(): void {
    const id: string = ; // ID of the source app
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listAccessProfilesForSourceAppV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-all-source-app-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List all source apps
This API returns the list of all source apps for the org.    

[API Spec](https://developer.sailpoint.com/docs/api/list-all-source-app-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListAllSourceAppV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, owner.id, accountSource.id** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, ge, le*  **owner.id**: *eq, in*  **enabled**: *eq* | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<SourceApp>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AppsService } from '@sailpoint/angular-sdk/apps';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AppsService);

  listAllSourceAppV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, owner.id, accountSource.id** (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, ge, le*  **owner.id**: *eq, in*  **enabled**: *eq* (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listAllSourceAppV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-all-user-apps-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List all user apps
This API returns the list of all user apps with specified filters.
This API must be used with **filters** query parameter.

[API Spec](https://developer.sailpoint.com/docs/api/list-all-user-apps-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListAllUserAppsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **ownerId**: *eq*  **ownerName**: *eq, sw*  **ownerAlias**: *eq, sw*  **accountId**: *eq*  **sourceAppId**: *eq* |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<UserApp>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AppsService } from '@sailpoint/angular-sdk/apps';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AppsService);

  listAllUserAppsV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **ownerId**: *eq*  **ownerName**: *eq, sw*  **ownerAlias**: *eq, sw*  **accountId**: *eq*  **sourceAppId**: *eq*
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listAllUserAppsV1({ filters: filters }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-assigned-source-app-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List assigned source apps
This API returns the list of source apps assigned for logged in user.

[API Spec](https://developer.sailpoint.com/docs/api/list-assigned-source-app-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListAssignedSourceAppV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, accountSource.id** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **accountSource.id**: *eq, in* | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<SourceApp>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AppsService } from '@sailpoint/angular-sdk/apps';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AppsService);

  listAssignedSourceAppV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, accountSource.id** (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **accountSource.id**: *eq, in* (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listAssignedSourceAppV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-available-accounts-for-user-app-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List available accounts for user app
This API returns the list of available accounts for the specified user app. The user app needs to belong lo logged in user.

[API Spec](https://developer.sailpoint.com/docs/api/list-available-accounts-for-user-app-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListAvailableAccountsForUserAppV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the user app |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<AppAccountDetails>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AppsService } from '@sailpoint/angular-sdk/apps';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AppsService);

  listAvailableAccountsForUserAppV1(): void {
    const id: string = ; // ID of the user app
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listAvailableAccountsForUserAppV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-available-source-apps-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List available source apps
This API returns the list of source apps available for access request.

[API Spec](https://developer.sailpoint.com/docs/api/list-available-source-apps-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListAvailableSourceAppsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, owner.id, accountSource.id** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **accountSource.id**: *eq, in* | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<SourceApp>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AppsService } from '@sailpoint/angular-sdk/apps';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AppsService);

  listAvailableSourceAppsV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, owner.id, accountSource.id** (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **accountSource.id**: *eq, in* (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listAvailableSourceAppsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-owned-user-apps-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List owned user apps
This API returns the list of user apps assigned to logged in user

[API Spec](https://developer.sailpoint.com/docs/api/list-owned-user-apps-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListOwnedUserAppsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **ownerName**: *eq, sw*  **ownerAlias**: *eq, sw*  **accountId**: *eq*  **sourceAppId**: *eq* | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<UserApp>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AppsService } from '@sailpoint/angular-sdk/apps';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AppsService);

  listOwnedUserAppsV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **ownerName**: *eq, sw*  **ownerAlias**: *eq, sw*  **accountId**: *eq*  **sourceAppId**: *eq* (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listOwnedUserAppsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-source-app-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Patch source app by id
This API updates an existing source app using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.
The following fields are patchable: **name**, **description**, **enabled**, **owner**, **provisionRequestEnabled**, **appCenterEnabled**, **accountSource**,  **matchAllAccounts** and **accessProfiles**.
Name, description and owner can't be empty or null.

[API Spec](https://developer.sailpoint.com/docs/api/patch-source-app-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchSourceAppV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the source app to patch |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**jsonPatchOperation** | `Array<JsonPatchOperation>` |  | [optional]

### Return type

`Observable<SourceAppPatchDto>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AppsService } from '@sailpoint/angular-sdk/apps';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/apps';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AppsService);

  patchSourceAppV1(): void {
    const id: string = ; // ID of the source app to patch
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const jsonPatchOperation: Array<JsonPatchOperation> = ; //  (optional)
    this.api.patchSourceAppV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-user-app-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Patch user app by id
This API updates an existing user app using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.
The following fields are patchable: **account**

[API Spec](https://developer.sailpoint.com/docs/api/patch-user-app-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchUserAppV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the user app to patch |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**jsonPatchOperation** | `Array<JsonPatchOperation>` |  | [optional]

### Return type

`Observable<UserApp>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AppsService } from '@sailpoint/angular-sdk/apps';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/apps';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AppsService);

  patchUserAppV1(): void {
    const id: string = ; // ID of the user app to patch
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const jsonPatchOperation: Array<JsonPatchOperation> = ; //  (optional)
    this.api.patchUserAppV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-source-apps-in-bulk-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Bulk update source apps
This API updates source apps using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.  It can update up to 50 source apps in a batch.
The following fields can be updated: **name**, **description**, **enabled**, **owner**, **provisionRequestEnabled**, **appCenterEnabled**, **accountSource**,  **matchAllAccounts**, and **accessProfiles**.
Name, description and owner can't be empty or null.

[API Spec](https://developer.sailpoint.com/docs/api/update-source-apps-in-bulk-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateSourceAppsInBulkV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**sourceAppBulkUpdateRequest** | `SourceAppBulkUpdateRequest` |  | [optional]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AppsService } from '@sailpoint/angular-sdk/apps';
import { SourceAppBulkUpdateRequest } from '@sailpoint/angular-sdk/apps';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AppsService);

  updateSourceAppsInBulkV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const sourceAppBulkUpdateRequest: SourceAppBulkUpdateRequest = ; //  (optional)
    this.api.updateSourceAppsInBulkV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

