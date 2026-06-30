---
id: v1-lifecycle-states
title: LifecycleStates
pagination_label: LifecycleStates
sidebar_label: LifecycleStates
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LifecycleStates', 'V1LifecycleStates'] 
slug: /tools/sdk/go/lifecyclestates/methods/lifecycle-states
tags: ['SDK', 'Software Development Kit', 'LifecycleStates', 'V1LifecycleStates']
---

# LifecycleStatesAPI
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
[**create-lifecycle-state-v1**](#create-lifecycle-state-v1) | **Post** `/identity-profiles/v1/{identity-profile-id}/lifecycle-states` | Create lifecycle state
[**delete-lifecycle-state-v1**](#delete-lifecycle-state-v1) | **Delete** `/identity-profiles/v1/{identity-profile-id}/lifecycle-states/{lifecycle-state-id}` | Delete lifecycle state
[**get-lifecycle-state-v1**](#get-lifecycle-state-v1) | **Get** `/identity-profiles/v1/{identity-profile-id}/lifecycle-states/{lifecycle-state-id}` | Get lifecycle state
[**get-lifecycle-states-v1**](#get-lifecycle-states-v1) | **Get** `/identity-profiles/v1/{identity-profile-id}/lifecycle-states` | Lists lifecyclestates
[**set-lifecycle-state-v1**](#set-lifecycle-state-v1) | **Post** `/identities/v1/{identity-id}/set-lifecycle-state` | Set lifecycle state
[**update-lifecycle-states-v1**](#update-lifecycle-states-v1) | **Patch** `/identity-profiles/v1/{identity-profile-id}/lifecycle-states/{lifecycle-state-id}` | Update lifecycle state


## create-lifecycle-state-v1
Create lifecycle state
Use this endpoint to create a lifecycle state.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-lifecycle-state-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityProfileId** | **string** | Identity profile ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateLifecycleStateV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **lifecyclestate** | [**Lifecyclestate**](../models/lifecyclestate) | Lifecycle state to be created. | 

### Return type

[**Lifecyclestate**](../models/lifecyclestate)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v1 "github.com/sailpoint-oss/golang-sdk/v3/lifecycle_states"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/lifecycle_states"
)

func main() {
    identityProfileId := `2b838de9-db9b-abcf-e646-d4f274ad4238` // string | Identity profile ID. # string | Identity profile ID.
    lifecyclestate := []byte(``) // Lifecyclestate | Lifecycle state to be created.

    var lifecyclestate v1.Lifecyclestate
    if err := json.Unmarshal(lifecyclestate, &lifecyclestate); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.LifecycleStatesAPI.CreateLifecycleStateV1(context.Background(), identityProfileId).Lifecyclestate(lifecyclestate).Execute()
	  //resp, r, err := apiClient.LifecycleStatesAPI.CreateLifecycleStateV1(context.Background(), identityProfileId).Lifecyclestate(lifecyclestate).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `LifecycleStatesAPI.CreateLifecycleStateV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateLifecycleStateV1`: Lifecyclestate
    fmt.Fprintf(os.Stdout, "Response from `LifecycleStatesAPI.CreateLifecycleStateV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-lifecycle-state-v1
Delete lifecycle state
Use this endpoint to delete the lifecycle state by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-lifecycle-state-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityProfileId** | **string** | Identity profile ID. | 
**lifecycleStateId** | **string** | Lifecycle state ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteLifecycleStateV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Lifecyclestatedeleted**](../models/lifecyclestatedeleted)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/lifecycle_states"
)

func main() {
    identityProfileId := `2b838de9-db9b-abcf-e646-d4f274ad4238` // string | Identity profile ID. # string | Identity profile ID.
    lifecycleStateId := `ef38f94347e94562b5bb8424a56397d8` // string | Lifecycle state ID. # string | Lifecycle state ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.LifecycleStatesAPI.DeleteLifecycleStateV1(context.Background(), identityProfileId, lifecycleStateId).Execute()
	  //resp, r, err := apiClient.LifecycleStatesAPI.DeleteLifecycleStateV1(context.Background(), identityProfileId, lifecycleStateId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `LifecycleStatesAPI.DeleteLifecycleStateV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteLifecycleStateV1`: Lifecyclestatedeleted
    fmt.Fprintf(os.Stdout, "Response from `LifecycleStatesAPI.DeleteLifecycleStateV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-lifecycle-state-v1
Get lifecycle state
Use this endpoint to get a lifecycle state by its ID and its associated identity profile ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-lifecycle-state-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityProfileId** | **string** | Identity profile ID. | 
**lifecycleStateId** | **string** | Lifecycle state ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetLifecycleStateV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Lifecyclestate**](../models/lifecyclestate)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/lifecycle_states"
)

func main() {
    identityProfileId := `2b838de9-db9b-abcf-e646-d4f274ad4238` // string | Identity profile ID. # string | Identity profile ID.
    lifecycleStateId := `ef38f94347e94562b5bb8424a56397d8` // string | Lifecycle state ID. # string | Lifecycle state ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.LifecycleStatesAPI.GetLifecycleStateV1(context.Background(), identityProfileId, lifecycleStateId).Execute()
	  //resp, r, err := apiClient.LifecycleStatesAPI.GetLifecycleStateV1(context.Background(), identityProfileId, lifecycleStateId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `LifecycleStatesAPI.GetLifecycleStateV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetLifecycleStateV1`: Lifecyclestate
    fmt.Fprintf(os.Stdout, "Response from `LifecycleStatesAPI.GetLifecycleStateV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-lifecycle-states-v1
Lists lifecyclestates
Use this endpoint to list all lifecycle states by their associated identity profiles. 

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-lifecycle-states-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityProfileId** | **string** | Identity profile ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetLifecycleStatesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, priority, created, modified** | 

### Return type

[**[]Lifecyclestate**](../models/lifecyclestate)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/lifecycle_states"
)

func main() {
    identityProfileId := `2b838de9-db9b-abcf-e646-d4f274ad4238` // string | Identity profile ID. # string | Identity profile ID.
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := `created,modified` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, priority, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, priority, created, modified** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.LifecycleStatesAPI.GetLifecycleStatesV1(context.Background(), identityProfileId).Execute()
	  //resp, r, err := apiClient.LifecycleStatesAPI.GetLifecycleStatesV1(context.Background(), identityProfileId).Limit(limit).Offset(offset).Count(count).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `LifecycleStatesAPI.GetLifecycleStatesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetLifecycleStatesV1`: []Lifecyclestate
    fmt.Fprintf(os.Stdout, "Response from `LifecycleStatesAPI.GetLifecycleStatesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## set-lifecycle-state-v1
Set lifecycle state
Use this API to set/update an identity's lifecycle state to the one provided and update the corresponding identity profile.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-lifecycle-state-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityId** | **string** | ID of the identity to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetLifecycleStateV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **setLifecycleStateV1Request** | [**SetLifecycleStateV1Request**](../models/set-lifecycle-state-v1-request) |  | 

### Return type

[**SetLifecycleStateV1200Response**](../models/set-lifecycle-state-v1200-response)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v1 "github.com/sailpoint-oss/golang-sdk/v3/lifecycle_states"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/lifecycle_states"
)

func main() {
    identityId := `2c9180857893f1290178944561990364` // string | ID of the identity to update. # string | ID of the identity to update.
    setlifecyclestatev1request := []byte(``) // SetLifecycleStateV1Request | 

    var setLifecycleStateV1Request v1.SetLifecycleStateV1Request
    if err := json.Unmarshal(setlifecyclestatev1request, &setLifecycleStateV1Request); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.LifecycleStatesAPI.SetLifecycleStateV1(context.Background(), identityId).SetLifecycleStateV1Request(setLifecycleStateV1Request).Execute()
	  //resp, r, err := apiClient.LifecycleStatesAPI.SetLifecycleStateV1(context.Background(), identityId).SetLifecycleStateV1Request(setLifecycleStateV1Request).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `LifecycleStatesAPI.SetLifecycleStateV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetLifecycleStateV1`: SetLifecycleStateV1200Response
    fmt.Fprintf(os.Stdout, "Response from `LifecycleStatesAPI.SetLifecycleStateV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-lifecycle-states-v1
Update lifecycle state
Use this endpoint to update individual lifecycle state fields, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-lifecycle-states-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityProfileId** | **string** | Identity profile ID. | 
**lifecycleStateId** | **string** | Lifecycle state ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateLifecycleStatesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **jsonpatchoperation** | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | A list of lifecycle state update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields can be updated: * enabled * description * accountActions * accessProfileIds * emailNotificationOption * accessActionConfiguration * priority  | 

### Return type

[**Lifecyclestate**](../models/lifecyclestate)

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
  "encoding/json"
    v1 "github.com/sailpoint-oss/golang-sdk/v3/lifecycle_states"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/lifecycle_states"
)

func main() {
    identityProfileId := `2b838de9-db9b-abcf-e646-d4f274ad4238` // string | Identity profile ID. # string | Identity profile ID.
    lifecycleStateId := `ef38f94347e94562b5bb8424a56397d8` // string | Lifecycle state ID. # string | Lifecycle state ID.
    jsonpatchoperation := []byte(`[{"op":"replace","path":"/description","value":"Updated description!"},{"op":"replace","path":"/accessProfileIds","value":["2c918087742bab150174407a80f3125e","2c918087742bab150174407a80f3124f"]},{"op":"replace","path":"/accountActions","value":[{"action":"ENABLE","sourceIds":["2c9180846a2f82fb016a481c1b1560c5","2c9180846a2f82fb016a481c1b1560cc"],"excludeSourceIds":null,"allSources":false},{"action":"DISABLE","sourceIds":null,"excludeSourceIds":["3b551ccf5566478b9b77f37de25303aa"],"allSources":true},{"action":"DELETE","sourceIds":["3c9180846a2f82fb016a481c1b1560c5","8n9180846a2f82fb016a481c1b1560cc"],"excludeSourceIds":null,"allSources":false}]},{"op":"replace","path":"/emailNotificationOption","value":{"notifyManagers":true,"notifyAllAdmins":false,"notifySpecificUsers":false,"emailAddressList":[]}},{"op":"replace","path":"/accessActionConfiguration","value":{"removeAllAccessEnabled":true}}]`) // []Jsonpatchoperation | A list of lifecycle state update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields can be updated: * enabled * description * accountActions * accessProfileIds * emailNotificationOption * accessActionConfiguration * priority 

    var jsonpatchoperation []v1.Jsonpatchoperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonpatchoperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.LifecycleStatesAPI.UpdateLifecycleStatesV1(context.Background(), identityProfileId, lifecycleStateId).Jsonpatchoperation(jsonpatchoperation).Execute()
	  //resp, r, err := apiClient.LifecycleStatesAPI.UpdateLifecycleStatesV1(context.Background(), identityProfileId, lifecycleStateId).Jsonpatchoperation(jsonpatchoperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `LifecycleStatesAPI.UpdateLifecycleStatesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateLifecycleStatesV1`: Lifecyclestate
    fmt.Fprintf(os.Stdout, "Response from `LifecycleStatesAPI.UpdateLifecycleStatesV1`: %v\n", resp)
}
```

[[Back to top]](#)

