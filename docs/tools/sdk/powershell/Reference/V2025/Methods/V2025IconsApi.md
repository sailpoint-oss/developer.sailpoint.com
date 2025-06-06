---
id: v2025-icons
title: Icons
pagination_label: Icons
sidebar_label: Icons
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Icons', 'V2025Icons'] 
slug: /tools/sdk/powershell/v2025/methods/icons
tags: ['SDK', 'Software Development Kit', 'Icons', 'V2025Icons']
---

# Icons
  Use this API to implement functionality related to object icons (application icons for example). 
With this functionality in place, administrators can set or remove an icon for specific object type for use throughout Identity Security Cloud.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Remove-V2025Icon**](#delete-icon) | **DELETE** `/icons/{objectType}/{objectId}` | Delete an icon
[**Set-V2025Icon**](#set-icon) | **PUT** `/icons/{objectType}/{objectId}` | Update an icon


## delete-icon
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API endpoint delete an icon by object type and object id. A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-icon)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ObjectType | **String** | True  | Object type. Available options ['application']
Path   | ObjectId | **String** | True  | Object id.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

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
$ObjectType = "application" # String | Object type. Available options ['application']
$ObjectId = "a291e870-48c3-4953-b656-fb5ce2a93169" # String | Object id.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Delete an icon

try {
    Remove-V2025Icon -ObjectType $ObjectType -ObjectId $ObjectId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-V2025Icon -ObjectType $ObjectType -ObjectId $ObjectId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2025Icon"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-icon
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API endpoint updates an icon by object type and object id. A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/set-icon)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ObjectType | **String** | True  | Object type. Available options ['application']
Path   | ObjectId | **String** | True  | Object id.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
   | Image | **System.IO.FileInfo** | True  | file with icon. Allowed mime-types ['image/png', 'image/jpeg']

### Return type
[**SetIcon200Response**](../models/set-icon200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Icon updated | SetIcon200Response
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$ObjectType = "application" # String | Object type. Available options ['application']
$ObjectId = "a291e870-48c3-4953-b656-fb5ce2a93169" # String | Object id.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Image =  # System.IO.FileInfo | file with icon. Allowed mime-types ['image/png', 'image/jpeg']

# Update an icon

try {
    Set-V2025Icon -ObjectType $ObjectType -ObjectId $ObjectId -XSailPointExperimental $XSailPointExperimental -Image $Image 
    
    # Below is a request that includes all optional parameters
    # Set-V2025Icon -ObjectType $ObjectType -ObjectId $ObjectId -XSailPointExperimental $XSailPointExperimental -Image $Image  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-V2025Icon"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
