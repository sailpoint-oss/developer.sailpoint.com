# Transforms

# TransformsService
  The purpose of this API is to expose functionality for the manipulation of Transform objects.
Transforms are a form of configurable objects which define an easy way to manipulate attribute data without having
to write code. 

Refer to [Transforms](https://developer.sailpoint.com/docs/extensibility/transforms/) for more information about transforms.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-transform-v1**](#create-transform-v1) | **POST** `/transforms/v1` | Create transform
[**delete-transform-v1**](#delete-transform-v1) | **DELETE** `/transforms/v1/{id}` | Delete a transform
[**get-transform-v1**](#get-transform-v1) | **GET** `/transforms/v1/{id}` | Transform by id
[**list-transforms-v1**](#list-transforms-v1) | **GET** `/transforms/v1` | List transforms
[**update-transform-v1**](#update-transform-v1) | **PUT** `/transforms/v1/{id}` | Update a transform


## create-transform-v1
Create transform
Creates a new transform object immediately. By default, the internal flag is set to false to indicate that this is a custom transform. Only SailPoint employees have the ability to create a transform with internal set to true. Newly created Transforms can be used in the Identity Profile mappings within the UI.

[API Spec](https://developer.sailpoint.com/docs/api/create-transform-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateTransformV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**transform** | `Transform` | The transform to be created. | 

### Return type

`Observable<TransformRead>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TransformsService } from '@sailpoint/angular-sdk/transforms';
import { Transform } from '@sailpoint/angular-sdk/transforms';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TransformsService);

  createTransformV1(): void {
    const transform: Transform = ; // The transform to be created.
    this.api.createTransformV1({ transform: transform }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-transform-v1
Delete a transform
Deletes the transform specified by the given ID. Attempting to delete a transform that is used in one or more Identity Profile mappings will result in an error. If this occurs, you must first remove the transform from all mappings before deleting the transform.

[API Spec](https://developer.sailpoint.com/docs/api/delete-transform-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteTransformV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the transform to delete |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TransformsService } from '@sailpoint/angular-sdk/transforms';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TransformsService);

  deleteTransformV1(): void {
    const id: string = ; // ID of the transform to delete
    this.api.deleteTransformV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-transform-v1
Transform by id
This API returns the transform specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-transform-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetTransformV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the transform to retrieve |  [default to undefined]

### Return type

`Observable<TransformRead>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TransformsService } from '@sailpoint/angular-sdk/transforms';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TransformsService);

  getTransformV1(): void {
    const id: string = ; // ID of the transform to retrieve
    this.api.getTransformV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-transforms-v1
List transforms
Gets a list of all saved transform objects.

[API Spec](https://developer.sailpoint.com/docs/api/list-transforms-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListTransformsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**name** | `string` | Name of the transform to retrieve from the list. | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **internal**: *eq*  **name**: *eq, sw* | [optional] [default to undefined]

### Return type

`Observable<Array<TransformRead>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TransformsService } from '@sailpoint/angular-sdk/transforms';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TransformsService);

  listTransformsV1(): void {
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const name: string = ; // Name of the transform to retrieve from the list. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **internal**: *eq*  **name**: *eq, sw* (optional)
    this.api.listTransformsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-transform-v1
Update a transform
Replaces the transform specified by the given ID with the transform provided in the request body. Only the "attributes" field is mutable. Attempting to change other properties (ex. "name" and "type") will result in an error.

[API Spec](https://developer.sailpoint.com/docs/api/update-transform-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateTransformV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the transform to update |  [default to undefined]
**transform** | `Transform` | The updated transform object. Must include \&quot;name\&quot;, \&quot;type\&quot;, and \&quot;attributes\&quot; fields, but \&quot;name\&quot; and \&quot;type\&quot; must not be modified. | [optional]

### Return type

`Observable<TransformRead>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TransformsService } from '@sailpoint/angular-sdk/transforms';
import { Transform } from '@sailpoint/angular-sdk/transforms';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TransformsService);

  updateTransformV1(): void {
    const id: string = ; // ID of the transform to update
    const transform: Transform = ; // The updated transform object. Must include \&quot;name\&quot;, \&quot;type\&quot;, and \&quot;attributes\&quot; fields, but \&quot;name\&quot; and \&quot;type\&quot; must not be modified. (optional)
    this.api.updateTransformV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

