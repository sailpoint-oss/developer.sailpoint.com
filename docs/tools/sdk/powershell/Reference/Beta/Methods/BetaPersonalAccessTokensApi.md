---
id: beta-personal-access-tokens
title: PersonalAccessTokens
pagination_label: PersonalAccessTokens
sidebar_label: PersonalAccessTokens
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PersonalAccessTokens', 'BetaPersonalAccessTokens'] 
slug: /tools/sdk/powershell/beta/methods/personal-access-tokens
tags: ['SDK', 'Software Development Kit', 'PersonalAccessTokens', 'BetaPersonalAccessTokens']
---

# PersonalAccessTokens
  Use this API to implement personal access token (PAT) functionality.
With this functionality in place, users can use PATs as an alternative to passwords for authentication in Identity Security Cloud.

PATs embed user information into the client ID and secret.
This replaces the API clients&#39; need to store and provide a username and password to establish a connection, improving Identity Security Cloud organizations&#39; integration security.

In Identity Security Cloud, users can do the following to create and manage their PATs: Select the dropdown menu under their names, select Preferences, and then select Personal Access Tokens.
They must then provide a description about the token&#39;s purpose.
They can then select &#39;Create Token&#39; at the bottom of the page to generate and view the Secret and Client ID.

Refer to [Managing Personal Access Tokens](https://documentation.sailpoint.com/saas/help/common/api_keys.html#managing-personal-access-tokens) for more information about PATs.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BetaPersonalAccessToken**](#create-personal-access-token) | **POST** `/personal-access-tokens` | Create personal access token
[**Remove-BetaPersonalAccessToken**](#delete-personal-access-token) | **DELETE** `/personal-access-tokens/{id}` | Delete personal access token
[**Get-BetaPersonalAccessTokens**](#list-personal-access-tokens) | **GET** `/personal-access-tokens` | List personal access tokens
[**Update-BetaPersonalAccessToken**](#patch-personal-access-token) | **PATCH** `/personal-access-tokens/{id}` | Patch personal access token


## create-personal-access-token
This creates a personal access token.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-personal-access-token)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | CreatePersonalAccessTokenRequest | [**CreatePersonalAccessTokenRequest**](../models/create-personal-access-token-request) | True  | Name and scope of personal access token.

### Return type
[**CreatePersonalAccessTokenResponse**](../models/create-personal-access-token-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Created. Note - this is the only time Personal Access Tokens&#39; secret attribute will be displayed. | CreatePersonalAccessTokenResponse
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
$CreatePersonalAccessTokenRequest = @"{
  "scope" : [ "demo:personal-access-token-scope:first", "demo:personal-access-token-scope:second" ],
  "accessTokenValiditySeconds" : 36900,
  "name" : "NodeJS Integration",
  "expirationDate" : "2018-01-11T18:45:37.098Z"
}"@

# Create personal access token

try {
    $Result = ConvertFrom-JsonToCreatePersonalAccessTokenRequest -Json $CreatePersonalAccessTokenRequest
    New-BetaPersonalAccessToken -CreatePersonalAccessTokenRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-BetaPersonalAccessToken -CreatePersonalAccessTokenRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaPersonalAccessToken"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-personal-access-token
This deletes a personal access token.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-personal-access-token)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The personal access token id

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content. | 
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The personal access token id

# Delete personal access token

try {
    Remove-BetaPersonalAccessToken -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaPersonalAccessToken -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaPersonalAccessToken"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-personal-access-tokens
This gets a collection of personal access tokens associated with the optional `owner-id`.  query parameter. If the `owner-id` query parameter is omitted, all personal access tokens  for a tenant will be retrieved, but the caller must have the 'idn:all-personal-access-tokens:read' right.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-personal-access-tokens)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | OwnerId | **String** |   (optional) | The identity ID of the owner whose personal access tokens should be listed.  If ""me"", the caller should have the following right: 'idn:my-personal-access-tokens:read' If an actual owner ID or if the `owner-id` parameter is omitted in the request,  the caller should have the following right: 'idn:all-personal-access-tokens:read'.  If the caller has the following right, then managed personal access tokens associated with `owner-id` will be retrieved: 'idn:managed-personal-access-tokens:read'
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull*

### Return type
[**GetPersonalAccessTokenResponse[]**](../models/get-personal-access-token-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of personal access tokens. | GetPersonalAccessTokenResponse[]
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
$OwnerId = "2c9180867b50d088017b554662fb281e" # String | The identity ID of the owner whose personal access tokens should be listed.  If ""me"", the caller should have the following right: 'idn:my-personal-access-tokens:read' If an actual owner ID or if the `owner-id` parameter is omitted in the request,  the caller should have the following right: 'idn:all-personal-access-tokens:read'.  If the caller has the following right, then managed personal access tokens associated with `owner-id` will be retrieved: 'idn:managed-personal-access-tokens:read' (optional)
$Filters = 'lastUsed le 2023-02-05T10:59:27.214Z' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* (optional)

# List personal access tokens

try {
    Get-BetaPersonalAccessTokens 
    
    # Below is a request that includes all optional parameters
    # Get-BetaPersonalAccessTokens -OwnerId $OwnerId -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaPersonalAccessTokens"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-personal-access-token
This performs a targeted update to the field(s) of a Personal Access Token.

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-personal-access-token)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The Personal Access Token id
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * scope 

### Return type
[**GetPersonalAccessTokenResponse**](../models/get-personal-access-token-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Indicates the PATCH operation succeeded, and returns the PAT&#39;s new representation. | GetPersonalAccessTokenResponse
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The Personal Access Token id
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * scope 
 

# Patch personal access token

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-BetaPersonalAccessToken -Id $Id -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BetaPersonalAccessToken -Id $Id -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaPersonalAccessToken"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
