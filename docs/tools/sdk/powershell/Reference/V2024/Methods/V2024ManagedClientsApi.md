---
id: v2024-managed-clients
title: ManagedClients
pagination_label: ManagedClients
sidebar_label: ManagedClients
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClients', 'V2024ManagedClients'] 
slug: /tools/sdk/powershell/v2024/methods/managed-clients
tags: ['SDK', 'Software Development Kit', 'ManagedClients', 'V2024ManagedClients']
---

# ManagedClients
  Use this API to implement managed client functionality. 
With this functionality in place, administrators can modify and delete existing managed clients, create new ones, and view and make changes to their log configurations. 
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2024ManagedClient**](#create-managed-client) | **POST** `/managed-clients` | Create managed client
[**Remove-V2024ManagedClient**](#delete-managed-client) | **DELETE** `/managed-clients/{id}` | Delete managed client
[**Get-V2024ManagedClient**](#get-managed-client) | **GET** `/managed-clients/{id}` | Get managed client
[**Get-V2024ManagedClientStatus**](#get-managed-client-status) | **GET** `/managed-clients/{id}/status` | Get managed client status
[**Get-V2024ManagedClients**](#get-managed-clients) | **GET** `/managed-clients` | Get managed clients
[**Update-V2024ManagedClient**](#update-managed-client) | **PATCH** `/managed-clients/{id}` | Update managed client


## create-managed-client
Create a new managed client.
The API returns a result that includes the managed client ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-managed-client)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | ManagedClientRequest | [**ManagedClientRequest**](../models/managed-client-request) | True  | 

### Return type
[**ManagedClient**](../models/managed-client)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Created managed client. | ManagedClient
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$ManagedClientRequest = @"{
  "name" : "aName",
  "description" : "A short description of the ManagedClient",
  "clusterId" : "aClusterId",
  "type" : "VA"
}"@

# Create managed client

try {
    $Result = ConvertFrom-JsonToManagedClientRequest -Json $ManagedClientRequest
    New-V2024ManagedClient -ManagedClientRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2024ManagedClient -ManagedClientRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024ManagedClient"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-managed-client
Delete an existing managed client.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-managed-client)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Managed client ID.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
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
$Id = "4440278c-0ce2-41ee-a0a9-f5cfd5e8d3b7" # String | Managed client ID.

# Delete managed client

try {
    Remove-V2024ManagedClient -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024ManagedClient -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024ManagedClient"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-managed-client
Get managed client by ID. 

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-managed-client)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Managed client ID.

### Return type
[**ManagedClient**](../models/managed-client)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Managed client response. | ManagedClient
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
$Id = "4440278c-0ce2-41ee-a0a9-f5cfd5e8d3b7" # String | Managed client ID.

# Get managed client

try {
    Get-V2024ManagedClient -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024ManagedClient -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024ManagedClient"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-managed-client-status
Get a managed client's status, using its ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-managed-client-status)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Managed client ID to get status for.
  Query | Type | [**ManagedClientType**](../models/managed-client-type) | True  | Managed client type to get status for.

### Return type
[**ManagedClientStatus**](../models/managed-client-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Response with the managed client status, with the given ID and type. | ManagedClientStatus
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
$Id = "aClientId" # String | Managed client ID to get status for.
$Type = "CCG" # ManagedClientType | Managed client type to get status for.

# Get managed client status

try {
    Get-V2024ManagedClientStatus -Id $Id -Type $Type 
    
    # Below is a request that includes all optional parameters
    # Get-V2024ManagedClientStatus -Id $Id -Type $Type  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024ManagedClientStatus"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-managed-clients
List managed clients.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-managed-clients)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **clientId**: *eq*  **clusterId**: *eq*

### Return type
[**ManagedClient[]**](../models/managed-client)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Response with a list of managed clients, based on the specified query parameters. | ManagedClient[]
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
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'name eq "client name"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **clientId**: *eq*  **clusterId**: *eq* (optional)

# Get managed clients

try {
    Get-V2024ManagedClients 
    
    # Below is a request that includes all optional parameters
    # Get-V2024ManagedClients -Offset $Offset -Limit $Limit -Count $Count -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024ManagedClients"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-managed-client
Update an existing managed client.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-managed-client)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Managed client ID.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | JSONPatch payload used to update the object.

### Return type
[**ManagedClient**](../models/managed-client)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated managed client. | ManagedClient
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
$Id = "4440278c-0ce2-41ee-a0a9-f5cfd5e8d3b7" # String | Managed client ID.
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | JSONPatch payload used to update the object.
 

# Update managed client

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-V2024ManagedClient -Id $Id -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-V2024ManagedClient -Id $Id -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024ManagedClient"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
