---
id: saved-search
title: SavedSearch
pagination_label: SavedSearch
sidebar_label: SavedSearch
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SavedSearch', 'SavedSearch'] 
slug: /tools/sdk/powershell/savedsearch/methods/saved-search
tags: ['SDK', 'Software Development Kit', 'SavedSearch', 'SavedSearch']
---

# SavedSearch
  Use this API to implement saved search functionality. 
With saved search functionality in place, users can save search queries and then view those saved searches, as well as rerun them. 

Search queries in Identity Security Cloud can grow very long and specific, which can make reconstructing them difficult or tedious, so it can be especially helpful to save search queries. 
It also opens the possibility to configure Identity Security Cloud to run the saved queries on a schedule, which is essential to detecting user information and access changes throughout an organization&#39;s tenant and across all its sources. 
Refer to [Scheduled Search](https://developer.sailpoint.com/docs/api/v2025/scheduled-search/) for more information about running saved searches on a schedule. 

In Identity Security Cloud, users can save searches under a name, and then they can access that saved search and run it again when they want. 

Refer to [Managing Saved Searches](https://documentation.sailpoint.com/saas/help/search/saved-searches.html) for more information about saving searches and using them.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-SavedSearchV1**](#create-saved-search-v1) | **POST** `/saved-searches/v1` | Create a saved search
[**Remove-SavedSearchV1**](#delete-saved-search-v1) | **DELETE** `/saved-searches/v1/{id}` | Delete document by id
[**Invoke-ExecuteSavedSearchV1**](#execute-saved-search-v1) | **POST** `/saved-searches/v1/{id}/execute` | Execute a saved search by id
[**Get-SavedSearchV1**](#get-saved-search-v1) | **GET** `/saved-searches/v1/{id}` | Return saved search by id
[**Get-SavedSearchesV1**](#list-saved-searches-v1) | **GET** `/saved-searches/v1` | A list of saved searches
[**Send-SavedSearchV1**](#put-saved-search-v1) | **PUT** `/saved-searches/v1/{id}` | Updates an existing saved search 


## create-saved-search-v1
Creates a new saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-saved-search-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | CreateSavedSearchV1Request | [**CreateSavedSearchV1Request**](../models/create-saved-search-v1-request) | True  | The saved search to persist.

### Return type
[**Savedsearch**](../models/savedsearch)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | The persisted saved search. | Savedsearch
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSavedSearchesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSavedSearchesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$CreateSavedSearchV1Request = @""@

# Create a saved search

try {
    $Result = ConvertFrom-JsonToCreateSavedSearchV1Request -Json $CreateSavedSearchV1Request
    New-SavedSearchV1 -CreateSavedSearchV1Request $Result 
    
    # Below is a request that includes all optional parameters
    # New-SavedSearchV1 -CreateSavedSearchV1Request $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-SavedSearchV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-saved-search-v1
Deletes the specified saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-saved-search-v1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSavedSearchesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSavedSearchesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808568c529c60168cca6f90c1313" # String | ID of the requested document.

# Delete document by id

try {
    Remove-SavedSearchV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-SavedSearchV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-SavedSearchV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## execute-saved-search-v1
Executes the specified saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v1/execute-saved-search-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the requested document.
 Body  | Searcharguments | [**Searcharguments**](../models/searcharguments) | True  | When saved search execution is triggered by a scheduled search, *scheduleId* will specify the ID of the triggering scheduled search.  If *scheduleId* is not specified (when execution is triggered by a UI test), the *owner* and *recipients* arguments must be provided. 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSavedSearchesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSavedSearchesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808568c529c60168cca6f90c1313" # String | ID of the requested document.
$Searcharguments = @""@

# Execute a saved search by id

try {
    $Result = ConvertFrom-JsonToSearcharguments -Json $Searcharguments
    Invoke-ExecuteSavedSearchV1 -Id $Id -Searcharguments $Result 
    
    # Below is a request that includes all optional parameters
    # Invoke-ExecuteSavedSearchV1 -Id $Id -Searcharguments $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-ExecuteSavedSearchV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-saved-search-v1
Returns the specified saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-saved-search-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the requested document.

### Return type
[**Savedsearch**](../models/savedsearch)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The requested saved search. | Savedsearch
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSavedSearchesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSavedSearchesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808568c529c60168cca6f90c1313" # String | ID of the requested document.

# Return saved search by id

try {
    Get-SavedSearchV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-SavedSearchV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SavedSearchV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-saved-searches-v1
Returns a list of saved searches.


[API Spec](https://developer.sailpoint.com/docs/api/v1/list-saved-searches-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq*

### Return type
[**Savedsearch[]**](../models/savedsearch)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The list of requested saved searches. | Savedsearch[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSavedSearchesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSavedSearchesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'owner.id eq "7a724640-0c17-4ce9-a8c3-4a89738459c8"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq* (optional)

# A list of saved searches

try {
    Get-SavedSearchesV1 
    
    # Below is a request that includes all optional parameters
    # Get-SavedSearchesV1 -Offset $Offset -Limit $Limit -Count $Count -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SavedSearchesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-saved-search-v1
Updates an existing saved search. 

>**NOTE: You cannot update the `owner` of the saved search.**


[API Spec](https://developer.sailpoint.com/docs/api/v1/put-saved-search-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the requested document.
 Body  | Savedsearch | [**Savedsearch**](../models/savedsearch) | True  | The saved search to persist.

### Return type
[**Savedsearch**](../models/savedsearch)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The persisted saved search. | Savedsearch
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSavedSearchesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSavedSearchesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808568c529c60168cca6f90c1313" # String | ID of the requested document.
$Savedsearch = @""@

# Updates an existing saved search 

try {
    $Result = ConvertFrom-JsonToSavedsearch -Json $Savedsearch
    Send-SavedSearchV1 -Id $Id -Savedsearch $Result 
    
    # Below is a request that includes all optional parameters
    # Send-SavedSearchV1 -Id $Id -Savedsearch $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-SavedSearchV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
