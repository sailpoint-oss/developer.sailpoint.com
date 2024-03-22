---
id: service-desk-integration
title: ServiceDeskIntegration
pagination_label: ServiceDeskIntegration
sidebar_label: ServiceDeskIntegration
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ServiceDeskIntegration'] 
slug: /tools/sdk/go/v3/methods/service-desk-integration
tags: ['SDK', 'Software Development Kit', 'ServiceDeskIntegration']
---


# ServiceDeskIntegration

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateServiceDeskIntegration**](#create-service-desk-integration) | **Post** /service-desk-integrations | Create new Service Desk integration
[**DeleteServiceDeskIntegration**](#delete-service-desk-integration) | **Delete** /service-desk-integrations/{id} | Delete a Service Desk integration
[**GetServiceDeskIntegration**](#get-service-desk-integration) | **Get** /service-desk-integrations/{id} | Get a Service Desk integration
[**GetServiceDeskIntegrationTemplate**](#get-service-desk-integration-template) | **Get** /service-desk-integrations/templates/{scriptName} | Service Desk integration template by scriptName.
[**GetServiceDeskIntegrationTypes**](#get-service-desk-integration-types) | **Get** /service-desk-integrations/types | Service Desk Integration Types List.
[**GetServiceDeskIntegrations**](#get-service-desk-integrations) | **Get** /service-desk-integrations | List existing Service Desk Integrations
[**GetStatusCheckDetails**](#get-status-check-details) | **Get** /service-desk-integrations/status-check-configuration | Get the time check configuration
[**PatchServiceDeskIntegration**](#patch-service-desk-integration) | **Patch** /service-desk-integrations/{id} | Service Desk Integration Update PATCH
[**PutServiceDeskIntegration**](#put-service-desk-integration) | **Put** /service-desk-integrations/{id} | Update a Service Desk integration
[**UpdateStatusCheckDetails**](#update-status-check-details) | **Put** /service-desk-integrations/status-check-configuration | Update the time check configuration



## create-service-desk-integration


Create a new Service Desk Integrations.  A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | serviceDeskIntegrationDto | [**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto) | True  | The specifics of a new integration to create

	
### Return type

[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | details of the created integration | ServiceDeskIntegrationDto
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


## delete-service-desk-integration


Delete an existing Service Desk integration by ID.  A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | ID of Service Desk integration to delete

	
### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | Service Desk integration with the given ID successfully deleted | 
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


## get-service-desk-integration


Get an existing Service Desk integration by ID.  A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | ID of the Service Desk integration to get

	
### Return type

[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | ServiceDeskIntegrationDto with the given ID | ServiceDeskIntegrationDto
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


## get-service-desk-integration-template


This API endpoint returns an existing Service Desk integration template by scriptName.  A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | scriptName | **string** | True  | The scriptName value of the Service Desk integration template to get

	
### Return type

[**ServiceDeskIntegrationTemplateDto**](../models/service-desk-integration-template-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the ServiceDeskIntegrationTemplateDto with the specified scriptName. | ServiceDeskIntegrationTemplateDto
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


## get-service-desk-integration-types


This API endpoint returns the current list of supported Service Desk integration types.  A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

	
### Return type

[**[]ServiceDeskIntegrationTemplateType**](../models/service-desk-integration-template-type)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with an array of the currently supported Service Desk integration types. | []ServiceDeskIntegrationTemplateType
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


## get-service-desk-integrations


Get a list of ServiceDeskIntegrationDto for existing Service Desk Integrations.  A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | offset | **int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | sorters | **string** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**
  Query | filters | **string** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq*  **type**: *eq, in*  **cluster**: *eq, in*
  Query | count | **bool** |   (optional) (default to false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

	
### Return type

[**[]ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of ServiceDeskIntegrationDto | []ServiceDeskIntegrationDto
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


## get-status-check-details


Get the time check configuration of queued SDIM tickets.  A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

	
### Return type

[**QueuedCheckConfigDetails**](../models/queued-check-config-details)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | QueuedCheckConfigDetails containing the configured values | QueuedCheckConfigDetails
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


## patch-service-desk-integration


Update an existing ServiceDeskIntegration by ID with a PATCH request.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | ID of the Service Desk integration to update
 Body  | patchServiceDeskIntegrationRequest | [**PatchServiceDeskIntegrationRequest**](../models/patch-service-desk-integration-request) | True  | A list of SDIM update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Only `replace` operations are accepted by this endpoint.  A 403 Forbidden Error indicates that you attempted to PATCH a operation that is not allowed. 

	
### Return type

[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | ServiceDeskIntegrationDto as updated | ServiceDeskIntegrationDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

[[Back to top]](#) 


## put-service-desk-integration


Update an existing Service Desk integration by ID with updated value in JSON form as the request body.  A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | ID of the Service Desk integration to update
 Body  | serviceDeskIntegrationDto | [**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto) | True  | The specifics of the integration to update

	
### Return type

[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | ServiceDeskIntegrationDto as updated | ServiceDeskIntegrationDto
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


## update-status-check-details


Update the time check configuration of queued SDIM tickets.  A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | queuedCheckConfigDetails | [**QueuedCheckConfigDetails**](../models/queued-check-config-details) | True  | the modified time check configuration

	
### Return type

[**QueuedCheckConfigDetails**](../models/queued-check-config-details)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | QueuedCheckConfigDetails as updated | QueuedCheckConfigDetails
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

