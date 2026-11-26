# MachineIdentityLifecycleActions

# MachineIdentityLifecycleActionsApi
  Use this API to implement machine identity lifecycle action functionality.
With this functionality in place, administrators and machine identity owners can activate or deactivate machine identities, track the approval and provisioning status of each request, and cancel requests before provisioning starts.

A lifecycle action is a request to change whether a machine identity is active.
For example, an administrator may deactivate an agent while a security review is in progress, and then activate it again once the review is complete.

Lifecycle actions are currently supported only for machine identities of type Agent.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-machine-identity-lifecycle-action-v1**](#cancel-machine-identity-lifecycle-action-v1) | **POST** `/machine-identities/v1/lifecycle-actions/{requestId}/cancel` | Cancel machine identity lifecycle action
[**get-machine-identity-lifecycle-action-v1**](#get-machine-identity-lifecycle-action-v1) | **GET** `/machine-identities/v1/lifecycle-actions/{requestId}` | Get machine identity lifecycle action
[**list-machine-identity-lifecycle-actions-v1**](#list-machine-identity-lifecycle-actions-v1) | **GET** `/machine-identities/v1/lifecycle-actions` | List machine identity lifecycle actions
[**submit-machine-identity-lifecycle-action-v1**](#submit-machine-identity-lifecycle-action-v1) | **POST** `/machine-identities/v1/{id}/lifecycle-actions` | Submit machine identity lifecycle action


## cancel-machine-identity-lifecycle-action-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Cancel machine identity lifecycle action
Cancels a lifecycle action request that hasn't started provisioning yet. When the cancel is
accepted, the request moves to `CANCELING` status.

A request can't be canceled once provisioning has started, after it has finished, or while a cancel
is already in progress.

The request body is optional. Use it to add a comment explaining why the request was canceled.

You can always cancel requests that you submitted. To cancel a request that someone else submitted,
you need the `idn:machine-identity:lifecycle-action` right **and** admin or owner access to the
machine identity. Admin or owner access means you're an org admin, a source admin, a source sub-admin
for the machine identity's source, or the machine identity's owner.

If the cancel can't be completed, the API returns an error and the request stays in `CANCELING`
status.


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
Get machine identity lifecycle action
Returns a single lifecycle action request, including its current status, approval details, and
provisioning progress. Use it to follow a request after you submit or cancel it.

You can always view requests that you submitted. To view a request that someone else submitted, you
need the `idn:machine-identity:lifecycle-action` right **and** admin or owner access to the machine
identity. Admin or owner access means you're an org admin, a source admin, a source sub-admin for the
machine identity's source, or the machine identity's owner.


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
List machine identity lifecycle actions
Returns the lifecycle action requests that you submitted. Requests that other users submitted
aren't included, even if you're an admin. If the call isn't made on behalf of an identity, the list
is empty.

When `limit` is omitted, up to 50 results are returned.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-lifecycle-actions-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **resourceType**: *eq, in*  **operationType**: *eq, in*  **status**: *eq, in*  **completed**: *eq*  **targetId**: *eq*  **targetName**: *eq, sw*  **sourceId**: *eq*  **created**: *gt, ge, lt, le*  The &#x60;resourceType&#x60; filter matches the &#x60;targetType&#x60; field in the response. | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, status**  Default sort is **-created** (newest first). | [optional] [default to &#39;-created&#39;]
**limit** | `number` | Max number of results to return. When omitted, the default limit is 50. The maximum allowed limit is 250.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 50]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to false]
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
const filters: string = status in ("RECEIVED","COMPLETED"); // Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **resourceType**: *eq, in*  **operationType**: *eq, in*  **status**: *eq, in*  **completed**: *eq*  **targetId**: *eq*  **targetName**: *eq, sw*  **sourceId**: *eq*  **created**: *gt, ge, lt, le*  The &#x60;resourceType&#x60; filter matches the &#x60;targetType&#x60; field in the response. (optional)
const sorters: string = -created; // Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, status**  Default sort is **-created** (newest first). (optional)
const limit: number = 50; // Max number of results to return. When omitted, the default limit is 50. The maximum allowed limit is 250.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
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
Submits a request to activate or deactivate a machine identity. Supported actions are `ACTIVATE`
and `DEACTIVATE`.

**Note:** Lifecycle actions are currently supported only for machine identities of type **Agent**.

The response includes a `requestId`. Use it to
[get the request](https://developer.sailpoint.com/docs/api/get-machine-identity-lifecycle-action-v-1) or
[cancel it](https://developer.sailpoint.com/docs/api/cancel-machine-identity-lifecycle-action-v-1).
To see all the requests you've submitted, use
[list machine identity lifecycle actions](https://developer.sailpoint.com/docs/api/list-machine-identity-lifecycle-actions-v-1).

Only one lifecycle action can be in progress for a machine identity at a time. If another action is
already in progress for the machine identity, the request is rejected.

To submit a lifecycle action, you need the `idn:machine-identity:lifecycle-action` right, or admin or
owner access to the machine identity. Admin or owner access means you're an org admin, a source admin,
a source sub-admin for the machine identity's source, or the machine identity's owner.


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

