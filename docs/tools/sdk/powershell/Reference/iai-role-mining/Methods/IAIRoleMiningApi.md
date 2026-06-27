---
id: iai-role-mining
title: IAIRoleMining
pagination_label: IAIRoleMining
sidebar_label: IAIRoleMining
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IAIRoleMining', 'IAIRoleMining'] 
slug: /tools/sdk/powershell/iairolemining/methods/iai-role-mining
tags: ['SDK', 'Software Development Kit', 'IAIRoleMining', 'IAIRoleMining']
---

# IAIRoleMining
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-PotentialRoleProvisionRequestV1**](#create-potential-role-provision-request-v1) | **POST** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/provision` | Create request to provision a potential role into an actual role.
[**New-RoleMiningSessionsV1**](#create-role-mining-sessions-v1) | **POST** `/role-mining-sessions/v1` | Create a role mining session
[**Invoke-DownloadRoleMiningPotentialRoleZipV1**](#download-role-mining-potential-role-zip-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/export-async/{exportId}/download` | Export (download) details for a potential role in a role mining session
[**Export-RoleMiningPotentialRoleAsyncV1**](#export-role-mining-potential-role-async-v1) | **POST** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/export-async` | Asynchronously export details for a potential role in a role mining session and upload to S3
[**Export-RoleMiningPotentialRoleStatusV1**](#export-role-mining-potential-role-status-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/export-async/{exportId}` | Retrieve status of a potential role export job
[**Export-RoleMiningPotentialRoleV1**](#export-role-mining-potential-role-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/export` | Export (download) details for a potential role in a role mining session
[**Get-AllPotentialRoleSummariesV1**](#get-all-potential-role-summaries-v1) | **GET** `/role-mining-potential-roles/v1` | Retrieves all potential role summaries
[**Get-EntitlementDistributionPotentialRoleV1**](#get-entitlement-distribution-potential-role-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/entitlement-popularity-distribution` | Retrieves entitlement popularity distribution for a potential role in a role mining session
[**Get-EntitlementsPotentialRoleV1**](#get-entitlements-potential-role-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/entitlement-popularities` | Retrieves entitlements for a potential role in a role mining session
[**Get-ExcludedEntitlementsPotentialRoleV1**](#get-excluded-entitlements-potential-role-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/excluded-entitlements` | Retrieves excluded entitlements for a potential role in a role mining session
[**Get-IdentitiesPotentialRoleV1**](#get-identities-potential-role-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/identities` | Retrieves identities for a potential role in a role mining session
[**Get-PotentialRoleApplicationsV1**](#get-potential-role-applications-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-role-summaries/{potentialRoleId}/applications` | Retrieves the applications of a potential role for a role mining session
[**Get-PotentialRoleEntitlementsV1**](#get-potential-role-entitlements-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-role-summaries/{potentialRoleId}/entitlements` | Retrieves the entitlements of a potential role for a role mining session
[**Get-PotentialRoleSourceIdentityUsageV1**](#get-potential-role-source-identity-usage-v1) | **GET** `/role-mining-potential-roles/v1/{potentialRoleId}/sources/{sourceId}/identityUsage` | Retrieves potential role source usage
[**Get-PotentialRoleSummariesV1**](#get-potential-role-summaries-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-role-summaries` | Retrieves all potential role summaries
[**Get-PotentialRoleV1**](#get-potential-role-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-role-summaries/{potentialRoleId}` | Retrieves a specific potential role
[**Get-RoleMiningPotentialRoleV1**](#get-role-mining-potential-role-v1) | **GET** `/role-mining-potential-roles/v1/{potentialRoleId}` | Retrieves a specific potential role
[**Get-RoleMiningSessionStatusV1**](#get-role-mining-session-status-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/status` | Get role mining session status state
[**Get-RoleMiningSessionV1**](#get-role-mining-session-v1) | **GET** `/role-mining-sessions/v1/{sessionId}` | Get a role mining session
[**Get-RoleMiningSessionsV1**](#get-role-mining-sessions-v1) | **GET** `/role-mining-sessions/v1` | Retrieves all role mining sessions
[**Get-SavedPotentialRolesV1**](#get-saved-potential-roles-v1) | **GET** `/role-mining-potential-roles/v1/saved` | Retrieves all saved potential roles
[**Update-PotentialRoleSessionV1**](#patch-potential-role-session-v1) | **PATCH** `/role-mining-sessions/v1/{sessionId}/potential-role-summaries/{potentialRoleId}` | Update a potential role session
[**Update-PotentialRoleV1**](#patch-potential-role-v1) | **PATCH** `/role-mining-potential-roles/v1/{potentialRoleId}` | Update a potential role
[**Update-RoleMiningSessionV1**](#patch-role-mining-session-v1) | **PATCH** `/role-mining-sessions/v1/{sessionId}` | Patch a role mining session
[**Update-EntitlementsPotentialRoleV1**](#update-entitlements-potential-role-v1) | **POST** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/edit-entitlements` | Edit entitlements for a potential role to exclude some entitlements


## create-potential-role-provision-request-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This method starts a job to provision a potential role

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-potential-role-provision-request-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | MinEntitlementPopularity | **Int32** |   (optional) (default to 0) | Minimum popularity required for an entitlement to be included in the provisioned role.
  Query | IncludeCommonAccess | **Boolean** |   (optional) (default to $true) | Boolean determining whether common access entitlements will be included in the provisioned role.
 Body  | Roleminingpotentialroleprovisionrequest | [**Roleminingpotentialroleprovisionrequest**](../models/roleminingpotentialroleprovisionrequest) |   (optional) | Required information to create a new role

### Return type
[**Roleminingpotentialrolesummary**](../models/roleminingpotentialrolesummary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted. Returns a potential role summary including the status of the provison request | Roleminingpotentialrolesummary
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
$Roleminingpotentialroleprovisionrequest = @""@

# Create request to provision a potential role into an actual role.

try {
    New-PotentialRoleProvisionRequestV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # New-PotentialRoleProvisionRequestV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental -MinEntitlementPopularity $MinEntitlementPopularity -IncludeCommonAccess $IncludeCommonAccess -Roleminingpotentialroleprovisionrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-PotentialRoleProvisionRequestV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-role-mining-sessions-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This submits a create role mining session request to the role mining application.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-role-mining-sessions-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Roleminingsessiondto | [**Roleminingsessiondto**](../models/roleminingsessiondto) | True  | Role mining session parameters

### Return type
[**Roleminingsessionresponse**](../models/roleminingsessionresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Submitted a role mining session request | Roleminingsessionresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Roleminingsessiondto = @""@

# Create a role mining session

try {
    $Result = ConvertFrom-JsonToRoleminingsessiondto -Json $Roleminingsessiondto
    New-RoleMiningSessionsV1 -XSailPointExperimental $XSailPointExperimental -Roleminingsessiondto $Result 
    
    # Below is a request that includes all optional parameters
    # New-RoleMiningSessionsV1 -XSailPointExperimental $XSailPointExperimental -Roleminingsessiondto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-RoleMiningSessionsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## download-role-mining-potential-role-zip-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This endpoint downloads a completed export of information for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/download-role-mining-potential-role-zip-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Invoke-DownloadRoleMiningPotentialRoleZipV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -ExportId $ExportId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Invoke-DownloadRoleMiningPotentialRoleZipV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -ExportId $ExportId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-DownloadRoleMiningPotentialRoleZipV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## export-role-mining-potential-role-async-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This endpoint uploads all the information for a potential role in a role mining session to S3 as a downloadable zip archive.  Includes identities and entitlements in the potential role.

[API Spec](https://developer.sailpoint.com/docs/api/v1/export-role-mining-potential-role-async-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Roleminingpotentialroleexportrequest | [**Roleminingpotentialroleexportrequest**](../models/roleminingpotentialroleexportrequest) |   (optional) | 

### Return type
[**Roleminingpotentialroleexportresponse**](../models/roleminingpotentialroleexportresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Job Submitted. Returns a reportId that can be used to download the zip once complete | Roleminingpotentialroleexportresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "278359a6-04b7-4669-9468-924cf580964a" # String | A potential role id in a role mining session
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Roleminingpotentialroleexportrequest = @""@

# Asynchronously export details for a potential role in a role mining session and upload to S3

try {
    Export-RoleMiningPotentialRoleAsyncV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Export-RoleMiningPotentialRoleAsyncV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental -Roleminingpotentialroleexportrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Export-RoleMiningPotentialRoleAsyncV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## export-role-mining-potential-role-status-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This endpoint retrieves information about the current status of a potential role export.

[API Spec](https://developer.sailpoint.com/docs/api/v1/export-role-mining-potential-role-status-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
Path   | ExportId | **String** | True  | The id of a previously run export job for this potential role
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**Roleminingpotentialroleexportresponse**](../models/roleminingpotentialroleexportresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Success. Returns the current status of this export | Roleminingpotentialroleexportresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Export-RoleMiningPotentialRoleStatusV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -ExportId $ExportId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Export-RoleMiningPotentialRoleStatusV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -ExportId $ExportId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Export-RoleMiningPotentialRoleStatusV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## export-role-mining-potential-role-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This endpoint downloads all the information for a potential role in a role mining session. Includes identities and entitlements in the potential role.

[API Spec](https://developer.sailpoint.com/docs/api/v1/export-role-mining-potential-role-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Export-RoleMiningPotentialRoleV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Export-RoleMiningPotentialRoleV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Export-RoleMiningPotentialRoleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-all-potential-role-summaries-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns all potential role summaries that match the query parameters

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-all-potential-role-summaries-v1)

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
[**Roleminingpotentialrolesummary[]**](../models/roleminingpotentialrolesummary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns all potential role summaries that match the query parameters. | Roleminingpotentialrolesummary[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Get-AllPotentialRoleSummariesV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-AllPotentialRoleSummariesV1 -XSailPointExperimental $XSailPointExperimental -Sorters $Sorters -Filters $Filters -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AllPotentialRoleSummariesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-entitlement-distribution-potential-role-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This method returns entitlement popularity distribution for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-entitlement-distribution-potential-role-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Get-EntitlementDistributionPotentialRoleV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-EntitlementDistributionPotentialRoleV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental -IncludeCommonAccess $IncludeCommonAccess  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-EntitlementDistributionPotentialRoleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-entitlements-potential-role-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This method returns entitlements for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-entitlements-potential-role-v1)

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
[**Roleminingentitlement[]**](../models/roleminingentitlement)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of entitlements for a potential role. | Roleminingentitlement[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Get-EntitlementsPotentialRoleV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-EntitlementsPotentialRoleV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental -IncludeCommonAccess $IncludeCommonAccess -Sorters $Sorters -Filters $Filters -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-EntitlementsPotentialRoleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-excluded-entitlements-potential-role-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This method returns excluded entitlements for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-excluded-entitlements-potential-role-v1)

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
[**Roleminingentitlement[]**](../models/roleminingentitlement)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of excluded entitlements for a potential roles. | Roleminingentitlement[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Get-ExcludedEntitlementsPotentialRoleV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-ExcludedEntitlementsPotentialRoleV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental -Sorters $Sorters -Filters $Filters -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ExcludedEntitlementsPotentialRoleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-identities-potential-role-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This method returns identities for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-identities-potential-role-v1)

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
[**Roleminingidentity[]**](../models/roleminingidentity)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of identities for a potential role. | Roleminingidentity[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Get-IdentitiesPotentialRoleV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-IdentitiesPotentialRoleV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental -Sorters $Sorters -Filters $Filters -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-IdentitiesPotentialRoleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-potential-role-applications-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This method returns the applications of a potential role for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-potential-role-applications-v1)

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
[**Roleminingpotentialroleapplication[]**](../models/roleminingpotentialroleapplication)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of potential roles for a role mining session. | Roleminingpotentialroleapplication[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Get-PotentialRoleApplicationsV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-PotentialRoleApplicationsV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental -Filters $Filters -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-PotentialRoleApplicationsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-potential-role-entitlements-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This method returns the entitlements of a potential role for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-potential-role-entitlements-v1)

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
[**Roleminingpotentialroleentitlements[]**](../models/roleminingpotentialroleentitlements)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns the entitlements of a potential role for a role mining session. session. | Roleminingpotentialroleentitlements[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Get-PotentialRoleEntitlementsV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-PotentialRoleEntitlementsV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental -Filters $Filters -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-PotentialRoleEntitlementsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-potential-role-source-identity-usage-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This method returns source usageCount (as number of days in the last 90 days) for each identity in a potential role.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-potential-role-source-identity-usage-v1)

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
[**Roleminingpotentialrolesourceusage[]**](../models/roleminingpotentialrolesourceusage)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of source usage for the identities in a potential role. | Roleminingpotentialrolesourceusage[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Get-PotentialRoleSourceIdentityUsageV1 -PotentialRoleId $PotentialRoleId -SourceId $SourceId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-PotentialRoleSourceIdentityUsageV1 -PotentialRoleId $PotentialRoleId -SourceId $SourceId -XSailPointExperimental $XSailPointExperimental -Sorters $Sorters -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-PotentialRoleSourceIdentityUsageV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-potential-role-summaries-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This method returns the potential role summaries for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-potential-role-summaries-v1)

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
[**Roleminingpotentialrolesummary[]**](../models/roleminingpotentialrolesummary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of potential role summaries for a role mining session. | Roleminingpotentialrolesummary[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Get-PotentialRoleSummariesV1 -SessionId $SessionId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-PotentialRoleSummariesV1 -SessionId $SessionId -XSailPointExperimental $XSailPointExperimental -Sorters $Sorters -Filters $Filters -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-PotentialRoleSummariesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-potential-role-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This method returns a specific potential role for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-potential-role-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**Roleminingpotentialrole**](../models/roleminingpotentialrole)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of potential roles for a role mining session. | Roleminingpotentialrole
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Get-PotentialRoleV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-PotentialRoleV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-PotentialRoleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-role-mining-potential-role-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This method returns a specific potential role.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-mining-potential-role-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | PotentialRoleId | **String** | True  | A potential role id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**Roleminingpotentialrole**](../models/roleminingpotentialrole)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of potential roles for a role mining session. | Roleminingpotentialrole
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | A potential role id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Retrieves a specific potential role

try {
    Get-RoleMiningPotentialRoleV1 -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-RoleMiningPotentialRoleV1 -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-RoleMiningPotentialRoleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-role-mining-session-status-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This method returns a role mining session status for a customer.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-mining-session-status-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**Roleminingsessionstatus**](../models/roleminingsessionstatus)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns session status | Roleminingsessionstatus
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get role mining session status state

try {
    Get-RoleMiningSessionStatusV1 -SessionId $SessionId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-RoleMiningSessionStatusV1 -SessionId $SessionId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-RoleMiningSessionStatusV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-role-mining-session-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
The method retrieves a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-mining-session-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id to be retrieved.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**Roleminingsessionresponse**](../models/roleminingsessionresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns a role mining session | Roleminingsessionresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Client Error - Returned if the request body is invalid. | Errorresponsedto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id to be retrieved.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get a role mining session

try {
    Get-RoleMiningSessionV1 -SessionId $SessionId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-RoleMiningSessionV1 -SessionId $SessionId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-RoleMiningSessionV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-role-mining-sessions-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns all role mining sessions that match the query parameters

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-mining-sessions-v1)

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
[**Roleminingsessiondto[]**](../models/roleminingsessiondto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns all role mining sessions that match the query parameters. | Roleminingsessiondto[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Get-RoleMiningSessionsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-RoleMiningSessionsV1 -XSailPointExperimental $XSailPointExperimental -Filters $Filters -Sorters $Sorters -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-RoleMiningSessionsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-saved-potential-roles-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This method returns all saved potential roles (draft roles).

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-saved-potential-roles-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **modified**
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Roleminingsessiondraftroledto[]**](../models/roleminingsessiondraftroledto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of draft roles for a role mining session. | Roleminingsessiondraftroledto[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Get-SavedPotentialRolesV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-SavedPotentialRolesV1 -XSailPointExperimental $XSailPointExperimental -Sorters $Sorters -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SavedPotentialRolesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-potential-role-session-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
The method updates an existing potential role using.

The following fields can be modified:

* `description`

* `name`

* `saved`


>**NOTE: All other fields cannot be modified.**


[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-potential-role-session-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | The potential role summary id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Jsonpatchoperationrolemining | [**[]Jsonpatchoperationrolemining**](../models/jsonpatchoperationrolemining) | True  | 

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns the potential role summary based on the potentialRoleId provided. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The potential role summary id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
 $Jsonpatchoperationrolemining = @"[{"op":"remove","path":"/description"},{"op":"replace","path":"/description","value":"Acct I - Potential Role"},{"op":"remove","path":"/saved"},{"op":"replace","path":"/saved","value":"false"},{"op":"remove","path":"/name"},{"op":"replace","path":"/name","value":"Potential Role Accounting"}]"@ # Jsonpatchoperationrolemining[] | 
 

# Update a potential role session

try {
    $Result = ConvertFrom-JsonToJsonpatchoperationrolemining -Json $Jsonpatchoperationrolemining
    Update-PotentialRoleSessionV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental -Jsonpatchoperationrolemining $Result 
    
    # Below is a request that includes all optional parameters
    # Update-PotentialRoleSessionV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental -Jsonpatchoperationrolemining $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-PotentialRoleSessionV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-potential-role-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
The method updates an existing potential role using.

The following fields can be modified:

* `description`

* `name`

* `saved`


>**NOTE: All other fields cannot be modified.**


[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-potential-role-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | The potential role summary id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Jsonpatchoperationrolemining | [**[]Jsonpatchoperationrolemining**](../models/jsonpatchoperationrolemining) | True  | 

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns the potential role summary based on the potentialRoleId provided. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The potential role summary id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
 $Jsonpatchoperationrolemining = @"[{"op":"remove","path":"/description"},{"op":"replace","path":"/description","value":"Acct I - Potential Role"},{"op":"remove","path":"/saved"},{"op":"replace","path":"/saved","value":"false"},{"op":"remove","path":"/name"},{"op":"replace","path":"/name","value":"Potential Role Accounting"}]"@ # Jsonpatchoperationrolemining[] | 
 

# Update a potential role

try {
    $Result = ConvertFrom-JsonToJsonpatchoperationrolemining -Json $Jsonpatchoperationrolemining
    Update-PotentialRoleV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental -Jsonpatchoperationrolemining $Result 
    
    # Below is a request that includes all optional parameters
    # Update-PotentialRoleV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental -Jsonpatchoperationrolemining $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-PotentialRoleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-role-mining-session-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
The  method updates an existing role mining session using PATCH. Supports op in {"replace"} and changes to pruneThreshold and/or minNumIdentitiesInPotentialRole. The potential roles in this role mining session is then re-calculated.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-role-mining-session-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id to be patched
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | Replace pruneThreshold and/or minNumIdentitiesInPotentialRole in role mining session. Update saved status or saved name for a role mining session.

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id to be patched
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
 $Jsonpatchoperation = @"[{"op":"replace","path":"/pruneThreshold","value":"83"},{"op":"replace","path":"/minNumIdentitiesInPotentialRole","value":"10"},{"op":"replace","path":"/saved","value":"false"},{"op":"replace","path":"/name","value":"RM Session - 07/10/22"},{"op":"add","path":"/name","value":"RM Session - 07/10/22"}]"@ # Jsonpatchoperation[] | Replace pruneThreshold and/or minNumIdentitiesInPotentialRole in role mining session. Update saved status or saved name for a role mining session.
 

# Patch a role mining session

try {
    $Result = ConvertFrom-JsonToJsonpatchoperation -Json $Jsonpatchoperation
    Update-RoleMiningSessionV1 -SessionId $SessionId -XSailPointExperimental $XSailPointExperimental -Jsonpatchoperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-RoleMiningSessionV1 -SessionId $SessionId -XSailPointExperimental $XSailPointExperimental -Jsonpatchoperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-RoleMiningSessionV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-entitlements-potential-role-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This endpoint adds or removes entitlements from an exclusion list for a potential role.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-entitlements-potential-role-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Roleminingpotentialroleeditentitlements | [**Roleminingpotentialroleeditentitlements**](../models/roleminingpotentialroleeditentitlements) | True  | Role mining session parameters

### Return type
[**Roleminingpotentialrole**](../models/roleminingpotentialrole)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Adds or removes entitlements from a potential role&#39;s entitlement exclusion list. | Roleminingpotentialrole
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SessionId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role mining session id
$PotentialRoleId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | A potential role id in a role mining session
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Roleminingpotentialroleeditentitlements = @""@

# Edit entitlements for a potential role to exclude some entitlements

try {
    $Result = ConvertFrom-JsonToRoleminingpotentialroleeditentitlements -Json $Roleminingpotentialroleeditentitlements
    Update-EntitlementsPotentialRoleV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental -Roleminingpotentialroleeditentitlements $Result 
    
    # Below is a request that includes all optional parameters
    # Update-EntitlementsPotentialRoleV1 -SessionId $SessionId -PotentialRoleId $PotentialRoleId -XSailPointExperimental $XSailPointExperimental -Roleminingpotentialroleeditentitlements $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-EntitlementsPotentialRoleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
