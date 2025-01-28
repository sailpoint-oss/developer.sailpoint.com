---
id: global-tenant-security-settings
title: GlobalTenantSecuritySettings
pagination_label: GlobalTenantSecuritySettings
sidebar_label: GlobalTenantSecuritySettings
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GlobalTenantSecuritySettings'] 
slug: /tools/sdk/powershell/v3/methods/global-tenant-security-settings
tags: ['SDK', 'Software Development Kit', 'GlobalTenantSecuritySettings']
---


# GlobalTenantSecuritySettings

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-AuthOrgNetworkConfig**](#create-auth-org-network-config) | **POST** `/auth-org/network-config` | Create security network configuration.
[**Get-AuthOrgLockoutConfig**](#get-auth-org-lockout-config) | **GET** `/auth-org/lockout-config` | Get Auth Org Lockout Configuration.
[**Get-AuthOrgNetworkConfig**](#get-auth-org-network-config) | **GET** `/auth-org/network-config` | Get security network configuration.
[**Get-AuthOrgServiceProviderConfig**](#get-auth-org-service-provider-config) | **GET** `/auth-org/service-provider-config` | Get Service Provider Configuration.
[**Get-AuthOrgSessionConfig**](#get-auth-org-session-config) | **GET** `/auth-org/session-config` | Get Auth Org Session Configuration.
[**Update-AuthOrgLockoutConfig**](#patch-auth-org-lockout-config) | **PATCH** `/auth-org/lockout-config` | Update Auth Org Lockout Configuration
[**Update-AuthOrgNetworkConfig**](#patch-auth-org-network-config) | **PATCH** `/auth-org/network-config` | Update security network configuration.
[**Update-AuthOrgServiceProviderConfig**](#patch-auth-org-service-provider-config) | **PATCH** `/auth-org/service-provider-config` | Update Service Provider Configuration
[**Update-AuthOrgSessionConfig**](#patch-auth-org-session-config) | **PATCH** `/auth-org/session-config` | Update Auth Org Session Configuration


## create-auth-org-network-config

This API returns the details of an org's network auth configuration. Requires security scope of: 'sp:auth-org:manage'

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | NetworkConfiguration | [**NetworkConfiguration**](../models/network-configuration) | True  | Network configuration creation request body.   The following constraints ensure the request body conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.

### Return type

[**NetworkConfiguration**](../models/network-configuration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Network configuration for the tenant. | NetworkConfiguration
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$NetworkConfiguration = @"{
  "range" : [ "1.3.7.2", "255.255.255.252/30" ],
  "whitelisted" : true,
  "geolocation" : [ "CA", "FR", "HT" ]
}"@
# Create security network configuration.
try {
    $Result = ConvertFrom-JsonToNetworkConfiguration -Json $NetworkConfiguration
    New-AuthOrgNetworkConfig-NetworkConfiguration $Result
    
    # Below is a request that includes all optional parameters
    # New-AuthOrgNetworkConfig -NetworkConfiguration $NetworkConfiguration  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-AuthOrgNetworkConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-auth-org-lockout-config

This API returns the details of an org's lockout auth configuration.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type

[**LockoutConfiguration**](../models/lockout-configuration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Lockout configuration for the tenant&#39;s auth org. | LockoutConfiguration
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
# Get Auth Org Lockout Configuration.
try {
    Get-AuthOrgLockoutConfig
    
    # Below is a request that includes all optional parameters
    # Get-AuthOrgLockoutConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AuthOrgLockoutConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-auth-org-network-config

This API returns the details of an org's network auth configuration.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type

[**NetworkConfiguration**](../models/network-configuration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Network configuration for the tenant&#39;s auth org. | NetworkConfiguration
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
# Get security network configuration.
try {
    Get-AuthOrgNetworkConfig
    
    # Below is a request that includes all optional parameters
    # Get-AuthOrgNetworkConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AuthOrgNetworkConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-auth-org-service-provider-config

This API returns the details of an org's service provider auth configuration.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type

[**ServiceProviderConfiguration**](../models/service-provider-configuration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Service provider configuration for the tenant. | ServiceProviderConfiguration
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
# Get Service Provider Configuration.
try {
    Get-AuthOrgServiceProviderConfig
    
    # Below is a request that includes all optional parameters
    # Get-AuthOrgServiceProviderConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AuthOrgServiceProviderConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-auth-org-session-config

This API returns the details of an org's session auth configuration.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type

[**SessionConfiguration**](../models/session-configuration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Session configuration for the tenant&#39;s auth org. | SessionConfiguration
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
# Get Auth Org Session Configuration.
try {
    Get-AuthOrgSessionConfig
    
    # Below is a request that includes all optional parameters
    # Get-AuthOrgSessionConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AuthOrgSessionConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## patch-auth-org-lockout-config

This API updates an existing lockout configuration for an org using PATCH


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of auth org lockout configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Lockout Config conforms to certain logical guidelines, which are:   `1. maximumAttempts >= 1 && maximumAttempts <= 15   2. lockoutDuration >= 5 && lockoutDuration <= 60   3. lockoutWindow >= 5 && lockoutDuration <= 60`

### Return type

[**LockoutConfiguration**](../models/lockout-configuration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated Auth Org lockout configuration. | LockoutConfiguration
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
 # JsonPatchOperation[] | A list of auth org lockout configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Lockout Config conforms to certain logical guidelines, which are:   `1. maximumAttempts >= 1 && maximumAttempts <= 15   2. lockoutDuration >= 5 && lockoutDuration <= 60   3. lockoutWindow >= 5 && lockoutDuration <= 60`
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ 

# Update Auth Org Lockout Configuration
try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-AuthOrgLockoutConfig-JsonPatchOperation $Result
    
    # Below is a request that includes all optional parameters
    # Update-AuthOrgLockoutConfig -JsonPatchOperation $JsonPatchOperation  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-AuthOrgLockoutConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## patch-auth-org-network-config

This API updates an existing network configuration for an org using PATCH
 Requires security scope of:  'sp:auth-org:manage'

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of auth org network configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Network Config conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.

### Return type

[**NetworkConfiguration**](../models/network-configuration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated Auth Org network configuration. | NetworkConfiguration
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
 # JsonPatchOperation[] | A list of auth org network configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Network Config conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ 

# Update security network configuration.
try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-AuthOrgNetworkConfig-JsonPatchOperation $Result
    
    # Below is a request that includes all optional parameters
    # Update-AuthOrgNetworkConfig -JsonPatchOperation $JsonPatchOperation  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-AuthOrgNetworkConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## patch-auth-org-service-provider-config

This API updates an existing service provider configuration for an org using PATCH.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of auth org service provider configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Note: /federationProtocolDetails/0 is IdpDetails /federationProtocolDetails/1 is SpDetails Ensures that the patched ServiceProviderConfig conforms to certain logical guidelines, which are:   1. Do not add or remove any elements in the federation protocol details in the service provider configuration.   2. Do not modify, add, or delete the service provider details element in the federation protocol details.   3. If this is the first time the patched ServiceProviderConfig enables Remote IDP sign-in, it must also include IDPDetails.   4. If the patch enables Remote IDP sign in, the entityID in the IDPDetails cannot be null. IDPDetails must include an entityID.   5. Any JIT configuration update must be valid.  Just in time configuration update must be valid when enabled. This includes:   - A Source ID   - Source attribute mappings   - Source attribute maps have all the required key values (firstName, lastName, email)

### Return type

[**ServiceProviderConfiguration**](../models/service-provider-configuration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Auth Org Service Provider configuration updated. | ServiceProviderConfiguration
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
 # JsonPatchOperation[] | A list of auth org service provider configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Note: /federationProtocolDetails/0 is IdpDetails /federationProtocolDetails/1 is SpDetails Ensures that the patched ServiceProviderConfig conforms to certain logical guidelines, which are:   1. Do not add or remove any elements in the federation protocol details in the service provider configuration.   2. Do not modify, add, or delete the service provider details element in the federation protocol details.   3. If this is the first time the patched ServiceProviderConfig enables Remote IDP sign-in, it must also include IDPDetails.   4. If the patch enables Remote IDP sign in, the entityID in the IDPDetails cannot be null. IDPDetails must include an entityID.   5. Any JIT configuration update must be valid.  Just in time configuration update must be valid when enabled. This includes:   - A Source ID   - Source attribute mappings   - Source attribute maps have all the required key values (firstName, lastName, email)
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ 

# Update Service Provider Configuration
try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-AuthOrgServiceProviderConfig-JsonPatchOperation $Result
    
    # Below is a request that includes all optional parameters
    # Update-AuthOrgServiceProviderConfig -JsonPatchOperation $JsonPatchOperation  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-AuthOrgServiceProviderConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## patch-auth-org-session-config

This API updates an existing session configuration for an org using PATCH.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of auth org session configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Ensures that the patched Session Config conforms to certain logical guidelines, which are:   `1. maxSessionTime >= 1 && maxSessionTime <= 10080 (1 week)   2. maxIdleTime >= 1 && maxIdleTime <= 1440 (1 day)   3. maxSessionTime must have a greater duration than maxIdleTime.` 

### Return type

[**SessionConfiguration**](../models/session-configuration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated Auth Org session configuration. | SessionConfiguration
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
 # JsonPatchOperation[] | A list of auth org session configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Ensures that the patched Session Config conforms to certain logical guidelines, which are:   `1. maxSessionTime >= 1 && maxSessionTime <= 10080 (1 week)   2. maxIdleTime >= 1 && maxIdleTime <= 1440 (1 day)   3. maxSessionTime must have a greater duration than maxIdleTime.` 
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ 

# Update Auth Org Session Configuration
try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-AuthOrgSessionConfig-JsonPatchOperation $Result
    
    # Below is a request that includes all optional parameters
    # Update-AuthOrgSessionConfig -JsonPatchOperation $JsonPatchOperation  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-AuthOrgSessionConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


