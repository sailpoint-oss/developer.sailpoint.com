
---
id: beta-account-activities
title: AccountActivities
pagination_label: AccountActivities
sidebar_label: AccountActivities
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountActivities', 'BetaAccountActivities'] 
slug: /tools/sdk/powershell/beta/methods/account-activities
tags: ['SDK', 'Software Development Kit', 'AccountActivities', 'BetaAccountActivities']
---

# AccountActivities
  Use this API to implement account activity tracking functionality.
With this functionality in place, users can track source account activity in Identity Security Cloud, which greatly improves traceability in the system.

An account activity refers to a log of each action performed on a source account. This is useful for auditing the changes that occur on an account throughout its life.
In Identity Security Cloud&#39;s Search, users can search for account activities and select the activity&#39;s row to get an overview of the activity&#39;s account action and view its progress, its involved sources, and its most basic metadata, such as the identity requesting the option and the recipient.

Account activity includes most actions Identity Security Cloud completes on source accounts. Users can search in Identity Security Cloud for the following account action types:

- Access Request: These include any access requests the source account is involved in.

- Account Attribute Updates: These include updates to a single attribute on an account on a source.

- Account State Update: These include locking or unlocking actions on an account on a source.

- Certification: These include actions removing an entitlement from an account on a source as a result of the entitlement&#39;s revocation during a certification.

- Cloud Automated &#x60;Lifecyclestate&#x60;: These include automated lifecycle state changes that result in a source account&#39;s correlated identity being assigned to a different lifecycle state.
Identity Security Cloud replaces the &#x60;Lifecyclestate&#x60; variable with the name of the lifecycle state it has moved the account&#39;s identity to.

- Identity Attribute Update: These include updates to a source account&#39;s correlated identity attributes as the result of a provisioning action.
When you update an identity attribute that also updates an identity&#39;s lifecycle state, the cloud automated &#x60;Lifecyclestate&#x60; event also displays.
Account Activity does not include attribute updates that occur as a result of aggregation.

- Identity Refresh: These include correlated identity refreshes that occur for an account on a source whenever the account&#39;s correlated identity profile gets a new role or updates.
These also include refreshes that occur whenever Identity Security Cloud assigns an application to the account&#39;s correlated identity based on the application&#39;s being assigned to All Users From Source or Specific Users From Source.

- Lifecycle State Refresh: These include the actions that took place when a lifecycle state changed. This event only occurs after a cloud automated &#x60;Lifecyclestate&#x60; change or a lifecycle state change.

- Lifecycle State Change: These include the account activities that result from an identity&#39;s manual assignment to a null lifecycle state.

- Password Change: These include password changes on sources.

Refer to [Account Activity](https://documentation.sailpoint.com/saas/help/search/index.html#account-activity) for more information about account activities.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-BetaAccountActivity**](#get-account-activity) | **GET** `/account-activities/{id}` | Get Account Activity
[**Get-BetaAccountActivities**](#list-account-activities) | **GET** `/account-activities` | List Account Activities

## get-account-activity
This gets a single account activity by its id.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The account activity id

### Return type
[**CancelableAccountActivity**](../models/cancelable-account-activity)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | An account activity object | CancelableAccountActivity
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The account activity id

# Get Account Activity

try {
    Get-BetaAccountActivity-BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaAccountActivity -BetaId $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaAccountActivity"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## list-account-activities
This gets a collection of account activities that satisfy the given query parameters.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | RequestedFor | **String** |   (optional) | The identity that the activity was requested for. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
  Query | RequestedBy | **String** |   (optional) | The identity that requested the activity. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
  Query | RegardingIdentity | **String** |   (optional) | The specified identity will be either the requester or target of the account activity. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*.
  Query | Type | **String** |   (optional) | The type of account activity.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *gt, lt, ge, le, eq, in, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, isnull, sw*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified**

### Return type
[**CancelableAccountActivity[]**](../models/cancelable-account-activity)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of account activities | CancelableAccountActivity[]
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
$RequestedFor = "MyRequestedFor" # String | The identity that the activity was requested for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
$RequestedBy = "MyRequestedBy" # String | The identity that requested the activity. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
$RegardingIdentity = "MyRegardingIdentity" # String | The specified identity will be either the requester or target of the account activity. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional)
$Type = "MyType" # String | The type of account activity. (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'MyFilters' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *gt, lt, ge, le, eq, in, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, isnull, sw* (optional)
$Sorters = "MySorters" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified** (optional)

# List Account Activities

try {
    Get-BetaAccountActivities
    
    # Below is a request that includes all optional parameters
    # Get-BetaAccountActivities -BetaRequestedFor $RequestedFor -BetaRequestedBy $RequestedBy -BetaRegardingIdentity $RegardingIdentity -BetaType $Type -BetaLimit $Limit -BetaOffset $Offset -BetaCount $Count -BetaFilters $Filters -BetaSorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaAccountActivities"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
