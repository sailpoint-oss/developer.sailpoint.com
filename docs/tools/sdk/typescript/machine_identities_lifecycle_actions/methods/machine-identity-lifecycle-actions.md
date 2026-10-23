# MachineIdentityLifecycleActions

# MachineIdentityLifecycleActionsApi
  Experimental APIs for machine identity lifecycle requests (&#x60;ACTIVATE&#x60;, &#x60;DEACTIVATE&#x60;), including
approval and provisioning status. Pass the &#x60;X-SailPoint-Experimental&#x60; header on every request.

Read and cancel by &#x60;requestId&#x60; return **403** for authorization denials
(&#x60;FORBIDDEN.lifecycle-request-access-denied&#x60;) and non-&#x60;AI_AGENT&#x60; rows
(&#x60;FORBIDDEN.unsupported-type&#x60;). Unknown ids and target-type mismatches return **404**
(&#x60;NOT_FOUND.detailed&#x60;).
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**requestId** | `string` | Lifecycle request identifier. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**cancelLifecycleActionRequest** | `CancelLifecycleActionRequest` |  | [optional]

### Return type

`CancelLifecycleActionResponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MachineIdentityLifecycleActionsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { CancelLifecycleActionRequest } from '@sailpoint/api-client/dist/machine_identities_lifecycle_actions/api';

const configuration = new Configuration();
const apiInstance = new MachineIdentityLifecycleActionsApi(configuration);
const requestId: string = a1b2c3d4-e5f6-7890-abcd-ef1234567890; // Lifecycle request identifier.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const cancelLifecycleActionRequest: CancelLifecycleActionRequest = {
  "comment" : "Cancelling - will resubmit after maintenance window"
}; //  (optional)
const result = await apiInstance.cancelMachineIdentityLifecycleActionV1({ requestId: requestId });
console.log(result);
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**requestId** | `string` | Lifecycle request identifier. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`LifecycleActionRequest`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineIdentityLifecycleActionsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MachineIdentityLifecycleActionsApi(configuration);
const requestId: string = a1b2c3d4-e5f6-7890-abcd-ef1234567890; // Lifecycle request identifier.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getMachineIdentityLifecycleActionV1({ requestId: requestId });
console.log(result);
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **resourceType**: *eq, in*  **operationType**: *eq, in*  **status**: *eq, in*  **completed**: *eq*  **targetId**: *eq*  **targetName**: *eq, sw*  **sourceId**: *eq*  **created**: *gt, ge, lt, le* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, status**  Default sort is **-created** (newest first). | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. When omitted, the default limit is 50. The maximum allowed limit is 250.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 50]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<LifecycleActionRequest>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineIdentityLifecycleActionsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MachineIdentityLifecycleActionsApi(configuration);
const filters: string = status in ("RECEIVED","COMPLETED"); // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **resourceType**: *eq, in*  **operationType**: *eq, in*  **status**: *eq, in*  **completed**: *eq*  **targetId**: *eq*  **targetName**: *eq, sw*  **sourceId**: *eq*  **created**: *gt, ge, lt, le* (optional)
const sorters: string = -created; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, status**  Default sort is **-created** (newest first). (optional)
const limit: number = 50; // Max number of results to return. When omitted, the default limit is 50. The maximum allowed limit is 250.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.listMachineIdentityLifecycleActionsV1({  });
console.log(result);
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine identity ID. |  [default to undefined]
**lifecycleActionSubmitRequest** | `LifecycleActionSubmitRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`LifecycleActionSubmitResponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MachineIdentityLifecycleActionsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { LifecycleActionSubmitRequest } from '@sailpoint/api-client/dist/machine_identities_lifecycle_actions/api';

const configuration = new Configuration();
const apiInstance = new MachineIdentityLifecycleActionsApi(configuration);
const id: string = 1c9c8e1f-2f5f-4f77-9f7e-5d37e4fb3ef0; // Machine identity ID.
const lifecycleActionSubmitRequest: LifecycleActionSubmitRequest = {
  "comments" : [ {
    "comment" : "Suspending agent until security review completes"
  }, {
    "comment" : "Suspending agent until security review completes"
  }, {
    "comment" : "Suspending agent until security review completes"
  }, {
    "comment" : "Suspending agent until security review completes"
  }, {
    "comment" : "Suspending agent until security review completes"
  } ],
  "action" : "DEACTIVATE"
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.submitMachineIdentityLifecycleActionV1({ id: id, lifecycleActionSubmitRequest: lifecycleActionSubmitRequest });
console.log(result);
```

[[Back to top]](#)

