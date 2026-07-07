---
id: transforms
title: Transforms
pagination_label: Transforms
sidebar_label: Transforms
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Transforms', 'Transforms'] 
slug: /tools/sdk/powershell/transforms/methods/transforms
tags: ['SDK', 'Software Development Kit', 'Transforms', 'Transforms']
---

# Transforms
  The purpose of this API is to expose functionality for the manipulation of Transform objects.
Transforms are a form of configurable objects which define an easy way to manipulate attribute data without having
to write code. 

Refer to [Transforms](https://developer.sailpoint.com/docs/extensibility/transforms/) for more information about transforms.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-TransformV1**](#create-transform-v1) | **POST** `/transforms/v1` | Create transform
[**Remove-TransformV1**](#delete-transform-v1) | **DELETE** `/transforms/v1/{id}` | Delete a transform
[**Get-TransformV1**](#get-transform-v1) | **GET** `/transforms/v1/{id}` | Transform by id
[**Get-TransformsV1**](#list-transforms-v1) | **GET** `/transforms/v1` | List transforms
[**Update-TransformV1**](#update-transform-v1) | **PUT** `/transforms/v1/{id}` | Update a transform


## create-transform-v1
Creates a new transform object immediately. By default, the internal flag is set to false to indicate that this is a custom transform. Only SailPoint employees have the ability to create a transform with internal set to true. Newly created Transforms can be used in the Identity Profile mappings within the UI.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-transform-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Transform | [**Transform**](../models/transform) | True  | The transform to be created.

### Return type
[**Transformread**](../models/transformread)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Indicates the transform was successfully created and returns its representation. | Transformread
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListTransformsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListTransformsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Transform = @"{"name":"Timestamp To Date","type":"dateFormat","attributes":{"inputFormat":"MMM dd yyyy, HH:mm:ss.SSS","outputFormat":"yyyy/dd/MM"}}"@

# Create transform

try {
    $Result = ConvertFrom-JsonToTransform -Json $Transform
    New-TransformV1 -Transform $Result 
    
    # Below is a request that includes all optional parameters
    # New-TransformV1 -Transform $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-TransformV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-transform-v1
Deletes the transform specified by the given ID. Attempting to delete a transform that is used in one or more Identity Profile mappings will result in an error. If this occurs, you must first remove the transform from all mappings before deleting the transform.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-transform-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListTransformsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListTransformsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2cd78adghjkja34jh2b1hkjhasuecd" # String | ID of the transform to delete

# Delete a transform

try {
    Remove-TransformV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-TransformV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-TransformV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-transform-v1
This API returns the transform specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-transform-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the transform to retrieve

### Return type
[**Transformread**](../models/transformread)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Transform with the given ID | Transformread
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListTransformsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListTransformsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2cd78adghjkja34jh2b1hkjhasuecd" # String | ID of the transform to retrieve

# Transform by id

try {
    Get-TransformV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-TransformV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-TransformV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-transforms-v1
Gets a list of all saved transform objects.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-transforms-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Name | **String** |   (optional) | Name of the transform to retrieve from the list.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **internal**: *eq*  **name**: *eq, sw*

### Return type
[**Transformread[]**](../models/transformread)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of transforms matching the given criteria. | Transformread[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListTransformsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListTransformsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Get-TransformsV1 
    
    # Below is a request that includes all optional parameters
    # Get-TransformsV1 -Offset $Offset -Limit $Limit -Count $Count -Name $Name -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-TransformsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-transform-v1
Replaces the transform specified by the given ID with the transform provided in the request body. Only the "attributes" field is mutable. Attempting to change other properties (ex. "name" and "type") will result in an error.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-transform-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the transform to update
 Body  | Transform | [**Transform**](../models/transform) |   (optional) | The updated transform object. Must include ""name"", ""type"", and ""attributes"" fields, but ""name"" and ""type"" must not be modified.

### Return type
[**Transformread**](../models/transformread)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Indicates the transform was successfully updated and returns its new representation. | Transformread
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListTransformsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListTransformsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "2cd78adghjkja34jh2b1hkjhasuecd" # String | ID of the transform to update
$Transform = @"{"name":"Timestamp To Date","type":"dateFormat","attributes":{"inputFormat":"MMM-dd-yyyy, HH:mm:ss.SSS","outputFormat":"yyyy/dd/MM"}}"@

# Update a transform

try {
    Update-TransformV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Update-TransformV1 -Id $Id -Transform $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-TransformV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
