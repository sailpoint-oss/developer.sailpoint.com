---
id: identity-attributes
title: IdentityAttributes
pagination_label: IdentityAttributes
sidebar_label: IdentityAttributes
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'IdentityAttributes'] 
slug: /tools/sdk/go/beta/methods/identity-attributes
tags: ['SDK', 'Software Development Kit', 'IdentityAttributes']
---


# IdentityAttributes

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateIdentityAttribute**](#create-identity-attribute) | **Post** /identity-attributes | Create Identity Attribute
[**DeleteIdentityAttribute**](#delete-identity-attribute) | **Delete** /identity-attributes/{name} | Delete Identity Attribute
[**DeleteIdentityAttributesInBulk**](#delete-identity-attributes-in-bulk) | **Post** /identity-attributes/bulk-delete | Bulk delete Identity Attributes
[**GetIdentityAttribute**](#get-identity-attribute) | **Get** /identity-attributes/{name} | Get Identity Attribute
[**ListIdentityAttributes**](#list-identity-attributes) | **Get** /identity-attributes | List Identity Attributes
[**PutIdentityAttribute**](#put-identity-attribute) | **Put** /identity-attributes/{name} | Update Identity Attribute



## create-identity-attribute


This creates a new identity attribute.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | identityAttribute | [**IdentityAttribute**](../models/identity-attribute) | True  | 

	
### Return type

[**IdentityAttribute**](../models/identity-attribute)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | The identity attribute was created successfully | IdentityAttribute
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


## delete-identity-attribute


This deletes an identity attribute with the given name.  The `system` and `standard` properties must be set to false before you can delete an identity attribute.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | name | **string** | True  | The attribute's technical name.

	
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


## delete-identity-attributes-in-bulk


This deletes identity attributes for a given set of names. Attributes that are currently mapped in an Identity Profile cannot be deleted.  The `system` and `standard` properties must be set to false before you can delete an identity attribute.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | identityAttributeNames | [**IdentityAttributeNames**](../models/identity-attribute-names) | True  | 

	
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

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## get-identity-attribute


This gets an identity attribute for a given technical name.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | name | **string** | True  | The attribute's technical name.

	
### Return type

[**IdentityAttribute**](../models/identity-attribute)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The identity attribute with the given name | IdentityAttribute
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


## list-identity-attributes


This gets a collection of identity attributes.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | includeSystem | **bool** |   (optional) (default to false) | Include \"system\" attributes in the response.
  Query | includeSilent | **bool** |   (optional) (default to false) | Include \"silent\" attributes in the response.
  Query | searchableOnly | **bool** |   (optional) (default to false) | Include only \"searchable\" attributes in the response.
  Query | count | **bool** |   (optional) (default to false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

	
### Return type

[**[]IdentityAttribute**](../models/identity-attribute)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of identity attributes | []IdentityAttribute
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## put-identity-attribute


This updates an existing identity attribute.  Making an attribute searchable requires that the `system`, `standard`, and `multi` properties be set to false.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | name | **string** | True  | The attribute's technical name.
 Body  | identityAttribute | [**IdentityAttribute**](../models/identity-attribute) | True  | 

	
### Return type

[**IdentityAttribute**](../models/identity-attribute)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The identity attribute was updated successfully | IdentityAttribute
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

