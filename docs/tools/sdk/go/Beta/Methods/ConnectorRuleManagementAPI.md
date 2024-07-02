---
id: connector-rule-management
title: ConnectorRuleManagement
pagination_label: ConnectorRuleManagement
sidebar_label: ConnectorRuleManagement
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ConnectorRuleManagement'] 
slug: /tools/sdk/go/beta/methods/connector-rule-management
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleManagement']
---


# ConnectorRuleManagement

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateConnectorRule**](#create-connector-rule) | **Post** /connector-rules | Create Connector Rule
[**DeleteConnectorRule**](#delete-connector-rule) | **Delete** /connector-rules/{id} | Delete a Connector-Rule
[**GetConnectorRule**](#get-connector-rule) | **Get** /connector-rules/{id} | Connector-Rule by ID
[**GetConnectorRuleList**](#get-connector-rule-list) | **Get** /connector-rules | List Connector Rules
[**UpdateConnectorRule**](#update-connector-rule) | **Put** /connector-rules/{id} | Update a Connector Rule
[**ValidateConnectorRule**](#validate-connector-rule) | **Post** /connector-rules/validate | Validate Connector Rule



## create-connector-rule


Creates a new connector rule.
A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | connectorRuleCreateRequest | [**ConnectorRuleCreateRequest**](../models/connector-rule-create-request) | True  | The connector rule to create

	
### Return type

[**ConnectorRuleResponse**](../models/connector-rule-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | The created connector rule | ConnectorRuleResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## delete-connector-rule


Deletes the connector rule specified by the given ID.
A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | ID of the connector rule to delete

	
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


## get-connector-rule


Returns the connector rule specified by ID.
A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | ID of the connector rule to retrieve

	
### Return type

[**ConnectorRuleResponse**](../models/connector-rule-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Connector rule with the given ID | ConnectorRuleResponse
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


## get-connector-rule-list


Returns the list of connector rules.
A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

	
### Return type

[**[]ConnectorRuleResponse**](../models/connector-rule-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of connector rules | []ConnectorRuleResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## update-connector-rule


Updates an existing connector rule with the one provided in the request body. Note that the fields 'id', 'name', and 'type' are immutable.
A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | ID of the connector rule to update
 Body  | connectorRuleUpdateRequest | [**ConnectorRuleUpdateRequest**](../models/connector-rule-update-request) |   (optional) | The connector rule with updated data

	
### Return type

[**ConnectorRuleResponse**](../models/connector-rule-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The updated connector rule | ConnectorRuleResponse
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


## validate-connector-rule


Returns a list of issues within the code to fix, if any.
A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | sourceCode | [**SourceCode**](../models/source-code) | True  | The code to validate

	
### Return type

[**ConnectorRuleValidationResponse**](../models/connector-rule-validation-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The status of the code&#39;s eligibility as a connector rule | ConnectorRuleValidationResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 

