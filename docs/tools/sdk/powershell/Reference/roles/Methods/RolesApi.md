---
id: roles
title: Roles
pagination_label: Roles
sidebar_label: Roles
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roles', 'Roles'] 
slug: /tools/sdk/powershell/roles/methods/roles
tags: ['SDK', 'Software Development Kit', 'Roles', 'Roles']
---

# Roles
  Use this API to implement and customize role functionality.
With this functionality in place, administrators can create roles and configure them for use throughout Identity Security Cloud. 
Identity Security Cloud can use established criteria to automatically assign the roles to qualified users. This enables users to get all the access they need quickly and securely and administrators to spend their time on other tasks.

Entitlements represent the most granular level of access in Identity Security Cloud. 
Access profiles represent the next level and often group entitlements. 
Roles represent the broadest level of access and often group access profiles. 

For example, an Active Directory source in Identity Security Cloud can have multiple entitlements: the first, &#39;Employees,&#39; may represent the access all employees have at the organization, and a second, &#39;Developers,&#39; may represent the access all developers have at the organization.

An administrator can then create a broader set of access in the form of an access profile, &#39;AD Developers&#39; grouping the &#39;Employees&#39; entitlement with the &#39;Developers&#39; entitlement.

An administrator can then create an even broader set of access in the form of a role grouping the &#39;AD Developers&#39; access profile with another profile, &#39;GitHub Developers,&#39; grouping entitlements for the GitHub source.

When users only need Active Directory employee access, they can request access to the &#39;Employees&#39; entitlement.

When users need both Active Directory employee and developer access, they can request access to the &#39;AD Developers&#39; access profile.

When users need both the &#39;AD Developers&#39; access profile and the &#39;GitHub Developers&#39; access profile, they can request access to the role grouping both. 

Roles often represent positions within organizations. 
For example, an organization&#39;s accountant can access all the tools the organization&#39;s accountants need with the &#39;Accountant&#39; role. 
If the accountant switches to engineering, a qualified member of the organization can quickly revoke the accountant&#39;s &#39;Accountant&#39; access and grant access to the &#39;Engineer&#39; role instead, granting access to all the tools the organization&#39;s engineers need.

In Identity Security Cloud, adminstrators can use the Access drop-down menu and select Roles to view, configure, and delete existing roles, as well as create new ones. 
Administrators can enable and disable the role, and they can also make the following configurations: 

- Manage Access: Manage the role&#39;s access by adding or removing access profiles.

- Define Assignment: Define the criteria Identity Security Cloud uses to assign the role to identities. 
Use the first option, &#39;Standard Criteria,&#39; to provide specific criteria for assignment like specific account attributes, entitlements, or identity attributes. 
Use the second, &#39;Identity List,&#39; to specify the identities for assignment.

- Access Requests: Configure roles to be requestable and establish an approval process for any requests that the role be granted or revoked. 
Do not configure a role to be requestable without establishing a secure access request approval process for that role first. 

Refer to [Working with Roles](https://documentation.sailpoint.com/saas/help/access/roles.html) for more information about roles.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-RoleV1**](#create-role-v1) | **POST** `/roles/v1` | Create a role
[**Remove-BulkRolesV1**](#delete-bulk-roles-v1) | **POST** `/roles/v1/bulk-delete` | Delete role(s)
[**Remove-MetadataFromRoleByKeyAndValueV1**](#delete-metadata-from-role-by-key-and-value-v1) | **DELETE** `/roles/v1/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Remove a metadata from role.
[**Remove-RoleV1**](#delete-role-v1) | **DELETE** `/roles/v1/{id}` | Delete a role
[**Get-BulkUpdateStatusByIdV1**](#get-bulk-update-status-by-id-v1) | **GET** `/roles/v1/access-model-metadata/bulk-update/id` | Get bulk-update status by id
[**Get-BulkUpdateStatusV1**](#get-bulk-update-status-v1) | **GET** `/roles/v1/access-model-metadata/bulk-update` | Get bulk-update statuses
[**Get-RoleAssignedIdentitiesV1**](#get-role-assigned-identities-v1) | **GET** `/roles/v1/{id}/assigned-identities` | List identities assigned a role
[**Get-RoleEntitlementsV1**](#get-role-entitlements-v1) | **GET** `/roles/v1/{id}/entitlements` | List role&#39;s entitlements
[**Get-RoleV1**](#get-role-v1) | **GET** `/roles/v1/{id}` | Get a role
[**Get-RolesV1**](#list-roles-v1) | **GET** `/roles/v1` | List roles
[**Update-RoleV1**](#patch-role-v1) | **PATCH** `/roles/v1/{id}` | Patch a specified role
[**Search-RolesByFilterV1**](#search-roles-by-filter-v1) | **POST** `/roles/v1/filter` | Filter roles by metadata
[**Update-AttributeKeyAndValueToRoleV1**](#update-attribute-key-and-value-to-role-v1) | **POST** `/roles/v1/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Add a metadata to role.
[**Update-RolesMetadataByFilterV1**](#update-roles-metadata-by-filter-v1) | **POST** `/roles/v1/access-model-metadata/bulk-update/filter` | Bulk-update roles&#39; metadata by filters
[**Update-RolesMetadataByIdsV1**](#update-roles-metadata-by-ids-v1) | **POST** `/roles/v1/access-model-metadata/bulk-update/ids` | Bulk-update roles&#39; metadata by id
[**Update-RolesMetadataByQueryV1**](#update-roles-metadata-by-query-v1) | **POST** `/roles/v1/access-model-metadata/bulk-update/query` | Bulk-update roles&#39; metadata by query


## create-role-v1
This API creates a role.

You must have a token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority to call this API. 

In addition, a ROLE_SUBADMIN may not create a role including an access profile if that access profile is associated with a source the ROLE_SUBADMIN is not associated with themselves. 

The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing roles. However, any new roles as well as any updates to existing descriptions will be limited to 2000 characters.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-role-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Role | [**Role**](../models/role) | True  | 

### Return type
[**Role**](../models/role)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Role created | Role
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListRolesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListRolesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Role = @""@

# Create a role

try {
    $Result = ConvertFrom-JsonToRole -Json $Role
    New-RoleV1 -Role $Result 
    
    # Below is a request that includes all optional parameters
    # New-RoleV1 -Role $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-RoleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-bulk-roles-v1
This endpoint initiates a bulk deletion of one or more roles.
When the request is successful, the endpoint returns the bulk delete's task result ID.  To follow the task, you can use [Get Task Status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status), which will return the task result's status and information. 
This endpoint can only bulk delete up to a limit of 50 roles per request. 
A user with ROLE_SUBADMIN authority can only call this endpoint if all roles included in the request are associated with sources with management workgroups the ROLE_SUBADMIN is a member of.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-bulk-roles-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Rolebulkdeleterequest | [**Rolebulkdeleterequest**](../models/rolebulkdeleterequest) | True  | 

### Return type
[**Taskresultdto**](../models/taskresultdto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Returns an object with the id of the task performing the delete operation. | Taskresultdto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListRolesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListRolesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Rolebulkdeleterequest = @"{"roleIds":["2c91808876438bb2017668b91919ecca","2c91808876438ba801766e129f151816"]}"@

# Delete role(s)

try {
    $Result = ConvertFrom-JsonToRolebulkdeleterequest -Json $Rolebulkdeleterequest
    Remove-BulkRolesV1 -Rolebulkdeleterequest $Result 
    
    # Below is a request that includes all optional parameters
    # Remove-BulkRolesV1 -Rolebulkdeleterequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BulkRolesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-metadata-from-role-by-key-and-value-v1
This API initialize a request to remove a single Access Model Metadata from a role by attribute key and value. A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-metadata-from-role-by-key-and-value-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The role's id.
Path   | AttributeKey | **String** | True  | Technical name of the Attribute.
Path   | AttributeValue | **String** | True  | Technical name of the Attribute Value.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Request accepted | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListRolesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListRolesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808c74ff913f0175097daa9d59cd" # String | The role's id.
$AttributeKey = "iscPrivacy" # String | Technical name of the Attribute.
$AttributeValue = "public" # String | Technical name of the Attribute Value.

# Remove a metadata from role.

try {
    Remove-MetadataFromRoleByKeyAndValueV1 -Id $Id -AttributeKey $AttributeKey -AttributeValue $AttributeValue 
    
    # Below is a request that includes all optional parameters
    # Remove-MetadataFromRoleByKeyAndValueV1 -Id $Id -AttributeKey $AttributeKey -AttributeValue $AttributeValue  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-MetadataFromRoleByKeyAndValueV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-role-v1
This API deletes a Role by its ID.

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles included in the Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-role-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the Role

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListRolesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListRolesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808a7813090a017814121e121518" # String | ID of the Role

# Delete a role

try {
    Remove-RoleV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-RoleV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-RoleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-bulk-update-status-by-id-v1

This API initial a request for one bulk update's status by bulk update Id returns the status of the bulk update process.
A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API. 

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-bulk-update-status-by-id-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The Id of the bulk update task.

### Return type
[**Rolebulkupdateresponse**](../models/rolebulkupdateresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | return if bulk update status could be found. | Rolebulkupdateresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListRolesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListRolesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "c24359c389374d0fb8585698a2189e3d" # String | The Id of the bulk update task.

# Get bulk-update status by id

try {
    Get-BulkUpdateStatusByIdV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BulkUpdateStatusByIdV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BulkUpdateStatusByIdV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-bulk-update-status-v1
This API returns a list of all unfinished bulk update process status of the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-bulk-update-status-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**Rolegetallbulkupdateresponse[]**](../models/rolegetallbulkupdateresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | successfully get the status of all unfinished bulk updates request. | Rolegetallbulkupdateresponse[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListRolesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListRolesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Get bulk-update statuses

try {
    Get-BulkUpdateStatusV1 
    
    # Below is a request that includes all optional parameters
    # Get-BulkUpdateStatusV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BulkUpdateStatusV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-role-assigned-identities-v1


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-assigned-identities-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the Role for which the assigned Identities are to be listed
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **aliasName**: *eq, sw*  **email**: *eq, sw*  **name**: *eq, sw, co*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, aliasName, email**

### Return type
[**Roleidentity[]**](../models/roleidentity)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Identities assigned the Role | Roleidentity[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListRolesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListRolesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808a7813090a017814121e121518" # String | ID of the Role for which the assigned Identities are to be listed
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'name sw Joe' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **aliasName**: *eq, sw*  **email**: *eq, sw*  **name**: *eq, sw, co* (optional)
$Sorters = "aliasName,name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, aliasName, email** (optional)

# List identities assigned a role

try {
    Get-RoleAssignedIdentitiesV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-RoleAssignedIdentitiesV1 -Id $Id -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-RoleAssignedIdentitiesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-role-entitlements-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get a list of entitlements associated with a specified role.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-entitlements-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Containing role's ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 50) | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListRolesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListRolesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808a7813090a017814121919ecca" # String | Containing role's ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 50 # Int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'attribute eq "memberOf"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in* (optional)
$Sorters = "name,-modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** (optional)

# List role's entitlements

try {
    Get-RoleEntitlementsV1 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-RoleEntitlementsV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-RoleEntitlementsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-role-v1
This API returns a Role by its ID.
A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles included in the Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the Role

### Return type
[**Role**](../models/role)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of all Roles | Role
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListRolesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListRolesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808a7813090a017814121e121518" # String | ID of the Role

# Get a role

try {
    Get-RoleV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-RoleV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-RoleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-roles-v1
This API returns a list of Roles.

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-roles-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | ForSubadmin | **String** |   (optional) | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin.
  Query | Limit | **Int32** |   (optional) (default to 50) | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **dimensional**: *eq*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**
  Query | ForSegmentIds | **String** |   (optional) | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs.  If segmentation is currently unavailable, specifying this parameter results in an error.
  Query | IncludeUnsegmented | **Boolean** |   (optional) (default to $true) | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error.

### Return type
[**Role[]**](../models/role)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Roles | Role[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListRolesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListRolesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$ForSubadmin = "5168015d32f890ca15812c9180835d2e" # String | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional)
$Limit = 50 # Int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'requestable eq false' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **dimensional**: *eq* (optional)
$Sorters = "name,-modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
$ForSegmentIds = "0b5c9f25-83c6-4762-9073-e38f7bb2ae26,2e8d8180-24bc-4d21-91c6-7affdb473b0d" # String | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs.  If segmentation is currently unavailable, specifying this parameter results in an error. (optional)
$IncludeUnsegmented = $false # Boolean | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. (optional) (default to $true)

# List roles

try {
    Get-RolesV1 
    
    # Below is a request that includes all optional parameters
    # Get-RolesV1 -ForSubadmin $ForSubadmin -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters -ForSegmentIds $ForSegmentIds -IncludeUnsegmented $IncludeUnsegmented  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-RolesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-role-v1
This API updates an existing role using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

The following fields are patchable:

* name
* description
* enabled
* owner
* additionalOwners
* accessProfiles
* entitlements
* membership
* requestable
* accessRequestConfig
* revokeRequestConfig
* segments
* accessModelMetadata   
A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all access profiles included in the role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing roles, however, any new roles as well as any updates to existing descriptions will be limited to 2000 characters.

When you use this API to modify a role's membership identities, you can only modify up to a limit of 500 membership identities at a time.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-role-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the Role to patch
 Body  | Jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | 

### Return type
[**Role**](../models/role)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the Role as updated. | Role
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListRolesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListRolesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808a7813090a017814121e121518" # String | ID of the Role to patch
 $Jsonpatchoperation = @"[{"op":"replace","path":"/requestable","value":true},{"op":"replace","path":"/enabled","value":true}]"@ # Jsonpatchoperation[] | 
 

# Patch a specified role

try {
    $Result = ConvertFrom-JsonToJsonpatchoperation -Json $Jsonpatchoperation
    Update-RoleV1 -Id $Id -Jsonpatchoperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-RoleV1 -Id $Id -Jsonpatchoperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-RoleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## search-roles-by-filter-v1
This API returns a list of Role that filter by metadata and filter, it support filter by  both path parameter and attribute key and values.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, HELPDESK, CERT_ADMIN, REPORT_ADMIN or SOURCE_ADMIN  authority is required to call this API. 

[API Spec](https://developer.sailpoint.com/docs/api/v1/search-roles-by-filter-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | ForSubadmin | **String** |   (optional) | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin.
  Query | Limit | **Int32** |   (optional) (default to 50) | Max number of results to return See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | Boolean indicating whether a total count is returned, factoring in any filter parameters, in the X-Total-Count response header. The value is the total size of the collection that would be returned if limit and offset were ignored.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**
  Query | ForSegmentIds | **String** |   (optional) | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error.
  Query | IncludeUnsegmented | **Boolean** |   (optional) (default to $true) | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error.
 Body  | Rolelistfilterdto | [**Rolelistfilterdto**](../models/rolelistfilterdto) |   (optional) | 

### Return type
[**Role[]**](../models/role)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with A list of Roles | Role[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListRolesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListRolesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$ForSubadmin = "5168015d32f890ca15812c9180835d2e" # String | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional)
$Limit = 50 # Int32 | Max number of results to return See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | Boolean indicating whether a total count is returned, factoring in any filter parameters, in the X-Total-Count response header. The value is the total size of the collection that would be returned if limit and offset were ignored.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Sorters = "name,-modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
$ForSegmentIds = "0b5c9f25-83c6-4762-9073-e38f7bb2ae26,2e8d8180-24bc-4d21-91c6-7affdb473b0d" # String | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. (optional)
$IncludeUnsegmented = $false # Boolean | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. (optional) (default to $true)
$Rolelistfilterdto = @"{"filters":"dimensional eq false","ammKeyValues":[{"attribute":"iscFederalClassifications","values":["secret"]}]}"@

# Filter roles by metadata

try {
    Search-RolesByFilterV1 
    
    # Below is a request that includes all optional parameters
    # Search-RolesByFilterV1 -ForSubadmin $ForSubadmin -Limit $Limit -Offset $Offset -Count $Count -Sorters $Sorters -ForSegmentIds $ForSegmentIds -IncludeUnsegmented $IncludeUnsegmented -Rolelistfilterdto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Search-RolesByFilterV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-attribute-key-and-value-to-role-v1
This API initialize a request to add a single Access Model Metadata to a role by attribute key and attribute value. A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API. The maximum number of attributes in one role is 25. Custom metadata update, including ADD and REPLACE need suit licensed.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-attribute-key-and-value-to-role-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The Id of a role
Path   | AttributeKey | **String** | True  | Technical name of the Attribute.
Path   | AttributeValue | **String** | True  | Technical name of the Attribute Value.

### Return type
[**Role**](../models/role)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the Role as updated. | Role
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListRolesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListRolesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "c24359c389374d0fb8585698a2189e3d" # String | The Id of a role
$AttributeKey = "iscPrivacy" # String | Technical name of the Attribute.
$AttributeValue = "public" # String | Technical name of the Attribute Value.

# Add a metadata to role.

try {
    Update-AttributeKeyAndValueToRoleV1 -Id $Id -AttributeKey $AttributeKey -AttributeValue $AttributeValue 
    
    # Below is a request that includes all optional parameters
    # Update-AttributeKeyAndValueToRoleV1 -Id $Id -AttributeKey $AttributeKey -AttributeValue $AttributeValue  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-AttributeKeyAndValueToRoleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-roles-metadata-by-filter-v1
This API initiates a bulk update of metadata for one or more Roles by filter.
A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API.
The maximum metadata value count for a single role is 25.
Custom metadata update, including add, replace need suit licensed.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-roles-metadata-by-filter-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Rolemetadatabulkupdatebyfilterrequest | [**Rolemetadatabulkupdatebyfilterrequest**](../models/rolemetadatabulkupdatebyfilterrequest) | True  | 

### Return type
[**Rolebulkupdateresponse**](../models/rolebulkupdateresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Returned if bulk update request created | Rolebulkupdateresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListRolesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListRolesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Rolemetadatabulkupdatebyfilterrequest = @"{"operation":"ADD","replaceScope":"ALL","filters":"requestable eq false","values":[{"attribute":"iscFederalClassifications","values":["topSecret"]}]}"@

# Bulk-update roles' metadata by filters

try {
    $Result = ConvertFrom-JsonToRolemetadatabulkupdatebyfilterrequest -Json $Rolemetadatabulkupdatebyfilterrequest
    Update-RolesMetadataByFilterV1 -Rolemetadatabulkupdatebyfilterrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-RolesMetadataByFilterV1 -Rolemetadatabulkupdatebyfilterrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-RolesMetadataByFilterV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-roles-metadata-by-ids-v1
This API initiates a bulk update of metadata for one or more Roles by a list of Role Ids.
A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API.
The maximum role count in a single update request is 3000. The maximum metadata value count for a single role is 25.
Custom metadata update, including add, replace need suit licensed.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-roles-metadata-by-ids-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Rolemetadatabulkupdatebyidrequest | [**Rolemetadatabulkupdatebyidrequest**](../models/rolemetadatabulkupdatebyidrequest) | True  | 

### Return type
[**Rolebulkupdateresponse**](../models/rolebulkupdateresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Returned if bulk update request created | Rolebulkupdateresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListRolesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListRolesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Rolemetadatabulkupdatebyidrequest = @""@

# Bulk-update roles' metadata by id

try {
    $Result = ConvertFrom-JsonToRolemetadatabulkupdatebyidrequest -Json $Rolemetadatabulkupdatebyidrequest
    Update-RolesMetadataByIdsV1 -Rolemetadatabulkupdatebyidrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-RolesMetadataByIdsV1 -Rolemetadatabulkupdatebyidrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-RolesMetadataByIdsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-roles-metadata-by-query-v1
This API initiates a bulk update of metadata for one or more Roles by query.
A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API.
The maximum metadata value count for a single role is 25.
Custom metadata update, including add, replace need suit licensed.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-roles-metadata-by-query-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Rolemetadatabulkupdatebyqueryrequest | [**Rolemetadatabulkupdatebyqueryrequest**](../models/rolemetadatabulkupdatebyqueryrequest) | True  | 

### Return type
[**Rolebulkupdateresponse**](../models/rolebulkupdateresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Returned if bulk update request created | Rolebulkupdateresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListRolesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListRolesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Rolemetadatabulkupdatebyqueryrequest = @"{"example of a success update":{"query":{"indices":["roles"],"queryType":"TEXT","textQuery":{"terms":["test123"],"fields":["id"],"matchAny":false,"contains":true},"includeNested":false},"operation":"REPLACE","replaceScope":"ALL","values":[{"attribute":"iscFederalClassifications","values":["secret"]}]}}"@

# Bulk-update roles' metadata by query

try {
    $Result = ConvertFrom-JsonToRolemetadatabulkupdatebyqueryrequest -Json $Rolemetadatabulkupdatebyqueryrequest
    Update-RolesMetadataByQueryV1 -Rolemetadatabulkupdatebyqueryrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-RolesMetadataByQueryV1 -Rolemetadatabulkupdatebyqueryrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-RolesMetadataByQueryV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
