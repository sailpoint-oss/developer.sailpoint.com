# LifecycleStates

# LifecycleStatesService
  Use this API to implement and customize lifecycle state functionality.
With this functionality in place, administrators can create and configure custom lifecycle states for use across their organizations, which is key to controlling which users have access, when they have access, and the access they have.

A lifecycle state describes a user&#39;s status in a company. For example, two lifecycle states come by default with Identity Security Cloud: &#39;Active&#39; and &#39;Inactive.&#39; 
When an active employee takes an extended leave of absence from a company, his or her lifecycle state may change to &#39;Inactive,&#39; for security purposes. 
The inactive employee would lose access to all the applications, sources, and sensitive data during the leave of absence, but when the employee returns and becomes active again, all that access would be restored. 
This saves administrators the time that would otherwise be spent provisioning the employee&#39;s access to each individual tool, reviewing the employee&#39;s certification history, etc. 

Administrators can create a variety of custom lifecycle states. Refer to [Planning New Lifecycle States](https://documentation.sailpoint.com/saas/help/provisioning/lifecycle.html#planning-new-lifecycle-states) for some custom lifecycle state ideas.

Administrators must define the criteria for being in each lifecycle state, and they must define how Identity Security Cloud manages users&#39; access to apps and sources for each lifecycle state.

In Identity Security Cloud, administrators can manage lifecycle states by going to Admin &gt; Identities &gt; Identity Profile, selecting the identity profile whose lifecycle states they want to manage, selecting the &#39;Provisioning&#39; tab, and using the left panel to either select the lifecycle state they want to modify or create a new lifecycle state. 

In the &#39;Provisioning&#39; tab, administrators can make the following access changes to an identity profile&#39;s lifecycle state: 

- Enable/disable the lifecycle state for the identity profile.

- Enable/disable source accounts for the identity profile&#39;s lifecycle state.

- Add existing access profiles to grant to the identity profiles in that lifecycle state.

- Create a new access profile to grant to the identity profile in that lifecycle state.

Access profiles granted in a previous lifecycle state are automatically revoked when the identity moves to a new lifecycle state. 
To maintain access across multiple lifecycle states, administrators must grant the access profiles in each lifecycle state. 
For example, if an administrator wants users with the &#39;HR Employee&#39; identity profile to maintain their building access in both the &#39;Active&#39; and &#39;Leave of Absence&#39; lifecycle states, the administrator must grant the access profile for that building access to both lifecycle states.

During scheduled refreshes, Identity Security Cloud evaluates lifecycle states to determine whether their assigned identities have the access defined in the lifecycle states&#39; access profiles. 
If the identities are missing access, Identity Security Cloud provisions that access. 

Administrators can also use the &#39;Provisioning&#39; tab to configure email notifications for Identity Security Cloud to send whenever an identity with that identity profile has a lifecycle state change. 
Refer to [Configuring Lifecycle State Notifications](https://documentation.sailpoint.com/saas/help/provisioning/lifecycle.html#configuring-lifecycle-state-notifications) for more information on how to do so.

An identity&#39;s lifecycle state can have four different statuses: the lifecycle state&#39;s status can be &#39;Active,&#39; it can be &#39;Not Set,&#39; it can be &#39;Not Valid,&#39; or it &#39;Does Not Match Technical Name Case.&#39; 
Refer to [Moving Identities into Lifecycle States](https://documentation.sailpoint.com/saas/help/provisioning/lifecycle.html#moving-identities-into-lifecycle-states) for more information about these different lifecycle state statuses. 

Refer to [Setting Up Lifecycle States](https://documentation.sailpoint.com/saas/help/provisioning/lifecycle.html) for more information about lifecycle states.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-lifecycle-state-v1**](#create-lifecycle-state-v1) | **POST** `/identity-profiles/v1/{identityProfileId}/lifecycle-states` | Create lifecycle state
[**delete-lifecycle-state-v1**](#delete-lifecycle-state-v1) | **DELETE** `/identity-profiles/v1/{identityProfileId}/lifecycle-states/{lifecycleStateId}` | Delete lifecycle state
[**get-lifecycle-state-v1**](#get-lifecycle-state-v1) | **GET** `/identity-profiles/v1/{identityProfileId}/lifecycle-states/{lifecycleStateId}` | Get lifecycle state
[**get-lifecycle-states-v1**](#get-lifecycle-states-v1) | **GET** `/identity-profiles/v1/{identityProfileId}/lifecycle-states` | Lists lifecyclestates
[**set-lifecycle-state-v1**](#set-lifecycle-state-v1) | **POST** `/identities/v1/{identityId}/set-lifecycle-state` | Set lifecycle state
[**update-lifecycle-states-v1**](#update-lifecycle-states-v1) | **PATCH** `/identity-profiles/v1/{identityProfileId}/lifecycle-states/{lifecycleStateId}` | Update lifecycle state


## create-lifecycle-state-v1
Create lifecycle state
Use this endpoint to create a lifecycle state.

[API Spec](https://developer.sailpoint.com/docs/api/create-lifecycle-state-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateLifecycleStateV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityProfileId** | `string` | Identity profile ID. |  [default to undefined]
**lifecycleState** | `LifecycleState` | Lifecycle state to be created. | 

### Return type

`Observable<LifecycleState>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { LifecycleStatesService } from '@sailpoint/angular-sdk/lifecycle_states';
import { LifecycleState } from '@sailpoint/angular-sdk/lifecycle_states';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(LifecycleStatesService);

  createLifecycleStateV1(): void {
    const identityProfileId: string = ; // Identity profile ID.
    const lifecycleState: LifecycleState = ; // Lifecycle state to be created.
    this.api.createLifecycleStateV1({ identityProfileId: identityProfileId, lifecycleState: lifecycleState }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-lifecycle-state-v1
Delete lifecycle state
Use this endpoint to delete the lifecycle state by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/delete-lifecycle-state-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteLifecycleStateV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityProfileId** | `string` | Identity profile ID. |  [default to undefined]
**lifecycleStateId** | `string` | Lifecycle state ID. |  [default to undefined]

### Return type

`Observable<LifecyclestateDeleted>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { LifecycleStatesService } from '@sailpoint/angular-sdk/lifecycle_states';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(LifecycleStatesService);

  deleteLifecycleStateV1(): void {
    const identityProfileId: string = ; // Identity profile ID.
    const lifecycleStateId: string = ; // Lifecycle state ID.
    this.api.deleteLifecycleStateV1({ identityProfileId: identityProfileId, lifecycleStateId: lifecycleStateId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-lifecycle-state-v1
Get lifecycle state
Use this endpoint to get a lifecycle state by its ID and its associated identity profile ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-lifecycle-state-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetLifecycleStateV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityProfileId** | `string` | Identity profile ID. |  [default to undefined]
**lifecycleStateId** | `string` | Lifecycle state ID. |  [default to undefined]

### Return type

`Observable<LifecycleState>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { LifecycleStatesService } from '@sailpoint/angular-sdk/lifecycle_states';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(LifecycleStatesService);

  getLifecycleStateV1(): void {
    const identityProfileId: string = ; // Identity profile ID.
    const lifecycleStateId: string = ; // Lifecycle state ID.
    this.api.getLifecycleStateV1({ identityProfileId: identityProfileId, lifecycleStateId: lifecycleStateId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-lifecycle-states-v1
Lists lifecyclestates
Use this endpoint to list all lifecycle states by their associated identity profiles. 

[API Spec](https://developer.sailpoint.com/docs/api/get-lifecycle-states-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetLifecycleStatesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityProfileId** | `string` | Identity profile ID. |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, priority, created, modified** | [optional] [default to undefined]

### Return type

`Observable<Array<LifecycleState>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { LifecycleStatesService } from '@sailpoint/angular-sdk/lifecycle_states';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(LifecycleStatesService);

  getLifecycleStatesV1(): void {
    const identityProfileId: string = ; // Identity profile ID.
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, priority, created, modified** (optional)
    this.api.getLifecycleStatesV1({ identityProfileId: identityProfileId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## set-lifecycle-state-v1
Set lifecycle state
Use this API to set/update an identity's lifecycle state to the one provided and update the corresponding identity profile.

[API Spec](https://developer.sailpoint.com/docs/api/set-lifecycle-state-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SetLifecycleStateV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityId** | `string` | ID of the identity to update. |  [default to undefined]
**setLifecycleStateV1Request** | `SetLifecycleStateV1Request` |  | 

### Return type

`Observable<SetLifecycleStateV1200Response>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { LifecycleStatesService } from '@sailpoint/angular-sdk/lifecycle_states';
import { SetLifecycleStateV1Request } from '@sailpoint/angular-sdk/lifecycle_states';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(LifecycleStatesService);

  setLifecycleStateV1(): void {
    const identityId: string = ; // ID of the identity to update.
    const setLifecycleStateV1Request: SetLifecycleStateV1Request = ; // 
    this.api.setLifecycleStateV1({ identityId: identityId, setLifecycleStateV1Request: setLifecycleStateV1Request }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-lifecycle-states-v1
Update lifecycle state
Use this endpoint to update individual lifecycle state fields, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

[API Spec](https://developer.sailpoint.com/docs/api/update-lifecycle-states-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateLifecycleStatesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityProfileId** | `string` | Identity profile ID. |  [default to undefined]
**lifecycleStateId** | `string` | Lifecycle state ID. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A list of lifecycle state update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields can be updated: * enabled * description * accountActions * accessProfileIds * emailNotificationOption * accessActionConfiguration * priority  | 

### Return type

`Observable<LifecycleState>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { LifecycleStatesService } from '@sailpoint/angular-sdk/lifecycle_states';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/lifecycle_states';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(LifecycleStatesService);

  updateLifecycleStatesV1(): void {
    const identityProfileId: string = ; // Identity profile ID.
    const lifecycleStateId: string = ; // Lifecycle state ID.
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // A list of lifecycle state update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields can be updated: * enabled * description * accountActions * accessProfileIds * emailNotificationOption * accessActionConfiguration * priority 
    this.api.updateLifecycleStatesV1({ identityProfileId: identityProfileId, lifecycleStateId: lifecycleStateId, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

