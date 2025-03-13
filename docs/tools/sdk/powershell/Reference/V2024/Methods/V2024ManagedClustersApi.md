---
id: v2024-managed-clusters
title: ManagedClusters
pagination_label: ManagedClusters
sidebar_label: ManagedClusters
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClusters', 'V2024ManagedClusters'] 
slug: /tools/sdk/powershell/v2024/methods/managed-clusters
tags: ['SDK', 'Software Development Kit', 'ManagedClusters', 'V2024ManagedClusters']
---

# ManagedClusters
  Use this API to implement managed cluster functionality. 
With this functionality in place, administrators can modify and delete existing managed clients, get their statuses, and create new ones. 
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2024ManagedCluster**](#create-managed-cluster) | **POST** `/managed-clusters` | Create Create Managed Cluster
[**Remove-V2024ManagedCluster**](#delete-managed-cluster) | **DELETE** `/managed-clusters/{id}` | Delete Managed Cluster
[**Get-V2024ClientLogConfiguration**](#get-client-log-configuration) | **GET** `/managed-clusters/{id}/log-config` | Get Managed Cluster Log Configuration
[**Get-V2024ManagedCluster**](#get-managed-cluster) | **GET** `/managed-clusters/{id}` | Get Managed Cluster
[**Get-V2024ManagedClusters**](#get-managed-clusters) | **GET** `/managed-clusters` | Get Managed Clusters
[**Send-V2024ClientLogConfiguration**](#put-client-log-configuration) | **PUT** `/managed-clusters/{id}/log-config` | Update Managed Cluster Log Configuration
[**Update-V2024**](#update) | **POST** `/managed-clusters/{id}/manualUpgrade` | Trigger Manual Upgrade for Managed Cluster
[**Update-V2024ManagedCluster**](#update-managed-cluster) | **PATCH** `/managed-clusters/{id}` | Update Managed Cluster


## create-managed-cluster
Create a new Managed Cluster.
The API returns a result that includes the managed cluster ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-managed-cluster)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | ManagedClusterRequest | [**ManagedClusterRequest**](../models/managed-cluster-request) | True  | 

### Return type
[**ManagedCluster**](../models/managed-cluster)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Created managed cluster. | ManagedCluster
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
$ManagedClusterRequest = @"{
  "configuration" : {
    "clusterExternalId" : "externalId",
    "ccgVersion" : "77.0.0"
  },
  "name" : "Managed Cluster Name",
  "description" : "A short description of the managed cluster.",
  "type" : "idn"
}"@

# Create Create Managed Cluster

try {
    $Result = ConvertFrom-JsonToManagedClusterRequest -Json $ManagedClusterRequest
    New-V2024ManagedCluster -ManagedClusterRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2024ManagedCluster -ManagedClusterRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024ManagedCluster"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-managed-cluster
Delete an existing managed cluster.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-managed-cluster)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Managed cluster ID.
  Query | RemoveClients | **Boolean** |   (optional) (default to $false) | Flag to determine the need to delete a cluster with clients.

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
$Id = "2c9180897de347a2017de8859e8c5039" # String | Managed cluster ID.
$RemoveClients = $false # Boolean | Flag to determine the need to delete a cluster with clients. (optional) (default to $false)

# Delete Managed Cluster

try {
    Remove-V2024ManagedCluster -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024ManagedCluster -Id $Id -RemoveClients $RemoveClients  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024ManagedCluster"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-client-log-configuration
Get a managed cluster's log configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-client-log-configuration)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of managed cluster to get log configuration for.

### Return type
[**ClientLogConfiguration**](../models/client-log-configuration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Log configuration of managed cluster for given cluster ID. | ClientLogConfiguration
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
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
$Id = "2b838de9-db9b-abcf-e646-d4f274ad4238" # String | ID of managed cluster to get log configuration for.

# Get Managed Cluster Log Configuration

try {
    Get-V2024ClientLogConfiguration -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024ClientLogConfiguration -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024ClientLogConfiguration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-managed-cluster
Get a managed cluster by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-managed-cluster)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Managed cluster ID.

### Return type
[**ManagedCluster**](../models/managed-cluster)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Response with managed cluster for the given ID. | ManagedCluster
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
$Id = "2c9180897de347a2017de8859e8c5039" # String | Managed cluster ID.

# Get Managed Cluster

try {
    Get-V2024ManagedCluster -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024ManagedCluster -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024ManagedCluster"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-managed-clusters
List current organization's managed clusters, based on request context.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-managed-clusters)

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
200 | Response with a list of managed clusters. | ManagedCluster[]
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
$Filters = 'operational eq "operation"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq* (optional)

# Get Managed Clusters

try {
    Get-V2024ManagedClusters 
    
    # Below is a request that includes all optional parameters
    # Get-V2024ManagedClusters -Offset $Offset -Limit $Limit -Count $Count -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024ManagedClusters"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-client-log-configuration
Update a managed cluster's log configuration. You may only specify one of `durationMinutes` or `expiration`, up to 1440 minutes (24 hours) in the future. If neither is specified, the default value for `durationMinutes` is 240.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-client-log-configuration)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the managed cluster to update the log configuration for.
 Body  | PutClientLogConfigurationRequest | [**PutClientLogConfigurationRequest**](../models/put-client-log-configuration-request) | True  | Client log configuration for the given managed cluster.

### Return type
[**ClientLogConfiguration**](../models/client-log-configuration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Response with updated client log configuration for the given managed cluster. | ClientLogConfiguration
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
$Id = "2b838de9-db9b-abcf-e646-d4f274ad4238" # String | ID of the managed cluster to update the log configuration for.
$PutClientLogConfigurationRequest = @""@

# Update Managed Cluster Log Configuration

try {
    $Result = ConvertFrom-JsonToPutClientLogConfigurationRequest -Json $PutClientLogConfigurationRequest
    Send-V2024ClientLogConfiguration -Id $Id -PutClientLogConfigurationRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Send-V2024ClientLogConfiguration -Id $Id -PutClientLogConfigurationRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-V2024ClientLogConfiguration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update
Trigger Manual Upgrade for Managed Cluster.
AMS Security: API, Internal A token with SYSTEM_ADMINISTRATOR authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of managed cluster to trigger manual upgrade.

### Return type
[**ClusterManualUpgrade**](../models/cluster-manual-upgrade)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Manual upgrade of managed cluster for given cluster ID. | ClusterManualUpgrade
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
$Id = "2b838de9-db9b-abcf-e646-d4f274ad4238" # String | ID of managed cluster to trigger manual upgrade.

# Trigger Manual Upgrade for Managed Cluster

try {
    Update-V2024 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Update-V2024 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-managed-cluster
Update an existing managed cluster.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-managed-cluster)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Managed cluster ID.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | JSONPatch payload used to update the object.

### Return type
[**ManagedCluster**](../models/managed-cluster)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated managed cluster. | ManagedCluster
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
$Id = "2c9180897de347a2017de8859e8c5039" # String | Managed cluster ID.
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | JSONPatch payload used to update the object.
 

# Update Managed Cluster

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-V2024ManagedCluster -Id $Id -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-V2024ManagedCluster -Id $Id -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024ManagedCluster"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
