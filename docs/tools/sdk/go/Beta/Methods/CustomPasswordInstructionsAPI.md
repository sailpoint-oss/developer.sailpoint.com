---
id: custom-password-instructions
title: CustomPasswordInstructions
pagination_label: CustomPasswordInstructions
sidebar_label: CustomPasswordInstructions
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'CustomPasswordInstructions'] 
slug: /tools/sdk/go/beta/methods/custom-password-instructions
tags: ['SDK', 'Software Development Kit', 'CustomPasswordInstructions']
---


# CustomPasswordInstructions

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateCustomPasswordInstructions**](#create-custom-password-instructions) | **Post** /custom-password-instructions | Create Custom Password Instructions
[**DeleteCustomPasswordInstructions**](#delete-custom-password-instructions) | **Delete** /custom-password-instructions/{pageId} | Delete Custom Password Instructions by page ID
[**GetCustomPasswordInstructions**](#get-custom-password-instructions) | **Get** /custom-password-instructions/{pageId} | Get Custom Password Instructions by Page ID



## create-custom-password-instructions


This API creates the custom password instructions for the specified page ID. A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | customPasswordInstruction | [**CustomPasswordInstruction**](../models/custom-password-instruction) | True  | 

	
### Return type

[**CustomPasswordInstruction**](../models/custom-password-instruction)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the custom password instructions. | CustomPasswordInstruction
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## delete-custom-password-instructions


This API delete the custom password instructions for the specified page ID. A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | pageId | **string** | True  | The page ID of custom password instructions to delete.
  Query | locale | **string** |   (optional) | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\".

	
### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-custom-password-instructions


This API returns the custom password instructions for the specified page ID. A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | pageId | **string** | True  | The page ID of custom password instructions to query.
  Query | locale | **string** |   (optional) | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\".

	
### Return type

[**CustomPasswordInstruction**](../models/custom-password-instruction)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the custom password instructions. | CustomPasswordInstruction
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 

