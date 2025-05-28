---
id: v2025-vendor-connector-mappings
title: VendorConnectorMappings
pagination_label: VendorConnectorMappings
sidebar_label: VendorConnectorMappings
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'VendorConnectorMappings', 'V2025VendorConnectorMappings'] 
slug: /tools/sdk/powershell/v2025/methods/vendor-connector-mappings
tags: ['SDK', 'Software Development Kit', 'VendorConnectorMappings', 'V2025VendorConnectorMappings']
---

# VendorConnectorMappings
  Vendors use ISC connectors to connect their source data to ISC, but the data in their source and the data in ISC may be stored in different formats. 
Connector mappings allow vendors to match their data on both sides of the connection. 
The vendors can then track and manage access across their sources from ISC. 
This API allows you to create and manage these vendor connector mappings. 
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2025VendorConnectorMapping**](#create-vendor-connector-mapping) | **POST** `/vendor-connector-mappings` | Create vendor connector mapping
[**Remove-V2025VendorConnectorMapping**](#delete-vendor-connector-mapping) | **DELETE** `/vendor-connector-mappings` | Delete vendor connector mapping
[**Get-V2025VendorConnectorMappings**](#get-vendor-connector-mappings) | **GET** `/vendor-connector-mappings` | List vendor connector mappings


## create-vendor-connector-mapping
Create a new mapping between a SaaS vendor and an ISC connector to establish correlation paths.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-vendor-connector-mapping)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | VendorConnectorMapping | [**VendorConnectorMapping**](../models/vendor-connector-mapping) | True  | 

### Return type
[**VendorConnectorMapping**](../models/vendor-connector-mapping)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Successfully created a new vendor connector mapping. | VendorConnectorMapping
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
405 | Method Not Allowed - indicates that the server knows the request method, but the target resource doesn&#39;t support this method. | CreateDomainDkim405Response
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$VendorConnectorMapping = @"{
  "createdAt" : "2024-03-13T12:56:19.391294Z",
  "deletedAt" : {
    "Valid" : false,
    "Time" : "0001-01-01T00:00:00Z"
  },
  "updatedBy" : {
    "Valid" : true,
    "String" : "user-67891"
  },
  "connector" : "Example connector",
  "createdBy" : "admin",
  "vendor" : "Example vendor",
  "id" : "78733556-9ea3-4f59-bf69-e5cd92b011b4",
  "deletedBy" : {
    "Valid" : false,
    "String" : ""
  },
  "updatedAt" : {
    "Valid" : true,
    "Time" : "2024-03-14T12:56:19.391294Z"
  }
}"@

# Create vendor connector mapping

try {
    $Result = ConvertFrom-JsonToVendorConnectorMapping -Json $VendorConnectorMapping
    New-V2025VendorConnectorMapping -VendorConnectorMapping $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2025VendorConnectorMapping -VendorConnectorMapping $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2025VendorConnectorMapping"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-vendor-connector-mapping
Soft delete a mapping between a SaaS vendor and an ISC connector, removing the established correlation.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-vendor-connector-mapping)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | VendorConnectorMapping | [**VendorConnectorMapping**](../models/vendor-connector-mapping) | True  | 

### Return type
[**DeleteVendorConnectorMapping200Response**](../models/delete-vendor-connector-mapping200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Successfully deleted the specified vendor connector mapping. | DeleteVendorConnectorMapping200Response
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
$VendorConnectorMapping = @"{
  "createdAt" : "2024-03-13T12:56:19.391294Z",
  "deletedAt" : {
    "Valid" : false,
    "Time" : "0001-01-01T00:00:00Z"
  },
  "updatedBy" : {
    "Valid" : true,
    "String" : "user-67891"
  },
  "connector" : "Example connector",
  "createdBy" : "admin",
  "vendor" : "Example vendor",
  "id" : "78733556-9ea3-4f59-bf69-e5cd92b011b4",
  "deletedBy" : {
    "Valid" : false,
    "String" : ""
  },
  "updatedAt" : {
    "Valid" : true,
    "Time" : "2024-03-14T12:56:19.391294Z"
  }
}"@

# Delete vendor connector mapping

try {
    $Result = ConvertFrom-JsonToVendorConnectorMapping -Json $VendorConnectorMapping
    Remove-V2025VendorConnectorMapping -VendorConnectorMapping $Result 
    
    # Below is a request that includes all optional parameters
    # Remove-V2025VendorConnectorMapping -VendorConnectorMapping $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2025VendorConnectorMapping"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-vendor-connector-mappings
Get a list of mappings between SaaS vendors and ISC connectors, detailing the connections established for correlation.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-vendor-connector-mappings)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**VendorConnectorMapping[]**](../models/vendor-connector-mapping)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Successfully retrieved list. | VendorConnectorMapping[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
405 | Method Not Allowed - indicates that the server knows the request method, but the target resource doesn&#39;t support this method. | CreateDomainDkim405Response
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# List vendor connector mappings

try {
    Get-V2025VendorConnectorMappings 
    
    # Below is a request that includes all optional parameters
    # Get-V2025VendorConnectorMappings  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025VendorConnectorMappings"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
