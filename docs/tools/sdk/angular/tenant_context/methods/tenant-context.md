# TenantContext

# TenantContextService
  The purpose of this API is to manage key-value pairs specific to a tenant&#39;s context, enabling dynamic configuration and personalized settings per tenant.
Context key-value pairs will consist of common terms and acronyms used within your organization.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-tenant-context-v1**](#get-tenant-context-v1) | **GET** `/tenant-context/v1` | Retrieve tenant context
[**patch-tenant-context-v1**](#patch-tenant-context-v1) | **PATCH** `/tenant-context/v1` | Update tenant context


## get-tenant-context-v1
Retrieve tenant context
Returns all key-value pairs representing the current state of the tenant's context.
Each tenant is limited to a maximum of 100 key-value pairs.


[API Spec](https://developer.sailpoint.com/docs/api/get-tenant-context-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetTenantContextV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<Array<GetTenantContextV1200ResponseInner>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TenantContextService } from '@sailpoint/angular-sdk/tenant_context';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TenantContextService);

  getTenantContextV1(): void {
    this.api.getTenantContextV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-tenant-context-v1
Update tenant context
Allows the user to make incremental updates to tenant context records using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

This endpoint is specifically designed to modify the `/Key/*` field, supporting operations such as `add`, `remove`, or `replace` to manage key-value pairs. 

Note that each tenant is limited to a maximum of 100 key-value pairs.


[API Spec](https://developer.sailpoint.com/docs/api/patch-tenant-context-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchTenantContextV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**jsonPatchOperation** | `JsonPatchOperation` |  | 

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TenantContextService } from '@sailpoint/angular-sdk/tenant_context';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/tenant_context';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TenantContextService);

  patchTenantContextV1(): void {
    const jsonPatchOperation: JsonPatchOperation = ; // 
    this.api.patchTenantContextV1({ jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

