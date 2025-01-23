---
id: identity-profiles
title: IdentityProfiles
pagination_label: IdentityProfiles
sidebar_label: IdentityProfiles
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityProfiles'] 
slug: /tools/sdk/powershell/beta/methods/identity-profiles
tags: ['SDK', 'Software Development Kit', 'IdentityProfiles']
---


# IdentityProfiles

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BetaIdentityProfile**](#create-identity-profile) | **POST** `/identity-profiles` | Create an Identity Profile
[**Remove-BetaIdentityProfile**](#delete-identity-profile) | **DELETE** `/identity-profiles/{identity-profile-id}` | Delete an Identity Profile
[**Remove-BetaIdentityProfiles**](#delete-identity-profiles) | **POST** `/identity-profiles/bulk-delete` | Delete Identity Profiles
[**Export-BetaIdentityProfiles**](#export-identity-profiles) | **GET** `/identity-profiles/export` | Export Identity Profiles
[**Get-BetaDefaultIdentityAttributeConfig**](#get-default-identity-attribute-config) | **GET** `/identity-profiles/{identity-profile-id}/default-identity-attribute-config` | Default identity attribute config
[**Get-BetaIdentityProfile**](#get-identity-profile) | **GET** `/identity-profiles/{identity-profile-id}` | Gets a single Identity Profile
[**Import-BetaIdentityProfiles**](#import-identity-profiles) | **POST** `/identity-profiles/import` | Import Identity Profiles
[**Get-BetaIdentityProfiles**](#list-identity-profiles) | **GET** `/identity-profiles` | Identity Profiles List
[**Show-BetaGenerateIdentityPreview**](#show-generate-identity-preview) | **POST** `/identity-profiles/identity-preview` | Generate Identity Profile Preview
[**Sync-BetaIdentityProfile**](#sync-identity-profile) | **POST** `/identity-profiles/{identity-profile-id}/process-identities` | Process identities under profile
[**Update-BetaIdentityProfile**](#update-identity-profile) | **PATCH** `/identity-profiles/{identity-profile-id}` | Update the Identity Profile


## create-identity-profile

This creates an Identity Profile.

A token with ORG_ADMIN authority is required to call this API to create an Identity Profile.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | IdentityProfile | [**IdentityProfile**](../models/identity-profile) | True  | 

### Return type

[**IdentityProfile**](../models/identity-profile)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | The created Identity Profile | IdentityProfile
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
$IdentityProfile = @"{
  "owner" : {
    "name" : "William Wilson",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "IDENTITY"
  },
  "identityExceptionReportReference" : {
    "reportName" : "My annual report",
    "taskResultId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "authoritativeSource" : {
    "name" : "HR Active Directory",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "SOURCE"
  },
  "hasTimeBasedAttr" : true,
  "created" : "2023-01-03T21:16:22.432Z",
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
  "modified" : "2023-01-03T21:16:22.432Z",
  "id" : "id12345"
}"@
# Create an Identity Profile
try {
    $Result = ConvertFrom-JsonToIdentityProfile -Json $IdentityProfile
    New-BetaIdentityProfile-BetaIdentityProfile $Result
    
    # Below is a request that includes all optional parameters
    # New-BetaIdentityProfile -BetaIdentityProfile $IdentityProfile  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaIdentityProfile"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-identity-profile

This deletes an Identity Profile based on ID.

On success, this endpoint will return a reference to the bulk delete task result.

A token with ORG_ADMIN authority is required to call this API.

The following rights are required to access this endpoint: idn:identity-profile:delete

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | The Identity Profile ID.

### Return type

[**TaskResultSimplified**](../models/task-result-simplified)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returns a TaskResult object referencing the bulk delete job created. | TaskResultSimplified
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
$IdentityProfileId = "ef38f94347e94562b5bb8424a56397d8" # String | The Identity Profile ID.
# Delete an Identity Profile
try {
    Remove-BetaIdentityProfile-BetaIdentityProfileId $IdentityProfileId 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaIdentityProfile -BetaIdentityProfileId $IdentityProfileId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaIdentityProfile"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-identity-profiles

This deletes multiple Identity Profiles via a list of supplied IDs.

On success, this endpoint will return a reference to the bulk delete task result.

A token with ORG_ADMIN authority is required to call this API.

The following rights are required to access this endpoint: idn:identity-profile:delete

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$RequestBody = "MyRequestBody" # String[] | Identity Profile bulk delete request body.
 $RequestBody = @""@ 

# Delete Identity Profiles
try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Remove-BetaIdentityProfiles-BetaRequestBody $Result
    
    # Below is a request that includes all optional parameters
    # Remove-BetaIdentityProfiles -BetaRequestBody $RequestBody  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaIdentityProfiles"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## export-identity-profiles

This exports existing identity profiles in the format specified by the sp-config service.

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
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'id eq 8c190e6787aa4ed9a90bd9d5344523fb' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, ne*  **priority**: *eq, ne* (optional)
$Sorters = "name,-priority" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority** (optional)
# Export Identity Profiles
try {
    Export-BetaIdentityProfiles
    
    # Below is a request that includes all optional parameters
    # Export-BetaIdentityProfiles -BetaLimit $Limit -BetaOffset $Offset -BetaCount $Count -BetaFilters $Filters -BetaSorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Export-BetaIdentityProfiles"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-default-identity-attribute-config

This returns the default identity attribute config
A token with ORG_ADMIN authority is required to call this API to get the default identity attribute config.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | The Identity Profile ID

### Return type

[**IdentityAttributeConfig**](../models/identity-attribute-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | An Identity Attribute Config object | IdentityAttributeConfig
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
$IdentityProfileId = "ef38f94347e94562b5bb8424a56397d8" # String | The Identity Profile ID
# Default identity attribute config
try {
    Get-BetaDefaultIdentityAttributeConfig-BetaIdentityProfileId $IdentityProfileId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaDefaultIdentityAttributeConfig -BetaIdentityProfileId $IdentityProfileId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaDefaultIdentityAttributeConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-identity-profile

This returns a single Identity Profile based on ID.

A token with ORG_ADMIN or API authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | The Identity Profile ID

### Return type

[**IdentityProfile**](../models/identity-profile)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | An Identity Profile object | IdentityProfile
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
$IdentityProfileId = "ef38f94347e94562b5bb8424a56397d8" # String | The Identity Profile ID
# Gets a single Identity Profile
try {
    Get-BetaIdentityProfile-BetaIdentityProfileId $IdentityProfileId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaIdentityProfile -BetaIdentityProfileId $IdentityProfileId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaIdentityProfile"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## import-identity-profiles

This imports previously exported identity profiles.

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
 # IdentityProfileExportedObject[] | Previously exported Identity Profiles.
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
}"@ 

# Import Identity Profiles
try {
    $Result = ConvertFrom-JsonToIdentityProfileExportedObject -Json $IdentityProfileExportedObject
    Import-BetaIdentityProfiles-BetaIdentityProfileExportedObject $Result
    
    # Below is a request that includes all optional parameters
    # Import-BetaIdentityProfiles -BetaIdentityProfileExportedObject $IdentityProfileExportedObject  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Import-BetaIdentityProfiles"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## list-identity-profiles

This returns a list of Identity Profiles based on the specified query parameters.
A token with ORG_ADMIN or API authority is required to call this API to get a list of Identity Profiles.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, ge, gt, in, le, lt, isnull, sw*  **name**: *eq, ne, in, le, lt, isnull, sw*  **priority**: *eq, ne*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority, created, modified, owner.id, owner.name**

### Return type

[**IdentityProfile[]**](../models/identity-profile)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of identityProfiles. | IdentityProfile[]
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
$Filters = 'id eq 8c190e6787aa4ed9a90bd9d5344523fb' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, ge, gt, in, le, lt, isnull, sw*  **name**: *eq, ne, in, le, lt, isnull, sw*  **priority**: *eq, ne* (optional)
$Sorters = "name,-priority" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority, created, modified, owner.id, owner.name** (optional)
# Identity Profiles List
try {
    Get-BetaIdentityProfiles
    
    # Below is a request that includes all optional parameters
    # Get-BetaIdentityProfiles -BetaLimit $Limit -BetaOffset $Offset -BetaCount $Count -BetaFilters $Filters -BetaSorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaIdentityProfiles"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## show-generate-identity-preview

Use this API to generate a non-persisted preview of the identity object after applying `IdentityAttributeConfig` sent in request body.
This API only allows `accountAttribute`, `reference` and `rule` transform types in the `IdentityAttributeConfig` sent in the request body.
A token with ORG_ADMIN authority is required to call this API to generate an identity preview.

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
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
# Generate Identity Profile Preview
try {
    $Result = ConvertFrom-JsonToIdentityPreviewRequest -Json $IdentityPreviewRequest
    Show-BetaGenerateIdentityPreview-BetaIdentityPreviewRequest $Result
    
    # Below is a request that includes all optional parameters
    # Show-BetaGenerateIdentityPreview -BetaIdentityPreviewRequest $IdentityPreviewRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Show-BetaGenerateIdentityPreview"
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
A token with ORG_ADMIN authority is required to call this API.

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
$IdentityProfileId = "ef38f94347e94562b5bb8424a56397d8" # String | The Identity Profile ID to be processed
# Process identities under profile
try {
    Sync-BetaIdentityProfile-BetaIdentityProfileId $IdentityProfileId 
    
    # Below is a request that includes all optional parameters
    # Sync-BetaIdentityProfile -BetaIdentityProfileId $IdentityProfileId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Sync-BetaIdentityProfile"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## update-identity-profile

This updates the specified Identity Profile.

A token with ORG_ADMIN authority is required to call this API to update the Identity Profile.

Some fields of the Schema cannot be updated. These fields are listed below:
* id
* name
* created
* modified
* identityCount
* identityRefreshRequired
* Authoritative Source and Identity Attribute Configuration cannot be modified at once.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | The Identity Profile ID
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of Identity Profile update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type

[**IdentityProfile**](../models/identity-profile)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The updated Identity Profile. | IdentityProfile
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
$IdentityProfileId = "ef38f94347e94562b5bb8424a56397d8" # String | The Identity Profile ID
 # JsonPatchOperation[] | A list of Identity Profile update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ 

# Update the Identity Profile
try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-BetaIdentityProfile-BetaIdentityProfileId $IdentityProfileId -BetaJsonPatchOperation $Result
    
    # Below is a request that includes all optional parameters
    # Update-BetaIdentityProfile -BetaIdentityProfileId $IdentityProfileId -BetaJsonPatchOperation $JsonPatchOperation  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaIdentityProfile"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


