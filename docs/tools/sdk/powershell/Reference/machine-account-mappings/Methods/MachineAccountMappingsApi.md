---
id: machine-account-mappings
title: MachineAccountMappings
pagination_label: MachineAccountMappings
sidebar_label: MachineAccountMappings
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineAccountMappings', 'MachineAccountMappings'] 
slug: /tools/sdk/powershell/machineaccountmappings/methods/machine-account-mappings
tags: ['SDK', 'Software Development Kit', 'MachineAccountMappings', 'MachineAccountMappings']
---

# MachineAccountMappings
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-MachineAccountMappingsV1**](#create-machine-account-mappings-v1) | **POST** `/sources/v1/{sourceId}/machine-account-mappings` | Create machine account mappings
[**Remove-MachineAccountMappingsV1**](#delete-machine-account-mappings-v1) | **DELETE** `/sources/v1/{sourceId}/machine-account-mappings` | Delete source&#39;s machine account mappings
[**Get-MachineAccountMappingsV1**](#list-machine-account-mappings-v1) | **GET** `/sources/v1/{sourceId}/machine-account-mappings` | Machine account mapping for source
[**Set-MachineAccountMappingsV1**](#set-machine-account-mappings-v1) | **PUT** `/sources/v1/{sourceId}/machine-mappings` | Update source&#39;s machine account mappings


## create-machine-account-mappings-v1
Creates Machine Account Mappings for both identities and accounts for a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-machine-account-mappings-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | Source ID.
 Body  | Attributemappings | [**Attributemappings**](../models/attributemappings) | True  | 

### Return type
[**Attributemappings[]**](../models/attributemappings)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Newly created Attribute Mapping Object | Attributemappings[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountMappingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountMappingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | Source ID.
$Attributemappings = @""@

# Create machine account mappings

try {
    $Result = ConvertFrom-JsonToAttributemappings -Json $Attributemappings
    New-MachineAccountMappingsV1 -SourceId $SourceId -Attributemappings $Result 
    
    # Below is a request that includes all optional parameters
    # New-MachineAccountMappingsV1 -SourceId $SourceId -Attributemappings $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-MachineAccountMappingsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-machine-account-mappings-v1
Use this API to remove machine account attribute mappings for a Source. 
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-machine-account-mappings-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | source ID.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountMappingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountMappingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | source ID.

# Delete source's machine account mappings

try {
    Remove-MachineAccountMappingsV1 -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Remove-MachineAccountMappingsV1 -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-MachineAccountMappingsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-machine-account-mappings-v1
Retrieves Machine account mappings for a specified source using Source ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-machine-account-mappings-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | Source ID
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Attributemappings[]**](../models/attributemappings)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | An array of Attribute Mapping Objects | Attributemappings[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountMappingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountMappingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | Source ID
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

# Machine account mapping for source

try {
    Get-MachineAccountMappingsV1 -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Get-MachineAccountMappingsV1 -SourceId $SourceId -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineAccountMappingsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-machine-account-mappings-v1
Use this API to update Machine Account Attribute Mapping for a Source. A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-machine-account-mappings-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | Source ID.
 Body  | Attributemappings | [**Attributemappings**](../models/attributemappings) | True  | 

### Return type
[**Attributemappings[]**](../models/attributemappings)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated Machine Account Attributes for a Source. | Attributemappings[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountMappingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountMappingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | Source ID.
$Attributemappings = @""@

# Update source's machine account mappings

try {
    $Result = ConvertFrom-JsonToAttributemappings -Json $Attributemappings
    Set-MachineAccountMappingsV1 -SourceId $SourceId -Attributemappings $Result 
    
    # Below is a request that includes all optional parameters
    # Set-MachineAccountMappingsV1 -SourceId $SourceId -Attributemappings $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-MachineAccountMappingsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
