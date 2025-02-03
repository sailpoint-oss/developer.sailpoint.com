---
id: beta-role-insights
title: RoleInsights
pagination_label: RoleInsights
sidebar_label: RoleInsights
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleInsights', 'BetaRoleInsights'] 
slug: /tools/sdk/powershell/beta/methods/role-insights
tags: ['SDK', 'Software Development Kit', 'RoleInsights', 'BetaRoleInsights']
---

# RoleInsights
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BetaRoleInsightRequests**](#create-role-insight-requests) | **POST** `/role-insights/requests` | Generate insights for roles
[**Invoke-BetaDownloadRoleInsightsEntitlementsChanges**](#download-role-insights-entitlements-changes) | **GET** `/role-insights/{insightId}/entitlement-changes/download` | Download entitlement insights for a role
[**Get-BetaEntitlementChangesIdentities**](#get-entitlement-changes-identities) | **GET** `/role-insights/{insightId}/entitlement-changes/{entitlementId}/identities` | Get identities for a suggested entitlement (for a role)
[**Get-BetaRoleInsight**](#get-role-insight) | **GET** `/role-insights/{insightId}` | Get a single role insight
[**Get-BetaRoleInsights**](#get-role-insights) | **GET** `/role-insights` | Get role insights
[**Get-BetaRoleInsightsCurrentEntitlements**](#get-role-insights-current-entitlements) | **GET** `/role-insights/{insightId}/current-entitlements` | Get current entitlement for a role
[**Get-BetaRoleInsightsEntitlementsChanges**](#get-role-insights-entitlements-changes) | **GET** `/role-insights/{insightId}/entitlement-changes` | Get entitlement insights for a role
[**Get-BetaRoleInsightsRequests**](#get-role-insights-requests) | **GET** `/role-insights/requests/{id}` | Returns metadata from prior request.
[**Get-BetaRoleInsightsSummary**](#get-role-insights-summary) | **GET** `/role-insights/summary` | Get role insights summary information

## create-role-insight-requests
Submits a create role insights request to the role insights application. At this time there are no parameters. All business roles will be processed for the customer.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**RoleInsightsResponse**](../models/role-insights-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Submitted a role insights generation request | RoleInsightsResponse
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

# Generate insights for roles

try {
    New-BetaRoleInsightRequests
    
    # Below is a request that includes all optional parameters
    # New-BetaRoleInsightRequests  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaRoleInsightRequests"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## download-role-insights-entitlements-changes
This endpoint returns the entitlement insights for a role.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | InsightId | **String** | True  | The role insight id
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess**  The default sort is **identitiesWithAccess** in descending order.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw*

### Return type
**String**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a csv file containing a list of entitlements to be added for a role. | String
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

### Example
```powershell
$InsightId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role insight id
$Sorters = "identitiesWithAccess" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess**  The default sort is **identitiesWithAccess** in descending order. (optional)
$Filters = 'name sw "r"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional)

# Download entitlement insights for a role

try {
    Invoke-BetaDownloadRoleInsightsEntitlementsChanges -BetaInsightId $InsightId 
    
    # Below is a request that includes all optional parameters
    # Invoke-BetaDownloadRoleInsightsEntitlementsChanges -BetaInsightId $InsightId -BetaSorters $Sorters -BetaFilters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-BetaDownloadRoleInsightsEntitlementsChanges"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-entitlement-changes-identities
Role insights suggests entitlements to be added for a role. This endpoint returns a list of identities in the role, with or without the entitlements, for a suggested entitlement so that the user can see which identities would be affected if the suggested entitlement were to be added to the role.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | InsightId | **String** | True  | The role insight id
Path   | EntitlementId | **String** | True  | The entitlement id
  Query | HasEntitlement | **Boolean** |   (optional) (default to $false) | Identity has this entitlement or not
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*

### Return type
[**RoleInsightsIdentities[]**](../models/role-insights-identities)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of identities with or without the entitlement. | RoleInsightsIdentities[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$InsightId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role insight id
$EntitlementId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The entitlement id
$HasEntitlement = $true # Boolean | Identity has this entitlement or not (optional) (default to $false)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
$Filters = 'name sw "Jan"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* (optional)

# Get identities for a suggested entitlement (for a role)

try {
    Get-BetaEntitlementChangesIdentities -BetaInsightId $InsightId  -BetaEntitlementId $EntitlementId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaEntitlementChangesIdentities -BetaInsightId $InsightId -BetaEntitlementId $EntitlementId -BetaHasEntitlement $HasEntitlement -BetaOffset $Offset -BetaLimit $Limit -BetaCount $Count -BetaSorters $Sorters -BetaFilters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaEntitlementChangesIdentities"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-role-insight
This endpoint gets role insights information for a role.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | InsightId | **String** | True  | The role insight id

### Return type
[**RoleInsight**](../models/role-insight)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns information about insights for a single role. | RoleInsight
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$InsightId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role insight id

# Get a single role insight

try {
    Get-BetaRoleInsight -BetaInsightId $InsightId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaRoleInsight -BetaInsightId $InsightId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaRoleInsight"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-role-insights
This method returns detailed role insights for each role.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **numberOfUpdates, identitiesWithAccess, totalNumberOfIdentities**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **ownerName**: *sw*  **description**: *sw*

### Return type
[**RoleInsight[]**](../models/role-insight)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of roles with information about insights for each role. | RoleInsight[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Sorters = "numberOfUpdates" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **numberOfUpdates, identitiesWithAccess, totalNumberOfIdentities** (optional)
$Filters = 'name sw "John"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **ownerName**: *sw*  **description**: *sw* (optional)

# Get role insights

try {
    Get-BetaRoleInsights
    
    # Below is a request that includes all optional parameters
    # Get-BetaRoleInsights -BetaOffset $Offset -BetaLimit $Limit -BetaCount $Count -BetaSorters $Sorters -BetaFilters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaRoleInsights"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-role-insights-current-entitlements
This endpoint gets the entitlements for a role. The term "current" is to distinguish from the entitlement(s) an insight might recommend adding.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | InsightId | **String** | True  | The role insight id
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw*

### Return type
[**RoleInsightsEntitlement[]**](../models/role-insights-entitlement)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of current or pre-existing entitlements for a role. | RoleInsightsEntitlement[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$InsightId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role insight id
$Filters = 'name sw "r"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional)

# Get current entitlement for a role

try {
    Get-BetaRoleInsightsCurrentEntitlements -BetaInsightId $InsightId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaRoleInsightsCurrentEntitlements -BetaInsightId $InsightId -BetaFilters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaRoleInsightsCurrentEntitlements"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-role-insights-entitlements-changes
This endpoint returns entitlement insights for a role.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | InsightId | **String** | True  | The role insight id
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess, name**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw*

### Return type
[**RoleInsightsEntitlementChanges[]**](../models/role-insights-entitlement-changes)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of entitlements to be added for a role. | RoleInsightsEntitlementChanges[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$InsightId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role insight id
$Sorters = "MySorters" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess, name** (optional)
$Filters = 'name sw "Admin"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional)

# Get entitlement insights for a role

try {
    Get-BetaRoleInsightsEntitlementsChanges -BetaInsightId $InsightId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaRoleInsightsEntitlementsChanges -BetaInsightId $InsightId -BetaSorters $Sorters -BetaFilters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaRoleInsightsEntitlementsChanges"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-role-insights-requests
This endpoint returns details of a prior role insights request. 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The role insights request id

### Return type
[**RoleInsightsResponse**](../models/role-insights-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns details of an earlier role insights request. | RoleInsightsResponse
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
$Id = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | The role insights request id

# Returns metadata from prior request.

try {
    Get-BetaRoleInsightsRequests -BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaRoleInsightsRequests -BetaId $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaRoleInsightsRequests"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-role-insights-summary
This method returns high level summary information for role insights for a customer.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**RoleInsightsSummary**](../models/role-insights-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns high level counts. | RoleInsightsSummary
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Get role insights summary information

try {
    Get-BetaRoleInsightsSummary
    
    # Below is a request that includes all optional parameters
    # Get-BetaRoleInsightsSummary  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaRoleInsightsSummary"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
