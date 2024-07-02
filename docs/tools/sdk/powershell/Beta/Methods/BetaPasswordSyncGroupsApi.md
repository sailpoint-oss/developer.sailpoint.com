---
id: password-sync-groups
title: PasswordSyncGroups
pagination_label: PasswordSyncGroups
sidebar_label: PasswordSyncGroups
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'PasswordSyncGroups'] 
slug: /tools/sdk/powershell/beta/methods/password-sync-groups
tags: ['SDK', 'Software Development Kit', 'PasswordSyncGroups']
---


# PasswordSyncGroups

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPasswordSyncGroup**](#create-password-sync-group) | **POST** /password-sync-groups | Create Password Sync Group
[**deletePasswordSyncGroup**](#delete-password-sync-group) | **DELETE** /password-sync-groups/{id} | Delete Password Sync Group by ID
[**getPasswordSyncGroup**](#get-password-sync-group) | **GET** /password-sync-groups/{id} | Get Password Sync Group by ID
[**getPasswordSyncGroups**](#get-password-sync-groups) | **GET** /password-sync-groups | Get Password Sync Group List
[**updatePasswordSyncGroup**](#update-password-sync-group) | **PUT** /password-sync-groups/{id} | Update Password Sync Group by ID



## create-password-sync-group


This API creates a password sync group based on the specifications provided. A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | PasswordSyncGroup | [**PasswordSyncGroup**](../models/password-sync-group) | True  | 

	
### Return type

[**PasswordSyncGroup**](../models/password-sync-group)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the password sync group. | PasswordSyncGroup
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## delete-password-sync-group


This API deletes the specified password sync group. A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of password sync group to delete.

	
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

[[Back to top]](#) 


## get-password-sync-group


This API returns the sync group for the specified ID. A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of password sync group to retrieve.

	
### Return type

[**PasswordSyncGroup**](../models/password-sync-group)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the password sync group. | PasswordSyncGroup
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


## get-password-sync-groups


This API returns a list of password sync groups. A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

	
### Return type

[**PasswordSyncGroup[]**](../models/password-sync-group)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of password sync groups. | PasswordSyncGroup[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## update-password-sync-group


This API updates the specified password sync group. A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of password sync group to update.
 Body  | PasswordSyncGroup | [**PasswordSyncGroup**](../models/password-sync-group) | True  | 

	
### Return type

[**PasswordSyncGroup**](../models/password-sync-group)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the password sync group. | PasswordSyncGroup
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

