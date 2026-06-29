---
id: v1-triggers
title: Triggers
pagination_label: Triggers
sidebar_label: Triggers
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Triggers', 'V1Triggers'] 
slug: /tools/sdk/go/triggers/methods/triggers
tags: ['SDK', 'Software Development Kit', 'Triggers', 'V1Triggers']
---

# TriggersAPI
  Event Triggers provide real-time updates to changes in Identity Security Cloud so you can take action as soon as an event occurs, rather than poll an API endpoint for updates. Identity Security Cloud provides a user interface within the admin console to create and manage trigger subscriptions.  These endpoints allow for programatically creating and managing trigger subscriptions.

There are two types of event triggers:
  * &#x60;FIRE_AND_FORGET&#x60;: This trigger type will send a payload to each subscriber without needing a response.  Each trigger of this type has a limit of **50 subscriptions**.
  * &#x60;REQUEST_RESPONSE&#x60;: This trigger type will send a payload to a subscriber and expect a response back.  Each trigger of this type may only have **one subscription**.

## Available Event Triggers
Production ready event triggers that are available in all tenants.

| Name | ID | Type | Trigger condition |
|-|-|-|-|
| [Access Request Dynamic Approval](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-dynamic-approval/) | idn:access-request-dynamic-approver | REQUEST_RESPONSE |After an access request is submitted. Expects the subscriber to respond with the ID of an identity or workgroup to add to the approval workflow. |
| [Access Request Decision](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-decision/) | idn:access-request-post-approval | FIRE_AND_FORGET | After an access request is approved. |
| [Access Request Submitted](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-submitted/) | idn:access-request-pre-approval | REQUEST_RESPONSE | After an access request is submitted. Expects the subscriber to respond with an approval decision. |
| [Account Aggregation Completed](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/account-aggregation-completed/) | idn:account-aggregation-completed | FIRE_AND_FORGET | After an account aggregation completed, terminated, failed. |
| Account Attributes Changed | idn:account-attributes-changed | FIRE_AND_FORGET | After an account aggregation, and one or more account attributes have changed. |
| Account Correlated | idn:account-correlated | FIRE_AND_FORGET | After an account is added to an identity. |
| Accounts Collected for Aggregation |  idn:aggregation-accounts-collected | FIRE_AND_FORGET | New, changed, and deleted accounts have been gathered during an aggregation and are being processed. |
| Campaign Activated | idn:campaign-activated | FIRE_AND_FORGET | After a campaign is activated. |
| Campaign Ended | idn:campaign-ended | FIRE_AND_FORGET | After a campaign ends. |
| Campaign Generated | idn:campaign-generated | FIRE_AND_FORGET | After a campaign finishes generating. |
| Certification Signed Off | idn:certification-signed-off | FIRE_AND_FORGET | After a certification is signed off by its reviewer. |
| [Identity Attributes Changed](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/account-aggregation-completed/) | idn:identity-attributes-changed | FIRE_AND_FORGET | After One or more identity attributes changed. |
| [Identity Created](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/identity-created/) | idn:identity-created | FIRE_AND_FORGET | After an identity is created. |
| [Provisioning Action Completed](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/provisioning-completed/) |  idn:post-provisioning | FIRE_AND_FORGET | After a provisioning action completed on a source. |
| [Scheduled Search](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/scheduled-search/) |  idn:saved-search-complete | FIRE_AND_FORGET | After a scheduled search completed. |
| [Source Created](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/source-created/) | idn:source-created | FIRE_AND_FORGET | After a source is created. |
| [Source Deleted](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/source-deleted/) | idn:source-deleted | FIRE_AND_FORGET | After a source is deleted. |
| [Source Updated](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/source-updated/) | idn:source-updated | FIRE_AND_FORGET | After configuration changes have been made to a source. |
| [VA Cluster Status Change](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/va-cluster-status-change/) | idn:va-cluster-status-change | FIRE_AND_FORGET | After the status of a VA cluster has changed. |
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**complete-trigger-invocation-v1**](#complete-trigger-invocation-v1) | **Post** `/trigger-invocations/v1/{id}/complete` | Complete trigger invocation
[**create-subscription-v1**](#create-subscription-v1) | **Post** `/trigger-subscriptions/v1` | Create a subscription
[**delete-subscription-v1**](#delete-subscription-v1) | **Delete** `/trigger-subscriptions/v1/{id}` | Delete a subscription
[**list-subscriptions-v1**](#list-subscriptions-v1) | **Get** `/trigger-subscriptions/v1` | List subscriptions
[**list-trigger-invocation-status-v1**](#list-trigger-invocation-status-v1) | **Get** `/trigger-invocations/v1/status` | List latest invocation statuses
[**list-triggers-v1**](#list-triggers-v1) | **Get** `/triggers/v1` | List triggers
[**patch-subscription-v1**](#patch-subscription-v1) | **Patch** `/trigger-subscriptions/v1/{id}` | Patch a subscription
[**start-test-trigger-invocation-v1**](#start-test-trigger-invocation-v1) | **Post** `/trigger-invocations/v1/test` | Start a test invocation
[**test-subscription-filter-v1**](#test-subscription-filter-v1) | **Post** `/trigger-subscriptions/v1/validate-filter` | Validate a subscription filter
[**update-subscription-v1**](#update-subscription-v1) | **Put** `/trigger-subscriptions/v1/{id}` | Update a subscription


## complete-trigger-invocation-v1
Complete trigger invocation
Completes an invocation to a REQUEST_RESPONSE type trigger.

[API Spec](https://developer.sailpoint.com/docs/api/v1/complete-trigger-invocation-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the invocation to complete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCompleteTriggerInvocationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **completeinvocation** | [**Completeinvocation**](../models/completeinvocation) |  | 

### Return type

 (empty response body)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/triggers"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/triggers"
)

func main() {
    id := `0f11f2a4-7c94-4bf3-a2bd-742580fe3bde` // string | The ID of the invocation to complete. # string | The ID of the invocation to complete.
    completeinvocation := []byte(`{"secret":"0f11f2a4-7c94-4bf3-a2bd-742580fe3bde","output":{"approved":false}}`) // Completeinvocation | 

    var completeinvocation v1.Completeinvocation
    if err := json.Unmarshal(completeinvocation, &completeinvocation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.TriggersAPI.CompleteTriggerInvocationV1(context.Background(), id).Completeinvocation(completeinvocation).Execute()
	  //r, err := apiClient.TriggersAPI.CompleteTriggerInvocationV1(context.Background(), id).Completeinvocation(completeinvocation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TriggersAPI.CompleteTriggerInvocationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## create-subscription-v1
Create a subscription
This API creates a new subscription to a trigger and defines trigger invocation details. The type of subscription determines which config object is required:
* HTTP subscriptions require httpConfig
* EventBridge subscriptions require eventBridgeConfig

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-subscription-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSubscriptionV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionpostrequest** | [**Subscriptionpostrequest**](../models/subscriptionpostrequest) |  | 

### Return type

[**Subscription**](../models/subscription)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/triggers"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/triggers"
)

func main() {
    subscriptionpostrequest := []byte(`{"name":"Access request subscription","description":"Access requested to site xyz","triggerId":"idn:access-requested","type":"HTTP","httpConfig":{"url":"https://www.example.com","httpDispatchMode":"SYNC","httpAuthenticationType":"BASIC_AUTH","basicAuthConfig":{"userName":"user@example.com","password":"eRtg4%6yuI!"}},"enabled":true,"filter":"$[?($.identityId == \"201327fda1c44704ac01181e963d463c\")]"}`) // Subscriptionpostrequest | 

    var subscriptionpostrequest v1.Subscriptionpostrequest
    if err := json.Unmarshal(subscriptionpostrequest, &subscriptionpostrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.TriggersAPI.CreateSubscriptionV1(context.Background()).Subscriptionpostrequest(subscriptionpostrequest).Execute()
	  //resp, r, err := apiClient.TriggersAPI.CreateSubscriptionV1(context.Background()).Subscriptionpostrequest(subscriptionpostrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TriggersAPI.CreateSubscriptionV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSubscriptionV1`: Subscription
    fmt.Fprintf(os.Stdout, "Response from `TriggersAPI.CreateSubscriptionV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-subscription-v1
Delete a subscription
Deletes an existing subscription to a trigger.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-subscription-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Subscription ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSubscriptionV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/triggers"
)

func main() {
    id := `0f11f2a4-7c94-4bf3-a2bd-742580fe3bde` // string | Subscription ID # string | Subscription ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.TriggersAPI.DeleteSubscriptionV1(context.Background(), id).Execute()
	  //r, err := apiClient.TriggersAPI.DeleteSubscriptionV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TriggersAPI.DeleteSubscriptionV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## list-subscriptions-v1
List subscriptions
Gets a list of all trigger subscriptions.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-subscriptions-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListSubscriptionsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **triggerId**: *eq*  **type**: *eq, le* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, triggerName** | 

### Return type

[**[]Subscription**](../models/subscription)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/triggers"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `id eq "12cff757-c0c0-413b-8ad7-2a47956d1e89"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **triggerId**: *eq*  **type**: *eq, le* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **triggerId**: *eq*  **type**: *eq, le* (optional)
    sorters := `triggerName` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, triggerName** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, triggerName** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.TriggersAPI.ListSubscriptionsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.TriggersAPI.ListSubscriptionsV1(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TriggersAPI.ListSubscriptionsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListSubscriptionsV1`: []Subscription
    fmt.Fprintf(os.Stdout, "Response from `TriggersAPI.ListSubscriptionsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-trigger-invocation-status-v1
List latest invocation statuses
Gets a list of latest invocation statuses.
Statuses of successful invocations are available for up to 24 hours. Statuses of failed invocations are available for up to 48 hours.
This endpoint may only fetch up to 2000 invocations, and should not be treated as a representation of the full history of invocations.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-trigger-invocation-status-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListTriggerInvocationStatusV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **triggerId**: *eq*  **subscriptionId**: *eq* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, subscriptionName, created, completed** | 

### Return type

[**[]Invocationstatus**](../models/invocationstatus)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/triggers"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `triggerId eq "idn:access-request-dynamic-approver"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **triggerId**: *eq*  **subscriptionId**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **triggerId**: *eq*  **subscriptionId**: *eq* (optional)
    sorters := `created` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, subscriptionName, created, completed** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, subscriptionName, created, completed** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.TriggersAPI.ListTriggerInvocationStatusV1(context.Background()).Execute()
	  //resp, r, err := apiClient.TriggersAPI.ListTriggerInvocationStatusV1(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TriggersAPI.ListTriggerInvocationStatusV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListTriggerInvocationStatusV1`: []Invocationstatus
    fmt.Fprintf(os.Stdout, "Response from `TriggersAPI.ListTriggerInvocationStatusV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-triggers-v1
List triggers
Gets a list of triggers that are available in the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-triggers-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListTriggersV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ge, le* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name** | 

### Return type

[**[]Trigger**](../models/trigger)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/triggers"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `id eq "idn:access-request-post-approval"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ge, le* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ge, le* (optional)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.TriggersAPI.ListTriggersV1(context.Background()).Execute()
	  //resp, r, err := apiClient.TriggersAPI.ListTriggersV1(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TriggersAPI.ListTriggersV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListTriggersV1`: []Trigger
    fmt.Fprintf(os.Stdout, "Response from `TriggersAPI.ListTriggersV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-subscription-v1
Patch a subscription
This API updates a trigger subscription in IdentityNow, using a set of instructions to modify a subscription partially. The following fields are patchable:

**name**, **description**, **enabled**, **type**, **filter**, **responseDeadline**, **httpConfig**, **eventBridgeConfig**, **workflowConfig**

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-subscription-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Subscription to patch | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchSubscriptionV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **subscriptionpatchrequestInner** | [**[]SubscriptionpatchrequestInner**](../models/subscriptionpatchrequest-inner) |  | 

### Return type

[**Subscription**](../models/subscription)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/triggers"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/triggers"
)

func main() {
    id := `0f11f2a4-7c94-4bf3-a2bd-742580fe3bde` // string | ID of the Subscription to patch # string | ID of the Subscription to patch
    subscriptionpatchrequestinner := []byte(``) // []SubscriptionpatchrequestInner | 

    var subscriptionpatchrequestInner []v1.SubscriptionpatchrequestInner
    if err := json.Unmarshal(subscriptionpatchrequestinner, &subscriptionpatchrequestInner); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.TriggersAPI.PatchSubscriptionV1(context.Background(), id).SubscriptionpatchrequestInner(subscriptionpatchrequestInner).Execute()
	  //resp, r, err := apiClient.TriggersAPI.PatchSubscriptionV1(context.Background(), id).SubscriptionpatchrequestInner(subscriptionpatchrequestInner).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TriggersAPI.PatchSubscriptionV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchSubscriptionV1`: Subscription
    fmt.Fprintf(os.Stdout, "Response from `TriggersAPI.PatchSubscriptionV1`: %v\n", resp)
}
```

[[Back to top]](#)

## start-test-trigger-invocation-v1
Start a test invocation
Initiate a test event for all subscribers of the specified event trigger.  If there are no subscribers to the specified trigger in the tenant, then no test event will be sent.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-test-trigger-invocation-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartTestTriggerInvocationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testinvocation** | [**Testinvocation**](../models/testinvocation) |  | 

### Return type

[**[]Invocation**](../models/invocation)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/triggers"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/triggers"
)

func main() {
    testinvocation := []byte(`{"triggerId":"idn:access-requested","input":{"identityId":"201327fda1c44704ac01181e963d463c"},"contentJson":{"workflowId":1234}}`) // Testinvocation | 

    var testinvocation v1.Testinvocation
    if err := json.Unmarshal(testinvocation, &testinvocation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.TriggersAPI.StartTestTriggerInvocationV1(context.Background()).Testinvocation(testinvocation).Execute()
	  //resp, r, err := apiClient.TriggersAPI.StartTestTriggerInvocationV1(context.Background()).Testinvocation(testinvocation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TriggersAPI.StartTestTriggerInvocationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartTestTriggerInvocationV1`: []Invocation
    fmt.Fprintf(os.Stdout, "Response from `TriggersAPI.StartTestTriggerInvocationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## test-subscription-filter-v1
Validate a subscription filter
Validates a JSONPath filter expression against a provided mock input.
Request requires a security scope of: 

[API Spec](https://developer.sailpoint.com/docs/api/v1/test-subscription-filter-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTestSubscriptionFilterV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validatefilterinputdto** | [**Validatefilterinputdto**](../models/validatefilterinputdto) |  | 

### Return type

[**Validatefilteroutputdto**](../models/validatefilteroutputdto)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/triggers"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/triggers"
)

func main() {
    validatefilterinputdto := []byte(`{"input":{"identityId":"201327fda1c44704ac01181e963d463c"},"filter":"$[?($.identityId == \"201327fda1c44704ac01181e963d463c\")]"}`) // Validatefilterinputdto | 

    var validatefilterinputdto v1.Validatefilterinputdto
    if err := json.Unmarshal(validatefilterinputdto, &validatefilterinputdto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.TriggersAPI.TestSubscriptionFilterV1(context.Background()).Validatefilterinputdto(validatefilterinputdto).Execute()
	  //resp, r, err := apiClient.TriggersAPI.TestSubscriptionFilterV1(context.Background()).Validatefilterinputdto(validatefilterinputdto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TriggersAPI.TestSubscriptionFilterV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TestSubscriptionFilterV1`: Validatefilteroutputdto
    fmt.Fprintf(os.Stdout, "Response from `TriggersAPI.TestSubscriptionFilterV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-subscription-v1
Update a subscription
This API updates a trigger subscription in IdentityNow, using a full object representation. In other words, the existing
  Subscription is completely replaced. The following fields are immutable:


  * id

  * triggerId


  Attempts to modify these fields result in 400.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-subscription-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Subscription ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateSubscriptionV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **subscriptionputrequest** | [**Subscriptionputrequest**](../models/subscriptionputrequest) |  | 

### Return type

[**Subscription**](../models/subscription)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/triggers"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/triggers"
)

func main() {
    id := `0f11f2a4-7c94-4bf3-a2bd-742580fe3bde` // string | Subscription ID # string | Subscription ID
    subscriptionputrequest := []byte(`{"name":"Access request subscription","description":"Access requested to site xyz","type":"HTTP","httpConfig":{"url":"https://www.example.com","httpDispatchMode":"SYNC","httpAuthenticationType":"BASIC_AUTH","basicAuthConfig":{"userName":"user@example.com","password":"eRtg4%6yuI!"}},"enabled":true,"filter":"$[?($.identityId == \"201327fda1c44704ac01181e963d463c\")]"}`) // Subscriptionputrequest | 

    var subscriptionputrequest v1.Subscriptionputrequest
    if err := json.Unmarshal(subscriptionputrequest, &subscriptionputrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.TriggersAPI.UpdateSubscriptionV1(context.Background(), id).Subscriptionputrequest(subscriptionputrequest).Execute()
	  //resp, r, err := apiClient.TriggersAPI.UpdateSubscriptionV1(context.Background(), id).Subscriptionputrequest(subscriptionputrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TriggersAPI.UpdateSubscriptionV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateSubscriptionV1`: Subscription
    fmt.Fprintf(os.Stdout, "Response from `TriggersAPI.UpdateSubscriptionV1`: %v\n", resp)
}
```

[[Back to top]](#)

