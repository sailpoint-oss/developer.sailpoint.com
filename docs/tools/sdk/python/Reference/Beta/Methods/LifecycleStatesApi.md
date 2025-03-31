---
id: beta-lifecycle-states
title: Lifecycle_States
pagination_label: Lifecycle_States
sidebar_label: Lifecycle_States
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Lifecycle_States', 'BetaLifecycle_States'] 
slug: /tools/sdk/python/beta/methods/lifecycle-states
tags: ['SDK', 'Software Development Kit', 'Lifecycle_States', 'BetaLifecycle_States']
---

# sailpoint.beta.LifecycleStatesApi
  Use this API to implement and customize lifecycle state functionality.
With this functionality in place, administrators can view and configure custom lifecycle states for use across their organizations, which is key to controlling which users have access, when they have access, and the access they have.

A lifecycle state describes a user&#39;s status in a company. For example, two lifecycle states come by default with Identity Security Cloud: &#39;Active&#39; and &#39;Inactive.&#39;
When an active employee takes an extended leave of absence from a company, his or her lifecycle state may change to &#39;Inactive,&#39; for security purposes.
The inactive employee would lose access to all the applications, sources, and sensitive data during the leave of absence, but when the employee returns and becomes active again, all that access would be restored.
This saves administrators the time that would otherwise be spent provisioning the employee&#39;s access to each individual tool, reviewing the employee&#39;s certification history, etc.

Administrators must define the criteria for being in each lifecycle state, and they must define how Identity Security Cloud manages users&#39; access to apps and sources for each lifecycle state.

In Identity Security Cloud, administrators can manage lifecycle states by going to Admin &gt; Identities &gt; Identity Profile, selecting the identity profile whose lifecycle states they want to manage, selecting the &#39;Provisioning&#39; tab, and using the left panel to select the lifecycle state they want to modify.

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
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-lifecycle-states**](#get-lifecycle-states) | **GET** `/identity-profiles/{identity-profile-id}/lifecycle-states/{lifecycle-state-id}` | Get Lifecycle State
[**update-lifecycle-states**](#update-lifecycle-states) | **PATCH** `/identity-profiles/{identity-profile-id}/lifecycle-states/{lifecycle-state-id}` | Update Lifecycle State


## get-lifecycle-states
Get Lifecycle State
Use this endpoint to get a lifecycle state by its ID and its associated identity profile ID. 

A token with ORG_ADMIN or API authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-lifecycle-states)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_profile_id | **str** | True  | Identity Profile ID.
Path   | lifecycle_state_id | **str** | True  | Lifecycle State ID.

### Return type
[**LifecycleState**](../models/lifecycle-state)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Requested lifecycle state. | LifecycleState |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.lifecycle_states_api import LifecycleStatesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.lifecycle_state import LifecycleState
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_profile_id = '2b838de9-db9b-abcf-e646-d4f274ad4238' # str | Identity Profile ID. # str | Identity Profile ID.
    lifecycle_state_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Lifecycle State ID. # str | Lifecycle State ID.

    try:
        # Get Lifecycle State
        
        results = LifecycleStatesApi(api_client).get_lifecycle_states(identity_profile_id=identity_profile_id, lifecycle_state_id=lifecycle_state_id)
        # Below is a request that includes all optional parameters
        # results = LifecycleStatesApi(api_client).get_lifecycle_states(identity_profile_id, lifecycle_state_id)
        print("The response of LifecycleStatesApi->get_lifecycle_states:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling LifecycleStatesApi->get_lifecycle_states: %s\n" % e)
```



[[Back to top]](#) 

## update-lifecycle-states
Update Lifecycle State
Use this endpoint to update individual lifecycle state fields, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

A token with ORG_ADMIN or API authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/update-lifecycle-states)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_profile_id | **str** | True  | Identity Profile ID.
Path   | lifecycle_state_id | **str** | True  | Lifecycle State ID.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of lifecycle state update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields can be updated: * enabled * description * accountActions * accessProfileIds * emailNotificationOption 

### Return type
[**LifecycleState**](../models/lifecycle-state)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated lifecycle state. | LifecycleState |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.lifecycle_states_api import LifecycleStatesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.json_patch_operation import JsonPatchOperation
from sailpoint.beta.models.lifecycle_state import LifecycleState
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_profile_id = '2b838de9-db9b-abcf-e646-d4f274ad4238' # str | Identity Profile ID. # str | Identity Profile ID.
    lifecycle_state_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Lifecycle State ID. # str | Lifecycle State ID.
    json_patch_operation = '''[{op=replace, path=/description, value=Updated description!}, {op=replace, path=/accessProfileIds, value=[2c918087742bab150174407a80f3125e, 2c918087742bab150174407a80f3124f]}, {op=replace, path=/accountActions, value=[{action=ENABLE, sourceIds=[2c9180846a2f82fb016a481c1b1560c5, 2c9180846a2f82fb016a481c1b1560cc]}, {action=DISABLE, sourceIds=[2c91808869a0c9980169a207258513fb]}]}, {op=replace, path=/emailNotificationOption, value={notifyManagers=true, notifyAllAdmins=false, notifySpecificUsers=false, emailAddressList=[]}}]''' # List[JsonPatchOperation] | A list of lifecycle state update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields can be updated: * enabled * description * accountActions * accessProfileIds * emailNotificationOption 

    try:
        # Update Lifecycle State
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = LifecycleStatesApi(api_client).update_lifecycle_states(identity_profile_id=identity_profile_id, lifecycle_state_id=lifecycle_state_id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = LifecycleStatesApi(api_client).update_lifecycle_states(identity_profile_id, lifecycle_state_id, new_json_patch_operation)
        print("The response of LifecycleStatesApi->update_lifecycle_states:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling LifecycleStatesApi->update_lifecycle_states: %s\n" % e)
```



[[Back to top]](#) 



