---
id: beta-tagged-objects
title: TaggedObjects
pagination_label: TaggedObjects
sidebar_label: TaggedObjects
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TaggedObjects'] 
slug: /tools/sdk/powershell/beta/methods/tagged-objects
tags: ['SDK', 'Software Development Kit', 'TaggedObjects']
---


# TaggedObjects

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Remove-BetaTaggedObject**](#delete-tagged-object) | **DELETE** `/tagged-objects/{type}/{id}` | Delete Object Tags
[**Remove-BetaTagsToManyObject**](#delete-tags-to-many-object) | **POST** `/tagged-objects/bulk-remove` | Remove Tags from Multiple Objects
[**Get-BetaTaggedObject**](#get-tagged-object) | **GET** `/tagged-objects/{type}/{id}` | Get Tagged Object
[**Get-BetaTaggedObjects**](#list-tagged-objects) | **GET** `/tagged-objects` | List Tagged Objects
[**Get-BetaTaggedObjectsByType**](#list-tagged-objects-by-type) | **GET** `/tagged-objects/{type}` | List Tagged Objects by Type
[**Send-BetaTaggedObject**](#put-tagged-object) | **PUT** `/tagged-objects/{type}/{id}` | Update Tagged Object
[**Set-BetaTagToObject**](#set-tag-to-object) | **POST** `/tagged-objects` | Add Tag to Object
[**Set-BetaTagsToManyObjects**](#set-tags-to-many-objects) | **POST** `/tagged-objects/bulk-add` | Tag Multiple Objects


## delete-tagged-object

Delete all tags from a tagged object.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Type | **String** | True  | The type of object to delete tags from.
Path   | Id | **String** | True  | The ID of the object to delete tags from.

### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content. | 
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
$Type = "ACCESS_PROFILE" # String | The type of object to delete tags from.
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the object to delete tags from.
# Delete Object Tags
try {
    Remove-BetaTaggedObject-BetaType $Type -BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaTaggedObject -BetaType $Type -BetaId $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaTaggedObject"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-tags-to-many-object

This API removes tags from multiple objects.

A token with API, CERT_ADMIN, ORG_ADMIN, REPORT_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | BulkTaggedObject | [**BulkTaggedObject**](../models/bulk-tagged-object) | True  | Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE.

### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$BulkTaggedObject = @"{
  "objectRefs" : [ {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  }, {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  } ],
  "operation" : "MERGE",
  "tags" : [ "BU_FINANCE", "PCI" ]
}"@
# Remove Tags from Multiple Objects
try {
    $Result = ConvertFrom-JsonToBulkTaggedObject -Json $BulkTaggedObject
    Remove-BetaTagsToManyObject-BetaBulkTaggedObject $Result
    
    # Below is a request that includes all optional parameters
    # Remove-BetaTagsToManyObject -BetaBulkTaggedObject $BulkTaggedObject  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaTagsToManyObject"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-tagged-object

This gets a tagged object for the specified type.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Type | **String** | True  | The type of tagged object to retrieve.
Path   | Id | **String** | True  | The ID of the object reference to retrieve.

### Return type

[**TaggedObject**](../models/tagged-object)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Tagged object by type and ID. | TaggedObject
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
$Type = "ACCESS_PROFILE" # String | The type of tagged object to retrieve.
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the object reference to retrieve.
# Get Tagged Object
try {
    Get-BetaTaggedObject-BetaType $Type -BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaTaggedObject -BetaType $Type -BetaId $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaTaggedObject"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## list-tagged-objects

This API returns a list of all tagged objects.

Any authenticated token may be used to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq, in*  **objectRef.type**: *eq, in*  **tagName**: *eq, in*

### Return type

[**TaggedObject[]**](../models/tagged-object)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of all tagged objects. | TaggedObject[]
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
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'tagName eq "BU_FINANCE"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq, in*  **objectRef.type**: *eq, in*  **tagName**: *eq, in* (optional)
# List Tagged Objects
try {
    Get-BetaTaggedObjects
    
    # Below is a request that includes all optional parameters
    # Get-BetaTaggedObjects -BetaLimit $Limit -BetaOffset $Offset -BetaCount $Count -BetaFilters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaTaggedObjects"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## list-tagged-objects-by-type

This API returns a list of all tagged objects by type.

Any authenticated token may be used to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Type | **String** | True  | The type of tagged object to retrieve.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq*  **objectRef.type**: *eq*

### Return type

[**TaggedObject[]**](../models/tagged-object)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of all tagged objects for specified type. | TaggedObject[]
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
$Type = "ACCESS_PROFILE" # String | The type of tagged object to retrieve.
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'objectRef.id eq "2c91808568c529c60168cca6f90c1313"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq*  **objectRef.type**: *eq* (optional)
# List Tagged Objects by Type
try {
    Get-BetaTaggedObjectsByType-BetaType $Type 
    
    # Below is a request that includes all optional parameters
    # Get-BetaTaggedObjectsByType -BetaType $Type -BetaLimit $Limit -BetaOffset $Offset -BetaCount $Count -BetaFilters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaTaggedObjectsByType"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## put-tagged-object

This updates a tagged object for the specified type.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Type | **String** | True  | The type of tagged object to update.
Path   | Id | **String** | True  | The ID of the object reference to update.
 Body  | TaggedObject | [**TaggedObject**](../models/tagged-object) | True  | 

### Return type

[**TaggedObject**](../models/tagged-object)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Tagged object by type and ID. | TaggedObject
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Type = "ACCESS_PROFILE" # String | The type of tagged object to update.
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the object reference to update.
$TaggedObject = @"{
  "objectRef" : {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "tags" : [ "BU_FINANCE", "PCI" ]
}"@
# Update Tagged Object
try {
    $Result = ConvertFrom-JsonToTaggedObject -Json $TaggedObject
    Send-BetaTaggedObject-BetaType $Type -BetaId $Id -BetaTaggedObject $Result
    
    # Below is a request that includes all optional parameters
    # Send-BetaTaggedObject -BetaType $Type -BetaId $Id -BetaTaggedObject $TaggedObject  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaTaggedObject"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## set-tag-to-object

This adds a tag to an object.

Any authenticated token may be used to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | TaggedObject | [**TaggedObject**](../models/tagged-object) | True  | 

### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$TaggedObject = @"{
  "objectRef" : {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "tags" : [ "BU_FINANCE", "PCI" ]
}"@
# Add Tag to Object
try {
    $Result = ConvertFrom-JsonToTaggedObject -Json $TaggedObject
    Set-BetaTagToObject-BetaTaggedObject $Result
    
    # Below is a request that includes all optional parameters
    # Set-BetaTagToObject -BetaTaggedObject $TaggedObject  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-BetaTagToObject"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## set-tags-to-many-objects

This API adds tags to multiple objects.

A token with API, CERT_ADMIN, ORG_ADMIN, REPORT_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | BulkTaggedObject | [**BulkTaggedObject**](../models/bulk-tagged-object) | True  | Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE.

### Return type

[**BulkTaggedObject**](../models/bulk-tagged-object)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Request succeeded. | BulkTaggedObject
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$BulkTaggedObject = @"{
  "objectRefs" : [ {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  }, {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  } ],
  "operation" : "MERGE",
  "tags" : [ "BU_FINANCE", "PCI" ]
}"@
# Tag Multiple Objects
try {
    $Result = ConvertFrom-JsonToBulkTaggedObject -Json $BulkTaggedObject
    Set-BetaTagsToManyObjects-BetaBulkTaggedObject $Result
    
    # Below is a request that includes all optional parameters
    # Set-BetaTagsToManyObjects -BetaBulkTaggedObject $BulkTaggedObject  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-BetaTagsToManyObjects"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


