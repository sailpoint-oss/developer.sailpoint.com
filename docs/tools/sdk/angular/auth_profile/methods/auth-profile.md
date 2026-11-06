# AuthProfile

# AuthProfileService
  Use this API to implement Auth Profile functionality. 
With this functionality in place, users can read authentication profiles and make changes to them. 

An authentication profile represents an identity profile&#39;s authentication configuration. 
When the identity profile is created, its authentication profile is also created. 
An authentication profile includes information like its authentication profile type (&#x60;BLOCK&#x60;, &#x60;MFA&#x60;, &#x60;NON_PTA&#x60;, PTA&#x60;) and settings controlling whether or not it blocks access from off network or untrusted geographies. 
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-profile-config-list-v1**](#get-profile-config-list-v1) | **GET** `/auth-profiles/v1` | Get list of auth profiles
[**get-profile-config-v1**](#get-profile-config-v1) | **GET** `/auth-profiles/v1/{id}` | Get auth profile
[**patch-profile-config-v1**](#patch-profile-config-v1) | **PATCH** `/auth-profiles/v1/{id}` | Patch a specified auth profile


## get-profile-config-list-v1
Get list of auth profiles
This API returns a list of auth profiles.

[API Spec](https://developer.sailpoint.com/docs/api/get-profile-config-list-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetProfileConfigListV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<Array<AuthProfileSummary>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AuthProfileService } from '@sailpoint/angular-sdk/auth_profile';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AuthProfileService);

  getProfileConfigListV1(): void {
    this.api.getProfileConfigListV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-profile-config-v1
Get auth profile
This API returns auth profile information.

[API Spec](https://developer.sailpoint.com/docs/api/get-profile-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetProfileConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the Auth Profile to patch. |  [default to undefined]

### Return type

`Observable<AuthProfile>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AuthProfileService } from '@sailpoint/angular-sdk/auth_profile';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AuthProfileService);

  getProfileConfigV1(): void {
    const id: string = ; // ID of the Auth Profile to patch.
    this.api.getProfileConfigV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-profile-config-v1
Patch a specified auth profile
This API updates an existing Auth Profile. The following fields are patchable:
**offNetwork**, **untrustedGeography**, **applicationId**, **applicationName**, **type**

[API Spec](https://developer.sailpoint.com/docs/api/patch-profile-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchProfileConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the Auth Profile to patch. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` |  | 

### Return type

`Observable<AuthProfile>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AuthProfileService } from '@sailpoint/angular-sdk/auth_profile';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/auth_profile';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AuthProfileService);

  patchProfileConfigV1(): void {
    const id: string = ; // ID of the Auth Profile to patch.
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // 
    this.api.patchProfileConfigV1({ id: id, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

