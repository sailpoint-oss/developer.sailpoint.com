---
id: managed-cluster-types
title: ManagedClusterTypes
pagination_label: ManagedClusterTypes
sidebar_label: ManagedClusterTypes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClusterTypes', 'ManagedClusterTypes'] 
slug: /tools/sdk/powershell/managedclustertypes/methods/managed-cluster-types
tags: ['SDK', 'Software Development Kit', 'ManagedClusterTypes', 'ManagedClusterTypes']
---

# ManagedClusterTypes
  Use this API to implement managed cluster types functionality. 
With this functionality in place, administrators can modify and delete existing managed cluster types and create new ones.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-ManagedClusterTypeV1**](#create-managed-cluster-type-v1) | **POST** `/managed-cluster-types/v1` | Create new managed cluster type
[**Remove-ManagedClusterTypeV1**](#delete-managed-cluster-type-v1) | **DELETE** `/managed-cluster-types/v1/{id}` | Delete a managed cluster type
[**Get-ManagedClusterTypeV1**](#get-managed-cluster-type-v1) | **GET** `/managed-cluster-types/v1/{id}` | Get a managed cluster type
[**Get-ManagedClusterTypesV1**](#get-managed-cluster-types-v1) | **GET** `/managed-cluster-types/v1` | List managed cluster types
[**Update-ManagedClusterTypeV1**](#update-managed-cluster-type-v1) | **PATCH** `/managed-cluster-types/v1/{id}` | Update a managed cluster type


## create-managed-cluster-type-v1
Create a new Managed Cluster Type.

The API returns a result that includes the Managed Cluster Type ID

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-managed-cluster-type-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Managedclustertype | [**Managedclustertype**](../models/managedclustertype) | True  | 

### Return type
[**Managedclustertype**](../models/managedclustertype)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The created ManagedClusterType | Managedclustertype
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClusterTypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClusterTypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Managedclustertype = @""@

# Create new managed cluster type

try {
    $Result = ConvertFrom-JsonToManagedclustertype -Json $Managedclustertype
    New-ManagedClusterTypeV1 -Managedclustertype $Result 
    
    # Below is a request that includes all optional parameters
    # New-ManagedClusterTypeV1 -Managedclustertype $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-ManagedClusterTypeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-managed-cluster-type-v1
Delete an existing Managed Cluster Type.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-managed-cluster-type-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClusterTypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClusterTypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "aClusterTypeId" # String | The Managed Cluster Type ID

# Delete a managed cluster type

try {
    Remove-ManagedClusterTypeV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-ManagedClusterTypeV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-ManagedClusterTypeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-managed-cluster-type-v1
Get a Managed Cluster Type.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-managed-cluster-type-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The Managed Cluster Type ID

### Return type
[**Managedclustertype**](../models/managedclustertype)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with a ManagedClusterType | Managedclustertype
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClusterTypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClusterTypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "aClusterTypeId" # String | The Managed Cluster Type ID

# Get a managed cluster type

try {
    Get-ManagedClusterTypeV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-ManagedClusterTypeV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ManagedClusterTypeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-managed-cluster-types-v1
Get a list of Managed Cluster Types.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-managed-cluster-types-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Type | **String** |   (optional) | Type descriptor
  Query | Pod | **String** |   (optional) | Pinned pod (or default)
  Query | Org | **String** |   (optional) | Pinned org (or default)
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Managedclustertype[]**](../models/managedclustertype)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with a list of ManagedClusterType based on the query params provided | Managedclustertype[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClusterTypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClusterTypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Get-ManagedClusterTypesV1 
    
    # Below is a request that includes all optional parameters
    # Get-ManagedClusterTypesV1 -Type $Type -Pod $Pod -Org $Org -Offset $Offset -Limit $Limit  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ManagedClusterTypesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-managed-cluster-type-v1
Update an existing Managed Cluster Type.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-managed-cluster-type-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The Managed Cluster Type ID
 Body  | Jsonpatch | [**Jsonpatch**](../models/jsonpatch) | True  | The JSONPatch payload used to update the schema.

### Return type
[**Managedclustertype**](../models/managedclustertype)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The updated ManagedClusterType | Managedclustertype
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClusterTypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClusterTypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "aClusterTypeId" # String | The Managed Cluster Type ID
$Jsonpatch = @""@

# Update a managed cluster type

try {
    $Result = ConvertFrom-JsonToJsonpatch -Json $Jsonpatch
    Update-ManagedClusterTypeV1 -Id $Id -Jsonpatch $Result 
    
    # Below is a request that includes all optional parameters
    # Update-ManagedClusterTypeV1 -Id $Id -Jsonpatch $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-ManagedClusterTypeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
