---
id: v2025-dimensions
title: Dimensions
pagination_label: Dimensions
sidebar_label: Dimensions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Dimensions', 'V2025Dimensions'] 
slug: /tools/sdk/powershell/v2025/methods/dimensions
tags: ['SDK', 'Software Development Kit', 'Dimensions', 'V2025Dimensions']
---

# Dimensions
  Use this API to implement and customize dynamic role functionality. With this functionality in place, administrators can create dimensions and configure them for use throughout Identity Security Cloud. Identity Security Cloud can use established criteria to automatically assign the dimensions to qualified users. This enables users to get all the access they need quickly and securely and administrators to spend their time on other tasks. Entitlements represent the most granular level of access in Identity Security Cloud.
Access profiles represent the next level and often group entitlements. Dimension represent access selectively based on the evaluation of contextual information that is available or provided. Each Dimension include context attributes and access selection expressions which map criteria to access right assignments. Each dimension can contain up to 5 context attributes. Dynamic Access Roles represent the broadest level of access and often group access profiles ,entitlements and dimensions.Each Dynamic Access Role may contain one or more Dimensions. 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2025Dimension**](#create-dimension) | **POST** `/roles/{roleId}/dimensions` | Create a dimension
[**Remove-V2025BulkDimensions**](#delete-bulk-dimensions) | **POST** `/roles/{roleId}/dimensions/bulk-delete` | Delete dimension(s)
[**Remove-V2025Dimension**](#delete-dimension) | **DELETE** `/roles/{roleId}/dimensions/{dimensionId}` | Delete a dimension
[**Get-V2025Dimension**](#get-dimension) | **GET** `/roles/{roleId}/dimensions/{dimensionId}` | Get a dimension under role.
[**Get-V2025DimensionEntitlements**](#get-dimension-entitlements) | **GET** `/roles/{roleId}/dimensions/{dimensionId}/entitlements` | List dimension&#39;s entitlements
[**Get-V2025DimensionAccessProfiles**](#list-dimension-access-profiles) | **GET** `/roles/{roleId}/dimensions/{dimensionId}/access-profiles` | List dimension&#39;s access profiles
[**Get-V2025Dimensions**](#list-dimensions) | **GET** `/roles/{roleId}/dimensions` | List dimensions
[**Update-V2025Dimension**](#patch-dimension) | **PATCH** `/roles/{roleId}/dimensions/{dimensionId}` | Patch a specified dimension


## create-dimension
This API creates a dimension.
You must have a token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority to call this API. 
Additionally, a ROLE_SUBADMIN cannot create a dimension that includes an access profile or entitlement if that access profile or entitlement is linked to a source that the ROLE_SUBADMIN is not associated with. 
The maximum supported length for the description field is 2000 characters.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-dimension)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | RoleId | **String** | True  | Parent Role Id of the dimension.
 Body  | Dimension | [**Dimension**](../models/dimension) | True  | 

### Return type
[**Dimension**](../models/dimension)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Dimension created | Dimension
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$RoleId = "6603fba3004f43c687610a29195252ce" # String | Parent Role Id of the dimension.
$Dimension = @"{
  "owner" : {
    "name" : "support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "entitlements" : [ {
    "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
    "id" : "2c91809773dee32014e13e122092014e",
    "type" : "ENTITLEMENT"
  }, {
    "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
    "id" : "2c91809773dee32014e13e122092014e",
    "type" : "ENTITLEMENT"
  } ],
  "accessProfiles" : [ {
    "name" : "Access Profile 2567",
    "id" : "ff808081751e6e129f1518161919ecca",
    "type" : "ACCESS_PROFILE"
  }, {
    "name" : "Access Profile 2567",
    "id" : "ff808081751e6e129f1518161919ecca",
    "type" : "ACCESS_PROFILE"
  } ],
  "created" : "2021-03-01T22:32:58.104Z",
  "name" : "Dimension 2567",
  "modified" : "2021-03-02T20:22:28.104Z",
  "description" : "Urna amet cursus pellentesque nisl orci maximus lorem nisl euismod fusce morbi placerat adipiscing maecenas nisi tristique et metus et lacus sed morbi nunc nisl maximus magna arcu varius sollicitudin elementum enim maecenas nisi id ipsum tempus fusce diam ipsum tortor.",
  "id" : "2c918086749d78830174a1a40e121518",
  "membership" : {
    "criteria" : {
      "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
      "children" : [ {
        "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
        "children" : [ {
          "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
          "operation" : "EQUALS",
          "key" : {
            "property" : "attribute.email",
            "type" : "IDENTITY"
          }
        }, {
          "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
          "operation" : "EQUALS",
          "key" : {
            "property" : "attribute.email",
            "type" : "IDENTITY"
          }
        } ],
        "operation" : "EQUALS",
        "key" : {
          "property" : "attribute.email",
          "type" : "IDENTITY"
        }
      }, {
        "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
        "children" : [ {
          "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
          "operation" : "EQUALS",
          "key" : {
            "property" : "attribute.email",
            "type" : "IDENTITY"
          }
        }, {
          "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
          "operation" : "EQUALS",
          "key" : {
            "property" : "attribute.email",
            "type" : "IDENTITY"
          }
        } ],
        "operation" : "EQUALS",
        "key" : {
          "property" : "attribute.email",
          "type" : "IDENTITY"
        }
      } ],
      "operation" : "EQUALS",
      "key" : {
        "property" : "attribute.email",
        "type" : "IDENTITY"
      }
    },
    "type" : "STANDARD"
  },
  "parentId" : "2c918086749d78830174a1a40e121518"
}"@

# Create a dimension

try {
    $Result = ConvertFrom-JsonToDimension -Json $Dimension
    New-V2025Dimension -RoleId $RoleId -Dimension $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2025Dimension -RoleId $RoleId -Dimension $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2025Dimension"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-bulk-dimensions
This endpoint initiates a bulk deletion of one or more dimensions.
When the request is successful, the endpoint returns the bulk delete's task result ID.  To follow the task, you can use [Get Task Status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status), which will return the task result's status and information. 
This endpoint can only bulk delete up to a limit of 50 roles per request. 
A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this endpoint. In addition, a token with ROLE_SUBADMIN authority can only call this endpoint if all dimensions included in the request are associated with sources with management workgroups the ROLE_SUBADMIN is a member of.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-bulk-dimensions)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | RoleId | **String** | True  | Parent Role Id of the dimensions.
 Body  | DimensionBulkDeleteRequest | [**DimensionBulkDeleteRequest**](../models/dimension-bulk-delete-request) | True  | 

### Return type
[**TaskResultDto**](../models/task-result-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Returns an object with the id of the task performing the delete operation. | TaskResultDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$RoleId = "6603fba3004f43c687610a29195252ce" # String | Parent Role Id of the dimensions.
$DimensionBulkDeleteRequest = @"{
  "dimensionIds" : [ "2c9180847812e0b1017817051919ecca", "2c9180887812e0b201781e129f151816" ]
}"@

# Delete dimension(s)

try {
    $Result = ConvertFrom-JsonToDimensionBulkDeleteRequest -Json $DimensionBulkDeleteRequest
    Remove-V2025BulkDimensions -RoleId $RoleId -DimensionBulkDeleteRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Remove-V2025BulkDimensions -RoleId $RoleId -DimensionBulkDeleteRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2025BulkDimensions"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-dimension
This API deletes a Dimension by its ID.
A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles/Entitlements included in the Dimension are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-dimension)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | RoleId | **String** | True  | Parent Role Id of the dimension.
Path   | DimensionId | **String** | True  | Id of the Dimension

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
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
$RoleId = "6603fba3004f43c687610a29195252ce" # String | Parent Role Id of the dimension.
$DimensionId = "2c9180835d191a86015d28455b4a2329" # String | Id of the Dimension

# Delete a dimension

try {
    Remove-V2025Dimension -RoleId $RoleId -DimensionId $DimensionId 
    
    # Below is a request that includes all optional parameters
    # Remove-V2025Dimension -RoleId $RoleId -DimensionId $DimensionId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2025Dimension"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-dimension
This API returns a Dimension by its ID.

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles or Entitlements included in the Dimension or Parent Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-dimension)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | RoleId | **String** | True  | Parent Role Id of the dimension.
Path   | DimensionId | **String** | True  | Id of the Dimension

### Return type
[**Dimension**](../models/dimension)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Dimension | Dimension
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
$RoleId = "6603fba3004f43c687610a29195252ce" # String | Parent Role Id of the dimension.
$DimensionId = "2c9180835d191a86015d28455b4a2329" # String | Id of the Dimension

# Get a dimension under role.

try {
    Get-V2025Dimension -RoleId $RoleId -DimensionId $DimensionId 
    
    # Below is a request that includes all optional parameters
    # Get-V2025Dimension -RoleId $RoleId -DimensionId $DimensionId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025Dimension"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-dimension-entitlements
This API lists the Entitlements associated with a given dimension.

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-dimension-entitlements)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | RoleId | **String** | True  | Parent Role Id of the dimension.
Path   | DimensionId | **String** | True  | Id of the Dimension
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified**

### Return type
[**Entitlement[]**](../models/entitlement)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Entitlements | Entitlement[]
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
$RoleId = "6603fba3004f43c687610a29195252ce" # String | Parent Role Id of the dimension.
$DimensionId = "2c9180835d191a86015d28455b4a2329" # String | Id of the Dimension
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'attribute eq "memberOf"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in* (optional)
$Sorters = "name,-modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** (optional)

# List dimension's entitlements

try {
    Get-V2025DimensionEntitlements -RoleId $RoleId -DimensionId $DimensionId 
    
    # Below is a request that includes all optional parameters
    # Get-V2025DimensionEntitlements -RoleId $RoleId -DimensionId $DimensionId -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025DimensionEntitlements"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-dimension-access-profiles
This API lists the Access Profiles associated with a given Dimension

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles included in the Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-dimension-access-profiles)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | RoleId | **String** | True  | Parent Role Id of the dimension.
Path   | DimensionId | **String** | True  | Id of the Dimension
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**

### Return type
[**AccessProfile[]**](../models/access-profile)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Access Profiles | AccessProfile[]
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
$RoleId = "6603fba3004f43c687610a29195252ce" # String | Parent Role Id of the dimension.
$DimensionId = "2c9180835d191a86015d28455b4a2329" # String | Id of the Dimension
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'source.id eq "2c91808982f979270182f99e386d00fa"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in* (optional)
$Sorters = "name,-modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)

# List dimension's access profiles

try {
    Get-V2025DimensionAccessProfiles -RoleId $RoleId -DimensionId $DimensionId 
    
    # Below is a request that includes all optional parameters
    # Get-V2025DimensionAccessProfiles -RoleId $RoleId -DimensionId $DimensionId -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025DimensionAccessProfiles"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-dimensions
This API returns a list of dimensions under a specified role.

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-dimensions)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | RoleId | **String** | True  | Parent Role Id of the dimension.
  Query | ForSubadmin | **String** |   (optional) | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin.
  Query | Limit | **Int32** |   (optional) (default to 50) | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**

### Return type
[**Dimension[]**](../models/dimension)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Dimensions | Dimension[]
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
$RoleId = "6603fba3004f43c687610a29195252ce" # String | Parent Role Id of the dimension.
$ForSubadmin = "5168015d32f890ca15812c9180835d2e" # String | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional)
$Limit = 50 # Int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'id eq '2c918086749d78830174a1a40e121518'' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in* (optional)
$Sorters = "name,-modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)

# List dimensions

try {
    Get-V2025Dimensions -RoleId $RoleId 
    
    # Below is a request that includes all optional parameters
    # Get-V2025Dimensions -RoleId $RoleId -ForSubadmin $ForSubadmin -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025Dimensions"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-dimension
This API updates an existing dimension using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.
The following fields are patchable: **name** **description** **owner** **accessProfiles** **entitlements** **membership**
A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all access profiles/entitlements included in the dimension are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.
The maximum supported length for the description field is 2000 characters.
When you use this API to modify a dimension's membership identities, you can only modify up to a limit of 500 membership identities at a time.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-dimension)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | RoleId | **String** | True  | Parent Role Id of the dimension.
Path   | DimensionId | **String** | True  | Id of the Dimension
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | 

### Return type
[**Dimension**](../models/dimension)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the Dimension as updated. | Dimension
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$RoleId = "6603fba3004f43c687610a29195252ce" # String | Parent Role Id of the dimension.
$DimensionId = "2c9180835d191a86015d28455b4a2329" # String | Id of the Dimension
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | 
 

# Patch a specified dimension

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-V2025Dimension -RoleId $RoleId -DimensionId $DimensionId -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-V2025Dimension -RoleId $RoleId -DimensionId $DimensionId -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2025Dimension"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
