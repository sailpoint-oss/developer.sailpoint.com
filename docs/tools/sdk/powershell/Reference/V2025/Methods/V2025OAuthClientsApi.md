---
id: v2025-o-auth-clients
title: OAuthClients
pagination_label: OAuthClients
sidebar_label: OAuthClients
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'OAuthClients', 'V2025OAuthClients'] 
slug: /tools/sdk/powershell/v2025/methods/o-auth-clients
tags: ['SDK', 'Software Development Kit', 'OAuthClients', 'V2025OAuthClients']
---

# OAuthClients
  Use this API to implement OAuth client functionality.   
With this functionality in place, users with the appropriate security scopes can create and configure OAuth clients to use as a way to obtain authorization to use the Identity Security Cloud REST API.
Refer to [Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information about OAuth and how it works with the Identity Security Cloud REST API.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2025OauthClient**](#create-oauth-client) | **POST** `/oauth-clients` | Create oauth client
[**Remove-V2025OauthClient**](#delete-oauth-client) | **DELETE** `/oauth-clients/{id}` | Delete oauth client
[**Get-V2025OauthClient**](#get-oauth-client) | **GET** `/oauth-clients/{id}` | Get oauth client
[**Get-V2025OauthClients**](#list-oauth-clients) | **GET** `/oauth-clients` | List oauth clients
[**Update-V2025OauthClient**](#patch-oauth-client) | **PATCH** `/oauth-clients/{id}` | Patch oauth client


## create-oauth-client
This creates an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-oauth-client)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | CreateOAuthClientRequest | [**CreateOAuthClientRequest**](../models/create-o-auth-client-request) | True  | 

### Return type
[**CreateOAuthClientResponse**](../models/create-o-auth-client-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Request succeeded. | CreateOAuthClientResponse
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
$CreateOAuthClientRequest = @"{
  "internal" : false,
  "businessName" : "Acme-Solar",
  "description" : "An API client used for the authorization_code, refresh_token, and client_credentials flows",
  "refreshTokenValiditySeconds" : 86400,
  "type" : "CONFIDENTIAL",
  "redirectUris" : [ "http://localhost:12345" ],
  "enabled" : true,
  "accessType" : "OFFLINE",
  "grantTypes" : [ "AUTHORIZATION_CODE", "CLIENT_CREDENTIALS", "REFRESH_TOKEN" ],
  "strongAuthSupported" : false,
  "homepageUrl" : "http://localhost:12345",
  "accessTokenValiditySeconds" : 750,
  "scope" : [ "demo:api-client-scope:first", "demo:api-client-scope:second" ],
  "name" : "Demo API Client",
  "claimsSupported" : false
}"@

# Create oauth client

try {
    $Result = ConvertFrom-JsonToCreateOAuthClientRequest -Json $CreateOAuthClientRequest
    New-V2025OauthClient -CreateOAuthClientRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2025OauthClient -CreateOAuthClientRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2025OauthClient"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-oauth-client
This deletes an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-oauth-client)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The OAuth client id

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content. | 
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The OAuth client id

# Delete oauth client

try {
    Remove-V2025OauthClient -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2025OauthClient -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2025OauthClient"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-oauth-client
This gets details of an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-oauth-client)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The OAuth client id

### Return type
[**GetOAuthClientResponse**](../models/get-o-auth-client-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Request succeeded. | GetOAuthClientResponse
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The OAuth client id

# Get oauth client

try {
    Get-V2025OauthClient -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2025OauthClient -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025OauthClient"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-oauth-clients
This gets a list of OAuth clients.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-oauth-clients)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull*

### Return type
[**GetOAuthClientResponse[]**](../models/get-o-auth-client-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of OAuth clients. | GetOAuthClientResponse[]
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
$Filters = 'lastUsed le 2023-02-05T10:59:27.214Z' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* (optional)

# List oauth clients

try {
    Get-V2025OauthClients 
    
    # Below is a request that includes all optional parameters
    # Get-V2025OauthClients -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025OauthClients"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-oauth-client
This performs a targeted update to the field(s) of an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-oauth-client)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The OAuth client id
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * tenant * businessName * homepageUrl * name * description * accessTokenValiditySeconds * refreshTokenValiditySeconds * redirectUris * grantTypes * accessType * enabled * strongAuthSupported * claimsSupported 

### Return type
[**GetOAuthClientResponse**](../models/get-o-auth-client-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Indicates the PATCH operation succeeded, and returns the OAuth client&#39;s new representation. | GetOAuthClientResponse
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The OAuth client id
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * tenant * businessName * homepageUrl * name * description * accessTokenValiditySeconds * refreshTokenValiditySeconds * redirectUris * grantTypes * accessType * enabled * strongAuthSupported * claimsSupported 
 

# Patch oauth client

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-V2025OauthClient -Id $Id -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-V2025OauthClient -Id $Id -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2025OauthClient"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
