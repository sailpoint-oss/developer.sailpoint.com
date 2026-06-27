---
id: declassify-source
title: DeclassifySource
pagination_label: DeclassifySource
sidebar_label: DeclassifySource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DeclassifySource', 'DeclassifySource'] 
slug: /tools/sdk/powershell/declassifysource/methods/declassify-source
tags: ['SDK', 'Software Development Kit', 'DeclassifySource', 'DeclassifySource']
---

# DeclassifySource
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Send-DeclassifyMachineAccountFromSourceV1**](#send-declassify-machine-account-from-source-v1) | **POST** `/sources/v1/{sourceId}/declassify` | Declassify source&#39;s all accounts


## send-declassify-machine-account-from-source-v1
Use this API to declassify all the accounts from a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/send-declassify-machine-account-from-source-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | Source ID.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | SendDeclassifyMachineAccountFromSourceV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | SendDeclassifyMachineAccountFromSourceV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | Source ID.

# Declassify source's all accounts

try {
    Send-DeclassifyMachineAccountFromSourceV1 -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Send-DeclassifyMachineAccountFromSourceV1 -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-DeclassifyMachineAccountFromSourceV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
