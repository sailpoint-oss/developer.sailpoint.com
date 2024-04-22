---
id: vendor-connector-mappings
title: VendorConnectorMappings
pagination_label: VendorConnectorMappings
sidebar_label: VendorConnectorMappings
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'VendorConnectorMappings'] 
slug: /tools/sdk/powershell/beta/methods/vendor-connector-mappings
tags: ['SDK', 'Software Development Kit', 'VendorConnectorMappings']
---


# VendorConnectorMappings

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVendorConnectorMapping**](#create-vendor-connector-mapping) | **POST** /vendor-connector-mappings | Create a vendor connector mapping
[**deleteVendorConnectorMapping**](#delete-vendor-connector-mapping) | **DELETE** /vendor-connector-mappings | Delete a vendor connector mapping
[**getVendorConnectorMappings**](#get-vendor-connector-mappings) | **GET** /vendor-connector-mappings | List vendor connector mappings



## create-vendor-connector-mapping


Creates a new mapping between a SaaS vendor and an IDN connector to establish correlation paths.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | VendorConnectorMapping | [**VendorConnectorMapping**](../models/vendor-connector-mapping) | True  | 

	
### Return type

[**VendorConnectorMapping**](../models/vendor-connector-mapping)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Successfully created a new vendor connector mapping. | VendorConnectorMapping
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
405 | Method Not Allowed - indicates that the server knows the request method, but the target resource doesn&#39;t support this method. | CreateDomainDkim405Response
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## delete-vendor-connector-mapping


Soft deletes a mapping between a SaaS vendor and an IDN connector, removing the established correlation.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | VendorConnectorMapping | [**VendorConnectorMapping**](../models/vendor-connector-mapping) | True  | 

	
### Return type

[**DeleteVendorConnectorMapping200Response**](../models/delete-vendor-connector-mapping200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Successfully deleted the specified vendor connector mapping. | DeleteVendorConnectorMapping200Response
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


## get-vendor-connector-mappings


Retrieves a list of mappings between SaaS vendors and IDN connectors, detailing the connections established for correlation.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

	
### Return type

[**VendorConnectorMapping[]**](../models/vendor-connector-mapping)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Successfully retrieved list. | VendorConnectorMapping[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
405 | Method Not Allowed - indicates that the server knows the request method, but the target resource doesn&#39;t support this method. | CreateDomainDkim405Response
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 

