---
id: beta-accounts
title: Accounts
pagination_label: Accounts
sidebar_label: Accounts
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accounts', 'BetaAccounts'] 
slug: /tools/sdk/powershell/beta/methods/accounts
tags: ['SDK', 'Software Development Kit', 'Accounts', 'BetaAccounts']
---

# Accounts
  Use this API to implement and customize account functionality.
With this functionality in place, administrators can manage users&#39; access across sources in Identity Security Cloud.

In Identity Security Cloud, an account refers to a user&#39;s account on a supported source.
This typically includes a unique identifier for the user, a unique password, a set of permissions associated with the source and a set of attributes. Identity Security Cloud loads accounts through the creation of sources in Identity Security Cloud.

Administrators can correlate users&#39; identities with the users&#39; accounts on the different sources they use.
This allows Identity Security Cloud to govern the access of identities and all their correlated accounts securely and cohesively.

To view the accounts on a source and their correlated identities, administrators can use the Connections drop-down menu, select Sources, select the relevant source, and select its Account tab.

To view and edit source account statuses for an identity in Identity Security Cloud, administrators can use the Identities drop-down menu, select Identity List, select the relevant identity, and select its Accounts tab.
Administrators can toggle an account&#39;s Actions to aggregate the account, enable/disable it, unlock it, or remove it from the identity.

Accounts can have the following statuses:

- Enabled: The account is enabled. The user can access it.

- Disabled: The account is disabled, and the user cannot access it, but the identity is not disabled in Identity Security Cloud. This can occur when an administrator disables the account or when the user&#39;s lifecycle state changes.

- Locked: The account is locked. This may occur when someone has entered an incorrect password for the account too many times.

- Pending: The account is currently updating. This status typically lasts seconds.

Administrators can select the source account to view its attributes, entitlements, and the last time the account&#39;s password was changed.

Refer to [Managing User Accounts](https://documentation.sailpoint.com/saas/help/accounts/identities.html?h&#x3D;disabling+identities#managing-access) for more information about accounts.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BetaAccount**](#create-account) | **POST** `/accounts` | Create account
[**Remove-BetaAccount**](#delete-account) | **DELETE** `/accounts/{id}` | Delete account
[**Remove-BetaAccountAsync**](#delete-account-async) | **POST** `/accounts/{id}/remove` | Remove account
[**Disable-BetaAccount**](#disable-account) | **POST** `/accounts/{id}/disable` | Disable account
[**Disable-BetaAccountForIdentity**](#disable-account-for-identity) | **POST** `/identities-accounts/{id}/disable` | Disable idn account for identity
[**Disable-BetaAccountsForIdentities**](#disable-accounts-for-identities) | **POST** `/identities-accounts/disable` | Disable idn accounts for identities
[**Enable-BetaAccount**](#enable-account) | **POST** `/accounts/{id}/enable` | Enable account
[**Enable-BetaAccountForIdentity**](#enable-account-for-identity) | **POST** `/identities-accounts/{id}/enable` | Enable idn account for identity
[**Enable-BetaAccountsForIdentities**](#enable-accounts-for-identities) | **POST** `/identities-accounts/enable` | Enable idn accounts for identities
[**Get-BetaAccount**](#get-account) | **GET** `/accounts/{id}` | Account details
[**Get-BetaAccountEntitlements**](#get-account-entitlements) | **GET** `/accounts/{id}/entitlements` | Account entitlements
[**Get-BetaAccounts**](#list-accounts) | **GET** `/accounts` | Accounts list
[**Send-BetaAccount**](#put-account) | **PUT** `/accounts/{id}` | Update account
[**Submit-BetaReloadAccount**](#submit-reload-account) | **POST** `/accounts/{id}/reload` | Reload account
[**Unlock-BetaAccount**](#unlock-account) | **POST** `/accounts/{id}/unlock` | Unlock account
[**Update-BetaAccount**](#update-account) | **PATCH** `/accounts/{id}` | Update account


## create-account
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Submits an account creation task - the API then returns the task ID.  

The `sourceId` where this account will be created must be included in the `attributes` object.

This endpoint creates an account on the source record in your ISC tenant.
This is useful for Flat File (`DelimitedFile`) type sources because it allows you to aggregate new accounts without needing to import a new CSV file every time. 

However, if you use this endpoint to create an account for a Direct Connection type source, you must ensure that the account also exists on the target source. 
The endpoint doesn't actually provision the account on the target source, which means that if the account doesn't also exist on the target source, an aggregation between the source and your tenant will remove it from your tenant. 

By providing the account ID of an existing account in the request body, this API will function as a PATCH operation and update the account.


[API Spec](https://developer.sailpoint.com/docs/api/beta/create-account)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | AccountAttributesCreate | [**AccountAttributesCreate**](../models/account-attributes-create) | True  | 

### Return type
[**AccountsAsyncResult**](../models/accounts-async-result)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Async task details. | AccountsAsyncResult
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
$AccountAttributesCreate = @"{
  "attributes" : {
    "sourceId" : "34bfcbe116c9407464af37acbaf7a4dc",
    "city" : "Austin",
    "displayName" : "John Doe",
    "userName" : "jdoe",
    "sAMAccountName" : "jDoe",
    "mail" : "john.doe@sailpoint.com"
  }
}"@

# Create account

try {
    $Result = ConvertFrom-BetaJsonToAccountAttributesCreate -Json $AccountAttributesCreate
    New-BetaAccount -AccountAttributesCreate $Result 
    
    # Below is a request that includes all optional parameters
    # New-BetaAccount -AccountAttributesCreate $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaAccount"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-account
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Use this API to delete an account. 
This endpoint submits an account delete task and returns the task ID. 
This endpoint only deletes the account from IdentityNow, not the source itself, which can result in the account's returning with the next aggregation between the source and IdentityNow.  To avoid this scenario, it is recommended that you [disable accounts](https://developer.sailpoint.com/idn/api/v3/disable-account) rather than delete them. This will also allow you to reenable the accounts in the future. 
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.
>**NOTE:** You can only delete accounts from sources of the "DelimitedFile" type.**

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-account)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Account ID.

### Return type
[**AccountsAsyncResult**](../models/accounts-async-result)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Async task details. | AccountsAsyncResult
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Account ID.

# Delete account

try {
    Remove-BetaAccount -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaAccount -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaAccount"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-account-async
Use this endpoint to remove accounts from the system without provisioning changes to the source. Accounts that are removed could be re-created during the next aggregation.

This endpoint is good for:
* Removing accounts that no longer exist on the source.
* Removing accounts that won't be aggregated following updates to the source configuration.
* Forcing accounts to be re-created following the next aggregation to re-run account processing, support testing, etc.


[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-account-async)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The account id

### Return type
[**TaskResultDto**](../models/task-result-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted. Returns task result details of removal request. | TaskResultDto
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
$Id = "c350d6aa4f104c61b062cb632421ad10" # String | The account id

# Remove account

try {
    Remove-BetaAccountAsync -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaAccountAsync -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaAccountAsync"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## disable-account
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This API submits a task to disable the account and returns the task ID.  
A token with ORG_ADMIN, SOURCE_ADMIN, SOURCE_SUBADMIN, or HELPDESK authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/disable-account)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The account id
 Body  | AccountToggleRequest | [**AccountToggleRequest**](../models/account-toggle-request) | True  | 

### Return type
[**AccountsAsyncResult**](../models/accounts-async-result)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Async task details | AccountsAsyncResult
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The account id
$AccountToggleRequest = @"{
  "forceProvisioning" : false,
  "externalVerificationId" : "3f9180835d2e5168015d32f890ca1581"
}"@

# Disable account

try {
    $Result = ConvertFrom-BetaJsonToAccountToggleRequest -Json $AccountToggleRequest
    Disable-BetaAccount -Id $Id -AccountToggleRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Disable-BetaAccount -Id $Id -AccountToggleRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Disable-BetaAccount"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## disable-account-for-identity
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This API submits a task to disable IDN account for a single identity.

[API Spec](https://developer.sailpoint.com/docs/api/beta/disable-account-for-identity)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity id.

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
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808384203c2d018437e631158309" # String | The identity id.

# Disable idn account for identity

try {
    Disable-BetaAccountForIdentity -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Disable-BetaAccountForIdentity -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Disable-BetaAccountForIdentity"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## disable-accounts-for-identities
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This API submits tasks to disable IDN account for each identity provided in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/beta/disable-accounts-for-identities)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | IdentitiesAccountsBulkRequest | [**IdentitiesAccountsBulkRequest**](../models/identities-accounts-bulk-request) | True  | 

### Return type
[**BulkIdentitiesAccountsResponse[]**](../models/bulk-identities-accounts-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
207 | Bulk response details. | BulkIdentitiesAccountsResponse[]
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
$IdentitiesAccountsBulkRequest = @"{
  "identityIds" : [ "2c91808384203c2d018437e631158308", "2c9180858082150f0180893dbaf553fe" ]
}"@

# Disable idn accounts for identities

try {
    $Result = ConvertFrom-BetaJsonToIdentitiesAccountsBulkRequest -Json $IdentitiesAccountsBulkRequest
    Disable-BetaAccountsForIdentities -IdentitiesAccountsBulkRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Disable-BetaAccountsForIdentities -IdentitiesAccountsBulkRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Disable-BetaAccountsForIdentities"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## enable-account
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This API submits a task to enable account and returns the task ID.  
A token with ORG_ADMIN, SOURCE_ADMIN, SOURCE_SUBADMIN, or HELPDESK authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/enable-account)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The account id
 Body  | AccountToggleRequest | [**AccountToggleRequest**](../models/account-toggle-request) | True  | 

### Return type
[**AccountsAsyncResult**](../models/accounts-async-result)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Async task details | AccountsAsyncResult
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The account id
$AccountToggleRequest = @"{
  "forceProvisioning" : false,
  "externalVerificationId" : "3f9180835d2e5168015d32f890ca1581"
}"@

# Enable account

try {
    $Result = ConvertFrom-BetaJsonToAccountToggleRequest -Json $AccountToggleRequest
    Enable-BetaAccount -Id $Id -AccountToggleRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Enable-BetaAccount -Id $Id -AccountToggleRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Enable-BetaAccount"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## enable-account-for-identity
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This API submits a task to enable IDN account for a single identity.

[API Spec](https://developer.sailpoint.com/docs/api/beta/enable-account-for-identity)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity id.

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
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808384203c2d018437e631158309" # String | The identity id.

# Enable idn account for identity

try {
    Enable-BetaAccountForIdentity -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Enable-BetaAccountForIdentity -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Enable-BetaAccountForIdentity"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## enable-accounts-for-identities
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This API submits tasks to enable IDN account for each identity provided in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/beta/enable-accounts-for-identities)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | IdentitiesAccountsBulkRequest | [**IdentitiesAccountsBulkRequest**](../models/identities-accounts-bulk-request) | True  | 

### Return type
[**BulkIdentitiesAccountsResponse[]**](../models/bulk-identities-accounts-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
207 | Bulk response details. | BulkIdentitiesAccountsResponse[]
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
$IdentitiesAccountsBulkRequest = @"{
  "identityIds" : [ "2c91808384203c2d018437e631158308", "2c9180858082150f0180893dbaf553fe" ]
}"@

# Enable idn accounts for identities

try {
    $Result = ConvertFrom-BetaJsonToIdentitiesAccountsBulkRequest -Json $IdentitiesAccountsBulkRequest
    Enable-BetaAccountsForIdentities -IdentitiesAccountsBulkRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Enable-BetaAccountsForIdentities -IdentitiesAccountsBulkRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Enable-BetaAccountsForIdentities"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-account
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Use this API to return the details for a single account by its ID.  
A token with ORG_ADMIN, SOURCE_ADMIN, SOURCE_SUBADMIN, or HELPDESK authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-account)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Account ID.

### Return type
[**Account**](../models/account)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Account object. | Account
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Account ID.

# Account details

try {
    Get-BetaAccount -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaAccount -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaAccount"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-account-entitlements
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This API returns entitlements of the account.  
A token with ORG_ADMIN, SOURCE_ADMIN, SOURCE_SUBADMIN, or HELPDESK authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-account-entitlements)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The account id
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Entitlement[]**](../models/entitlement)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | An array of account entitlements | Entitlement[]
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The account id
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# Account entitlements

try {
    Get-BetaAccountEntitlements -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaAccountEntitlements -Id $Id -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaAccountEntitlements"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-accounts
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
List accounts.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-accounts)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | DetailLevel | **String** |   (optional) | This value determines whether the API provides `SLIM` or increased level of detail (`FULL`) for each account in the returned list. `FULL` is the default behavior.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **identityId**: *eq, in, sw*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **sourceId**: *eq, in, sw*  **uncorrelated**: *eq*  **entitlements**: *eq*  **origin**: *eq, in*  **manuallyCorrelated**: *eq*  **hasEntitlements**: *eq*  **identity.name**: *eq, in, sw*  **identity.correlated**: *eq*  **identity.identityState**: *eq, in*  **source.displayableName**: *eq, in*  **source.authoritative**: *eq*  **source.connectionType**: *eq, in*  **recommendation.method**: *eq, in, isnull*  **created**: *eq, ge, gt, le*  **modified**: *eq, ge, gt, le, lt*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, sourceId, identityId, nativeIdentity, uuid, manuallyCorrelated, hasEntitlements, entitlements, origin, identity.name, identity.identityState, identity.correlated, source.displayableName, source.authoritative, source.connectionType, sourceOwner.name**

### Return type
[**Account[]**](../models/account)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of account objects. | Account[]
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
$DetailLevel = "SLIM" # String | This value determines whether the API provides `SLIM` or increased level of detail (`FULL`) for each account in the returned list. `FULL` is the default behavior. (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'identityId eq "2c9180858082150f0180893dbaf44201"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **identityId**: *eq, in, sw*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **sourceId**: *eq, in, sw*  **uncorrelated**: *eq*  **entitlements**: *eq*  **origin**: *eq, in*  **manuallyCorrelated**: *eq*  **hasEntitlements**: *eq*  **identity.name**: *eq, in, sw*  **identity.correlated**: *eq*  **identity.identityState**: *eq, in*  **source.displayableName**: *eq, in*  **source.authoritative**: *eq*  **source.connectionType**: *eq, in*  **recommendation.method**: *eq, in, isnull*  **created**: *eq, ge, gt, le*  **modified**: *eq, ge, gt, le, lt* (optional)
$Sorters = "id,name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, sourceId, identityId, nativeIdentity, uuid, manuallyCorrelated, hasEntitlements, entitlements, origin, identity.name, identity.identityState, identity.correlated, source.displayableName, source.authoritative, source.connectionType, sourceOwner.name** (optional)

# Accounts list

try {
    Get-BetaAccounts 
    
    # Below is a request that includes all optional parameters
    # Get-BetaAccounts -DetailLevel $DetailLevel -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaAccounts"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-account
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Use this API to update an account with a PUT request. 

This endpoint submits an account update task and returns the task ID.  

A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

>**Note: You can only use this PUT endpoint to update accounts from flat file sources.**


[API Spec](https://developer.sailpoint.com/docs/api/beta/put-account)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Account ID.
 Body  | AccountAttributes | [**AccountAttributes**](../models/account-attributes) | True  | 

### Return type
[**AccountsAsyncResult**](../models/accounts-async-result)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Async task details. | AccountsAsyncResult
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Account ID.
$AccountAttributes = @"{
  "attributes" : {
    "city" : "Austin",
    "displayName" : "John Doe",
    "userName" : "jdoe",
    "sAMAccountName" : "jDoe",
    "mail" : "john.doe@sailpoint.com"
  }
}"@

# Update account

try {
    $Result = ConvertFrom-BetaJsonToAccountAttributes -Json $AccountAttributes
    Send-BetaAccount -Id $Id -AccountAttributes $Result 
    
    # Below is a request that includes all optional parameters
    # Send-BetaAccount -Id $Id -AccountAttributes $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaAccount"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## submit-reload-account
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This API asynchronously reloads the account directly from the connector and performs a one-time aggregation process.  
A token with ORG_ADMIN, SOURCE_ADMIN, SOURCE_SUBADMIN, or HELPDESK authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/submit-reload-account)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The account id

### Return type
[**AccountsAsyncResult**](../models/accounts-async-result)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Async task details | AccountsAsyncResult
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The account id

# Reload account

try {
    Submit-BetaReloadAccount -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Submit-BetaReloadAccount -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Submit-BetaReloadAccount"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## unlock-account
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This API submits a task to unlock an account and returns the task ID.  
To use this endpoint to unlock an account that has the `forceProvisioning` option set to true, the `idn:accounts-provisioning:manage` scope is required. 
A token with ORG_ADMIN, SOURCE_ADMIN, SOURCE_SUBADMIN, or HELPDESK authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/unlock-account)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The account ID.
 Body  | AccountUnlockRequest | [**AccountUnlockRequest**](../models/account-unlock-request) | True  | 

### Return type
[**AccountsAsyncResult**](../models/accounts-async-result)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Async task details | AccountsAsyncResult
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The account ID.
$AccountUnlockRequest = @"{
  "forceProvisioning" : false,
  "externalVerificationId" : "3f9180835d2e5168015d32f890ca1581",
  "unlockIDNAccount" : false
}"@

# Unlock account

try {
    $Result = ConvertFrom-BetaJsonToAccountUnlockRequest -Json $AccountUnlockRequest
    Unlock-BetaAccount -Id $Id -AccountUnlockRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Unlock-BetaAccount -Id $Id -AccountUnlockRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Unlock-BetaAccount"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-account
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Use this API to update account details. 
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

This API supports updating an account's correlation by modifying the `identityId` and `manuallyCorrelated` fields. 
To reassign an account from one identity to another, replace the current `identityId` with a new value. 
If the account you're assigning was provisioned by Identity Security Cloud (ISC), it's possible for ISC to create a new account 
for the previous identity as soon as the account is moved. If the account you're assigning is authoritative, 
this causes the previous identity to become uncorrelated and can even result in its deletion.
All accounts that are reassigned will be set to `manuallyCorrelated: true` unless you specify otherwise.

>**Note:** The `attributes` field can only be modified for flat file accounts. 


[API Spec](https://developer.sailpoint.com/docs/api/beta/update-account)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Account ID.
 Body  | RequestBody | [**[]SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0) | True  | A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Account ID.
$RequestBody =  # SystemCollectionsHashtable[] | A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 $RequestBody = @"{Uncorrelate account={description=Remove account from Identity, value=[{op=remove, path=/identityId}]}, Reassign account={description=Move account from one Identity to another Identity, value=[{op=replace, path=/identityId, value=2c9180857725c14301772a93bb77242d}]}, Add account attribute={description=Add flat file account's attribute, value=[{op=add, path=/attributes/familyName, value=Smith}]}, Replace account attribute={description=Replace flat file account's attribute, value=[{op=replace, path=/attributes/familyName, value=Smith}]}, Remove account attribute={description=Remove flat file account's attribute, value=[{op=remove, path=/attributes/familyName}]}}"@ # SystemCollectionsHashtable[] | A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 

# Update account

try {
    $Result = ConvertFrom-BetaJsonToRequestBody -Json $RequestBody
    Update-BetaAccount -Id $Id -RequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BetaAccount -Id $Id -RequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaAccount"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
