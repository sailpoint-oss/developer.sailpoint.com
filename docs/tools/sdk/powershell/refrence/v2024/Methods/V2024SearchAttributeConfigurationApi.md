---
id: search-attribute-configuration
title: SearchAttributeConfiguration
pagination_label: SearchAttributeConfiguration
sidebar_label: SearchAttributeConfiguration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchAttributeConfiguration'] 
slug: /tools/sdk/powershell/v2024/methods/search-attribute-configuration
tags: ['SDK', 'Software Development Kit', 'SearchAttributeConfiguration']
---


# SearchAttributeConfiguration

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2024SearchAttributeConfig**](#create-search-attribute-config) | **POST** `/accounts/search-attribute-config` | Create Extended Search Attributes
[**Remove-V2024SearchAttributeConfig**](#delete-search-attribute-config) | **DELETE** `/accounts/search-attribute-config/{name}` | Delete Extended Search Attribute
[**Get-V2024SearchAttributeConfig**](#get-search-attribute-config) | **GET** `/accounts/search-attribute-config` | List Extended Search Attributes
[**Get-V2024SingleSearchAttributeConfig**](#get-single-search-attribute-config) | **GET** `/accounts/search-attribute-config/{name}` | Get Extended Search Attribute
[**Update-V2024SearchAttributeConfig**](#patch-search-attribute-config) | **PATCH** `/accounts/search-attribute-config/{name}` | Update Extended Search Attribute


## create-search-attribute-config

Create and configure extended search attributes. This API accepts an attribute name, an attribute display name and a list of name/value pair associates of application IDs to attribute names. It will then validate the inputs and configure/create and attribute promotion configuration in the Link ObjectConfig.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | SearchAttributeConfig | [**SearchAttributeConfig**](../models/search-attribute-config) | True  | 

### Return type

[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
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
$SearchAttributeConfig = @"{
  "displayName" : "New Mail Attribute",
  "name" : "newMailAttribute",
  "applicationAttributes" : {
    "2c91808b79fd2422017a0b35d30f3968" : "employeeNumber",
    "2c91808b79fd2422017a0b36008f396b" : "employeeNumber"
  }
}"@
# Create Extended Search Attributes
try {
    $Result = ConvertFrom-JsonToSearchAttributeConfig -Json $SearchAttributeConfig
    New-V2024SearchAttributeConfig-V2024SearchAttributeConfig $Result
    
    # Below is a request that includes all optional parameters
    # New-V2024SearchAttributeConfig -V2024SearchAttributeConfig $SearchAttributeConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024SearchAttributeConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-search-attribute-config

Delete an extended attribute configuration by name.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Name | **String** | True  | Name of the extended search attribute configuration to delete.

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

### Example
```powershell
$Name = "newMailAttribute" # String | Name of the extended search attribute configuration to delete.
# Delete Extended Search Attribute
try {
    Remove-V2024SearchAttributeConfig-V2024Name $Name 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024SearchAttributeConfig -V2024Name $Name  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024SearchAttributeConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-search-attribute-config

Get a list of attribute/application associates currently configured in Identity Security Cloud (ISC).

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type

[**SearchAttributeConfig[]**](../models/search-attribute-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of attribute configurations in IdentityNow. | SearchAttributeConfig[]
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
# List Extended Search Attributes
try {
    Get-V2024SearchAttributeConfig
    
    # Below is a request that includes all optional parameters
    # Get-V2024SearchAttributeConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024SearchAttributeConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-single-search-attribute-config

Get an extended attribute configuration by name.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Name | **String** | True  | Name of the extended search attribute configuration to retrieve.

### Return type

[**SearchAttributeConfig[]**](../models/search-attribute-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Specific attribute configuration in ISC. | SearchAttributeConfig[]
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

### Example
```powershell
$Name = "newMailAttribute" # String | Name of the extended search attribute configuration to retrieve.
# Get Extended Search Attribute
try {
    Get-V2024SingleSearchAttributeConfig-V2024Name $Name 
    
    # Below is a request that includes all optional parameters
    # Get-V2024SingleSearchAttributeConfig -V2024Name $Name  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024SingleSearchAttributeConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## patch-search-attribute-config

Update an existing search attribute configuration. 
You can patch these fields:
* name  * displayName * applicationAttributes

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Name | **String** | True  | Name of the search attribute configuration to patch.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | 

### Return type

[**SearchAttributeConfig**](../models/search-attribute-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The updated search attribute configuration. | SearchAttributeConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Name = "promotedMailAttribute" # String | Name of the search attribute configuration to patch.
 # JsonPatchOperation[] | 
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ 

# Update Extended Search Attribute
try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-V2024SearchAttributeConfig-V2024Name $Name -V2024JsonPatchOperation $Result
    
    # Below is a request that includes all optional parameters
    # Update-V2024SearchAttributeConfig -V2024Name $Name -V2024JsonPatchOperation $JsonPatchOperation  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024SearchAttributeConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


