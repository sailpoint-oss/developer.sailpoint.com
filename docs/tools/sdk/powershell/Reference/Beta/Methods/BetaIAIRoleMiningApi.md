---
id: beta-iai-role-mining
title: IAIRoleMining
pagination_label: IAIRoleMining
sidebar_label: IAIRoleMining
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IAIRoleMining', 'BetaIAIRoleMining'] 
slug: /tools/sdk/powershell/beta/methods/iai-role-mining
tags: ['SDK', 'Software Development Kit', 'IAIRoleMining', 'BetaIAIRoleMining']
---

# IAIRoleMining
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BetaPotentialRoleProvisionRequest**](#create-potential-role-provision-request) | **POST** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/provision` | Create request to provision a potential role into an actual role.
[**New-BetaRoleMiningSessions**](#create-role-mining-sessions) | **POST** `/role-mining-sessions` | Create a role mining session
[**Invoke-BetaDownloadRoleMiningPotentialRoleZip**](#download-role-mining-potential-role-zip) | **GET** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/export-async/{exportId}/download` | Export (download) details for a potential role in a role mining session
[**Export-BetaRoleMiningPotentialRole**](#export-role-mining-potential-role) | **GET** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/export` | Export (download) details for a potential role in a role mining session
[**Export-BetaRoleMiningPotentialRoleAsync**](#export-role-mining-potential-role-async) | **POST** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/export-async` | Asynchronously export details for a potential role in a role mining session and upload to s3
[**Export-BetaRoleMiningPotentialRoleStatus**](#export-role-mining-potential-role-status) | **GET** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/export-async/{exportId}` | Retrieve status of a potential role export job
[**Get-BetaAllPotentialRoleSummaries**](#get-all-potential-role-summaries) | **GET** `/role-mining-potential-roles` | Retrieves all potential role summaries
[**Get-BetaEntitlementDistributionPotentialRole**](#get-entitlement-distribution-potential-role) | **GET** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/entitlement-popularity-distribution` | Retrieves entitlement popularity distribution for a potential role in a role mining session
[**Get-BetaEntitlementsPotentialRole**](#get-entitlements-potential-role) | **GET** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/entitlement-popularities` | Retrieves entitlements for a potential role in a role mining session
[**Get-BetaExcludedEntitlementsPotentialRole**](#get-excluded-entitlements-potential-role) | **GET** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/excluded-entitlements` | Retrieves excluded entitlements for a potential role in a role mining session
[**Get-BetaIdentitiesPotentialRole**](#get-identities-potential-role) | **GET** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/identities` | Retrieves identities for a potential role in a role mining session
[**Get-BetaPotentialRole**](#get-potential-role) | **GET** `/role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId}` | Retrieve potential role in session
[**Get-BetaPotentialRoleApplications**](#get-potential-role-applications) | **GET** `/role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId}/applications` | Retrieves the applications of a potential role for a role mining session
[**Get-BetaPotentialRoleEntitlements**](#get-potential-role-entitlements) | **GET** `/role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId}/entitlements` | Retrieves the entitlements of a potential role for a role mining session
[**Get-BetaPotentialRoleSourceIdentityUsage**](#get-potential-role-source-identity-usage) | **GET** `/role-mining-potential-roles/{potentialRoleId}/sources/{sourceId}/identityUsage` | Retrieves potential role source usage
[**Get-BetaPotentialRoleSummaries**](#get-potential-role-summaries) | **GET** `/role-mining-sessions/{sessionId}/potential-role-summaries` | Retrieve session&#39;s potential role summaries
[**Get-BetaRoleMiningPotentialRole**](#get-role-mining-potential-role) | **GET** `/role-mining-potential-roles/{potentialRoleId}` | Retrieves a specific potential role
[**Get-BetaRoleMiningSession**](#get-role-mining-session) | **GET** `/role-mining-sessions/{sessionId}` | Get a role mining session
[**Get-BetaRoleMiningSessionStatus**](#get-role-mining-session-status) | **GET** `/role-mining-sessions/{sessionId}/status` | Get role mining session status state
[**Get-BetaRoleMiningSessions**](#get-role-mining-sessions) | **GET** `/role-mining-sessions` | Retrieves all role mining sessions
[**Get-BetaSavedPotentialRoles**](#get-saved-potential-roles) | **GET** `/role-mining-potential-roles/saved` | Retrieves all saved potential roles
[**Update-BetaPotentialRole**](#patch-potential-role) | **PATCH** `/role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId}` | Update a potential role in session
[**Update-BetaRoleMiningPotentialRole**](#patch-role-mining-potential-role) | **PATCH** `/role-mining-potential-roles/{potentialRoleId}` | Update a potential role
[**Update-BetaRoleMiningSession**](#patch-role-mining-session) | **PATCH** `/role-mining-sessions/{sessionId}` | Patch a role mining session
[**Update-BetaEntitlementsPotentialRole**](#update-entitlements-potential-role) | **POST** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/edit-entitlements` | Edit entitlements for a potential role to exclude some entitlements


## create-potential-role-provision-request
This method starts a job to provision a potential role

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-potential-role-provision-request)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
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
    New-BetaPotentialRoleProvisionRequest -SessionId $SessionId -PotentialRoleId $PotentialRoleId 
    
    # Below is a request that includes all optional parameters
    # New-BetaPotentialRoleProvisionRequest -SessionId $SessionId -PotentialRoleId $PotentialRoleId -MinEntitlementPopularity $MinEntitlementPopularity -IncludeCommonAccess $IncludeCommonAccess -RoleMiningPotentialRoleProvisionRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaPotentialRoleProvisionRequest"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-role-mining-sessions
This submits a create role mining session request to the role mining application.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-role-mining-sessions)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | RoleMiningSessionDto | [**RoleMiningSessionDto**](../models/role-mining-session-dto) | True  | Role mining session parameters

### Return type
[**RoleMiningSessionResponse**](../models/role-mining-session-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Submitted a role mining session request | RoleMiningSessionResponse
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
    $Result = ConvertFrom-BetaJsonToRoleMiningSessionDto -Json $RoleMiningSessionDto
    New-BetaRoleMiningSessions -RoleMiningSessionDto $Result 
    
    # Below is a request that includes all optional parameters
    # New-BetaRoleMiningSessions -RoleMiningSessionDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaRoleMiningSessions"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## download-role-mining-potential-role-zip
This endpoint downloads a completed export of information for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/download-role-mining-potential-role-zip)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
Path   | ExportId | **String** | True  | The id of a previously run export job for this potential role

### Return type
**System.IO.FileInfo**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a zip file containing csv files for identities and entitlements for the potential role. | System.IO.FileInfo
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
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

# Export (download) details for a potential role in a role mining session

try {
    Invoke-BetaDownloadRoleMiningPotentialRoleZip -SessionId $SessionId -PotentialRoleId $PotentialRoleId -ExportId $ExportId 
    
    # Below is a request that includes all optional parameters
    # Invoke-BetaDownloadRoleMiningPotentialRoleZip -SessionId $SessionId -PotentialRoleId $PotentialRoleId -ExportId $ExportId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-BetaDownloadRoleMiningPotentialRoleZip"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## export-role-mining-potential-role
This endpoint downloads all the information for a potential role in a role mining session. Includes identities and entitlements in the potential role.

[API Spec](https://developer.sailpoint.com/docs/api/beta/export-role-mining-potential-role)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session

### Return type
**System.IO.FileInfo**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a zip file containing csv files for identities and entitlements for the potential role. | System.IO.FileInfo
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | A potential role id in a role mining session

# Export (download) details for a potential role in a role mining session

try {
    Export-BetaRoleMiningPotentialRole -SessionId $SessionId -PotentialRoleId $PotentialRoleId 
    
    # Below is a request that includes all optional parameters
    # Export-BetaRoleMiningPotentialRole -SessionId $SessionId -PotentialRoleId $PotentialRoleId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Export-BetaRoleMiningPotentialRole"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## export-role-mining-potential-role-async
This endpoint uploads all the information for a potential role in a role mining session to S3 as a downloadable zip archive.  Includes identities and entitlements in the potential role.

[API Spec](https://developer.sailpoint.com/docs/api/beta/export-role-mining-potential-role-async)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
 Body  | RoleMiningPotentialRoleExportRequest | [**RoleMiningPotentialRoleExportRequest**](../models/role-mining-potential-role-export-request) |   (optional) | 

### Return type
[**RoleMiningPotentialRoleExportResponse**](../models/role-mining-potential-role-export-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Job Submitted. Returns a reportId that can be used to download the zip once complete | RoleMiningPotentialRoleExportResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "278359a6-04b7-4669-9468-924cf580964a" # String | A potential role id in a role mining session
$RoleMiningPotentialRoleExportRequest = @"{
  "minEntitlementPopularity" : 0,
  "includeCommonAccess" : true
}"@

# Asynchronously export details for a potential role in a role mining session and upload to s3

try {
    Export-BetaRoleMiningPotentialRoleAsync -SessionId $SessionId -PotentialRoleId $PotentialRoleId 
    
    # Below is a request that includes all optional parameters
    # Export-BetaRoleMiningPotentialRoleAsync -SessionId $SessionId -PotentialRoleId $PotentialRoleId -RoleMiningPotentialRoleExportRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Export-BetaRoleMiningPotentialRoleAsync"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## export-role-mining-potential-role-status
This endpoint retrieves information about the current status of a potential role export.

[API Spec](https://developer.sailpoint.com/docs/api/beta/export-role-mining-potential-role-status)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
Path   | ExportId | **String** | True  | The id of a previously run export job for this potential role

### Return type
[**RoleMiningPotentialRoleExportResponse**](../models/role-mining-potential-role-export-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Success. Returns the current status of this export | RoleMiningPotentialRoleExportResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
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

# Retrieve status of a potential role export job

try {
    Export-BetaRoleMiningPotentialRoleStatus -SessionId $SessionId -PotentialRoleId $PotentialRoleId -ExportId $ExportId 
    
    # Below is a request that includes all optional parameters
    # Export-BetaRoleMiningPotentialRoleStatus -SessionId $SessionId -PotentialRoleId $PotentialRoleId -ExportId $ExportId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Export-BetaRoleMiningPotentialRoleStatus"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-all-potential-role-summaries
Returns all potential role summaries that match the query parameters

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-all-potential-role-summaries)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Sorters = "createdDate" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate, identityCount, entitlementCount, freshness, quality** (optional)
$Filters = '(createdByName co "int") and (createdById sw "2c9180907") and (type eq "COMMON") and ((name co "entt") or (saved eq true))' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co, ge, gt, le, lt*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq, ge, gt, le, lt*  **scopingMethod**: *eq*  **sessionState**: *eq*  **identityAttribute**: *co* (optional)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# Retrieves all potential role summaries

try {
    Get-BetaAllPotentialRoleSummaries 
    
    # Below is a request that includes all optional parameters
    # Get-BetaAllPotentialRoleSummaries -Sorters $Sorters -Filters $Filters -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaAllPotentialRoleSummaries"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-entitlement-distribution-potential-role
This method returns entitlement popularity distribution for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-entitlement-distribution-potential-role)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
  Query | IncludeCommonAccess | **Boolean** |   (optional) | Boolean determining whether common access entitlements will be included or not

### Return type
**System.Collections.Hashtable**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a map containing entitlement popularity distribution for a potential role. | System.Collections.Hashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | A potential role id in a role mining session
$IncludeCommonAccess = $true # Boolean | Boolean determining whether common access entitlements will be included or not (optional)

# Retrieves entitlement popularity distribution for a potential role in a role mining session

try {
    Get-BetaEntitlementDistributionPotentialRole -SessionId $SessionId -PotentialRoleId $PotentialRoleId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaEntitlementDistributionPotentialRole -SessionId $SessionId -PotentialRoleId $PotentialRoleId -IncludeCommonAccess $IncludeCommonAccess  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaEntitlementDistributionPotentialRole"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-entitlements-potential-role
This method returns entitlements for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-entitlements-potential-role)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | A potential role id in a role mining session
$IncludeCommonAccess = $true # Boolean | Boolean determining whether common access entitlements will be included or not (optional) (default to $true)
$Sorters = "popularity" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity, entitlementName, applicationName**  The default sort is **popularity** in descending order.  (optional)
$Filters = 'applicationName sw "AD"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* (optional)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# Retrieves entitlements for a potential role in a role mining session

try {
    Get-BetaEntitlementsPotentialRole -SessionId $SessionId -PotentialRoleId $PotentialRoleId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaEntitlementsPotentialRole -SessionId $SessionId -PotentialRoleId $PotentialRoleId -IncludeCommonAccess $IncludeCommonAccess -Sorters $Sorters -Filters $Filters -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaEntitlementsPotentialRole"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-excluded-entitlements-potential-role
This method returns excluded entitlements for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-excluded-entitlements-potential-role)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | A potential role id in a role mining session
$Sorters = "populariity" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity** (optional)
$Filters = 'applicationName sw "AD"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* (optional)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# Retrieves excluded entitlements for a potential role in a role mining session

try {
    Get-BetaExcludedEntitlementsPotentialRole -SessionId $SessionId -PotentialRoleId $PotentialRoleId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaExcludedEntitlementsPotentialRole -SessionId $SessionId -PotentialRoleId $PotentialRoleId -Sorters $Sorters -Filters $Filters -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaExcludedEntitlementsPotentialRole"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-identities-potential-role
This method returns identities for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-identities-potential-role)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | A potential role id in a role mining session
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
$Filters = 'MyFilters' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* (optional)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# Retrieves identities for a potential role in a role mining session

try {
    Get-BetaIdentitiesPotentialRole -SessionId $SessionId -PotentialRoleId $PotentialRoleId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaIdentitiesPotentialRole -SessionId $SessionId -PotentialRoleId $PotentialRoleId -Sorters $Sorters -Filters $Filters -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaIdentitiesPotentialRole"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-potential-role
This method returns a specific potential role for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-potential-role)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session

### Return type
[**RoleMiningPotentialRole**](../models/role-mining-potential-role)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of potential roles for a role mining session. | RoleMiningPotentialRole
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
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | A potential role id in a role mining session

# Retrieve potential role in session

try {
    Get-BetaPotentialRole -SessionId $SessionId -PotentialRoleId $PotentialRoleId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaPotentialRole -SessionId $SessionId -PotentialRoleId $PotentialRoleId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaPotentialRole"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-potential-role-applications
This method returns the applications of a potential role for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-potential-role-applications)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "62f28d91-7d9f-4d17-be15-666d5b41d77f" # String | A potential role id in a role mining session
$Filters = 'applicationName sw "test"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw* (optional)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# Retrieves the applications of a potential role for a role mining session

try {
    Get-BetaPotentialRoleApplications -SessionId $SessionId -PotentialRoleId $PotentialRoleId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaPotentialRoleApplications -SessionId $SessionId -PotentialRoleId $PotentialRoleId -Filters $Filters -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaPotentialRoleApplications"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-potential-role-entitlements
This method returns the entitlements of a potential role for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-potential-role-entitlements)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementRef.name**: *sw*
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**RoleMiningPotentialRoleEntitlements[]**](../models/role-mining-potential-role-entitlements)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns the entitlements of a potential role for a role mining session. | RoleMiningPotentialRoleEntitlements[]
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
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "62f28d91-7d9f-4d17-be15-666d5b41d77f" # String | A potential role id in a role mining session
$Filters = 'entitlementRef.name sw "test"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementRef.name**: *sw* (optional)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# Retrieves the entitlements of a potential role for a role mining session

try {
    Get-BetaPotentialRoleEntitlements -SessionId $SessionId -PotentialRoleId $PotentialRoleId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaPotentialRoleEntitlements -SessionId $SessionId -PotentialRoleId $PotentialRoleId -Filters $Filters -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaPotentialRoleEntitlements"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-potential-role-source-identity-usage
This method returns source usageCount (as number of days in the last 90 days) for each identity in a potential role.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-potential-role-source-identity-usage)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | PotentialRoleId | **String** | True  | A potential role id
Path   | SourceId | **String** | True  | A source id
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$PotentialRoleId = "e0cc5d7d-bf7f-4f81-b2af-8885b09d9923" # String | A potential role id
$SourceId = "2c9180877620c1460176267f336a106f" # String | A source id
$Sorters = "-usageCount" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **displayName, email, usageCount** (optional)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# Retrieves potential role source usage

try {
    Get-BetaPotentialRoleSourceIdentityUsage -PotentialRoleId $PotentialRoleId -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaPotentialRoleSourceIdentityUsage -PotentialRoleId $PotentialRoleId -SourceId $SourceId -Sorters $Sorters -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaPotentialRoleSourceIdentityUsage"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-potential-role-summaries
This method returns the potential role summaries for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-potential-role-summaries)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$Sorters = "createdDate" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate** (optional)
$Filters = '(createdByName co "int")and (createdById sw "2c9180907")and (type eq "COMMON")and ((name co "entt")or (saved eq true))' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq* (optional)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# Retrieve session's potential role summaries

try {
    Get-BetaPotentialRoleSummaries -SessionId $SessionId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaPotentialRoleSummaries -SessionId $SessionId -Sorters $Sorters -Filters $Filters -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaPotentialRoleSummaries"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-role-mining-potential-role
This method returns a specific potential role.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role-mining-potential-role)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | PotentialRoleId | **String** | True  | A potential role id

### Return type
[**RoleMiningPotentialRole**](../models/role-mining-potential-role)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of potential roles for a role mining session. | RoleMiningPotentialRole
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
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | A potential role id

# Retrieves a specific potential role

try {
    Get-BetaRoleMiningPotentialRole -PotentialRoleId $PotentialRoleId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaRoleMiningPotentialRole -PotentialRoleId $PotentialRoleId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaRoleMiningPotentialRole"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-role-mining-session
The method retrieves a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role-mining-session)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id to be retrieved.

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
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id to be retrieved.

# Get a role mining session

try {
    Get-BetaRoleMiningSession -SessionId $SessionId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaRoleMiningSession -SessionId $SessionId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaRoleMiningSession"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-role-mining-session-status
This method returns a role mining session status for a customer.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role-mining-session-status)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id

### Return type
[**RoleMiningSessionStatus**](../models/role-mining-session-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns session status | RoleMiningSessionStatus
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id

# Get role mining session status state

try {
    Get-BetaRoleMiningSessionStatus -SessionId $SessionId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaRoleMiningSessionStatus -SessionId $SessionId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaRoleMiningSessionStatus"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-role-mining-sessions
Returns all role mining sessions that match the query parameters

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role-mining-sessions)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **saved**: *eq*  **name**: *eq, sw*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdBy, createdDate**
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**RoleMiningSessionResponse[]**](../models/role-mining-session-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns all role mining sessions that match the query parameters. | RoleMiningSessionResponse[]
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
$Filters = 'saved eq "true" and name sw "RM Session"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **saved**: *eq*  **name**: *eq, sw* (optional)
$Sorters = "createdBy,createdDate" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdBy, createdDate** (optional)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# Retrieves all role mining sessions

try {
    Get-BetaRoleMiningSessions 
    
    # Below is a request that includes all optional parameters
    # Get-BetaRoleMiningSessions -Filters $Filters -Sorters $Sorters -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaRoleMiningSessions"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-saved-potential-roles
This method returns all saved potential roles (draft roles).

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-saved-potential-roles)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Sorters = "modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **modified** (optional)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# Retrieves all saved potential roles

try {
    Get-BetaSavedPotentialRoles 
    
    # Below is a request that includes all optional parameters
    # Get-BetaSavedPotentialRoles -Sorters $Sorters -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSavedPotentialRoles"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-potential-role
This method updates an existing potential role using the role mining session id and the potential role summary id.

The following fields can be modified:

* `description`

* `name`

* `saved`


>**NOTE: All other fields cannot be modified.**


[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-potential-role)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | The potential role summary id
 Body  | PatchPotentialRoleRequestInner | [**[]PatchPotentialRoleRequestInner**](../models/patch-potential-role-request-inner) | True  | 

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns the potential role summary based on the potentialRoleId provided. | SystemCollectionsHashtable
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
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The potential role summary id
 $PatchPotentialRoleRequestInner = @"[{op=remove, path=/description}, {op=replace, path=/description, value=Acct I - Potential Role}, {op=remove, path=/saved}, {op=replace, path=/saved, value=false}, {op=remove, path=/name}, {op=replace, path=/name, value=Potential Role Accounting}]"@ # PatchPotentialRoleRequestInner[] | 
 

# Update a potential role in session

try {
    $Result = ConvertFrom-BetaJsonToPatchPotentialRoleRequestInner -Json $PatchPotentialRoleRequestInner
    Update-BetaPotentialRole -SessionId $SessionId -PotentialRoleId $PotentialRoleId -PatchPotentialRoleRequestInner $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BetaPotentialRole -SessionId $SessionId -PotentialRoleId $PotentialRoleId -PatchPotentialRoleRequestInner $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaPotentialRole"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-role-mining-potential-role
This method updates an existing potential role.

The following fields can be modified:

* `description`

* `name`

* `saved`


>**NOTE: All other fields cannot be modified.**


[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-role-mining-potential-role)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | PotentialRoleId | **String** | True  | The potential role summary id
 Body  | PatchPotentialRoleRequestInner | [**[]PatchPotentialRoleRequestInner**](../models/patch-potential-role-request-inner) | True  | 

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns the potential role summary based on the potentialRoleId provided. | SystemCollectionsHashtable
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
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The potential role summary id
 $PatchPotentialRoleRequestInner = @"[{op=remove, path=/description}, {op=replace, path=/description, value=Acct I - Potential Role}, {op=remove, path=/saved}, {op=replace, path=/saved, value=false}, {op=remove, path=/name}, {op=replace, path=/name, value=Potential Role Accounting}]"@ # PatchPotentialRoleRequestInner[] | 
 

# Update a potential role

try {
    $Result = ConvertFrom-BetaJsonToPatchPotentialRoleRequestInner -Json $PatchPotentialRoleRequestInner
    Update-BetaRoleMiningPotentialRole -PotentialRoleId $PotentialRoleId -PatchPotentialRoleRequestInner $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BetaRoleMiningPotentialRole -PotentialRoleId $PotentialRoleId -PatchPotentialRoleRequestInner $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaRoleMiningPotentialRole"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-role-mining-session
The  method updates an existing role mining session using PATCH. Supports op in {"replace"} and changes to pruneThreshold and/or minNumIdentitiesInPotentialRole. The potential roles in this role mining session is then re-calculated.

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-role-mining-session)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id to be patched
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | Replace pruneThreshold and/or minNumIdentitiesInPotentialRole in role mining session. Update saved status or saved name for a role mining session.

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
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id to be patched
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | Replace pruneThreshold and/or minNumIdentitiesInPotentialRole in role mining session. Update saved status or saved name for a role mining session.
 

# Patch a role mining session

try {
    $Result = ConvertFrom-BetaJsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-BetaRoleMiningSession -SessionId $SessionId -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BetaRoleMiningSession -SessionId $SessionId -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaRoleMiningSession"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-entitlements-potential-role
This endpoint adds or removes entitlements from an exclusion list for a potential role.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-entitlements-potential-role)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
 Body  | RoleMiningPotentialRoleEditEntitlements | [**RoleMiningPotentialRoleEditEntitlements**](../models/role-mining-potential-role-edit-entitlements) | True  | Role mining session parameters

### Return type
[**RoleMiningPotentialRole**](../models/role-mining-potential-role)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Adds or removes entitlements from a potential role&#39;s entitlement exclusion list. | RoleMiningPotentialRole
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | A potential role id in a role mining session
$RoleMiningPotentialRoleEditEntitlements = @"{
  "ids" : [ "entId1", "entId2" ],
  "exclude" : true
}"@

# Edit entitlements for a potential role to exclude some entitlements

try {
    $Result = ConvertFrom-BetaJsonToRoleMiningPotentialRoleEditEntitlements -Json $RoleMiningPotentialRoleEditEntitlements
    Update-BetaEntitlementsPotentialRole -SessionId $SessionId -PotentialRoleId $PotentialRoleId -RoleMiningPotentialRoleEditEntitlements $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BetaEntitlementsPotentialRole -SessionId $SessionId -PotentialRoleId $PotentialRoleId -RoleMiningPotentialRoleEditEntitlements $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaEntitlementsPotentialRole"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
