---
id: lifecycle-states
title: LifecycleStates
pagination_label: LifecycleStates
sidebar_label: LifecycleStates
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'LifecycleStates'] 
slug: /tools/sdk/powershell/v3/methods/lifecycle-states
tags: ['SDK', 'Software Development Kit', 'LifecycleStates']
---


# LifecycleStates

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLifecycleState**](#create-lifecycle-state) | **POST** /identity-profiles/{identity-profile-id}/lifecycle-states | Create Lifecycle State
[**deleteLifecycleState**](#delete-lifecycle-state) | **DELETE** /identity-profiles/{identity-profile-id}/lifecycle-states/{lifecycle-state-id} | Delete Lifecycle State by ID
[**getLifecycleState**](#get-lifecycle-state) | **GET** /identity-profiles/{identity-profile-id}/lifecycle-states/{lifecycle-state-id} | Retrieves Lifecycle State
[**listLifecycleStates**](#list-lifecycle-states) | **GET** /identity-profiles/{identity-profile-id}/lifecycle-states | Lists LifecycleStates
[**setLifecycleState**](#set-lifecycle-state) | **POST** /identities/{identity-id}/set-lifecycle-state | Set Lifecycle State
[**updateLifecycleStates**](#update-lifecycle-states) | **PATCH** /identity-profiles/{identity-profile-id}/lifecycle-states/{lifecycle-state-id} | Update Lifecycle State



## create-lifecycle-state


This API creates a new Lifecycle State.
A token with ORG_ADMIN or API authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | Identity Profile ID
 Body  | LifecycleState | [**LifecycleState**](../models/lifecycle-state) | True  | Lifecycle State

	
### Return type

[**LifecycleState**](../models/lifecycle-state)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created LifecycleState object. | LifecycleState
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## delete-lifecycle-state


This endpoint deletes the Lifecycle State using its ID.
A token with API, or ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | Identity Profile ID
Path   | LifecycleStateId | **String** | True  | Lifecycle State ID

	
### Return type

[**LifecyclestateDeleted**](../models/lifecyclestate-deleted)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | The request was successfully accepted into the system. | LifecyclestateDeleted
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


## get-lifecycle-state


This endpoint retrieves a Lifecycle State.
A token with ORG_ADMIN or API authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | Identity Profile ID
Path   | LifecycleStateId | **String** | True  | Lifecycle State ID

	
### Return type

[**LifecycleState**](../models/lifecycle-state)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The requested LifecycleState was successfully retrieved. | LifecycleState
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


## list-lifecycle-states


This end-point lists all the LifecycleStates associated with IdentityProfiles.
A token with API, or ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | The IdentityProfile id
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified**

	
### Return type

[**LifecycleState[]**](../models/lifecycle-state)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of LifecycleState objects | LifecycleState[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## set-lifecycle-state


This endpoint will set/update an identity's lifecycle state to the one provided and updates the corresponding Identity Profile.
A token with ORG_ADMIN or API authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | The ID of the identity to update
 Body  | SetLifecycleStateRequest | [**SetLifecycleStateRequest**](../models/set-lifecycle-state-request) | True  | 

	
### Return type

[**SetLifecycleState200Response**](../models/set-lifecycle-state200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The request was successfully accepted into the system. | SetLifecycleState200Response
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


## update-lifecycle-states


This endpoint updates individual Lifecycle State fields using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
A token with ORG_ADMIN or API authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | Identity Profile ID
Path   | LifecycleStateId | **String** | True  | Lifecycle State ID
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of lifecycle state update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields can be updated: * enabled * description * accountActions * accessProfileIds * emailNotificationOption 

	
### Return type

[**LifecycleState**](../models/lifecycle-state)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The LifecycleState was successfully updated. | LifecycleState
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

