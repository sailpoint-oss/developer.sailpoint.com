---
id: branding
title: Branding
pagination_label: Branding
sidebar_label: Branding
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'Branding'] 
slug: /tools/sdk/go/v3/methods/branding
tags: ['SDK', 'Software Development Kit', 'Branding']
---


# Branding

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateBrandingItem**](#create-branding-item) | **Post** /brandings | Create a branding item
[**DeleteBranding**](#delete-branding) | **Delete** /brandings/{name} | Delete a branding item
[**GetBranding**](#get-branding) | **Get** /brandings/{name} | Get a branding item
[**GetBrandingList**](#get-branding-list) | **Get** /brandings | List of branding items
[**SetBrandingItem**](#set-branding-item) | **Put** /brandings/{name} | Update a branding item



## create-branding-item


This API endpoint creates a branding item.
A token with API, ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | name | **string** | True  | name of branding item
   | productName | **string** | True  | product name
   | actionButtonColor | **string** |   (optional) | hex value of color for action button
   | activeLinkColor | **string** |   (optional) | hex value of color for link
   | navigationColor | **string** |   (optional) | hex value of color for navigation bar
   | emailFromAddress | **string** |   (optional) | email from address
   | loginInformationalMessage | **string** |   (optional) | login information message
   | fileStandard | ***os.File** |   (optional) | png file with logo

	
### Return type

[**BrandingItem**](../models/branding-item)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Branding item created | BrandingItem
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

[[Back to top]](#) 


## delete-branding


This API endpoint delete information for an existing branding item by name.
A token with API, ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | name | **string** | True  | The name of the branding item to be deleted

	
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


## get-branding


This API endpoint retrieves information for an existing branding item by name.
A token with API, ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | name | **string** | True  | The name of the branding item to be retrieved

	
### Return type

[**BrandingItem**](../models/branding-item)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A branding item object | BrandingItem
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


## get-branding-list


This API endpoint returns a list of branding items.

A token with API, ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

	
### Return type

[**[]BrandingItem**](../models/branding-item)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of branding items. | []BrandingItem
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## set-branding-item


This API endpoint updates information for an existing branding item.
A token with API, ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | name | **string** | True  | The name of the branding item to be retrieved
   | name2 | **string** | True  | name of branding item
   | productName | **string** | True  | product name
   | actionButtonColor | **string** |   (optional) | hex value of color for action button
   | activeLinkColor | **string** |   (optional) | hex value of color for link
   | navigationColor | **string** |   (optional) | hex value of color for navigation bar
   | emailFromAddress | **string** |   (optional) | email from address
   | loginInformationalMessage | **string** |   (optional) | login information message
   | fileStandard | ***os.File** |   (optional) | png file with logo

	
### Return type

[**BrandingItem**](../models/branding-item)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Branding item updated | BrandingItem
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

