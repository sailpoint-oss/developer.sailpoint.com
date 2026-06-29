---
id: tenant-context
title: TenantContext
pagination_label: TenantContext
sidebar_label: TenantContext
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TenantContext', 'TenantContext'] 
slug: /tools/sdk/powershell/tenantcontext/methods/tenant-context
tags: ['SDK', 'Software Development Kit', 'TenantContext', 'TenantContext']
---

# TenantContext
  The purpose of this API is to manage key-value pairs specific to a tenant&#39;s context, enabling dynamic configuration and personalized settings per tenant.
Context key-value pairs will consist of common terms and acronyms used within your organization.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-TenantContextV1**](#get-tenant-context-v1) | **GET** `/tenant-context/v1` | Retrieve tenant context
[**Update-TenantContextV1**](#patch-tenant-context-v1) | **PATCH** `/tenant-context/v1` | Update tenant context


## get-tenant-context-v1
Returns all key-value pairs representing the current state of the tenant's context.
Each tenant is limited to a maximum of 100 key-value pairs.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-tenant-context-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**GetTenantContextV1200ResponseInner[]**](../models/get-tenant-context-v1200-response-inner)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Successfully retrieved tenant context. | GetTenantContextV1200ResponseInner[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTenantContextV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTenantContextV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Retrieve tenant context

try {
    Get-TenantContextV1 
    
    # Below is a request that includes all optional parameters
    # Get-TenantContextV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-TenantContextV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-tenant-context-v1
Allows the user to make incremental updates to tenant context records using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

This endpoint is specifically designed to modify the `/Key/*` field, supporting operations such as `add`, `remove`, or `replace` to manage key-value pairs. 

Note that each tenant is limited to a maximum of 100 key-value pairs.


[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-tenant-context-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Jsonpatchoperation | [**Jsonpatchoperation**](../models/jsonpatchoperation) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Tenant context updated successfully. | 
400 | Bad request due to invalid input parameters. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTenantContextV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTenantContextV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Jsonpatchoperation = @"[{"op":"add","path":"/Key/IAS","value":"Integrated Automation System"},{"op":"replace","path":"/Key/IAS","value":"International Accounting Standards"},{"op":"remove","path":"/Key/NDR"}]"@

# Update tenant context

try {
    $Result = ConvertFrom-JsonToJsonpatchoperation -Json $Jsonpatchoperation
    Update-TenantContextV1 -Jsonpatchoperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-TenantContextV1 -Jsonpatchoperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-TenantContextV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
