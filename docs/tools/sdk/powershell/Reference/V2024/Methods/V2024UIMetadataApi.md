---
id: v2024-ui-metadata
title: UIMetadata
pagination_label: UIMetadata
sidebar_label: UIMetadata
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UIMetadata', 'V2024UIMetadata'] 
slug: /tools/sdk/powershell/v2024/methods/ui-metadata
tags: ['SDK', 'Software Development Kit', 'UIMetadata', 'V2024UIMetadata']
---

# UIMetadata
  API for managing UI Metadata. Use this API to manage metadata about your User Interface.
For example you can set the iFrameWhitelist parameter to permit another domain to encapsulate IDN within an iframe or set the usernameEmptyText to change the placeholder text for Username on your tenant&#39;s login screen. 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-V2024TenantUiMetadata**](#get-tenant-ui-metadata) | **GET** `/ui-metadata/tenant` | Get a tenant UI metadata
[**Set-V2024TenantUiMetadata**](#set-tenant-ui-metadata) | **PUT** `/ui-metadata/tenant` | Update tenant UI metadata


## get-tenant-ui-metadata
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API endpoint retrieves UI metadata configured for your tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-tenant-ui-metadata)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**TenantUiMetadataItemResponse**](../models/tenant-ui-metadata-item-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A tenant UI metadata object | TenantUiMetadataItemResponse
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get a tenant UI metadata

try {
    Get-V2024TenantUiMetadata -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024TenantUiMetadata -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024TenantUiMetadata"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-tenant-ui-metadata
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API endpoint updates UI metadata for your tenant. These changes may require up to 5 minutes to take effect on the UI.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/set-tenant-ui-metadata)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | TenantUiMetadataItemUpdateRequest | [**TenantUiMetadataItemUpdateRequest**](../models/tenant-ui-metadata-item-update-request) | True  | 

### Return type
[**TenantUiMetadataItemResponse**](../models/tenant-ui-metadata-item-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A tenant UI metadata object | TenantUiMetadataItemResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$TenantUiMetadataItemUpdateRequest = @"{
  "usernameEmptyText" : "Please provide your work email address...",
  "usernameLabel" : "Email",
  "iframeWhiteList" : "http://example.com http://example2.com"
}"@

# Update tenant UI metadata

try {
    $Result = ConvertFrom-JsonToTenantUiMetadataItemUpdateRequest -Json $TenantUiMetadataItemUpdateRequest
    Set-V2024TenantUiMetadata -XSailPointExperimental $XSailPointExperimental -V2024TenantUiMetadataItemUpdateRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Set-V2024TenantUiMetadata -XSailPointExperimental $XSailPointExperimental -V2024TenantUiMetadataItemUpdateRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-V2024TenantUiMetadata"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
