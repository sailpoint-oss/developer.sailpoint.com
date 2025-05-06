---
id: v2024-machine-account-mappings
title: MachineAccountMappings
pagination_label: MachineAccountMappings
sidebar_label: MachineAccountMappings
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineAccountMappings', 'V2024MachineAccountMappings'] 
slug: /tools/sdk/powershell/v2024/methods/machine-account-mappings
tags: ['SDK', 'Software Development Kit', 'MachineAccountMappings', 'V2024MachineAccountMappings']
---

# MachineAccountMappings
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2024MachineAccountMappings**](#create-machine-account-mappings) | **POST** `/sources/{sourceId}/machine-account-mappings` | Create Machine Account Mappings
[**Remove-V2024MachineAccountMappings**](#delete-machine-account-mappings) | **DELETE** `/sources/{sourceId}/machine-account-mappings` | Delete Source&#39;s Machine Account Mappings
[**Get-V2024MachineAccountMappings**](#list-machine-account-mappings) | **GET** `/sources/{sourceId}/machine-account-mappings` | Machine Account Mapping for Source
[**Set-V2024MachineAccountMappings**](#set-machine-account-mappings) | **PUT** `/sources/{sourceId}/machine-mappings` | Update Source&#39;s Machine Account Mappings


## create-machine-account-mappings
Creates Machine Account Mappings for both identities and accounts for a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-machine-account-mappings)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Source ID.
 Body  | AttributeMappings | [**AttributeMappings**](../models/attribute-mappings) | True  | 

### Return type
[**AttributeMappings[]**](../models/attribute-mappings)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Newly created Attribute Mapping Object | AttributeMappings[]
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Source ID.
$AttributeMappings = @"{
  "transformDefinition" : {
    "attributes" : {
      "input" : {
        "attributes" : {
          "name" : "8d3e0094e99445de98eef6c75e25jc04",
          "attributeName" : "givenName",
          "sourceName" : "delimited-src"
        },
        "type" : "accountAttribute"
      }
    },
    "id" : "ToUpper",
    "type" : "reference"
  },
  "target" : {
    "sourceId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeName" : "businessApplication",
    "type" : "IDENTITY"
  }
}"@

# Create Machine Account Mappings

try {
    $Result = ConvertFrom-JsonToAttributeMappings -Json $AttributeMappings
    New-V2024MachineAccountMappings -Id $Id -AttributeMappings $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2024MachineAccountMappings -Id $Id -AttributeMappings $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024MachineAccountMappings"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-machine-account-mappings
Use this API to remove machine account attribute mappings for a Source. 
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-machine-account-mappings)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | source ID.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | No content - indicates the request was successful but there is no content to be returned in the response. | 
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | source ID.

# Delete Source's Machine Account Mappings

try {
    Remove-V2024MachineAccountMappings -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024MachineAccountMappings -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024MachineAccountMappings"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-machine-account-mappings
Retrieves Machine account mappings for a specified source using Source ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-machine-account-mappings)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Source ID
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**AttributeMappings[]**](../models/attribute-mappings)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | An array of Attribute Mapping Objects | AttributeMappings[]
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Source ID
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

# Machine Account Mapping for Source

try {
    Get-V2024MachineAccountMappings -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024MachineAccountMappings -Id $Id -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024MachineAccountMappings"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-machine-account-mappings
Use this API to update Machine Account Attribute Mapping for a Source. A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/set-machine-account-mappings)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Source ID.
 Body  | AttributeMappings | [**AttributeMappings**](../models/attribute-mappings) | True  | 

### Return type
[**AttributeMappings[]**](../models/attribute-mappings)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated Machine Account Attributes for a Source. | AttributeMappings[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Source ID.
$AttributeMappings = @"{
  "transformDefinition" : {
    "attributes" : {
      "input" : {
        "attributes" : {
          "name" : "8d3e0094e99445de98eef6c75e25jc04",
          "attributeName" : "givenName",
          "sourceName" : "delimited-src"
        },
        "type" : "accountAttribute"
      }
    },
    "id" : "ToUpper",
    "type" : "reference"
  },
  "target" : {
    "sourceId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeName" : "businessApplication",
    "type" : "IDENTITY"
  }
}"@

# Update Source's Machine Account Mappings

try {
    $Result = ConvertFrom-JsonToAttributeMappings -Json $AttributeMappings
    Set-V2024MachineAccountMappings -Id $Id -AttributeMappings $Result 
    
    # Below is a request that includes all optional parameters
    # Set-V2024MachineAccountMappings -Id $Id -AttributeMappings $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-V2024MachineAccountMappings"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
