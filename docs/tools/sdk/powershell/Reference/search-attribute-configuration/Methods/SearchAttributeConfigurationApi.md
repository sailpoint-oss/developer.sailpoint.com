---
id: search-attribute-configuration
title: SearchAttributeConfiguration
pagination_label: SearchAttributeConfiguration
sidebar_label: SearchAttributeConfiguration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchAttributeConfiguration', 'SearchAttributeConfiguration'] 
slug: /tools/sdk/powershell/searchattributeconfiguration/methods/search-attribute-configuration
tags: ['SDK', 'Software Development Kit', 'SearchAttributeConfiguration', 'SearchAttributeConfiguration']
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

Refer to [Search Attribute Configuration](https://developer.sailpoint.com/docs/extensibility/rules/rule-utility/#configuration-of-search-attributes-within-identity-security-cloud) for more information about ISC&#39;s search and its different possibilities. 

With Search Attribute Configuration, administrators can create, manage, and run searches based on the attributes they want to search. 
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-SearchAttributeConfigV1**](#create-search-attribute-config-v1) | **POST** `/accounts/v1/search-attribute-config` | Create extended search attributes
[**Remove-SearchAttributeConfigV1**](#delete-search-attribute-config-v1) | **DELETE** `/accounts/v1/search-attribute-config/{name}` | Delete extended search attribute
[**Get-SearchAttributeConfigV1**](#get-search-attribute-config-v1) | **GET** `/accounts/v1/search-attribute-config` | List extended search attributes
[**Get-SingleSearchAttributeConfigV1**](#get-single-search-attribute-config-v1) | **GET** `/accounts/v1/search-attribute-config/{name}` | Get extended search attribute
[**Update-SearchAttributeConfigV1**](#patch-search-attribute-config-v1) | **PATCH** `/accounts/v1/search-attribute-config/{name}` | Update extended search attribute


## create-search-attribute-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create and configure extended search attributes.  This API accepts an attribute name, an attribute display name and a list of name/value pair associates of application IDs to attribute names.  It will then validate the inputs and configure/create the attribute promotion configuration in the Link ObjectConfig.
>**Note: Give searchable attributes unique names.  Do not give them the same names used for account attributes or source attributes.  Also, do not give them the same names present in account schema for a current or future source, regardless of whether that source is included in the searchable attributes' `applicationAttributes`.**

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-search-attribute-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Searchattributeconfig | [**Searchattributeconfig**](../models/searchattributeconfig) | True  | 

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSearchAttributeConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSearchAttributeConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Searchattributeconfig = @"{"name":"newMailAttribute","displayName":"New Mail Attribute","applicationAttributes":{"2c9180866166b5b0016167c32ef31a66":"mail","2c9180866166b5b0016167c32ef31a67":"mail"}}"@

# Create extended search attributes

try {
    $Result = ConvertFrom-JsonToSearchattributeconfig -Json $Searchattributeconfig
    New-SearchAttributeConfigV1 -XSailPointExperimental $XSailPointExperimental -Searchattributeconfig $Result 
    
    # Below is a request that includes all optional parameters
    # New-SearchAttributeConfigV1 -XSailPointExperimental $XSailPointExperimental -Searchattributeconfig $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-SearchAttributeConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-search-attribute-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete an extended attribute configuration by name.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-search-attribute-config-v1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSearchAttributeConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSearchAttributeConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Name = "newMailAttribute" # String | Name of the extended search attribute configuration to delete.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Delete extended search attribute

try {
    Remove-SearchAttributeConfigV1 -Name $Name -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-SearchAttributeConfigV1 -Name $Name -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-SearchAttributeConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-search-attribute-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get a list of attribute/application attributes currently configured in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-search-attribute-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Searchattributeconfig[]**](../models/searchattributeconfig)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of attribute configurations in ISC. | Searchattributeconfig[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSearchAttributeConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSearchAttributeConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Get-SearchAttributeConfigV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-SearchAttributeConfigV1 -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SearchAttributeConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-single-search-attribute-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get an extended attribute configuration by name.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-single-search-attribute-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Name | **String** | True  | Name of the extended search attribute configuration to get.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**Searchattributeconfig**](../models/searchattributeconfig)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Specific attribute configuration in IdentityNow. | Searchattributeconfig
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSearchAttributeConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSearchAttributeConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Name = "newMailAttribute" # String | Name of the extended search attribute configuration to get.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get extended search attribute

try {
    Get-SingleSearchAttributeConfigV1 -Name $Name -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-SingleSearchAttributeConfigV1 -Name $Name -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SingleSearchAttributeConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-search-attribute-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update an existing search attribute configuration. 
You can patch these fields:
* name  * displayName * applicationAttributes

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-search-attribute-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Name | **String** | True  | Name of the search attribute configuration to patch.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | 

### Return type
[**Searchattributeconfig**](../models/searchattributeconfig)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the search attribute configuration as updated. | Searchattributeconfig
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSearchAttributeConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSearchAttributeConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Name = "promotedMailAttribute" # String | Name of the search attribute configuration to patch.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
 $Jsonpatchoperation = @"[{"op":"replace","path":"/name","value":"newAttributeName"},{"op":"replace","path":"/displayName","value":"new attribute display name"},{"op":"add","path":"/applicationAttributes","value":{"2c91808b79fd2422017a0b35d30f3968":"employeeNumber"}}]"@ # Jsonpatchoperation[] | 
 

# Update extended search attribute

try {
    $Result = ConvertFrom-JsonToJsonpatchoperation -Json $Jsonpatchoperation
    Update-SearchAttributeConfigV1 -Name $Name -XSailPointExperimental $XSailPointExperimental -Jsonpatchoperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-SearchAttributeConfigV1 -Name $Name -XSailPointExperimental $XSailPointExperimental -Jsonpatchoperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-SearchAttributeConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
