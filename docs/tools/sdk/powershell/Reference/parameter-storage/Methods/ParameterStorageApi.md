---
id: parameter-storage
title: ParameterStorage
pagination_label: ParameterStorage
sidebar_label: ParameterStorage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ParameterStorage', 'ParameterStorage'] 
slug: /tools/sdk/powershell/parameterstorage/methods/parameter-storage
tags: ['SDK', 'Software Development Kit', 'ParameterStorage', 'ParameterStorage']
---

# ParameterStorage
  The Parameter Storage is SailPoint&#39;s centralized repository for authentication, authorization, and connection configurations, stored as typed Parameters.

The APIs can be used to input Parameters, which can then be referenced by other services, such as Workflow configurations. When these services are executed, the relevant values are fetched via an internal API (not documented here).

The usage of Parameters can be monitored via References managed by Parameter Storage. References provide an indirect mapping between a Parameter and its usage (e.g., within a Workflow), allowing for reports such as &quot;Parameter X is used in Workflow Y&quot; via APIs.

A Parameter is a named instance of typed configuration, where the state is stored as Fields. These Fields are either Public (cleartext, searchable) or Private (encrypted).

Parameter Types are grouped and fall into three Categories: Authentication, Authorization, and Connection.

Parameters are strongly typed; each Type&#39;s fields are named and exposed to the consumer. This means that if a service states that it expects a Credential Type, it will receive a Parameter with a Username and Password.

Fields are named, typed variables within a Parameter; the Fields on a Parameter depend on the Parameter&#39;s Type. Fields contain customer-provided data that will be referenced by another service, and their typing determines whether they&#39;re stored in cleartext or encrypted.

The Specification documents the supported Categories, Types, Fields, Field Names, and their relationships.

A Reference is an indirect pointer to a Parameter, where each usage of a Parameter has a corresponding Reference. This allows for usage tracking and safe deletion.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-ParameterV1**](#create-parameter-v1) | **POST** `/parameter-storage/v1/parameters` | Add a new parameter.
[**Remove-ParameterV1**](#delete-parameter-v1) | **DELETE** `/parameter-storage/v1/parameters/{id}` | Delete a parameter.
[**Get-AttestationDocumentV1**](#get-attestation-document-v1) | **GET** `/parameter-storage/v1/attestation` | Get an attestation document.
[**Get-ParameterReferencesV1**](#get-parameter-references-v1) | **GET** `/parameter-storage/v1/parameters/{id}/references` | Get parameter references.
[**Get-ParameterStorageSpecificationV1**](#get-parameter-storage-specification-v1) | **GET** `/parameter-storage/v1/specification` | Get specifications for parameter types.
[**Get-ParameterV1**](#get-parameter-v1) | **GET** `/parameter-storage/v1/parameters/{id}` | Get a specific parameter.
[**Search-ParametersV1**](#search-parameters-v1) | **GET** `/parameter-storage/v1/parameters` | Query stored parameters.
[**Update-ParameterV1**](#update-parameter-v1) | **PATCH** `/parameter-storage/v1/parameters/{id}` | Update a parameter.


## create-parameter-v1
Add a new parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-parameter-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Parameterstoragenewparameter | [**Parameterstoragenewparameter**](../models/parameterstoragenewparameter) |   (optional) | The parameter to add to the store.

### Return type
[**Parameterstorageparameter**](../models/parameterstorageparameter)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created Parameter. | Parameterstorageparameter
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAttestationDocumentV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAttestationDocumentV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Parameterstoragenewparameter = @""@

# Add a new parameter.

try {
    New-ParameterV1 
    
    # Below is a request that includes all optional parameters
    # New-ParameterV1 -Parameterstoragenewparameter $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-ParameterV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-parameter-v1
Delete a parameter. Will only delete parameters without existing references.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-parameter-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the parameter to be deleted.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Parameter deleted. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAttestationDocumentV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
409 | Conflict - Indicates that the request could not be processed because of conflict in the current state of the resource. | DeleteParameterV1409Response
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAttestationDocumentV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "58de858b-83d9-4563-9e15-7393594c684a" # String | The ID of the parameter to be deleted.

# Delete a parameter.

try {
    Remove-ParameterV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-ParameterV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-ParameterV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-attestation-document-v1
Get an attestation document containing a NIST P-384 service public key for an ECDHE handshake, enabling the end-to-end-encrypted transport of parameter private fields.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-attestation-document-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Key | **String** | True  | Base64Url encoded NIST P-384 public key

### Return type
[**Parameterstorageattestationdocument**](../models/parameterstorageattestationdocument)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns the attestation document. This contains the public key needed to add a parameter to the store. | Parameterstorageattestationdocument
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAttestationDocumentV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAttestationDocumentV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Key = "BLdV-KA7nSRXx2XkksQX7bmOAShARsB3CCVWodKr4dOJj_puru76wy6drBTVlSytW_rDheLwepm9xdrRuqUI7p81wMP576frFBbsjndBKyRm3eouPbDcW8MAz0XRH1BB3w==" # String | Base64Url encoded NIST P-384 public key

# Get an attestation document.

try {
    Get-AttestationDocumentV1 -Key $Key 
    
    # Below is a request that includes all optional parameters
    # Get-AttestationDocumentV1 -Key $Key  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AttestationDocumentV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-parameter-references-v1
Get the references for a given parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-parameter-references-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the parameter which you want to fetch the references for.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, consumerId, parameterId, name, usageHint**
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Parameterstoragereference[]**](../models/parameterstoragereference)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Return references for given parameter. | Parameterstoragereference[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAttestationDocumentV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAttestationDocumentV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "58de858b-83d9-4563-9e15-7393594c684a" # String | The ID of the parameter which you want to fetch the references for.
$Sorters = "consumerId,name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, consumerId, parameterId, name, usageHint** (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

# Get parameter references.

try {
    Get-ParameterReferencesV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-ParameterReferencesV1 -Id $Id -Sorters $Sorters -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ParameterReferencesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-parameter-storage-specification-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get the specifications for all parameter types. All parameters must conform to this specification document.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-parameter-storage-specification-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | AcceptLanguage | **String** |   (optional) (default to "en") | The i18n internationalization code for the language that the spec is in. Defaults to english.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns the JSON spec in the language chosen. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAttestationDocumentV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAttestationDocumentV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$AcceptLanguage = "en" # String | The i18n internationalization code for the language that the spec is in. Defaults to english. (optional) (default to "en")

# Get specifications for parameter types.

try {
    Get-ParameterStorageSpecificationV1 
    
    # Below is a request that includes all optional parameters
    # Get-ParameterStorageSpecificationV1 -AcceptLanguage $AcceptLanguage  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ParameterStorageSpecificationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-parameter-v1
Get a parameter by ID. This will only return the public fields for the parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-parameter-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the parameter to be fetched

### Return type
[**Parameterstorageparameter**](../models/parameterstorageparameter)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Return Parameter. | Parameterstorageparameter
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAttestationDocumentV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAttestationDocumentV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "58de858b-83d9-4563-9e15-7393594c684a" # String | The ID of the parameter to be fetched

# Get a specific parameter.

try {
    Get-ParameterV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-ParameterV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ParameterV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## search-parameters-v1
Query a stored parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v1/search-parameters-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, in, co*  **description**: *co*  **ownerId**: *eq*  **type**: *eq, sw*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, ownerId, type, description, lastModifiedAt, lastModifiedBy, privateFieldsLastModifiedAt, privateFieldsLastModifiedAt**
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Parameterstorageparameter[]**](../models/parameterstorageparameter)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Search returned results. | Parameterstorageparameter[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAttestationDocumentV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAttestationDocumentV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Filters = 'id eq 550e8400-e29b-41d4-a716-446655440000' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, in, co*  **description**: *co*  **ownerId**: *eq*  **type**: *eq, sw* (optional)
$Sorters = "type,name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, ownerId, type, description, lastModifiedAt, lastModifiedBy, privateFieldsLastModifiedAt, privateFieldsLastModifiedAt** (optional)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

# Query stored parameters.

try {
    Search-ParametersV1 
    
    # Below is a request that includes all optional parameters
    # Search-ParametersV1 -Filters $Filters -Sorters $Sorters -Offset $Offset -Limit $Limit  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Search-ParametersV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-parameter-v1
Update a parameter. You cannot change a parameter's type once set. Only the name, owner, description, public fields, and private fields can be updated. Private field updates are made via JWE AES256 encrypted blobs.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-parameter-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the parameter to be updated.
 Body  | Parameterstorageupdateparameter | [**Parameterstorageupdateparameter**](../models/parameterstorageupdateparameter) |   (optional) | The updated parameter. Supports both full and RFC 6902 JSON Patch updates. For RFC 6902 JSON Patch updates, move and copy operations are not supported for privateField updates.

### Return type
[**Parameterstorageparameter**](../models/parameterstorageparameter)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated Parameter. | Parameterstorageparameter
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAttestationDocumentV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
409 | Conflict - Indicates that the request could not be processed because of conflict in the current state of the resource. | DeleteParameterV1409Response
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAttestationDocumentV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json, application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "58de858b-83d9-4563-9e15-7393594c684a" # String | The ID of the parameter to be updated.
$Parameterstorageupdateparameter = @""@

# Update a parameter.

try {
    Update-ParameterV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Update-ParameterV1 -Id $Id -Parameterstorageupdateparameter $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-ParameterV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
