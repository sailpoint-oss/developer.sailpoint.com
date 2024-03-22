---
id: public-identities-config
title: PublicIdentitiesConfig
pagination_label: PublicIdentitiesConfig
sidebar_label: PublicIdentitiesConfig
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'PublicIdentitiesConfig'] 
slug: /tools/sdk/powershell/v3/methods/public-identities-config
tags: ['SDK', 'Software Development Kit', 'PublicIdentitiesConfig']
---


# PublicIdentitiesConfig

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPublicIdentityConfig**](#get-public-identity-config) | **GET** /public-identities-config | Get the Public Identities Configuration
[**updatePublicIdentityConfig**](#update-public-identity-config) | **PUT** /public-identities-config | Update the Public Identities Configuration



## get-public-identity-config


Returns the publicly visible attributes of an identity available to request approvers for Access Requests and Certification Campaigns. A token with ORG ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

	
### Return type

[**PublicIdentityConfig**](../models/public-identity-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Request succeeded. | PublicIdentityConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## update-public-identity-config


Updates the publicly visible attributes of an identity available to request approvers for Access Requests and Certification Campaigns. A token with ORG ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | PublicIdentityConfig | [**PublicIdentityConfig**](../models/public-identity-config) | True  | 

	
### Return type

[**PublicIdentityConfig**](../models/public-identity-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Request succeeded. | PublicIdentityConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 

