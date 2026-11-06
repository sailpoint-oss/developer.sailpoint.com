# JITActivationConvert

# JITActivationConvertService
  Use this API to convert the assignment type of an entitlement connection between
STANDING and JIT (Just-In-Time Privileged).

OAuth scope required: **idn:jit-assignment-type-conversion:manage**
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**start-entitlement-connection-conversion-v1**](#start-entitlement-connection-conversion-v1) | **POST** `/convert-entitlement-connection/v1` | Convert entitlement connection assignment type


## start-entitlement-connection-conversion-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Convert entitlement connection assignment type
Initiates an asynchronous workflow to convert the assignment type of an entitlement connection
between `STANDING` and `JIT` (Just-In-Time Privileged).

The response is returned with HTTP 202 Accepted while the conversion workflow initializes.


[API Spec](https://developer.sailpoint.com/docs/api/start-entitlement-connection-conversion-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `StartEntitlementConnectionConversionV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**convertEntitlementConnectionRequest** | `ConvertEntitlementConnectionRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<ConvertEntitlementConnectionResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { JITActivationConvertService } from '@sailpoint/angular-sdk/jit_activation_convert';
import { ConvertEntitlementConnectionRequest } from '@sailpoint/angular-sdk/jit_activation_convert';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(JITActivationConvertService);

  startEntitlementConnectionConversionV1(): void {
    const convertEntitlementConnectionRequest: ConvertEntitlementConnectionRequest = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.startEntitlementConnectionConversionV1({ convertEntitlementConnectionRequest: convertEntitlementConnectionRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

