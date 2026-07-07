---
id: tenant
title: Tenant
pagination_label: Tenant
sidebar_label: Tenant
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Tenant', 'Tenant'] 
slug: /tools/sdk/powershell/tenant/methods/tenant
tags: ['SDK', 'Software Development Kit', 'Tenant', 'Tenant']
---

# Tenant
  API for reading tenant details. 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-TenantV1**](#get-tenant-v1) | **GET** `/tenant/v1` | Get tenant information.


## get-tenant-v1
This rest endpoint can be used to retrieve tenant details.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-tenant-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**Tenant**](../models/tenant)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Tenant Info | Tenant
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTenantV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTenantV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Get tenant information.

try {
    Get-TenantV1 
    
    # Below is a request that includes all optional parameters
    # Get-TenantV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-TenantV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
