---
id: tenant
title: Tenant
pagination_label: Tenant
sidebar_label: Tenant
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'Tenant'] 
slug: /tools/sdk/go/beta/methods/tenant
tags: ['SDK', 'Software Development Kit', 'Tenant']
---


# Tenant

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetTenant**](#get-tenant) | **Get** /tenant | Get Tenant Information.



## get-tenant


This rest endpoint can be used to retrieve tenant details.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

	
### Return type

[**Tenant**](../models/tenant)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Tenant Info | Tenant
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

