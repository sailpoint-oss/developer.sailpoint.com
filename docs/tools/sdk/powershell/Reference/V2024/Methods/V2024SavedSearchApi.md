---
id: v2024-saved-search
title: SavedSearch
pagination_label: SavedSearch
sidebar_label: SavedSearch
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SavedSearch', 'V2024SavedSearch'] 
slug: /tools/sdk/powershell/v2024/methods/saved-search
tags: ['SDK', 'Software Development Kit', 'SavedSearch', 'V2024SavedSearch']
---

# SavedSearch
  Use this API to implement saved search functionality. 
With saved search functionality in place, users can save search queries and then view those saved searches, as well as rerun them. 

Search queries in Identity Security Cloud can grow very long and specific, which can make reconstructing them difficult or tedious, so it can be especially helpful to save search queries. 
It also opens the possibility to configure Identity Security Cloud to run the saved queries on a schedule, which is essential to detecting user information and access changes throughout an organization&#39;s tenant and across all its sources. 
Refer to [Scheduled Search](https://developer.sailpoint.com/docs/api/v2024/scheduled-search/) for more information about running saved searches on a schedule. 

In Identity Security Cloud, users can save searches under a name, and then they can access that saved search and run it again when they want. 

Refer to [Managing Saved Searches](https://documentation.sailpoint.com/saas/help/search/saved-searches.html) for more information about saving searches and using them.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2024SavedSearch**](#create-saved-search) | **POST** `/saved-searches` | Create a saved search
[**Remove-V2024SavedSearch**](#delete-saved-search) | **DELETE** `/saved-searches/{id}` | Delete document by id
[**Invoke-V2024ExecuteSavedSearch**](#execute-saved-search) | **POST** `/saved-searches/{id}/execute` | Execute a saved search by id
[**Get-V2024SavedSearch**](#get-saved-search) | **GET** `/saved-searches/{id}` | Return saved search by id
[**Get-V2024SavedSearches**](#list-saved-searches) | **GET** `/saved-searches` | A list of saved searches
[**Send-V2024SavedSearch**](#put-saved-search) | **PUT** `/saved-searches/{id}` | Updates an existing saved search 


## create-saved-search
Creates a new saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-saved-search)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | CreateSavedSearchRequest | [**CreateSavedSearchRequest**](../models/create-saved-search-request) | True  | The saved search to persist.

### Return type
[**SavedSearch**](../models/saved-search)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | The persisted saved search. | SavedSearch
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$CreateSavedSearchRequest = @""@

# Create a saved search

try {
    $Result = ConvertFrom-JsonToCreateSavedSearchRequest -Json $CreateSavedSearchRequest
    New-V2024SavedSearch -CreateSavedSearchRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2024SavedSearch -CreateSavedSearchRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024SavedSearch"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-saved-search
Deletes the specified saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-saved-search)

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808568c529c60168cca6f90c1313" # String | ID of the requested document.

# Delete document by id

try {
    Remove-V2024SavedSearch -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024SavedSearch -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024SavedSearch"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## execute-saved-search
Executes the specified saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v2024/execute-saved-search)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the requested document.
 Body  | SearchArguments | [**SearchArguments**](../models/search-arguments) | True  | When saved search execution is triggered by a scheduled search, *scheduleId* will specify the ID of the triggering scheduled search.  If *scheduleId* is not specified (when execution is triggered by a UI test), the *owner* and *recipients* arguments must be provided. 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | 
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808568c529c60168cca6f90c1313" # String | ID of the requested document.
$SearchArguments = @"{
  "owner" : "",
  "recipients" : [ {
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  }, {
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  } ],
  "scheduleId" : "7a724640-0c17-4ce9-a8c3-4a89738459c8"
}"@

# Execute a saved search by id

try {
    $Result = ConvertFrom-JsonToSearchArguments -Json $SearchArguments
    Invoke-V2024ExecuteSavedSearch -Id $Id -SearchArguments $Result 
    
    # Below is a request that includes all optional parameters
    # Invoke-V2024ExecuteSavedSearch -Id $Id -SearchArguments $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-V2024ExecuteSavedSearch"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-saved-search
Returns the specified saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-saved-search)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the requested document.

### Return type
[**SavedSearch**](../models/saved-search)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The requested saved search. | SavedSearch
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808568c529c60168cca6f90c1313" # String | ID of the requested document.

# Return saved search by id

try {
    Get-V2024SavedSearch -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024SavedSearch -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024SavedSearch"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-saved-searches
Returns a list of saved searches.


[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-saved-searches)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq*

### Return type
[**SavedSearch[]**](../models/saved-search)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The list of requested saved searches. | SavedSearch[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

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
    Get-V2024SavedSearches 
    
    # Below is a request that includes all optional parameters
    # Get-V2024SavedSearches -Offset $Offset -Limit $Limit -Count $Count -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024SavedSearches"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-saved-search
Updates an existing saved search. 

>**NOTE: You cannot update the `owner` of the saved search.**


[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-saved-search)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the requested document.
 Body  | SavedSearch | [**SavedSearch**](../models/saved-search) | True  | The saved search to persist.

### Return type
[**SavedSearch**](../models/saved-search)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The persisted saved search. | SavedSearch
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808568c529c60168cca6f90c1313" # String | ID of the requested document.
$SavedSearch = @"{
  "owner" : {
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "created" : "2018-06-25T20:22:28.104Z",
  "columns" : {
    "identity" : [ {
      "field" : "displayName",
      "header" : "Display Name"
    }, {
      "field" : "e-mail",
      "header" : "Work Email"
    } ]
  },
  "query" : "@accounts(disabled:true)",
  "description" : "Disabled accounts",
  "orderBy" : {
    "identity" : [ "lastName", "firstName" ],
    "role" : [ "name" ]
  },
  "sort" : [ "displayName" ],
  "filters" : {
    "terms" : [ "account_count", "account_count" ],
    "range" : {
      "lower" : {
        "inclusive" : false,
        "value" : "1"
      },
      "upper" : {
        "inclusive" : false,
        "value" : "1"
      }
    },
    "exclude" : false,
    "type" : "RANGE"
  },
  "ownerId" : "2c91808568c529c60168cca6f90c1313",
  "indices" : [ "identities" ],
  "public" : false,
  "name" : "Disabled accounts",
  "modified" : "2018-06-25T20:22:28.104Z",
  "id" : "0de46054-fe90-434a-b84e-c6b3359d0c64",
  "fields" : [ "disabled" ]
}"@

# Updates an existing saved search 

try {
    $Result = ConvertFrom-JsonToSavedSearch -Json $SavedSearch
    Send-V2024SavedSearch -Id $Id -SavedSearch $Result 
    
    # Below is a request that includes all optional parameters
    # Send-V2024SavedSearch -Id $Id -SavedSearch $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-V2024SavedSearch"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
