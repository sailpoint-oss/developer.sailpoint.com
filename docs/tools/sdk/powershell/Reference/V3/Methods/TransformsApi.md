---
id: transforms
title: Transforms
pagination_label: Transforms
sidebar_label: Transforms
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Transforms', 'Transforms'] 
slug: /tools/sdk/powershell/v3/methods/transforms
tags: ['SDK', 'Software Development Kit', 'Transforms', 'Transforms']
---


# Transforms
  The purpose of this API is to expose functionality for the manipulation of Transform objects.
Transforms are a form of configurable objects which define an easy way to manipulate attribute data without having
to write code. These endpoints don&#39;t require API calls to other resources, audit service is used for keeping track
of which users have made changes to the Transforms.

Refer to [Transforms](https://developer.sailpoint.com/docs/extensibility/transforms/) for more information about transforms.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-Transform**](#create-transform) | **POST** `/transforms` | Create transform
[**Remove-Transform**](#delete-transform) | **DELETE** `/transforms/{id}` | Delete a transform
[**Get-Transform**](#get-transform) | **GET** `/transforms/{id}` | Transform by ID
[**Get-Transforms**](#list-transforms) | **GET** `/transforms` | List transforms
[**Update-Transform**](#update-transform) | **PUT** `/transforms/{id}` | Update a transform


## create-transform

Creates a new transform object immediately. By default, the internal flag is set to false to indicate that this is a custom transform. Only SailPoint employees have the ability to create a transform with internal set to true. Newly created Transforms can be used in the Identity Profile mappings within the UI.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Transform | [**Transform**](../models/transform) | True  | The transform to be created.

### Return type

[**TransformRead**](../models/transform-read)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Indicates the transform was successfully created and returns its representation. | TransformRead
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
$Transform = @"{
  "name" : "Timestamp To Date",
  "attributes" : {
    "input" : {
      "type" : "accountAttribute",
      "attributes" : {
        "attributeName" : "first_name",
        "sourceName" : "Source"
      }
    },
    "accountSortAttribute" : "created",
    "accountReturnFirstLink" : false,
    "requiresPeriodicRefresh" : false,
    "accountPropertyFilter" : "(groups.containsAll({'Admin'}) || location == 'Austin')",
    "attributeName" : "DEPARTMENT",
    "accountSortDescending" : false,
    "sourceName" : "Workday",
    "accountFilter" : "!(nativeIdentity.startsWith(\"*DELETED*\"))"
  },
  "type" : "dateFormat"
}"@
# Create transform
try {
    $Result = ConvertFrom-JsonToTransform -Json $Transform
    New-Transform-Transform $Result
    
    # Below is a request that includes all optional parameters
    # New-Transform -Transform $Transform  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-Transform"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-transform

Deletes the transform specified by the given ID. Attempting to delete a transform that is used in one or more Identity Profile mappings will result in an error. If this occurs, you must first remove the transform from all mappings before deleting the transform.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the transform to delete

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
$Id = "2cd78adghjkja34jh2b1hkjhasuecd" # String | ID of the transform to delete
# Delete a transform
try {
    Remove-Transform-Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-Transform -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-Transform"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-transform

This API returns the transform specified by the given ID.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the transform to retrieve

### Return type

[**TransformRead**](../models/transform-read)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Transform with the given ID | TransformRead
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
$Id = "2cd78adghjkja34jh2b1hkjhasuecd" # String | ID of the transform to retrieve
# Transform by ID
try {
    Get-Transform-Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-Transform -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-Transform"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## list-transforms

Gets a list of all saved transform objects.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Name | **String** |   (optional) | Name of the transform to retrieve from the list.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **internal**: *eq*  **name**: *eq, sw*

### Return type

[**TransformRead[]**](../models/transform-read)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of transforms matching the given criteria. | TransformRead[]
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
$Name = "ExampleTransformName123" # String | Name of the transform to retrieve from the list. (optional)
$Filters = 'name eq "Uppercase"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **internal**: *eq*  **name**: *eq, sw* (optional)
# List transforms
try {
    Get-Transforms
    
    # Below is a request that includes all optional parameters
    # Get-Transforms -Offset $Offset -Limit $Limit -Count $Count -Name $Name -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-Transforms"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## update-transform

Replaces the transform specified by the given ID with the transform provided in the request body. Only the "attributes" field is mutable. Attempting to change other properties (ex. "name" and "type") will result in an error.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the transform to update
 Body  | Transform | [**Transform**](../models/transform) |   (optional) | The updated transform object. Must include ""name"", ""type"", and ""attributes"" fields, but ""name"" and ""type"" must not be modified.

### Return type

[**TransformRead**](../models/transform-read)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Indicates the transform was successfully updated and returns its new representation. | TransformRead
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
$Id = "2cd78adghjkja34jh2b1hkjhasuecd" # String | ID of the transform to update
$Transform = @"{
  "name" : "Timestamp To Date",
  "attributes" : {
    "input" : {
      "type" : "accountAttribute",
      "attributes" : {
        "attributeName" : "first_name",
        "sourceName" : "Source"
      }
    },
    "accountSortAttribute" : "created",
    "accountReturnFirstLink" : false,
    "requiresPeriodicRefresh" : false,
    "accountPropertyFilter" : "(groups.containsAll({'Admin'}) || location == 'Austin')",
    "attributeName" : "DEPARTMENT",
    "accountSortDescending" : false,
    "sourceName" : "Workday",
    "accountFilter" : "!(nativeIdentity.startsWith(\"*DELETED*\"))"
  },
  "type" : "dateFormat"
}"@
# Update a transform
try {
    Update-Transform-Id $Id 
    
    # Below is a request that includes all optional parameters
    # Update-Transform -Id $Id -Transform $Transform  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-Transform"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


