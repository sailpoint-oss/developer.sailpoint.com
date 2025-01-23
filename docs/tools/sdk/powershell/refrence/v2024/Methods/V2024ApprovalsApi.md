---
id: approvals
title: Approvals
pagination_label: Approvals
sidebar_label: Approvals
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approvals'] 
slug: /tools/sdk/powershell/v2024/methods/approvals
tags: ['SDK', 'Software Development Kit', 'Approvals']
---


# Approvals

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-V2024Approval**](#get-approval) | **GET** `/generic-approvals/{id}` | Get an approval
[**Get-V2024Approvals**](#get-approvals) | **GET** `/generic-approvals` | Get Approvals


## get-approval

Retrieve a single approval for a given approval ID. This endpoint is for generic approvals, different than the access-request-approval endpoint and does not include access-request-approvals.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the approval that is to be returned
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type

[**Approval**](../models/approval)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Approval object | Approval
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
$Id = "38453251-6be2-5f8f-df93-5ce19e295837" # String | ID of the approval that is to be returned
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
# Get an approval
try {
    Get-V2024Approval-V2024Id $Id -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024Approval -V2024Id $Id -V2024XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024Approval"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-approvals

Retrieve a list of approvals, which can be filtered by requester ID, status, or reference type. "Mine" query parameter can be used and it will return all approvals for the current approver. This endpoint is for generic approvals, different than the access-request-approval endpoint and does not include access-request-approvals. 
Absence of all query parameters will will default to mine=true.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Mine | **Boolean** |   (optional) | Returns the list of approvals for the current caller
  Query | RequesterId | **String** |   (optional) | Returns the list of approvals for a given requester ID
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **referenceType**: *eq*

### Return type

[**Approval[]**](../models/approval)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Approvals | Approval[]
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Mine = $true # Boolean | Returns the list of approvals for the current caller (optional)
$RequesterId = "17e633e7d57e481569df76323169deb6a" # String | Returns the list of approvals for a given requester ID (optional)
$Filters = 'filters=status eq PENDING' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **referenceType**: *eq* (optional)
# Get Approvals
try {
    Get-V2024Approvals-V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024Approvals -V2024XSailPointExperimental $XSailPointExperimental -V2024Mine $Mine -V2024RequesterId $RequesterId -V2024Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024Approvals"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


