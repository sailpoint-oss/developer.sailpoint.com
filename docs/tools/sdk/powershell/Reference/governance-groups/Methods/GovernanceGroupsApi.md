---
id: governance-groups
title: GovernanceGroups
pagination_label: GovernanceGroups
sidebar_label: GovernanceGroups
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GovernanceGroups', 'GovernanceGroups'] 
slug: /tools/sdk/powershell/governancegroups/methods/governance-groups
tags: ['SDK', 'Software Development Kit', 'GovernanceGroups', 'GovernanceGroups']
---

# GovernanceGroups
  Use this API to implement and customize Governance Group functionality. With this functionality in place, administrators can create Governance Groups and configure them for use throughout Identity Security Cloud.

A governance group is a group of users that can make governance decisions about access. If your organization has the Access Request or Certifications service, you can configure governance groups to review access requests or certifications. A governance group can determine whether specific access is appropriate for a user.

Refer to [Creating and Managing Governance Groups](https://documentation.sailpoint.com/saas/help/common/users/governance_groups.html) for more information about how to build Governance Groups in the visual builder in the Identity Security Cloud UI.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-WorkgroupV1**](#create-workgroup-v1) | **POST** `/workgroups/v1` | Create a new governance group.
[**Remove-WorkgroupMembersV1**](#delete-workgroup-members-v1) | **POST** `/workgroups/v1/{workgroupId}/members/bulk-delete` | Remove members from governance group
[**Remove-WorkgroupV1**](#delete-workgroup-v1) | **DELETE** `/workgroups/v1/{id}` | Delete a governance group
[**Remove-WorkgroupsInBulkV1**](#delete-workgroups-in-bulk-v1) | **POST** `/workgroups/v1/bulk-delete` | Delete governance group(s)
[**Get-WorkgroupV1**](#get-workgroup-v1) | **GET** `/workgroups/v1/{id}` | Get governance group by id
[**Get-ConnectionsV1**](#list-connections-v1) | **GET** `/workgroups/v1/{workgroupId}/connections` | List connections for governance group
[**Get-WorkgroupMembersV1**](#list-workgroup-members-v1) | **GET** `/workgroups/v1/{workgroupId}/members` | List governance group members
[**Get-WorkgroupsV1**](#list-workgroups-v1) | **GET** `/workgroups/v1` | List governance groups
[**Update-WorkgroupV1**](#patch-workgroup-v1) | **PATCH** `/workgroups/v1/{id}` | Patch a governance group
[**Update-WorkgroupMembersV1**](#update-workgroup-members-v1) | **POST** `/workgroups/v1/{workgroupId}/members/bulk-add` | Add members to governance group


## create-workgroup-v1
This API creates a new Governance Group.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-workgroup-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Workgroupdto | [**Workgroupdto**](../models/workgroupdto) | True  | 

### Return type
[**Workgroupdto**](../models/workgroupdto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Governance Group object created. | Workgroupdto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkgroupsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkgroupsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Workgroupdto = @""@

# Create a new governance group.

try {
    $Result = ConvertFrom-JsonToWorkgroupdto -Json $Workgroupdto
    New-WorkgroupV1 -Workgroupdto $Result 
    
    # Below is a request that includes all optional parameters
    # New-WorkgroupV1 -Workgroupdto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-WorkgroupV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-workgroup-members-v1
This API removes one or more  members from a Governance Group.  A
>  **Following field of Identity is an optional field in the request.**

>  **name**

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-workgroup-members-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | WorkgroupId | **String** | True  | ID of the Governance Group.
 Body  | BulkworkgroupmembersrequestInner | [**[]BulkworkgroupmembersrequestInner**](../models/bulkworkgroupmembersrequest-inner) | True  | List of identities to be removed from  a Governance Group members list.

### Return type
[**Workgroupmemberdeleteitem[]**](../models/workgroupmemberdeleteitem)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
207 | List of deleted and not deleted identities from Governance Group members list. | Workgroupmemberdeleteitem[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkgroupsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkgroupsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$WorkgroupId = "2c91808a7813090a017814121919ecca" # String | ID of the Governance Group.
 $BulkworkgroupmembersrequestInner = @""@ # BulkworkgroupmembersrequestInner[] | List of identities to be removed from  a Governance Group members list.
 

# Remove members from governance group

try {
    $Result = ConvertFrom-JsonToBulkworkgroupmembersrequestInner -Json $BulkworkgroupmembersrequestInner
    Remove-WorkgroupMembersV1 -WorkgroupId $WorkgroupId -BulkworkgroupmembersrequestInner $Result 
    
    # Below is a request that includes all optional parameters
    # Remove-WorkgroupMembersV1 -WorkgroupId $WorkgroupId -BulkworkgroupmembersrequestInner $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-WorkgroupMembersV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-workgroup-v1
This API deletes a Governance Group by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-workgroup-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkgroupsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkgroupsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180837ca6693d017ca8d097500149" # String | ID of the Governance Group

# Delete a governance group

try {
    Remove-WorkgroupV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-WorkgroupV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-WorkgroupV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-workgroups-in-bulk-v1

This API initiates a bulk deletion of one or more Governance Groups.

>  If any of the indicated Governance Groups have one or more connections associated with it,then those Governance Groups will be added in  **inUse** list of the response. Governance Group(s) marked as **inUse** can not be deleted.

>  If any of the indicated Governance Groups is not does not exists in Organization,then those Governance Groups will be added in **notFound** list of the response. Governance Groups marked as **notFound** will not be deleted.

>  If any of the indicated Governance Groups does not have any connections associated with it,then those Governance Groups will be added in **deleted** list of the response. A Governance Group marked as **deleted** will be deleted from current Organization.

>  If the request contains any **inUse** or **notFound** Governance Group IDs then it skips only these Governance Groups for deletion and deletes the rest of Governance Groups which have no connections associated with it. 

>  **This API has limit number of Governance Groups can be deleted at one time. If the request contains more then 100 Governance Groups IDs to be deleted then the API will throw an exception.**

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-workgroups-in-bulk-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Workgroupbulkdeleterequest | [**Workgroupbulkdeleterequest**](../models/workgroupbulkdeleterequest) | True  | 

### Return type
[**Workgroupdeleteitem[]**](../models/workgroupdeleteitem)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
207 | Governance Group bulk delete response. | Workgroupdeleteitem[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkgroupsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkgroupsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Workgroupbulkdeleterequest = @"{"ids":["567a697e-885b-495a-afc5-d55e1c23a302","c7b0f7b2-1e78-4063-b294-a555333dacd2"]}"@

# Delete governance group(s)

try {
    $Result = ConvertFrom-JsonToWorkgroupbulkdeleterequest -Json $Workgroupbulkdeleterequest
    Remove-WorkgroupsInBulkV1 -Workgroupbulkdeleterequest $Result 
    
    # Below is a request that includes all optional parameters
    # Remove-WorkgroupsInBulkV1 -Workgroupbulkdeleterequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-WorkgroupsInBulkV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-workgroup-v1
This API returns a Governance Groups by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-workgroup-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the Governance Group

### Return type
[**Workgroupdto**](../models/workgroupdto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A Governance Group | Workgroupdto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkgroupsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkgroupsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180837ca6693d017ca8d097500149" # String | ID of the Governance Group

# Get governance group by id

try {
    Get-WorkgroupV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-WorkgroupV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-WorkgroupV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-connections-v1
This API returns list of connections associated with a Governance Group.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-connections-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | WorkgroupId | **String** | True  | ID of the Governance Group.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 50) | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**

### Return type
[**Workgroupconnectiondto[]**](../models/workgroupconnectiondto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List all connections associated with a Governance Group. | Workgroupconnectiondto[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkgroupsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkgroupsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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

# List connections for governance group

try {
    Get-ConnectionsV1 -WorkgroupId $WorkgroupId 
    
    # Below is a request that includes all optional parameters
    # Get-ConnectionsV1 -WorkgroupId $WorkgroupId -Offset $Offset -Limit $Limit -Count $Count -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ConnectionsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-workgroup-members-v1
This API returns list of members associated with a Governance Group.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-workgroup-members-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | WorkgroupId | **String** | True  | ID of the Governance Group.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 50) | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**

### Return type
[**ListWorkgroupMembersV1200ResponseInner[]**](../models/list-workgroup-members-v1200-response-inner)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List all members associated with a Governance Group. | ListWorkgroupMembersV1200ResponseInner[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkgroupsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkgroupsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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

# List governance group members

try {
    Get-WorkgroupMembersV1 -WorkgroupId $WorkgroupId 
    
    # Below is a request that includes all optional parameters
    # Get-WorkgroupMembersV1 -WorkgroupId $WorkgroupId -Offset $Offset -Limit $Limit -Count $Count -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-WorkgroupMembersV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-workgroups-v1
This API returns list of Governance Groups

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-workgroups-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, sw, in*  **memberships.identityId**: *eq, in*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, id, description**

### Return type
[**Workgroupdto[]**](../models/workgroupdto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Governance Groups | Workgroupdto[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkgroupsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkgroupsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'name sw "Test"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, sw, in*  **memberships.identityId**: *eq, in* (optional)
$Sorters = "name,-modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, id, description** (optional)

# List governance groups

try {
    Get-WorkgroupsV1 
    
    # Below is a request that includes all optional parameters
    # Get-WorkgroupsV1 -Offset $Offset -Limit $Limit -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-WorkgroupsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-workgroup-v1
This API updates an existing governance group by ID. The following fields and objects are patchable:
* name
* description
* owner

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-workgroup-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the Governance Group
 Body  | Jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) |   (optional) | 

### Return type
[**Workgroupdto**](../models/workgroupdto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A Governance Group. | Workgroupdto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkgroupsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkgroupsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180837ca6693d017ca8d097500149" # String | ID of the Governance Group
 $Jsonpatchoperation = @"[{"op":"replace","path":"/description","value":"Governance Group new description."}]"@ # Jsonpatchoperation[] |  (optional)
 

# Patch a governance group

try {
    Update-WorkgroupV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Update-WorkgroupV1 -Id $Id -Jsonpatchoperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-WorkgroupV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-workgroup-members-v1
This API adds one or more members to a Governance Group.  A token with API, ORG_ADMIN authority is required to call this API.

>  **Following field of Identity is an optional field in the request.**

>  **name**

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-workgroup-members-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | WorkgroupId | **String** | True  | ID of the Governance Group.
 Body  | BulkworkgroupmembersrequestInner | [**[]BulkworkgroupmembersrequestInner**](../models/bulkworkgroupmembersrequest-inner) | True  | List of identities to be added to a Governance Group members list.

### Return type
[**Workgroupmemberadditem[]**](../models/workgroupmemberadditem)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
207 | List of added and not added identities into  Governance Group members list. | Workgroupmemberadditem[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkgroupsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkgroupsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$WorkgroupId = "2c91808a7813090a017814121919ecca" # String | ID of the Governance Group.
 $BulkworkgroupmembersrequestInner = @""@ # BulkworkgroupmembersrequestInner[] | List of identities to be added to a Governance Group members list.
 

# Add members to governance group

try {
    $Result = ConvertFrom-JsonToBulkworkgroupmembersrequestInner -Json $BulkworkgroupmembersrequestInner
    Update-WorkgroupMembersV1 -WorkgroupId $WorkgroupId -BulkworkgroupmembersrequestInner $Result 
    
    # Below is a request that includes all optional parameters
    # Update-WorkgroupMembersV1 -WorkgroupId $WorkgroupId -BulkworkgroupmembersrequestInner $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-WorkgroupMembersV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
