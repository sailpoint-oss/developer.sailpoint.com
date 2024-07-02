---
id: icons
title: Icons
pagination_label: Icons
sidebar_label: Icons
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'Icons'] 
slug: /tools/sdk/powershell/beta/methods/icons
tags: ['SDK', 'Software Development Kit', 'Icons']
---


# Icons

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteIcon**](#delete-icon) | **DELETE** /icons/{objectType}/{objectId} | Delete an icon
[**setIcon**](#set-icon) | **PUT** /icons/{objectType}/{objectId} | Update an icon



## delete-icon


This API endpoint delete an icon by object type and object id. A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ObjectType | **String** | True  | Object type. Available options ['application']
Path   | ObjectId | **String** | True  | Object id.

	
### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
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

[[Back to top]](#) 


## set-icon


This API endpoint updates an icon by object type and object id. A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ObjectType | **String** | True  | Object type. Available options ['application']
Path   | ObjectId | **String** | True  | Object id.
   | Image | **System.IO.FileInfo** | True  | file with icon. Allowed mime-types ['image/png', 'image/jpeg']

	
### Return type

[**SetIcon200Response**](../models/set-icon200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Icon updated | SetIcon200Response
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

[[Back to top]](#) 

