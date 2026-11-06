# MachineIdentityMetadata

# MachineIdentityMetadataService
  Use this API to get reference data about machine identities, such as the machine identity subtypes available in the tenant. Use these values to build filters and forms for machine identities.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**list-machine-identity-subtypes-v1**](#list-machine-identity-subtypes-v1) | **GET** `/machine-identity-metadata/v1/subtypes` | List machine identity subtypes


## list-machine-identity-subtypes-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List machine identity subtypes
This API returns the machine identity subtypes available in the tenant.


The list includes **Application** and **Device**. When agentic identity governance is enabled for the tenant, the
list also includes **AI Agent**.


When Machine Identity Security is not enabled for the tenant, this API returns `404`.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-subtypes-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListMachineIdentitySubtypesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<string>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentityMetadataService } from '@sailpoint/angular-sdk/machine_identity_metadata';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentityMetadataService);

  listMachineIdentitySubtypesV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listMachineIdentitySubtypesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

