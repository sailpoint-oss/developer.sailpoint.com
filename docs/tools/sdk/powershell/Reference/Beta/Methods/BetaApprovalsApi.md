
---
id: beta-approvals
title: Approvals
pagination_label: Approvals
sidebar_label: Approvals
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approvals', 'BetaApprovals'] 
slug: /tools/sdk/powershell/beta/methods/approvals
tags: ['SDK', 'Software Development Kit', 'Approvals', 'BetaApprovals']
---

# Approvals
  Use this API to implement approval functionality. With this functionality in place, you can get generic approvals and modify them. 

The main advantages this API has vs [Access Request Approvals](https://developer.sailpoint.com/docs/api/beta/access-request-approvals) are that you can use it to get generic approvals individually or in batches and make changes to those approvals.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-BetaApproval**](#get-approval) | **GET** `/generic-approvals/{id}` | Get Approval
[**Get-BetaApprovals**](#get-approvals) | **GET** `/generic-approvals` | Get Approvals

## get-approval
Get a single approval for a given approval ID. This endpoint is for generic approvals, unlike the access-request-approval endpoint, and doesn't include access-request-approvals.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the approval that to be returned.

### Return type
[**Approval**](../models/approval)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Approval object | Approval
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "38453251-6be2-5f8f-df93-5ce19e295837" # String | ID of the approval that to be returned.

# Get Approval

try {
    Get-BetaApproval-BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaApproval -BetaId $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaApproval"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-approvals
Get a list of approvals, which can be filtered by requester ID, status, or reference type. You can use the "Mine" query parameter to return all approvals for the current approver. This endpoint is for generic approvals, unlike the access-request-approval endpoint, and does not include access-request-approvals. 
Absence of all query parameters will will default to mine=true.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Mine | **Boolean** |   (optional) | Returns the list of approvals for the current caller.
  Query | RequesterId | **String** |   (optional) | Returns the list of approvals for a given requester ID.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **referenceType**: *eq*

### Return type
[**Approval[]**](../models/approval)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of approvals. | Approval[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Mine = $true # Boolean | Returns the list of approvals for the current caller. (optional)
$RequesterId = "17e633e7d57e481569df76323169deb6a" # String | Returns the list of approvals for a given requester ID. (optional)
$Filters = 'filters=status eq PENDING' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **referenceType**: *eq* (optional)

# Get Approvals

try {
    Get-BetaApprovals
    
    # Below is a request that includes all optional parameters
    # Get-BetaApprovals -BetaMine $Mine -BetaRequesterId $RequesterId -BetaFilters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaApprovals"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
