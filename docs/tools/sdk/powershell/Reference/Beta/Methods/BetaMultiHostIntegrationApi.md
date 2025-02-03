---
id: beta-multi-host-integration
title: MultiHostIntegration
pagination_label: MultiHostIntegration
sidebar_label: MultiHostIntegration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostIntegration', 'BetaMultiHostIntegration'] 
slug: /tools/sdk/powershell/beta/methods/multi-host-integration
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegration', 'BetaMultiHostIntegration']
---

# MultiHostIntegration
  Use this API to build a Multi-Host Integration.
Multi-Host Integration will help customers to configure and manage similar type of target system in Identity Security Cloud.
In Identity Security Cloud, administrators can create a Multi-Host Integration by going to Admin &gt; Connections &gt; Multi-Host Sources and selecting &#39;Create.&#39;
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BetaMultiHostIntegration**](#create-multi-host-integration) | **POST** `/multihosts` | Create Multi-Host Integration
[**New-BetaSourcesWithinMultiHost**](#create-sources-within-multi-host) | **POST** `/multihosts/{id}` | Create Sources Within Multi-Host Integration
[**Remove-BetaMultiHost**](#delete-multi-host) | **DELETE** `/multihosts/{id}` | Delete Multi-Host Integration
[**Get-BetaAcctAggregationGroups**](#get-acct-aggregation-groups) | **GET** `/multihosts/{multihostId}/acctAggregationGroups` | Get Account Aggregation Groups Within Multi-Host Integration ID
[**Get-BetaEntitlementAggregationGroups**](#get-entitlement-aggregation-groups) | **GET** `/multihosts/{multiHostId}/entitlementAggregationGroups` | Get Entitlement Aggregation Groups Within Multi-Host Integration ID
[**Get-BetaMultiHostIntegrations**](#get-multi-host-integrations) | **GET** `/multihosts/{id}` | Get Multi-Host Integration By ID
[**Get-BetaMultiHostIntegrationsList**](#get-multi-host-integrations-list) | **GET** `/multihosts` | List All Existing Multi-Host Integrations
[**Get-BetaMultiHostSourceCreationErrors**](#get-multi-host-source-creation-errors) | **GET** `/multihosts/{multiHostId}/sources/errors` | List Multi-Host Source Creation Errors
[**Get-BetaMultihostIntegrationTypes**](#get-multihost-integration-types) | **GET** `/multihosts/types` | List Multi-Host Integration Types
[**Get-BetaSourcesWithinMultiHost**](#get-sources-within-multi-host) | **GET** `/multihosts/{id}/sources` | List Sources Within Multi-Host Integration
[**Test-BetaConnectionMultiHostSources**](#test-connection-multi-host-sources) | **POST** `/multihosts/{multihost_id}/sources/testConnection` | Test Configuration For Multi-Host Integration
[**Test-BetaSourceConnectionMultihost**](#test-source-connection-multihost) | **GET** `/multihosts/{multihost_id}/sources/{sourceId}/testConnection` | Test Configuration For Multi-Host Integration&#39;s Single Source
[**Update-BetaMultiHostSources**](#update-multi-host-sources) | **PATCH** `/multihosts/{id}` | Update Multi-Host Integration

## create-multi-host-integration
This API is used to create Multi-Host Integration. Multi-host Integration holds similar types of sources.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | MultiHostIntegrationsCreate | [**MultiHostIntegrationsCreate**](../models/multi-host-integrations-create) | True  | The specifics of the Multi-Host Integration to create

### Return type
[**MultiHostIntegrations**](../models/multi-host-integrations)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | OK. Returned if the request was successfully accepted into the system. | MultiHostIntegrations
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$MultiHostIntegrationsCreate = @"{
  "owner" : {
    "name" : "MyName",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "managementWorkgroup" : {
    "name" : "My Management Workgroup",
    "id" : "2c91808568c529c60168cca6f90c2222",
    "type" : "GOVERNANCE_GROUP"
  },
  "cluster" : {
    "name" : "Corporate Cluster",
    "id" : "2c9180866166b5b0016167c32ef31a66",
    "type" : "CLUSTER"
  },
  "connector" : "multihost-microsoft-sql-server",
  "connectorAttributes" : {
    "maxSourcesPerAggGroup" : 10,
    "maxAllowedSources" : 300
  },
  "created" : "2022-02-08T14:50:03.827Z",
  "name" : "My Multi-Host Integration",
  "description" : "This is the Multi-Host Integration.",
  "modified" : "2024-01-23T18:08:50.897Z"
}"@

# Create Multi-Host Integration

try {
    $Result = ConvertFrom-JsonToMultiHostIntegrationsCreate -Json $MultiHostIntegrationsCreate
    New-BetaMultiHostIntegration -BetaMultiHostIntegrationsCreate $Result
    
    # Below is a request that includes all optional parameters
    # New-BetaMultiHostIntegration -BetaMultiHostIntegrationsCreate $MultiHostIntegrationsCreate  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaMultiHostIntegration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## create-sources-within-multi-host
This API is used to create sources within Multi-Host Integration. Multi-Host Integration holds similar types of sources.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the Multi-Host Integration.
 Body  | MultiHostIntegrationsCreateSources | [**[]MultiHostIntegrationsCreateSources**](../models/multi-host-integrations-create-sources) | True  | The specifics of the sources to create within Multi-Host Integration.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK. Returned if the request was successfully accepted into the system. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808568c529c60168cca6f90c1326" # String | ID of the Multi-Host Integration.
 $MultiHostIntegrationsCreateSources = @"{
  "connectorAttributes" : {
    "authType" : "SQLAuthentication",
    "url" : "jdbc:sqlserver://178.18.41.118:1433",
    "user" : "username",
    "driverClass" : "com.microsoft.sqlserver.jdbc.SQLServerDriver",
    "maxSourcesPerAggGroup" : 10,
    "maxAllowedSources" : 300
  },
  "name" : "My Source",
  "description" : "This is the corporate directory."
}"@ # MultiHostIntegrationsCreateSources[] | The specifics of the sources to create within Multi-Host Integration.
 

# Create Sources Within Multi-Host Integration

try {
    $Result = ConvertFrom-JsonToMultiHostIntegrationsCreateSources -Json $MultiHostIntegrationsCreateSources
    New-BetaSourcesWithinMultiHost -BetaId $Id  -BetaMultiHostIntegrationsCreateSources $Result
    
    # Below is a request that includes all optional parameters
    # New-BetaSourcesWithinMultiHost -BetaId $Id -BetaMultiHostIntegrationsCreateSources $MultiHostIntegrationsCreateSources  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaSourcesWithinMultiHost"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## delete-multi-host
Delete an existing Multi-Host Integration by ID.  

A token with Org Admin or Multi Host Admin authority is required to access this endpoint.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of Multi-Host Integration to delete.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK. Returned if the request was successfully accepted into the system. | 
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
$Id = "2c91808568c529c60168cca6f90c1326" # String | ID of Multi-Host Integration to delete.

# Delete Multi-Host Integration

try {
    Remove-BetaMultiHost -BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaMultiHost -BetaId $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaMultiHost"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-acct-aggregation-groups
This API will return array of account aggregation groups within provided Multi-Host Integration ID.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | MultiHostId | **String** | True  | ID of the Multi-Host Integration to update

### Return type
[**MultiHostIntegrationsAggScheduleUpdate**](../models/multi-host-integrations-agg-schedule-update)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK. Returned if the request was successfully accepted into the system. | MultiHostIntegrationsAggScheduleUpdate
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
$MultiHostId = "aMultiHostId" # String | ID of the Multi-Host Integration to update

# Get Account Aggregation Groups Within Multi-Host Integration ID

try {
    Get-BetaAcctAggregationGroups -BetaMultiHostId $MultiHostId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaAcctAggregationGroups -BetaMultiHostId $MultiHostId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaAcctAggregationGroups"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-entitlement-aggregation-groups
This API will return array of aggregation groups within provided Multi-Host Integration ID.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | MultiHostId | **String** | True  | ID of the Multi-Host Integration to update

### Return type
[**MultiHostIntegrationsAggScheduleUpdate**](../models/multi-host-integrations-agg-schedule-update)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK. Returned if the request was successfully accepted into the system. | MultiHostIntegrationsAggScheduleUpdate
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
$MultiHostId = "aMultiHostId" # String | ID of the Multi-Host Integration to update

# Get Entitlement Aggregation Groups Within Multi-Host Integration ID

try {
    Get-BetaEntitlementAggregationGroups -BetaMultiHostId $MultiHostId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaEntitlementAggregationGroups -BetaMultiHostId $MultiHostId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaEntitlementAggregationGroups"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-multi-host-integrations
Get an existing Multi-Host Integration. 

A token with Org Admin or Multi-Host Integration Admin authority is required to access this endpoint.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the Multi-Host Integration.

### Return type
[**MultiHostIntegrations**](../models/multi-host-integrations)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK. Returned if the request was successfully accepted into the system. | MultiHostIntegrations
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
$Id = "2c91808568c529c60168cca6f90c1326" # String | ID of the Multi-Host Integration.

# Get Multi-Host Integration By ID

try {
    Get-BetaMultiHostIntegrations -BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaMultiHostIntegrations -BetaId $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaMultiHostIntegrations"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-multi-host-integrations-list
Get a list of Multi-Host Integrations.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *in*  **forSubAdminId**: *in*
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | ForSubadmin | **String** |   (optional) | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity or SOURCE_SUBADMIN identity.  The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID.  A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin.

### Return type
[**MultiHostIntegrations[]**](../models/multi-host-integrations)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK. Returned if the request was successfully accepted into the system. | MultiHostIntegrations[]
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
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
$Filters = 'id eq 2c91808b6ef1d43e016efba0ce470904' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *in*  **forSubAdminId**: *in* (optional)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$ForSubadmin = "5168015d32f890ca15812c9180835d2e" # String | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity or SOURCE_SUBADMIN identity.  The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID.  A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional)

# List All Existing Multi-Host Integrations

try {
    Get-BetaMultiHostIntegrationsList
    
    # Below is a request that includes all optional parameters
    # Get-BetaMultiHostIntegrationsList -BetaOffset $Offset -BetaLimit $Limit -BetaSorters $Sorters -BetaFilters $Filters -BetaCount $Count -BetaForSubadmin $ForSubadmin  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaMultiHostIntegrationsList"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-multi-host-source-creation-errors
Get a list of sources creation errors within Multi-Host Integration ID.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | MultiHostId | **String** | True  | ID of the Multi-Host Integration

### Return type
[**SourceCreationErrors[]**](../models/source-creation-errors)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK. Returned if the request was successfully accepted into the system. | SourceCreationErrors[]
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
$MultiHostId = "004091cb79b04636b88662afa50a4440" # String | ID of the Multi-Host Integration

# List Multi-Host Source Creation Errors

try {
    Get-BetaMultiHostSourceCreationErrors -BetaMultiHostId $MultiHostId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaMultiHostSourceCreationErrors -BetaMultiHostId $MultiHostId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaMultiHostSourceCreationErrors"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-multihost-integration-types
This API endpoint returns the current list of supported Multi-Host Integration types.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**MultiHostIntegrationTemplateType[]**](../models/multi-host-integration-template-type)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK. Returned if the request was successfully accepted into the system. | MultiHostIntegrationTemplateType[]
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

# List Multi-Host Integration Types

try {
    Get-BetaMultihostIntegrationTypes
    
    # Below is a request that includes all optional parameters
    # Get-BetaMultihostIntegrationTypes  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaMultihostIntegrationTypes"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-sources-within-multi-host
Get a list of sources within Multi-Host Integration ID.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *in*
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**MultiHostSources[]**](../models/multi-host-sources)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK. Returned if the request was successfully accepted into the system. | MultiHostSources[]
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
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
$Filters = 'id eq 2c91808b6ef1d43e016efba0ce470904' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *in* (optional)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List Sources Within Multi-Host Integration

try {
    Get-BetaSourcesWithinMultiHost
    
    # Below is a request that includes all optional parameters
    # Get-BetaSourcesWithinMultiHost -BetaOffset $Offset -BetaLimit $Limit -BetaSorters $Sorters -BetaFilters $Filters -BetaCount $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSourcesWithinMultiHost"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## test-connection-multi-host-sources
This endpoint performs a more detailed validation of the Multi-Host Integration's configuration.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | MultihostId | **String** | True  | ID of the Multi-Host Integration

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK. Returned if the request was successfully accepted into the system. | 
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
$MultihostId = "2c91808568c529c60168cca6f90c1324" # String | ID of the Multi-Host Integration

# Test Configuration For Multi-Host Integration

try {
    Test-BetaConnectionMultiHostSources -BetaMultihostId $MultihostId 
    
    # Below is a request that includes all optional parameters
    # Test-BetaConnectionMultiHostSources -BetaMultihostId $MultihostId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Test-BetaConnectionMultiHostSources"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## test-source-connection-multihost
This endpoint performs a more detailed validation of the source's configuration.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | MultihostId | **String** | True  | ID of the Multi-Host Integration
Path   | SourceId | **String** | True  | ID of the source within the Multi-Host Integration

### Return type
[**TestSourceConnectionMultihost200Response**](../models/test-source-connection-multihost200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK. Returned if the request was successfully accepted into the system. | TestSourceConnectionMultihost200Response
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
$MultihostId = "2c91808568c529c60168cca6f90c1326" # String | ID of the Multi-Host Integration
$SourceId = "2c91808568c529f60168cca6f90c1324" # String | ID of the source within the Multi-Host Integration

# Test Configuration For Multi-Host Integration's Single Source

try {
    Test-BetaSourceConnectionMultihost -BetaMultihostId $MultihostId  -BetaSourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Test-BetaSourceConnectionMultihost -BetaMultihostId $MultihostId -BetaSourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Test-BetaSourceConnectionMultihost"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## update-multi-host-sources
Update existing sources within Multi-Host Integration.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | MultihostId | **String** | True  | ID of the Multi-Host Integration to update.
 Body  | UpdateMultiHostSourcesRequestInner | [**[]UpdateMultiHostSourcesRequestInner**](../models/update-multi-host-sources-request-inner) | True  | This endpoint allows you to update a Multi-Host Integration. 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK. Returned if the request was successfully accepted into the system. | 
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
$MultihostId = "anId" # String | ID of the Multi-Host Integration to update.
 $UpdateMultiHostSourcesRequestInner = @"[{op=add, path=/description, value=MDK Multi-Host Integration 222 description}]"@ # UpdateMultiHostSourcesRequestInner[] | This endpoint allows you to update a Multi-Host Integration. 
 

# Update Multi-Host Integration

try {
    $Result = ConvertFrom-JsonToUpdateMultiHostSourcesRequestInner -Json $UpdateMultiHostSourcesRequestInner
    Update-BetaMultiHostSources -BetaMultihostId $MultihostId  -BetaUpdateMultiHostSourcesRequestInner $Result
    
    # Below is a request that includes all optional parameters
    # Update-BetaMultiHostSources -BetaMultihostId $MultihostId -BetaUpdateMultiHostSourcesRequestInner $UpdateMultiHostSourcesRequestInner  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaMultiHostSources"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
