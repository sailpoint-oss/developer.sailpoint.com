---
id: v2024-iai-peer-group-strategies
title: IAIPeerGroupStrategies
pagination_label: IAIPeerGroupStrategies
sidebar_label: IAIPeerGroupStrategies
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IAIPeerGroupStrategies', 'V2024IAIPeerGroupStrategies'] 
slug: /tools/sdk/powershell/v2024/methods/iai-peer-group-strategies
tags: ['SDK', 'Software Development Kit', 'IAIPeerGroupStrategies', 'V2024IAIPeerGroupStrategies']
---

# IAIPeerGroupStrategies
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-V2024PeerGroupOutliers**](#get-peer-group-outliers) | **GET** `/peer-group-strategies/{strategy}/identity-outliers` | Identity outliers list


## get-peer-group-outliers
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
-- Deprecated : See 'IAI Outliers' This API will be used by Identity Governance systems to identify identities that are not included in an organization's peer groups. By default, 250 identities are returned. You can specify between 1 and 1000 number of identities that can be returned.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-peer-group-outliers)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Strategy | **String** | True  | The strategy used to create peer groups. Currently, 'entitlement' is supported.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**PeerGroupMember[]**](../models/peer-group-member)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of identities that are not included in peer groups. | PeerGroupMember[]
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
$Strategy = "entitlement" # String | The strategy used to create peer groups. Currently, 'entitlement' is supported.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# Identity outliers list

try {
    Get-V2024PeerGroupOutliers -Strategy $Strategy -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024PeerGroupOutliers -Strategy $Strategy -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024PeerGroupOutliers"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
