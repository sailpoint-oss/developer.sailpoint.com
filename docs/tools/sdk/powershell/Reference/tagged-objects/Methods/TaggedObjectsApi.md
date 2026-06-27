---
id: tagged-objects
title: TaggedObjects
pagination_label: TaggedObjects
sidebar_label: TaggedObjects
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TaggedObjects', 'TaggedObjects'] 
slug: /tools/sdk/powershell/taggedobjects/methods/tagged-objects
tags: ['SDK', 'Software Development Kit', 'TaggedObjects', 'TaggedObjects']
---

# TaggedObjects
  Use this API to implement object tagging functionality. 
With object tagging functionality in place, any user in an organization can use tags as a way to group objects together and find them more quickly when the user searches Identity Security Cloud. 

In Identity Security Cloud, users can search their tenants for information and add tags objects they find.
Tagging an object provides users with a way of grouping objects together and makes it easier to find these objects in the future. 

For example, if a user is searching for an entitlement that grants a risky level of access to Active Directory, it&#39;s possible that the user may have to search through hundreds of entitlements to find the correct one. 
Once the user finds that entitlement, the user can add a tag to the entitlement, &quot;AD_RISKY&quot; to make it easier to find the entitlement again.
The user can add the same tag to multiple objects the user wants to group together for an easy future search, and the user can also do so in bulk.
When the user wants to find that tagged entitlement again, the user can search for &quot;tags:AD_RISKY&quot; to find all objects with that tag. 

With the API, you can tag even more different object types than you can in Identity Security Cloud (access profiles, entitlements, identities, and roles). 
You can use the API to tag all these objects:

- Access profiles 

- Applications 

- Certification campaigns

- Entitlements

- Identities 

- Roles 

- SOD (separation of duties) policies

- Sources 

You can also use the API to directly find, create, and manage tagged objects without using search queries. 

There are limits to tags: 

- You can have up to 500 different tags in your tenant.

- You can apply up to 30 tags to one object. 

- You can have up to 10,000 tag associations, pairings of 1 tag to 1 object, in your tenant. 

Because of these limits, it is recommended that you work with your governance experts and security teams to establish a list of tags that are most expressive of governance objects and access managed by Identity Security Cloud. 

These are the types of information often expressed in tags: 

- Affected departments

- Compliance and regulatory categories 

- Remediation urgency levels 

- Risk levels 

Refer to [Tagging Items in Search](https://documentation.sailpoint.com/saas/help/search/index.html?h&#x3D;tags#tagging-items-in-search) for more information about tagging objects in Identity Security Cloud. 
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Remove-TaggedObjectV1**](#delete-tagged-object-v1) | **DELETE** `/tagged-objects/v1/{type}/{id}` | Delete object tags
[**Remove-TagsToManyObjectV1**](#delete-tags-to-many-object-v1) | **POST** `/tagged-objects/v1/bulk-remove` | Remove tags from multiple objects
[**Get-TaggedObjectV1**](#get-tagged-object-v1) | **GET** `/tagged-objects/v1/{type}/{id}` | Get tagged object
[**Get-TaggedObjectsByTypeV1**](#list-tagged-objects-by-type-v1) | **GET** `/tagged-objects/v1/{type}` | List tagged objects by type
[**Get-TaggedObjectsV1**](#list-tagged-objects-v1) | **GET** `/tagged-objects/v1` | List tagged objects
[**Send-TaggedObjectV1**](#put-tagged-object-v1) | **PUT** `/tagged-objects/v1/{type}/{id}` | Update tagged object
[**Set-TagToObjectV1**](#set-tag-to-object-v1) | **POST** `/tagged-objects/v1` | Add tag to object
[**Set-TagsToManyObjectsV1**](#set-tags-to-many-objects-v1) | **POST** `/tagged-objects/v1/bulk-add` | Tag multiple objects


## delete-tagged-object-v1
Delete all tags from a tagged object.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-tagged-object-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListTaggedObjectsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListTaggedObjectsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Type = "ACCESS_PROFILE" # String | The type of object to delete tags from.
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the object to delete tags from.

# Delete object tags

try {
    Remove-TaggedObjectV1 -Type $Type -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-TaggedObjectV1 -Type $Type -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-TaggedObjectV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-tags-to-many-object-v1
This API removes tags from multiple objects.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-tags-to-many-object-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Bulkremovetaggedobject | [**Bulkremovetaggedobject**](../models/bulkremovetaggedobject) | True  | Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListTaggedObjectsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListTaggedObjectsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Bulkremovetaggedobject = @""@

# Remove tags from multiple objects

try {
    $Result = ConvertFrom-JsonToBulkremovetaggedobject -Json $Bulkremovetaggedobject
    Remove-TagsToManyObjectV1 -Bulkremovetaggedobject $Result 
    
    # Below is a request that includes all optional parameters
    # Remove-TagsToManyObjectV1 -Bulkremovetaggedobject $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-TagsToManyObjectV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-tagged-object-v1
This gets a tagged object for the specified type.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-tagged-object-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Type | **String** | True  | The type of tagged object to retrieve.
Path   | Id | **String** | True  | The ID of the object reference to retrieve.

### Return type
[**Taggedobject**](../models/taggedobject)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Tagged object by type and ID. | Taggedobject
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListTaggedObjectsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListTaggedObjectsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Type = "ACCESS_PROFILE" # String | The type of tagged object to retrieve.
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the object reference to retrieve.

# Get tagged object

try {
    Get-TaggedObjectV1 -Type $Type -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-TaggedObjectV1 -Type $Type -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-TaggedObjectV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-tagged-objects-by-type-v1
This API returns a list of all tagged objects by type.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-tagged-objects-by-type-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Type | **String** | True  | The type of tagged object to retrieve.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq*  **objectRef.type**: *eq*

### Return type
[**Taggedobject[]**](../models/taggedobject)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of all tagged objects for specified type. | Taggedobject[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListTaggedObjectsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListTaggedObjectsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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

# List tagged objects by type

try {
    Get-TaggedObjectsByTypeV1 -Type $Type 
    
    # Below is a request that includes all optional parameters
    # Get-TaggedObjectsByTypeV1 -Type $Type -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-TaggedObjectsByTypeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-tagged-objects-v1
This API returns a list of all tagged objects.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-tagged-objects-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq, in*  **objectRef.type**: *eq, in*  **tagName**: *eq, in*

### Return type
[**Taggedobject[]**](../models/taggedobject)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of all tagged objects. | Taggedobject[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListTaggedObjectsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListTaggedObjectsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'tagName eq "BU_FINANCE"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq, in*  **objectRef.type**: *eq, in*  **tagName**: *eq, in* (optional)

# List tagged objects

try {
    Get-TaggedObjectsV1 
    
    # Below is a request that includes all optional parameters
    # Get-TaggedObjectsV1 -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-TaggedObjectsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-tagged-object-v1
This updates a tagged object for the specified type.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-tagged-object-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Type | **String** | True  | The type of tagged object to update.
Path   | Id | **String** | True  | The ID of the object reference to update.
 Body  | Taggedobject | [**Taggedobject**](../models/taggedobject) | True  | 

### Return type
[**Taggedobject**](../models/taggedobject)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Tagged object by type and ID. | Taggedobject
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListTaggedObjectsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListTaggedObjectsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Type = "ACCESS_PROFILE" # String | The type of tagged object to update.
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the object reference to update.
$Taggedobject = @""@

# Update tagged object

try {
    $Result = ConvertFrom-JsonToTaggedobject -Json $Taggedobject
    Send-TaggedObjectV1 -Type $Type -Id $Id -Taggedobject $Result 
    
    # Below is a request that includes all optional parameters
    # Send-TaggedObjectV1 -Type $Type -Id $Id -Taggedobject $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-TaggedObjectV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-tag-to-object-v1
This adds a tag to an object.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-tag-to-object-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Taggedobject | [**Taggedobject**](../models/taggedobject) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListTaggedObjectsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListTaggedObjectsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Taggedobject = @""@

# Add tag to object

try {
    $Result = ConvertFrom-JsonToTaggedobject -Json $Taggedobject
    Set-TagToObjectV1 -Taggedobject $Result 
    
    # Below is a request that includes all optional parameters
    # Set-TagToObjectV1 -Taggedobject $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-TagToObjectV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-tags-to-many-objects-v1
This API adds tags to multiple objects.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-tags-to-many-objects-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Bulkaddtaggedobject | [**Bulkaddtaggedobject**](../models/bulkaddtaggedobject) | True  | Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE.

### Return type
[**Bulktaggedobjectresponse[]**](../models/bulktaggedobjectresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Request succeeded. | Bulktaggedobjectresponse[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListTaggedObjectsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListTaggedObjectsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Bulkaddtaggedobject = @""@

# Tag multiple objects

try {
    $Result = ConvertFrom-JsonToBulkaddtaggedobject -Json $Bulkaddtaggedobject
    Set-TagsToManyObjectsV1 -Bulkaddtaggedobject $Result 
    
    # Below is a request that includes all optional parameters
    # Set-TagsToManyObjectsV1 -Bulkaddtaggedobject $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-TagsToManyObjectsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
