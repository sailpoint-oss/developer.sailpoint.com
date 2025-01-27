---
id: beta-access-profiles
title: AccessProfiles
pagination_label: AccessProfiles
sidebar_label: AccessProfiles
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessProfiles'] 
slug: /tools/sdk/powershell/beta/methods/access-profiles
tags: ['SDK', 'Software Development Kit', 'AccessProfiles']
---


# AccessProfiles

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BetaAccessProfile**](#create-access-profile) | **POST** `/access-profiles` | Create Access Profile
[**Remove-BetaAccessProfile**](#delete-access-profile) | **DELETE** `/access-profiles/{id}` | Delete the specified Access Profile
[**Remove-BetaAccessProfilesInBulk**](#delete-access-profiles-in-bulk) | **POST** `/access-profiles/bulk-delete` | Delete Access Profile(s)
[**Get-BetaAccessProfile**](#get-access-profile) | **GET** `/access-profiles/{id}` | Get an Access Profile
[**Get-BetaAccessProfileEntitlements**](#get-access-profile-entitlements) | **GET** `/access-profiles/{id}/entitlements` | List Access Profile&#39;s Entitlements
[**Get-BetaAccessProfiles**](#list-access-profiles) | **GET** `/access-profiles` | List Access Profiles
[**Update-BetaAccessProfile**](#patch-access-profile) | **PATCH** `/access-profiles/{id}` | Patch a specified Access Profile
[**Update-BetaAccessProfilesInBulk**](#update-access-profiles-in-bulk) | **POST** `/access-profiles/bulk-update-requestable` | Update Access Profile(s) requestable field.


## create-access-profile

Use this API to create an access profile.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API. In addition, a token with only ROLE_SUBADMIN or SOURCE_SUBADMIN authority must be associated with the access profile's Source.
The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing access profiles, however, any new access profiles as well as any updates to existing descriptions will be limited to 2000 characters.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | AccessProfile | [**AccessProfile**](../models/access-profile) | True  | 

### Return type

[**AccessProfile**](../models/access-profile)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Access profile created. | AccessProfile
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
$AccessProfile = @"{
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
  "created" : "2021-03-01T22:32:58.104Z",
  "description" : "Collection of entitlements to read/write the employee database",
  "source" : {
    "name" : "ODS-AD-SOURCE",
    "id" : "2c91809773dee3610173fdb0b6061ef4",
    "type" : "SOURCE"
  },
  "enabled" : true,
  "revocationRequestConfig" : {
    "approvalSchemes" : [ {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    }, {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    } ]
  },
  "segments" : [ "f7b1b8a3-5fed-4fd4-ad29-82014e137e19", "29cb6c06-1da8-43ea-8be4-b3125f248f2a" ],
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
  "name" : "Employee-database-read-write",
  "provisioningCriteria" : {
    "children" : [ {
      "children" : [ {
        "children" : "children",
        "attribute" : "email",
        "operation" : "EQUALS",
        "value" : "carlee.cert1c9f9b6fd@mailinator.com"
      }, {
        "children" : "children",
        "attribute" : "email",
        "operation" : "EQUALS",
        "value" : "carlee.cert1c9f9b6fd@mailinator.com"
      } ],
      "attribute" : "email",
      "operation" : "EQUALS",
      "value" : "carlee.cert1c9f9b6fd@mailinator.com"
    }, {
      "children" : [ {
        "children" : "children",
        "attribute" : "email",
        "operation" : "EQUALS",
        "value" : "carlee.cert1c9f9b6fd@mailinator.com"
      }, {
        "children" : "children",
        "attribute" : "email",
        "operation" : "EQUALS",
        "value" : "carlee.cert1c9f9b6fd@mailinator.com"
      } ],
      "attribute" : "email",
      "operation" : "EQUALS",
      "value" : "carlee.cert1c9f9b6fd@mailinator.com"
    } ],
    "attribute" : "email",
    "operation" : "EQUALS",
    "value" : "carlee.cert1c9f9b6fd@mailinator.com"
  },
  "modified" : "2021-03-02T20:22:28.104Z",
  "id" : "2c91808a7190d06e01719938fcd20792",
  "requestable" : true
}"@
# Create Access Profile
try {
    $Result = ConvertFrom-JsonToAccessProfile -Json $AccessProfile
    New-BetaAccessProfile-BetaAccessProfile $Result
    
    # Below is a request that includes all optional parameters
    # New-BetaAccessProfile -BetaAccessProfile $AccessProfile  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaAccessProfile"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-access-profile

This API deletes an existing Access Profile.

The Access Profile must not be in use, for example, Access Profile can not be deleted if they belong to an Application, Life Cycle State or a Role. If it is, a 400 error is returned.

A token with API, ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to invoke this API. In addition, a SOURCE_SUBADMIN token must be able to administer the Source associated with the Access Profile.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the Access Profile to delete

### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Returned when an access profile cannot be deleted as it&#39;s being used. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808a7813090a017814121919ecca" # String | ID of the Access Profile to delete
# Delete the specified Access Profile
try {
    Remove-BetaAccessProfile-BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaAccessProfile -BetaId $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaAccessProfile"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-access-profiles-in-bulk

This endpoint initiates a bulk deletion of one or more access profiles.
When the request is successful, the endpoint returns the bulk delete's task result ID.  To follow the task, you can use [Get Task Status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status), which will return the task result's status and information. 
This endpoint can only bulk delete up to a limit of 50 access profiles per request. 
By default, if any of the indicated access profiles are in use, no deletions will be performed and the **inUse** field of the response indicates the usages that must be removed first. If the request field **bestEffortOnly** is **true**, however, usages are reported in the **inUse** response field but all other indicated access profiles will be deleted.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | AccessProfileBulkDeleteRequest | [**AccessProfileBulkDeleteRequest**](../models/access-profile-bulk-delete-request) | True  | 

### Return type

[**AccessProfileBulkDeleteResponse**](../models/access-profile-bulk-delete-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returned only if **bestEffortOnly** is **false**, and one or more Access Profiles are in use. | AccessProfileBulkDeleteResponse
202 | Returned if at least one deletion will be performed. | AccessProfileBulkDeleteResponse
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
$AccessProfileBulkDeleteRequest = @"{
  "accessProfileIds" : [ "2c9180847812e0b1017817051919ecca", "2c9180887812e0b201781e129f151816" ],
  "bestEffortOnly" : true
}"@
# Delete Access Profile(s)
try {
    $Result = ConvertFrom-JsonToAccessProfileBulkDeleteRequest -Json $AccessProfileBulkDeleteRequest
    Remove-BetaAccessProfilesInBulk-BetaAccessProfileBulkDeleteRequest $Result
    
    # Below is a request that includes all optional parameters
    # Remove-BetaAccessProfilesInBulk -BetaAccessProfileBulkDeleteRequest $AccessProfileBulkDeleteRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaAccessProfilesInBulk"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-access-profile

This API returns an Access Profile by its ID.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the Access Profile

### Return type

[**AccessProfile**](../models/access-profile)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | An AccessProfile | AccessProfile
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
$Id = "2c9180837ca6693d017ca8d097500149" # String | ID of the Access Profile
# Get an Access Profile
try {
    Get-BetaAccessProfile-BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaAccessProfile -BetaId $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaAccessProfile"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-access-profile-entitlements

Use this API to get a list of an access profile's entitlements. 
A user with SOURCE_SUBADMIN authority must have access to the source associated with the specified access profile.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the access profile containing the entitlements.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the '+' symbol in their names.  
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified**

### Return type

[**Entitlement[]**](../models/entitlement)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of entitlements. | Entitlement[]
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
$Id = "2c91808a7813090a017814121919ecca" # String | ID of the access profile containing the entitlements.
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'attribute eq "memberOf"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the '+' symbol in their names.   (optional)
$Sorters = "name,-modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** (optional)
# List Access Profile's Entitlements
try {
    Get-BetaAccessProfileEntitlements-BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaAccessProfileEntitlements -BetaId $Id -BetaLimit $Limit -BetaOffset $Offset -BetaCount $Count -BetaFilters $Filters -BetaSorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaAccessProfileEntitlements"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## list-access-profiles

Use this API to get a list of access profiles.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | ForSubadmin | **String** |   (optional) | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID, or the special value **me**, which is shorthand for the calling identity's ID.  A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an identity that is not a subadmin.
  Query | Limit | **Int32** |   (optional) (default to 50) | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the '+' symbol in their names. 
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**
  Query | ForSegmentIds | **String** |   (optional) | If present and not empty, additionally filters access profiles to those which are assigned to the segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error.
  Query | IncludeUnsegmented | **Boolean** |   (optional) (default to $true) | Indicates whether the response list should contain unsegmented access profiles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error.

### Return type

[**AccessProfile[]**](../models/access-profile)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of access profiles. | AccessProfile[]
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
$ForSubadmin = "8c190e6787aa4ed9a90bd9d5344523fb" # String | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID, or the special value **me**, which is shorthand for the calling identity's ID.  A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an identity that is not a subadmin. (optional)
$Limit = 50 # Int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'name eq "SailPoint Support"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the '+' symbol in their names.  (optional)
$Sorters = "name,-modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
$ForSegmentIds = "0b5c9f25-83c6-4762-9073-e38f7bb2ae26,2e8d8180-24bc-4d21-91c6-7affdb473b0d" # String | If present and not empty, additionally filters access profiles to those which are assigned to the segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. (optional)
$IncludeUnsegmented = $false # Boolean | Indicates whether the response list should contain unsegmented access profiles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. (optional) (default to $true)
# List Access Profiles
try {
    Get-BetaAccessProfiles
    
    # Below is a request that includes all optional parameters
    # Get-BetaAccessProfiles -BetaForSubadmin $ForSubadmin -BetaLimit $Limit -BetaOffset $Offset -BetaCount $Count -BetaFilters $Filters -BetaSorters $Sorters -BetaForSegmentIds $ForSegmentIds -BetaIncludeUnsegmented $IncludeUnsegmented  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaAccessProfiles"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## patch-access-profile

This API updates an existing Access Profile. The following fields are patchable:
**name**, **description**, **enabled**, **owner**, **requestable**, **accessRequestConfig**, **revokeRequestConfig**, **segments**, **entitlements**, **provisioningCriteria**
A token with API, ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API. In addition, a SOURCE_SUBADMIN may only use this API to patch Access Profiles which are associated with Sources they are able to administer.
>  The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing access profiles, however, any new access profiles as well as any updates to existing descriptions will be limited to 2000 characters.

> You can only add or replace **entitlements** that exist on the source that the access profile is attached to. You can use the **list entitlements** endpoint with the **filters** query parameter to get a list of available entitlements on the access profile's source.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the Access Profile to patch
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | 

### Return type

[**AccessProfile**](../models/access-profile)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the Access Profile as updated. | AccessProfile
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
$Id = "2c91808a7813090a017814121919ecca" # String | ID of the Access Profile to patch
 # JsonPatchOperation[] | 
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ 

# Patch a specified Access Profile
try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-BetaAccessProfile-BetaId $Id -BetaJsonPatchOperation $Result
    
    # Below is a request that includes all optional parameters
    # Update-BetaAccessProfile -BetaId $Id -BetaJsonPatchOperation $JsonPatchOperation  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaAccessProfile"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## update-access-profiles-in-bulk

This API initiates a bulk update of field requestable for one or more Access Profiles.

>  If any of the indicated Access Profiles is exists in Organization,then those Access Profiles will be added in **updated**
    list of the response.Requestable field of these Access Profiles marked as **true** or **false**.

>  If any of the indicated Access Profiles is not does not exists in Organization,then those Access Profiles will be added in **notFound** list of the response. Access Profiles marked as **notFound** will not be updated.
A SOURCE_SUBADMIN user may only use this API to update Access Profiles which are associated with Sources they are able to administer.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | AccessProfileBulkUpdateRequestInner | [**[]AccessProfileBulkUpdateRequestInner**](../models/access-profile-bulk-update-request-inner) | True  | 

### Return type

[**AccessProfileUpdateItem[]**](../models/access-profile-update-item)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
207 | List of updated and not updated Access Profiles. | AccessProfileUpdateItem[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
412 | Precondition Failed - Returned in response if API/Feature not enabled for an organization. | UpdateAccessProfilesInBulk412Response
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
 # AccessProfileBulkUpdateRequestInner[] | 
 $AccessProfileBulkUpdateRequestInner = @"[{id=464ae7bf-791e-49fd-b746-06a2e4a89635, requestable=false}]"@ 

# Update Access Profile(s) requestable field.
try {
    $Result = ConvertFrom-JsonToAccessProfileBulkUpdateRequestInner -Json $AccessProfileBulkUpdateRequestInner
    Update-BetaAccessProfilesInBulk-BetaAccessProfileBulkUpdateRequestInner $Result
    
    # Below is a request that includes all optional parameters
    # Update-BetaAccessProfilesInBulk -BetaAccessProfileBulkUpdateRequestInner $AccessProfileBulkUpdateRequestInner  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaAccessProfilesInBulk"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


