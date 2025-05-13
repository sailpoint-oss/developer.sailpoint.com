---
id: beta-lifecycle-states
title: LifecycleStates
pagination_label: LifecycleStates
sidebar_label: LifecycleStates
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LifecycleStates', 'BetaLifecycleStates'] 
slug: /tools/sdk/go/beta/methods/lifecycle-states
tags: ['SDK', 'Software Development Kit', 'LifecycleStates', 'BetaLifecycleStates']
---

# LifecycleStatesAPI
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
[**get-lifecycle-states**](#get-lifecycle-states) | **Get** `/identity-profiles/{identity-profile-id}/lifecycle-states/{lifecycle-state-id}` | Get Lifecycle State
[**update-lifecycle-states**](#update-lifecycle-states) | **Patch** `/identity-profiles/{identity-profile-id}/lifecycle-states/{lifecycle-state-id}` | Update Lifecycle State


## get-lifecycle-states
Get Lifecycle State
Use this endpoint to get a lifecycle state by its ID and its associated identity profile ID. 

A token with ORG_ADMIN or API authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-lifecycle-states)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityProfileId** | **string** | Identity Profile ID. | 
**lifecycleStateId** | **string** | Lifecycle State ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetLifecycleStatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**LifecycleState**](../models/lifecycle-state)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    identityProfileId := 2b838de9-db9b-abcf-e646-d4f274ad4238 # string | Identity Profile ID. # string | Identity Profile ID.
    lifecycleStateId := ef38f94347e94562b5bb8424a56397d8 # string | Lifecycle State ID. # string | Lifecycle State ID.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.LifecycleStatesAPI.GetLifecycleStates(context.Background(), identityProfileId, lifecycleStateId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LifecycleStatesAPI.GetLifecycleStates``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetLifecycleStates`: LifecycleState
	fmt.Fprintf(os.Stdout, "Response from `LifecycleStatesAPI.GetLifecycleStates`: %v\n", resp)
}
```

[[Back to top]](#)

## update-lifecycle-states
Update Lifecycle State
Use this endpoint to update individual lifecycle state fields, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

A token with ORG_ADMIN or API authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/update-lifecycle-states)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityProfileId** | **string** | Identity Profile ID. | 
**lifecycleStateId** | **string** | Lifecycle State ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateLifecycleStatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A list of lifecycle state update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields can be updated: * enabled * description * accountActions * accessProfileIds * emailNotificationOption  | 

### Return type

[**LifecycleState**](../models/lifecycle-state)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    identityProfileId := 2b838de9-db9b-abcf-e646-d4f274ad4238 # string | Identity Profile ID. # string | Identity Profile ID.
    lifecycleStateId := ef38f94347e94562b5bb8424a56397d8 # string | Lifecycle State ID. # string | Lifecycle State ID.
    jsonPatchOperation := fmt.Sprintf(`[{op=replace, path=/description, value=Updated description!}, {op=replace, path=/accessProfileIds, value=[2c918087742bab150174407a80f3125e, 2c918087742bab150174407a80f3124f]}, {op=replace, path=/accountActions, value=[{action=ENABLE, sourceIds=[2c9180846a2f82fb016a481c1b1560c5, 2c9180846a2f82fb016a481c1b1560cc]}, {action=DISABLE, sourceIds=[2c91808869a0c9980169a207258513fb]}]}, {op=replace, path=/emailNotificationOption, value={notifyManagers=true, notifyAllAdmins=false, notifySpecificUsers=false, emailAddressList=[]}}]`) # []JsonPatchOperation | A list of lifecycle state update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields can be updated: * enabled * description * accountActions * accessProfileIds * emailNotificationOption 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.LifecycleStatesAPI.UpdateLifecycleStates(context.Background(), identityProfileId, lifecycleStateId).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LifecycleStatesAPI.UpdateLifecycleStates``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateLifecycleStates`: LifecycleState
	fmt.Fprintf(os.Stdout, "Response from `LifecycleStatesAPI.UpdateLifecycleStates`: %v\n", resp)
}
```

[[Back to top]](#)

