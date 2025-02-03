---
id: search-attribute-configuration
title: SearchAttributeConfiguration
pagination_label: SearchAttributeConfiguration
sidebar_label: SearchAttributeConfiguration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchAttributeConfiguration', 'SearchAttributeConfiguration'] 
slug: /tools/sdk/powershell/v3/methods/search-attribute-configuration
tags: ['SDK', 'Software Development Kit', 'SearchAttributeConfiguration', 'SearchAttributeConfiguration']
---

# SearchAttributeConfiguration
  Use this API to implement search attribute configuration functionality, along with [Search](https://developer.sailpoint.com/docs/api/v3/search).
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
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-SearchAttributeConfig**](#create-search-attribute-config) | **POST** `/accounts/search-attribute-config` | Create Extended Search Attributes
[**Remove-SearchAttributeConfig**](#delete-search-attribute-config) | **DELETE** `/accounts/search-attribute-config/{name}` | Delete Extended Search Attribute
[**Get-SearchAttributeConfig**](#get-search-attribute-config) | **GET** `/accounts/search-attribute-config` | List Extended Search Attributes
[**Get-SingleSearchAttributeConfig**](#get-single-search-attribute-config) | **GET** `/accounts/search-attribute-config/{name}` | Get Extended Search Attribute
[**Update-SearchAttributeConfig**](#patch-search-attribute-config) | **PATCH** `/accounts/search-attribute-config/{name}` | Update Extended Search Attribute

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
    New-SearchAttributeConfig -SearchAttributeConfig $Result
    
    # Below is a request that includes all optional parameters
    # New-SearchAttributeConfig -SearchAttributeConfig $SearchAttributeConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-SearchAttributeConfig"
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
    Remove-SearchAttributeConfig -Name $Name 
    
    # Below is a request that includes all optional parameters
    # Remove-SearchAttributeConfig -Name $Name  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-SearchAttributeConfig"
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
    Get-SearchAttributeConfig
    
    # Below is a request that includes all optional parameters
    # Get-SearchAttributeConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SearchAttributeConfig"
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
    Get-SingleSearchAttributeConfig -Name $Name 
    
    # Below is a request that includes all optional parameters
    # Get-SingleSearchAttributeConfig -Name $Name  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SingleSearchAttributeConfig"
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
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | 
 

# Update Extended Search Attribute

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-SearchAttributeConfig -Name $Name  -JsonPatchOperation $Result
    
    # Below is a request that includes all optional parameters
    # Update-SearchAttributeConfig -Name $Name -JsonPatchOperation $JsonPatchOperation  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-SearchAttributeConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
