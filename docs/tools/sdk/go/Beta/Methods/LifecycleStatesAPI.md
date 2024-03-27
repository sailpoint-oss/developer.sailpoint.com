---
id: lifecycle-states
title: LifecycleStates
pagination_label: LifecycleStates
sidebar_label: LifecycleStates
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'LifecycleStates'] 
slug: /tools/sdk/go/beta/methods/lifecycle-states
tags: ['SDK', 'Software Development Kit', 'LifecycleStates']
---


# LifecycleStates

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ListLifecycleStates**](#list-lifecycle-states) | **Get** /identity-profiles/{identity-profile-id}/lifecycle-states/{lifecycle-state-id} | Lifecycle State
[**UpdateLifecycleStates**](#update-lifecycle-states) | **Patch** /identity-profiles/{identity-profile-id}/lifecycle-states/{lifecycle-state-id} | Update Lifecycle State



## list-lifecycle-states


This endpoint returns a lifecycle state.

A token with ORG_ADMIN or API authority is required to call this API.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identityProfileId | **string** | True  | Identity Profile ID
Path   | lifecycleStateId | **string** | True  | Lifecycle State ID

	
### Return type

[**LifecycleState**](../models/lifecycle-state)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | lifecycle-state | LifecycleState
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## update-lifecycle-states


This API updates individual lifecycle state fields using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

A token with ORG_ADMIN or API authority is required to call this API.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identityProfileId | **string** | True  | Identity Profile ID
Path   | lifecycleStateId | **string** | True  | Lifecycle State ID
 Body  | jsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of lifecycle state update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields can be updated: * enabled * description * accountActions * accessProfileIds * emailNotificationOption 

	
### Return type

[**LifecycleState**](../models/lifecycle-state)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated lifecycle-state. | LifecycleState
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

[[Back to top]](#) 

