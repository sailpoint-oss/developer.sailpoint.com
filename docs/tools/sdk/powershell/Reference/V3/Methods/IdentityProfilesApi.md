---
id: identity-profiles
title: IdentityProfiles
pagination_label: IdentityProfiles
sidebar_label: IdentityProfiles
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityProfiles', 'IdentityProfiles'] 
slug: /tools/sdk/powershell/v3/methods/identity-profiles
tags: ['SDK', 'Software Development Kit', 'IdentityProfiles', 'IdentityProfiles']
---

# IdentityProfiles
  Use this API to implement identity profile functionality. 
With this functionality in place, administrators can view identity profiles and their configurations. 

Identity profiles represent the configurations that can be applied to identities as a way of granting them a set of security and access, as well as defining the mappings between their identity attributes and their source attributes.  

In Identity Security Cloud, administrators can use the Identities drop-down menu and select Identity Profiles to view the list of identity profiles. 
This list shows some details about each identity profile, along with its status. 
They can select an identity profile to view its settings, its mappings between identity attributes and correlating source account attributes, and its provisioning settings. 

Refer to [Creating Identity Profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) for more information about identity profiles.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-IdentityProfile**](#create-identity-profile) | **POST** `/identity-profiles` | Create identity profile
[**Remove-IdentityProfile**](#delete-identity-profile) | **DELETE** `/identity-profiles/{identity-profile-id}` | Delete identity profile
[**Remove-IdentityProfiles**](#delete-identity-profiles) | **POST** `/identity-profiles/bulk-delete` | Delete identity profiles
[**Export-IdentityProfiles**](#export-identity-profiles) | **GET** `/identity-profiles/export` | Export identity profiles
[**Get-DefaultIdentityAttributeConfig**](#get-default-identity-attribute-config) | **GET** `/identity-profiles/{identity-profile-id}/default-identity-attribute-config` | Get default identity attribute config
[**Get-IdentityProfile**](#get-identity-profile) | **GET** `/identity-profiles/{identity-profile-id}` | Get identity profile
[**Import-IdentityProfiles**](#import-identity-profiles) | **POST** `/identity-profiles/import` | Import identity profiles
[**Get-IdentityProfiles**](#list-identity-profiles) | **GET** `/identity-profiles` | List identity profiles
[**Show-IdentityPreview**](#show-identity-preview) | **POST** `/identity-profiles/identity-preview` | Generate identity profile preview
[**Sync-IdentityProfile**](#sync-identity-profile) | **POST** `/identity-profiles/{identity-profile-id}/process-identities` | Process identities under profile
[**Update-IdentityProfile**](#update-identity-profile) | **PATCH** `/identity-profiles/{identity-profile-id}` | Update identity profile


## create-identity-profile
Creates an identity profile.    

[API Spec](https://developer.sailpoint.com/docs/api/v3/create-identity-profile)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | IdentityProfile | [**IdentityProfile**](../models/identity-profile) | True  | 

### Return type
[**IdentityProfile**](../models/identity-profile)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created identity profile. | IdentityProfile
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
$IdentityProfile = @"{
  "owner" : {
    "name" : "William Wilson",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "IDENTITY"
  },
  "identityExceptionReportReference" : {
    "reportName" : "My annual report",
    "taskResultId" : "2b838de9-db9b-abcf-e646-d4f274ad4238"
  },
  "authoritativeSource" : {
    "name" : "HR Active Directory",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "SOURCE"
  },
  "hasTimeBasedAttr" : true,
  "created" : "2015-05-28T14:07:17Z",
  "description" : "My custom flat file profile",
  "identityRefreshRequired" : true,
  "identityCount" : 8,
  "priority" : 10,
  "identityAttributeConfig" : {
    "attributeTransforms" : [ {
      "transformDefinition" : {
        "attributes" : {
          "attributeName" : "e-mail",
          "sourceName" : "MySource",
          "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
        },
        "type" : "accountAttribute"
      },
      "identityAttributeName" : "email"
    }, {
      "transformDefinition" : {
        "attributes" : {
          "attributeName" : "e-mail",
          "sourceName" : "MySource",
          "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
        },
        "type" : "accountAttribute"
      },
      "identityAttributeName" : "email"
    } ],
    "enabled" : true
  },
  "name" : "aName",
  "modified" : "2015-05-28T14:07:17Z",
  "id" : "id12345"
}"@

# Create identity profile

try {
    $Result = ConvertFrom-JsonToIdentityProfile -Json $IdentityProfile
    New-IdentityProfile -IdentityProfile $Result 
    
    # Below is a request that includes all optional parameters
    # New-IdentityProfile -IdentityProfile $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-IdentityProfile"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-identity-profile
Delete an identity profile by ID.
On success, this endpoint will return a reference to the bulk delete task result.

[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-identity-profile)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | Identity profile ID.

### Return type
[**TaskResultSimplified**](../models/task-result-simplified)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returns a TaskResult object referencing the bulk delete job created. | TaskResultSimplified
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
$IdentityProfileId = "ef38f94347e94562b5bb8424a56397d8" # String | Identity profile ID.

# Delete identity profile

try {
    Remove-IdentityProfile -IdentityProfileId $IdentityProfileId 
    
    # Below is a request that includes all optional parameters
    # Remove-IdentityProfile -IdentityProfileId $IdentityProfileId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-IdentityProfile"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-identity-profiles
This deletes multiple Identity Profiles via a list of supplied IDs.

On success, this endpoint will return a reference to the bulk delete task result.

The following rights are required to access this endpoint: idn:identity-profile:delete

[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-identity-profiles)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | RequestBody | **[]String** | True  | Identity Profile bulk delete request body.

### Return type
[**TaskResultSimplified**](../models/task-result-simplified)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returns a TaskResult object referencing the bulk delete job created. | TaskResultSimplified
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
$RequestBody = "MyRequestBody" # String[] | Identity Profile bulk delete request body.
 $RequestBody = @""@ # String[] | Identity Profile bulk delete request body.
 

# Delete identity profiles

try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Remove-IdentityProfiles -RequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Remove-IdentityProfiles -RequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-IdentityProfiles"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## export-identity-profiles
This exports existing identity profiles in the format specified by the sp-config service.

[API Spec](https://developer.sailpoint.com/docs/api/v3/export-identity-profiles)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, ne*  **priority**: *eq, ne*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority**

### Return type
[**IdentityProfileExportedObject[]**](../models/identity-profile-exported-object)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of export objects with identity profiles. | IdentityProfileExportedObject[]
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
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'id eq "ef38f94347e94562b5bb8424a56397d8"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, ne*  **priority**: *eq, ne* (optional)
$Sorters = "id,name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority** (optional)

# Export identity profiles

try {
    Export-IdentityProfiles 
    
    # Below is a request that includes all optional parameters
    # Export-IdentityProfiles -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Export-IdentityProfiles"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-default-identity-attribute-config
This returns the default identity attribute config.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-default-identity-attribute-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | The Identity Profile ID.

### Return type
[**IdentityAttributeConfig**](../models/identity-attribute-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | An Identity Attribute Config object. | IdentityAttributeConfig
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
$IdentityProfileId = "2b838de9-db9b-abcf-e646-d4f274ad4238" # String | The Identity Profile ID.

# Get default identity attribute config

try {
    Get-DefaultIdentityAttributeConfig -IdentityProfileId $IdentityProfileId 
    
    # Below is a request that includes all optional parameters
    # Get-DefaultIdentityAttributeConfig -IdentityProfileId $IdentityProfileId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-DefaultIdentityAttributeConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-identity-profile
Get a single identity profile by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-identity-profile)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | Identity profile ID.

### Return type
[**IdentityProfile**](../models/identity-profile)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Identity profile object. | IdentityProfile
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
$IdentityProfileId = "2b838de9-db9b-abcf-e646-d4f274ad4238" # String | Identity profile ID.

# Get identity profile

try {
    Get-IdentityProfile -IdentityProfileId $IdentityProfileId 
    
    # Below is a request that includes all optional parameters
    # Get-IdentityProfile -IdentityProfileId $IdentityProfileId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-IdentityProfile"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## import-identity-profiles
This imports previously exported identity profiles.

[API Spec](https://developer.sailpoint.com/docs/api/v3/import-identity-profiles)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | IdentityProfileExportedObject | [**[]IdentityProfileExportedObject**](../models/identity-profile-exported-object) | True  | Previously exported Identity Profiles.

### Return type
[**ObjectImportResult**](../models/object-import-result)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The result of importing Identity Profiles. | ObjectImportResult
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





 $IdentityProfileExportedObject = @"{
  "self" : {
    "name" : "HR Active Directory",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "SOURCE"
  },
  "version" : 1,
  "object" : {
    "owner" : {
      "name" : "William Wilson",
      "id" : "2c9180835d191a86015d28455b4b232a",
      "type" : "IDENTITY"
    },
    "identityExceptionReportReference" : {
      "reportName" : "My annual report",
      "taskResultId" : "2b838de9-db9b-abcf-e646-d4f274ad4238"
    },
    "authoritativeSource" : {
      "name" : "HR Active Directory",
      "id" : "2c9180835d191a86015d28455b4b232a",
      "type" : "SOURCE"
    },
    "hasTimeBasedAttr" : true,
    "created" : "2015-05-28T14:07:17Z",
    "description" : "My custom flat file profile",
    "identityRefreshRequired" : true,
    "identityCount" : 8,
    "priority" : 10,
    "identityAttributeConfig" : {
      "attributeTransforms" : [ {
        "transformDefinition" : {
          "attributes" : {
            "attributeName" : "e-mail",
            "sourceName" : "MySource",
            "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
          },
          "type" : "accountAttribute"
        },
        "identityAttributeName" : "email"
      }, {
        "transformDefinition" : {
          "attributes" : {
            "attributeName" : "e-mail",
            "sourceName" : "MySource",
            "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
          },
          "type" : "accountAttribute"
        },
        "identityAttributeName" : "email"
      } ],
      "enabled" : true
    },
    "name" : "aName",
    "modified" : "2015-05-28T14:07:17Z",
    "id" : "id12345"
  }
}"@ # IdentityProfileExportedObject[] | Previously exported Identity Profiles.
 

# Import identity profiles

try {
    $Result = ConvertFrom-JsonToIdentityProfileExportedObject -Json $IdentityProfileExportedObject
    Import-IdentityProfiles -IdentityProfileExportedObject $Result 
    
    # Below is a request that includes all optional parameters
    # Import-IdentityProfiles -IdentityProfileExportedObject $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Import-IdentityProfiles"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-identity-profiles
Get a list of identity profiles, based on the specified query parameters.

[API Spec](https://developer.sailpoint.com/docs/api/v3/list-identity-profiles)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, ge, gt, in, le, sw*  **name**: *eq, ne, ge, gt, in, le, sw*  **priority**: *eq, ne*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority, created, modified, owner.id, owner.name**

### Return type
[**IdentityProfile[]**](../models/identity-profile)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of identity profiles. | IdentityProfile[]
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
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'id eq "ef38f94347e94562b5bb8424a56397d8"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, ge, gt, in, le, sw*  **name**: *eq, ne, ge, gt, in, le, sw*  **priority**: *eq, ne* (optional)
$Sorters = "id,name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority, created, modified, owner.id, owner.name** (optional)

# List identity profiles

try {
    Get-IdentityProfiles 
    
    # Below is a request that includes all optional parameters
    # Get-IdentityProfiles -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-IdentityProfiles"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## show-identity-preview
Use this API to generate a non-persisted preview of the identity object after applying `IdentityAttributeConfig` sent in request body.
This API only allows `accountAttribute`, `reference` and `rule` transform types in the `IdentityAttributeConfig` sent in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/v3/show-identity-preview)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | IdentityPreviewRequest | [**IdentityPreviewRequest**](../models/identity-preview-request) | True  | Identity Preview request body.

### Return type
[**IdentityPreviewResponse**](../models/identity-preview-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A preview of the identity attributes after applying identity attributes config sent in request body. | IdentityPreviewResponse
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
$IdentityPreviewRequest = @"{
  "identityId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "identityAttributeConfig" : {
    "attributeTransforms" : [ {
      "transformDefinition" : {
        "attributes" : {
          "attributeName" : "e-mail",
          "sourceName" : "MySource",
          "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
        },
        "type" : "accountAttribute"
      },
      "identityAttributeName" : "email"
    }, {
      "transformDefinition" : {
        "attributes" : {
          "attributeName" : "e-mail",
          "sourceName" : "MySource",
          "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
        },
        "type" : "accountAttribute"
      },
      "identityAttributeName" : "email"
    } ],
    "enabled" : true
  }
}"@

# Generate identity profile preview

try {
    $Result = ConvertFrom-JsonToIdentityPreviewRequest -Json $IdentityPreviewRequest
    Show-IdentityPreview -IdentityPreviewRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Show-IdentityPreview -IdentityPreviewRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Show-IdentityPreview"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## sync-identity-profile
Process identities under the profile
This operation should not be used to schedule your own identity processing or to perform system wide identity refreshes. The system will use a combination of [event-based processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#event-based-processing) and [scheduled processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#scheduled-processing) that runs every day at 8:00 AM and 8:00 PM in the tenant's timezone to keep your identities synchronized. 
This should only be run on identity profiles that have the `identityRefreshRequired` attribute set to `true`. If `identityRefreshRequired` is false, then there is no benefit to running this operation. Typically, this operation is performed when a change is made to the identity profile or its related lifecycle states that requires a refresh.
This operation will perform the following activities on all identities under the identity profile.
1. Updates identity attribute according to the identity profile mappings. 2. Determines the identity's correct manager through manager correlation. 3. Updates the identity's access according to their assigned lifecycle state. 4. Updates the identity's access based on role assignment criteria.

[API Spec](https://developer.sailpoint.com/docs/api/v3/sync-identity-profile)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | The Identity Profile ID to be processed

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
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
$IdentityProfileId = "ef38f94347e94562b5bb8424a56397d8" # String | The Identity Profile ID to be processed

# Process identities under profile

try {
    Sync-IdentityProfile -IdentityProfileId $IdentityProfileId 
    
    # Below is a request that includes all optional parameters
    # Sync-IdentityProfile -IdentityProfileId $IdentityProfileId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Sync-IdentityProfile"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-identity-profile
Update a specified identity profile with this PATCH request.
  
You cannot update these fields:
* id
* created
* modified
* identityCount
* identityRefreshRequired
* Authoritative Source and Identity Attribute Configuration cannot be modified at the same time.

[API Spec](https://developer.sailpoint.com/docs/api/v3/update-identity-profile)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | Identity profile ID.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | List of identity profile update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**IdentityProfile**](../models/identity-profile)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated identity profile. | IdentityProfile
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$IdentityProfileId = "ef38f94347e94562b5bb8424a56397d8" # String | Identity profile ID.
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | List of identity profile update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 

# Update identity profile

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-IdentityProfile -IdentityProfileId $IdentityProfileId -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-IdentityProfile -IdentityProfileId $IdentityProfileId -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-IdentityProfile"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
