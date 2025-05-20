---
id: v2025-search-attribute-configuration
title: SearchAttributeConfiguration
pagination_label: SearchAttributeConfiguration
sidebar_label: SearchAttributeConfiguration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchAttributeConfiguration', 'V2025SearchAttributeConfiguration'] 
slug: /tools/sdk/powershell/v2025/methods/search-attribute-configuration
tags: ['SDK', 'Software Development Kit', 'SearchAttributeConfiguration', 'V2025SearchAttributeConfiguration']
---

# SearchAttributeConfiguration
  Use this API to implement search attribute configuration functionality, along with [Search](https://developer.sailpoint.com/docs/api/v2025/search).
With this functionality in place, administrators can create custom search attributes that and run extended searches based on those attributes to further narrow down their searches and get the information and insights they want. 

Identity Security Cloud (ISC) enables organizations to store user data from across all their connected sources and manage the users&#39; access, so the ability to query and filter that data is essential.  
Its search goes through all those sources and finds the results quickly and specifically. 

The search query is flexible - it can be very broad or very narrow. 
The search only returns results for searchable objects it is filtering for. 
The following objects are searchable: identities, roles, access profiles, entitlements, events, and account activities. 
By default, no filter is applied, so a search for &quot;Ad&quot; returns both the identity &quot;Adam.Archer&quot; as well as the role &quot;Administrator.&quot;

Users can further narrow their results by using ISC&#39;s specific syntax and punctuation to structure their queries. 
For example, the query &quot;attributes.location:austin AND NOT manager.name:amanda.ross&quot; returns all results associated with the Austin location, but it excludes those associated with the manager Amanda Ross.
Refer to [Building a Search Query](https://documentation.sailpoint.com/saas/help/search/building-query.html) for more information about how to construct specific search queries. 

Refer to [Using Search](https://documentation.sailpoint.com/saas/help/search/index.html) for more information about ISC&#39;s search and its different possibilities. 

With Search Attribute Configuration, administrators can create, manage, and run searches based on the attributes they want to search. 
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2025SearchAttributeConfig**](#create-search-attribute-config) | **POST** `/accounts/search-attribute-config` | Create extended search attributes
[**Remove-V2025SearchAttributeConfig**](#delete-search-attribute-config) | **DELETE** `/accounts/search-attribute-config/{name}` | Delete extended search attribute
[**Get-V2025SearchAttributeConfig**](#get-search-attribute-config) | **GET** `/accounts/search-attribute-config` | List extended search attributes
[**Get-V2025SingleSearchAttributeConfig**](#get-single-search-attribute-config) | **GET** `/accounts/search-attribute-config/{name}` | Get extended search attribute
[**Update-V2025SearchAttributeConfig**](#patch-search-attribute-config) | **PATCH** `/accounts/search-attribute-config/{name}` | Update extended search attribute


## create-search-attribute-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create and configure extended search attributes.  This API accepts an attribute name, an attribute display name and a list of name/value pair associates of application IDs to attribute names.  It will then validate the inputs and configure/create the attribute promotion configuration in the Link ObjectConfig.
>**Note: Give searchable attributes unique names.  Do not give them the same names used for account attributes or source attributes.  Also, do not give them the same names present in account schema for a current or future source, regardless of whether that source is included in the searchable attributes' `applicationAttributes`.**

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-search-attribute-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$SearchAttributeConfig = @"{
  "displayName" : "New Mail Attribute",
  "name" : "newMailAttribute",
  "applicationAttributes" : {
    "2c91808b79fd2422017a0b35d30f3968" : "employeeNumber",
    "2c91808b79fd2422017a0b36008f396b" : "employeeNumber"
  }
}"@

# Create extended search attributes

try {
    $Result = ConvertFrom-JsonToSearchAttributeConfig -Json $SearchAttributeConfig
    New-V2025SearchAttributeConfig -XSailPointExperimental $XSailPointExperimental -SearchAttributeConfig $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2025SearchAttributeConfig -XSailPointExperimental $XSailPointExperimental -SearchAttributeConfig $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2025SearchAttributeConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-search-attribute-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete an extended attribute configuration by name.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-search-attribute-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Name | **String** | True  | Name of the extended search attribute configuration to delete.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Delete extended search attribute

try {
    Remove-V2025SearchAttributeConfig -Name $Name -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-V2025SearchAttributeConfig -Name $Name -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2025SearchAttributeConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-search-attribute-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get a list of attribute/application attributes currently configured in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-search-attribute-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**SearchAttributeConfig[]**](../models/search-attribute-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of attribute configurations in ISC. | SearchAttributeConfig[]
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

# List extended search attributes

try {
    Get-V2025SearchAttributeConfig -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025SearchAttributeConfig -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025SearchAttributeConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-single-search-attribute-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get an extended attribute configuration by name.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-single-search-attribute-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Name | **String** | True  | Name of the extended search attribute configuration to get.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**SearchAttributeConfig**](../models/search-attribute-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Specific attribute configuration in IdentityNow. | SearchAttributeConfig
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
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
$Name = "newMailAttribute" # String | Name of the extended search attribute configuration to get.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get extended search attribute

try {
    Get-V2025SingleSearchAttributeConfig -Name $Name -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025SingleSearchAttributeConfig -Name $Name -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025SingleSearchAttributeConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-search-attribute-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update an existing search attribute configuration. 
You can patch these fields:
* name  * displayName * applicationAttributes

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-search-attribute-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Name | **String** | True  | Name of the search attribute configuration to patch.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | 

### Return type
[**SearchAttributeConfig**](../models/search-attribute-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the search attribute configuration as updated. | SearchAttributeConfig
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | 
 

# Update extended search attribute

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-V2025SearchAttributeConfig -Name $Name -XSailPointExperimental $XSailPointExperimental -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-V2025SearchAttributeConfig -Name $Name -XSailPointExperimental $XSailPointExperimental -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2025SearchAttributeConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
