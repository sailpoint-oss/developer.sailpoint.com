# Tenant

# TenantService
  API for reading tenant details. 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-tenant-v1**](#get-tenant-v1) | **GET** `/tenant/v1` | Get tenant information.


## get-tenant-v1
Get tenant information.
This rest endpoint can be used to retrieve tenant details.

[API Spec](https://developer.sailpoint.com/docs/api/get-tenant-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetTenantV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<Tenant>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TenantService } from '@sailpoint/angular-sdk/tenant';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TenantService);

  getTenantV1(): void {
    this.api.getTenantV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

