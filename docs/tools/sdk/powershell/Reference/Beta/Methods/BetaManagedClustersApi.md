
---
id: beta-managed-clusters
title: ManagedClusters
pagination_label: ManagedClusters
sidebar_label: ManagedClusters
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClusters', 'BetaManagedClusters'] 
slug: /tools/sdk/powershell/beta/methods/managed-clusters
tags: ['SDK', 'Software Development Kit', 'ManagedClusters', 'BetaManagedClusters']
---

# ManagedClusters
  Use this API to implement managed cluster functionality. 
With this functionality in place, administrators can modify and delete existing managed clients, get their statuses, and create new ones. 
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-BetaClientLogConfiguration**](#get-client-log-configuration) | **GET** `/managed-clusters/{id}/log-config` | Get managed cluster&#39;s log configuration
[**Get-BetaManagedCluster**](#get-managed-cluster) | **GET** `/managed-clusters/{id}` | Get a specified ManagedCluster.
[**Get-BetaManagedClusters**](#get-managed-clusters) | **GET** `/managed-clusters` | Retrieve all Managed Clusters.
[**Send-BetaClientLogConfiguration**](#put-client-log-configuration) | **PUT** `/managed-clusters/{id}/log-config` | Update managed cluster&#39;s log configuration

## get-client-log-configuration
Get managed cluster's log configuration.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of ManagedCluster to get log configuration for

### Return type
[**ClientLogConfiguration**](../models/client-log-configuration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Log configuration of ManagedCluster matching given cluster ID | ClientLogConfiguration
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
$Id = "aClusterId" # String | ID of ManagedCluster to get log configuration for

# Get managed cluster's log configuration

try {
    Get-BetaClientLogConfiguration-BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaClientLogConfiguration -BetaId $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaClientLogConfiguration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-managed-cluster
Retrieve a ManagedCluster by ID.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the ManagedCluster to get

### Return type
[**ManagedCluster**](../models/managed-cluster)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with ManagedCluster having the given ID. | ManagedCluster
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
$Id = "aClusterId" # String | ID of the ManagedCluster to get

# Get a specified ManagedCluster.

try {
    Get-BetaManagedCluster-BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaManagedCluster -BetaId $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaManagedCluster"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-managed-clusters
Retrieve all Managed Clusters for the current Org, based on request context.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq*

### Return type
[**ManagedCluster[]**](../models/managed-cluster)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with a list of ManagedCluster. | ManagedCluster[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'operational eq operation' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq* (optional)

# Retrieve all Managed Clusters.

try {
    Get-BetaManagedClusters
    
    # Below is a request that includes all optional parameters
    # Get-BetaManagedClusters -BetaOffset $Offset -BetaLimit $Limit -BetaCount $Count -BetaFilters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaManagedClusters"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## put-client-log-configuration
Update managed cluster's log configuration

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of ManagedCluster to update log configuration for
 Body  | ClientLogConfiguration | [**ClientLogConfiguration**](../models/client-log-configuration) | True  | ClientLogConfiguration for given ManagedCluster

### Return type
[**ClientLogConfiguration**](../models/client-log-configuration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with updated ClientLogConfiguration for given ManagedCluster | ClientLogConfiguration
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
$Id = "aClusterId" # String | ID of ManagedCluster to update log configuration for
$ClientLogConfiguration = @"{
  "durationMinutes" : 120,
  "rootLevel" : "INFO",
  "clientId" : "aClientId",
  "expiration" : "2020-12-15T19:13:36.079Z",
  "logLevels" : "INFO"
}"@

# Update managed cluster's log configuration

try {
    Send-BetaClientLogConfiguration-BetaId $Id -BetaClientLogConfiguration $Result
    
    # Below is a request that includes all optional parameters
    # Send-BetaClientLogConfiguration -BetaId $Id -BetaClientLogConfiguration $ClientLogConfiguration  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaClientLogConfiguration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
