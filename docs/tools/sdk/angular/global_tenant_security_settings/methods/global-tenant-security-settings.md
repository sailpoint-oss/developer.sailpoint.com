# GlobalTenantSecuritySettings

# GlobalTenantSecuritySettingsService
  Use this API to implement and customize global tenant security settings.
With this functionality in place, administrators can manage the global security settings that a tenant/org has.
This API can be used to configure the networks and Geographies allowed to access Identity Security Cloud URLs.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-auth-org-network-config-v1**](#create-auth-org-network-config-v1) | **POST** `/auth-org/v1/network-config` | Create security network configuration.
[**get-auth-org-lockout-config-v1**](#get-auth-org-lockout-config-v1) | **GET** `/auth-org/v1/lockout-config` | Get auth org lockout configuration.
[**get-auth-org-network-config-v1**](#get-auth-org-network-config-v1) | **GET** `/auth-org/v1/network-config` | Get security network configuration.
[**get-auth-org-service-provider-config-v1**](#get-auth-org-service-provider-config-v1) | **GET** `/auth-org/v1/service-provider-config` | Get service provider configuration.
[**get-auth-org-session-config-v1**](#get-auth-org-session-config-v1) | **GET** `/auth-org/v1/session-config` | Get auth org session configuration.
[**patch-auth-org-lockout-config-v1**](#patch-auth-org-lockout-config-v1) | **PATCH** `/auth-org/v1/lockout-config` | Update auth org lockout configuration
[**patch-auth-org-network-config-v1**](#patch-auth-org-network-config-v1) | **PATCH** `/auth-org/v1/network-config` | Update security network configuration.
[**patch-auth-org-service-provider-config-v1**](#patch-auth-org-service-provider-config-v1) | **PATCH** `/auth-org/v1/service-provider-config` | Update service provider configuration
[**patch-auth-org-session-config-v1**](#patch-auth-org-session-config-v1) | **PATCH** `/auth-org/v1/session-config` | Update auth org session configuration


## create-auth-org-network-config-v1
Create security network configuration.
This API returns the details of an org's network auth configuration. Requires security scope of: 'sp:auth-org:manage'

[API Spec](https://developer.sailpoint.com/docs/api/create-auth-org-network-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateAuthOrgNetworkConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**networkConfiguration** | `NetworkConfiguration` | Network configuration creation request body.   The following constraints ensure the request body conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters. | 

### Return type

`Observable<NetworkConfiguration>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { GlobalTenantSecuritySettingsService } from '@sailpoint/angular-sdk/global_tenant_security_settings';
import { NetworkConfiguration } from '@sailpoint/angular-sdk/global_tenant_security_settings';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(GlobalTenantSecuritySettingsService);

  createAuthOrgNetworkConfigV1(): void {
    const networkConfiguration: NetworkConfiguration = ; // Network configuration creation request body.   The following constraints ensure the request body conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.
    this.api.createAuthOrgNetworkConfigV1({ networkConfiguration: networkConfiguration }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-auth-org-lockout-config-v1
Get auth org lockout configuration.
This API returns the details of an org's lockout auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/get-auth-org-lockout-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetAuthOrgLockoutConfigV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<LockoutConfiguration>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { GlobalTenantSecuritySettingsService } from '@sailpoint/angular-sdk/global_tenant_security_settings';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(GlobalTenantSecuritySettingsService);

  getAuthOrgLockoutConfigV1(): void {
    this.api.getAuthOrgLockoutConfigV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-auth-org-network-config-v1
Get security network configuration.
This API returns the details of an org's network auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/get-auth-org-network-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetAuthOrgNetworkConfigV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<NetworkConfiguration>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { GlobalTenantSecuritySettingsService } from '@sailpoint/angular-sdk/global_tenant_security_settings';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(GlobalTenantSecuritySettingsService);

  getAuthOrgNetworkConfigV1(): void {
    this.api.getAuthOrgNetworkConfigV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-auth-org-service-provider-config-v1
Get service provider configuration.
This API returns the details of an org's service provider auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/get-auth-org-service-provider-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetAuthOrgServiceProviderConfigV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<ServiceProviderConfiguration>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { GlobalTenantSecuritySettingsService } from '@sailpoint/angular-sdk/global_tenant_security_settings';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(GlobalTenantSecuritySettingsService);

  getAuthOrgServiceProviderConfigV1(): void {
    this.api.getAuthOrgServiceProviderConfigV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-auth-org-session-config-v1
Get auth org session configuration.
This API returns the details of an org's session auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/get-auth-org-session-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetAuthOrgSessionConfigV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<SessionConfiguration>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { GlobalTenantSecuritySettingsService } from '@sailpoint/angular-sdk/global_tenant_security_settings';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(GlobalTenantSecuritySettingsService);

  getAuthOrgSessionConfigV1(): void {
    this.api.getAuthOrgSessionConfigV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-auth-org-lockout-config-v1
Update auth org lockout configuration
This API updates an existing lockout configuration for an org using PATCH


[API Spec](https://developer.sailpoint.com/docs/api/patch-auth-org-lockout-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchAuthOrgLockoutConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A list of auth org lockout configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Lockout Config conforms to certain logical guidelines, which are:   &#x60;1. maximumAttempts &gt;&#x3D; 1 &amp;&amp; maximumAttempts &lt;&#x3D; 15   2. lockoutDuration &gt;&#x3D; 5 &amp;&amp; lockoutDuration &lt;&#x3D; 60   3. lockoutWindow &gt;&#x3D; 5 &amp;&amp; lockoutDuration &lt;&#x3D; 60&#x60; | 

### Return type

`Observable<LockoutConfiguration>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { GlobalTenantSecuritySettingsService } from '@sailpoint/angular-sdk/global_tenant_security_settings';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/global_tenant_security_settings';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(GlobalTenantSecuritySettingsService);

  patchAuthOrgLockoutConfigV1(): void {
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // A list of auth org lockout configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Lockout Config conforms to certain logical guidelines, which are:   &#x60;1. maximumAttempts &gt;&#x3D; 1 &amp;&amp; maximumAttempts &lt;&#x3D; 15   2. lockoutDuration &gt;&#x3D; 5 &amp;&amp; lockoutDuration &lt;&#x3D; 60   3. lockoutWindow &gt;&#x3D; 5 &amp;&amp; lockoutDuration &lt;&#x3D; 60&#x60;
    this.api.patchAuthOrgLockoutConfigV1({ jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-auth-org-network-config-v1
Update security network configuration.
This API updates an existing network configuration for an org using PATCH
 Requires security scope of:  'sp:auth-org:manage'

[API Spec](https://developer.sailpoint.com/docs/api/patch-auth-org-network-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchAuthOrgNetworkConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A list of auth org network configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Network Config conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters. | 

### Return type

`Observable<NetworkConfiguration>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { GlobalTenantSecuritySettingsService } from '@sailpoint/angular-sdk/global_tenant_security_settings';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/global_tenant_security_settings';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(GlobalTenantSecuritySettingsService);

  patchAuthOrgNetworkConfigV1(): void {
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // A list of auth org network configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Network Config conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.
    this.api.patchAuthOrgNetworkConfigV1({ jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-auth-org-service-provider-config-v1
Update service provider configuration
This API updates an existing service provider configuration for an org using PATCH.

[API Spec](https://developer.sailpoint.com/docs/api/patch-auth-org-service-provider-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchAuthOrgServiceProviderConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A list of auth org service provider configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Note: /federationProtocolDetails/0 is IdpDetails /federationProtocolDetails/1 is SpDetails Ensures that the patched ServiceProviderConfig conforms to certain logical guidelines, which are:   1. Do not add or remove any elements in the federation protocol details in the service provider configuration.   2. Do not modify, add, or delete the service provider details element in the federation protocol details.   3. If this is the first time the patched ServiceProviderConfig enables Remote IDP sign-in, it must also include IDPDetails.   4. If the patch enables Remote IDP sign in, the entityID in the IDPDetails cannot be null. IDPDetails must include an entityID.   5. Any JIT configuration update must be valid.  Just in time configuration update must be valid when enabled. This includes:   - A Source ID   - Source attribute mappings   - Source attribute maps have all the required key values (firstName, lastName, email) | 

### Return type

`Observable<ServiceProviderConfiguration>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { GlobalTenantSecuritySettingsService } from '@sailpoint/angular-sdk/global_tenant_security_settings';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/global_tenant_security_settings';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(GlobalTenantSecuritySettingsService);

  patchAuthOrgServiceProviderConfigV1(): void {
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // A list of auth org service provider configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Note: /federationProtocolDetails/0 is IdpDetails /federationProtocolDetails/1 is SpDetails Ensures that the patched ServiceProviderConfig conforms to certain logical guidelines, which are:   1. Do not add or remove any elements in the federation protocol details in the service provider configuration.   2. Do not modify, add, or delete the service provider details element in the federation protocol details.   3. If this is the first time the patched ServiceProviderConfig enables Remote IDP sign-in, it must also include IDPDetails.   4. If the patch enables Remote IDP sign in, the entityID in the IDPDetails cannot be null. IDPDetails must include an entityID.   5. Any JIT configuration update must be valid.  Just in time configuration update must be valid when enabled. This includes:   - A Source ID   - Source attribute mappings   - Source attribute maps have all the required key values (firstName, lastName, email)
    this.api.patchAuthOrgServiceProviderConfigV1({ jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-auth-org-session-config-v1
Update auth org session configuration
This API updates an existing session configuration for an org using PATCH.

[API Spec](https://developer.sailpoint.com/docs/api/patch-auth-org-session-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchAuthOrgSessionConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A list of auth org session configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Ensures that the patched Session Config conforms to certain logical guidelines, which are:   &#x60;1. maxSessionTime &gt;&#x3D; 1 &amp;&amp; maxSessionTime &lt;&#x3D; 10080 (1 week)   2. maxIdleTime &gt;&#x3D; 1 &amp;&amp; maxIdleTime &lt;&#x3D; 1440 (1 day)   3. maxSessionTime must have a greater duration than maxIdleTime.&#x60;  | 

### Return type

`Observable<SessionConfiguration>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { GlobalTenantSecuritySettingsService } from '@sailpoint/angular-sdk/global_tenant_security_settings';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/global_tenant_security_settings';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(GlobalTenantSecuritySettingsService);

  patchAuthOrgSessionConfigV1(): void {
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // A list of auth org session configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Ensures that the patched Session Config conforms to certain logical guidelines, which are:   &#x60;1. maxSessionTime &gt;&#x3D; 1 &amp;&amp; maxSessionTime &lt;&#x3D; 10080 (1 week)   2. maxIdleTime &gt;&#x3D; 1 &amp;&amp; maxIdleTime &lt;&#x3D; 1440 (1 day)   3. maxSessionTime must have a greater duration than maxIdleTime.&#x60; 
    this.api.patchAuthOrgSessionConfigV1({ jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

