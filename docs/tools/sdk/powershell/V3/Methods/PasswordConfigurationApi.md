---
id: password-configuration
title: PasswordConfiguration
pagination_label: PasswordConfiguration
sidebar_label: PasswordConfiguration
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'PasswordConfiguration'] 
slug: /tools/sdk/powershell/v3/methods/password-configuration
tags: ['SDK', 'Software Development Kit', 'PasswordConfiguration']
---


# PasswordConfiguration

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPasswordOrgConfig**](#create-password-org-config) | **POST** /password-org-config | Create Password Org Config
[**getPasswordOrgConfig**](#get-password-org-config) | **GET** /password-org-config | Get Password Org Config
[**putPasswordOrgConfig**](#put-password-org-config) | **PUT** /password-org-config | Update Password Org Config



## create-password-org-config


This API creates the password org config. Unspecified fields will use default value.
To be able to use the custom password instructions, you must set the `customInstructionsEnabled` field to "true".
Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:write'

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | PasswordOrgConfig | [**PasswordOrgConfig**](../models/password-org-config) | True  | 

	
### Return type

[**PasswordOrgConfig**](../models/password-org-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the password org config. | PasswordOrgConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## get-password-org-config


This API returns the password org config . Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:read'

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

	
### Return type

[**PasswordOrgConfig**](../models/password-org-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the password org config. | PasswordOrgConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## put-password-org-config


This API updates the password org config for specified fields. Other fields will keep original value.
You must set the `customInstructionsEnabled` field to "true" to be able to use custom password instructions. 
Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:write'

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | PasswordOrgConfig | [**PasswordOrgConfig**](../models/password-org-config) | True  | 

	
### Return type

[**PasswordOrgConfig**](../models/password-org-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the password org config. | PasswordOrgConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 

