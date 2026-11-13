# DeclassifySource

# DeclassifySourceService
   
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**send-declassify-machine-account-from-source-v1**](#send-declassify-machine-account-from-source-v1) | **POST** `/sources/v1/{sourceId}/declassify` | Declassify source\&#39;s all accounts


## send-declassify-machine-account-from-source-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Declassify source\'s all accounts
Use this API to declassify all the accounts from a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/send-declassify-machine-account-from-source-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SendDeclassifyMachineAccountFromSourceV1RequestParams`.


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
import { DeclassifySourceService } from '@sailpoint/angular-sdk/declassify_source';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DeclassifySourceService);

  sendDeclassifyMachineAccountFromSourceV1(): void {
    const sourceId: string = ; // Source ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.sendDeclassifyMachineAccountFromSourceV1({ sourceId: sourceId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

