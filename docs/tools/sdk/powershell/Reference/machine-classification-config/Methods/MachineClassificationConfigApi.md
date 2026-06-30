---
id: machine-classification-config
title: MachineClassificationConfig
pagination_label: MachineClassificationConfig
sidebar_label: MachineClassificationConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineClassificationConfig', 'MachineClassificationConfig'] 
slug: /tools/sdk/powershell/machineclassificationconfig/methods/machine-classification-config
tags: ['SDK', 'Software Development Kit', 'MachineClassificationConfig', 'MachineClassificationConfig']
---

# MachineClassificationConfig
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Remove-MachineClassificationConfigV1**](#delete-machine-classification-config-v1) | **DELETE** `/sources/v1/{sourceId}/machine-classification-config` | Delete source&#39;s classification config
[**Get-MachineClassificationConfigV1**](#get-machine-classification-config-v1) | **GET** `/sources/v1/{sourceId}/machine-classification-config` | Machine classification config for source
[**Set-MachineClassificationConfigV1**](#set-machine-classification-config-v1) | **PUT** `/sources/v1/{sourceId}/machine-classification-config` | Update source&#39;s classification config


## delete-machine-classification-config-v1
Use this API to remove Classification Config for a Source. 
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-machine-classification-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | Source ID.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMachineClassificationConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMachineClassificationConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | Source ID.

# Delete source's classification config

try {
    Remove-MachineClassificationConfigV1 -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Remove-MachineClassificationConfigV1 -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-MachineClassificationConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-machine-classification-config-v1
This API returns a Machine Classification Config for a Source using Source ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-machine-classification-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | Source ID

### Return type
[**Machineclassificationconfig**](../models/machineclassificationconfig)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A Config Object | Machineclassificationconfig
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMachineClassificationConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMachineClassificationConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | Source ID

# Machine classification config for source

try {
    Get-MachineClassificationConfigV1 -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Get-MachineClassificationConfigV1 -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineClassificationConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-machine-classification-config-v1
Use this API to update Classification Config for a Source. A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-machine-classification-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | Source ID.
 Body  | Machineclassificationconfig | [**Machineclassificationconfig**](../models/machineclassificationconfig) | True  | 

### Return type
[**Machineclassificationconfig**](../models/machineclassificationconfig)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated Machine Classification Config Object. | Machineclassificationconfig
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMachineClassificationConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMachineClassificationConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | Source ID.
$Machineclassificationconfig = @""@

# Update source's classification config

try {
    $Result = ConvertFrom-JsonToMachineclassificationconfig -Json $Machineclassificationconfig
    Set-MachineClassificationConfigV1 -SourceId $SourceId -Machineclassificationconfig $Result 
    
    # Below is a request that includes all optional parameters
    # Set-MachineClassificationConfigV1 -SourceId $SourceId -Machineclassificationconfig $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-MachineClassificationConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
