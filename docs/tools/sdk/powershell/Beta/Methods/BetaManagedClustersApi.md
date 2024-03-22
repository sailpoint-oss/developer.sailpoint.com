---
id: managed-clusters
title: ManagedClusters
pagination_label: ManagedClusters
sidebar_label: ManagedClusters
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ManagedClusters'] 
slug: /tools/sdk/powershell/beta/methods/managed-clusters
tags: ['SDK', 'Software Development Kit', 'ManagedClusters']
---


# ManagedClusters

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getClientLogConfiguration**](#get-client-log-configuration) | **GET** /managed-clusters/{id}/log-config | Get managed cluster&#39;s log configuration
[**getManagedCluster**](#get-managed-cluster) | **GET** /managed-clusters/{id} | Get a specified ManagedCluster.
[**getManagedClusters**](#get-managed-clusters) | **GET** /managed-clusters | Retrieve all Managed Clusters.
[**putClientLogConfiguration**](#put-client-log-configuration) | **PUT** /managed-clusters/{id}/log-config | Update managed cluster&#39;s log configuration



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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 

