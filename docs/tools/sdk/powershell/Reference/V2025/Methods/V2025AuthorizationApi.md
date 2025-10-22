---
id: v2025-authorization
title: Authorization
pagination_label: Authorization
sidebar_label: Authorization
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Authorization', 'V2025Authorization'] 
slug: /tools/sdk/powershell/v2025/methods/authorization
tags: ['SDK', 'Software Development Kit', 'Authorization', 'V2025Authorization']
---

# Authorization
  Use this API to gather information related to the identities associated with a user level.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-V2025UserLevelCounts**](#list-user-level-counts) | **POST** `/authorization/user-levels/get-identity-count` | Count user levels identities
[**Get-V2025UserLevelIdentities**](#list-user-level-identities) | **GET** `/authorization/user-levels/{id}/identities` | List user level identities


## list-user-level-counts
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List of user levels along with the number of identities associated to it.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-user-level-counts)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | RequestBody | **[]String** | True  | List of user level ids. Max 50 identifiers can be passed in a single request.

### Return type
[**AuthUserLevelsIdentityCount[]**](../models/auth-user-levels-identity-count)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of user levels along with the number of identities associated to it. | AuthUserLevelsIdentityCount[]
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
$RequestBody = "MyRequestBody" # String[] | List of user level ids. Max 50 identifiers can be passed in a single request.
 $RequestBody = @""@ # String[] | List of user level ids. Max 50 identifiers can be passed in a single request.
 

# Count user levels identities

try {
    $Result = ConvertFrom-V2025JsonToRequestBody -Json $RequestBody
    Get-V2025UserLevelCounts -XSailPointExperimental $XSailPointExperimental -RequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Get-V2025UserLevelCounts -XSailPointExperimental $XSailPointExperimental -RequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025UserLevelCounts"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-user-level-identities
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List of identities associated with a user level.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-user-level-identities)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | The unique identifier of the user level.
  Query | Count | **Boolean** |   (optional) (default to $false) | If true, X-Total-Count header with the the total number of identities for this user level will be included in the response.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName**
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**AuthUserSlimResponse[]**](../models/auth-user-slim-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of identities associated with a user level. | AuthUserSlimResponse[]
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
$Id = "idn:access-request-administrator" # String | The unique identifier of the user level.
$Count = $true # Boolean | If true, X-Total-Count header with the the total number of identities for this user level will be included in the response. (optional) (default to $false)
$Sorters = "displayName" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName** (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

# List user level identities

try {
    Get-V2025UserLevelIdentities -XSailPointExperimental $XSailPointExperimental -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2025UserLevelIdentities -XSailPointExperimental $XSailPointExperimental -Id $Id -Count $Count -Sorters $Sorters -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025UserLevelIdentities"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
