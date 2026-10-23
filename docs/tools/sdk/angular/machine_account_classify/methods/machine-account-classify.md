# MachineAccountClassify

# MachineAccountClassifyService
   
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**send-classify-machine-account-v1**](#send-classify-machine-account-v1) | **POST** `/accounts/v1/{id}/classify` | Classify single machine account


## send-classify-machine-account-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Classify single machine account
Use this API to classify a single machine account.
A token with API, ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/send-classify-machine-account-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SendClassifyMachineAccountV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Account ID. |  [default to undefined]
**classificationMode** | `'default' | 'ignoreManual' | 'forceMachine' | 'forceHuman'` | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. | [optional] [default to &#39;default&#39;]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<SendClassifyMachineAccountV1200Response>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountClassifyService } from '@sailpoint/angular-sdk/machine_account_classify';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountClassifyService);

  sendClassifyMachineAccountV1(): void {
    const id: string = ; // Account ID.
    const classificationMode: string = ; // Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.sendClassifyMachineAccountV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

