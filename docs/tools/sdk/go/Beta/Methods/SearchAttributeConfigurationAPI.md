---
id: search-attribute-configuration
title: SearchAttributeConfiguration
pagination_label: SearchAttributeConfiguration
sidebar_label: SearchAttributeConfiguration
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'SearchAttributeConfiguration'] 
slug: /tools/sdk/go/beta/methods/search-attribute-configuration
tags: ['SDK', 'Software Development Kit', 'SearchAttributeConfiguration']
---


# SearchAttributeConfiguration

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateSearchAttributeConfig**](#create-search-attribute-config) | **Post** /accounts/search-attribute-config | Configure/create extended search attributes in IdentityNow.
[**DeleteSearchAttributeConfig**](#delete-search-attribute-config) | **Delete** /accounts/search-attribute-config/{name} | Delete an extended search attribute in IdentityNow.
[**GetSearchAttributeConfig**](#get-search-attribute-config) | **Get** /accounts/search-attribute-config | Retrieve a list of extended search attributes in IdentityNow.
[**GetSingleSearchAttributeConfig**](#get-single-search-attribute-config) | **Get** /accounts/search-attribute-config/{name} | Get the details of a specific extended search attribute in IdentityNow.
[**PatchSearchAttributeConfig**](#patch-search-attribute-config) | **Patch** /accounts/search-attribute-config/{name} | Update the details of a specific extended search attribute in IdentityNow.



## create-search-attribute-config


This API accepts an attribute name, an attribute display name and a list of name/value pair associates of application IDs to attribute names.  It will then validate the inputs and configure/create and attribute promotion configuration in the Link ObjectConfig.
A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | searchAttributeConfig | [**SearchAttributeConfig**](../models/search-attribute-config) | True  | 

	
### Return type

**map[string]interface{}**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | map[string]interface{}
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


## delete-search-attribute-config


This API accepts an extended attribute name and deletes the corresponding extended attribute configuration.
A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | name | **string** | True  | Name of the extended search attribute configuration to delete.

	
### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-search-attribute-config


This API retrieves a list of attribute/application associates currently configured in IdentityNow.
A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

	
### Return type

[**[]SearchAttributeConfig**](../models/search-attribute-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of attribute configurations in IdentityNow. | []SearchAttributeConfig
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-single-search-attribute-config


This API accepts an extended attribute name and retrieves the corresponding extended attribute configuration.
A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | name | **string** | True  | Name of the extended search attribute configuration to delete.

	
### Return type

[**[]SearchAttributeConfig**](../models/search-attribute-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Specific attribute configuration in IdentityNow. | []SearchAttributeConfig
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## patch-search-attribute-config


This API updates an existing Search Attribute Configuration. The following fields are patchable:
**name**, **displayName**, **applicationAttributes**
A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | name | **string** | True  | Name of the Search Attribute Configuration to patch.
 Body  | jsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | 

	
### Return type

[**SearchAttributeConfig**](../models/search-attribute-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the Search Attribute Configuration as updated. | SearchAttributeConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

[[Back to top]](#) 

