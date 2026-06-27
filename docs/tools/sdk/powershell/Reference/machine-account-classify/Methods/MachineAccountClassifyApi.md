---
id: machine-account-classify
title: MachineAccountClassify
pagination_label: MachineAccountClassify
sidebar_label: MachineAccountClassify
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineAccountClassify', 'MachineAccountClassify'] 
slug: /tools/sdk/powershell/machineaccountclassify/methods/machine-account-classify
tags: ['SDK', 'Software Development Kit', 'MachineAccountClassify', 'MachineAccountClassify']
---

# MachineAccountClassify
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Send-ClassifyMachineAccountV1**](#send-classify-machine-account-v1) | **POST** `/accounts/v1/{id}/classify` | Classify single machine account


## send-classify-machine-account-v1
Use this API to classify a single machine account.
A token with API, ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/send-classify-machine-account-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Account ID.
  Query | ClassificationMode | **String** |   (optional) (default to "default") | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human.

### Return type
[**SendClassifyMachineAccountV1200Response**](../models/send-classify-machine-account-v1200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Account classified as Machine. | SendClassifyMachineAccountV1200Response
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | SendClassifyMachineAccountV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | SendClassifyMachineAccountV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Account ID.
$ClassificationMode = "default" # String | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. (optional) (default to "default")

# Classify single machine account

try {
    Send-ClassifyMachineAccountV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Send-ClassifyMachineAccountV1 -Id $Id -ClassificationMode $ClassificationMode  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-ClassifyMachineAccountV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
