---
id: beta-triggers
title: Triggers
pagination_label: Triggers
sidebar_label: Triggers
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Triggers', 'BetaTriggers'] 
slug: /tools/sdk/powershell/beta/methods/triggers
tags: ['SDK', 'Software Development Kit', 'Triggers', 'BetaTriggers']
---

# Triggers
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
[**Complete-BetaTriggerInvocation**](#complete-trigger-invocation) | **POST** `/trigger-invocations/{id}/complete` | Complete trigger invocation
[**New-BetaSubscription**](#create-subscription) | **POST** `/trigger-subscriptions` | Create a subscription
[**Remove-BetaSubscription**](#delete-subscription) | **DELETE** `/trigger-subscriptions/{id}` | Delete a subscription
[**Get-BetaSubscriptions**](#list-subscriptions) | **GET** `/trigger-subscriptions` | List subscriptions
[**Get-BetaTriggerInvocationStatus**](#list-trigger-invocation-status) | **GET** `/trigger-invocations/status` | List latest invocation statuses
[**Get-BetaTriggers**](#list-triggers) | **GET** `/triggers` | List triggers
[**Update-BetaSubscription**](#patch-subscription) | **PATCH** `/trigger-subscriptions/{id}` | Patch a subscription
[**Start-BetaTestTriggerInvocation**](#start-test-trigger-invocation) | **POST** `/trigger-invocations/test` | Start a test invocation
[**Test-BetaSubscriptionFilter**](#test-subscription-filter) | **POST** `/trigger-subscriptions/validate-filter` | Validate a subscription filter
[**Update-BetaSubscription**](#update-subscription) | **PUT** `/trigger-subscriptions/{id}` | Update a subscription


## complete-trigger-invocation
Completes an invocation to a REQUEST_RESPONSE type trigger.

[API Spec](https://developer.sailpoint.com/docs/api/beta/complete-trigger-invocation)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the invocation to complete.
 Body  | CompleteInvocation | [**CompleteInvocation**](../models/complete-invocation) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde" # String | The ID of the invocation to complete.
$CompleteInvocation = @"{
  "output" : {
    "approved" : false
  },
  "secret" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "error" : "Access request is denied."
}"@

# Complete trigger invocation

try {
    $Result = ConvertFrom-JsonToCompleteInvocation -Json $CompleteInvocation
    Complete-BetaTriggerInvocation -Id $Id -CompleteInvocation $Result 
    
    # Below is a request that includes all optional parameters
    # Complete-BetaTriggerInvocation -Id $Id -CompleteInvocation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Complete-BetaTriggerInvocation"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-subscription
This API creates a new subscription to a trigger and defines trigger invocation details. The type of subscription determines which config object is required:
* HTTP subscriptions require httpConfig
* EventBridge subscriptions require eventBridgeConfig

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-subscription)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | SubscriptionPostRequest | [**SubscriptionPostRequest**](../models/subscription-post-request) | True  | 

### Return type
[**Subscription**](../models/subscription)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | New subscription to a trigger. The trigger can now be invoked by the method defined in the subscription. | Subscription
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SubscriptionPostRequest = @"{
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
}"@

# Create a subscription

try {
    $Result = ConvertFrom-JsonToSubscriptionPostRequest -Json $SubscriptionPostRequest
    New-BetaSubscription -SubscriptionPostRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-BetaSubscription -SubscriptionPostRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaSubscription"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-subscription
Deletes an existing subscription to a trigger.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-subscription)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Subscription ID

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde" # String | Subscription ID

# Delete a subscription

try {
    Remove-BetaSubscription -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaSubscription -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaSubscription"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-subscriptions
Gets a list of all trigger subscriptions.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-subscriptions)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **triggerId**: *eq*  **type**: *eq, le*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, triggerName**

### Return type
[**Subscription[]**](../models/subscription)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of subscriptions. | Subscription[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'id eq "12cff757-c0c0-413b-8ad7-2a47956d1e89"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **triggerId**: *eq*  **type**: *eq, le* (optional)
$Sorters = "triggerName" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, triggerName** (optional)

# List subscriptions

try {
    Get-BetaSubscriptions 
    
    # Below is a request that includes all optional parameters
    # Get-BetaSubscriptions -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSubscriptions"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-trigger-invocation-status
Gets a list of latest invocation statuses.
Statuses of successful invocations are available for up to 24 hours. Statuses of failed invocations are available for up to 48 hours.
This endpoint may only fetch up to 2000 invocations, and should not be treated as a representation of the full history of invocations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-trigger-invocation-status)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **triggerId**: *eq*  **subscriptionId**: *eq*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, subscriptionName, created, completed**

### Return type
[**InvocationStatus[]**](../models/invocation-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of latest invocation statuses. | InvocationStatus[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'triggerId eq "idn:access-request-dynamic-approver"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **triggerId**: *eq*  **subscriptionId**: *eq* (optional)
$Sorters = "created" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, subscriptionName, created, completed** (optional)

# List latest invocation statuses

try {
    Get-BetaTriggerInvocationStatus 
    
    # Below is a request that includes all optional parameters
    # Get-BetaTriggerInvocationStatus -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaTriggerInvocationStatus"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-triggers
Gets a list of triggers that are available in the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-triggers)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ge, le*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name**

### Return type
[**Trigger[]**](../models/trigger)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of triggers. | Trigger[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'id eq "idn:access-request-post-approval"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ge, le* (optional)
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name** (optional)

# List triggers

try {
    Get-BetaTriggers 
    
    # Below is a request that includes all optional parameters
    # Get-BetaTriggers -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaTriggers"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-subscription
This API updates a trigger subscription in IdentityNow, using a set of instructions to modify a subscription partially. The following fields are patchable:

**name**, **description**, **enabled**, **type**, **filter**, **responseDeadline**, **httpConfig**, **eventBridgeConfig**, **workflowConfig**

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-subscription)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the Subscription to patch
 Body  | SubscriptionPatchRequestInner | [**[]SubscriptionPatchRequestInner**](../models/subscription-patch-request-inner) | True  | 

### Return type
[**Subscription**](../models/subscription)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated subscription. | Subscription
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde" # String | ID of the Subscription to patch
 $SubscriptionPatchRequestInner = @""@ # SubscriptionPatchRequestInner[] | 
 

# Patch a subscription

try {
    $Result = ConvertFrom-JsonToSubscriptionPatchRequestInner -Json $SubscriptionPatchRequestInner
    Update-BetaSubscription -Id $Id -SubscriptionPatchRequestInner $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BetaSubscription -Id $Id -SubscriptionPatchRequestInner $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaSubscription"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-test-trigger-invocation
Initiate a test event for all subscribers of the specified event trigger.  If there are no subscribers to the specified trigger in the tenant, then no test event will be sent.

[API Spec](https://developer.sailpoint.com/docs/api/beta/start-test-trigger-invocation)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | TestInvocation | [**TestInvocation**](../models/test-invocation) | True  | 

### Return type
[**Invocation[]**](../models/invocation)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Test trigger invocations that have been started for specified subscription(s). | Invocation[]
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$TestInvocation = @"{
  "input" : {
    "identityId" : "201327fda1c44704ac01181e963d463c"
  },
  "subscriptionIds" : [ "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde" ],
  "triggerId" : "idn:access-request-post-approval",
  "contentJson" : {
    "workflowId" : 1234
  }
}"@

# Start a test invocation

try {
    $Result = ConvertFrom-JsonToTestInvocation -Json $TestInvocation
    Start-BetaTestTriggerInvocation -TestInvocation $Result 
    
    # Below is a request that includes all optional parameters
    # Start-BetaTestTriggerInvocation -TestInvocation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-BetaTestTriggerInvocation"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## test-subscription-filter
Validates a JSONPath filter expression against a provided mock input.
Request requires a security scope of: 

[API Spec](https://developer.sailpoint.com/docs/api/beta/test-subscription-filter)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | ValidateFilterInputDto | [**ValidateFilterInputDto**](../models/validate-filter-input-dto) | True  | 

### Return type
[**ValidateFilterOutputDto**](../models/validate-filter-output-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Boolean whether specified filter expression is valid against the input. | ValidateFilterOutputDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$ValidateFilterInputDto = @"{
  "filter" : "$[?($.identityId == \"201327fda1c44704ac01181e963d463c\")]",
  "input" : {
    "identityId" : "201327fda1c44704ac01181e963d463c"
  }
}"@

# Validate a subscription filter

try {
    $Result = ConvertFrom-JsonToValidateFilterInputDto -Json $ValidateFilterInputDto
    Test-BetaSubscriptionFilter -ValidateFilterInputDto $Result 
    
    # Below is a request that includes all optional parameters
    # Test-BetaSubscriptionFilter -ValidateFilterInputDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Test-BetaSubscriptionFilter"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-subscription
This API updates a trigger subscription in IdentityNow, using a full object representation. In other words, the existing
  Subscription is completely replaced. The following fields are immutable:


  * id

  * triggerId


  Attempts to modify these fields result in 400.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-subscription)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Subscription ID
 Body  | SubscriptionPutRequest | [**SubscriptionPutRequest**](../models/subscription-put-request) | True  | 

### Return type
[**Subscription**](../models/subscription)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated subscription. | Subscription
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde" # String | Subscription ID
$SubscriptionPutRequest = @"{
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
}"@

# Update a subscription

try {
    $Result = ConvertFrom-JsonToSubscriptionPutRequest -Json $SubscriptionPutRequest
    Update-BetaSubscription -Id $Id -SubscriptionPutRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BetaSubscription -Id $Id -SubscriptionPutRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaSubscription"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
