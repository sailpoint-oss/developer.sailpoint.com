# Icons

# IconsService
  Use this API to implement functionality related to object icons (application icons for example). 
With this functionality in place, administrators can set or remove an icon for specific object type for use throughout Identity Security Cloud.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-icon-v1**](#delete-icon-v1) | **DELETE** `/icons/v1/{objectType}/{objectId}` | Delete an icon
[**set-icon-v1**](#set-icon-v1) | **PUT** `/icons/v1/{objectType}/{objectId}` | Update an icon


## delete-icon-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete an icon
This API endpoint delete an icon by object type and object id. A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/delete-icon-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteIconV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**objectType** | `'application'` | Object type. Available options [\&#39;application\&#39;] |  [default to undefined]
**objectId** | `string` | Object id. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IconsService } from '@sailpoint/angular-sdk/icons';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IconsService);

  deleteIconV1(): void {
    const objectType: string = ; // Object type. Available options [\&#39;application\&#39;]
    const objectId: string = ; // Object id.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteIconV1({ objectType: objectType, objectId: objectId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## set-icon-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update an icon
This API endpoint updates an icon by object type and object id. A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/set-icon-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SetIconV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**objectType** | `'application'` | Object type. Available options [\&#39;application\&#39;] |  [default to undefined]
**objectId** | `string` | Object id. |  [default to undefined]
**image** | `Blob` | file with icon. Allowed mime-types [\\\&#39;image/png\\\&#39;, \\\&#39;image/jpeg\\\&#39;] |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<SetIconV1200Response>`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IconsService } from '@sailpoint/angular-sdk/icons';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IconsService);

  setIconV1(): void {
    const objectType: string = ; // Object type. Available options [\&#39;application\&#39;]
    const objectId: string = ; // Object id.
    const image: Blob = ; // file with icon. Allowed mime-types [\\\&#39;image/png\\\&#39;, \\\&#39;image/jpeg\\\&#39;]
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.setIconV1({ objectType: objectType, objectId: objectId, image: image }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

