---
id: v2025-classify-source
title: ClassifySource
pagination_label: ClassifySource
sidebar_label: ClassifySource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ClassifySource', 'V2025ClassifySource'] 
slug: /tools/sdk/powershell/v2025/methods/classify-source
tags: ['SDK', 'Software Development Kit', 'ClassifySource', 'V2025ClassifySource']
---

# ClassifySource
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Remove-V2025ClassifyMachineAccountFromSource**](#delete-classify-machine-account-from-source) | **DELETE** `/sources/{sourceId}/classify` | Cancel classify source&#39;s accounts process
[**Get-V2025ClassifyMachineAccountFromSourceStatus**](#get-classify-machine-account-from-source-status) | **GET** `/sources/{sourceId}/classify` | Source accounts classification status
[**Send-V2025ClassifyMachineAccountFromSource**](#send-classify-machine-account-from-source) | **POST** `/sources/{sourceId}/classify` | Classify source&#39;s all accounts


## delete-classify-machine-account-from-source
Use this API to cancel account classification process on a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-classify-machine-account-from-source)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Source ID.

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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Source ID.

# Cancel classify source's accounts process

try {
    Remove-V2025ClassifyMachineAccountFromSource -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2025ClassifyMachineAccountFromSource -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2025ClassifyMachineAccountFromSource"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-classify-machine-account-from-source-status
Use this API to get the status of Machine Account Classification process for a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-classify-machine-account-from-source-status)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Source ID.

### Return type
[**SourceClassificationStatus**](../models/source-classification-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Source Accounts Classification Status object. | SourceClassificationStatus
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Source ID.

# Source accounts classification status

try {
    Get-V2025ClassifyMachineAccountFromSourceStatus -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2025ClassifyMachineAccountFromSourceStatus -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025ClassifyMachineAccountFromSourceStatus"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## send-classify-machine-account-from-source
Use this API to classify all the accounts from a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/send-classify-machine-account-from-source)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Source ID.

### Return type
[**SendClassifyMachineAccountFromSource200Response**](../models/send-classify-machine-account-from-source200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Source&#39;s all accounts submitted for classification. | SendClassifyMachineAccountFromSource200Response
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Source ID.

# Classify source's all accounts

try {
    Send-V2025ClassifyMachineAccountFromSource -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Send-V2025ClassifyMachineAccountFromSource -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-V2025ClassifyMachineAccountFromSource"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
