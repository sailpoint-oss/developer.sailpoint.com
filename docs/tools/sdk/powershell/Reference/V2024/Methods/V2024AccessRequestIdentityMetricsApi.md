---
id: v2024-access-request-identity-metrics
title: AccessRequestIdentityMetrics
pagination_label: AccessRequestIdentityMetrics
sidebar_label: AccessRequestIdentityMetrics
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestIdentityMetrics', 'V2024AccessRequestIdentityMetrics'] 
slug: /tools/sdk/powershell/v2024/methods/access-request-identity-metrics
tags: ['SDK', 'Software Development Kit', 'AccessRequestIdentityMetrics', 'V2024AccessRequestIdentityMetrics']
---

# AccessRequestIdentityMetrics
  Use this API to implement access request identity metrics functionality.
With this functionality in place, access request reviewers can see relevant details about the requested access item and associated source activity. 
This allows reviewers to see how many of the identities who share a manager with the access requester have this same type of access and how many of them have had activity in the related source. 
This additional context about whether the access has been granted before and how often it has been used can help those approving access requests make more informed decisions.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-V2024AccessRequestIdentityMetrics**](#get-access-request-identity-metrics) | **GET** `/access-request-identity-metrics/{identityId}/requested-objects/{requestedObjectId}/type/{type}` | Return access request identity metrics


## get-access-request-identity-metrics
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Use this API to return information access metrics.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-access-request-identity-metrics)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | Manager's identity ID.
Path   | RequestedObjectId | **String** | True  | Requested access item's ID.
Path   | Type | **String** | True  | Requested access item's type.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Summary of the resource access and source activity for the direct reports of the provided manager. | SystemCollectionsHashtable
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
$IdentityId = "7025c863-c270-4ba6-beea-edf3cb091573" # String | Manager's identity ID.
$RequestedObjectId = "2db501be-f0fb-4cc5-a695-334133c52891" # String | Requested access item's ID.
$Type = "ENTITLEMENT" # String | Requested access item's type.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Return access request identity metrics

try {
    Get-V2024AccessRequestIdentityMetrics -IdentityId $IdentityId -RequestedObjectId $RequestedObjectId -Type $Type -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024AccessRequestIdentityMetrics -IdentityId $IdentityId -RequestedObjectId $RequestedObjectId -Type $Type -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024AccessRequestIdentityMetrics"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
