---
id: connectors
title: Connectors
pagination_label: Connectors
sidebar_label: Connectors
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'Connectors'] 
slug: /tools/sdk/powershell/v3/methods/connectors
tags: ['SDK', 'Software Development Kit', 'Connectors']
---


# Connectors

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomConnector**](#create-custom-connector) | **POST** /connectors | Create custom connector
[**deleteCustomConnector**](#delete-custom-connector) | **DELETE** /connectors/{scriptName} | 
[**getConnector**](#get-connector) | **GET** /connectors/{scriptName} | 
[**getConnectorCorrelationConfig**](#get-connector-correlation-config) | **GET** /connectors/{scriptName}/correlation-config | 
[**getConnectorSourceConfig**](#get-connector-source-config) | **GET** /connectors/{scriptName}/source-config | 
[**getConnectorSourceTemplate**](#get-connector-source-template) | **GET** /connectors/{scriptName}/source-template | 
[**getConnectorTranslations**](#get-connector-translations) | **GET** /connectors/{scriptName}/translations/{locale} | 
[**putCorrelationConfig**](#put-correlation-config) | **PUT** /connectors/{scriptName}/correlation-config | 
[**putSourceConfig**](#put-source-config) | **PUT** /connectors/{scriptName}/source-config | 
[**putSourceTemplate**](#put-source-template) | **PUT** /connectors/{scriptName}/source-template | 
[**putTranslations**](#put-translations) | **PUT** /connectors/{scriptName}/translations/{locale} | 
[**updateConnector**](#update-connector) | **PATCH** /connectors/{scriptName} | 



## create-custom-connector


Create custom connector.
A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | V3CreateConnectorDto | [**V3CreateConnectorDto**](../models/v3-create-connector-dto) | True  | 

	
### Return type

[**V3ConnectorDto**](../models/v3-connector-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A Connector Dto object | V3ConnectorDto
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


## delete-custom-connector


Delete a custom connector that using its script name.
A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.

	
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


## get-connector


Fetches a connector that using its script name.
A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
  Query | Locale | **String** |   (optional) | The locale to apply to the config. If no viable locale is given, it will default to ""en""

	
### Return type

[**ConnectorDetail**](../models/connector-detail)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A Connector Dto object | ConnectorDetail
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


## get-connector-correlation-config


Fetches a connector's correlation config using its script name.
A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.

	
### Return type

**String**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The connector&#39;s correlation config | String
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json

[[Back to top]](#) 


## get-connector-source-config


Fetches a connector's source config using its script name.
A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.

	
### Return type

**String**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The connector&#39;s source template | String
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json

[[Back to top]](#) 


## get-connector-source-template


Fetches a connector's source template using its script name.
A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.

	
### Return type

**String**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The connector&#39;s source template | String
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json

[[Back to top]](#) 


## get-connector-translations


Fetches a connector's translations using its script name.
A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
Path   | Locale | **String** | True  | The locale to apply to the config. If no viable locale is given, it will default to ""en""

	
### Return type

**String**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The connector&#39;s translations | String
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json

[[Back to top]](#) 


## put-correlation-config


Update a connector's correlation config using its script name.
A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
   | File | **System.IO.FileInfo** | True  | connector correlation config xml file

	
### Return type

[**UpdateDetail**](../models/update-detail)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The connector&#39;s update detail | UpdateDetail
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


## put-source-config


Update a connector's source config using its script name.
A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
   | File | **System.IO.FileInfo** | True  | connector source config xml file

	
### Return type

[**UpdateDetail**](../models/update-detail)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The connector&#39;s update detail | UpdateDetail
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


## put-source-template


Update a connector's source template using its script name.
A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
   | File | **System.IO.FileInfo** | True  | connector source template xml file

	
### Return type

[**UpdateDetail**](../models/update-detail)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The connector&#39;s update detail | UpdateDetail
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


## put-translations


Update a connector's translations using its script name.
A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
Path   | Locale | **String** | True  | The locale to apply to the config. If no viable locale is given, it will default to ""en""

	
### Return type

[**UpdateDetail**](../models/update-detail)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The connector&#39;s update detail | UpdateDetail
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


## update-connector


Patch a custom connector that using its script name.
A token with ORG_ADMIN authority is required to call this API. The following fields are patchable: * connectorMetadata * applicationXml * correlationConfigXml * sourceConfigXml

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of connector detail update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

	
### Return type

[**ConnectorDetail**](../models/connector-detail)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A updated Connector Dto object | ConnectorDetail
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

