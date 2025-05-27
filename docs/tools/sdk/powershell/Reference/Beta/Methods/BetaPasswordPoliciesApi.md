---
id: beta-password-policies
title: PasswordPolicies
pagination_label: PasswordPolicies
sidebar_label: PasswordPolicies
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PasswordPolicies', 'BetaPasswordPolicies'] 
slug: /tools/sdk/powershell/beta/methods/password-policies
tags: ['SDK', 'Software Development Kit', 'PasswordPolicies', 'BetaPasswordPolicies']
---

# PasswordPolicies
  Use these APIs to implement password policies functionality.
These APIs allow you to define the policy parameters for choosing passwords.

IdentityNow comes with a default policy that you can modify to define the password requirements your users must meet to log in to IdentityNow, such as requiring a minimum password length, including special characters, and disallowing certain patterns.
If you have licensed Password Management, you can create additional password policies beyond the default one to manage passwords for supported sources in your org.

In the Identity Security Cloud Admin panel, administrators can use the Password Mgmt dropdown menu to select Sync Groups.

Refer to [Managing Password Policies](https://documentation.sailpoint.com/saas/help/pwd/pwd_policies/pwd_policies.html) for more information about password policies.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BetaPasswordPolicy**](#create-password-policy) | **POST** `/password-policies` | Create password policy
[**Remove-BetaPasswordPolicy**](#delete-password-policy) | **DELETE** `/password-policies/{id}` | Delete password policy by id
[**Get-BetaPasswordPolicyById**](#get-password-policy-by-id) | **GET** `/password-policies/{id}` | Get password policy by id
[**Get-BetaPasswordPolicies**](#list-password-policies) | **GET** `/password-policies` | List password policies
[**Set-BetaPasswordPolicy**](#set-password-policy) | **PUT** `/password-policies/{id}` | Update password policy by id


## create-password-policy
This API creates the specified password policy.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-password-policy)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | PasswordPolicyV3Dto | [**PasswordPolicyV3Dto**](../models/password-policy-v3-dto) | True  | 

### Return type
[**PasswordPolicyV3Dto**](../models/password-policy-v3-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the password policy. | PasswordPolicyV3Dto
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
$PasswordPolicyV3Dto = @"{
  "validateAgainstAccountName" : true,
  "minLength" : 8,
  "description" : "Information about the Password Policy",
  "requireStrongAuthUntrustedGeographies" : true,
  "enablePasswdExpiration" : true,
  "minNumeric" : 8,
  "lastUpdated" : "2000-01-23T04:56:07.000+00:00",
  "validateAgainstAccountId" : false,
  "dateCreated" : "2000-01-23T04:56:07.000+00:00",
  "accountNameMinWordLength" : 6,
  "minUpper" : 8,
  "firstExpirationReminder" : 45,
  "modified" : "modified",
  "id" : "2c91808e7d976f3b017d9f5ceae440c8",
  "requireStrongAuthn" : true,
  "useDictionary" : false,
  "minSpecial" : 8,
  "sourceIds" : [ "2c91808382ffee0b01830de154f14034", "2f98808382ffee0b01830de154f12134" ],
  "passwordExpiration" : 8,
  "maxRepeatedChars" : 3,
  "minCharacterTypes" : 5,
  "minAlpha" : 5,
  "created" : "created",
  "useAccountAttributes" : false,
  "accountIdMinWordLength" : 4,
  "minLower" : 8,
  "useIdentityAttributes" : false,
  "defaultPolicy" : true,
  "requireStrongAuthOffNetwork" : true,
  "name" : "PasswordPolicy Example",
  "maxLength" : 25
}"@

# Create password policy

try {
    $Result = ConvertFrom-JsonToPasswordPolicyV3Dto -Json $PasswordPolicyV3Dto
    New-BetaPasswordPolicy -PasswordPolicyV3Dto $Result 
    
    # Below is a request that includes all optional parameters
    # New-BetaPasswordPolicy -PasswordPolicyV3Dto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaPasswordPolicy"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-password-policy
This API deletes the specified password policy.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-password-policy)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of password policy to delete.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
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
$Id = "ff808081838d9e9d01838da6a03e0002" # String | The ID of password policy to delete.

# Delete password policy by id

try {
    Remove-BetaPasswordPolicy -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaPasswordPolicy -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaPasswordPolicy"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-password-policy-by-id
This API returns the password policy for the specified ID.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-password-policy-by-id)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of password policy to retrieve.

### Return type
[**PasswordPolicyV3Dto**](../models/password-policy-v3-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the password policy. | PasswordPolicyV3Dto
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
$Id = "ff808081838d9e9d01838da6a03e0005" # String | The ID of password policy to retrieve.

# Get password policy by id

try {
    Get-BetaPasswordPolicyById -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaPasswordPolicyById -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaPasswordPolicyById"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-password-policies
This gets list of all Password Policies.
Requires role of ORG_ADMIN

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-password-policies)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**PasswordPolicyV3Dto[]**](../models/password-policy-v3-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of all Password Policies. | PasswordPolicyV3Dto[]
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
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List password policies

try {
    Get-BetaPasswordPolicies 
    
    # Below is a request that includes all optional parameters
    # Get-BetaPasswordPolicies -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaPasswordPolicies"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-password-policy
This API updates the specified password policy.

[API Spec](https://developer.sailpoint.com/docs/api/beta/set-password-policy)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of password policy to update.
 Body  | PasswordPolicyV3Dto | [**PasswordPolicyV3Dto**](../models/password-policy-v3-dto) | True  | 

### Return type
[**PasswordPolicyV3Dto**](../models/password-policy-v3-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the password policy. | PasswordPolicyV3Dto
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
$Id = "ff808081838d9e9d01838da6a03e0007" # String | The ID of password policy to update.
$PasswordPolicyV3Dto = @"{
  "validateAgainstAccountName" : true,
  "minLength" : 8,
  "description" : "Information about the Password Policy",
  "requireStrongAuthUntrustedGeographies" : true,
  "enablePasswdExpiration" : true,
  "minNumeric" : 8,
  "lastUpdated" : "2000-01-23T04:56:07.000+00:00",
  "validateAgainstAccountId" : false,
  "dateCreated" : "2000-01-23T04:56:07.000+00:00",
  "accountNameMinWordLength" : 6,
  "minUpper" : 8,
  "firstExpirationReminder" : 45,
  "modified" : "modified",
  "id" : "2c91808e7d976f3b017d9f5ceae440c8",
  "requireStrongAuthn" : true,
  "useDictionary" : false,
  "minSpecial" : 8,
  "sourceIds" : [ "2c91808382ffee0b01830de154f14034", "2f98808382ffee0b01830de154f12134" ],
  "passwordExpiration" : 8,
  "maxRepeatedChars" : 3,
  "minCharacterTypes" : 5,
  "minAlpha" : 5,
  "created" : "created",
  "useAccountAttributes" : false,
  "accountIdMinWordLength" : 4,
  "minLower" : 8,
  "useIdentityAttributes" : false,
  "defaultPolicy" : true,
  "requireStrongAuthOffNetwork" : true,
  "name" : "PasswordPolicy Example",
  "maxLength" : 25
}"@

# Update password policy by id

try {
    $Result = ConvertFrom-JsonToPasswordPolicyV3Dto -Json $PasswordPolicyV3Dto
    Set-BetaPasswordPolicy -Id $Id -PasswordPolicyV3Dto $Result 
    
    # Below is a request that includes all optional parameters
    # Set-BetaPasswordPolicy -Id $Id -PasswordPolicyV3Dto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-BetaPasswordPolicy"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
