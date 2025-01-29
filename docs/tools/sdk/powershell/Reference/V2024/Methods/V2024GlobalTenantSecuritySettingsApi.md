---
id: v2024-global-tenant-security-settings
title: GlobalTenantSecuritySettings
pagination_label: GlobalTenantSecuritySettings
sidebar_label: GlobalTenantSecuritySettings
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GlobalTenantSecuritySettings', 'V2024GlobalTenantSecuritySettings'] 
slug: /tools/sdk/powershell/v2024/methods/global-tenant-security-settings
tags: ['SDK', 'Software Development Kit', 'GlobalTenantSecuritySettings', 'V2024GlobalTenantSecuritySettings']
---


# GlobalTenantSecuritySettings
  Use this API to implement and customize global tenant security settings.
With this functionality in place, administrators can manage the global security settings that a tenant/org has.
This API can be used to configure the networks and Geographies allowed to access Identity Security Cloud URLs.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2024AuthOrgNetworkConfig**](#create-auth-org-network-config) | **POST** `/auth-org/network-config` | Create security network configuration.
[**Get-V2024AuthOrgNetworkConfig**](#get-auth-org-network-config) | **GET** `/auth-org/network-config` | Get security network configuration.
[**Update-V2024AuthOrgNetworkConfig**](#patch-auth-org-network-config) | **PATCH** `/auth-org/network-config` | Update security network configuration.


## create-auth-org-network-config

This API returns the details of an org's network auth configuration. Requires security scope of: 'sp:auth-org:manage'

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | NetworkConfiguration | [**NetworkConfiguration**](../models/network-configuration) | True  | Network configuration creation request body.   The following constraints ensure the request body conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.

### Return type

[**NetworkConfiguration**](../models/network-configuration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Network configuration for the tenant. | NetworkConfiguration
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
$NetworkConfiguration = @"{
  "range" : [ "1.3.7.2", "255.255.255.252/30" ],
  "whitelisted" : true,
  "geolocation" : [ "CA", "FR", "HT" ]
}"@
# Create security network configuration.
try {
    $Result = ConvertFrom-JsonToNetworkConfiguration -Json $NetworkConfiguration
    New-V2024AuthOrgNetworkConfig-V2024NetworkConfiguration $Result
    
    # Below is a request that includes all optional parameters
    # New-V2024AuthOrgNetworkConfig -V2024NetworkConfiguration $NetworkConfiguration  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024AuthOrgNetworkConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-auth-org-network-config

This API returns the details of an org's network auth configuration.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type

[**NetworkConfiguration**](../models/network-configuration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Network configuration for the tenant&#39;s auth org. | NetworkConfiguration
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
# Get security network configuration.
try {
    Get-V2024AuthOrgNetworkConfig
    
    # Below is a request that includes all optional parameters
    # Get-V2024AuthOrgNetworkConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024AuthOrgNetworkConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## patch-auth-org-network-config

This API updates an existing network configuration for an org using PATCH
 Requires security scope of:  'sp:auth-org:manage'

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of auth org network configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Network Config conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.

### Return type

[**NetworkConfiguration**](../models/network-configuration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated Auth Org network configuration. | NetworkConfiguration
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
 # JsonPatchOperation[] | A list of auth org network configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Network Config conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ 

# Update security network configuration.
try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-V2024AuthOrgNetworkConfig-V2024JsonPatchOperation $Result
    
    # Below is a request that includes all optional parameters
    # Update-V2024AuthOrgNetworkConfig -V2024JsonPatchOperation $JsonPatchOperation  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024AuthOrgNetworkConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


