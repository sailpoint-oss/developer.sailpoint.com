---
id: global-tenant-security-settings
title: GlobalTenantSecuritySettings
pagination_label: GlobalTenantSecuritySettings
sidebar_label: GlobalTenantSecuritySettings
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'GlobalTenantSecuritySettings'] 
slug: /tools/sdk/go/v3/methods/global-tenant-security-settings
tags: ['SDK', 'Software Development Kit', 'GlobalTenantSecuritySettings']
---


# GlobalTenantSecuritySettings

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateAuthOrgNetworkConfig**](#create-auth-org-network-config) | **Post** /auth-org/network-config | Create security network configuration.
[**GetAuthOrgNetworkConfig**](#get-auth-org-network-config) | **Get** /auth-org/network-config | Get security network configuration.
[**PatchAuthOrgNetworkConfig**](#patch-auth-org-network-config) | **Patch** /auth-org/network-config | Update security network configuration.



## create-auth-org-network-config


This API returns the details of an org's network auth configuration. Requires security scope of: 'sp:auth-org:create'

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | networkConfiguration | [**NetworkConfiguration**](../models/network-configuration) | True  | Network configuration creation request body.   The following constraints ensure the request body conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.

	
### Return type

[**NetworkConfiguration**](../models/network-configuration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Network configuration for the tenant. | NetworkConfiguration
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


## get-auth-org-network-config


This API returns the details of an org's network auth configuration. Requires security scope of: 'sp:auth-org:read'

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

	
### Return type

[**NetworkConfiguration**](../models/network-configuration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Network configuration for the tenant&#39;s auth org. | NetworkConfiguration
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


## patch-auth-org-network-config


This API updates an existing network configuration for an org using PATCH
 Requires security scope of:  'sp:auth-org:update'

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | jsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of auth org network configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Network Config conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.

	
### Return type

[**NetworkConfiguration**](../models/network-configuration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated Auth Org network configuration. | NetworkConfiguration
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

