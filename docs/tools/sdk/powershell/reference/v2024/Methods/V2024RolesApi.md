---
id: v2024-roles
title: Roles
pagination_label: Roles
sidebar_label: Roles
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roles'] 
slug: /tools/sdk/powershell/v2024/methods/roles
tags: ['SDK', 'Software Development Kit', 'Roles']
---


# Roles

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2024Role**](#create-role) | **POST** `/roles` | Create a Role
[**Remove-V2024BulkRoles**](#delete-bulk-roles) | **POST** `/roles/bulk-delete` | Delete Role(s)
[**Remove-V2024MetadataFromRoleByKeyAndValue**](#delete-metadata-from-role-by-key-and-value) | **DELETE** `/roles/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Remove a Metadata From Role.
[**Remove-V2024Role**](#delete-role) | **DELETE** `/roles/{id}` | Delete a Role
[**Get-V2024BulkUpdateStatus**](#get-bulk-update-status) | **GET** `/roles/access-model-metadata/bulk-update` | Get Bulk-Update Statuses
[**Get-V2024BulkUpdateStatusById**](#get-bulk-update-status-by-id) | **GET** `/roles/access-model-metadata/bulk-update/id` | Get Bulk-Update Status by ID
[**Get-V2024Role**](#get-role) | **GET** `/roles/{id}` | Get a Role
[**Get-V2024RoleAssignedIdentities**](#get-role-assigned-identities) | **GET** `/roles/{id}/assigned-identities` | List Identities assigned a Role
[**Get-V2024RoleEntitlements**](#get-role-entitlements) | **GET** `/roles/{id}/entitlements` | List role&#39;s Entitlements
[**Get-V2024Roles**](#list-roles) | **GET** `/roles` | List Roles
[**Update-V2024Role**](#patch-role) | **PATCH** `/roles/{id}` | Patch a specified Role
[**Search-V2024RolesByFilter**](#search-roles-by-filter) | **POST** `/roles/filter` | Filter Roles by Metadata
[**Update-V2024AttributeKeyAndValueToRole**](#update-attribute-key-and-value-to-role) | **POST** `/roles/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Add a Metadata to Role.
[**Update-V2024RolesMetadataByFilter**](#update-roles-metadata-by-filter) | **POST** `/roles/access-model-metadata/bulk-update/filter` | Bulk-Update Roles&#39; Metadata by Filters
[**Update-V2024RolesMetadataByIds**](#update-roles-metadata-by-ids) | **POST** `/roles/access-model-metadata/bulk-update/ids` | Bulk-Update Roles&#39; Metadata by ID
[**Update-V2024RolesMetadataByQuery**](#update-roles-metadata-by-query) | **POST** `/roles/access-model-metadata/bulk-update/query` | Bulk-Update Roles&#39; Metadata by Query


## create-role

This API creates a role.
In addition, a ROLE_SUBADMIN may not create a role including an access profile if that access profile is associated with a source the ROLE_SUBADMIN is not associated with themselves. 

The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing roles. However, any new roles as well as any updates to existing descriptions will be limited to 2000 characters.

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
$Role = @"{
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
  "dimensional" : false,
  "created" : "2021-03-01T22:32:58.104Z",
  "dimensionRefs" : [ {
    "name" : "Role 2",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "DIMENSION"
  }, {
    "name" : "Role 2",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "DIMENSION"
  } ],
  "description" : "Urna amet cursus pellentesque nisl orci maximus lorem nisl euismod fusce morbi placerat adipiscing maecenas nisi tristique et metus et lacus sed morbi nunc nisl maximus magna arcu varius sollicitudin elementum enim maecenas nisi id ipsum tempus fusce diam ipsum tortor.",
  "membership" : {
    "identities" : [ {
      "aliasName" : "t.edison",
      "name" : "Thomas Edison",
      "id" : "2c9180a46faadee4016fb4e018c20639",
      "type" : "IDENTITY"
    }, {
      "aliasName" : "t.edison",
      "name" : "Thomas Edison",
      "id" : "2c9180a46faadee4016fb4e018c20639",
      "type" : "IDENTITY"
    } ],
    "criteria" : {
      "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
      "children" : [ {
        "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
        "children" : [ {
          "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
          "operation" : "EQUALS",
          "key" : {
            "sourceId" : "2c9180867427f3a301745aec18211519",
            "property" : "attribute.email",
            "type" : "ACCOUNT"
          }
        }, {
          "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
          "operation" : "EQUALS",
          "key" : {
            "sourceId" : "2c9180867427f3a301745aec18211519",
            "property" : "attribute.email",
            "type" : "ACCOUNT"
          }
        } ],
        "operation" : "EQUALS",
        "key" : {
          "sourceId" : "2c9180867427f3a301745aec18211519",
          "property" : "attribute.email",
          "type" : "ACCOUNT"
        }
      }, {
        "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
        "children" : [ {
          "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
          "operation" : "EQUALS",
          "key" : {
            "sourceId" : "2c9180867427f3a301745aec18211519",
            "property" : "attribute.email",
            "type" : "ACCOUNT"
          }
        }, {
          "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
          "operation" : "EQUALS",
          "key" : {
            "sourceId" : "2c9180867427f3a301745aec18211519",
            "property" : "attribute.email",
            "type" : "ACCOUNT"
          }
        } ],
        "operation" : "EQUALS",
        "key" : {
          "sourceId" : "2c9180867427f3a301745aec18211519",
          "property" : "attribute.email",
          "type" : "ACCOUNT"
        }
      } ],
      "operation" : "EQUALS",
      "key" : {
        "sourceId" : "2c9180867427f3a301745aec18211519",
        "property" : "attribute.email",
        "type" : "ACCOUNT"
      }
    },
    "type" : "IDENTITY_LIST"
  },
  "enabled" : true,
  "revocationRequestConfig" : {
    "commentsRequired" : false,
    "approvalSchemes" : [ {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    }, {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    } ],
    "denialCommentsRequired" : false
  },
  "segments" : [ "f7b1b8a3-5fed-4fd4-ad29-82014e137e19", "29cb6c06-1da8-43ea-8be4-b3125f248f2a" ],
  "legacyMembershipInfo" : {
    "type" : "IDENTITY_LIST"
  },
  "accessRequestConfig" : {
    "commentsRequired" : true,
    "approvalSchemes" : [ {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    }, {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    } ],
    "denialCommentsRequired" : true
  },
  "accessProfiles" : [ {
    "name" : "Access Profile 2567",
    "id" : "ff808081751e6e129f1518161919ecca",
    "type" : "ACCESS_PROFILE"
  }, {
    "name" : "Access Profile 2567",
    "id" : "ff808081751e6e129f1518161919ecca",
    "type" : "ACCESS_PROFILE"
  } ],
  "name" : "Role 2567",
  "modified" : "2021-03-02T20:22:28.104Z",
  "accessModelMetadata" : {
    "attributes" : [ {
      "key" : "iscPrivacy",
      "name" : "Privacy",
      "multiselect" : false,
      "status" : "active",
      "type" : "governance",
      "objectTypes" : [ "all" ],
      "description" : "Specifies the level of privacy associated with an access item.",
      "values" : [ {
        "value" : "public",
        "name" : "Public",
        "status" : "active"
      } ]
    } ]
  },
  "id" : "2c918086749d78830174a1a40e121518",
  "requestable" : true
}"@
# Create a Role
try {
    $Result = ConvertFrom-JsonToRole -Json $Role
    New-V2024Role-V2024Role $Result
    
    # Below is a request that includes all optional parameters
    # New-V2024Role -V2024Role $Role  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024Role"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-bulk-roles

This endpoint initiates a bulk deletion of one or more roles.
When the request is successful, the endpoint returns the bulk delete's task result ID.  To follow the task, you can use [Get Task Status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status), which will return the task result's status and information. 
This endpoint can only bulk delete up to a limit of 50 roles per request. 
A user with ROLE_SUBADMIN authority can only call this endpoint if all roles included in the request are associated with sources with management workgroups the ROLE_SUBADMIN is a member of.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | RoleBulkDeleteRequest | [**RoleBulkDeleteRequest**](../models/role-bulk-delete-request) | True  | 

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
$RoleBulkDeleteRequest = @"{
  "roleIds" : [ "2c9180847812e0b1017817051919ecca", "2c9180887812e0b201781e129f151816" ]
}"@
# Delete Role(s)
try {
    $Result = ConvertFrom-JsonToRoleBulkDeleteRequest -Json $RoleBulkDeleteRequest
    Remove-V2024BulkRoles-V2024RoleBulkDeleteRequest $Result
    
    # Below is a request that includes all optional parameters
    # Remove-V2024BulkRoles -V2024RoleBulkDeleteRequest $RoleBulkDeleteRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024BulkRoles"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-metadata-from-role-by-key-and-value

This API initialize a request to remove a single Access Model Metadata from a role by attribute key and value. A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API.

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
$Id = "2c91808c74ff913f0175097daa9d59cd" # String | The role's id.
$AttributeKey = "iscPrivacy" # String | Technical name of the Attribute.
$AttributeValue = "public" # String | Technical name of the Attribute Value.
# Remove a Metadata From Role.
try {
    Remove-V2024MetadataFromRoleByKeyAndValue-V2024Id $Id -V2024AttributeKey $AttributeKey -V2024AttributeValue $AttributeValue 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024MetadataFromRoleByKeyAndValue -V2024Id $Id -V2024AttributeKey $AttributeKey -V2024AttributeValue $AttributeValue  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024MetadataFromRoleByKeyAndValue"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-role

This API deletes a Role by its ID.

A user with ROLE_SUBADMIN authority may only call this API if all Access Profiles included in the Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

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
$Id = "2c91808a7813090a017814121e121518" # String | ID of the Role
# Delete a Role
try {
    Remove-V2024Role-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024Role -V2024Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024Role"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-bulk-update-status

This API returns a list of all unfinished bulk update process status of the tenant.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type

[**RoleGetAllBulkUpdateResponse[]**](../models/role-get-all-bulk-update-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | successfully get the status of all unfinished bulk updates request. | RoleGetAllBulkUpdateResponse[]
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
# Get Bulk-Update Statuses
try {
    Get-V2024BulkUpdateStatus
    
    # Below is a request that includes all optional parameters
    # Get-V2024BulkUpdateStatus  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024BulkUpdateStatus"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-bulk-update-status-by-id


This API initial a request for one bulk update's status by bulk update Id returns the status of the bulk update process.
A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API. 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The Id of the bulk update task.

### Return type

[**RoleBulkUpdateResponse**](../models/role-bulk-update-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | return if bulk update status could be found. | RoleBulkUpdateResponse
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
$Id = "c24359c389374d0fb8585698a2189e3d" # String | The Id of the bulk update task.
# Get Bulk-Update Status by ID
try {
    Get-V2024BulkUpdateStatusById-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024BulkUpdateStatusById -V2024Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024BulkUpdateStatusById"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-role

This API returns a Role by its ID.
A user with ROLE_SUBADMIN authority may only call this API if all Access Profiles included in the Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

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
$Id = "2c91808a7813090a017814121e121518" # String | ID of the Role
# Get a Role
try {
    Get-V2024Role-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024Role -V2024Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024Role"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-role-assigned-identities



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

[**RoleIdentity[]**](../models/role-identity)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Identities assigned the Role | RoleIdentity[]
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
$Id = "2c91808a7813090a017814121e121518" # String | ID of the Role for which the assigned Identities are to be listed
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'name sw Joe' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **aliasName**: *eq, sw*  **email**: *eq, sw*  **name**: *eq, sw, co* (optional)
$Sorters = "aliasName,name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, aliasName, email** (optional)
# List Identities assigned a Role
try {
    Get-V2024RoleAssignedIdentities-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024RoleAssignedIdentities -V2024Id $Id -V2024Limit $Limit -V2024Offset $Offset -V2024Count $Count -V2024Filters $Filters -V2024Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024RoleAssignedIdentities"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-role-entitlements

This API lists the Entitlements associated with a given role.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the containing role
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified**

### Return type

[**Entitlement1[]**](../models/entitlement1)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Entitlements | Entitlement1[]
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
$Id = "2c91808a7813090a017814121919ecca" # String | ID of the containing role
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'attribute eq "memberOf"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in* (optional)
$Sorters = "name,-modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** (optional)
# List role's Entitlements
try {
    Get-V2024RoleEntitlements-V2024Id $Id -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024RoleEntitlements -V2024Id $Id -V2024XSailPointExperimental $XSailPointExperimental -V2024Limit $Limit -V2024Offset $Offset -V2024Count $Count -V2024Filters $Filters -V2024Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024RoleEntitlements"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## list-roles

This API returns a list of Roles.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | ForSubadmin | **String** |   (optional) | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin.
  Query | Limit | **Int32** |   (optional) (default to 50) | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**
  Query | ForSegmentIds | **String** |   (optional) | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs.  If segmentation is currently unavailable, specifying this parameter results in an error.
  Query | IncludeUnsegmented | **Boolean** |   (optional) (default to $true) | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error.

### Return type

[**Role[]**](../models/role)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Roles | Role[]
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
$ForSubadmin = "5168015d32f890ca15812c9180835d2e" # String | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional)
$Limit = 50 # Int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'requestable eq false' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq* (optional)
$Sorters = "name,-modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
$ForSegmentIds = "0b5c9f25-83c6-4762-9073-e38f7bb2ae26,2e8d8180-24bc-4d21-91c6-7affdb473b0d" # String | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs.  If segmentation is currently unavailable, specifying this parameter results in an error. (optional)
$IncludeUnsegmented = $false # Boolean | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. (optional) (default to $true)
# List Roles
try {
    Get-V2024Roles
    
    # Below is a request that includes all optional parameters
    # Get-V2024Roles -V2024ForSubadmin $ForSubadmin -V2024Limit $Limit -V2024Offset $Offset -V2024Count $Count -V2024Filters $Filters -V2024Sorters $Sorters -V2024ForSegmentIds $ForSegmentIds -V2024IncludeUnsegmented $IncludeUnsegmented  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024Roles"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## patch-role

This API updates an existing role using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.
The following fields are patchable:
* name
* description
* enabled
* owner
* accessProfiles
* entitlements
* membership
* requestable
* accessRequestConfig
* revokeRequestConfig
* segments
* accessModelMetadata

A user with ROLE_SUBADMIN authority may only call this API if all access profiles included in the role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing roles, however, any new roles as well as any updates to existing descriptions will be limited to 2000 characters.

When you use this API to modify a role's membership identities, you can only modify up to a limit of 500 membership identities at a time. 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the Role to patch
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | 

### Return type

[**Role**](../models/role)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the Role as updated. | Role
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
$Id = "2c91808a7813090a017814121e121518" # String | ID of the Role to patch
 # JsonPatchOperation[] | 
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ 

# Patch a specified Role
try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-V2024Role-V2024Id $Id -V2024JsonPatchOperation $Result
    
    # Below is a request that includes all optional parameters
    # Update-V2024Role -V2024Id $Id -V2024JsonPatchOperation $JsonPatchOperation  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024Role"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## search-roles-by-filter

This API returns a list of Role that filter by metadata and filter, it support filter by  both path parameter and attribute key and values.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, HELPDESK, CERT_ADMIN, REPORT_ADMIN or SOURCE_ADMIN  authority is required to call this API. 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | ForSubadmin | **String** |   (optional) | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin.
  Query | Limit | **Int32** |   (optional) (default to 50) | Max number of results to return See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**
  Query | ForSegmentIds | **String** |   (optional) | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error.
  Query | IncludeUnsegmented | **Boolean** |   (optional) (default to $true) | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error.
 Body  | RoleListFilterDTO | [**RoleListFilterDTO**](../models/role-list-filter-dto) |   (optional) | 

### Return type

**Role**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with A list of Roles | String[]
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
$ForSubadmin = "5168015d32f890ca15812c9180835d2e" # String | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional)
$Limit = 50 # Int32 | Max number of results to return See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Sorters = "name,-modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
$ForSegmentIds = "0b5c9f25-83c6-4762-9073-e38f7bb2ae26,2e8d8180-24bc-4d21-91c6-7affdb473b0d" # String | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. (optional)
$IncludeUnsegmented = $false # Boolean | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. (optional) (default to $true)
$RoleListFilterDTO = @"{
  "ammKeyValues" : [ {
    "attribute" : "iscFederalClassifications",
    "values" : [ "secret" ]
  } ],
  "filters" : "dimensional eq false"
}"@
# Filter Roles by Metadata
try {
    Search-V2024RolesByFilter
    
    # Below is a request that includes all optional parameters
    # Search-V2024RolesByFilter -V2024ForSubadmin $ForSubadmin -V2024Limit $Limit -V2024Offset $Offset -V2024Count $Count -V2024Sorters $Sorters -V2024ForSegmentIds $ForSegmentIds -V2024IncludeUnsegmented $IncludeUnsegmented -V2024RoleListFilterDTO $RoleListFilterDTO  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Search-V2024RolesByFilter"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## update-attribute-key-and-value-to-role

This API initialize a request to add a single Access Model Metadata to a role by attribute key and attribute value. A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API. The maximum number of attributes in one role is 25. Custom metadata update, including ADD and REPLACE need suit licensed.

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
$Id = "c24359c389374d0fb8585698a2189e3d" # String | The Id of a role
$AttributeKey = "iscPrivacy" # String | Technical name of the Attribute.
$AttributeValue = "public" # String | Technical name of the Attribute Value.
# Add a Metadata to Role.
try {
    Update-V2024AttributeKeyAndValueToRole-V2024Id $Id -V2024AttributeKey $AttributeKey -V2024AttributeValue $AttributeValue 
    
    # Below is a request that includes all optional parameters
    # Update-V2024AttributeKeyAndValueToRole -V2024Id $Id -V2024AttributeKey $AttributeKey -V2024AttributeValue $AttributeValue  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024AttributeKeyAndValueToRole"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## update-roles-metadata-by-filter

This API initiates a bulk update of metadata for one or more Roles by filter.
A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API.
The maximum metadata value count for a single role is 25.
Custom metadata update, including add, replace need suit licensed.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | RoleMetadataBulkUpdateByFilterRequest | [**RoleMetadataBulkUpdateByFilterRequest**](../models/role-metadata-bulk-update-by-filter-request) | True  | 

### Return type

[**RoleBulkUpdateResponse**](../models/role-bulk-update-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Returned if bulk update request created | RoleBulkUpdateResponse
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
$RoleMetadataBulkUpdateByFilterRequest = @"{
  "values" : [ {
    "attribute" : "iscFederalClassifications",
    "values" : [ "topSecret" ]
  } ],
  "filters" : " requestable eq false",
  "replaceScope" : "ALL",
  "operation" : "REPLACE"
}"@
# Bulk-Update Roles' Metadata by Filters
try {
    $Result = ConvertFrom-JsonToRoleMetadataBulkUpdateByFilterRequest -Json $RoleMetadataBulkUpdateByFilterRequest
    Update-V2024RolesMetadataByFilter-V2024RoleMetadataBulkUpdateByFilterRequest $Result
    
    # Below is a request that includes all optional parameters
    # Update-V2024RolesMetadataByFilter -V2024RoleMetadataBulkUpdateByFilterRequest $RoleMetadataBulkUpdateByFilterRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024RolesMetadataByFilter"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## update-roles-metadata-by-ids

This API initiates a bulk update of metadata for one or more Roles by a list of Role Ids.
A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API.
The maximum role count in a single update request is 3000. The maximum metadata value count for a single role is 25.
Custom metadata update, including add, replace need suit licensed.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | RoleMetadataBulkUpdateByIdRequest | [**RoleMetadataBulkUpdateByIdRequest**](../models/role-metadata-bulk-update-by-id-request) | True  | 

### Return type

[**RoleBulkUpdateResponse**](../models/role-bulk-update-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Returned if bulk update request created | RoleBulkUpdateResponse
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
$RoleMetadataBulkUpdateByIdRequest = @"{
  "roles" : [ "b1db89554cfa431cb8b9921ea38d9367" ],
  "values" : [ {
    "attribute" : "iscFederalClassifications",
    "values" : [ "topSecret" ]
  } ],
  "replaceScope" : "ALL",
  "operation" : "REPLACE"
}"@
# Bulk-Update Roles' Metadata by ID
try {
    $Result = ConvertFrom-JsonToRoleMetadataBulkUpdateByIdRequest -Json $RoleMetadataBulkUpdateByIdRequest
    Update-V2024RolesMetadataByIds-V2024RoleMetadataBulkUpdateByIdRequest $Result
    
    # Below is a request that includes all optional parameters
    # Update-V2024RolesMetadataByIds -V2024RoleMetadataBulkUpdateByIdRequest $RoleMetadataBulkUpdateByIdRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024RolesMetadataByIds"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## update-roles-metadata-by-query

This API initiates a bulk update of metadata for one or more Roles by query.
A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API.
The maximum metadata value count for a single role is 25.
Custom metadata update, including add, replace need suit licensed.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | RoleMetadataBulkUpdateByQueryRequest | [**RoleMetadataBulkUpdateByQueryRequest**](../models/role-metadata-bulk-update-by-query-request) | True  | 

### Return type

[**RoleBulkUpdateResponse**](../models/role-bulk-update-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Returned if bulk update request created | RoleBulkUpdateResponse
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
$RoleMetadataBulkUpdateByQueryRequest = @"{
  "query" : {
    "query\"" : {
      "indices" : [ "roles" ],
      "queryType" : "TEXT",
      "textQuery" : {
        "terms" : [ "test123" ],
        "fields" : [ "id" ],
        "matchAny" : false,
        "contains" : true
      },
      "includeNested" : false
    }
  },
  "values" : [ {
    "attributeValue" : [ "topSecret" ],
    "attributeKey" : "iscFederalClassifications"
  }, {
    "attributeValue" : [ "topSecret" ],
    "attributeKey" : "iscFederalClassifications"
  } ],
  "replaceScope" : "ALL",
  "operation" : "REPLACE"
}"@
# Bulk-Update Roles' Metadata by Query
try {
    $Result = ConvertFrom-JsonToRoleMetadataBulkUpdateByQueryRequest -Json $RoleMetadataBulkUpdateByQueryRequest
    Update-V2024RolesMetadataByQuery-V2024RoleMetadataBulkUpdateByQueryRequest $Result
    
    # Below is a request that includes all optional parameters
    # Update-V2024RolesMetadataByQuery -V2024RoleMetadataBulkUpdateByQueryRequest $RoleMetadataBulkUpdateByQueryRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024RolesMetadataByQuery"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


