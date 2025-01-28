---
id: beta-access-request-identity-metrics
title: AccessRequestIdentityMetrics
pagination_label: AccessRequestIdentityMetrics
sidebar_label: AccessRequestIdentityMetrics
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestIdentityMetrics', 'BetaAccessRequestIdentityMetrics'] 
slug: /tools/sdk/powershell/beta/methods/access-request-identity-metrics
tags: ['SDK', 'Software Development Kit', 'AccessRequestIdentityMetrics', 'BetaAccessRequestIdentityMetrics']
---


# AccessRequestIdentityMetrics

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-BetaAccessRequestIdentityMetrics**](#get-access-request-identity-metrics) | **GET** `/access-request-identity-metrics/{identityId}/requested-objects/{requestedObjectId}/type/{type}` | Return access request identity metrics


## get-access-request-identity-metrics

Use this API to return information access metrics.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | Manager's identity ID.
Path   | RequestedObjectId | **String** | True  | Requested access item's ID.
Path   | Type | **String** | True  | Requested access item's type.

### Return type

[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Summary of the resource access and source activity for the direct reports of the provided manager. | SystemCollectionsHashtable
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
$IdentityId = "7025c863-c270-4ba6-beea-edf3cb091573" # String | Manager's identity ID.
$RequestedObjectId = "2db501be-f0fb-4cc5-a695-334133c52891" # String | Requested access item's ID.
$Type = "ENTITLEMENT" # String | Requested access item's type.
# Return access request identity metrics
try {
    Get-BetaAccessRequestIdentityMetrics-BetaIdentityId $IdentityId -BetaRequestedObjectId $RequestedObjectId -BetaType $Type 
    
    # Below is a request that includes all optional parameters
    # Get-BetaAccessRequestIdentityMetrics -BetaIdentityId $IdentityId -BetaRequestedObjectId $RequestedObjectId -BetaType $Type  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaAccessRequestIdentityMetrics"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


