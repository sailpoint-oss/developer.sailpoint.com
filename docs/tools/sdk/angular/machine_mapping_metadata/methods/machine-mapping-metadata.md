# MachineMappingMetadata

# MachineMappingMetadataService
  Use this API to get the identity and account attributes you can use as targets when you map source attributes for machine account classification. The lists tell you which attribute names a mapping can write to before you configure it.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-machine-mapping-target-account-attributes-v1**](#get-machine-mapping-target-account-attributes-v1) | **GET** `/machine-mapping-metadata/v1/target-account-attributes` | List target account attributes
[**get-machine-mapping-target-identity-attributes-v1**](#get-machine-mapping-target-identity-attributes-v1) | **GET** `/machine-mapping-metadata/v1/target-identity-attributes` | List target identity attributes


## get-machine-mapping-target-account-attributes-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List target account attributes
This API returns the account attribute names that a machine mapping can target.


The list always includes **name** and **nativeIdentity**. When expanded mapping targets are enabled for the tenant,
the list also includes **description**, **environment**, **subtype**, and **businessApplication**.


The caller needs the **idn:account:read** right.


When machine account classification is not enabled for the tenant, this API returns `404`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-mapping-target-account-attributes-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMachineMappingTargetAccountAttributesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<TargetAttributes>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineMappingMetadataService } from '@sailpoint/angular-sdk/machine_mapping_metadata';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineMappingMetadataService);

  getMachineMappingTargetAccountAttributesV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getMachineMappingTargetAccountAttributesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-machine-mapping-target-identity-attributes-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List target identity attributes
This API returns the identity attribute names that a machine mapping can target.


The list always includes **name**, **alias**, **email**, and **uid**. When expanded mapping targets are enabled
for the tenant, the list also includes the tenant's searchable identity attributes.


When machine account classification is not enabled for the tenant, this API returns `404`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-mapping-target-identity-attributes-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMachineMappingTargetIdentityAttributesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<TargetAttributes>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineMappingMetadataService } from '@sailpoint/angular-sdk/machine_mapping_metadata';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineMappingMetadataService);

  getMachineMappingTargetIdentityAttributesV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getMachineMappingTargetIdentityAttributesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

