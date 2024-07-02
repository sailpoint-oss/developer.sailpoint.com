---
id: managed-clients
title: ManagedClients
pagination_label: ManagedClients
sidebar_label: ManagedClients
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ManagedClients'] 
slug: /tools/sdk/go/beta/methods/managed-clients
tags: ['SDK', 'Software Development Kit', 'ManagedClients']
---


# ManagedClients

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetManagedClientStatus**](#get-managed-client-status) | **Get** /managed-clients/{id}/status | Specified Managed Client Status.
[**UpdateManagedClientStatus**](#update-managed-client-status) | **Post** /managed-clients/{id}/status | Handle status request from client



## get-managed-client-status


Retrieve Managed Client Status by ID.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | ID of the Managed Client Status to get
  Query | type_ | [**ManagedClientType**](../models/managed-client-type) | True  | Type of the Managed Client Status to get

	
### Return type

[**ManagedClientStatus**](../models/managed-client-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with Managed Client Status having the given ID and Type. | ManagedClientStatus
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


## update-managed-client-status


Update a status detail passed in from the client

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | ID of the Managed Client Status to update
 Body  | managedClientStatus | [**ManagedClientStatus**](../models/managed-client-status) | True  | 

	
### Return type

[**ManagedClientStatusAggResponse**](../models/managed-client-status-agg-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the updated Managed Client Status. | ManagedClientStatusAggResponse
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

