---
id: global-tenant-security-settings
title: GlobalTenantSecuritySettings
pagination_label: GlobalTenantSecuritySettings
sidebar_label: GlobalTenantSecuritySettings
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GlobalTenantSecuritySettings', 'GlobalTenantSecuritySettings'] 
slug: /tools/sdk/powershell/globaltenantsecuritysettings/methods/global-tenant-security-settings
tags: ['SDK', 'Software Development Kit', 'GlobalTenantSecuritySettings', 'GlobalTenantSecuritySettings']
---

# GlobalTenantSecuritySettings
  Use this API to implement and customize global tenant security settings.
With this functionality in place, administrators can manage the global security settings that a tenant/org has.
This API can be used to configure the networks and Geographies allowed to access Identity Security Cloud URLs.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-AuthOrgNetworkConfigV1**](#create-auth-org-network-config-v1) | **POST** `/auth-org/v1/network-config` | Create security network configuration.
[**Get-AuthOrgLockoutConfigV1**](#get-auth-org-lockout-config-v1) | **GET** `/auth-org/v1/lockout-config` | Get auth org lockout configuration.
[**Get-AuthOrgNetworkConfigV1**](#get-auth-org-network-config-v1) | **GET** `/auth-org/v1/network-config` | Get security network configuration.
[**Get-AuthOrgServiceProviderConfigV1**](#get-auth-org-service-provider-config-v1) | **GET** `/auth-org/v1/service-provider-config` | Get service provider configuration.
[**Get-AuthOrgSessionConfigV1**](#get-auth-org-session-config-v1) | **GET** `/auth-org/v1/session-config` | Get auth org session configuration.
[**Update-AuthOrgLockoutConfigV1**](#patch-auth-org-lockout-config-v1) | **PATCH** `/auth-org/v1/lockout-config` | Update auth org lockout configuration
[**Update-AuthOrgNetworkConfigV1**](#patch-auth-org-network-config-v1) | **PATCH** `/auth-org/v1/network-config` | Update security network configuration.
[**Update-AuthOrgServiceProviderConfigV1**](#patch-auth-org-service-provider-config-v1) | **PATCH** `/auth-org/v1/service-provider-config` | Update service provider configuration
[**Update-AuthOrgSessionConfigV1**](#patch-auth-org-session-config-v1) | **PATCH** `/auth-org/v1/session-config` | Update auth org session configuration


## create-auth-org-network-config-v1
This API returns the details of an org's network auth configuration. Requires security scope of: 'sp:auth-org:manage'

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-auth-org-network-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Networkconfiguration | [**Networkconfiguration**](../models/networkconfiguration) | True  | Network configuration creation request body.   The following constraints ensure the request body conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.

### Return type
[**Networkconfiguration**](../models/networkconfiguration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Network configuration for the tenant. | Networkconfiguration
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAuthOrgNetworkConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAuthOrgNetworkConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Networkconfiguration = @""@

# Create security network configuration.

try {
    $Result = ConvertFrom-JsonToNetworkconfiguration -Json $Networkconfiguration
    New-AuthOrgNetworkConfigV1 -Networkconfiguration $Result 
    
    # Below is a request that includes all optional parameters
    # New-AuthOrgNetworkConfigV1 -Networkconfiguration $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-AuthOrgNetworkConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-auth-org-lockout-config-v1
This API returns the details of an org's lockout auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-auth-org-lockout-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**Lockoutconfiguration**](../models/lockoutconfiguration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Lockout configuration for the tenant&#39;s auth org. | Lockoutconfiguration
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAuthOrgNetworkConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAuthOrgNetworkConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Get auth org lockout configuration.

try {
    Get-AuthOrgLockoutConfigV1 
    
    # Below is a request that includes all optional parameters
    # Get-AuthOrgLockoutConfigV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AuthOrgLockoutConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-auth-org-network-config-v1
This API returns the details of an org's network auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-auth-org-network-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**Networkconfiguration**](../models/networkconfiguration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Network configuration for the tenant&#39;s auth org. | Networkconfiguration
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAuthOrgNetworkConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAuthOrgNetworkConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Get security network configuration.

try {
    Get-AuthOrgNetworkConfigV1 
    
    # Below is a request that includes all optional parameters
    # Get-AuthOrgNetworkConfigV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AuthOrgNetworkConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-auth-org-service-provider-config-v1
This API returns the details of an org's service provider auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-auth-org-service-provider-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**Serviceproviderconfiguration**](../models/serviceproviderconfiguration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Service provider configuration for the tenant. | Serviceproviderconfiguration
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAuthOrgNetworkConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAuthOrgNetworkConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Get service provider configuration.

try {
    Get-AuthOrgServiceProviderConfigV1 
    
    # Below is a request that includes all optional parameters
    # Get-AuthOrgServiceProviderConfigV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AuthOrgServiceProviderConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-auth-org-session-config-v1
This API returns the details of an org's session auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-auth-org-session-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**Sessionconfiguration**](../models/sessionconfiguration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Session configuration for the tenant&#39;s auth org. | Sessionconfiguration
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAuthOrgNetworkConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAuthOrgNetworkConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Get auth org session configuration.

try {
    Get-AuthOrgSessionConfigV1 
    
    # Below is a request that includes all optional parameters
    # Get-AuthOrgSessionConfigV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AuthOrgSessionConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-auth-org-lockout-config-v1
This API updates an existing lockout configuration for an org using PATCH


[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-auth-org-lockout-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of auth org lockout configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Lockout Config conforms to certain logical guidelines, which are:   `1. maximumAttempts >= 1 && maximumAttempts <= 15   2. lockoutDuration >= 5 && lockoutDuration <= 60   3. lockoutWindow >= 5 && lockoutDuration <= 60`

### Return type
[**Lockoutconfiguration**](../models/lockoutconfiguration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated Auth Org lockout configuration. | Lockoutconfiguration
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAuthOrgNetworkConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAuthOrgNetworkConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
 $Jsonpatchoperation = @"[{"op":"replace","path":"/maximumAttempts","value":"7,"},{"op":"add","path":"/lockoutDuration","value":35}]"@ # Jsonpatchoperation[] | A list of auth org lockout configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Lockout Config conforms to certain logical guidelines, which are:   `1. maximumAttempts >= 1 && maximumAttempts <= 15   2. lockoutDuration >= 5 && lockoutDuration <= 60   3. lockoutWindow >= 5 && lockoutDuration <= 60`
 

# Update auth org lockout configuration

try {
    $Result = ConvertFrom-JsonToJsonpatchoperation -Json $Jsonpatchoperation
    Update-AuthOrgLockoutConfigV1 -Jsonpatchoperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-AuthOrgLockoutConfigV1 -Jsonpatchoperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-AuthOrgLockoutConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-auth-org-network-config-v1
This API updates an existing network configuration for an org using PATCH
 Requires security scope of:  'sp:auth-org:manage'

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-auth-org-network-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of auth org network configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Network Config conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.

### Return type
[**Networkconfiguration**](../models/networkconfiguration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated Auth Org network configuration. | Networkconfiguration
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAuthOrgNetworkConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAuthOrgNetworkConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
 $Jsonpatchoperation = @"[{"op":"replace","path":"/whitelisted","value":"false,"},{"op":"add","path":"/geolocation","value":["AF","HN","ES"]}]"@ # Jsonpatchoperation[] | A list of auth org network configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Network Config conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.
 

# Update security network configuration.

try {
    $Result = ConvertFrom-JsonToJsonpatchoperation -Json $Jsonpatchoperation
    Update-AuthOrgNetworkConfigV1 -Jsonpatchoperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-AuthOrgNetworkConfigV1 -Jsonpatchoperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-AuthOrgNetworkConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-auth-org-service-provider-config-v1
This API updates an existing service provider configuration for an org using PATCH.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-auth-org-service-provider-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of auth org service provider configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Note: /federationProtocolDetails/0 is IdpDetails /federationProtocolDetails/1 is SpDetails Ensures that the patched ServiceProviderConfig conforms to certain logical guidelines, which are:   1. Do not add or remove any elements in the federation protocol details in the service provider configuration.   2. Do not modify, add, or delete the service provider details element in the federation protocol details.   3. If this is the first time the patched ServiceProviderConfig enables Remote IDP sign-in, it must also include IDPDetails.   4. If the patch enables Remote IDP sign in, the entityID in the IDPDetails cannot be null. IDPDetails must include an entityID.   5. Any JIT configuration update must be valid.  Just in time configuration update must be valid when enabled. This includes:   - A Source ID   - Source attribute mappings   - Source attribute maps have all the required key values (firstName, lastName, email)

### Return type
[**Serviceproviderconfiguration**](../models/serviceproviderconfiguration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Auth Org Service Provider configuration updated. | Serviceproviderconfiguration
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAuthOrgNetworkConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAuthOrgNetworkConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
 $Jsonpatchoperation = @"[{"op":"replace","path":"/enabled","value":"true,"},{"op":"add","path":"/federationProtocolDetails/0/jitConfiguration","value":{"enabled":true,"sourceId":"2c9180857377ed2901739c12a2da5ac8","sourceAttributeMappings":{"firstName":"okta.firstName","lastName":"okta.lastName","email":"okta.email","employeeNumber":"okta.employeeNumber"}}}]"@ # Jsonpatchoperation[] | A list of auth org service provider configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Note: /federationProtocolDetails/0 is IdpDetails /federationProtocolDetails/1 is SpDetails Ensures that the patched ServiceProviderConfig conforms to certain logical guidelines, which are:   1. Do not add or remove any elements in the federation protocol details in the service provider configuration.   2. Do not modify, add, or delete the service provider details element in the federation protocol details.   3. If this is the first time the patched ServiceProviderConfig enables Remote IDP sign-in, it must also include IDPDetails.   4. If the patch enables Remote IDP sign in, the entityID in the IDPDetails cannot be null. IDPDetails must include an entityID.   5. Any JIT configuration update must be valid.  Just in time configuration update must be valid when enabled. This includes:   - A Source ID   - Source attribute mappings   - Source attribute maps have all the required key values (firstName, lastName, email)
 

# Update service provider configuration

try {
    $Result = ConvertFrom-JsonToJsonpatchoperation -Json $Jsonpatchoperation
    Update-AuthOrgServiceProviderConfigV1 -Jsonpatchoperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-AuthOrgServiceProviderConfigV1 -Jsonpatchoperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-AuthOrgServiceProviderConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-auth-org-session-config-v1
This API updates an existing session configuration for an org using PATCH.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-auth-org-session-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of auth org session configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Ensures that the patched Session Config conforms to certain logical guidelines, which are:   `1. maxSessionTime >= 1 && maxSessionTime <= 10080 (1 week)   2. maxIdleTime >= 1 && maxIdleTime <= 1440 (1 day)   3. maxSessionTime must have a greater duration than maxIdleTime.` 

### Return type
[**Sessionconfiguration**](../models/sessionconfiguration)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated Auth Org session configuration. | Sessionconfiguration
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAuthOrgNetworkConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAuthOrgNetworkConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
 $Jsonpatchoperation = @"[{"op":"replace","path":"/rememberMe","value":"true,"},{"op":"add","path":"/maxSessionTime","value":480}]"@ # Jsonpatchoperation[] | A list of auth org session configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Ensures that the patched Session Config conforms to certain logical guidelines, which are:   `1. maxSessionTime >= 1 && maxSessionTime <= 10080 (1 week)   2. maxIdleTime >= 1 && maxIdleTime <= 1440 (1 day)   3. maxSessionTime must have a greater duration than maxIdleTime.` 
 

# Update auth org session configuration

try {
    $Result = ConvertFrom-JsonToJsonpatchoperation -Json $Jsonpatchoperation
    Update-AuthOrgSessionConfigV1 -Jsonpatchoperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-AuthOrgSessionConfigV1 -Jsonpatchoperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-AuthOrgSessionConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
