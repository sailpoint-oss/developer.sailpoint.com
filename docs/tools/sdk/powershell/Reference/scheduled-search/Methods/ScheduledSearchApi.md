---
id: scheduled-search
title: ScheduledSearch
pagination_label: ScheduledSearch
sidebar_label: ScheduledSearch
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduledSearch', 'ScheduledSearch'] 
slug: /tools/sdk/powershell/scheduledsearch/methods/scheduled-search
tags: ['SDK', 'Software Development Kit', 'ScheduledSearch', 'ScheduledSearch']
---

# ScheduledSearch
  Use this API to implement scheduled search functionality. 
With scheduled search functionality in place, users can run saved search queries on their tenants on a schedule, and Identity Security Cloud emails them the search results. 
Users can also share these search results with other users by email by adding those users as subscribers, or those users can subscribe themselves. 

One of the greatest benefits of saving searches is the ability to run those searches on a schedule. 
This is essential for organizations to constantly detect any changes to user information or access throughout their tenants and across all their sources. 
For example, the manager Amanda Ross can schedule a saved search &quot;manager.name:amanda.ross AND attributes.location:austin&quot; on a schedule to regularly stay aware of changes with the Austin employees reporting to her.
Identity Security Cloud emails her the search results when the search runs, so she can work on other tasks instead of actively running this search.

In Identity Security Cloud, scheduling a search involves a subscription. 
Users can create a subscription for a saved search and schedule it to run daily, weekly, or monthly (you can only use one schedule option at a time). 
The user can add other identities as subscribers so when the scheduled search runs, the subscribers and the user all receive emails. 

By default, subscriptions exclude detailed results from the emails, for security purposes. 
Including detailed results about user access in an email may expose sensitive information.
However, the subscription creator can choose to include the information in the emails.  

By default, Identity Security Cloud sends emails to the subscribers even when the searches do not return new results. 
However, the subscription creator can choose to suppress these empty emails. 

Users can also subscribe to saved searches that already have existing subscriptions so they receive emails when the searches run. 
A saved search can have up to 10 subscriptions configured at a time. 

The subscription creator can enable, disable, or delete the subscription. 

Refer to [Subscribing to Saved Searches](https://documentation.sailpoint.com/saas/help/search/saved-searches.html#subscribing-to-saved-searches) for more information about scheduling searches and subscribing to them.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-ScheduledSearchV1**](#create-scheduled-search-v1) | **POST** `/scheduled-searches/v1` | Create a new scheduled search
[**Remove-ScheduledSearchV1**](#delete-scheduled-search-v1) | **DELETE** `/scheduled-searches/v1/{id}` | Delete a scheduled search
[**Get-ScheduledSearchV1**](#get-scheduled-search-v1) | **GET** `/scheduled-searches/v1/{id}` | Get a scheduled search
[**Get-ScheduledSearchV1**](#list-scheduled-search-v1) | **GET** `/scheduled-searches/v1` | List scheduled searches
[**Invoke-UnsubscribeScheduledSearchV1**](#unsubscribe-scheduled-search-v1) | **POST** `/scheduled-searches/v1/{id}/unsubscribe` | Unsubscribe a recipient from scheduled search
[**Update-ScheduledSearchV1**](#update-scheduled-search-v1) | **PUT** `/scheduled-searches/v1/{id}` | Update an existing scheduled search


## create-scheduled-search-v1
Creates a new scheduled search.


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-scheduled-search-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | CreateScheduledSearchV1Request | [**CreateScheduledSearchV1Request**](../models/create-scheduled-search-v1-request) | True  | The scheduled search to persist.

### Return type
[**Scheduledsearch**](../models/scheduledsearch)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | The persisted scheduled search. | Scheduledsearch
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListScheduledSearchV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListScheduledSearchV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$CreateScheduledSearchV1Request = @"{"savedSearchId":"9c620e13-cd33-4804-a13d-403bd7bcdbad","schedule":{"type":"DAILY","hours":{"type":"LIST","values":["9"]}},"recipients":[{"type":"IDENTITY","id":"2c9180867624cbd7017642d8c8c81f67"}]}"@

# Create a new scheduled search

try {
    $Result = ConvertFrom-JsonToCreateScheduledSearchV1Request -Json $CreateScheduledSearchV1Request
    New-ScheduledSearchV1 -CreateScheduledSearchV1Request $Result 
    
    # Below is a request that includes all optional parameters
    # New-ScheduledSearchV1 -CreateScheduledSearchV1Request $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-ScheduledSearchV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-scheduled-search-v1
Deletes the specified scheduled search.


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-scheduled-search-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the requested document.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No Content - Indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListScheduledSearchV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListScheduledSearchV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808568c529c60168cca6f90c1313" # String | ID of the requested document.

# Delete a scheduled search

try {
    Remove-ScheduledSearchV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-ScheduledSearchV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-ScheduledSearchV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-scheduled-search-v1
Returns the specified scheduled search.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-scheduled-search-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the requested document.

### Return type
[**Scheduledsearch**](../models/scheduledsearch)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The requested scheduled search. | Scheduledsearch
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListScheduledSearchV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListScheduledSearchV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808568c529c60168cca6f90c1313" # String | ID of the requested document.

# Get a scheduled search

try {
    Get-ScheduledSearchV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-ScheduledSearchV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ScheduledSearchV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-scheduled-search-v1
Returns a list of scheduled searches.


[API Spec](https://developer.sailpoint.com/docs/api/v1/list-scheduled-search-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq*  **savedSearchId**: *eq*

### Return type
[**Scheduledsearch[]**](../models/scheduledsearch)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The list of requested scheduled searches. | Scheduledsearch[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListScheduledSearchV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListScheduledSearchV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'savedSearchId eq "6cc0945d-9eeb-4948-9033-72d066e1153e"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq*  **savedSearchId**: *eq* (optional)

# List scheduled searches

try {
    Get-ScheduledSearchV1 
    
    # Below is a request that includes all optional parameters
    # Get-ScheduledSearchV1 -Offset $Offset -Limit $Limit -Count $Count -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ScheduledSearchV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## unsubscribe-scheduled-search-v1
Unsubscribes a recipient from the specified scheduled search.


[API Spec](https://developer.sailpoint.com/docs/api/v1/unsubscribe-scheduled-search-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the requested document.
 Body  | Typedreference | [**Typedreference**](../models/typedreference) | True  | The recipient to be removed from the scheduled search. 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No Content - Indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808568c529c60168cca6f90c1313" # String | ID of the requested document.
$Typedreference = @""@

# Unsubscribe a recipient from scheduled search

try {
    $Result = ConvertFrom-JsonToTypedreference -Json $Typedreference
    Invoke-UnsubscribeScheduledSearchV1 -Id $Id -Typedreference $Result 
    
    # Below is a request that includes all optional parameters
    # Invoke-UnsubscribeScheduledSearchV1 -Id $Id -Typedreference $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-UnsubscribeScheduledSearchV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-scheduled-search-v1
Updates an existing scheduled search.


[API Spec](https://developer.sailpoint.com/docs/api/v1/update-scheduled-search-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the requested document.
 Body  | Scheduledsearch | [**Scheduledsearch**](../models/scheduledsearch) | True  | The scheduled search to persist.

### Return type
[**Scheduledsearch**](../models/scheduledsearch)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The persisted scheduled search. | Scheduledsearch
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListScheduledSearchV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListScheduledSearchV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808568c529c60168cca6f90c1313" # String | ID of the requested document.
$Scheduledsearch = @""@

# Update an existing scheduled search

try {
    $Result = ConvertFrom-JsonToScheduledsearch -Json $Scheduledsearch
    Update-ScheduledSearchV1 -Id $Id -Scheduledsearch $Result 
    
    # Below is a request that includes all optional parameters
    # Update-ScheduledSearchV1 -Id $Id -Scheduledsearch $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-ScheduledSearchV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
