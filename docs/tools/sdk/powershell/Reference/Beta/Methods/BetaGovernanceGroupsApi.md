---
id: beta-governance-groups
title: GovernanceGroups
pagination_label: GovernanceGroups
sidebar_label: GovernanceGroups
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GovernanceGroups', 'BetaGovernanceGroups'] 
slug: /tools/sdk/powershell/beta/methods/governance-groups
tags: ['SDK', 'Software Development Kit', 'GovernanceGroups', 'BetaGovernanceGroups']
---


# GovernanceGroups
  Use this API to implement and customize Governance Group functionality. With this functionality in place, administrators can create Governance Groups and configure them for use throughout Identity Security Cloud.

A governance group is a group of users that can make governance decisions about access. If your organization has the Access Request or Certifications service, you can configure governance groups to review access requests or certifications. A governance group can determine whether specific access is appropriate for a user.

Refer to [Creating and Managing Governance Groups](https://documentation.sailpoint.com/saas/help/common/users/governance_groups.html) for more information about how to build Governance Groups in the visual builder in the Identity Security Cloud UI.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BetaWorkgroup**](#create-workgroup) | **POST** `/workgroups` | Create a new Governance Group.
[**Remove-BetaWorkgroup**](#delete-workgroup) | **DELETE** `/workgroups/{id}` | Delete a Governance Group
[**Remove-BetaWorkgroupMembers**](#delete-workgroup-members) | **POST** `/workgroups/{workgroupId}/members/bulk-delete` | Remove members from Governance Group
[**Remove-BetaWorkgroupsInBulk**](#delete-workgroups-in-bulk) | **POST** `/workgroups/bulk-delete` | Delete Governance Group(s)
[**Get-BetaWorkgroup**](#get-workgroup) | **GET** `/workgroups/{id}` | Get Governance Group by Id
[**Get-BetaConnections**](#list-connections) | **GET** `/workgroups/{workgroupId}/connections` | List connections for Governance Group
[**Get-BetaWorkgroupMembers**](#list-workgroup-members) | **GET** `/workgroups/{workgroupId}/members` | List Governance Group Members
[**Get-BetaWorkgroups**](#list-workgroups) | **GET** `/workgroups` | List Governance Groups
[**Update-BetaWorkgroup**](#patch-workgroup) | **PATCH** `/workgroups/{id}` | Patch a Governance Group
[**Update-BetaWorkgroupMembers**](#update-workgroup-members) | **POST** `/workgroups/{workgroupId}/members/bulk-add` | Add members to Governance Group


## create-workgroup

This API creates a new Governance Group.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | WorkgroupDto | [**WorkgroupDto**](../models/workgroup-dto) | True  | 

### Return type

[**WorkgroupDto**](../models/workgroup-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Governance Group object created. | WorkgroupDto
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
$WorkgroupDto = @"{
  "owner" : {
    "emailAddress" : "support@sailpoint.com",
    "displayName" : "Support",
    "name" : "Support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "connectionCount" : 1641498673000,
  "created" : "2022-01-06T19:51:13Z",
  "memberCount" : 1641498673000,
  "name" : "DB Access Governance Group",
  "description" : "Description of the Governance Group",
  "modified" : "2022-01-06T19:51:13Z",
  "id" : "2c91808568c529c60168cca6f90c1313"
}"@
# Create a new Governance Group.
try {
    $Result = ConvertFrom-JsonToWorkgroupDto -Json $WorkgroupDto
    New-BetaWorkgroup-BetaWorkgroupDto $Result
    
    # Below is a request that includes all optional parameters
    # New-BetaWorkgroup -BetaWorkgroupDto $WorkgroupDto  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaWorkgroup"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-workgroup

This API deletes a Governance Group by its ID.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the Governance Group

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

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180837ca6693d017ca8d097500149" # String | ID of the Governance Group
# Delete a Governance Group
try {
    Remove-BetaWorkgroup-BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaWorkgroup -BetaId $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaWorkgroup"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-workgroup-members

This API removes one or more  members from a Governance Group.  A token with API, ORG_ADMIN authority is required to call this API.

>  **Following field of Identity is an optional field in the request.**

>  **name**

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | WorkgroupId | **String** | True  | ID of the Governance Group.
 Body  | BulkWorkgroupMembersRequestInner | [**[]BulkWorkgroupMembersRequestInner**](../models/bulk-workgroup-members-request-inner) | True  | List of identities to be removed from  a Governance Group members list.

### Return type

[**WorkgroupMemberDeleteItem[]**](../models/workgroup-member-delete-item)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
207 | List of deleted and not deleted identities from Governance Group members list. | WorkgroupMemberDeleteItem[]
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
$WorkgroupId = "2c91808a7813090a017814121919ecca" # String | ID of the Governance Group.
 # BulkWorkgroupMembersRequestInner[] | List of identities to be removed from  a Governance Group members list.
 $BulkWorkgroupMembersRequestInner = @""@ 

# Remove members from Governance Group
try {
    $Result = ConvertFrom-JsonToBulkWorkgroupMembersRequestInner -Json $BulkWorkgroupMembersRequestInner
    Remove-BetaWorkgroupMembers-BetaWorkgroupId $WorkgroupId -BetaBulkWorkgroupMembersRequestInner $Result
    
    # Below is a request that includes all optional parameters
    # Remove-BetaWorkgroupMembers -BetaWorkgroupId $WorkgroupId -BetaBulkWorkgroupMembersRequestInner $BulkWorkgroupMembersRequestInner  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaWorkgroupMembers"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-workgroups-in-bulk


This API initiates a bulk deletion of one or more Governance Groups.

>  If any of the indicated Governance Groups have one or more connections associated with it,then those Governance Groups will be added in  **inUse** list of the response. Governance Group(s) marked as **inUse** can not be deleted.

>  If any of the indicated Governance Groups is not does not exists in Organization,then those Governance Groups will be added in **notFound** list of the response. Governance Groups marked as **notFound** will not be deleted.

>  If any of the indicated Governance Groups does not have any connections associated with it,then those Governance Groups will be added in **deleted** list of the response. A Governance Group marked as **deleted** will be deleted from current Organization.

>  If the request contains any **inUse** or **notFound** Governance Group IDs then it skips only these Governance Groups for deletion and deletes the rest of Governance Groups which have no connections associated with it. 

>  **This API has limit number of Governance Groups can be deleted at one time. If the request contains more then 100 Governance Groups IDs to be deleted then the API will throw an exception.**

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | WorkgroupBulkDeleteRequest | [**WorkgroupBulkDeleteRequest**](../models/workgroup-bulk-delete-request) | True  | 

### Return type

[**WorkgroupDeleteItem[]**](../models/workgroup-delete-item)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
207 | Governance Group bulk delete response. | WorkgroupDeleteItem[]
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
$WorkgroupBulkDeleteRequest = @"{
  "ids" : [ "567a697e-885b-495a-afc5-d55e1c23a302", "c7b0f7b2-1e78-4063-b294-a555333dacd2" ]
}"@
# Delete Governance Group(s)
try {
    $Result = ConvertFrom-JsonToWorkgroupBulkDeleteRequest -Json $WorkgroupBulkDeleteRequest
    Remove-BetaWorkgroupsInBulk-BetaWorkgroupBulkDeleteRequest $Result
    
    # Below is a request that includes all optional parameters
    # Remove-BetaWorkgroupsInBulk -BetaWorkgroupBulkDeleteRequest $WorkgroupBulkDeleteRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaWorkgroupsInBulk"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-workgroup

This API returns a Governance Groups by its ID.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the Governance Group

### Return type

[**WorkgroupDto**](../models/workgroup-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A Governance Group | WorkgroupDto
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
$Id = "2c9180837ca6693d017ca8d097500149" # String | ID of the Governance Group
# Get Governance Group by Id
try {
    Get-BetaWorkgroup-BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaWorkgroup -BetaId $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaWorkgroup"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## list-connections

This API returns list of connections associated with a Governance Group.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | WorkgroupId | **String** | True  | ID of the Governance Group.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 50) | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**

### Return type

[**WorkgroupConnectionDto[]**](../models/workgroup-connection-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List all connections associated with a Governance Group. | WorkgroupConnectionDto[]
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
$WorkgroupId = "2c91808a7813090a017814121919ecca" # String | ID of the Governance Group.
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 50 # Int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Sorters = "name,-modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
# List connections for Governance Group
try {
    Get-BetaConnections-BetaWorkgroupId $WorkgroupId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaConnections -BetaWorkgroupId $WorkgroupId -BetaOffset $Offset -BetaLimit $Limit -BetaCount $Count -BetaSorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaConnections"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## list-workgroup-members

This API returns list of members associated with a Governance Group.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | WorkgroupId | **String** | True  | ID of the Governance Group.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 50) | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**

### Return type

[**ListWorkgroupMembers200ResponseInner[]**](../models/list-workgroup-members200-response-inner)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List all members associated with a Governance Group. | ListWorkgroupMembers200ResponseInner[]
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
$WorkgroupId = "2c91808a7813090a017814121919ecca" # String | ID of the Governance Group.
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 50 # Int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Sorters = "name,-modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
# List Governance Group Members
try {
    Get-BetaWorkgroupMembers-BetaWorkgroupId $WorkgroupId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaWorkgroupMembers -BetaWorkgroupId $WorkgroupId -BetaOffset $Offset -BetaLimit $Limit -BetaCount $Count -BetaSorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaWorkgroupMembers"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## list-workgroups

This API returns list of Governance Groups

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 50) | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, sw, in*  **memberships.identityId**: *eq, in*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, id, description**

### Return type

[**WorkgroupDto[]**](../models/workgroup-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Governance Groups | WorkgroupDto[]
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
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 50 # Int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'name sw "Test"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, sw, in*  **memberships.identityId**: *eq, in* (optional)
$Sorters = "name,-modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, id, description** (optional)
# List Governance Groups
try {
    Get-BetaWorkgroups
    
    # Below is a request that includes all optional parameters
    # Get-BetaWorkgroups -BetaOffset $Offset -BetaLimit $Limit -BetaCount $Count -BetaFilters $Filters -BetaSorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaWorkgroups"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## patch-workgroup

This API updates an existing governance group by ID. 
The following fields and objects are patchable:
  * name
  * description
  * owner

A token with API or ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the Governance Group
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) |   (optional) | 

### Return type

[**WorkgroupDto**](../models/workgroup-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A Governance Group. | WorkgroupDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180837ca6693d017ca8d097500149" # String | ID of the Governance Group
 # JsonPatchOperation[] |  (optional)
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ 

# Patch a Governance Group
try {
    Update-BetaWorkgroup-BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Update-BetaWorkgroup -BetaId $Id -BetaJsonPatchOperation $JsonPatchOperation  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaWorkgroup"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## update-workgroup-members

This API adds one or more members to a Governance Group.  A token with API, ORG_ADMIN authority is required to call this API.

>  **Following field of Identity is an optional field in the request.**

>  **name**

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | WorkgroupId | **String** | True  | ID of the Governance Group.
 Body  | BulkWorkgroupMembersRequestInner | [**[]BulkWorkgroupMembersRequestInner**](../models/bulk-workgroup-members-request-inner) | True  | List of identities to be added to a Governance Group members list.

### Return type

[**WorkgroupMemberAddItem[]**](../models/workgroup-member-add-item)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
207 | List of added and not added identities into  Governance Group members list. | WorkgroupMemberAddItem[]
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
$WorkgroupId = "2c91808a7813090a017814121919ecca" # String | ID of the Governance Group.
 # BulkWorkgroupMembersRequestInner[] | List of identities to be added to a Governance Group members list.
 $BulkWorkgroupMembersRequestInner = @""@ 

# Add members to Governance Group
try {
    $Result = ConvertFrom-JsonToBulkWorkgroupMembersRequestInner -Json $BulkWorkgroupMembersRequestInner
    Update-BetaWorkgroupMembers-BetaWorkgroupId $WorkgroupId -BetaBulkWorkgroupMembersRequestInner $Result
    
    # Below is a request that includes all optional parameters
    # Update-BetaWorkgroupMembers -BetaWorkgroupId $WorkgroupId -BetaBulkWorkgroupMembersRequestInner $BulkWorkgroupMembersRequestInner  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaWorkgroupMembers"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


