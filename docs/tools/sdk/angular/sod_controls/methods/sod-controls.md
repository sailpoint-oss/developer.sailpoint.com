# SODControls

# SODControlsService
  Use this API to create, list, retrieve, update, and delete compensating controls associated with separation-of-duties policies. Requires policy violation management license.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-control-v1**](#create-control-v1) | **POST** `/controls/v1` | Create Compensating Control
[**delete-control-v1**](#delete-control-v1) | **DELETE** `/controls/v1/{id}` | Delete compensating control by ID
[**get-control-v1**](#get-control-v1) | **GET** `/controls/v1/{id}` | Get compensating control by ID
[**list-controls-v1**](#list-controls-v1) | **GET** `/controls/v1` | List Compensating Controls
[**put-control-v1**](#put-control-v1) | **PUT** `/controls/v1/{id}` | Put Compensating Control


## create-control-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create Compensating Control
Creates a compensating control associated with separation-of-duties policies.

[API Spec](https://developer.sailpoint.com/docs/api/create-control-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateControlV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**compensatingcontrolcreate** | `Compensatingcontrolcreate` | Data needed to create a Compensating Control | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Compensatingcontrolresponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SODControlsService } from '@sailpoint/angular-sdk/sod_controls';
import { Compensatingcontrolcreate } from '@sailpoint/angular-sdk/sod_controls';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SODControlsService);

  createControlV1(): void {
    const compensatingcontrolcreate: Compensatingcontrolcreate = ; // Data needed to create a Compensating Control
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createControlV1({ compensatingcontrolcreate: compensatingcontrolcreate }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-control-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete compensating control by ID
Deletes the specified compensating control from the data store.

[API Spec](https://developer.sailpoint.com/docs/api/delete-control-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteControlV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | the ID (UUID) of the compensating control to delete. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SODControlsService } from '@sailpoint/angular-sdk/sod_controls';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SODControlsService);

  deleteControlV1(): void {
    const id: string = ; // the ID (UUID) of the compensating control to delete.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteControlV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-control-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get compensating control by ID
Returns a single compensating control by ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-control-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetControlV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the compensating control to fetch |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Compensatingcontrolresponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SODControlsService } from '@sailpoint/angular-sdk/sod_controls';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SODControlsService);

  getControlV1(): void {
    const id: string = ; // The ID of the compensating control to fetch
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getControlV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-controls-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List Compensating Controls
Returns a list of compensating controls associated with separation-of-duties policies.

[API Spec](https://developer.sailpoint.com/docs/api/list-controls-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListControlsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **type**: *eq*  **owner**: *eq, in*  **description**: *eq, in, sw, co*  **action**: *eq, in* | [optional] [default to undefined]
**sort** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**  Prefix a field with - for descending order, for example -name. If no sort is provided, results default to name ascending. | [optional] [default to undefined]

### Return type

`Observable<Array<Compensatingcontrolresponse>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SODControlsService } from '@sailpoint/angular-sdk/sod_controls';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SODControlsService);

  listControlsV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **type**: *eq*  **owner**: *eq, in*  **description**: *eq, in, sw, co*  **action**: *eq, in* (optional)
    const sort: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**  Prefix a field with - for descending order, for example -name. If no sort is provided, results default to name ascending. (optional)
    this.api.listControlsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## put-control-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Put Compensating Control
Updates the specified compensating control.

[API Spec](https://developer.sailpoint.com/docs/api/put-control-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PutControlV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The unique identifier of the Compensating Control to be updated. |  [default to undefined]
**compensatingcontrolupdate** | `Compensatingcontrolupdate` | Data needed to put a Compensating Control | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Compensatingcontrolresponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SODControlsService } from '@sailpoint/angular-sdk/sod_controls';
import { Compensatingcontrolupdate } from '@sailpoint/angular-sdk/sod_controls';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SODControlsService);

  putControlV1(): void {
    const id: string = ; // The unique identifier of the Compensating Control to be updated.
    const compensatingcontrolupdate: Compensatingcontrolupdate = ; // Data needed to put a Compensating Control
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.putControlV1({ id: id, compensatingcontrolupdate: compensatingcontrolupdate }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

