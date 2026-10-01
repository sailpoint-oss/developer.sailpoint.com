# ClassifySource

# ClassifySourceService
   
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-classify-machine-account-from-source-v1**](#delete-classify-machine-account-from-source-v1) | **DELETE** `/sources/v1/{sourceId}/classify` | Cancel classify source\&#39;s accounts process
[**get-classify-machine-account-from-source-status-v1**](#get-classify-machine-account-from-source-status-v1) | **GET** `/sources/v1/{sourceId}/classify` | Source accounts classification status
[**send-classify-machine-account-from-source-v1**](#send-classify-machine-account-from-source-v1) | **POST** `/sources/v1/{sourceId}/classify` | Classify source\&#39;s all accounts


## delete-classify-machine-account-from-source-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Cancel classify source\'s accounts process
Use this API to cancel account classification process on a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/delete-classify-machine-account-from-source-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteClassifyMachineAccountFromSourceV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ClassifySourceService } from '@sailpoint/angular-sdk/classify_source';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ClassifySourceService);

  deleteClassifyMachineAccountFromSourceV1(): void {
    const sourceId: string = ; // Source ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteClassifyMachineAccountFromSourceV1({ sourceId: sourceId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-classify-machine-account-from-source-status-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Source accounts classification status
Use this API to get the status of Machine Account Classification process for a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-classify-machine-account-from-source-status-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetClassifyMachineAccountFromSourceStatusV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<SourceClassificationStatus>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ClassifySourceService } from '@sailpoint/angular-sdk/classify_source';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ClassifySourceService);

  getClassifyMachineAccountFromSourceStatusV1(): void {
    const sourceId: string = ; // Source ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getClassifyMachineAccountFromSourceStatusV1({ sourceId: sourceId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## send-classify-machine-account-from-source-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Classify source\'s all accounts
Use this API to classify all the accounts from a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/send-classify-machine-account-from-source-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SendClassifyMachineAccountFromSourceV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<SendClassifyMachineAccountFromSourceV1200Response>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ClassifySourceService } from '@sailpoint/angular-sdk/classify_source';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ClassifySourceService);

  sendClassifyMachineAccountFromSourceV1(): void {
    const sourceId: string = ; // Source ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.sendClassifyMachineAccountFromSourceV1({ sourceId: sourceId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

