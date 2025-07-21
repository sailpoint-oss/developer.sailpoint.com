---
id: v2025-custom-user-levels
title: CustomUserLevels
pagination_label: CustomUserLevels
sidebar_label: CustomUserLevels
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CustomUserLevels', 'V2025CustomUserLevels'] 
slug: /tools/sdk/powershell/v2025/methods/custom-user-levels
tags: ['SDK', 'Software Development Kit', 'CustomUserLevels', 'V2025CustomUserLevels']
---

# CustomUserLevels
  Use this API to implement custom user level functionality.
With this functionality in place, administrators can create custom user levels and configure them for use throughout Identity Security Cloud.

Custom user levels allow administrators to create custom user levels that can be used to control access to Identity Security Cloud features and APIs.

Refer to [User Levels](https://documentation.sailpoint.com/saas/help/common/users/index.html) for more information about User Levels.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2025CustomUserLevel**](#create-custom-user-level) | **POST** `/authorization/custom-user-levels` | Create a custom user level
[**Remove-V2025UserLevel**](#delete-user-level) | **DELETE** `/authorization/custom-user-levels/{id}` | Delete a user level
[**Get-V2025UserLevel**](#get-user-level) | **GET** `/authorization/custom-user-levels/{id}` | Retrieve a user level
[**Get-V2025AllAuthorizationRightSets**](#list-all-authorization-right-sets) | **GET** `/authorization/authorization-assignable-right-sets` | List all uiAssignable right sets
[**Get-V2025UserLevels**](#list-user-levels) | **GET** `/authorization/custom-user-levels` | List user levels
[**Publish-V2025CustomUserLevel**](#publish-custom-user-level) | **POST** `/authorization/custom-user-levels/{id}/publish` | Publish a custom user level
[**Update-V2025UserLevel**](#update-user-level) | **PATCH** `/authorization/custom-user-levels/{id}` | Update a user level


## create-custom-user-level
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Creates a new custom user level for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-custom-user-level)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | UserLevelRequest | [**UserLevelRequest**](../models/user-level-request) | True  | Payload containing the details of the user level to be created.

### Return type
[**UserLevelSummaryDTO**](../models/user-level-summary-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The user level summary. | UserLevelSummaryDTO
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$UserLevelRequest = @"{
  "owner" : {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "rightSets" : [ "idn:ui-right-set-list-read-example", "idn:ui-right-set-write-example" ],
  "name" : "Custom User Level Name",
  "description" : "This is a description of the custom user level."
}"@

# Create a custom user level

try {
    $Result = ConvertFrom-JsonToUserLevelRequest -Json $UserLevelRequest
    New-V2025CustomUserLevel -XSailPointExperimental $XSailPointExperimental -UserLevelRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2025CustomUserLevel -XSailPointExperimental $XSailPointExperimental -UserLevelRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2025CustomUserLevel"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-user-level
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Deletes a specific user level by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-user-level)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | The unique identifier of the user level.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "6e110911-5984-491b-be74-2707980a46a7" # String | The unique identifier of the user level.

# Delete a user level

try {
    Remove-V2025UserLevel -XSailPointExperimental $XSailPointExperimental -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2025UserLevel -XSailPointExperimental $XSailPointExperimental -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2025UserLevel"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-user-level
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Fetches the details of a specific user level by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-user-level)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | The unique identifier of the user level.

### Return type
[**UserLevelSummaryDTO**](../models/user-level-summary-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Successfully retrieved the user level details. | UserLevelSummaryDTO
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "6e110911-5984-491b-be74-2707980a46a7" # String | The unique identifier of the user level.

# Retrieve a user level

try {
    Get-V2025UserLevel -XSailPointExperimental $XSailPointExperimental -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2025UserLevel -XSailPointExperimental $XSailPointExperimental -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025UserLevel"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-all-authorization-right-sets
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieves a list of authorization assignable right sets for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-all-authorization-right-sets)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **category**: *eq*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, category**
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**HierarchicalRightSet[]**](../models/hierarchical-right-set)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Successfully retrieved the list of authorization assignable right sets. | HierarchicalRightSet[]
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Filters = 'category eq "identity"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **category**: *eq* (optional)
$Sorters = "name, -id, -category" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, category** (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

# List all uiAssignable right sets

try {
    Get-V2025AllAuthorizationRightSets -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025AllAuthorizationRightSets -XSailPointExperimental $XSailPointExperimental -Filters $Filters -Sorters $Sorters -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025AllAuthorizationRightSets"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-user-levels
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieves a list of user levels for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-user-levels)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | DetailLevel | **String** |   (optional) | Specifies the level of detail for the user levels.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *co*    **owner**: *co*    **status**: *eq*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created**
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**UserLevelSummaryDTO[]**](../models/user-level-summary-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Successfully retrieved the list of user levels. | UserLevelSummaryDTO[]
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$DetailLevel = "FULL" # String | Specifies the level of detail for the user levels. (optional)
$Filters = 'name co "identity", owner co "john", status eq "active"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *co*    **owner**: *co*    **status**: *eq* (optional)
$Sorters = "name, -created" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created** (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

# List user levels

try {
    Get-V2025UserLevels -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025UserLevels -XSailPointExperimental $XSailPointExperimental -DetailLevel $DetailLevel -Filters $Filters -Sorters $Sorters -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025UserLevels"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## publish-custom-user-level
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Publishes a custom user level for the tenant, making it active and available.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/publish-custom-user-level)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | The unique identifier of the user level to publish.

### Return type
[**UserLevelPublishSummary**](../models/user-level-publish-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The publish status summary for current user level. | UserLevelPublishSummary
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "6e110911-5984-491b-be74-2707980a46a7" # String | The unique identifier of the user level to publish.

# Publish a custom user level

try {
    Publish-V2025CustomUserLevel -XSailPointExperimental $XSailPointExperimental -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Publish-V2025CustomUserLevel -XSailPointExperimental $XSailPointExperimental -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Publish-V2025CustomUserLevel"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-user-level
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Updates the details of a specific user level using JSON Patch.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-user-level)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | The unique identifier of the user level.
 Body  | JsonPatch | [**JsonPatch**](../models/json-patch) | True  | JSON Patch payload for updating the user level.

### Return type
[**UserLevelSummaryDTO**](../models/user-level-summary-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Successfully updated the user level. | UserLevelSummaryDTO
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "6e110911-5984-491b-be74-2707980a46a7" # String | The unique identifier of the user level.
$JsonPatch = @"{
  "operations" : [ {
    "op" : "replace",
    "path" : "/description",
    "value" : "New description"
  }, {
    "op" : "replace",
    "path" : "/description",
    "value" : "New description"
  } ]
}"@

# Update a user level

try {
    $Result = ConvertFrom-JsonToJsonPatch -Json $JsonPatch
    Update-V2025UserLevel -XSailPointExperimental $XSailPointExperimental -Id $Id -JsonPatch $Result 
    
    # Below is a request that includes all optional parameters
    # Update-V2025UserLevel -XSailPointExperimental $XSailPointExperimental -Id $Id -JsonPatch $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2025UserLevel"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
