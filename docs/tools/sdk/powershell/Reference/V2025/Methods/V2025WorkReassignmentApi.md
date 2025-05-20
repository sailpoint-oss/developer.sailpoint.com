---
id: v2025-work-reassignment
title: WorkReassignment
pagination_label: WorkReassignment
sidebar_label: WorkReassignment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkReassignment', 'V2025WorkReassignment'] 
slug: /tools/sdk/powershell/v2025/methods/work-reassignment
tags: ['SDK', 'Software Development Kit', 'WorkReassignment', 'V2025WorkReassignment']
---

# WorkReassignment
  Use this API to implement work reassignment functionality.

Work Reassignment allows access request reviews, certifications, and manual provisioning tasks assigned to a user to be reassigned to a different user. This is primarily used for:

- Temporarily redirecting work for users who are out of office, such as on vacation or sick leave
- Permanently redirecting work for users who should not be assigned these tasks at all, such as senior executives or service identities

Users can define reassignments for themselves, managers can add them for their team members, and administrators can configure them on any user’s behalf. Work assigned during the specified reassignment timeframes will be automatically reassigned to the designated user as it is created.

Refer to [Work Reassignment](https://documentation.sailpoint.com/saas/help/users/work_reassignment.html) for more information about this topic.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2025ReassignmentConfiguration**](#create-reassignment-configuration) | **POST** `/reassignment-configurations` | Create a reassignment configuration
[**Remove-V2025ReassignmentConfiguration**](#delete-reassignment-configuration) | **DELETE** `/reassignment-configurations/{identityId}/{configType}` | Delete reassignment configuration
[**Get-V2025EvaluateReassignmentConfiguration**](#get-evaluate-reassignment-configuration) | **GET** `/reassignment-configurations/{identityId}/evaluate/{configType}` | Evaluate reassignment configuration
[**Get-V2025ReassignmentConfigTypes**](#get-reassignment-config-types) | **GET** `/reassignment-configurations/types` | List reassignment config types
[**Get-V2025ReassignmentConfiguration**](#get-reassignment-configuration) | **GET** `/reassignment-configurations/{identityId}` | Get reassignment configuration
[**Get-V2025TenantConfigConfiguration**](#get-tenant-config-configuration) | **GET** `/reassignment-configurations/tenant-config` | Get tenant-wide reassignment configuration settings
[**Get-V2025ReassignmentConfigurations**](#list-reassignment-configurations) | **GET** `/reassignment-configurations` | List reassignment configurations
[**Send-V2025ReassignmentConfig**](#put-reassignment-config) | **PUT** `/reassignment-configurations/{identityId}` | Update reassignment configuration
[**Send-V2025TenantConfiguration**](#put-tenant-configuration) | **PUT** `/reassignment-configurations/tenant-config` | Update tenant-wide reassignment configuration settings


## create-reassignment-configuration
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Creates a new Reassignment Configuration for the specified identity.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-reassignment-configuration)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | ConfigurationItemRequest | [**ConfigurationItemRequest**](../models/configuration-item-request) | True  | 

### Return type
[**ConfigurationItemResponse**](../models/configuration-item-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | The newly created Reassignment Configuration object | ConfigurationItemResponse
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
$ConfigurationItemRequest = @"{
  "endDate" : "2022-07-30T17:00:00Z",
  "reassignedFromId" : "2c91808781a71ddb0181b9090b5c504e",
  "configType" : "ACCESS_REQUESTS",
  "reassignedToId" : "2c91808781a71ddb0181b9090b53504a",
  "startDate" : "2022-07-21T11:13:12.345Z"
}"@

# Create a reassignment configuration

try {
    $Result = ConvertFrom-JsonToConfigurationItemRequest -Json $ConfigurationItemRequest
    New-V2025ReassignmentConfiguration -XSailPointExperimental $XSailPointExperimental -ConfigurationItemRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2025ReassignmentConfiguration -XSailPointExperimental $XSailPointExperimental -ConfigurationItemRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2025ReassignmentConfiguration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-reassignment-configuration
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Deletes a single reassignment configuration for the specified identity

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-reassignment-configuration)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | unique identity id
Path   | ConfigType | [**ConfigTypeEnum**](../models/config-type-enum) | True  | 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | Reassignment Configuration deleted | 
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
$IdentityId = "2c91808781a71ddb0181b9090b5c504e" # String | unique identity id
$ConfigType = "ACCESS_REQUESTS" # ConfigTypeEnum | 
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Delete reassignment configuration

try {
    Remove-V2025ReassignmentConfiguration -IdentityId $IdentityId -ConfigType $ConfigType -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-V2025ReassignmentConfiguration -IdentityId $IdentityId -ConfigType $ConfigType -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2025ReassignmentConfiguration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-evaluate-reassignment-configuration
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Evaluates the Reassignment Configuration for an `Identity` to determine if work items for the specified type should be reassigned. If a valid Reassignment Configuration is found for the identity & work type, then a lookup is initiated which recursively fetches the Reassignment Configuration for the next `TargetIdentity` until no more results are found or a max depth of 5. That lookup trail is provided in the response and the final reassigned identity in the lookup list is returned as the `reassignToId` property. If no Reassignment Configuration is found for the specified identity & config type then the requested Identity ID will be used as the `reassignToId` value and the lookupTrail node will be empty.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-evaluate-reassignment-configuration)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | unique identity id
Path   | ConfigType | [**ConfigTypeEnum**](../models/config-type-enum) | True  | Reassignment work type
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | ExclusionFilters | **[]String** |   (optional) | Exclusion filters that disable parts of the reassignment evaluation. Possible values are listed below: - `SELF_REVIEW_DELEGATION`: This will exclude delegations of self-review reassignments

### Return type
[**EvaluateResponse[]**](../models/evaluate-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Evaluated Reassignment Configuration | EvaluateResponse[]
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
$IdentityId = "2c91808781a71ddb0181b9090b5c504e" # String | unique identity id
$ConfigType = "ACCESS_REQUESTS" # ConfigTypeEnum | Reassignment work type
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$ExclusionFilters = "MyExclusionFilters" # String[] | Exclusion filters that disable parts of the reassignment evaluation. Possible values are listed below: - `SELF_REVIEW_DELEGATION`: This will exclude delegations of self-review reassignments (optional)

$ExclusionFilters = @"SELF_REVIEW_DELEGATION"@ # String[] | Exclusion filters that disable parts of the reassignment evaluation. Possible values are listed below: - `SELF_REVIEW_DELEGATION`: This will exclude delegations of self-review reassignments (optional) 

# Evaluate reassignment configuration

try {
    Get-V2025EvaluateReassignmentConfiguration -IdentityId $IdentityId -ConfigType $ConfigType -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025EvaluateReassignmentConfiguration -IdentityId $IdentityId -ConfigType $ConfigType -XSailPointExperimental $XSailPointExperimental -ExclusionFilters $ExclusionFilters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025EvaluateReassignmentConfiguration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-reassignment-config-types
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Gets a collection of types which are available in the Reassignment Configuration UI.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-reassignment-config-types)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**ConfigType[]**](../models/config-type)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Reassignment Configuration Types | ConfigType[]
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

# List reassignment config types

try {
    Get-V2025ReassignmentConfigTypes -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025ReassignmentConfigTypes -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025ReassignmentConfigTypes"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-reassignment-configuration
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Gets the Reassignment Configuration for an identity.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-reassignment-configuration)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | unique identity id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**ConfigurationResponse**](../models/configuration-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reassignment Configuration for an identity | ConfigurationResponse
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
$IdentityId = "2c91808781a71ddb0181b9090b5c504f" # String | unique identity id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get reassignment configuration

try {
    Get-V2025ReassignmentConfiguration -IdentityId $IdentityId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025ReassignmentConfiguration -IdentityId $IdentityId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025ReassignmentConfiguration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-tenant-config-configuration
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Gets the global Reassignment Configuration settings for the requestor's tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-tenant-config-configuration)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**TenantConfigurationResponse**](../models/tenant-configuration-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Tenant-wide Reassignment Configuration settings | TenantConfigurationResponse
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get tenant-wide reassignment configuration settings

try {
    Get-V2025TenantConfigConfiguration -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025TenantConfigConfiguration -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025TenantConfigConfiguration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-reassignment-configurations
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Gets all Reassignment configuration for the current org.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-reassignment-configurations)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**ConfigurationResponse[]**](../models/configuration-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of Reassignment Configurations for an org | ConfigurationResponse[]
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# List reassignment configurations

try {
    Get-V2025ReassignmentConfigurations -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025ReassignmentConfigurations -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025ReassignmentConfigurations"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-reassignment-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Replaces existing Reassignment configuration for an identity with the newly provided configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/put-reassignment-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | unique identity id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | ConfigurationItemRequest | [**ConfigurationItemRequest**](../models/configuration-item-request) | True  | 

### Return type
[**ConfigurationItemResponse**](../models/configuration-item-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reassignment Configuration updated | ConfigurationItemResponse
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
$IdentityId = "2c91808781a71ddb0181b9090b5c504e" # String | unique identity id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$ConfigurationItemRequest = @"{
  "endDate" : "2022-07-30T17:00:00Z",
  "reassignedFromId" : "2c91808781a71ddb0181b9090b5c504e",
  "configType" : "ACCESS_REQUESTS",
  "reassignedToId" : "2c91808781a71ddb0181b9090b53504a",
  "startDate" : "2022-07-21T11:13:12.345Z"
}"@

# Update reassignment configuration

try {
    $Result = ConvertFrom-JsonToConfigurationItemRequest -Json $ConfigurationItemRequest
    Send-V2025ReassignmentConfig -IdentityId $IdentityId -XSailPointExperimental $XSailPointExperimental -ConfigurationItemRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Send-V2025ReassignmentConfig -IdentityId $IdentityId -XSailPointExperimental $XSailPointExperimental -ConfigurationItemRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-V2025ReassignmentConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-tenant-configuration
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Replaces existing Tenant-wide Reassignment Configuration settings with the newly provided settings.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/put-tenant-configuration)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | TenantConfigurationRequest | [**TenantConfigurationRequest**](../models/tenant-configuration-request) | True  | 

### Return type
[**TenantConfigurationResponse**](../models/tenant-configuration-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Tenant-wide Reassignment Configuration settings | TenantConfigurationResponse
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
$TenantConfigurationRequest = @"{
  "configDetails" : {
    "disabled" : true
  }
}"@

# Update tenant-wide reassignment configuration settings

try {
    $Result = ConvertFrom-JsonToTenantConfigurationRequest -Json $TenantConfigurationRequest
    Send-V2025TenantConfiguration -XSailPointExperimental $XSailPointExperimental -TenantConfigurationRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Send-V2025TenantConfiguration -XSailPointExperimental $XSailPointExperimental -TenantConfigurationRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-V2025TenantConfiguration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
