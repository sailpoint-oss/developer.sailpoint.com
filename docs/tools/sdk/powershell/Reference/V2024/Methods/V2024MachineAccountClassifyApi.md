---
id: v2024-machine-account-classify
title: MachineAccountClassify
pagination_label: MachineAccountClassify
sidebar_label: MachineAccountClassify
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineAccountClassify', 'V2024MachineAccountClassify'] 
slug: /tools/sdk/powershell/v2024/methods/machine-account-classify
tags: ['SDK', 'Software Development Kit', 'MachineAccountClassify', 'V2024MachineAccountClassify']
---

# MachineAccountClassify
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Send-V2024ClassifyMachineAccount**](#send-classify-machine-account) | **POST** `/accounts/{id}/classify` | Classify a Single Machine Account


## send-classify-machine-account
Use this API to classify a single machine account.
A token with API, ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/send-classify-machine-account)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Account ID.
  Query | ClassificationMode | **String** |   (optional) (default to "default") | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human.

### Return type
[**SendClassifyMachineAccount200Response**](../models/send-classify-machine-account200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Account classified as Machine. | SendClassifyMachineAccount200Response
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Account ID.
$ClassificationMode = "default" # String | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. (optional) (default to "default")

# Classify a Single Machine Account

try {
    Send-V2024ClassifyMachineAccount -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Send-V2024ClassifyMachineAccount -Id $Id -ClassificationMode $ClassificationMode  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-V2024ClassifyMachineAccount"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
