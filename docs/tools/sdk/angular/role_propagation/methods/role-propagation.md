# RolePropagation

# RolePropagationService
  Role Change Propagation ensures that any changes to the composition of a role’s access objects 
(entitlements, access profiles, or dimensions) are applied to all member identities. 
For example: If an entitlement is removed from a role, all identities assigned to that role 
should lose access to that entitlement as part of this process.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-role-propagation-v1**](#cancel-role-propagation-v1) | **POST** `/role-propagation/v1/terminate` | Terminate Role Propagation process
[**get-ongoing-role-propagation-v1**](#get-ongoing-role-propagation-v1) | **GET** `/role-propagation/v1/is-running` | Get ongoing Role Propagation process
[**get-role-propagation-config-v1**](#get-role-propagation-config-v1) | **GET** `/role-propagation-config/v1` | Get Role Change Propagation Configuration
[**get-role-propagation-status-v1**](#get-role-propagation-status-v1) | **GET** `/role-propagation/v1/{rolePropagationId}/status` | Get status of Role-Propagation process
[**set-role-propagation-config-v1**](#set-role-propagation-config-v1) | **PUT** `/role-propagation-config/v1` | Update Role Change Propagation Configuration
[**start-role-propagation-v1**](#start-role-propagation-v1) | **POST** `/role-propagation/v1` | Initiate Role Propagation process


## cancel-role-propagation-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Terminate Role Propagation process
This endpoint terminates the ongoing role change propagation process for a tenant.

[API Spec](https://developer.sailpoint.com/docs/api/cancel-role-propagation-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CancelRolePropagationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { RolePropagationService } from '@sailpoint/angular-sdk/role_propagation';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(RolePropagationService);

  cancelRolePropagationV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.cancelRolePropagationV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-ongoing-role-propagation-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get ongoing Role Propagation process
This endpoint returns the information of ongoing role change propagation process for a tenant. It returns the information whether the role propagation process is currently running or not, If it is running it returns the details of the ongoing role propagation process. The execution stage of the role propagation process can be one of the following: - PENDING - The role propagation process is queued to be executed. - DATA_AGGREGATION_RUNNING - The role propagation process is currently aggregating data. - LAUNCH_PROVISIONING - The role propagation process has started to provision the access to the identities. - SUCCEEDED - The role propagation process has successfully completed. - FAILED - The role propagation process has failed. - TERMINATED - The role propagation process was externally terminated.

[API Spec](https://developer.sailpoint.com/docs/api/get-ongoing-role-propagation-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetOngoingRolePropagationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Rolepropagationongoingresponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { RolePropagationService } from '@sailpoint/angular-sdk/role_propagation';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(RolePropagationService);

  getOngoingRolePropagationV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getOngoingRolePropagationV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-role-propagation-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get Role Change Propagation Configuration
This endpoint fetches the Role Change Propagation Configuration for the tenant

[API Spec](https://developer.sailpoint.com/docs/api/get-role-propagation-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetRolePropagationConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Rolepropagationconfigresponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { RolePropagationService } from '@sailpoint/angular-sdk/role_propagation';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(RolePropagationService);

  getRolePropagationConfigV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getRolePropagationConfigV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-role-propagation-status-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get status of Role-Propagation process
This endpoint returns the information of the specified role change propagation process. The execution stage of the role propagation process can be one of the following:
    - PENDING - The role propagation process is queued to be executed.
    - DATA_AGGREGATION_RUNNING - The role propagation process is currently aggregating data.
    - LAUNCH_PROVISIONING - The role propagation process has started to provision the access to the identities.
    - SUCCEEDED - The role propagation process has successfully completed.
    - FAILED - The role propagation process has failed.
    - TERMINATED - The role propagation process was externally terminated.

[API Spec](https://developer.sailpoint.com/docs/api/get-role-propagation-status-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetRolePropagationStatusV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**rolePropagationId** | `string` | The ID of the role propagation process to retrieve the status for. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Rolepropagationstatusresponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { RolePropagationService } from '@sailpoint/angular-sdk/role_propagation';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(RolePropagationService);

  getRolePropagationStatusV1(): void {
    const rolePropagationId: string = ; // The ID of the role propagation process to retrieve the status for.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getRolePropagationStatusV1({ rolePropagationId: rolePropagationId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## set-role-propagation-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update Role Change Propagation Configuration
This endpoint enables or disables the Role Change Propagation Process for the tenant

[API Spec](https://developer.sailpoint.com/docs/api/set-role-propagation-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SetRolePropagationConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**rolepropagationconfiginput** | `Rolepropagationconfiginput` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Rolepropagationconfigresponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { RolePropagationService } from '@sailpoint/angular-sdk/role_propagation';
import { Rolepropagationconfiginput } from '@sailpoint/angular-sdk/role_propagation';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(RolePropagationService);

  setRolePropagationConfigV1(): void {
    const rolepropagationconfiginput: Rolepropagationconfiginput = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.setRolePropagationConfigV1({ rolepropagationconfiginput: rolepropagationconfiginput }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## start-role-propagation-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Initiate Role Propagation process
This endpoint initiates a role change propagation process for a tenant asynchronously.  If all preconditions are met, the request is accepted and a rolePropagationId is returned which  can be used to view the status.
API throws 4xx if any of the following conditions are met - Role propagation feature is disabled  - There is an ongoing role propagation for the tenant - Role refresh needs to be kicked off as part of the role propagation (skipRoleRefresh=false) and there is an ongoing refresh for the tenant

[API Spec](https://developer.sailpoint.com/docs/api/start-role-propagation-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `StartRolePropagationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**skipRoleRefresh** | `boolean` | When true, the role refresh is not performed. Keeping it false is recommended. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Rolepropagationresponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { RolePropagationService } from '@sailpoint/angular-sdk/role_propagation';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(RolePropagationService);

  startRolePropagationV1(): void {
    const skipRoleRefresh: boolean = ; // When true, the role refresh is not performed. Keeping it false is recommended. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.startRolePropagationV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

