---
id: beta-access-model-metadata
title: AccessModelMetadata
pagination_label: AccessModelMetadata
sidebar_label: AccessModelMetadata
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessModelMetadata', 'BetaAccessModelMetadata'] 
slug: /tools/sdk/powershell/beta/methods/access-model-metadata
tags: ['SDK', 'Software Development Kit', 'AccessModelMetadata', 'BetaAccessModelMetadata']
---

# AccessModelMetadata
  Use this API to create and manage metadata attributes for your Access Model.
Access Model Metadata allows you to add contextual information to your ISC Access Model items using pre-defined metadata for risk, regulations, privacy levels, etc., or by creating your own metadata attributes to reflect the unique needs of your organization. This release of the API includes support for entitlement metadata. Support for role and access profile metadata will be introduced in a subsequent release.

Common usages for Access Model metadata include:

- Organizing and categorizing access items to make it easier for your users to search for and find the access rights they want to request, certify, or manage.

- Providing richer information about access that is being acted on to allow stakeholders to make better decisions when approving, certifying, or managing access rights.

- Identifying access that may requires additional approval requirements or be subject to more frequent review.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-BetaAccessModelMetadataAttribute**](#get-access-model-metadata-attribute) | **GET** `/access-model-metadata/attributes/{key}` | Get access model metadata attribute
[**Get-BetaAccessModelMetadataAttributeValue**](#get-access-model-metadata-attribute-value) | **GET** `/access-model-metadata/attributes/{key}/values/{value}` | Get access model metadata value
[**Get-BetaAccessModelMetadataAttribute**](#list-access-model-metadata-attribute) | **GET** `/access-model-metadata/attributes` | List access model metadata attributes
[**Get-BetaAccessModelMetadataAttributeValue**](#list-access-model-metadata-attribute-value) | **GET** `/access-model-metadata/attributes/{key}/values` | List access model metadata values


## get-access-model-metadata-attribute
Get single Access Model Metadata Attribute

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-access-model-metadata-attribute)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Key | **String** | True  | Technical name of the Attribute.

### Return type
[**AttributeDTO**](../models/attribute-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | AttributeDTO
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
$Key = "iscPrivacy" # String | Technical name of the Attribute.

# Get access model metadata attribute

try {
    Get-BetaAccessModelMetadataAttribute -Key $Key 
    
    # Below is a request that includes all optional parameters
    # Get-BetaAccessModelMetadataAttribute -Key $Key  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaAccessModelMetadataAttribute"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-access-model-metadata-attribute-value
Get single Access Model Metadata Attribute Value

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-access-model-metadata-attribute-value)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Key | **String** | True  | Technical name of the Attribute.
Path   | Value | **String** | True  | Technical name of the Attribute value.

### Return type
[**AttributeValueDTO**](../models/attribute-value-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | AttributeValueDTO
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
$Key = "iscPrivacy" # String | Technical name of the Attribute.
$Value = "public" # String | Technical name of the Attribute value.

# Get access model metadata value

try {
    Get-BetaAccessModelMetadataAttributeValue -Key $Key -Value $Value 
    
    # Below is a request that includes all optional parameters
    # Get-BetaAccessModelMetadataAttributeValue -Key $Key -Value $Value  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaAccessModelMetadataAttributeValue"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-access-model-metadata-attribute
Get a list of Access Model Metadata Attributes

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-access-model-metadata-attribute)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  **Supported composite operators**: *and*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, key**
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**AttributeDTO[]**](../models/attribute-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | AttributeDTO[]
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
$Filters = 'name eq "Privacy"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  **Supported composite operators**: *and* (optional)
$Sorters = "name,-key" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, key** (optional)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List access model metadata attributes

try {
    Get-BetaAccessModelMetadataAttribute 
    
    # Below is a request that includes all optional parameters
    # Get-BetaAccessModelMetadataAttribute -Filters $Filters -Sorters $Sorters -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaAccessModelMetadataAttribute"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-access-model-metadata-attribute-value
Get a list of Access Model Metadata Attribute Values

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-access-model-metadata-attribute-value)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Key | **String** | True  | Technical name of the Attribute.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**AttributeValueDTO[]**](../models/attribute-value-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | AttributeValueDTO[]
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
$Key = "iscPrivacy" # String | Technical name of the Attribute.
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List access model metadata values

try {
    Get-BetaAccessModelMetadataAttributeValue -Key $Key 
    
    # Below is a request that includes all optional parameters
    # Get-BetaAccessModelMetadataAttributeValue -Key $Key -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaAccessModelMetadataAttributeValue"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
