# UIMetadata

# UIMetadataService
  API for managing UI Metadata. Use this API to manage metadata about your User Interface.
For example you can set the iFrameWhitelist parameter to permit another domain to encapsulate IDN within an iframe or set the usernameEmptyText to change the placeholder text for Username on your tenant&#39;s login screen. 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-tenant-ui-metadata-v1**](#get-tenant-ui-metadata-v1) | **GET** `/ui-metadata/v1/tenant` | Get a tenant ui metadata
[**set-tenant-ui-metadata-v1**](#set-tenant-ui-metadata-v1) | **PUT** `/ui-metadata/v1/tenant` | Update tenant ui metadata


## get-tenant-ui-metadata-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get a tenant ui metadata
This API endpoint retrieves UI metadata configured for your tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-tenant-ui-metadata-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetTenantUiMetadataV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<TenantUiMetadataItemResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { UIMetadataService } from '@sailpoint/angular-sdk/ui_metadata';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(UIMetadataService);

  getTenantUiMetadataV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getTenantUiMetadataV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## set-tenant-ui-metadata-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update tenant ui metadata
This API endpoint updates UI metadata for your tenant. These changes may require up to 5 minutes to take effect on the UI.

[API Spec](https://developer.sailpoint.com/docs/api/set-tenant-ui-metadata-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SetTenantUiMetadataV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**tenantUiMetadataItemUpdateRequest** | `TenantUiMetadataItemUpdateRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<TenantUiMetadataItemResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { UIMetadataService } from '@sailpoint/angular-sdk/ui_metadata';
import { TenantUiMetadataItemUpdateRequest } from '@sailpoint/angular-sdk/ui_metadata';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(UIMetadataService);

  setTenantUiMetadataV1(): void {
    const tenantUiMetadataItemUpdateRequest: TenantUiMetadataItemUpdateRequest = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.setTenantUiMetadataV1({ tenantUiMetadataItemUpdateRequest: tenantUiMetadataItemUpdateRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

