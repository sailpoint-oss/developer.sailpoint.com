---
id: v2024-scheduled-search
title: ScheduledSearch
pagination_label: ScheduledSearch
sidebar_label: ScheduledSearch
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduledSearch', 'V2024ScheduledSearch'] 
slug: /tools/sdk/powershell/v2024/methods/scheduled-search
tags: ['SDK', 'Software Development Kit', 'ScheduledSearch', 'V2024ScheduledSearch']
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
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2024ScheduledSearch**](#create-scheduled-search) | **POST** `/scheduled-searches` | Create a new scheduled search
[**Remove-V2024ScheduledSearch**](#delete-scheduled-search) | **DELETE** `/scheduled-searches/{id}` | Delete a Scheduled Search
[**Get-V2024ScheduledSearch**](#get-scheduled-search) | **GET** `/scheduled-searches/{id}` | Get a Scheduled Search
[**Get-V2024ScheduledSearch**](#list-scheduled-search) | **GET** `/scheduled-searches` | List scheduled searches
[**Invoke-V2024UnsubscribeScheduledSearch**](#unsubscribe-scheduled-search) | **POST** `/scheduled-searches/{id}/unsubscribe` | Unsubscribe a recipient from Scheduled Search
[**Update-V2024ScheduledSearch**](#update-scheduled-search) | **PUT** `/scheduled-searches/{id}` | Update an existing Scheduled Search


## create-scheduled-search

Creates a new scheduled search.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | CreateScheduledSearchRequest | [**CreateScheduledSearchRequest**](../models/create-scheduled-search-request) | True  | The scheduled search to persist.

### Return type

[**ScheduledSearch**](../models/scheduled-search)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | The persisted scheduled search. | ScheduledSearch
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$CreateScheduledSearchRequest = @"{savedSearchId=9c620e13-cd33-4804-a13d-403bd7bcdbad, schedule={type=DAILY, hours={type=LIST, values=[9]}}, recipients=[{type=IDENTITY, id=2c9180867624cbd7017642d8c8c81f67}]}"@
# Create a new scheduled search
try {
    $Result = ConvertFrom-JsonToCreateScheduledSearchRequest -Json $CreateScheduledSearchRequest
    New-V2024ScheduledSearch-V2024CreateScheduledSearchRequest $Result
    
    # Below is a request that includes all optional parameters
    # New-V2024ScheduledSearch -V2024CreateScheduledSearchRequest $CreateScheduledSearchRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024ScheduledSearch"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-scheduled-search

Deletes the specified scheduled search.


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
# Delete a Scheduled Search
try {
    Remove-V2024ScheduledSearch-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024ScheduledSearch -V2024Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024ScheduledSearch"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-scheduled-search

Returns the specified scheduled search.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the requested document.

### Return type

[**ScheduledSearch**](../models/scheduled-search)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The requested scheduled search. | ScheduledSearch
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
# Get a Scheduled Search
try {
    Get-V2024ScheduledSearch-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024ScheduledSearch -V2024Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024ScheduledSearch"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## list-scheduled-search

Returns a list of scheduled searches.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq*  **savedSearchId**: *eq*

### Return type

[**ScheduledSearch[]**](../models/scheduled-search)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The list of requested scheduled searches. | ScheduledSearch[]
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
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'savedSearchId eq "6cc0945d-9eeb-4948-9033-72d066e1153e"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq*  **savedSearchId**: *eq* (optional)
# List scheduled searches
try {
    Get-V2024ScheduledSearch
    
    # Below is a request that includes all optional parameters
    # Get-V2024ScheduledSearch -V2024Offset $Offset -V2024Limit $Limit -V2024Count $Count -V2024Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024ScheduledSearch"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## unsubscribe-scheduled-search

Unsubscribes a recipient from the specified scheduled search.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the requested document.
 Body  | TypedReference | [**TypedReference**](../models/typed-reference) | True  | The recipient to be removed from the scheduled search. 

### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No Content - Indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808568c529c60168cca6f90c1313" # String | ID of the requested document.
$TypedReference = @"{
  "id" : "2c91808568c529c60168cca6f90c1313",
  "type" : "IDENTITY"
}"@
# Unsubscribe a recipient from Scheduled Search
try {
    $Result = ConvertFrom-JsonToTypedReference -Json $TypedReference
    Invoke-V2024UnsubscribeScheduledSearch-V2024Id $Id -V2024TypedReference $Result
    
    # Below is a request that includes all optional parameters
    # Invoke-V2024UnsubscribeScheduledSearch -V2024Id $Id -V2024TypedReference $TypedReference  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-V2024UnsubscribeScheduledSearch"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## update-scheduled-search

Updates an existing scheduled search.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the requested document.
 Body  | ScheduledSearch | [**ScheduledSearch**](../models/scheduled-search) | True  | The scheduled search to persist.

### Return type

[**ScheduledSearch**](../models/scheduled-search)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The persisted scheduled search. | ScheduledSearch
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808568c529c60168cca6f90c1313" # String | ID of the requested document.
$ScheduledSearch = @"{
  "owner" : {
    "id" : "2c9180867624cbd7017642d8c8c81f67",
    "type" : "IDENTITY"
  },
  "displayQueryDetails" : false,
  "created" : "",
  "description" : "Daily disabled accounts",
  "ownerId" : "2c9180867624cbd7017642d8c8c81f67",
  "enabled" : false,
  "schedule" : {
    "hours" : {
      "accountMatchConfig" : {
        "matchExpression" : {
          "and" : true,
          "matchTerms" : [ {
            "name" : "",
            "value" : "",
            "container" : true,
            "and" : false,
            "children" : [ {
              "name" : "businessCategory",
              "value" : "Service",
              "op" : "eq",
              "container" : false,
              "and" : false
            } ]
          } ]
        }
      },
      "applicationId" : "2c91808874ff91550175097daaec161c\""
    },
    "months" : {
      "accountMatchConfig" : {
        "matchExpression" : {
          "and" : true,
          "matchTerms" : [ {
            "name" : "",
            "value" : "",
            "container" : true,
            "and" : false,
            "children" : [ {
              "name" : "businessCategory",
              "value" : "Service",
              "op" : "eq",
              "container" : false,
              "and" : false
            } ]
          } ]
        }
      },
      "applicationId" : "2c91808874ff91550175097daaec161c\""
    },
    "timeZoneId" : "America/Chicago",
    "days" : {
      "accountMatchConfig" : {
        "matchExpression" : {
          "and" : true,
          "matchTerms" : [ {
            "name" : "",
            "value" : "",
            "container" : true,
            "and" : false,
            "children" : [ {
              "name" : "businessCategory",
              "value" : "Service",
              "op" : "eq",
              "container" : false,
              "and" : false
            } ]
          } ]
        }
      },
      "applicationId" : "2c91808874ff91550175097daaec161c\""
    },
    "expiration" : "2018-06-25T20:22:28.104Z",
    "type" : "WEEKLY"
  },
  "recipients" : [ {
    "id" : "2c9180867624cbd7017642d8c8c81f67",
    "type" : "IDENTITY"
  }, {
    "id" : "2c9180867624cbd7017642d8c8c81f67",
    "type" : "IDENTITY"
  } ],
  "savedSearchId" : "554f1511-f0a1-4744-ab14-599514d3e57c",
  "name" : "Daily disabled accounts",
  "modified" : "",
  "id" : "0de46054-fe90-434a-b84e-c6b3359d0c64",
  "emailEmptyResults" : false
}"@
# Update an existing Scheduled Search
try {
    $Result = ConvertFrom-JsonToScheduledSearch -Json $ScheduledSearch
    Update-V2024ScheduledSearch-V2024Id $Id -V2024ScheduledSearch $Result
    
    # Below is a request that includes all optional parameters
    # Update-V2024ScheduledSearch -V2024Id $Id -V2024ScheduledSearch $ScheduledSearch  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024ScheduledSearch"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


