---
id: identity-attributes
title: IdentityAttributes
pagination_label: IdentityAttributes
sidebar_label: IdentityAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityAttributes'] 
slug: /tools/sdk/powershell/beta/methods/identity-attributes
tags: ['SDK', 'Software Development Kit', 'IdentityAttributes']
---


# IdentityAttributes

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BetaIdentityAttribute**](#create-identity-attribute) | **POST** `/identity-attributes` | Create Identity Attribute
[**Remove-BetaIdentityAttribute**](#delete-identity-attribute) | **DELETE** `/identity-attributes/{name}` | Delete Identity Attribute
[**Remove-BetaIdentityAttributesInBulk**](#delete-identity-attributes-in-bulk) | **DELETE** `/identity-attributes/bulk-delete` | Bulk delete Identity Attributes
[**Get-BetaIdentityAttribute**](#get-identity-attribute) | **GET** `/identity-attributes/{name}` | Get Identity Attribute
[**Get-BetaIdentityAttributes**](#list-identity-attributes) | **GET** `/identity-attributes` | List Identity Attributes
[**Send-BetaIdentityAttribute**](#put-identity-attribute) | **PUT** `/identity-attributes/{name}` | Update Identity Attribute


## create-identity-attribute

Use this API to create a new identity attribute.   A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | IdentityAttribute | [**IdentityAttribute**](../models/identity-attribute) | True  | 

### Return type

[**IdentityAttribute**](../models/identity-attribute)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | The identity attribute was created successfully. | IdentityAttribute
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$IdentityAttribute = @"{
  "standard" : false,
  "system" : false,
  "sources" : [ {
    "type" : "rule",
    "properties" : {
      "ruleType" : "IdentityAttribute",
      "ruleName" : "Cloud Promote Identity Attribute"
    }
  }, {
    "type" : "rule",
    "properties" : {
      "ruleType" : "IdentityAttribute",
      "ruleName" : "Cloud Promote Identity Attribute"
    }
  } ],
  "displayName" : "Cost Center",
  "name" : "costCenter",
  "type" : "string",
  "searchable" : false,
  "multi" : false
}"@
# Create Identity Attribute
try {
    $Result = ConvertFrom-JsonToIdentityAttribute -Json $IdentityAttribute
    New-BetaIdentityAttribute-BetaIdentityAttribute $Result
    
    # Below is a request that includes all optional parameters
    # New-BetaIdentityAttribute -BetaIdentityAttribute $IdentityAttribute  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaIdentityAttribute"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-identity-attribute

This deletes an identity attribute with the given name.  The `system` and `standard` properties must be set to false before you can delete an identity attribute.   A token with ORG_ADMIN authority is required to call this API.

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Name = "displayName" # String | The attribute's technical name.
# Delete Identity Attribute
try {
    Remove-BetaIdentityAttribute-BetaName $Name 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaIdentityAttribute -BetaName $Name  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaIdentityAttribute"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-identity-attributes-in-bulk

Use this API to bulk delete identity attributes for a given set of names. Attributes that are currently mapped in an identity profile cannot be deleted.  The `system` and `standard` properties must be set to 'false' before you can delete an identity attribute.   A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | IdentityAttributeNames | [**IdentityAttributeNames**](../models/identity-attribute-names) | True  | 

### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$IdentityAttributeNames = @"{
  "ids" : [ "name", "displayName" ]
}"@
# Bulk delete Identity Attributes
try {
    $Result = ConvertFrom-JsonToIdentityAttributeNames -Json $IdentityAttributeNames
    Remove-BetaIdentityAttributesInBulk-BetaIdentityAttributeNames $Result
    
    # Below is a request that includes all optional parameters
    # Remove-BetaIdentityAttributesInBulk -BetaIdentityAttributeNames $IdentityAttributeNames  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaIdentityAttributesInBulk"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-identity-attribute

This gets an identity attribute for a given technical name.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Name | **String** | True  | The attribute's technical name.

### Return type

[**IdentityAttribute**](../models/identity-attribute)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The identity attribute with the given name | IdentityAttribute
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Name = "displayName" # String | The attribute's technical name.
# Get Identity Attribute
try {
    Get-BetaIdentityAttribute-BetaName $Name 
    
    # Below is a request that includes all optional parameters
    # Get-BetaIdentityAttribute -BetaName $Name  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaIdentityAttribute"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## list-identity-attributes

Use this API to get a collection of identity attributes.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | IncludeSystem | **Boolean** |   (optional) (default to $false) | Include 'system' attributes in the response.
  Query | IncludeSilent | **Boolean** |   (optional) (default to $false) | Include 'silent' attributes in the response.
  Query | SearchableOnly | **Boolean** |   (optional) (default to $false) | Include only 'searchable' attributes in the response.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type

[**IdentityAttribute[]**](../models/identity-attribute)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of identity attributes. | IdentityAttribute[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$IncludeSystem = $false # Boolean | Include 'system' attributes in the response. (optional) (default to $false)
$IncludeSilent = $false # Boolean | Include 'silent' attributes in the response. (optional) (default to $false)
$SearchableOnly = $false # Boolean | Include only 'searchable' attributes in the response. (optional) (default to $false)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
# List Identity Attributes
try {
    Get-BetaIdentityAttributes
    
    # Below is a request that includes all optional parameters
    # Get-BetaIdentityAttributes -BetaIncludeSystem $IncludeSystem -BetaIncludeSilent $IncludeSilent -BetaSearchableOnly $SearchableOnly -BetaCount $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaIdentityAttributes"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## put-identity-attribute

This updates an existing identity attribute.  Making an attribute searchable requires that the `system`, `standard`, and `multi` properties be set to false.   A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Name | **String** | True  | The attribute's technical name.
 Body  | IdentityAttribute | [**IdentityAttribute**](../models/identity-attribute) | True  | 

### Return type

[**IdentityAttribute**](../models/identity-attribute)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The identity attribute was updated successfully | IdentityAttribute
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Name = "displayName" # String | The attribute's technical name.
$IdentityAttribute = @"{
  "standard" : false,
  "system" : false,
  "sources" : [ {
    "type" : "rule",
    "properties" : {
      "ruleType" : "IdentityAttribute",
      "ruleName" : "Cloud Promote Identity Attribute"
    }
  }, {
    "type" : "rule",
    "properties" : {
      "ruleType" : "IdentityAttribute",
      "ruleName" : "Cloud Promote Identity Attribute"
    }
  } ],
  "displayName" : "Cost Center",
  "name" : "costCenter",
  "type" : "string",
  "searchable" : false,
  "multi" : false
}"@
# Update Identity Attribute
try {
    $Result = ConvertFrom-JsonToIdentityAttribute -Json $IdentityAttribute
    Send-BetaIdentityAttribute-BetaName $Name -BetaIdentityAttribute $Result
    
    # Below is a request that includes all optional parameters
    # Send-BetaIdentityAttribute -BetaName $Name -BetaIdentityAttribute $IdentityAttribute  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaIdentityAttribute"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


