---
id: v2024-iai-role-mining
title: IAIRoleMining
pagination_label: IAIRoleMining
sidebar_label: IAIRoleMining
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IAIRoleMining', 'V2024IAIRoleMining'] 
slug: /tools/sdk/powershell/v2024/methods/iai-role-mining
tags: ['SDK', 'Software Development Kit', 'IAIRoleMining', 'V2024IAIRoleMining']
---


# IAIRoleMining
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2024PotentialRoleProvisionRequest**](#create-potential-role-provision-request) | **POST** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/provision` | Create request to provision a potential role into an actual role.
[**New-V2024RoleMiningSessions**](#create-role-mining-sessions) | **POST** `/role-mining-sessions` | Create a role mining session
[**Invoke-V2024DownloadRoleMiningPotentialRoleZip**](#download-role-mining-potential-role-zip) | **GET** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/export-async/{exportId}/download` | Export (download) details for a potential role in a role mining session
[**Export-V2024RoleMiningPotentialRole**](#export-role-mining-potential-role) | **GET** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/export` | Export (download) details for a potential role in a role mining session
[**Export-V2024RoleMiningPotentialRoleAsync**](#export-role-mining-potential-role-async) | **POST** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/export-async` | Asynchronously export details for a potential role in a role mining session and upload to S3
[**Export-V2024RoleMiningPotentialRoleStatus**](#export-role-mining-potential-role-status) | **GET** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/export-async/{exportId}` | Retrieve status of a potential role export job
[**Get-V2024AllPotentialRoleSummaries**](#get-all-potential-role-summaries) | **GET** `/role-mining-potential-roles` | Retrieves all potential role summaries
[**Get-V2024EntitlementDistributionPotentialRole**](#get-entitlement-distribution-potential-role) | **GET** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/entitlement-popularity-distribution` | Retrieves entitlement popularity distribution for a potential role in a role mining session
[**Get-V2024EntitlementsPotentialRole**](#get-entitlements-potential-role) | **GET** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/entitlement-popularities` | Retrieves entitlements for a potential role in a role mining session
[**Get-V2024ExcludedEntitlementsPotentialRole**](#get-excluded-entitlements-potential-role) | **GET** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/excluded-entitlements` | Retrieves excluded entitlements for a potential role in a role mining session
[**Get-V2024IdentitiesPotentialRole**](#get-identities-potential-role) | **GET** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/identities` | Retrieves identities for a potential role in a role mining session
[**Get-V2024PotentialRole**](#get-potential-role) | **GET** `/role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId}` | Retrieves a specific potential role
[**Get-V2024PotentialRoleApplications**](#get-potential-role-applications) | **GET** `/role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId}/applications` | Retrieves the applications of a potential role for a role mining session
[**Get-V2024PotentialRoleEntitlements**](#get-potential-role-entitlements) | **GET** `/role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId}/entitlements` | Retrieves the entitlements of a potential role for a role mining session
[**Get-V2024PotentialRoleSourceIdentityUsage**](#get-potential-role-source-identity-usage) | **GET** `/role-mining-potential-roles/{potentialRoleId}/sources/{sourceId}/identityUsage` | Retrieves potential role source usage
[**Get-V2024PotentialRoleSummaries**](#get-potential-role-summaries) | **GET** `/role-mining-sessions/{sessionId}/potential-role-summaries` | Retrieves all potential role summaries
[**Get-V2024RoleMiningPotentialRole**](#get-role-mining-potential-role) | **GET** `/role-mining-potential-roles/{potentialRoleId}` | Retrieves a specific potential role
[**Get-V2024RoleMiningSession**](#get-role-mining-session) | **GET** `/role-mining-sessions/{sessionId}` | Get a role mining session
[**Get-V2024RoleMiningSessionStatus**](#get-role-mining-session-status) | **GET** `/role-mining-sessions/{sessionId}/status` | Get role mining session status state
[**Get-V2024RoleMiningSessions**](#get-role-mining-sessions) | **GET** `/role-mining-sessions` | Retrieves all role mining sessions
[**Get-V2024SavedPotentialRoles**](#get-saved-potential-roles) | **GET** `/role-mining-potential-roles/saved` | Retrieves all saved potential roles
[**Update-V2024PotentialRole**](#patch-potential-role) | **PATCH** `/role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId}` | Update a potential role
[**Update-V2024PotentialRole0**](#patch-potential-role-0) | **PATCH** `/role-mining-potential-roles/{potentialRoleId}` | Update a potential role
[**Update-V2024RoleMiningSession**](#patch-role-mining-session) | **PATCH** `/role-mining-sessions/{sessionId}` | Patch a role mining session
[**Update-V2024EntitlementsPotentialRole**](#update-entitlements-potential-role) | **POST** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/edit-entitlements` | Edit entitlements for a potential role to exclude some entitlements


## create-potential-role-provision-request

This method starts a job to provision a potential role

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | MinEntitlementPopularity | **Int32** |   (optional) (default to 0) | Minimum popularity required for an entitlement to be included in the provisioned role.
  Query | IncludeCommonAccess | **Boolean** |   (optional) (default to $true) | Boolean determining whether common access entitlements will be included in the provisioned role.
 Body  | RoleMiningPotentialRoleProvisionRequest | [**RoleMiningPotentialRoleProvisionRequest**](../models/role-mining-potential-role-provision-request) |   (optional) | Required information to create a new role

### Return type

[**RoleMiningPotentialRoleSummary**](../models/role-mining-potential-role-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted. Returns a potential role summary including the status of the provison request | RoleMiningPotentialRoleSummary
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | A potential role id in a role mining session
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$MinEntitlementPopularity = 56 # Int32 | Minimum popularity required for an entitlement to be included in the provisioned role. (optional) (default to 0)
$IncludeCommonAccess = $true # Boolean | Boolean determining whether common access entitlements will be included in the provisioned role. (optional) (default to $true)
$RoleMiningPotentialRoleProvisionRequest = @"{
  "includeIdentities" : true,
  "roleName" : "Finance - Accounting",
  "ownerId" : "2b568c65bc3c4c57a43bd97e3a8e41",
  "roleDescription" : "General access for accounting department",
  "directlyAssignedEntitlements" : false
}"@
# Create request to provision a potential role into an actual role.
try {
    New-V2024PotentialRoleProvisionRequest-V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # New-V2024PotentialRoleProvisionRequest -V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental -V2024MinEntitlementPopularity $MinEntitlementPopularity -V2024IncludeCommonAccess $IncludeCommonAccess -V2024RoleMiningPotentialRoleProvisionRequest $RoleMiningPotentialRoleProvisionRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024PotentialRoleProvisionRequest"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## create-role-mining-sessions

This submits a create role mining session request to the role mining application.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | RoleMiningSessionDto | [**RoleMiningSessionDto**](../models/role-mining-session-dto) | True  | Role mining session parameters

### Return type

[**RoleMiningSessionResponse**](../models/role-mining-session-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Submitted a role mining session request | RoleMiningSessionResponse
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$RoleMiningSessionDto = @"{
  "emailRecipientId" : "2c918090761a5aac0176215c46a62d58",
  "prescribedPruneThreshold" : 10,
  "pruneThreshold" : 50,
  "saved" : true,
  "potentialRolesReadyCount" : 0,
  "scope" : {
    "identityIds" : [ "2c918090761a5aac0176215c46a62d58", "2c918090761a5aac01722015c46a62d42" ],
    "attributeFilterCriteria" : {
      "displayName" : {
        "untranslated" : "Location: Miami"
      },
      "ariaLabel" : {
        "untranslated" : "Location: Miami"
      },
      "data" : {
        "displayName" : {
          "translateKey" : "IDN.IDENTITY_ATTRIBUTES.LOCATION"
        },
        "name" : "location",
        "operator" : "EQUALS",
        "values" : [ "Miami" ]
      }
    },
    "criteria" : "source.name:DataScienceDataset"
  },
  "potentialRoleCount" : 0,
  "name" : "Saved RM Session - 07/10",
  "minNumIdentitiesInPotentialRole" : 20,
  "identityCount" : 0,
  "type" : "SPECIALIZED"
}"@
# Create a role mining session
try {
    $Result = ConvertFrom-JsonToRoleMiningSessionDto -Json $RoleMiningSessionDto
    New-V2024RoleMiningSessions-V2024XSailPointExperimental $XSailPointExperimental -V2024RoleMiningSessionDto $Result
    
    # Below is a request that includes all optional parameters
    # New-V2024RoleMiningSessions -V2024XSailPointExperimental $XSailPointExperimental -V2024RoleMiningSessionDto $RoleMiningSessionDto  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024RoleMiningSessions"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## download-role-mining-potential-role-zip

This endpoint downloads a completed export of information for a potential role in a role mining session.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
Path   | ExportId | **String** | True  | The id of a previously run export job for this potential role
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type

**System.IO.FileInfo**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a zip file containing csv files for identities and entitlements for the potential role. | System.IO.FileInfo
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "278359a6-04b7-4669-9468-924cf580964a" # String | A potential role id in a role mining session
$ExportId = "4940ffd4-836f-48a3-b2b0-6d498c3fdf40" # String | The id of a previously run export job for this potential role
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
# Export (download) details for a potential role in a role mining session
try {
    Invoke-V2024DownloadRoleMiningPotentialRoleZip-V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024ExportId $ExportId -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Invoke-V2024DownloadRoleMiningPotentialRoleZip -V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024ExportId $ExportId -V2024XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-V2024DownloadRoleMiningPotentialRoleZip"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## export-role-mining-potential-role

This endpoint downloads all the information for a potential role in a role mining session. Includes identities and entitlements in the potential role.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type

**System.IO.FileInfo**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a zip file containing csv files for identities and entitlements for the potential role. | System.IO.FileInfo
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | A potential role id in a role mining session
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
# Export (download) details for a potential role in a role mining session
try {
    Export-V2024RoleMiningPotentialRole-V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Export-V2024RoleMiningPotentialRole -V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Export-V2024RoleMiningPotentialRole"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## export-role-mining-potential-role-async

This endpoint uploads all the information for a potential role in a role mining session to S3 as a downloadable zip archive.  Includes identities and entitlements in the potential role.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | RoleMiningPotentialRoleExportRequest | [**RoleMiningPotentialRoleExportRequest**](../models/role-mining-potential-role-export-request) |   (optional) | 

### Return type

[**RoleMiningPotentialRoleExportResponse**](../models/role-mining-potential-role-export-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Job Submitted. Returns a reportId that can be used to download the zip once complete | RoleMiningPotentialRoleExportResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "278359a6-04b7-4669-9468-924cf580964a" # String | A potential role id in a role mining session
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$RoleMiningPotentialRoleExportRequest = @"{
  "minEntitlementPopularity" : 0,
  "includeCommonAccess" : true
}"@
# Asynchronously export details for a potential role in a role mining session and upload to S3
try {
    Export-V2024RoleMiningPotentialRoleAsync-V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Export-V2024RoleMiningPotentialRoleAsync -V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental -V2024RoleMiningPotentialRoleExportRequest $RoleMiningPotentialRoleExportRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Export-V2024RoleMiningPotentialRoleAsync"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## export-role-mining-potential-role-status

This endpoint retrieves information about the current status of a potential role export.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
Path   | ExportId | **String** | True  | The id of a previously run export job for this potential role
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type

[**RoleMiningPotentialRoleExportResponse**](../models/role-mining-potential-role-export-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Success. Returns the current status of this export | RoleMiningPotentialRoleExportResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "278359a6-04b7-4669-9468-924cf580964a" # String | A potential role id in a role mining session
$ExportId = "4940ffd4-836f-48a3-b2b0-6d498c3fdf40" # String | The id of a previously run export job for this potential role
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
# Retrieve status of a potential role export job
try {
    Export-V2024RoleMiningPotentialRoleStatus-V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024ExportId $ExportId -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Export-V2024RoleMiningPotentialRoleStatus -V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024ExportId $ExportId -V2024XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Export-V2024RoleMiningPotentialRoleStatus"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-all-potential-role-summaries

Returns all potential role summaries that match the query parameters

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate, identityCount, entitlementCount, freshness, quality**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co, ge, gt, le, lt*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq, ge, gt, le, lt*  **scopingMethod**: *eq*  **sessionState**: *eq*  **identityAttribute**: *co*
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type

[**RoleMiningPotentialRoleSummary[]**](../models/role-mining-potential-role-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns all potential role summaries that match the query parameters. | RoleMiningPotentialRoleSummary[]
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Sorters = "createdDate" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate, identityCount, entitlementCount, freshness, quality** (optional)
$Filters = '(createdByName co "int") and (createdById sw "2c9180907") and (type eq "COMMON") and ((name co "entt") or (saved eq true))' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co, ge, gt, le, lt*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq, ge, gt, le, lt*  **scopingMethod**: *eq*  **sessionState**: *eq*  **identityAttribute**: *co* (optional)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
# Retrieves all potential role summaries
try {
    Get-V2024AllPotentialRoleSummaries-V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024AllPotentialRoleSummaries -V2024XSailPointExperimental $XSailPointExperimental -V2024Sorters $Sorters -V2024Filters $Filters -V2024Offset $Offset -V2024Limit $Limit -V2024Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024AllPotentialRoleSummaries"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-entitlement-distribution-potential-role

This method returns entitlement popularity distribution for a potential role in a role mining session.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | IncludeCommonAccess | **Boolean** |   (optional) | Boolean determining whether common access entitlements will be included or not

### Return type

**System.Collections.Hashtable**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a map containing entitlement popularity distribution for a potential role. | System.Collections.Hashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | A potential role id in a role mining session
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$IncludeCommonAccess = $true # Boolean | Boolean determining whether common access entitlements will be included or not (optional)
# Retrieves entitlement popularity distribution for a potential role in a role mining session
try {
    Get-V2024EntitlementDistributionPotentialRole-V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024EntitlementDistributionPotentialRole -V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental -V2024IncludeCommonAccess $IncludeCommonAccess  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024EntitlementDistributionPotentialRole"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-entitlements-potential-role

This method returns entitlements for a potential role in a role mining session.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | IncludeCommonAccess | **Boolean** |   (optional) (default to $true) | Boolean determining whether common access entitlements will be included or not
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity, entitlementName, applicationName**  The default sort is **popularity** in descending order. 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw*
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type

[**RoleMiningEntitlement[]**](../models/role-mining-entitlement)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of entitlements for a potential role. | RoleMiningEntitlement[]
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
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | A potential role id in a role mining session
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$IncludeCommonAccess = $true # Boolean | Boolean determining whether common access entitlements will be included or not (optional) (default to $true)
$Sorters = "popularity" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity, entitlementName, applicationName**  The default sort is **popularity** in descending order.  (optional)
$Filters = 'applicationName sw "AD"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* (optional)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
# Retrieves entitlements for a potential role in a role mining session
try {
    Get-V2024EntitlementsPotentialRole-V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024EntitlementsPotentialRole -V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental -V2024IncludeCommonAccess $IncludeCommonAccess -V2024Sorters $Sorters -V2024Filters $Filters -V2024Offset $Offset -V2024Limit $Limit -V2024Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024EntitlementsPotentialRole"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-excluded-entitlements-potential-role

This method returns excluded entitlements for a potential role in a role mining session.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw*
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type

[**RoleMiningEntitlement[]**](../models/role-mining-entitlement)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of excluded entitlements for a potential roles. | RoleMiningEntitlement[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | A potential role id in a role mining session
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Sorters = "populariity" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity** (optional)
$Filters = 'applicationName sw "AD"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* (optional)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
# Retrieves excluded entitlements for a potential role in a role mining session
try {
    Get-V2024ExcludedEntitlementsPotentialRole-V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024ExcludedEntitlementsPotentialRole -V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental -V2024Sorters $Sorters -V2024Filters $Filters -V2024Offset $Offset -V2024Limit $Limit -V2024Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024ExcludedEntitlementsPotentialRole"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-identities-potential-role

This method returns identities for a potential role in a role mining session.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type

[**RoleMiningIdentity[]**](../models/role-mining-identity)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of identities for a potential role. | RoleMiningIdentity[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | A potential role id in a role mining session
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
$Filters = 'MyFilters' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* (optional)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
# Retrieves identities for a potential role in a role mining session
try {
    Get-V2024IdentitiesPotentialRole-V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024IdentitiesPotentialRole -V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental -V2024Sorters $Sorters -V2024Filters $Filters -V2024Offset $Offset -V2024Limit $Limit -V2024Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024IdentitiesPotentialRole"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-potential-role

This method returns a specific potential role for a role mining session.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type

[**RoleMiningPotentialRole**](../models/role-mining-potential-role)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of potential roles for a role mining session. | RoleMiningPotentialRole
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
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | A potential role id in a role mining session
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
# Retrieves a specific potential role
try {
    Get-V2024PotentialRole-V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024PotentialRole -V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024PotentialRole"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-potential-role-applications

This method returns the applications of a potential role for a role mining session.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type

[**RoleMiningPotentialRoleApplication[]**](../models/role-mining-potential-role-application)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of potential roles for a role mining session. | RoleMiningPotentialRoleApplication[]
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
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "62f28d91-7d9f-4d17-be15-666d5b41d77f" # String | A potential role id in a role mining session
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Filters = 'applicationName sw "test"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw* (optional)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
# Retrieves the applications of a potential role for a role mining session
try {
    Get-V2024PotentialRoleApplications-V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024PotentialRoleApplications -V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental -V2024Filters $Filters -V2024Offset $Offset -V2024Limit $Limit -V2024Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024PotentialRoleApplications"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-potential-role-entitlements

This method returns the entitlements of a potential role for a role mining session.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementRef.name**: *sw*
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type

[**RoleMiningPotentialRoleEntitlements[]**](../models/role-mining-potential-role-entitlements)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns the entitlements of a potential role for a role mining session. session. | RoleMiningPotentialRoleEntitlements[]
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
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "62f28d91-7d9f-4d17-be15-666d5b41d77f" # String | A potential role id in a role mining session
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Filters = 'entitlementRef.name sw "test"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementRef.name**: *sw* (optional)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
# Retrieves the entitlements of a potential role for a role mining session
try {
    Get-V2024PotentialRoleEntitlements-V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024PotentialRoleEntitlements -V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental -V2024Filters $Filters -V2024Offset $Offset -V2024Limit $Limit -V2024Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024PotentialRoleEntitlements"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-potential-role-source-identity-usage

This method returns source usageCount (as number of days in the last 90 days) for each identity in a potential role.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | PotentialRoleId | **String** | True  | A potential role id
Path   | SourceId | **String** | True  | A source id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **displayName, email, usageCount**
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type

[**RoleMiningPotentialRoleSourceUsage[]**](../models/role-mining-potential-role-source-usage)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of source usage for the identities in a potential role. | RoleMiningPotentialRoleSourceUsage[]
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
$PotentialRoleId = "e0cc5d7d-bf7f-4f81-b2af-8885b09d9923" # String | A potential role id
$SourceId = "2c9180877620c1460176267f336a106f" # String | A source id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Sorters = "-usageCount" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **displayName, email, usageCount** (optional)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
# Retrieves potential role source usage
try {
    Get-V2024PotentialRoleSourceIdentityUsage-V2024PotentialRoleId $PotentialRoleId -V2024SourceId $SourceId -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024PotentialRoleSourceIdentityUsage -V2024PotentialRoleId $PotentialRoleId -V2024SourceId $SourceId -V2024XSailPointExperimental $XSailPointExperimental -V2024Sorters $Sorters -V2024Offset $Offset -V2024Limit $Limit -V2024Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024PotentialRoleSourceIdentityUsage"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-potential-role-summaries

This method returns the potential role summaries for a role mining session.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq*
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type

[**RoleMiningPotentialRoleSummary[]**](../models/role-mining-potential-role-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of potential role summaries for a role mining session. | RoleMiningPotentialRoleSummary[]
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
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Sorters = "createdDate" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate** (optional)
$Filters = '(createdByName co "int")and (createdById sw "2c9180907")and (type eq "COMMON")and ((name co "entt")or (saved eq true))' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq* (optional)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
# Retrieves all potential role summaries
try {
    Get-V2024PotentialRoleSummaries-V2024SessionId $SessionId -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024PotentialRoleSummaries -V2024SessionId $SessionId -V2024XSailPointExperimental $XSailPointExperimental -V2024Sorters $Sorters -V2024Filters $Filters -V2024Offset $Offset -V2024Limit $Limit -V2024Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024PotentialRoleSummaries"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-role-mining-potential-role

This method returns a specific potential role.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | PotentialRoleId | **String** | True  | A potential role id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type

[**RoleMiningPotentialRole**](../models/role-mining-potential-role)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of potential roles for a role mining session. | RoleMiningPotentialRole
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
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | A potential role id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
# Retrieves a specific potential role
try {
    Get-V2024RoleMiningPotentialRole-V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024RoleMiningPotentialRole -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024RoleMiningPotentialRole"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-role-mining-session

The method retrieves a role mining session.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id to be retrieved.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type

[**RoleMiningSessionResponse**](../models/role-mining-session-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns a role mining session | RoleMiningSessionResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id to be retrieved.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
# Get a role mining session
try {
    Get-V2024RoleMiningSession-V2024SessionId $SessionId -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024RoleMiningSession -V2024SessionId $SessionId -V2024XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024RoleMiningSession"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-role-mining-session-status

This method returns a role mining session status for a customer.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type

[**RoleMiningSessionStatus**](../models/role-mining-session-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns session status | RoleMiningSessionStatus
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
# Get role mining session status state
try {
    Get-V2024RoleMiningSessionStatus-V2024SessionId $SessionId -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024RoleMiningSessionStatus -V2024SessionId $SessionId -V2024XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024RoleMiningSessionStatus"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-role-mining-sessions

Returns all role mining sessions that match the query parameters

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **saved**: *eq*  **name**: *eq, sw*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdBy, createdDate**
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type

[**RoleMiningSessionDto[]**](../models/role-mining-session-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns all role mining sessions that match the query parameters. | RoleMiningSessionDto[]
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Filters = 'saved eq "true" and name sw "RM Session"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **saved**: *eq*  **name**: *eq, sw* (optional)
$Sorters = "createdBy,createdDate" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdBy, createdDate** (optional)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
# Retrieves all role mining sessions
try {
    Get-V2024RoleMiningSessions-V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024RoleMiningSessions -V2024XSailPointExperimental $XSailPointExperimental -V2024Filters $Filters -V2024Sorters $Sorters -V2024Offset $Offset -V2024Limit $Limit -V2024Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024RoleMiningSessions"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-saved-potential-roles

This method returns all saved potential roles (draft roles).

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **modified**
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type

[**RoleMiningSessionDraftRoleDto[]**](../models/role-mining-session-draft-role-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of draft roles for a role mining session. | RoleMiningSessionDraftRoleDto[]
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Sorters = "modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **modified** (optional)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
# Retrieves all saved potential roles
try {
    Get-V2024SavedPotentialRoles-V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024SavedPotentialRoles -V2024XSailPointExperimental $XSailPointExperimental -V2024Sorters $Sorters -V2024Offset $Offset -V2024Limit $Limit -V2024Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024SavedPotentialRoles"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## patch-potential-role

The method updates an existing potential role using.

The following fields can be modified:

* `description`

* `name`

* `saved`


>**NOTE: All other fields cannot be modified.**


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | The potential role summary id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | PatchPotentialRoleRequestInner | [**[]PatchPotentialRoleRequestInner**](../models/patch-potential-role-request-inner) | True  | 

### Return type

[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns the potential role summary based on the potentialRoleId provided. | SystemCollectionsHashtable
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
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The potential role summary id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
 # PatchPotentialRoleRequestInner[] | 
 $PatchPotentialRoleRequestInner = @"[{op=remove, path=/description}, {op=replace, path=/description, value=Acct I - Potential Role}, {op=remove, path=/saved}, {op=replace, path=/saved, value=false}, {op=remove, path=/name}, {op=replace, path=/name, value=Potential Role Accounting}]"@ 

# Update a potential role
try {
    $Result = ConvertFrom-JsonToPatchPotentialRoleRequestInner -Json $PatchPotentialRoleRequestInner
    Update-V2024PotentialRole-V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental -V2024PatchPotentialRoleRequestInner $Result
    
    # Below is a request that includes all optional parameters
    # Update-V2024PotentialRole -V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental -V2024PatchPotentialRoleRequestInner $PatchPotentialRoleRequestInner  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024PotentialRole"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## patch-potential-role-0

The method updates an existing potential role using.

The following fields can be modified:

* `description`

* `name`

* `saved`


>**NOTE: All other fields cannot be modified.**


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | The potential role summary id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | PatchPotentialRoleRequestInner | [**[]PatchPotentialRoleRequestInner**](../models/patch-potential-role-request-inner) | True  | 

### Return type

[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns the potential role summary based on the potentialRoleId provided. | SystemCollectionsHashtable
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
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The potential role summary id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
 # PatchPotentialRoleRequestInner[] | 
 $PatchPotentialRoleRequestInner = @"[{op=remove, path=/description}, {op=replace, path=/description, value=Acct I - Potential Role}, {op=remove, path=/saved}, {op=replace, path=/saved, value=false}, {op=remove, path=/name}, {op=replace, path=/name, value=Potential Role Accounting}]"@ 

# Update a potential role
try {
    $Result = ConvertFrom-JsonToPatchPotentialRoleRequestInner -Json $PatchPotentialRoleRequestInner
    Update-V2024PotentialRole0-V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental -V2024PatchPotentialRoleRequestInner $Result
    
    # Below is a request that includes all optional parameters
    # Update-V2024PotentialRole0 -V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental -V2024PatchPotentialRoleRequestInner $PatchPotentialRoleRequestInner  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024PotentialRole0"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## patch-role-mining-session

The  method updates an existing role mining session using PATCH. Supports op in {"replace"} and changes to pruneThreshold and/or minNumIdentitiesInPotentialRole. The potential roles in this role mining session is then re-calculated.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id to be patched
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | Replace pruneThreshold and/or minNumIdentitiesInPotentialRole in role mining session. Update saved status or saved name for a role mining session.

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

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id to be patched
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
 # JsonPatchOperation[] | Replace pruneThreshold and/or minNumIdentitiesInPotentialRole in role mining session. Update saved status or saved name for a role mining session.
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ 

# Patch a role mining session
try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-V2024RoleMiningSession-V2024SessionId $SessionId -V2024XSailPointExperimental $XSailPointExperimental -V2024JsonPatchOperation $Result
    
    # Below is a request that includes all optional parameters
    # Update-V2024RoleMiningSession -V2024SessionId $SessionId -V2024XSailPointExperimental $XSailPointExperimental -V2024JsonPatchOperation $JsonPatchOperation  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024RoleMiningSession"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## update-entitlements-potential-role

This endpoint adds or removes entitlements from an exclusion list for a potential role.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | RoleMiningPotentialRoleEditEntitlements | [**RoleMiningPotentialRoleEditEntitlements**](../models/role-mining-potential-role-edit-entitlements) | True  | Role mining session parameters

### Return type

[**RoleMiningPotentialRole**](../models/role-mining-potential-role)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Adds or removes entitlements from a potential role&#39;s entitlement exclusion list. | RoleMiningPotentialRole
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | A potential role id in a role mining session
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$RoleMiningPotentialRoleEditEntitlements = @"{
  "ids" : [ "entId1", "entId2" ],
  "exclude" : true
}"@
# Edit entitlements for a potential role to exclude some entitlements
try {
    $Result = ConvertFrom-JsonToRoleMiningPotentialRoleEditEntitlements -Json $RoleMiningPotentialRoleEditEntitlements
    Update-V2024EntitlementsPotentialRole-V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental -V2024RoleMiningPotentialRoleEditEntitlements $Result
    
    # Below is a request that includes all optional parameters
    # Update-V2024EntitlementsPotentialRole -V2024SessionId $SessionId -V2024PotentialRoleId $PotentialRoleId -V2024XSailPointExperimental $XSailPointExperimental -V2024RoleMiningPotentialRoleEditEntitlements $RoleMiningPotentialRoleEditEntitlements  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024EntitlementsPotentialRole"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


