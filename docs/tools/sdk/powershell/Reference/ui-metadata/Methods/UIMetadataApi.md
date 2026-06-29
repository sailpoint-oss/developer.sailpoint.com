---
id: ui-metadata
title: UIMetadata
pagination_label: UIMetadata
sidebar_label: UIMetadata
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UIMetadata', 'UIMetadata'] 
slug: /tools/sdk/powershell/uimetadata/methods/ui-metadata
tags: ['SDK', 'Software Development Kit', 'UIMetadata', 'UIMetadata']
---

# UIMetadata
  API for managing UI Metadata. Use this API to manage metadata about your User Interface.
For example you can set the iFrameWhitelist parameter to permit another domain to encapsulate IDN within an iframe or set the usernameEmptyText to change the placeholder text for Username on your tenant&#39;s login screen. 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-TenantUiMetadataV1**](#get-tenant-ui-metadata-v1) | **GET** `/ui-metadata/v1/tenant` | Get a tenant ui metadata
[**Set-TenantUiMetadataV1**](#set-tenant-ui-metadata-v1) | **PUT** `/ui-metadata/v1/tenant` | Update tenant ui metadata


## get-tenant-ui-metadata-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API endpoint retrieves UI metadata configured for your tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-tenant-ui-metadata-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**Tenantuimetadataitemresponse**](../models/tenantuimetadataitemresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A tenant UI metadata object | Tenantuimetadataitemresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTenantUiMetadataV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTenantUiMetadataV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get a tenant ui metadata

try {
    Get-TenantUiMetadataV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-TenantUiMetadataV1 -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-TenantUiMetadataV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-tenant-ui-metadata-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API endpoint updates UI metadata for your tenant. These changes may require up to 5 minutes to take effect on the UI.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-tenant-ui-metadata-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Tenantuimetadataitemupdaterequest | [**Tenantuimetadataitemupdaterequest**](../models/tenantuimetadataitemupdaterequest) | True  | 

### Return type
[**Tenantuimetadataitemresponse**](../models/tenantuimetadataitemresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A tenant UI metadata object | Tenantuimetadataitemresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTenantUiMetadataV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTenantUiMetadataV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Tenantuimetadataitemupdaterequest = @""@

# Update tenant ui metadata

try {
    $Result = ConvertFrom-JsonToTenantuimetadataitemupdaterequest -Json $Tenantuimetadataitemupdaterequest
    Set-TenantUiMetadataV1 -XSailPointExperimental $XSailPointExperimental -Tenantuimetadataitemupdaterequest $Result 
    
    # Below is a request that includes all optional parameters
    # Set-TenantUiMetadataV1 -XSailPointExperimental $XSailPointExperimental -Tenantuimetadataitemupdaterequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-TenantUiMetadataV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
