---
id: beta-icons
title: Icons
pagination_label: Icons
sidebar_label: Icons
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Icons', 'BetaIcons'] 
slug: /tools/sdk/powershell/beta/methods/icons
tags: ['SDK', 'Software Development Kit', 'Icons', 'BetaIcons']
---


# Icons
  Use this API to implement functionality related to object icons (application icons for example). 
With this functionality in place, administrators can set or remove an icon for specific object type for use throughout Identity Security Cloud.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Remove-BetaIcon**](#delete-icon) | **DELETE** `/icons/{objectType}/{objectId}` | Delete an icon
[**Set-BetaIcon**](#set-icon) | **PUT** `/icons/{objectType}/{objectId}` | Update an icon


## delete-icon

This API endpoint delete an icon by object type and object id. A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ObjectType | **String** | True  | Object type. Available options ['application']
Path   | ObjectId | **String** | True  | Object id.

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
$ObjectType = "application" # String | Object type. Available options ['application']
$ObjectId = "a291e870-48c3-4953-b656-fb5ce2a93169" # String | Object id.
# Delete an icon
try {
    Remove-BetaIcon-BetaObjectType $ObjectType -BetaObjectId $ObjectId 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaIcon -BetaObjectType $ObjectType -BetaObjectId $ObjectId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaIcon"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## set-icon

This API endpoint updates an icon by object type and object id. A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ObjectType | **String** | True  | Object type. Available options ['application']
Path   | ObjectId | **String** | True  | Object id.
   | Image | **System.IO.FileInfo** | True  | file with icon. Allowed mime-types ['image/png', 'image/jpeg']

### Return type

[**SetIcon200Response**](../models/set-icon200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Icon updated | SetIcon200Response
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$ObjectType = "application" # String | Object type. Available options ['application']
$ObjectId = "a291e870-48c3-4953-b656-fb5ce2a93169" # String | Object id.
$Image =  # System.IO.FileInfo | file with icon. Allowed mime-types ['image/png', 'image/jpeg']
# Update an icon
try {
    Set-BetaIcon-BetaObjectType $ObjectType -BetaObjectId $ObjectId -BetaImage $Image 
    
    # Below is a request that includes all optional parameters
    # Set-BetaIcon -BetaObjectType $ObjectType -BetaObjectId $ObjectId -BetaImage $Image  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-BetaIcon"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


