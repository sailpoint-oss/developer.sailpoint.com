---
id: work-reassignment
title: WorkReassignment
pagination_label: WorkReassignment
sidebar_label: WorkReassignment
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'WorkReassignment'] 
slug: /tools/sdk/powershell/beta/methods/work-reassignment
tags: ['SDK', 'Software Development Kit', 'WorkReassignment']
---


# WorkReassignment

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReassignmentConfiguration**](#create-reassignment-configuration) | **POST** /reassignment-configurations | Create a Reassignment Configuration
[**deleteReassignmentConfiguration**](#delete-reassignment-configuration) | **DELETE** /reassignment-configurations/{identityId} | Delete Reassignment Configuration
[**getEvaluateReassignmentConfiguration**](#get-evaluate-reassignment-configuration) | **GET** /reassignment-configurations/{identityId}/evaluate/{configType} | Evaluate Reassignment Configuration
[**getReassignmentConfigTypes**](#get-reassignment-config-types) | **GET** /reassignment-configurations/types | List Reassignment Config Types
[**getReassignmentConfiguration**](#get-reassignment-configuration) | **GET** /reassignment-configurations/{identityId} | Get Reassignment Configuration
[**getTenantConfigConfiguration**](#get-tenant-config-configuration) | **GET** /reassignment-configurations/tenant-config | Get Tenant-wide Reassignment Configuration settings
[**listReassignmentConfigurations**](#list-reassignment-configurations) | **GET** /reassignment-configurations | List Reassignment Configurations
[**putReassignmentConfig**](#put-reassignment-config) | **PUT** /reassignment-configurations/{identityId} | Update Reassignment Configuration
[**putTenantConfiguration**](#put-tenant-configuration) | **PUT** /reassignment-configurations/tenant-config | Update Tenant-wide Reassignment Configuration settings



## create-reassignment-configuration


Creates a new Reassignment Configuration for the specified identity.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | ConfigurationItemRequest | [**ConfigurationItemRequest**](../models/configuration-item-request) | True  | 

	
### Return type

[**ConfigurationItemResponse**](../models/configuration-item-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | The newly created Reassignment Configuration object | ConfigurationItemResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## delete-reassignment-configuration


Deletes all Reassignment Configuration for the specified identity

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | unique identity id

	
### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | Reassignment Configuration deleted | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-evaluate-reassignment-configuration


Evaluates the Reassignment Configuration for an `Identity` to determine if work items for the specified type should be reassigned. If a valid Reassignment Configuration is found for the identity & work type, then a lookup is initiated which recursively fetches the Reassignment Configuration for the next `TargetIdentity` until no more results are found or a max depth of 5. That lookup trail is provided in the response and the final reassigned identity in the lookup list is returned as the `reassignToId` property. If no Reassignment Configuration is found for the specified identity & config type then the requested Identity ID will be used as the `reassignToId` value and the lookupTrail node will be empty.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | unique identity id
Path   | ConfigType | [**ConfigTypeEnum**](../models/config-type-enum) | True  | Reassignment work type
  Query | ExclusionFilters | **[]String** |   (optional) | Exclusion filters that disable parts of the reassignment evaluation. Possible values are listed below: - `SELF_REVIEW_DELEGATION`: This will exclude delegations of self-review reassignments

	
### Return type

[**EvaluateResponse[]**](../models/evaluate-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Evaluated Reassignment Configuration | EvaluateResponse[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-reassignment-config-types


Gets a collection of types which are available in the Reassignment Configuration UI.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

	
### Return type

[**ConfigType[]**](../models/config-type)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Reassignment Configuration Types | ConfigType[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-reassignment-configuration


Gets the Reassignment Configuration for an identity.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | unique identity id

	
### Return type

[**ConfigurationResponse**](../models/configuration-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reassignment Configuration for an identity | ConfigurationResponse
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


## get-tenant-config-configuration


Gets the global Reassignment Configuration settings for the requestor's tenant.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

	
### Return type

[**TenantConfigurationResponse**](../models/tenant-configuration-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Tenant-wide Reassignment Configuration settings | TenantConfigurationResponse
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


## list-reassignment-configurations


Gets all Reassignment configuration for the current org.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

	
### Return type

[**ConfigurationResponse[]**](../models/configuration-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of Reassignment Configurations for an org | ConfigurationResponse[]
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


## put-reassignment-config


Replaces existing Reassignment configuration for an identity with the newly provided configuration.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | unique identity id
 Body  | ConfigurationItemRequest | [**ConfigurationItemRequest**](../models/configuration-item-request) | True  | 

	
### Return type

[**ConfigurationItemResponse**](../models/configuration-item-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reassignment Configuration updated | ConfigurationItemResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## put-tenant-configuration


Replaces existing Tenant-wide Reassignment Configuration settings with the newly provided settings.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | TenantConfigurationRequest | [**TenantConfigurationRequest**](../models/tenant-configuration-request) | True  | 

	
### Return type

[**TenantConfigurationResponse**](../models/tenant-configuration-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Tenant-wide Reassignment Configuration settings | TenantConfigurationResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 

