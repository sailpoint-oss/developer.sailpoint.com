# LifecycleStates

# LifecycleStatesApi
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-lifecycle-state-v1**](#create-lifecycle-state-v1) | **POST** `/identity-profiles/v1/{identity-profile-id}/lifecycle-states` | Create lifecycle state
[**delete-lifecycle-state-v1**](#delete-lifecycle-state-v1) | **DELETE** `/identity-profiles/v1/{identity-profile-id}/lifecycle-states/{lifecycle-state-id}` | Delete lifecycle state
[**get-lifecycle-state-v1**](#get-lifecycle-state-v1) | **GET** `/identity-profiles/v1/{identity-profile-id}/lifecycle-states/{lifecycle-state-id}` | Get lifecycle state
[**get-lifecycle-states-v1**](#get-lifecycle-states-v1) | **GET** `/identity-profiles/v1/{identity-profile-id}/lifecycle-states` | Lists lifecyclestates
[**set-lifecycle-state-v1**](#set-lifecycle-state-v1) | **POST** `/identities/v1/{identity-id}/set-lifecycle-state` | Set lifecycle state
[**update-lifecycle-states-v1**](#update-lifecycle-states-v1) | **PATCH** `/identity-profiles/v1/{identity-profile-id}/lifecycle-states/{lifecycle-state-id}` | Update lifecycle state


## create-lifecycle-state-v1
Create lifecycle state
Use this endpoint to create a lifecycle state.

[API Spec](https://developer.sailpoint.com/docs/api/create-lifecycle-state-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityProfileId** | `string` | Identity profile ID. |  [default to undefined]
**lifecycleState** | `LifecycleState` | Lifecycle state to be created. | 

### Return type

`LifecycleState`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { LifecycleStatesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { LifecycleState } from '@sailpoint/api-client/dist/lifecycle_states/api';

const configuration = new Configuration();
const apiInstance = new LifecycleStatesApi(configuration);
const identityProfileId: string = 2b838de9-db9b-abcf-e646-d4f274ad4238; // Identity profile ID.
const lifecycleState: LifecycleState = {
  "accessActionConfiguration" : {
    "removeAllAccessEnabled" : true
  },
  "accessProfileIds" : [ "2c918084660f45d6016617daa9210584", "2c918084660f45d6016617daa9210500" ],
  "emailNotificationOption" : {
    "notifyManagers" : true,
    "notifySpecificUsers" : true,
    "emailAddressList" : [ "test@test.com", "test2@test.com" ],
    "notifyAllAdmins" : true
  },
  "created" : "2015-05-28T14:07:17Z",
  "description" : "Lifecycle description",
  "identityCount" : 42,
  "priority" : 10,
  "technicalName" : "Technical Name",
  "identityState" : "INACTIVE_LONG_TERM",
  "enabled" : true,
  "name" : "aName",
  "modified" : "2015-05-28T14:07:17Z",
  "accountActions" : [ {
    "allSources" : true,
    "action" : "ENABLE",
    "excludeSourceIds" : [ "3b551ccf5566478b9b77f37de25303aa" ],
    "sourceIds" : [ "2c918084660f45d6016617daa9210584", "2c918084660f45d6016617daa9210500" ]
  }, {
    "allSources" : true,
    "action" : "ENABLE",
    "excludeSourceIds" : [ "3b551ccf5566478b9b77f37de25303aa" ],
    "sourceIds" : [ "2c918084660f45d6016617daa9210584", "2c918084660f45d6016617daa9210500" ]
  } ],
  "id" : "id12345"
}; // Lifecycle state to be created.
const result = await apiInstance.createLifecycleStateV1({ identityProfileId: identityProfileId, lifecycleState: lifecycleState });
console.log(result);
```

[[Back to top]](#)

## delete-lifecycle-state-v1
Delete lifecycle state
Use this endpoint to delete the lifecycle state by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/delete-lifecycle-state-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityProfileId** | `string` | Identity profile ID. |  [default to undefined]
**lifecycleStateId** | `string` | Lifecycle state ID. |  [default to undefined]

### Return type

`LifecyclestateDeleted`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { LifecycleStatesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new LifecycleStatesApi(configuration);
const identityProfileId: string = 2b838de9-db9b-abcf-e646-d4f274ad4238; // Identity profile ID.
const lifecycleStateId: string = ef38f94347e94562b5bb8424a56397d8; // Lifecycle state ID.
const result = await apiInstance.deleteLifecycleStateV1({ identityProfileId: identityProfileId, lifecycleStateId: lifecycleStateId });
console.log(result);
```

[[Back to top]](#)

## get-lifecycle-state-v1
Get lifecycle state
Use this endpoint to get a lifecycle state by its ID and its associated identity profile ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-lifecycle-state-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityProfileId** | `string` | Identity profile ID. |  [default to undefined]
**lifecycleStateId** | `string` | Lifecycle state ID. |  [default to undefined]

### Return type

`LifecycleState`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { LifecycleStatesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new LifecycleStatesApi(configuration);
const identityProfileId: string = 2b838de9-db9b-abcf-e646-d4f274ad4238; // Identity profile ID.
const lifecycleStateId: string = ef38f94347e94562b5bb8424a56397d8; // Lifecycle state ID.
const result = await apiInstance.getLifecycleStateV1({ identityProfileId: identityProfileId, lifecycleStateId: lifecycleStateId });
console.log(result);
```

[[Back to top]](#)

## get-lifecycle-states-v1
Lists lifecyclestates
Use this endpoint to list all lifecycle states by their associated identity profiles. 

[API Spec](https://developer.sailpoint.com/docs/api/get-lifecycle-states-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityProfileId** | `string` | Identity profile ID. |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, priority, created, modified** | [optional] [default to undefined]

### Return type

`Array<LifecycleState>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { LifecycleStatesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new LifecycleStatesApi(configuration);
const identityProfileId: string = 2b838de9-db9b-abcf-e646-d4f274ad4238; // Identity profile ID.
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const sorters: string = created,modified; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, priority, created, modified** (optional)
const result = await apiInstance.getLifecycleStatesV1({ identityProfileId: identityProfileId });
console.log(result);
```

[[Back to top]](#)

## set-lifecycle-state-v1
Set lifecycle state
Use this API to set/update an identity's lifecycle state to the one provided and update the corresponding identity profile.

[API Spec](https://developer.sailpoint.com/docs/api/set-lifecycle-state-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityId** | `string` | ID of the identity to update. |  [default to undefined]
**setLifecycleStateV1Request** | `SetLifecycleStateV1Request` |  | 

### Return type

`SetLifecycleStateV1200Response`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { LifecycleStatesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { SetLifecycleStateV1Request } from '@sailpoint/api-client/dist/lifecycle_states/api';

const configuration = new Configuration();
const apiInstance = new LifecycleStatesApi(configuration);
const identityId: string = 2c9180857893f1290178944561990364; // ID of the identity to update.
const setLifecycleStateV1Request: SetLifecycleStateV1Request = ; // 
const result = await apiInstance.setLifecycleStateV1({ identityId: identityId, setLifecycleStateV1Request: setLifecycleStateV1Request });
console.log(result);
```

[[Back to top]](#)

## update-lifecycle-states-v1
Update lifecycle state
Use this endpoint to update individual lifecycle state fields, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

[API Spec](https://developer.sailpoint.com/docs/api/update-lifecycle-states-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityProfileId** | `string` | Identity profile ID. |  [default to undefined]
**lifecycleStateId** | `string` | Lifecycle state ID. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A list of lifecycle state update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields can be updated: * enabled * description * accountActions * accessProfileIds * emailNotificationOption * accessActionConfiguration * priority  | 

### Return type

`LifecycleState`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { LifecycleStatesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatchOperation } from '@sailpoint/api-client/dist/lifecycle_states/api';

const configuration = new Configuration();
const apiInstance = new LifecycleStatesApi(configuration);
const identityProfileId: string = 2b838de9-db9b-abcf-e646-d4f274ad4238; // Identity profile ID.
const lifecycleStateId: string = ef38f94347e94562b5bb8424a56397d8; // Lifecycle state ID.
const jsonPatchOperation: Array<JsonPatchOperation> = {
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}; // A list of lifecycle state update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields can be updated: * enabled * description * accountActions * accessProfileIds * emailNotificationOption * accessActionConfiguration * priority 
const result = await apiInstance.updateLifecycleStatesV1({ identityProfileId: identityProfileId, lifecycleStateId: lifecycleStateId, jsonPatchOperation: jsonPatchOperation });
console.log(result);
```

[[Back to top]](#)

