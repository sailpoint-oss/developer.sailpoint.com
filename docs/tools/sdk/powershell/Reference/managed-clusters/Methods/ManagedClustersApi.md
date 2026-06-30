---
id: managed-clusters
title: ManagedClusters
pagination_label: ManagedClusters
sidebar_label: ManagedClusters
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClusters', 'ManagedClusters'] 
slug: /tools/sdk/powershell/managedclusters/methods/managed-clusters
tags: ['SDK', 'Software Development Kit', 'ManagedClusters', 'ManagedClusters']
---

# ManagedClusters
  Use this API to implement managed cluster functionality. 
With this functionality in place, administrators can modify and delete existing managed clients, get their statuses, and create new ones. 
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-ManagedClusterV1**](#create-managed-cluster-v1) | **POST** `/managed-clusters/v1` | Create create managed cluster
[**Remove-ManagedClusterV1**](#delete-managed-cluster-v1) | **DELETE** `/managed-clusters/v1/{id}` | Delete managed cluster
[**Get-ClientLogConfigurationV1**](#get-client-log-configuration-v1) | **GET** `/managed-clusters/v1/{id}/log-config` | Get managed cluster log configuration
[**Get-ManagedClusterV1**](#get-managed-cluster-v1) | **GET** `/managed-clusters/v1/{id}` | Get managed cluster
[**Get-ManagedClustersV1**](#get-managed-clusters-v1) | **GET** `/managed-clusters/v1` | Get managed clusters
[**Send-ClientLogConfigurationV1**](#put-client-log-configuration-v1) | **PUT** `/managed-clusters/v1/{id}/log-config` | Update managed cluster log configuration
[**Update-ManagedClusterV1**](#update-managed-cluster-v1) | **PATCH** `/managed-clusters/v1/{id}` | Update managed cluster
[**Update-V1**](#update-v1) | **POST** `/managed-clusters/v1/{id}/manualUpgrade` | Trigger manual upgrade for managed cluster


## create-managed-cluster-v1
Create a new Managed Cluster.
The API returns a result that includes the managed cluster ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-managed-cluster-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Managedclusterrequest | [**Managedclusterrequest**](../models/managedclusterrequest) | True  | 

### Return type
[**Managedcluster**](../models/managedcluster)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Created managed cluster. | Managedcluster
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClustersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClustersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Managedclusterrequest = @""@

# Create create managed cluster

try {
    $Result = ConvertFrom-JsonToManagedclusterrequest -Json $Managedclusterrequest
    New-ManagedClusterV1 -Managedclusterrequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-ManagedClusterV1 -Managedclusterrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-ManagedClusterV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-managed-cluster-v1
Delete an existing managed cluster.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-managed-cluster-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClustersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClustersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180897de347a2017de8859e8c5039" # String | Managed cluster ID.
$RemoveClients = $false # Boolean | Flag to determine the need to delete a cluster with clients. (optional) (default to $false)

# Delete managed cluster

try {
    Remove-ManagedClusterV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-ManagedClusterV1 -Id $Id -RemoveClients $RemoveClients  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-ManagedClusterV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-client-log-configuration-v1
Get a managed cluster's log configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-client-log-configuration-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of managed cluster to get log configuration for.

### Return type
[**Clientlogconfiguration**](../models/clientlogconfiguration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Log configuration of managed cluster for given cluster ID. | Clientlogconfiguration
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClustersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClustersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2b838de9-db9b-abcf-e646-d4f274ad4238" # String | ID of managed cluster to get log configuration for.

# Get managed cluster log configuration

try {
    Get-ClientLogConfigurationV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-ClientLogConfigurationV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ClientLogConfigurationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-managed-cluster-v1
Get a managed cluster by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-managed-cluster-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Managed cluster ID.

### Return type
[**Managedcluster**](../models/managedcluster)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Response with managed cluster for the given ID. | Managedcluster
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClustersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClustersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180897de347a2017de8859e8c5039" # String | Managed cluster ID.

# Get managed cluster

try {
    Get-ManagedClusterV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-ManagedClusterV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ManagedClusterV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-managed-clusters-v1
List current organization's managed clusters, based on request context.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-managed-clusters-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq*

### Return type
[**Managedcluster[]**](../models/managedcluster)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Response with a list of managed clusters. | Managedcluster[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClustersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClustersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'operational eq "operation"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq* (optional)

# Get managed clusters

try {
    Get-ManagedClustersV1 
    
    # Below is a request that includes all optional parameters
    # Get-ManagedClustersV1 -Offset $Offset -Limit $Limit -Count $Count -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ManagedClustersV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-client-log-configuration-v1
Update a managed cluster's log configuration. You may only specify one of `durationMinutes` or `expiration`, up to 1440 minutes (24 hours) in the future. If neither is specified, the default value for `durationMinutes` is 240.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-client-log-configuration-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the managed cluster to update the log configuration for.
 Body  | PutClientLogConfigurationV1Request | [**PutClientLogConfigurationV1Request**](../models/put-client-log-configuration-v1-request) | True  | Client log configuration for the given managed cluster.

### Return type
[**Clientlogconfiguration**](../models/clientlogconfiguration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Response with updated client log configuration for the given managed cluster. | Clientlogconfiguration
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClustersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClustersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "2b838de9-db9b-abcf-e646-d4f274ad4238" # String | ID of the managed cluster to update the log configuration for.
$PutClientLogConfigurationV1Request = @""@

# Update managed cluster log configuration

try {
    $Result = ConvertFrom-JsonToPutClientLogConfigurationV1Request -Json $PutClientLogConfigurationV1Request
    Send-ClientLogConfigurationV1 -Id $Id -PutClientLogConfigurationV1Request $Result 
    
    # Below is a request that includes all optional parameters
    # Send-ClientLogConfigurationV1 -Id $Id -PutClientLogConfigurationV1Request $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-ClientLogConfigurationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-managed-cluster-v1
Update an existing managed cluster.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-managed-cluster-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Managed cluster ID.
 Body  | Jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | JSONPatch payload used to update the object.

### Return type
[**Managedcluster**](../models/managedcluster)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated managed cluster. | Managedcluster
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClustersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClustersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180897de347a2017de8859e8c5039" # String | Managed cluster ID.
 $Jsonpatchoperation = @""@ # Jsonpatchoperation[] | JSONPatch payload used to update the object.
 

# Update managed cluster

try {
    $Result = ConvertFrom-JsonToJsonpatchoperation -Json $Jsonpatchoperation
    Update-ManagedClusterV1 -Id $Id -Jsonpatchoperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-ManagedClusterV1 -Id $Id -Jsonpatchoperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-ManagedClusterV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-v1
Trigger Manual Upgrade for Managed Cluster.
AMS Security: API, Internal A token with SYSTEM_ADMINISTRATOR authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of managed cluster to trigger manual upgrade.

### Return type
[**Clustermanualupgrade**](../models/clustermanualupgrade)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Manual upgrade of managed cluster for given cluster ID. | Clustermanualupgrade
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClustersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClustersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2b838de9-db9b-abcf-e646-d4f274ad4238" # String | ID of managed cluster to trigger manual upgrade.

# Trigger manual upgrade for managed cluster

try {
    Update-V1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Update-V1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
