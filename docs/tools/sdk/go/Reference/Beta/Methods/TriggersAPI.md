---
id: beta-triggers
title: Triggers
pagination_label: Triggers
sidebar_label: Triggers
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Triggers', 'BetaTriggers'] 
slug: /tools/sdk/go/beta/methods/triggers
tags: ['SDK', 'Software Development Kit', 'Triggers', 'BetaTriggers']
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
| Account Uncorrelated | idn:account-uncorrelated | FIRE_AND_FORGET | After an account is removed from an identity. |
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

## Early Access Event Triggers
Triggers that are in-development and not ready for production use.  Please contact support to enable these triggers in your tenant.

| Name | ID | Type | Trigger condition |
|-|-|-|-|
| [Identity Deleted](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/identity-deleted/) | idn:identity-deleted | FIRE_AND_FORGET | After an identity is deleted. |
| [Source Account Created](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/source-account-created/) | idn:source-account-created | FIRE_AND_FORGET | After a source account is created. |
| [Source Account Deleted](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/source-account-deleted/) | idn:source-account-deleted | FIRE_AND_FORGET | After a source account is deleted. |
| [Source Account Updated](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/source-account-updated/) | idn:source-account-updated | FIRE_AND_FORGET | After a source account is changed. |
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**complete-trigger-invocation**](#complete-trigger-invocation) | **Post** `/trigger-invocations/{id}/complete` | Complete Trigger Invocation
[**create-subscription**](#create-subscription) | **Post** `/trigger-subscriptions` | Create a Subscription
[**delete-subscription**](#delete-subscription) | **Delete** `/trigger-subscriptions/{id}` | Delete a Subscription
[**list-subscriptions**](#list-subscriptions) | **Get** `/trigger-subscriptions` | List Subscriptions
[**list-trigger-invocation-status**](#list-trigger-invocation-status) | **Get** `/trigger-invocations/status` | List Latest Invocation Statuses
[**list-triggers**](#list-triggers) | **Get** `/triggers` | List Triggers
[**patch-subscription**](#patch-subscription) | **Patch** `/trigger-subscriptions/{id}` | Patch a Subscription
[**start-test-trigger-invocation**](#start-test-trigger-invocation) | **Post** `/trigger-invocations/test` | Start a Test Invocation
[**test-subscription-filter**](#test-subscription-filter) | **Post** `/trigger-subscriptions/validate-filter` | Validate a Subscription Filter
[**update-subscription**](#update-subscription) | **Put** `/trigger-subscriptions/{id}` | Update a Subscription


## complete-trigger-invocation
Complete Trigger Invocation
Completes an invocation to a REQUEST_RESPONSE type trigger.

[API Spec](https://developer.sailpoint.com/docs/api/beta/complete-trigger-invocation)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the invocation to complete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCompleteTriggerInvocationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **completeInvocation** | [**CompleteInvocation**](../models/complete-invocation) |  | 

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `0f11f2a4-7c94-4bf3-a2bd-742580fe3bde` // string | The ID of the invocation to complete. # string | The ID of the invocation to complete.
    data := []byte(`{
          "output" : {
            "approved" : false
          },
          "secret" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "error" : "Access request is denied."
        }`) // CompleteInvocation | 

  
   var completeInvocation beta.CompleteInvocation
   if err := json.Unmarshal(data, &completeInvocation); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.TriggersAPI.CompleteTriggerInvocation(context.Background(), id).CompleteInvocation(completeInvocation).Execute()
	//r, err := apiClient.Beta.TriggersAPI.CompleteTriggerInvocation(context.Background(), id).CompleteInvocation(completeInvocation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TriggersAPI.CompleteTriggerInvocation``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## create-subscription
Create a Subscription
This API creates a new subscription to a trigger and defines trigger invocation details. The type of subscription determines which config object is required:
* HTTP subscriptions require httpConfig
* EventBridge subscriptions require eventBridgeConfig

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-subscription)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSubscriptionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionPostRequest** | [**SubscriptionPostRequest**](../models/subscription-post-request) |  | 

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    data := []byte(`{
          "filter" : "$[?($.identityId == \"201327fda1c44704ac01181e963d463c\")]",
          "httpConfig" : {
            "bearerTokenAuthConfig" : {
              "bearerToken" : "bearerToken"
            },
            "httpAuthenticationType" : "BASIC_AUTH",
            "httpDispatchMode" : "SYNC",
            "basicAuthConfig" : {
              "password" : "password",
              "userName" : "user@example.com"
            },
            "url" : "https://www.example.com"
          },
          "triggerId" : "idn:access-requested",
          "name" : "Access request subscription",
          "description" : "Access requested to site xyz",
          "eventBridgeConfig" : {
            "awsRegion" : "us-west-1",
            "awsAccount" : "123456789012"
          },
          "responseDeadline" : "PT1H",
          "type" : "HTTP",
          "enabled" : true
        }`) // SubscriptionPostRequest | 

  
   var subscriptionPostRequest beta.SubscriptionPostRequest
   if err := json.Unmarshal(data, &subscriptionPostRequest); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.TriggersAPI.CreateSubscription(context.Background()).SubscriptionPostRequest(subscriptionPostRequest).Execute()
	//resp, r, err := apiClient.Beta.TriggersAPI.CreateSubscription(context.Background()).SubscriptionPostRequest(subscriptionPostRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TriggersAPI.CreateSubscription``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateSubscription`: Subscription
	fmt.Fprintf(os.Stdout, "Response from `TriggersAPI.CreateSubscription`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-subscription
Delete a Subscription
Deletes an existing subscription to a trigger.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-subscription)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Subscription ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSubscriptionRequest struct via the builder pattern


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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `0f11f2a4-7c94-4bf3-a2bd-742580fe3bde` // string | Subscription ID # string | Subscription ID

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.TriggersAPI.DeleteSubscription(context.Background(), id).Execute()
	//r, err := apiClient.Beta.TriggersAPI.DeleteSubscription(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TriggersAPI.DeleteSubscription``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## list-subscriptions
List Subscriptions
Gets a list of all trigger subscriptions.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-subscriptions)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListSubscriptionsRequest struct via the builder pattern


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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `id eq "12cff757-c0c0-413b-8ad7-2a47956d1e89"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **triggerId**: *eq*  **type**: *eq, le* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **triggerId**: *eq*  **type**: *eq, le* (optional)
    sorters := `triggerName` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, triggerName** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, triggerName** (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.TriggersAPI.ListSubscriptions(context.Background()).Execute()
	//resp, r, err := apiClient.Beta.TriggersAPI.ListSubscriptions(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TriggersAPI.ListSubscriptions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListSubscriptions`: []Subscription
	fmt.Fprintf(os.Stdout, "Response from `TriggersAPI.ListSubscriptions`: %v\n", resp)
}
```

[[Back to top]](#)

## list-trigger-invocation-status
List Latest Invocation Statuses
Gets a list of latest invocation statuses.
Statuses of successful invocations are available for up to 24 hours. Statuses of failed invocations are available for up to 48 hours.
This endpoint may only fetch up to 2000 invocations, and should not be treated as a representation of the full history of invocations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-trigger-invocation-status)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListTriggerInvocationStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **triggerId**: *eq*  **subscriptionId**: *eq* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, subscriptionName, created, completed** | 

### Return type

[**[]InvocationStatus**](../models/invocation-status)

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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `triggerId eq "idn:access-request-dynamic-approver"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **triggerId**: *eq*  **subscriptionId**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **triggerId**: *eq*  **subscriptionId**: *eq* (optional)
    sorters := `created` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, subscriptionName, created, completed** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, subscriptionName, created, completed** (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.TriggersAPI.ListTriggerInvocationStatus(context.Background()).Execute()
	//resp, r, err := apiClient.Beta.TriggersAPI.ListTriggerInvocationStatus(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TriggersAPI.ListTriggerInvocationStatus``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListTriggerInvocationStatus`: []InvocationStatus
	fmt.Fprintf(os.Stdout, "Response from `TriggersAPI.ListTriggerInvocationStatus`: %v\n", resp)
}
```

[[Back to top]](#)

## list-triggers
List Triggers
Gets a list of triggers that are available in the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-triggers)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListTriggersRequest struct via the builder pattern


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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `id eq "idn:access-request-post-approval"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ge, le* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ge, le* (optional)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name** (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.TriggersAPI.ListTriggers(context.Background()).Execute()
	//resp, r, err := apiClient.Beta.TriggersAPI.ListTriggers(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TriggersAPI.ListTriggers``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListTriggers`: []Trigger
	fmt.Fprintf(os.Stdout, "Response from `TriggersAPI.ListTriggers`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-subscription
Patch a Subscription
This API updates a trigger subscription in IdentityNow, using a set of instructions to modify a subscription partially. The following fields are patchable:

**name**, **description**, **enabled**, **type**, **filter**, **responseDeadline**, **httpConfig**, **eventBridgeConfig**, **workflowConfig**

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-subscription)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Subscription to patch | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchSubscriptionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **subscriptionPatchRequestInner** | [**[]SubscriptionPatchRequestInner**](../models/subscription-patch-request-inner) |  | 

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `0f11f2a4-7c94-4bf3-a2bd-742580fe3bde` // string | ID of the Subscription to patch # string | ID of the Subscription to patch
    subscriptionPatchRequestInner := fmt.Sprintf(``) // []SubscriptionPatchRequestInner | 

  
   var subscriptionPatchRequestInner beta.SubscriptionPatchRequestInner
   if err := json.Unmarshal(data, &subscriptionPatchRequestInner); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.TriggersAPI.PatchSubscription(context.Background(), id).SubscriptionPatchRequestInner(subscriptionPatchRequestInner).Execute()
	//resp, r, err := apiClient.Beta.TriggersAPI.PatchSubscription(context.Background(), id).SubscriptionPatchRequestInner(subscriptionPatchRequestInner).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TriggersAPI.PatchSubscription``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PatchSubscription`: Subscription
	fmt.Fprintf(os.Stdout, "Response from `TriggersAPI.PatchSubscription`: %v\n", resp)
}
```

[[Back to top]](#)

## start-test-trigger-invocation
Start a Test Invocation
Initiate a test event for all subscribers of the specified event trigger.  If there are no subscribers to the specified trigger in the tenant, then no test event will be sent.

[API Spec](https://developer.sailpoint.com/docs/api/beta/start-test-trigger-invocation)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartTestTriggerInvocationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testInvocation** | [**TestInvocation**](../models/test-invocation) |  | 

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    data := []byte(`{
          "input" : {
            "identityId" : "201327fda1c44704ac01181e963d463c"
          },
          "subscriptionIds" : [ "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde" ],
          "triggerId" : "idn:access-request-post-approval",
          "contentJson" : {
            "workflowId" : 1234
          }
        }`) // TestInvocation | 

  
   var testInvocation beta.TestInvocation
   if err := json.Unmarshal(data, &testInvocation); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.TriggersAPI.StartTestTriggerInvocation(context.Background()).TestInvocation(testInvocation).Execute()
	//resp, r, err := apiClient.Beta.TriggersAPI.StartTestTriggerInvocation(context.Background()).TestInvocation(testInvocation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TriggersAPI.StartTestTriggerInvocation``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `StartTestTriggerInvocation`: []Invocation
	fmt.Fprintf(os.Stdout, "Response from `TriggersAPI.StartTestTriggerInvocation`: %v\n", resp)
}
```

[[Back to top]](#)

## test-subscription-filter
Validate a Subscription Filter
Validates a JSONPath filter expression against a provided mock input.
Request requires a security scope of: 

[API Spec](https://developer.sailpoint.com/docs/api/beta/test-subscription-filter)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTestSubscriptionFilterRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validateFilterInputDto** | [**ValidateFilterInputDto**](../models/validate-filter-input-dto) |  | 

### Return type

[**ValidateFilterOutputDto**](../models/validate-filter-output-dto)

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    data := []byte(`{
          "filter" : "$[?($.identityId == \"201327fda1c44704ac01181e963d463c\")]",
          "input" : {
            "identityId" : "201327fda1c44704ac01181e963d463c"
          }
        }`) // ValidateFilterInputDto | 

  
   var validateFilterInputDto beta.ValidateFilterInputDto
   if err := json.Unmarshal(data, &validateFilterInputDto); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.TriggersAPI.TestSubscriptionFilter(context.Background()).ValidateFilterInputDto(validateFilterInputDto).Execute()
	//resp, r, err := apiClient.Beta.TriggersAPI.TestSubscriptionFilter(context.Background()).ValidateFilterInputDto(validateFilterInputDto).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TriggersAPI.TestSubscriptionFilter``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `TestSubscriptionFilter`: ValidateFilterOutputDto
	fmt.Fprintf(os.Stdout, "Response from `TriggersAPI.TestSubscriptionFilter`: %v\n", resp)
}
```

[[Back to top]](#)

## update-subscription
Update a Subscription
This API updates a trigger subscription in IdentityNow, using a full object representation. In other words, the existing
  Subscription is completely replaced. The following fields are immutable:


  * id

  * triggerId


  Attempts to modify these fields result in 400.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-subscription)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Subscription ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateSubscriptionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **subscriptionPutRequest** | [**SubscriptionPutRequest**](../models/subscription-put-request) |  | 

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `0f11f2a4-7c94-4bf3-a2bd-742580fe3bde` // string | Subscription ID # string | Subscription ID
    data := []byte(`{
          "filter" : "$[?($.identityId == \"201327fda1c44704ac01181e963d463c\")]",
          "httpConfig" : {
            "bearerTokenAuthConfig" : {
              "bearerToken" : "bearerToken"
            },
            "httpAuthenticationType" : "BASIC_AUTH",
            "httpDispatchMode" : "SYNC",
            "basicAuthConfig" : {
              "password" : "password",
              "userName" : "user@example.com"
            },
            "url" : "https://www.example.com"
          },
          "name" : "Access request subscription",
          "description" : "Access requested to site xyz",
          "eventBridgeConfig" : {
            "awsRegion" : "us-west-1",
            "awsAccount" : "123456789012"
          },
          "responseDeadline" : "PT1H",
          "type" : "HTTP",
          "enabled" : true
        }`) // SubscriptionPutRequest | 

  
   var subscriptionPutRequest beta.SubscriptionPutRequest
   if err := json.Unmarshal(data, &subscriptionPutRequest); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.TriggersAPI.UpdateSubscription(context.Background(), id).SubscriptionPutRequest(subscriptionPutRequest).Execute()
	//resp, r, err := apiClient.Beta.TriggersAPI.UpdateSubscription(context.Background(), id).SubscriptionPutRequest(subscriptionPutRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TriggersAPI.UpdateSubscription``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateSubscription`: Subscription
	fmt.Fprintf(os.Stdout, "Response from `TriggersAPI.UpdateSubscription`: %v\n", resp)
}
```

[[Back to top]](#)

