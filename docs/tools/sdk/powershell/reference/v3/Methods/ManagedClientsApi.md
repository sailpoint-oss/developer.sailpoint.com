---
id: managed-clients
title: ManagedClients
pagination_label: ManagedClients
sidebar_label: ManagedClients
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClients'] 
slug: /tools/sdk/powershell/v3/methods/managed-clients
tags: ['SDK', 'Software Development Kit', 'ManagedClients']
---


# ManagedClients

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-ManagedClient**](#create-managed-client) | **POST** `/managed-clients` | Create Managed Client
[**Remove-ManagedClient**](#delete-managed-client) | **DELETE** `/managed-clients/{id}` | Delete Managed Client
[**Get-ManagedClient**](#get-managed-client) | **GET** `/managed-clients/{id}` | Get Managed Client
[**Get-ManagedClientStatus**](#get-managed-client-status) | **GET** `/managed-clients/{id}/status` | Get Managed Client Status
[**Get-ManagedClients**](#get-managed-clients) | **GET** `/managed-clients` | Get Managed Clients
[**Update-ManagedClient**](#update-managed-client) | **PATCH** `/managed-clients/{id}` | Update Managed Client


## create-managed-client

Create a new managed client.
The API returns a result that includes the managed client ID.

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
# Create Managed Client
try {
    $Result = ConvertFrom-JsonToManagedClientRequest -Json $ManagedClientRequest
    New-ManagedClient-ManagedClientRequest $Result
    
    # Below is a request that includes all optional parameters
    # New-ManagedClient -ManagedClientRequest $ManagedClientRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-ManagedClient"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-managed-client

Delete an existing managed client.

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
# Delete Managed Client
try {
    Remove-ManagedClient-Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-ManagedClient -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-ManagedClient"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-managed-client

Get managed client by ID. 

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
# Get Managed Client
try {
    Get-ManagedClient-Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-ManagedClient -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ManagedClient"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-managed-client-status

Get a managed client's status, using its ID.

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
# Get Managed Client Status
try {
    Get-ManagedClientStatus-Id $Id -Type $Type 
    
    # Below is a request that includes all optional parameters
    # Get-ManagedClientStatus -Id $Id -Type $Type  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ManagedClientStatus"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-managed-clients

List managed clients.

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
# Get Managed Clients
try {
    Get-ManagedClients
    
    # Below is a request that includes all optional parameters
    # Get-ManagedClients -Offset $Offset -Limit $Limit -Count $Count -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ManagedClients"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## update-managed-client

Update an existing managed client.

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
 # JsonPatchOperation[] | JSONPatch payload used to update the object.
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ 

# Update Managed Client
try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-ManagedClient-Id $Id -JsonPatchOperation $Result
    
    # Below is a request that includes all optional parameters
    # Update-ManagedClient -Id $Id -JsonPatchOperation $JsonPatchOperation  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-ManagedClient"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


