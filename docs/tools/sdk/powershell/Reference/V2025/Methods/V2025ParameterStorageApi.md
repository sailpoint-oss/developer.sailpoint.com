---
id: v2025-parameter-storage
title: ParameterStorage
pagination_label: ParameterStorage
sidebar_label: ParameterStorage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ParameterStorage', 'V2025ParameterStorage'] 
slug: /tools/sdk/powershell/v2025/methods/parameter-storage
tags: ['SDK', 'Software Development Kit', 'ParameterStorage', 'V2025ParameterStorage']
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
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2025Parameter**](#create-parameter) | **POST** `/parameter-storage/parameters` | Add a new parameter.
[**Remove-V2025Parameter**](#delete-parameter) | **DELETE** `/parameter-storage/parameters/{id}` | Delete a parameter.
[**Get-V2025AttestationDocument**](#get-attestation-document) | **GET** `/parameter-storage/attestation` | Get an attestation document.
[**Get-V2025Parameter**](#get-parameter) | **GET** `/parameter-storage/parameters/{id}` | Get a specific parameter.
[**Get-V2025ParameterReferences**](#get-parameter-references) | **GET** `/parameter-storage/parameters/{id}/references` | Get parameter references.
[**Get-V2025ParameterStorageSpecification**](#get-parameter-storage-specification) | **GET** `/parameter-storage/specification` | Get specifications for parameter types.
[**Search-V2025Parameters**](#search-parameters) | **GET** `/parameter-storage/parameters` | Query stored parameters.
[**Update-V2025Parameter**](#update-parameter) | **PATCH** `/parameter-storage/parameters/{id}` | Update a parameter.


## create-parameter
Add a new parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-parameter)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | ParameterStorageNewParameter | [**ParameterStorageNewParameter**](../models/parameter-storage-new-parameter) |   (optional) | The parameter to add to the store.

### Return type
[**ParameterStorageParameter**](../models/parameter-storage-parameter)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created Parameter. | ParameterStorageParameter
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$ParameterStorageNewParameter = @"{
  "privateFields" : "ZW5jcnlwdGVkIHBhc3N3b3JkIGhlcmUu",
  "name" : "Credentials for server.",
  "description" : "Credentials for server.",
  "publicFields" : "{\"username\": \"username\"}",
  "ownerId" : "c0b4568a4fe7458c434ee77d1fbt156b",
  "type" : "1.1"
}"@

# Add a new parameter.

try {
    New-V2025Parameter 
    
    # Below is a request that includes all optional parameters
    # New-V2025Parameter -ParameterStorageNewParameter $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2025Parameter"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-parameter
Delete a parameter. Will only delete parameters without existing references.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-parameter)

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
409 | Conflict - Indicates that the request could not be processed because of conflict in the current state of the resource. | 
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json, schema

### Example
```powershell
$Id = "58de858b-83d9-4563-9e15-7393594c684a" # String | The ID of the parameter to be deleted.

# Delete a parameter.

try {
    Remove-V2025Parameter -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2025Parameter -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2025Parameter"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-attestation-document
Get an attestation document, and perform x25519 handshake to enabled end-to-end encrypted transport of parameter private fields.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-attestation-document)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Key | **String** | True  | Base64Url encoded public key

### Return type
[**ParameterStorageAttestationDocument**](../models/parameter-storage-attestation-document)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns the attestation document. This contains the public key needed to add a parameter to the store. | ParameterStorageAttestationDocument
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Key = "cHVibGljIGtleSBnb2VzIGhlcmU=" # String | Base64Url encoded public key

# Get an attestation document.

try {
    Get-V2025AttestationDocument -Key $Key 
    
    # Below is a request that includes all optional parameters
    # Get-V2025AttestationDocument -Key $Key  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025AttestationDocument"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-parameter
Get a parameter by ID. This will only return the public fields for the parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-parameter)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the parameter to be fetched

### Return type
[**ParameterStorageParameter**](../models/parameter-storage-parameter)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Return Parameter. | ParameterStorageParameter
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "58de858b-83d9-4563-9e15-7393594c684a" # String | The ID of the parameter to be fetched

# Get a specific parameter.

try {
    Get-V2025Parameter -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2025Parameter -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025Parameter"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-parameter-references
Get the references for a given parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-parameter-references)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the parameter which you want to fetch the references for.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, consumerId, parameterId, name, usageHint**
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**ParameterStorageReference[]**](../models/parameter-storage-reference)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Return references for given parameter. | ParameterStorageReference[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

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
    Get-V2025ParameterReferences -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2025ParameterReferences -Id $Id -Sorters $Sorters -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025ParameterReferences"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-parameter-storage-specification
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get the specifications for all parameter types. All parameters must conform to this specification document.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-parameter-storage-specification)

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$AcceptLanguage = "en" # String | The i18n internationalization code for the language that the spec is in. Defaults to english. (optional) (default to "en")

# Get specifications for parameter types.

try {
    Get-V2025ParameterStorageSpecification 
    
    # Below is a request that includes all optional parameters
    # Get-V2025ParameterStorageSpecification -AcceptLanguage $AcceptLanguage  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025ParameterStorageSpecification"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## search-parameters
Query a stored parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/search-parameters)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, in, co*  **description**: *co*  **ownerId**: *eq*  **type**: *eq, sw*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, ownerId, type, description, lastModifiedAt, lastModifiedBy, privateFieldsLastModifiedAt, privateFieldsLastModifiedAt**
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**ParameterStorageParameter[]**](../models/parameter-storage-parameter)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Search returned results. | ParameterStorageParameter[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

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
    Search-V2025Parameters 
    
    # Below is a request that includes all optional parameters
    # Search-V2025Parameters -Filters $Filters -Sorters $Sorters -Offset $Offset -Limit $Limit  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Search-V2025Parameters"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-parameter
Update a parameter. You cannot change a parameter's type once set. Only the name, owner, description, public fields, and private fields can be updated. Private field updates are made via JWE AES256 encrypted blobs.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-parameter)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the parameter to be updated.
 Body  | ParameterStorageUpdateParameter | [**ParameterStorageUpdateParameter**](../models/parameter-storage-update-parameter) |   (optional) | The updated parameter. Supports both full and RFC 6902 JSON Patch updates. For RFC 6902 JSON Patch updates, move and copy operations are not supported for privateField updates.

### Return type
[**ParameterStorageParameter**](../models/parameter-storage-parameter)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated Parameter. | ParameterStorageParameter
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
409 | Conflict - Indicates that the request could not be processed because of conflict in the current state of the resource. | 
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json, application/json-patch+json
- **Accept**: application/json, schema

### Example
```powershell
$Id = "58de858b-83d9-4563-9e15-7393594c684a" # String | The ID of the parameter to be updated.
$ParameterStorageUpdateParameter = @"{
  "privateFields" : "ZW5jcnlwdGVkIHBhc3N3b3JkIGhlcmUu",
  "name" : "Credentials for server.",
  "description" : "Credentials for server.",
  "publicFields" : "{\"username\": \"username\"}",
  "ownerId" : "c0b4568a4fe7458c434ee77d1fbt156b"
}{
  "privateFields" : "ZW5jcnlwdGVkIHBhc3N3b3JkIGhlcmUu",
  "name" : "Credentials for server.",
  "description" : "Credentials for server.",
  "publicFields" : "{\"username\": \"username\"}",
  "ownerId" : "c0b4568a4fe7458c434ee77d1fbt156b"
}"@

# Update a parameter.

try {
    Update-V2025Parameter -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Update-V2025Parameter -Id $Id -ParameterStorageUpdateParameter $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2025Parameter"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
