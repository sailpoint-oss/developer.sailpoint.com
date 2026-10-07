# JITAccess

# JITAccessService
  Use these APIs to configure JIT provisioning activation policy for the tenant.
OAuth scopes: **idn:jit-policy:read** and **idn:jit-policy:manage** (get config), **idn:jit-policy:update** and **idn:jit-policy:manage** (update config). JIT activation workflow APIs use **idn:jit-activation-workflow:*** scopes (activate, extend, deactivate, manage, and **idn:jit-activation-workflow-internal:manage**).
For REST contract details, use the JIT Access operations in this specification and the [SailPoint API documentation](https://developer.sailpoint.com/idn/api/).
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-jit-activation-config-v1**](#get-jit-activation-config-v1) | **GET** `/jit-activation-config/v1/{configType}` | Get JIT activation policy configuration
[**patch-jit-activation-config-v1**](#patch-jit-activation-config-v1) | **PATCH** `/jit-activation-config/v1/{configType}` | Update JIT activation policy configuration


## get-jit-activation-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get JIT activation policy configuration
Returns the tenant's current JIT activation policy configuration, including governed entitlement IDs, activation and extension time limits, default periods, notification settings, and whether the policy applies to future assignments.

The tenant comes from the authenticated request context (not the URL). Use **configType** to select which configuration to read. Returns **404** if that configuration has not been stored yet.

**User level:** POLICY_ADMIN (policy administrator).


[API Spec](https://developer.sailpoint.com/docs/api/get-jit-activation-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetJitActivationConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**configType** | `'policy'` | Configuration kind to read. Only **policy** (JIT activation policy) is supported today.  |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<JITActivationConfigResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { JITAccessService } from '@sailpoint/angular-sdk/jit_access';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(JITAccessService);

  getJitActivationConfigV1(): void {
    const configType: string = ; // Configuration kind to read. Only **policy** (JIT activation policy) is supported today. 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getJitActivationConfigV1({ configType: configType }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-jit-activation-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update JIT activation policy configuration
Updates the tenant's JIT activation policy configuration by applying one or more **replace** operations (same shape as JSON Patch: **op**, **path**, **value**). Use this to change entitlement lists, max/default activation and extension durations, notification recipients or template, and the apply-to-future-assignments flag.

The body must be a non-empty array. Only **replace** is supported; each **path** must be one of the values documented on the request item schema. The tenant is taken from the request context. **configType** selects which configuration to update. Returns **404** if the configuration does not exist, or **400** for an empty body, unknown **configType**, or invalid path/value.

**User level:** POLICY_ADMIN (policy administrator).


[API Spec](https://developer.sailpoint.com/docs/api/patch-jit-activation-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchJitActivationConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**configType** | `'policy'` | Configuration kind to update. Only **policy** (JIT activation policy) is supported today.  |  [default to undefined]
**jitAccessOperationRequest** | `Array<JitAccessOperationRequest>` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<JITActivationConfigResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { JITAccessService } from '@sailpoint/angular-sdk/jit_access';
import { JitAccessOperationRequest } from '@sailpoint/angular-sdk/jit_access';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(JITAccessService);

  patchJitActivationConfigV1(): void {
    const configType: string = ; // Configuration kind to update. Only **policy** (JIT activation policy) is supported today. 
    const jitAccessOperationRequest: Array<JitAccessOperationRequest> = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.patchJitActivationConfigV1({ configType: configType, jitAccessOperationRequest: jitAccessOperationRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

