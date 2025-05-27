---
id: v2025-managed-cluster-types
title: ManagedClusterTypes
pagination_label: ManagedClusterTypes
sidebar_label: ManagedClusterTypes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClusterTypes', 'V2025ManagedClusterTypes'] 
slug: /tools/sdk/powershell/v2025/methods/managed-cluster-types
tags: ['SDK', 'Software Development Kit', 'ManagedClusterTypes', 'V2025ManagedClusterTypes']
---

# ManagedClusterTypes
  Use this API to implement managed cluster types functionality. 
With this functionality in place, administrators can modify and delete existing managed cluster types and create new ones.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2025ManagedClusterType**](#create-managed-cluster-type) | **POST** `/managed-cluster-types` | Create new managed cluster type
[**Remove-V2025ManagedClusterType**](#delete-managed-cluster-type) | **DELETE** `/managed-cluster-types/{id}` | Delete a managed cluster type
[**Get-V2025ManagedClusterType**](#get-managed-cluster-type) | **GET** `/managed-cluster-types/{id}` | Get a managed cluster type
[**Get-V2025ManagedClusterTypes**](#get-managed-cluster-types) | **GET** `/managed-cluster-types` | List managed cluster types
[**Update-V2025ManagedClusterType**](#update-managed-cluster-type) | **PATCH** `/managed-cluster-types/{id}` | Update a managed cluster type


## create-managed-cluster-type
Create a new Managed Cluster Type.

The API returns a result that includes the Managed Cluster Type ID

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-managed-cluster-type)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | ManagedClusterType | [**ManagedClusterType**](../models/managed-cluster-type) | True  | 

### Return type
[**ManagedClusterType**](../models/managed-cluster-type)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The created ManagedClusterType | ManagedClusterType
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
$ManagedClusterType = @"{
  "managedProcessIds" : [ "someId", "someId2" ],
  "pod" : "megapod-useast1",
  "org" : "denali-cjh",
  "id" : "aClusterTypeId",
  "type" : "idn"
}"@

# Create new managed cluster type

try {
    $Result = ConvertFrom-JsonToManagedClusterType -Json $ManagedClusterType
    New-V2025ManagedClusterType -ManagedClusterType $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2025ManagedClusterType -ManagedClusterType $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2025ManagedClusterType"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-managed-cluster-type
Delete an existing Managed Cluster Type.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-managed-cluster-type)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The Managed Cluster Type ID

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
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
$Id = "aClusterTypeId" # String | The Managed Cluster Type ID

# Delete a managed cluster type

try {
    Remove-V2025ManagedClusterType -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2025ManagedClusterType -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2025ManagedClusterType"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-managed-cluster-type
Get a Managed Cluster Type.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-managed-cluster-type)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The Managed Cluster Type ID

### Return type
[**ManagedClusterType**](../models/managed-cluster-type)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with a ManagedClusterType | ManagedClusterType
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
$Id = "aClusterTypeId" # String | The Managed Cluster Type ID

# Get a managed cluster type

try {
    Get-V2025ManagedClusterType -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2025ManagedClusterType -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025ManagedClusterType"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-managed-cluster-types
Get a list of Managed Cluster Types.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-managed-cluster-types)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Type | **String** |   (optional) | Type descriptor
  Query | Pod | **String** |   (optional) | Pinned pod (or default)
  Query | Org | **String** |   (optional) | Pinned org (or default)
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**ManagedClusterType[]**](../models/managed-cluster-type)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with a list of ManagedClusterType based on the query params provided | ManagedClusterType[]
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
$Type = "IDN" # String | Type descriptor (optional)
$Pod = "megapod-useast1" # String | Pinned pod (or default) (optional)
$Org = "denali-xyz" # String | Pinned org (or default) (optional)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

# List managed cluster types

try {
    Get-V2025ManagedClusterTypes 
    
    # Below is a request that includes all optional parameters
    # Get-V2025ManagedClusterTypes -Type $Type -Pod $Pod -Org $Org -Offset $Offset -Limit $Limit  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025ManagedClusterTypes"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-managed-cluster-type
Update an existing Managed Cluster Type.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-managed-cluster-type)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The Managed Cluster Type ID
 Body  | JsonPatch | [**JsonPatch**](../models/json-patch) | True  | The JSONPatch payload used to update the schema.

### Return type
[**ManagedClusterType**](../models/managed-cluster-type)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The updated ManagedClusterType | ManagedClusterType
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
$Id = "aClusterTypeId" # String | The Managed Cluster Type ID
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

# Update a managed cluster type

try {
    $Result = ConvertFrom-JsonToJsonPatch -Json $JsonPatch
    Update-V2025ManagedClusterType -Id $Id -JsonPatch $Result 
    
    # Below is a request that includes all optional parameters
    # Update-V2025ManagedClusterType -Id $Id -JsonPatch $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2025ManagedClusterType"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
