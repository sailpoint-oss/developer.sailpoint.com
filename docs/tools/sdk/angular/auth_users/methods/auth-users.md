# AuthUsers

# AuthUsersService
  Use this API to implement user authentication system functionality. 
With this functionality in place, users can get a user&#39;s authentication system details, including their capabilities, and modify those capabilities. 
The user&#39;s capabilities refer to their access to different systems, or authorization, within the tenant, like access to certifications (CERT_ADMIN) or reports (REPORT_ADMIN). 
These capabilities also determine a user&#39;s access to the different APIs. 
This API provides users with a way to determine a user&#39;s access and make quick and easy changes to that access. 
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-auth-user-v1**](#get-auth-user-v1) | **GET** `/auth-users/v1/{id}` | Auth user details
[**patch-auth-user-v1**](#patch-auth-user-v1) | **PATCH** `/auth-users/v1/{id}` | Auth user update


## get-auth-user-v1
Auth user details
Return the specified user's authentication system details.

[API Spec](https://developer.sailpoint.com/docs/api/get-auth-user-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetAuthUserV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Identity ID |  [default to undefined]

### Return type

`Observable<AuthUser>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AuthUsersService } from '@sailpoint/angular-sdk/auth_users';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AuthUsersService);

  getAuthUserV1(): void {
    const id: string = ; // Identity ID
    this.api.getAuthUserV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-auth-user-v1
Auth user update
Use a PATCH request to update an existing user in the authentication system.
Use this endpoint to modify these fields: 
  * `capabilities`

A '400.1.1 Illegal update attempt' detail code indicates that you attempted to PATCH a field that is not allowed.

[API Spec](https://developer.sailpoint.com/docs/api/patch-auth-user-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchAuthUserV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Identity ID |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A list of auth user update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

`Observable<AuthUser>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AuthUsersService } from '@sailpoint/angular-sdk/auth_users';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/auth_users';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AuthUsersService);

  patchAuthUserV1(): void {
    const id: string = ; // Identity ID
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // A list of auth user update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
    this.api.patchAuthUserV1({ id: id, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

