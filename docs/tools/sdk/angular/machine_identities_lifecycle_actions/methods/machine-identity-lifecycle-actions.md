# MachineIdentityLifecycleActions

# MachineIdentityLifecycleActionsService
  Experimental APIs for machine identity lifecycle requests (&#x60;ACTIVATE&#x60;, &#x60;DEACTIVATE&#x60;), including
approval and provisioning status. Pass the &#x60;X-SailPoint-Experimental&#x60; header on every request.

Read and cancel by &#x60;requestId&#x60; return **403** for authorization denials
(&#x60;FORBIDDEN.lifecycle-request-access-denied&#x60;) and non-&#x60;AI_AGENT&#x60; rows
(&#x60;FORBIDDEN.unsupported-type&#x60;). Unknown ids and target-type mismatches return **404**
(&#x60;NOT_FOUND.detailed&#x60;).
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-machine-identity-lifecycle-action-v1**](#cancel-machine-identity-lifecycle-action-v1) | **POST** `/machine-identities/v1/lifecycle-actions/{requestId}/cancel` | Cancel lifecycle action
[**get-machine-identity-lifecycle-action-v1**](#get-machine-identity-lifecycle-action-v1) | **GET** `/machine-identities/v1/lifecycle-actions/{requestId}` | Get lifecycle action by requestId
[**list-machine-identity-lifecycle-actions-v1**](#list-machine-identity-lifecycle-actions-v1) | **GET** `/machine-identities/v1/lifecycle-actions` | List lifecycle actions
[**submit-machine-identity-lifecycle-action-v1**](#submit-machine-identity-lifecycle-action-v1) | **POST** `/machine-identities/v1/{id}/lifecycle-actions` | Submit machine identity lifecycle action


## cancel-machine-identity-lifecycle-action-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Cancel lifecycle action
Attempts to cancel a lifecycle request before provisioning starts.

The path `requestId` is authoritative for lookup and authorization. The request body is
optional and may carry cancel metadata such as `comment`. Any `requestId` value in the body is
ignored.

Workflow cancel signaling is attempted before the request is persisted as `CANCELING`. If
signaling fails, the service returns **503** (`DOWNSTREAM_SERVICE_UNAVAILABLE`, cause
`workflow-signal-failed`) and the lifecycle request status is unchanged.

Invalid cancel states are returned as **400** (`INVALID_REQUEST_IN_CURRENT_STATE` variants).

Cancel authorization matches https://developer.sailpoint.com/docs/api/get-machine-identity-lifecycle-action-v-1:
the original submitter is always allowed; otherwise callers must have the
`idn:machine-identity-lifecycle-action:manage` scope **and** target role-context access.

**403 Forbidden**

- `FORBIDDEN.lifecycle-request-access-denied` - caller is not the submitter and lacks both the
  `idn:machine-identity-lifecycle-action:manage` scope and target role-context.
- `FORBIDDEN.unsupported-type` - the persisted lifecycle row is not scoped to `AI_AGENT`.

**404 Not Found**

- `NOT_FOUND.detailed` - unknown `requestId`, or persisted `targetType`/target-identity subtype
  mismatch.


[API Spec](https://developer.sailpoint.com/docs/api/cancel-machine-identity-lifecycle-action-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CancelMachineIdentityLifecycleActionV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**requestId** | `string` | Lifecycle request identifier. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**cancelLifecycleActionRequest** | `CancelLifecycleActionRequest` |  | [optional]

### Return type

`Observable<CancelLifecycleActionResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentityLifecycleActionsService } from '@sailpoint/angular-sdk/machine_identities_lifecycle_actions';
import { CancelLifecycleActionRequest } from '@sailpoint/angular-sdk/machine_identities_lifecycle_actions';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentityLifecycleActionsService);

  cancelMachineIdentityLifecycleActionV1(): void {
    const requestId: string = ; // Lifecycle request identifier.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const cancelLifecycleActionRequest: CancelLifecycleActionRequest = ; //  (optional)
    this.api.cancelMachineIdentityLifecycleActionV1({ requestId: requestId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-machine-identity-lifecycle-action-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get lifecycle action by requestId
Returns one lifecycle request snapshot by `requestId`. Used for request-level inspection,
including cancel acceptance and subsequent status changes.

The original requester is always allowed to read their request. Otherwise, callers must have
the `idn:machine-identity-lifecycle-action:manage` scope **and** role-context access to the target
machine identity (organization admin, source admin, scoped source sub-admin, or effective owner).

**403 Forbidden**

- `FORBIDDEN.lifecycle-request-access-denied` - caller is not the submitter and lacks both the
  `idn:machine-identity-lifecycle-action:manage` scope and target role-context (response includes `requestId` as a parameter).
- `FORBIDDEN.unsupported-type` - the persisted lifecycle row is not scoped to `AI_AGENT`
  (`targetType` on read-by-request-id paths).

**404 Not Found**

- `NOT_FOUND.detailed` - unknown `requestId`, or persisted `targetType` does not match the
  target machine identity's subtype-to-resource-type mapping.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-lifecycle-action-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMachineIdentityLifecycleActionV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**requestId** | `string` | Lifecycle request identifier. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<LifecycleActionRequest>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentityLifecycleActionsService } from '@sailpoint/angular-sdk/machine_identities_lifecycle_actions';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentityLifecycleActionsService);

  getMachineIdentityLifecycleActionV1(): void {
    const requestId: string = ; // Lifecycle request identifier.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getMachineIdentityLifecycleActionV1({ requestId: requestId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-machine-identity-lifecycle-actions-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List lifecycle actions
Lists lifecycle requests visible to the requester identity in the current request context.

Results are automatically scoped to the calling identity. If requester identity context is
missing, an empty list is returned.

When `limit` is omitted, this endpoint applies a default limit of 50.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-lifecycle-actions-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListMachineIdentityLifecycleActionsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **resourceType**: *eq, in*  **operationType**: *eq, in*  **status**: *eq, in*  **completed**: *eq*  **targetId**: *eq*  **targetName**: *eq, sw*  **sourceId**: *eq*  **created**: *gt, ge, lt, le* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, status**  Default sort is **-created** (newest first). | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. When omitted, the default limit is 50. The maximum allowed limit is 250.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 50]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<LifecycleActionRequest>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentityLifecycleActionsService } from '@sailpoint/angular-sdk/machine_identities_lifecycle_actions';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentityLifecycleActionsService);

  listMachineIdentityLifecycleActionsV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **resourceType**: *eq, in*  **operationType**: *eq, in*  **status**: *eq, in*  **completed**: *eq*  **targetId**: *eq*  **targetName**: *eq, sw*  **sourceId**: *eq*  **created**: *gt, ge, lt, le* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, status**  Default sort is **-created** (newest first). (optional)
    const limit: number = ; // Max number of results to return. When omitted, the default limit is 50. The maximum allowed limit is 250.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listMachineIdentityLifecycleActionsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## submit-machine-identity-lifecycle-action-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Submit machine identity lifecycle action
Creates a lifecycle request for the target machine identity and returns the created lifecycle
snapshot.

The response includes the generated `requestId`, which is used by
https://developer.sailpoint.com/docs/api/list-machine-identity-lifecycle-actions-v-1,
https://developer.sailpoint.com/docs/api/get-machine-identity-lifecycle-action-v-1, and
https://developer.sailpoint.com/docs/api/cancel-machine-identity-lifecycle-action-v-1

Authorization is enforced in the service layer. Callers must have the
`idn:machine-identity-lifecycle-action:manage` scope or role-context access to the target machine
identity (organization admin, source admin, scoped source sub-admin, or effective owner).

Supported actions are `DEACTIVATE`, `ACTIVATE`.


[API Spec](https://developer.sailpoint.com/docs/api/submit-machine-identity-lifecycle-action-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SubmitMachineIdentityLifecycleActionV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine identity ID. |  [default to undefined]
**lifecycleActionSubmitRequest** | `LifecycleActionSubmitRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<LifecycleActionSubmitResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentityLifecycleActionsService } from '@sailpoint/angular-sdk/machine_identities_lifecycle_actions';
import { LifecycleActionSubmitRequest } from '@sailpoint/angular-sdk/machine_identities_lifecycle_actions';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentityLifecycleActionsService);

  submitMachineIdentityLifecycleActionV1(): void {
    const id: string = ; // Machine identity ID.
    const lifecycleActionSubmitRequest: LifecycleActionSubmitRequest = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.submitMachineIdentityLifecycleActionV1({ id: id, lifecycleActionSubmitRequest: lifecycleActionSubmitRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

