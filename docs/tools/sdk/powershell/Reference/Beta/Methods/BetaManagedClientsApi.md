---
id: beta-managed-clients
title: ManagedClients
pagination_label: ManagedClients
sidebar_label: ManagedClients
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClients', 'BetaManagedClients'] 
slug: /tools/sdk/powershell/beta/methods/managed-clients
tags: ['SDK', 'Software Development Kit', 'ManagedClients', 'BetaManagedClients']
---

# ManagedClients
  Use this API to implement managed client functionality. 
With this functionality in place, administrators can modify and delete existing managed clients, create new ones, and view and make changes to their log configurations. 
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-BetaManagedClientStatus**](#get-managed-client-status) | **GET** `/managed-clients/{id}/status` | Specified Managed Client Status.
[**Update-BetaManagedClientStatus**](#update-managed-client-status) | **POST** `/managed-clients/{id}/status` | Handle status request from client

## get-managed-client-status
Retrieve Managed Client Status by ID.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the Managed Client Status to get
  Query | Type | [**ManagedClientType**](../models/managed-client-type) | True  | Type of the Managed Client Status to get

### Return type
[**ManagedClientStatus**](../models/managed-client-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with Managed Client Status having the given ID and Type. | ManagedClientStatus
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "aClientId" # String | ID of the Managed Client Status to get
$Type = "CCG" # ManagedClientType | Type of the Managed Client Status to get

# Specified Managed Client Status.

try {
    Get-BetaManagedClientStatus -BetaId $Id  -BetaType $Type 
    
    # Below is a request that includes all optional parameters
    # Get-BetaManagedClientStatus -BetaId $Id -BetaType $Type  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaManagedClientStatus"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## update-managed-client-status
Update a status detail passed in from the client

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the Managed Client Status to update
 Body  | ManagedClientStatus | [**ManagedClientStatus**](../models/managed-client-status) | True  | 

### Return type
[**ManagedClientStatusAggResponse**](../models/managed-client-status-agg-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the updated Managed Client Status. | ManagedClientStatusAggResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "aClientId" # String | ID of the Managed Client Status to update
$ManagedClientStatus = @"{
  "body" : {
    "alertKey" : "",
    "id" : "5678",
    "clusterId" : "1234",
    "ccg_etag" : "ccg_etag123xyz456",
    "ccg_pin" : "NONE",
    "cookbook_etag" : "20210420125956-20210511144538",
    "hostname" : "megapod-useast1-secret-hostname.sailpoint.com",
    "internal_ip" : "127.0.0.1",
    "lastSeen" : "1620843964604",
    "sinceSeen" : "14708",
    "sinceSeenMillis" : "14708",
    "localDev" : false,
    "stacktrace" : "",
    "status" : "NORMAL",
    "product" : "idn",
    "platform_version" : "2",
    "os_version" : "2345.3.1",
    "os_type" : "flatcar",
    "hypervisor" : "unknown"
  },
  "type" : "CCG",
  "status" : "NORMAL",
  "timestamp" : "2020-01-01T00:00:00Z"
}"@

# Handle status request from client

try {
    $Result = ConvertFrom-JsonToManagedClientStatus -Json $ManagedClientStatus
    Update-BetaManagedClientStatus -BetaId $Id  -BetaManagedClientStatus $Result
    
    # Below is a request that includes all optional parameters
    # Update-BetaManagedClientStatus -BetaId $Id -BetaManagedClientStatus $ManagedClientStatus  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaManagedClientStatus"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
