---
id: access-model-metadata
title: AccessModelMetadata
pagination_label: AccessModelMetadata
sidebar_label: AccessModelMetadata
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessModelMetadata', 'AccessModelMetadata'] 
slug: /tools/sdk/powershell/accessmodelmetadata/methods/access-model-metadata
tags: ['SDK', 'Software Development Kit', 'AccessModelMetadata', 'AccessModelMetadata']
---

# AccessModelMetadata
  Use this API to create and manage metadata attributes for your Access Model.
Access Model Metadata allows you to add contextual information to your ISC Access Model items using pre-defined metadata for risk, regulations, privacy levels, etc., or by creating your own metadata attributes to reflect the unique needs of your organization. This release of the API includes support for entitlement metadata. Support for role and access profile metadata will be introduced in a subsequent release.

Common usages for Access Model metadata include:

- Organizing and categorizing access items to make it easier for your users to search for and find the access rights they want to request, certify, or manage.

- Providing richer information about access that is being acted on to allow stakeholders to make better decisions when approving, certifying, or managing access rights.

- Identifying access that may requires additional approval requirements or be subject to more frequent review.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-AccessModelMetadataAttributeV1**](#create-access-model-metadata-attribute-v1) | **POST** `/access-model-metadata/v1/attributes` | Create access model metadata attribute
[**New-AccessModelMetadataAttributeValueV1**](#create-access-model-metadata-attribute-value-v1) | **POST** `/access-model-metadata/v1/attributes/{key}/values` | Create access model metadata value
[**Get-AccessModelMetadataAttributeV1**](#get-access-model-metadata-attribute-v1) | **GET** `/access-model-metadata/v1/attributes/{key}` | Get access model metadata attribute
[**Get-AccessModelMetadataAttributeValueV1**](#get-access-model-metadata-attribute-value-v1) | **GET** `/access-model-metadata/v1/attributes/{key}/values/{value}` | Get access model metadata value
[**Get-AccessModelMetadataAttributeV1**](#list-access-model-metadata-attribute-v1) | **GET** `/access-model-metadata/v1/attributes` | List access model metadata attributes
[**Get-AccessModelMetadataAttributeValueV1**](#list-access-model-metadata-attribute-value-v1) | **GET** `/access-model-metadata/v1/attributes/{key}/values` | List access model metadata values
[**Update-AccessModelMetadataAttributeV1**](#update-access-model-metadata-attribute-v1) | **PATCH** `/access-model-metadata/v1/attributes/{key}` | Update access model metadata attribute
[**Update-AccessModelMetadataAttributeValueV1**](#update-access-model-metadata-attribute-value-v1) | **PATCH** `/access-model-metadata/v1/attributes/{key}/values/{value}` | Update access model metadata value
[**Update-AccessModelMetadataByFilterV1**](#update-access-model-metadata-by-filter-v1) | **POST** `/access-model-metadata/v1/bulk-update/filter` | Metadata Attribute update by filter
[**Update-AccessModelMetadataByIdsV1**](#update-access-model-metadata-by-ids-v1) | **POST** `/access-model-metadata/v1/bulk-update/ids` | Metadata Attribute update by ids
[**Update-AccessModelMetadataByQueryV1**](#update-access-model-metadata-by-query-v1) | **POST** `/access-model-metadata/v1/bulk-update/query` | Metadata Attribute update by query


## create-access-model-metadata-attribute-v1
Create a new Access Model Metadata Attribute.


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-access-model-metadata-attribute-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Attributedto | [**Attributedto**](../models/attributedto) | True  | Attribute to create

### Return type
[**Attributedto**](../models/attributedto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created | Attributedto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Attributedto = @""@

# Create access model metadata attribute

try {
    $Result = ConvertFrom-JsonToAttributedto -Json $Attributedto
    New-AccessModelMetadataAttributeV1 -Attributedto $Result 
    
    # Below is a request that includes all optional parameters
    # New-AccessModelMetadataAttributeV1 -Attributedto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-AccessModelMetadataAttributeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-access-model-metadata-attribute-value-v1
Create a new value for an existing Access Model Metadata Attribute.    


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-access-model-metadata-attribute-value-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Key | **String** | True  | Technical name of the Attribute.
 Body  | Attributevaluedto | [**Attributevaluedto**](../models/attributevaluedto) | True  | Attribute value to create

### Return type
[**Attributevaluedto**](../models/attributevaluedto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created | Attributevaluedto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Key = "iscPrivacy" # String | Technical name of the Attribute.
$Attributevaluedto = @""@

# Create access model metadata value

try {
    $Result = ConvertFrom-JsonToAttributevaluedto -Json $Attributevaluedto
    New-AccessModelMetadataAttributeValueV1 -Key $Key -Attributevaluedto $Result 
    
    # Below is a request that includes all optional parameters
    # New-AccessModelMetadataAttributeValueV1 -Key $Key -Attributevaluedto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-AccessModelMetadataAttributeValueV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-access-model-metadata-attribute-v1
Get single Access Model Metadata Attribute

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-access-model-metadata-attribute-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Key | **String** | True  | Technical name of the Attribute.

### Return type
[**Attributedto**](../models/attributedto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | Attributedto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Key = "iscPrivacy" # String | Technical name of the Attribute.

# Get access model metadata attribute

try {
    Get-AccessModelMetadataAttributeV1 -Key $Key 
    
    # Below is a request that includes all optional parameters
    # Get-AccessModelMetadataAttributeV1 -Key $Key  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AccessModelMetadataAttributeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-access-model-metadata-attribute-value-v1
Get single Access Model Metadata Attribute Value

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-access-model-metadata-attribute-value-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Key | **String** | True  | Technical name of the Attribute.
Path   | Value | **String** | True  | Technical name of the Attribute value.

### Return type
[**Attributevaluedto**](../models/attributevaluedto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | Attributevaluedto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Key = "iscPrivacy" # String | Technical name of the Attribute.
$Value = "public" # String | Technical name of the Attribute value.

# Get access model metadata value

try {
    Get-AccessModelMetadataAttributeValueV1 -Key $Key -Value $Value 
    
    # Below is a request that includes all optional parameters
    # Get-AccessModelMetadataAttributeValueV1 -Key $Key -Value $Value  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AccessModelMetadataAttributeValueV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-access-model-metadata-attribute-v1
Get a list of Access Model Metadata Attributes

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-access-model-metadata-attribute-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, key**
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Attributedto[]**](../models/attributedto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | Attributedto[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Filters = 'name eq "Privacy"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or* (optional)
$Sorters = "name,-key" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, key** (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List access model metadata attributes

try {
    Get-AccessModelMetadataAttributeV1 
    
    # Below is a request that includes all optional parameters
    # Get-AccessModelMetadataAttributeV1 -Filters $Filters -Sorters $Sorters -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AccessModelMetadataAttributeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-access-model-metadata-attribute-value-v1
Get a list of Access Model Metadata Attribute Values

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-access-model-metadata-attribute-value-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Key | **String** | True  | Technical name of the Attribute.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Attributevaluedto[]**](../models/attributevaluedto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | Attributevaluedto[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Key = "iscPrivacy" # String | Technical name of the Attribute.
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List access model metadata values

try {
    Get-AccessModelMetadataAttributeValueV1 -Key $Key 
    
    # Below is a request that includes all optional parameters
    # Get-AccessModelMetadataAttributeValueV1 -Key $Key -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AccessModelMetadataAttributeValueV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-access-model-metadata-attribute-v1
Update an existing Access Model Metadata Attribute.  
The following fields are patchable: **name**, **description**, **multiselect**, **values**


[API Spec](https://developer.sailpoint.com/docs/api/v1/update-access-model-metadata-attribute-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Key | **String** | True  | Technical name of the Attribute.
 Body  | Jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | JSON Patch array to apply

### Return type
[**Attributedto**](../models/attributedto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK - Attribute updated successfully | Attributedto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Key = "iscPrivacy" # String | Technical name of the Attribute.
 $Jsonpatchoperation = @""@ # Jsonpatchoperation[] | JSON Patch array to apply
 

# Update access model metadata attribute

try {
    $Result = ConvertFrom-JsonToJsonpatchoperation -Json $Jsonpatchoperation
    Update-AccessModelMetadataAttributeV1 -Key $Key -Jsonpatchoperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-AccessModelMetadataAttributeV1 -Key $Key -Jsonpatchoperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-AccessModelMetadataAttributeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-access-model-metadata-attribute-value-v1
Update an existing Access Model Metadata Attribute Value.    
The following fields are patchable: **name**


[API Spec](https://developer.sailpoint.com/docs/api/v1/update-access-model-metadata-attribute-value-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Key | **String** | True  | Technical name of the Attribute.
Path   | Value | **String** | True  | Technical name of the Attribute value.
 Body  | Jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | JSON Patch array to apply

### Return type
[**Attributevaluedto**](../models/attributevaluedto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK - Attribute value updated successfully | Attributevaluedto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Key = "iscPrivacy" # String | Technical name of the Attribute.
$Value = "public" # String | Technical name of the Attribute value.
 $Jsonpatchoperation = @""@ # Jsonpatchoperation[] | JSON Patch array to apply
 

# Update access model metadata value

try {
    $Result = ConvertFrom-JsonToJsonpatchoperation -Json $Jsonpatchoperation
    Update-AccessModelMetadataAttributeValueV1 -Key $Key -Value $Value -Jsonpatchoperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-AccessModelMetadataAttributeValueV1 -Key $Key -Value $Value -Jsonpatchoperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-AccessModelMetadataAttributeValueV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-access-model-metadata-by-filter-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Bulk update Access Model Metadata Attribute Values using a filter

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-access-model-metadata-by-filter-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Entitlementattributebulkupdatefilterrequest | [**Entitlementattributebulkupdatefilterrequest**](../models/entitlementattributebulkupdatefilterrequest) | True  | Attribute metadata bulk update request body.

### Return type
[**Accessmodelmetadatabulkupdateresponse**](../models/accessmodelmetadatabulkupdateresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | Accessmodelmetadatabulkupdateresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Entitlementattributebulkupdatefilterrequest = @""@

# Metadata Attribute update by filter

try {
    $Result = ConvertFrom-JsonToEntitlementattributebulkupdatefilterrequest -Json $Entitlementattributebulkupdatefilterrequest
    Update-AccessModelMetadataByFilterV1 -Entitlementattributebulkupdatefilterrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-AccessModelMetadataByFilterV1 -Entitlementattributebulkupdatefilterrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-AccessModelMetadataByFilterV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-access-model-metadata-by-ids-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Bulk update Access Model Metadata Attribute Values using ids.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-access-model-metadata-by-ids-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Entitlementattributebulkupdateidsrequest | [**Entitlementattributebulkupdateidsrequest**](../models/entitlementattributebulkupdateidsrequest) | True  | Attribute metadata bulk update request body.

### Return type
[**Accessmodelmetadatabulkupdateresponse**](../models/accessmodelmetadatabulkupdateresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | Accessmodelmetadatabulkupdateresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Entitlementattributebulkupdateidsrequest = @""@

# Metadata Attribute update by ids

try {
    $Result = ConvertFrom-JsonToEntitlementattributebulkupdateidsrequest -Json $Entitlementattributebulkupdateidsrequest
    Update-AccessModelMetadataByIdsV1 -Entitlementattributebulkupdateidsrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-AccessModelMetadataByIdsV1 -Entitlementattributebulkupdateidsrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-AccessModelMetadataByIdsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-access-model-metadata-by-query-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Bulk update Access Model Metadata Attribute Values using a query

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-access-model-metadata-by-query-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Entitlementattributebulkupdatequeryrequest | [**Entitlementattributebulkupdatequeryrequest**](../models/entitlementattributebulkupdatequeryrequest) | True  | Attribute metadata bulk update request body.

### Return type
[**Accessmodelmetadatabulkupdateresponse**](../models/accessmodelmetadatabulkupdateresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | Accessmodelmetadatabulkupdateresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Entitlementattributebulkupdatequeryrequest = @""@

# Metadata Attribute update by query

try {
    $Result = ConvertFrom-JsonToEntitlementattributebulkupdatequeryrequest -Json $Entitlementattributebulkupdatequeryrequest
    Update-AccessModelMetadataByQueryV1 -Entitlementattributebulkupdatequeryrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-AccessModelMetadataByQueryV1 -Entitlementattributebulkupdatequeryrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-AccessModelMetadataByQueryV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
