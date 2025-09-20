---
id: beta-entitlements
title: Entitlements
pagination_label: Entitlements
sidebar_label: Entitlements
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlements', 'BetaEntitlements'] 
slug: /tools/sdk/powershell/beta/methods/entitlements
tags: ['SDK', 'Software Development Kit', 'Entitlements', 'BetaEntitlements']
---

# Entitlements
  Use this API to implement and customize entitlement functionality.
With this functionality in place, administrators can view entitlements and configure them for use throughout Identity Security Cloud in certifications, access profiles, and roles.
Administrators in Identity Security Cloud can then grant users access to the entitlements or configure them so users themselves can request access to the entitlements whenever they need them.
With a good approval process, this entitlement functionality allows users to gain the specific access they need on sources quickly and securely.

Entitlements represent access rights on sources.
Entitlements are the most granular form of access in Identity Security Cloud.
Entitlements are often grouped into access profiles, and access profiles themselves are often grouped into roles, the broadest form of access in Identity Security Cloud.

For example, an Active Directory source in Identity Security Cloud can have multiple entitlements: the first, &#39;Employees,&#39; may represent the access all employees have at the organization, and a second, &#39;Developers,&#39; may represent the access all developers have at the organization.

An administrator can then create a broader set of access in the form of an access profile, &#39;AD Developers&#39; grouping the &#39;Employees&#39; entitlement with the &#39;Developers&#39; entitlement.

An administrator can then create an even broader set of access in the form of a role grouping the &#39;AD Developers&#39; access profile with another profile, &#39;GitHub Developers,&#39; grouping entitlements for the GitHub source.

When users only need Active Directory employee access, they can request access to the &#39;Employees&#39; entitlement.

When users need both Active Directory employee and developer access, they can request access to the &#39;AD Developers&#39; access profile.

When users need both the &#39;AD Developers&#39; access profile and the &#39;GitHub Developers&#39; access profile, they can request access to the role grouping both.

Administrators often use roles and access profiles within those roles to manage access so that users can gain access more quickly, but the hierarchy of access all starts with entitlements.

Anywhere entitlements appear, you can select them to find more information about the following:

- Cloud Access Details: These provide details about the cloud access entitlements on cloud-enabled sources.

- Permissions: Permissions represent individual units of read/write/admin access to a system.

- Relationships: These list each entitlement&#39;s parent and child relationships.

- Type: This is the entitlement&#39;s type. Some sources support multiple types, each with a different attribute schema.

Identity Security Cloud uses entitlements in many features, including the following:

- Certifications: Entitlements can be revoked from an identity that no longer needs them.

- Roles: Roles can group access profiles which themselves group entitlements. You can grant and revoke access on a broad level with roles. Role membership criteria can grant roles to identities based on whether they have certain entitlements or attributes.

- Access Profiles: Access profiles group entitlements.
They are the most important units of access in Identity Security Cloud.
Identity Security Cloud uses them in provisioning, certifications, and access requests, and administrators can configure them to grant very broad or very granular access.

You cannot delete entitlements directly from Identity Security Cloud.
Entitlements are deleted based on their inclusion in aggregations.

Refer to [Deleting Entitlements](https://documentation.sailpoint.com/saas/help/access/entitlements.html#deleting-entitlements) more information about deleting entitlements.

Refer to [Entitlements](https://documentation.sailpoint.com/saas/help/access/entitlements.html) for more information about entitlements.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BetaAccessModelMetadataForEntitlement**](#create-access-model-metadata-for-entitlement) | **POST** `/entitlements/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Add metadata to an entitlement.
[**Remove-BetaAccessModelMetadataFromEntitlement**](#delete-access-model-metadata-from-entitlement) | **DELETE** `/entitlements/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Remove metadata from an entitlement.
[**Get-BetaEntitlement**](#get-entitlement) | **GET** `/entitlements/{id}` | Get an entitlement
[**Get-BetaEntitlementRequestConfig**](#get-entitlement-request-config) | **GET** `/entitlements/{id}/entitlement-request-config` | Get entitlement request config
[**Import-BetaEntitlementsBySource**](#import-entitlements-by-source) | **POST** `/entitlements/aggregate/sources/{id}` | Aggregate entitlements
[**Get-BetaEntitlementChildren**](#list-entitlement-children) | **GET** `/entitlements/{id}/children` | List of entitlements children
[**Get-BetaEntitlementParents**](#list-entitlement-parents) | **GET** `/entitlements/{id}/parents` | List of entitlements parents
[**Get-BetaEntitlements**](#list-entitlements) | **GET** `/entitlements` | Gets a list of entitlements.
[**Update-BetaEntitlement**](#patch-entitlement) | **PATCH** `/entitlements/{id}` | Patch an entitlement
[**Send-BetaEntitlementRequestConfig**](#put-entitlement-request-config) | **PUT** `/entitlements/{id}/entitlement-request-config` | Replace entitlement request config
[**Reset-BetaSourceEntitlements**](#reset-source-entitlements) | **POST** `/entitlements/reset/sources/{sourceId}` | Reset source entitlements
[**Update-BetaEntitlementsInBulk**](#update-entitlements-in-bulk) | **POST** `/entitlements/bulk-update` | Bulk update an entitlement list


## create-access-model-metadata-for-entitlement
Add single Access Model Metadata to an entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-access-model-metadata-for-entitlement)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The entitlement id.
Path   | AttributeKey | **String** | True  | Technical name of the Attribute.
Path   | AttributeValue | **String** | True  | Technical name of the Attribute Value.

### Return type
[**Entitlement**](../models/entitlement)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | Entitlement
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
$Id = "2c91808c74ff913f0175097daa9d59cd" # String | The entitlement id.
$AttributeKey = "iscPrivacy" # String | Technical name of the Attribute.
$AttributeValue = "public" # String | Technical name of the Attribute Value.

# Add metadata to an entitlement.

try {
    New-BetaAccessModelMetadataForEntitlement -Id $Id -AttributeKey $AttributeKey -AttributeValue $AttributeValue 
    
    # Below is a request that includes all optional parameters
    # New-BetaAccessModelMetadataForEntitlement -Id $Id -AttributeKey $AttributeKey -AttributeValue $AttributeValue  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaAccessModelMetadataForEntitlement"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-access-model-metadata-from-entitlement
Remove single Access Model Metadata from an entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-access-model-metadata-from-entitlement)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The entitlement id.
Path   | AttributeKey | **String** | True  | Technical name of the Attribute.
Path   | AttributeValue | **String** | True  | Technical name of the Attribute Value.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | 
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
$Id = "2c91808c74ff913f0175097daa9d59cd" # String | The entitlement id.
$AttributeKey = "iscPrivacy" # String | Technical name of the Attribute.
$AttributeValue = "public" # String | Technical name of the Attribute Value.

# Remove metadata from an entitlement.

try {
    Remove-BetaAccessModelMetadataFromEntitlement -Id $Id -AttributeKey $AttributeKey -AttributeValue $AttributeValue 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaAccessModelMetadataFromEntitlement -Id $Id -AttributeKey $AttributeKey -AttributeValue $AttributeValue  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaAccessModelMetadataFromEntitlement"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-entitlement
This API returns an entitlement by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-entitlement)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The entitlement ID

### Return type
[**Entitlement**](../models/entitlement)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | An entitlement | Entitlement
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
$Id = "2c91808874ff91550175097daaec161c" # String | The entitlement ID

# Get an entitlement

try {
    Get-BetaEntitlement -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaEntitlement -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaEntitlement"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-entitlement-request-config
This API returns the entitlement request config for a specified entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-entitlement-request-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Entitlement Id

### Return type
[**EntitlementRequestConfig**](../models/entitlement-request-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | An Entitlement Request Config | EntitlementRequestConfig
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
$Id = "2c91808874ff91550175097daaec161c" # String | Entitlement Id

# Get entitlement request config

try {
    Get-BetaEntitlementRequestConfig -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaEntitlementRequestConfig -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaEntitlementRequestConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## import-entitlements-by-source
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Starts an entitlement aggregation on the specified source. Though this endpoint has been deprecated, you can find its Beta equivalent [here](https://developer.sailpoint.com/docs/api/beta/import-entitlements).

If the target source is a direct connection, then the request body must be empty. You will also need to make sure the Content-Type header is not set. If you set the Content-Type header without specifying a body, then you will receive a 500 error.

If the target source is a delimited file source, then the CSV file needs to be included in the request body. You will also need to set the Content-Type header to `multipart/form-data`.

[API Spec](https://developer.sailpoint.com/docs/api/beta/import-entitlements-by-source)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Source Id
   | CsvFile | **System.IO.FileInfo** |   (optional) | The CSV file containing the source entitlements to aggregate.

### Return type
[**LoadEntitlementTask**](../models/load-entitlement-task)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Aggregate Entitlements Task | LoadEntitlementTask
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Source Id
$CsvFile =  # System.IO.FileInfo | The CSV file containing the source entitlements to aggregate. (optional)

# Aggregate entitlements

try {
    Import-BetaEntitlementsBySource -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Import-BetaEntitlementsBySource -Id $Id -CsvFile $CsvFile  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Import-BetaEntitlementsBySource"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-entitlement-children
This API returns a list of all child entitlements of a given entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-entitlement-children)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Entitlement Id
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*

### Return type
[**Entitlement[]**](../models/entitlement)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of entitlements children from an entitlement | Entitlement[]
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
$Id = "2c91808874ff91550175097daaec161c" # String | Entitlement Id
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Sorters = "name,-modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** (optional)
$Filters = 'attribute eq "memberOf"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* (optional)

# List of entitlements children

try {
    Get-BetaEntitlementChildren -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaEntitlementChildren -Id $Id -Limit $Limit -Offset $Offset -Count $Count -Sorters $Sorters -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaEntitlementChildren"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-entitlement-parents
This API returns a list of all parent entitlements of a given entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-entitlement-parents)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Entitlement Id
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*

### Return type
[**Entitlement[]**](../models/entitlement)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of entitlements parents from an entitlement | Entitlement[]
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
$Id = "2c91808c74ff913f0175097daa9d59cd" # String | Entitlement Id
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Sorters = "name,-modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** (optional)
$Filters = 'attribute eq "memberOf"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* (optional)

# List of entitlements parents

try {
    Get-BetaEntitlementParents -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaEntitlementParents -Id $Id -Limit $Limit -Offset $Offset -Count $Count -Sorters $Sorters -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaEntitlementParents"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-entitlements
This API returns a list of entitlements.

This API can be used in one of the two following ways: either getting entitlements for a specific **account-id**, or getting via use of **filters** (those two options are exclusive).

Any authenticated token can call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-entitlements)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | AccountId | **String** |   (optional) | The account ID. If specified, returns only entitlements associated with the given Account. Cannot be specified with the **filters**, **segmented-for-identity**, **for-segment-ids**, or **include-unsegmented** param(s). This parameter is deprecated. Please use [Account Entitlements API](https://developer.sailpoint.com/docs/api/beta/get-account-entitlements) to get account entitlements.
  Query | SegmentedForIdentity | **String** |   (optional) | If present and not empty, additionally filters Entitlements to those which are assigned to the Segment(s) which are visible to the Identity with the specified ID.  Cannot be specified with the **account-id** or **for-segment-ids** param(s). It is also illegal to specify a value that refers to a different user's Identity.
  Query | ForSegmentIds | **String** |   (optional) | If present and not empty, additionally filters Access Profiles to those which are assigned to the Segment(s) with the specified IDs. Cannot be specified with the **account-id** or **segmented-for-identity** param(s).
  Query | IncludeUnsegmented | **Boolean** |   (optional) (default to $true) | Whether or not the response list should contain unsegmented Entitlements. If **for-segment-ids** and **segmented-for-identity** are both absent or empty, specifying **include-unsegmented=false** results in an error.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*

### Return type
[**Entitlement[]**](../models/entitlement)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of entitlements | Entitlement[]
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
$AccountId = "ef38f94347e94562b5bb8424a56397d8" # String | The account ID. If specified, returns only entitlements associated with the given Account. Cannot be specified with the **filters**, **segmented-for-identity**, **for-segment-ids**, or **include-unsegmented** param(s). This parameter is deprecated. Please use [Account Entitlements API](https://developer.sailpoint.com/docs/api/beta/get-account-entitlements) to get account entitlements. (optional)
$SegmentedForIdentity = "e554098913544630b5985e9042f5e44b" # String | If present and not empty, additionally filters Entitlements to those which are assigned to the Segment(s) which are visible to the Identity with the specified ID.  Cannot be specified with the **account-id** or **for-segment-ids** param(s). It is also illegal to specify a value that refers to a different user's Identity. (optional)
$ForSegmentIds = "041727d4-7d95-4779-b891-93cf41e98249,a378c9fa-bae5-494c-804e-a1e30f69f649" # String | If present and not empty, additionally filters Access Profiles to those which are assigned to the Segment(s) with the specified IDs. Cannot be specified with the **account-id** or **segmented-for-identity** param(s). (optional)
$IncludeUnsegmented = $true # Boolean | Whether or not the response list should contain unsegmented Entitlements. If **for-segment-ids** and **segmented-for-identity** are both absent or empty, specifying **include-unsegmented=false** results in an error. (optional) (default to $true)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Sorters = "name,-modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional)
$Filters = 'attribute eq "memberOf"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in* (optional)

# Gets a list of entitlements.

try {
    Get-BetaEntitlements 
    
    # Below is a request that includes all optional parameters
    # Get-BetaEntitlements -AccountId $AccountId -SegmentedForIdentity $SegmentedForIdentity -ForSegmentIds $ForSegmentIds -IncludeUnsegmented $IncludeUnsegmented -Offset $Offset -Limit $Limit -Count $Count -Sorters $Sorters -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaEntitlements"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-entitlement
This API updates an existing entitlement using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

The following fields are patchable: **requestable**, **privileged**, **segments**, **owner**, **name**, **description** and **manuallyUpdatedFields**

When you're patching owner, only owner type and owner id must be provided. Owner name is optional, and it won't be modified. If the owner name is provided, it should correspond to the real name. The only owner type currently supported is IDENTITY.

A token with ORG_ADMIN or SOURCE_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-entitlement)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the entitlement to patch
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) |   (optional) | 

### Return type
[**Entitlement**](../models/entitlement)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the entitlement as updated. | Entitlement
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808a7813090a017814121e121518" # String | ID of the entitlement to patch
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] |  (optional)
 

# Patch an entitlement

try {
    Update-BetaEntitlement -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Update-BetaEntitlement -Id $Id -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaEntitlement"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-entitlement-request-config
This API replaces the entitlement request config for a specified entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-entitlement-request-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Entitlement ID
 Body  | EntitlementRequestConfig | [**EntitlementRequestConfig**](../models/entitlement-request-config) | True  | 

### Return type
[**EntitlementRequestConfig**](../models/entitlement-request-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the entitlement request config as updated. | EntitlementRequestConfig
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
$Id = "2c91808a7813090a017814121e121518" # String | Entitlement ID
$EntitlementRequestConfig = @"{
  "accessRequestConfig" : {
    "denialCommentRequired" : false,
    "approvalSchemes" : [ {
      "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
      "approverType" : "GOVERNANCE_GROUP"
    }, {
      "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
      "approverType" : "GOVERNANCE_GROUP"
    } ],
    "reauthorizationRequired" : false,
    "requestCommentRequired" : true
  },
  "revocationRequestConfig" : {
    "approvalSchemes" : [ {
      "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
      "approverType" : "GOVERNANCE_GROUP"
    }, {
      "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
      "approverType" : "GOVERNANCE_GROUP"
    } ]
  }
}"@

# Replace entitlement request config

try {
    $Result = ConvertFrom-JsonToEntitlementRequestConfig -Json $EntitlementRequestConfig
    Send-BetaEntitlementRequestConfig -Id $Id -EntitlementRequestConfig $Result 
    
    # Below is a request that includes all optional parameters
    # Send-BetaEntitlementRequestConfig -Id $Id -EntitlementRequestConfig $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaEntitlementRequestConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## reset-source-entitlements
Remove all entitlements from a specific source.
To reload the accounts along with the entitlements you removed, you must run an unoptimized aggregation.  To do so, use [Import Accounts](https://developer.sailpoint.com/docs/api/beta/import-accounts/) with `disableOptimization` = `true`. 

[API Spec](https://developer.sailpoint.com/docs/api/beta/reset-source-entitlements)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | ID of source for the entitlement reset

### Return type
[**EntitlementSourceResetBaseReferenceDto**](../models/entitlement-source-reset-base-reference-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Entitlement source reset task result | EntitlementSourceResetBaseReferenceDto
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
$SourceId = "2c91808a7813090a017814121919ecca" # String | ID of source for the entitlement reset

# Reset source entitlements

try {
    Reset-BetaSourceEntitlements -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Reset-BetaSourceEntitlements -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Reset-BetaSourceEntitlements"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-entitlements-in-bulk
This API applies an update to every entitlement of the list.


The number of entitlements to update is limited to 50 items maximum.


The JsonPatch update follows the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
examples of allowed operations :
`**{ "op": "replace", "path": "/privileged", "value": boolean }**`
`**{ "op": "replace", "path": "/requestable","value": boolean }**`

A token with ORG_ADMIN or API authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/update-entitlements-in-bulk)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | EntitlementBulkUpdateRequest | [**EntitlementBulkUpdateRequest**](../models/entitlement-bulk-update-request) | True  | 

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
$EntitlementBulkUpdateRequest = @"{
  "entitlementIds" : [ "2c91808a7624751a01762f19d665220d", "2c91808a7624751a01762f19d67c220e", "2c91808a7624751a01762f19d692220f" ],
  "jsonPatch" : [ {
    "op" : "replace",
    "path" : "/privileged",
    "value" : false
  }, {
    "op" : "replace",
    "path" : "/requestable",
    "value" : false
  } ]
}"@

# Bulk update an entitlement list

try {
    $Result = ConvertFrom-JsonToEntitlementBulkUpdateRequest -Json $EntitlementBulkUpdateRequest
    Update-BetaEntitlementsInBulk -EntitlementBulkUpdateRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BetaEntitlementsInBulk -EntitlementBulkUpdateRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaEntitlementsInBulk"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
