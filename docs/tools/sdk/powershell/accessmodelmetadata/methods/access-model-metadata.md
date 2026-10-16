# AccessModelMetadata

# AccessModelMetadata
  Use this API to create and manage metadata attributes for your Access Model.
Access Model Metadata allows you to add contextual information to your ISC Access Model items using pre-defined metadata for risk, regulations, privacy levels, etc., or by creating your own metadata attributes to reflect the unique needs of your organization. This release of the API includes support for entitlement, role, and access profile metadata.

Common usages for Access Model metadata include:

- Organizing and categorizing access items to make it easier for your users to search for and find the access rights they want to request, certify, or manage.

- Providing richer information about access that is being acted on to allow stakeholders to make better decisions when approving, certifying, or managing access rights.

- Identifying access that may requires additional approval requirements or be subject to more frequent review.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-AccessModelMetadataAttributeV1**](#create-access-model-metadata-attribute-v1) | **POST** `/access-model-metadata/v1/attributes` | Create access model metadata attribute
[**New-AccessModelMetadataAttributeValueV1**](#create-access-model-metadata-attribute-value-v1) | **POST** `/access-model-metadata/v1/attributes/{key}/values` | Create access model metadata value
[**Remove-AccessModelMetadataAttributeV1**](#delete-access-model-metadata-attribute-v1) | **DELETE** `/access-model-metadata/v1/attributes/{key}` | Delete access model metadata attribute
[**Remove-AccessModelMetadataAttributeValueV1**](#delete-access-model-metadata-attribute-value-v1) | **DELETE** `/access-model-metadata/v1/attributes/{key}/values/{value}` | Delete access model metadata value
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

The **isAdhoc** field can be set on creation to indicate whether the Attribute supports ad-hoc
(dynamically created) values in addition to static values; if omitted, it defaults to *false*.

Any **values** provided at creation time must each have a *type* of *static* (or omit/leave *type*
blank); *adhoc* is not an allowed value on this public API and results in a *400* error. Ad-hoc
values are created dynamically through an internal service-to-service flow, not through this API.


[API Spec](https://developer.sailpoint.com/docs/api/create-access-model-metadata-attribute-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | AttributeDTO | [**AttributeDTO**](../models/attribute-dto) | True  | Attribute to create

### Return type
[**AttributeDTO**](../models/attribute-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created | AttributeDTO
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$AttributeDTO = @"{
  "multiselect" : false,
  "isAdhoc" : false,
  "values" : [ {
    "name" : "Public",
    "type" : "static",
    "value" : "public",
    "status" : "active"
  }, {
    "name" : "Public",
    "type" : "static",
    "value" : "public",
    "status" : "active"
  } ],
  "name" : "Privacy",
  "description" : "Specifies the level of privacy associated with an access item.",
  "type" : "governance",
  "objectTypes" : [ "entitlement" ],
  "key" : "iscPrivacy",
  "status" : "active"
}"@

# Create access model metadata attribute

try {
    $Result = ConvertFrom-JsonToAttributeDTO -Json $AttributeDTO
    New-AccessModelMetadataAttributeV1 -AttributeDTO $Result 
    
    # Below is a request that includes all optional parameters
    # New-AccessModelMetadataAttributeV1 -AttributeDTO $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-AccessModelMetadataAttributeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-access-model-metadata-attribute-value-v1
Create a new value for an existing Access Model Metadata Attribute.

The **type** field must be omitted, blank, or *static* (case-insensitive); *adhoc* is not an
allowed value on this public API and results in a *400* error. Ad-hoc values are created
dynamically through an internal service-to-service flow when the parent Attribute has *isAdhoc*
set to *true*, not through this API.


[API Spec](https://developer.sailpoint.com/docs/api/create-access-model-metadata-attribute-value-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Key | **String** | True  | Technical name of the Attribute.
 Body  | AttributeValueDTO | [**AttributeValueDTO**](../models/attribute-value-dto) | True  | Attribute value to create

### Return type
[**AttributeValueDTO**](../models/attribute-value-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created | AttributeValueDTO
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Key = "iscPrivacy" # String | Technical name of the Attribute.
$AttributeValueDTO = @"{
  "name" : "Public",
  "type" : "static",
  "value" : "public",
  "status" : "active"
}"@

# Create access model metadata value

try {
    $Result = ConvertFrom-JsonToAttributeValueDTO -Json $AttributeValueDTO
    New-AccessModelMetadataAttributeValueV1 -Key $Key -AttributeValueDTO $Result 
    
    # Below is a request that includes all optional parameters
    # New-AccessModelMetadataAttributeValueV1 -Key $Key -AttributeValueDTO $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-AccessModelMetadataAttributeValueV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-access-model-metadata-attribute-v1
Delete an existing Access Model Metadata Attribute and all of its values.


[API Spec](https://developer.sailpoint.com/docs/api/delete-access-model-metadata-attribute-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Key | **String** | True  | Technical name of the Attribute.

### Return type
[**TrackerKeyDTO**](../models/tracker-key-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK - Attribute deleted successfully | TrackerKeyDTO
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
410 | Gone - returned if the requested operation is not yet available for your tenant because the underlying capability is still being rolled out. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Key = "iscPrivacy" # String | Technical name of the Attribute.

# Delete access model metadata attribute

try {
    Remove-AccessModelMetadataAttributeV1 -Key $Key 
    
    # Below is a request that includes all optional parameters
    # Remove-AccessModelMetadataAttributeV1 -Key $Key  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-AccessModelMetadataAttributeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-access-model-metadata-attribute-value-v1
Delete an existing Access Model Metadata Attribute Value.


[API Spec](https://developer.sailpoint.com/docs/api/delete-access-model-metadata-attribute-value-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Key | **String** | True  | Technical name of the Attribute.
Path   | Value | **String** | True  | Technical name of the Attribute value.

### Return type
[**TrackerValueDTO**](../models/tracker-value-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK - Attribute value deleted successfully | TrackerValueDTO
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
410 | Gone - returned if the requested operation is not yet available for your tenant because the underlying capability is still being rolled out. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Key = "iscPrivacy" # String | Technical name of the Attribute.
$Value = "public" # String | Technical name of the Attribute value.

# Delete access model metadata value

try {
    Remove-AccessModelMetadataAttributeValueV1 -Key $Key -Value $Value 
    
    # Below is a request that includes all optional parameters
    # Remove-AccessModelMetadataAttributeValueV1 -Key $Key -Value $Value  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-AccessModelMetadataAttributeValueV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-access-model-metadata-attribute-v1
Get single Access Model Metadata Attribute

[API Spec](https://developer.sailpoint.com/docs/api/get-access-model-metadata-attribute-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

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

[API Spec](https://developer.sailpoint.com/docs/api/get-access-model-metadata-attribute-value-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response
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
Get a list of Access Model Metadata Attributes. Supports pagination through limit and offset parameters.

[API Spec](https://developer.sailpoint.com/docs/api/list-access-model-metadata-attribute-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, co*  **name**: *eq, co*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, name, type, status**
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**AttributeDTO[]**](../models/attribute-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | AttributeDTO[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Filters = 'name eq "Privacy"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, co*  **name**: *eq, co*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or* (optional)
$Sorters = "name,-key" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, name, type, status** (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List access model metadata attributes

try {
    Get-AccessModelMetadataAttributeV1 
    
    # Below is a request that includes all optional parameters
    # Get-AccessModelMetadataAttributeV1 -Filters $Filters -Sorters $Sorters -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AccessModelMetadataAttributeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-access-model-metadata-attribute-value-v1
Get a list of Access Model Metadata Attribute Values. Supports pagination through limit and offset parameters.

[API Spec](https://developer.sailpoint.com/docs/api/list-access-model-metadata-attribute-value-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Key | **String** | True  | Technical name of the Attribute.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, co*  **name**: *eq, co*  **status**: *eq*  **type**: *eq*  Supported composite operators are *and, or*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **value, name, status, type**
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**AttributeValueDTO[]**](../models/attribute-value-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | AttributeValueDTO[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Key = "iscPrivacy" # String | Technical name of the Attribute.
$Filters = 'name eq "Public"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, co*  **name**: *eq, co*  **status**: *eq*  **type**: *eq*  Supported composite operators are *and, or* (optional)
$Sorters = "name,-value" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **value, name, status, type** (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List access model metadata values

try {
    Get-AccessModelMetadataAttributeValueV1 -Key $Key 
    
    # Below is a request that includes all optional parameters
    # Get-AccessModelMetadataAttributeValueV1 -Key $Key -Filters $Filters -Sorters $Sorters -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AccessModelMetadataAttributeValueV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-access-model-metadata-attribute-v1
Update an existing Access Model Metadata Attribute.  
The following fields are patchable: **name**, **description**, **multiselect**, **isAdhoc**, **values**


[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-attribute-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Key | **String** | True  | Technical name of the Attribute.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | JSON Patch array to apply

### Return type
[**AttributeDTO**](../models/attribute-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK - Attribute updated successfully | AttributeDTO
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Key = "iscPrivacy" # String | Technical name of the Attribute.
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | JSON Patch array to apply
 

# Update access model metadata attribute

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-AccessModelMetadataAttributeV1 -Key $Key -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-AccessModelMetadataAttributeV1 -Key $Key -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-AccessModelMetadataAttributeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-access-model-metadata-attribute-value-v1
Update an existing Access Model Metadata Attribute Value.    
The following fields are patchable: **name**


[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-attribute-value-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Key | **String** | True  | Technical name of the Attribute.
Path   | Value | **String** | True  | Technical name of the Attribute value.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | JSON Patch array to apply

### Return type
[**AttributeValueDTO**](../models/attribute-value-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK - Attribute value updated successfully | AttributeValueDTO
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Key = "iscPrivacy" # String | Technical name of the Attribute.
$Value = "public" # String | Technical name of the Attribute value.
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | JSON Patch array to apply
 

# Update access model metadata value

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-AccessModelMetadataAttributeValueV1 -Key $Key -Value $Value -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-AccessModelMetadataAttributeValueV1 -Key $Key -Value $Value -JsonPatchOperation $Result  
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

[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-by-filter-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | EntitlementAttributeBulkUpdateFilterRequest | [**EntitlementAttributeBulkUpdateFilterRequest**](../models/entitlement-attribute-bulk-update-filter-request) | True  | Attribute metadata bulk update request body.

### Return type
[**AccessModelMetadataBulkUpdateResponse**](../models/access-model-metadata-bulk-update-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | AccessModelMetadataBulkUpdateResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$EntitlementAttributeBulkUpdateFilterRequest = @"{
  "values" : [ {
    "attribute" : "iscFederalClassifications",
    "values" : [ "topSecret" ]
  } ],
  "filters" : "id eq 2c9180867817ac4d017817c491119a20",
  "replaceScope" : "attribute",
  "operation" : "add"
}"@

# Metadata Attribute update by filter

try {
    $Result = ConvertFrom-JsonToEntitlementAttributeBulkUpdateFilterRequest -Json $EntitlementAttributeBulkUpdateFilterRequest
    Update-AccessModelMetadataByFilterV1 -EntitlementAttributeBulkUpdateFilterRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-AccessModelMetadataByFilterV1 -EntitlementAttributeBulkUpdateFilterRequest $Result  
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

[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-by-ids-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | EntitlementAttributeBulkUpdateIdsRequest | [**EntitlementAttributeBulkUpdateIdsRequest**](../models/entitlement-attribute-bulk-update-ids-request) | True  | Attribute metadata bulk update request body.

### Return type
[**AccessModelMetadataBulkUpdateResponse**](../models/access-model-metadata-bulk-update-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | AccessModelMetadataBulkUpdateResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$EntitlementAttributeBulkUpdateIdsRequest = @"{
  "entitlements" : [ "2c9180867817ac4d017817c491119a20", "2c9180867817ac4d017817c491119a21" ],
  "values" : [ {
    "attribute" : "iscFederalClassifications",
    "values" : [ "topSecret" ]
  } ],
  "replaceScope" : "attribute",
  "operation" : "add"
}"@

# Metadata Attribute update by ids

try {
    $Result = ConvertFrom-JsonToEntitlementAttributeBulkUpdateIdsRequest -Json $EntitlementAttributeBulkUpdateIdsRequest
    Update-AccessModelMetadataByIdsV1 -EntitlementAttributeBulkUpdateIdsRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-AccessModelMetadataByIdsV1 -EntitlementAttributeBulkUpdateIdsRequest $Result  
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

[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-by-query-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | EntitlementAttributeBulkUpdateQueryRequest | [**EntitlementAttributeBulkUpdateQueryRequest**](../models/entitlement-attribute-bulk-update-query-request) | True  | Attribute metadata bulk update request body.

### Return type
[**AccessModelMetadataBulkUpdateResponse**](../models/access-model-metadata-bulk-update-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | AccessModelMetadataBulkUpdateResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$EntitlementAttributeBulkUpdateQueryRequest = @"{
  "query" : {
    "queryDsl" : {
      "match" : {
        "name" : "john.doe"
      }
    },
    "aggregationType" : "DSL",
    "aggregationsVersion" : "",
    "query" : {
      "query" : "name:a*",
      "timeZone" : "America/Chicago",
      "fields" : "[\"firstName,lastName,email\"]",
      "innerHit" : {
        "query" : "source.name:\\\"Active Directory\\\"",
        "type" : "access"
      }
    },
    "aggregationsDsl" : { },
    "sort" : [ "displayName", "+id" ],
    "filters" : { },
    "queryVersion" : "",
    "queryType" : "SAILPOINT",
    "includeNested" : true,
    "queryResultFilter" : {
      "excludes" : [ "stacktrace" ],
      "includes" : [ "name", "displayName" ]
    },
    "indices" : [ "identities" ],
    "typeAheadQuery" : {
      "field" : "source.name",
      "size" : 100,
      "query" : "Work",
      "sortByValue" : true,
      "nestedType" : "access",
      "sort" : "asc",
      "maxExpansions" : 10
    },
    "textQuery" : {
      "contains" : true,
      "terms" : [ "The quick brown fox", "3141592", "7" ],
      "matchAny" : false,
      "fields" : [ "displayName", "employeeNumber", "roleCount" ]
    },
    "searchAfter" : [ "John Doe", "2c91808375d8e80a0175e1f88a575221" ],
    "aggregations" : {
      "filter" : {
        "field" : "access.type",
        "name" : "Entitlements",
        "type" : "TERM",
        "value" : "ENTITLEMENT"
      },
      "bucket" : {
        "field" : "attributes.city",
        "size" : 100,
        "minDocCount" : 2,
        "name" : "Identity Locations",
        "type" : "TERMS"
      },
      "metric" : {
        "field" : "@access.name",
        "name" : "Access Name Count",
        "type" : "COUNT"
      },
      "subAggregation" : {
        "filter" : {
          "field" : "access.type",
          "name" : "Entitlements",
          "type" : "TERM",
          "value" : "ENTITLEMENT"
        },
        "bucket" : {
          "field" : "attributes.city",
          "size" : 100,
          "minDocCount" : 2,
          "name" : "Identity Locations",
          "type" : "TERMS"
        },
        "metric" : {
          "field" : "@access.name",
          "name" : "Access Name Count",
          "type" : "COUNT"
        },
        "subAggregation" : {
          "filter" : {
            "field" : "access.type",
            "name" : "Entitlements",
            "type" : "TERM",
            "value" : "ENTITLEMENT"
          },
          "bucket" : {
            "field" : "attributes.city",
            "size" : 100,
            "minDocCount" : 2,
            "name" : "Identity Locations",
            "type" : "TERMS"
          },
          "metric" : {
            "field" : "@access.name",
            "name" : "Access Name Count",
            "type" : "COUNT"
          },
          "nested" : {
            "name" : "id",
            "type" : "access"
          }
        },
        "nested" : {
          "name" : "id",
          "type" : "access"
        }
      },
      "nested" : {
        "name" : "id",
        "type" : "access"
      }
    }
  },
  "values" : [ {
    "attribute" : "iscFederalClassifications",
    "values" : [ "topSecret" ]
  } ],
  "replaceScope" : "attribute",
  "operation" : "add"
}"@

# Metadata Attribute update by query

try {
    $Result = ConvertFrom-JsonToEntitlementAttributeBulkUpdateQueryRequest -Json $EntitlementAttributeBulkUpdateQueryRequest
    Update-AccessModelMetadataByQueryV1 -EntitlementAttributeBulkUpdateQueryRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-AccessModelMetadataByQueryV1 -EntitlementAttributeBulkUpdateQueryRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-AccessModelMetadataByQueryV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
