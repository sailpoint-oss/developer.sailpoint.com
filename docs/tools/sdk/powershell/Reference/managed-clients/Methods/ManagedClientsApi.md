---
id: managed-clients
title: ManagedClients
pagination_label: ManagedClients
sidebar_label: ManagedClients
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClients', 'ManagedClients'] 
slug: /tools/sdk/powershell/managedclients/methods/managed-clients
tags: ['SDK', 'Software Development Kit', 'ManagedClients', 'ManagedClients']
---

# ManagedClients
  Use this API to implement managed client functionality. 
With this functionality in place, administrators can modify and delete existing managed clients, create new ones, and view and make changes to their log configurations.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-ManagedClientV1**](#create-managed-client-v1) | **POST** `/managed-clients/v1` | Create managed client
[**Remove-ManagedClientV1**](#delete-managed-client-v1) | **DELETE** `/managed-clients/v1/{id}` | Delete managed client
[**Get-ManagedClientHealthIndicatorsV1**](#get-managed-client-health-indicators-v1) | **GET** `/managed-clients/v1/{id}/health-indicators` | Get managed client health indicators
[**Get-ManagedClientStatusV1**](#get-managed-client-status-v1) | **GET** `/managed-clients/v1/{id}/status` | Get managed client status
[**Get-ManagedClientV1**](#get-managed-client-v1) | **GET** `/managed-clients/v1/{id}` | Get managed client
[**Get-ManagedClientsV1**](#get-managed-clients-v1) | **GET** `/managed-clients/v1` | Get managed clients
[**Update-ManagedClientV1**](#update-managed-client-v1) | **PATCH** `/managed-clients/v1/{id}` | Update managed client


## create-managed-client-v1
Create a new managed client.
The API returns a result that includes the managed client ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-managed-client-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Managedclientrequest | [**Managedclientrequest**](../models/managedclientrequest) | True  | 

### Return type
[**Managedclient**](../models/managedclient)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Created managed client. | Managedclient
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClientsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClientsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Managedclientrequest = @""@

# Create managed client

try {
    $Result = ConvertFrom-JsonToManagedclientrequest -Json $Managedclientrequest
    New-ManagedClientV1 -Managedclientrequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-ManagedClientV1 -Managedclientrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-ManagedClientV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-managed-client-v1
Delete an existing managed client.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-managed-client-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClientsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClientsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "4440278c-0ce2-41ee-a0a9-f5cfd5e8d3b7" # String | Managed client ID.

# Delete managed client

try {
    Remove-ManagedClientV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-ManagedClientV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-ManagedClientV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-managed-client-health-indicators-v1
Get a managed client's health indicators, using its ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-managed-client-health-indicators-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Managed client ID to get health indicators for.

### Return type
[**Managedclienthealthindicators**](../models/managedclienthealthindicators)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Response with the managed client health indicators, with the given ID. | Managedclienthealthindicators
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClientsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClientsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "4440278c-0ce2-41ee-a0a9-f5cfd5e8d3b7" # String | Managed client ID to get health indicators for.

# Get managed client health indicators

try {
    Get-ManagedClientHealthIndicatorsV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-ManagedClientHealthIndicatorsV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ManagedClientHealthIndicatorsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-managed-client-status-v1
Get a managed client's status, using its ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-managed-client-status-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Managed client ID to get status for.
  Query | Type | [**Managedclienttype**](../models/managedclienttype) | True  | Managed client type to get status for.

### Return type
[**Managedclientstatus**](../models/managedclientstatus)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Response with the managed client status, with the given ID and type. | Managedclientstatus
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClientsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClientsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "aClientId" # String | Managed client ID to get status for.
$Type = "CCG" # Managedclienttype | Managed client type to get status for.

# Get managed client status

try {
    Get-ManagedClientStatusV1 -Id $Id -Type $Type 
    
    # Below is a request that includes all optional parameters
    # Get-ManagedClientStatusV1 -Id $Id -Type $Type  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ManagedClientStatusV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-managed-client-v1
Get managed client by ID. 

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-managed-client-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Managed client ID.

### Return type
[**Managedclient**](../models/managedclient)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Managed client response. | Managedclient
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClientsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClientsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "4440278c-0ce2-41ee-a0a9-f5cfd5e8d3b7" # String | Managed client ID.

# Get managed client

try {
    Get-ManagedClientV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-ManagedClientV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ManagedClientV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-managed-clients-v1
List managed clients.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-managed-clients-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **clientId**: *eq*  **clusterId**: *eq*

### Return type
[**Managedclient[]**](../models/managedclient)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Response with a list of managed clients, based on the specified query parameters. | Managedclient[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClientsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClientsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Get-ManagedClientsV1 
    
    # Below is a request that includes all optional parameters
    # Get-ManagedClientsV1 -Offset $Offset -Limit $Limit -Count $Count -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ManagedClientsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-managed-client-v1
Update an existing managed client.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-managed-client-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Managed client ID.
 Body  | Jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | JSONPatch payload used to update the object.

### Return type
[**Managedclient**](../models/managedclient)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated managed client. | Managedclient
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClientsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClientsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "4440278c-0ce2-41ee-a0a9-f5cfd5e8d3b7" # String | Managed client ID.
 $Jsonpatchoperation = @""@ # Jsonpatchoperation[] | JSONPatch payload used to update the object.
 

# Update managed client

try {
    $Result = ConvertFrom-JsonToJsonpatchoperation -Json $Jsonpatchoperation
    Update-ManagedClientV1 -Id $Id -Jsonpatchoperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-ManagedClientV1 -Id $Id -Jsonpatchoperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-ManagedClientV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
