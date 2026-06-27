---
id: identity-attributes
title: IdentityAttributes
pagination_label: IdentityAttributes
sidebar_label: IdentityAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityAttributes', 'IdentityAttributes'] 
slug: /tools/sdk/powershell/identityattributes/methods/identity-attributes
tags: ['SDK', 'Software Development Kit', 'IdentityAttributes', 'IdentityAttributes']
---

# IdentityAttributes
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-IdentityAttributeV1**](#create-identity-attribute-v1) | **POST** `/identity-attributes/v1` | Create identity attribute
[**Remove-IdentityAttributeV1**](#delete-identity-attribute-v1) | **DELETE** `/identity-attributes/v1/{name}` | Delete identity attribute
[**Remove-IdentityAttributesInBulkV1**](#delete-identity-attributes-in-bulk-v1) | **DELETE** `/identity-attributes/v1/bulk-delete` | Bulk delete identity attributes
[**Get-IdentityAttributeV1**](#get-identity-attribute-v1) | **GET** `/identity-attributes/v1/{name}` | Get identity attribute
[**Get-IdentityAttributesV1**](#list-identity-attributes-v1) | **GET** `/identity-attributes/v1` | List identity attributes
[**Send-IdentityAttributeV1**](#put-identity-attribute-v1) | **PUT** `/identity-attributes/v1/{name}` | Update identity attribute


## create-identity-attribute-v1
Use this API to create a new identity attribute.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-identity-attribute-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Identityattribute2 | [**Identityattribute2**](../models/identityattribute2) | True  | 

### Return type
[**Identityattribute2**](../models/identityattribute2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | The identity attribute was created successfully. | Identityattribute2
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentityAttributesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentityAttributesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Identityattribute2 = @""@

# Create identity attribute

try {
    $Result = ConvertFrom-JsonToIdentityattribute2 -Json $Identityattribute2
    New-IdentityAttributeV1 -Identityattribute2 $Result 
    
    # Below is a request that includes all optional parameters
    # New-IdentityAttributeV1 -Identityattribute2 $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-IdentityAttributeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-identity-attribute-v1
This deletes an identity attribute with the given name.  The `system` and `standard` properties must be set to false before you can delete an identity attribute.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-identity-attribute-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Name | **String** | True  | The attribute's technical name.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentityAttributesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentityAttributesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Name = "displayName" # String | The attribute's technical name.

# Delete identity attribute

try {
    Remove-IdentityAttributeV1 -Name $Name 
    
    # Below is a request that includes all optional parameters
    # Remove-IdentityAttributeV1 -Name $Name  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-IdentityAttributeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-identity-attributes-in-bulk-v1
Use this API to bulk delete identity attributes for a given set of names. Attributes that are currently mapped in an identity profile cannot be deleted.  The `system` and `standard` properties must be set to 'false' before you can delete an identity attribute.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-identity-attributes-in-bulk-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Identityattributenames | [**Identityattributenames**](../models/identityattributenames) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentityAttributesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentityAttributesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Identityattributenames = @""@

# Bulk delete identity attributes

try {
    $Result = ConvertFrom-JsonToIdentityattributenames -Json $Identityattributenames
    Remove-IdentityAttributesInBulkV1 -Identityattributenames $Result 
    
    # Below is a request that includes all optional parameters
    # Remove-IdentityAttributesInBulkV1 -Identityattributenames $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-IdentityAttributesInBulkV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-identity-attribute-v1
This gets an identity attribute for a given technical name.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-identity-attribute-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Name | **String** | True  | The attribute's technical name.

### Return type
[**Identityattribute2**](../models/identityattribute2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The identity attribute with the given name | Identityattribute2
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentityAttributesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentityAttributesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Name = "displayName" # String | The attribute's technical name.

# Get identity attribute

try {
    Get-IdentityAttributeV1 -Name $Name 
    
    # Below is a request that includes all optional parameters
    # Get-IdentityAttributeV1 -Name $Name  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-IdentityAttributeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-identity-attributes-v1
Use this API to get a collection of identity attributes.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-identity-attributes-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | IncludeSystem | **Boolean** |   (optional) (default to $false) | Include 'system' attributes in the response.
  Query | IncludeSilent | **Boolean** |   (optional) (default to $false) | Include 'silent' attributes in the response.
  Query | SearchableOnly | **Boolean** |   (optional) (default to $false) | Include only 'searchable' attributes in the response.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Identityattribute2[]**](../models/identityattribute2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of identity attributes. | Identityattribute2[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentityAttributesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentityAttributesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$IncludeSystem = $false # Boolean | Include 'system' attributes in the response. (optional) (default to $false)
$IncludeSilent = $false # Boolean | Include 'silent' attributes in the response. (optional) (default to $false)
$SearchableOnly = $false # Boolean | Include only 'searchable' attributes in the response. (optional) (default to $false)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List identity attributes

try {
    Get-IdentityAttributesV1 
    
    # Below is a request that includes all optional parameters
    # Get-IdentityAttributesV1 -IncludeSystem $IncludeSystem -IncludeSilent $IncludeSilent -SearchableOnly $SearchableOnly -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-IdentityAttributesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-identity-attribute-v1
This updates an existing identity attribute.  Making an attribute searchable requires that the `system`, `standard`, and `multi` properties be set to false.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-identity-attribute-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Name | **String** | True  | The attribute's technical name.
 Body  | Identityattribute2 | [**Identityattribute2**](../models/identityattribute2) | True  | 

### Return type
[**Identityattribute2**](../models/identityattribute2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The identity attribute was updated successfully | Identityattribute2
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentityAttributesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentityAttributesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Name = "displayName" # String | The attribute's technical name.
$Identityattribute2 = @""@

# Update identity attribute

try {
    $Result = ConvertFrom-JsonToIdentityattribute2 -Json $Identityattribute2
    Send-IdentityAttributeV1 -Name $Name -Identityattribute2 $Result 
    
    # Below is a request that includes all optional parameters
    # Send-IdentityAttributeV1 -Name $Name -Identityattribute2 $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-IdentityAttributeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
