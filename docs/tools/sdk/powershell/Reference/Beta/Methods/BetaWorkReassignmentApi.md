---
id: beta-work-reassignment
title: WorkReassignment
pagination_label: WorkReassignment
sidebar_label: WorkReassignment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkReassignment', 'BetaWorkReassignment'] 
slug: /tools/sdk/powershell/beta/methods/work-reassignment
tags: ['SDK', 'Software Development Kit', 'WorkReassignment', 'BetaWorkReassignment']
---

# WorkReassignment
  Use this API to implement work reassignment functionality.

Work Reassignment allows access request reviews, certifications, and manual provisioning tasks assigned to a user to be reassigned to a different user. This is primarily used for:

- Temporarily redirecting work for users who are out of office, such as on vacation or sick leave
- Permanently redirecting work for users who should not be assigned these tasks at all, such as senior executives or service identities

Users can define reassignments for themselves, managers can add them for their team members, and administrators can configure them on any user’s behalf. Work assigned during the specified reassignment timeframes will be automatically reassigned to the designated user as it is created.

Refer to [Work Reassignment](https://documentation.sailpoint.com/saas/help/users/work_reassignment.html) for more information about this topic.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BetaReassignmentConfiguration**](#create-reassignment-configuration) | **POST** `/reassignment-configurations` | Create a reassignment configuration
[**Remove-BetaReassignmentConfiguration**](#delete-reassignment-configuration) | **DELETE** `/reassignment-configurations/{identityId}/{configType}` | Delete reassignment configuration
[**Get-BetaEvaluateReassignmentConfiguration**](#get-evaluate-reassignment-configuration) | **GET** `/reassignment-configurations/{identityId}/evaluate/{configType}` | Evaluate reassignment configuration
[**Get-BetaReassignmentConfigTypes**](#get-reassignment-config-types) | **GET** `/reassignment-configurations/types` | List reassignment config types
[**Get-BetaReassignmentConfiguration**](#get-reassignment-configuration) | **GET** `/reassignment-configurations/{identityId}` | Get reassignment configuration
[**Get-BetaTenantConfigConfiguration**](#get-tenant-config-configuration) | **GET** `/reassignment-configurations/tenant-config` | Get tenant-wide reassignment configuration settings
[**Get-BetaReassignmentConfigurations**](#list-reassignment-configurations) | **GET** `/reassignment-configurations` | List reassignment configurations
[**Send-BetaReassignmentConfig**](#put-reassignment-config) | **PUT** `/reassignment-configurations/{identityId}` | Update reassignment configuration
[**Send-BetaTenantConfiguration**](#put-tenant-configuration) | **PUT** `/reassignment-configurations/tenant-config` | Update tenant-wide reassignment configuration settings


## create-reassignment-configuration
Creates a new Reassignment Configuration for the specified identity.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-reassignment-configuration)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | ConfigurationItemRequest | [**ConfigurationItemRequest**](../models/configuration-item-request) | True  | 

### Return type
[**ConfigurationItemResponse**](../models/configuration-item-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | The newly created Reassignment Configuration object | ConfigurationItemResponse
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
$ConfigurationItemRequest = @"{
  "endDate" : "2022-07-30T17:00:00Z",
  "reassignedFromId" : "2c91808781a71ddb0181b9090b5c504e",
  "configType" : "ACCESS_REQUESTS",
  "reassignedToId" : "2c91808781a71ddb0181b9090b53504a",
  "startDate" : "2022-07-21T11:13:12.345Z"
}"@

# Create a reassignment configuration

try {
    $Result = ConvertFrom-BetaJsonToConfigurationItemRequest -Json $ConfigurationItemRequest
    New-BetaReassignmentConfiguration -ConfigurationItemRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-BetaReassignmentConfiguration -ConfigurationItemRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaReassignmentConfiguration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-reassignment-configuration
Deletes a single reassignment configuration for the specified identity

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-reassignment-configuration)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | unique identity id
Path   | ConfigType | [**ConfigTypeEnum**](../models/config-type-enum) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | Reassignment Configuration deleted | 
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
$IdentityId = "2c91808781a71ddb0181b9090b5c504e" # String | unique identity id
$ConfigType = "ACCESS_REQUESTS" # ConfigTypeEnum | 

# Delete reassignment configuration

try {
    Remove-BetaReassignmentConfiguration -IdentityId $IdentityId -ConfigType $ConfigType 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaReassignmentConfiguration -IdentityId $IdentityId -ConfigType $ConfigType  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaReassignmentConfiguration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-evaluate-reassignment-configuration
Evaluates the Reassignment Configuration for an `Identity` to determine if work items for the specified type should be reassigned. If a valid Reassignment Configuration is found for the identity & work type, then a lookup is initiated which recursively fetches the Reassignment Configuration for the next `TargetIdentity` until no more results are found or a max depth of 5. That lookup trail is provided in the response and the final reassigned identity in the lookup list is returned as the `reassignToId` property. If no Reassignment Configuration is found for the specified identity & config type then the requested Identity ID will be used as the `reassignToId` value and the lookupTrail node will be empty.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-evaluate-reassignment-configuration)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | unique identity id
Path   | ConfigType | [**ConfigTypeEnum**](../models/config-type-enum) | True  | Reassignment work type
  Query | ExclusionFilters | **[]String** |   (optional) | Exclusion filters that disable parts of the reassignment evaluation. Possible values are listed below: - `SELF_REVIEW_DELEGATION`: This will exclude delegations of self-review reassignments

### Return type
[**EvaluateResponse[]**](../models/evaluate-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Evaluated Reassignment Configuration | EvaluateResponse[]
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
$IdentityId = "2c91808781a71ddb0181b9090b5c504e" # String | unique identity id
$ConfigType = "ACCESS_REQUESTS" # ConfigTypeEnum | Reassignment work type
$ExclusionFilters = "MyExclusionFilters" # String[] | Exclusion filters that disable parts of the reassignment evaluation. Possible values are listed below: - `SELF_REVIEW_DELEGATION`: This will exclude delegations of self-review reassignments (optional)

$ExclusionFilters = @"SELF_REVIEW_DELEGATION"@ # String[] | Exclusion filters that disable parts of the reassignment evaluation. Possible values are listed below: - `SELF_REVIEW_DELEGATION`: This will exclude delegations of self-review reassignments (optional) 

# Evaluate reassignment configuration

try {
    Get-BetaEvaluateReassignmentConfiguration -IdentityId $IdentityId -ConfigType $ConfigType 
    
    # Below is a request that includes all optional parameters
    # Get-BetaEvaluateReassignmentConfiguration -IdentityId $IdentityId -ConfigType $ConfigType -ExclusionFilters $ExclusionFilters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaEvaluateReassignmentConfiguration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-reassignment-config-types
Gets a collection of types which are available in the Reassignment Configuration UI.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-reassignment-config-types)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**ConfigType[]**](../models/config-type)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Reassignment Configuration Types | ConfigType[]
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

# List reassignment config types

try {
    Get-BetaReassignmentConfigTypes 
    
    # Below is a request that includes all optional parameters
    # Get-BetaReassignmentConfigTypes  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaReassignmentConfigTypes"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-reassignment-configuration
Gets the Reassignment Configuration for an identity.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-reassignment-configuration)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | unique identity id

### Return type
[**ConfigurationResponse**](../models/configuration-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reassignment Configuration for an identity | ConfigurationResponse
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
$IdentityId = "2c91808781a71ddb0181b9090b5c504f" # String | unique identity id

# Get reassignment configuration

try {
    Get-BetaReassignmentConfiguration -IdentityId $IdentityId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaReassignmentConfiguration -IdentityId $IdentityId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaReassignmentConfiguration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-tenant-config-configuration
Gets the global Reassignment Configuration settings for the requestor's tenant.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-tenant-config-configuration)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**TenantConfigurationResponse**](../models/tenant-configuration-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Tenant-wide Reassignment Configuration settings | TenantConfigurationResponse
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

# Get tenant-wide reassignment configuration settings

try {
    Get-BetaTenantConfigConfiguration 
    
    # Below is a request that includes all optional parameters
    # Get-BetaTenantConfigConfiguration  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaTenantConfigConfiguration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-reassignment-configurations
Gets all Reassignment configuration for the current org.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-reassignment-configurations)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 20) | Max number of results to return.
  Query | Offset | **Int32** |   (optional) | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified.

### Return type
[**ConfigurationResponse[]**](../models/configuration-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of Reassignment Configurations for an org | ConfigurationResponse[]
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
$Limit = 20 # Int32 | Max number of results to return. (optional) (default to 20)
$Offset = 10 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional)

# List reassignment configurations

try {
    Get-BetaReassignmentConfigurations 
    
    # Below is a request that includes all optional parameters
    # Get-BetaReassignmentConfigurations -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaReassignmentConfigurations"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-reassignment-config
Replaces existing Reassignment configuration for an identity with the newly provided configuration.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-reassignment-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | unique identity id
 Body  | ConfigurationItemRequest | [**ConfigurationItemRequest**](../models/configuration-item-request) | True  | 

### Return type
[**ConfigurationItemResponse**](../models/configuration-item-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reassignment Configuration updated | ConfigurationItemResponse
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
$IdentityId = "2c91808781a71ddb0181b9090b5c504e" # String | unique identity id
$ConfigurationItemRequest = @"{
  "endDate" : "2022-07-30T17:00:00Z",
  "reassignedFromId" : "2c91808781a71ddb0181b9090b5c504e",
  "configType" : "ACCESS_REQUESTS",
  "reassignedToId" : "2c91808781a71ddb0181b9090b53504a",
  "startDate" : "2022-07-21T11:13:12.345Z"
}"@

# Update reassignment configuration

try {
    $Result = ConvertFrom-BetaJsonToConfigurationItemRequest -Json $ConfigurationItemRequest
    Send-BetaReassignmentConfig -IdentityId $IdentityId -ConfigurationItemRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Send-BetaReassignmentConfig -IdentityId $IdentityId -ConfigurationItemRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaReassignmentConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-tenant-configuration
Replaces existing Tenant-wide Reassignment Configuration settings with the newly provided settings.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-tenant-configuration)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | TenantConfigurationRequest | [**TenantConfigurationRequest**](../models/tenant-configuration-request) | True  | 

### Return type
[**TenantConfigurationResponse**](../models/tenant-configuration-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Tenant-wide Reassignment Configuration settings | TenantConfigurationResponse
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
$TenantConfigurationRequest = @"{
  "configDetails" : {
    "disabled" : true
  }
}"@

# Update tenant-wide reassignment configuration settings

try {
    $Result = ConvertFrom-BetaJsonToTenantConfigurationRequest -Json $TenantConfigurationRequest
    Send-BetaTenantConfiguration -TenantConfigurationRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Send-BetaTenantConfiguration -TenantConfigurationRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaTenantConfiguration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
