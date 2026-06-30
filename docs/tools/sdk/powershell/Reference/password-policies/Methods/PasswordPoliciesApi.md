---
id: password-policies
title: PasswordPolicies
pagination_label: PasswordPolicies
sidebar_label: PasswordPolicies
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PasswordPolicies', 'PasswordPolicies'] 
slug: /tools/sdk/powershell/passwordpolicies/methods/password-policies
tags: ['SDK', 'Software Development Kit', 'PasswordPolicies', 'PasswordPolicies']
---

# PasswordPolicies
  Use these APIs to implement password policies functionality.
These APIs allow you to define the policy parameters for choosing passwords.

IdentityNow comes with a default policy that you can modify to define the password requirements your users must meet to log in to IdentityNow, such as requiring a minimum password length, including special characters, and disallowing certain patterns.
If you have licensed Password Management, you can create additional password policies beyond the default one to manage passwords for supported sources in your org.

In the Identity Security Cloud Admin panel, administrators can use the Password Mgmt dropdown menu to select Sync Groups.
Refer to [Managing Password Policies](https://documentation.sailpoint.com/saas/help/pwd/pwd_policies/pwd_policies.html) for more information about password policies.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-PasswordPolicyV1**](#create-password-policy-v1) | **POST** `/password-policies/v1` | Create password policy
[**Remove-PasswordPolicyV1**](#delete-password-policy-v1) | **DELETE** `/password-policies/v1/{id}` | Delete password policy by id
[**Get-PasswordPolicyByIdV1**](#get-password-policy-by-id-v1) | **GET** `/password-policies/v1/{id}` | Get password policy by id
[**Get-PasswordPoliciesV1**](#list-password-policies-v1) | **GET** `/password-policies/v1` | List password policies
[**Set-PasswordPolicyV1**](#set-password-policy-v1) | **PUT** `/password-policies/v1/{id}` | Update password policy by id


## create-password-policy-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API creates the specified password policy.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-password-policy-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Passwordpolicyv3dto | [**Passwordpolicyv3dto**](../models/passwordpolicyv3dto) | True  | 

### Return type
[**Passwordpolicyv3dto**](../models/passwordpolicyv3dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the password policy. | Passwordpolicyv3dto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPasswordPolicyByIdV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPasswordPolicyByIdV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Passwordpolicyv3dto = @"{"description":"New Password Policy with high requirements to password complexity.","id":null,"name":"High security Password Policy","dateCreated":1639056206564,"lastUpdated":1662385430753,"firstExpirationReminder":90,"accountIdMinWordLength":3,"accountNameMinWordLength":3,"maxLength":0,"maxRepeatedChars":4,"minAlpha":1,"minCharacterTypes":-1,"minLength":8,"minLower":0,"minNumeric":1,"minSpecial":0,"minUpper":0,"passwordExpiration":90,"defaultPolicy":false,"enablePasswdExpiration":false,"requireStrongAuthn":false,"requireStrongAuthOffNetwork":false,"requireStrongAuthUntrustedGeographies":false,"useAccountAttributes":false,"useDictionary":false,"useIdentityAttributes":false,"validateAgainstAccountId":true,"validateAgainstAccountName":true,"sourceIds":["2c91808382ffee0b01830de154f14034","2c91808582ffee0c01830de36511405f"]}"@

# Create password policy

try {
    $Result = ConvertFrom-JsonToPasswordpolicyv3dto -Json $Passwordpolicyv3dto
    New-PasswordPolicyV1 -XSailPointExperimental $XSailPointExperimental -Passwordpolicyv3dto $Result 
    
    # Below is a request that includes all optional parameters
    # New-PasswordPolicyV1 -XSailPointExperimental $XSailPointExperimental -Passwordpolicyv3dto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-PasswordPolicyV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-password-policy-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API deletes the specified password policy.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-password-policy-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of password policy to delete.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPasswordPolicyByIdV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPasswordPolicyByIdV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ff808081838d9e9d01838da6a03e0002" # String | The ID of password policy to delete.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Delete password policy by id

try {
    Remove-PasswordPolicyV1 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-PasswordPolicyV1 -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-PasswordPolicyV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-password-policy-by-id-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the password policy for the specified ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-password-policy-by-id-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of password policy to retrieve.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**Passwordpolicyv3dto**](../models/passwordpolicyv3dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the password policy. | Passwordpolicyv3dto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPasswordPolicyByIdV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPasswordPolicyByIdV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ff808081838d9e9d01838da6a03e0005" # String | The ID of password policy to retrieve.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get password policy by id

try {
    Get-PasswordPolicyByIdV1 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-PasswordPolicyByIdV1 -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-PasswordPolicyByIdV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-password-policies-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This gets list of all Password Policies.
Requires role of ORG_ADMIN

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-password-policies-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Passwordpolicyv3dto[]**](../models/passwordpolicyv3dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of all Password Policies. | Passwordpolicyv3dto[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPasswordPolicyByIdV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPasswordPolicyByIdV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List password policies

try {
    Get-PasswordPoliciesV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-PasswordPoliciesV1 -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-PasswordPoliciesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-password-policy-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API updates the specified password policy.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-password-policy-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of password policy to update.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Passwordpolicyv3dto | [**Passwordpolicyv3dto**](../models/passwordpolicyv3dto) | True  | 

### Return type
[**Passwordpolicyv3dto**](../models/passwordpolicyv3dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the password policy. | Passwordpolicyv3dto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPasswordPolicyByIdV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPasswordPolicyByIdV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "ff808081838d9e9d01838da6a03e0007" # String | The ID of password policy to update.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Passwordpolicyv3dto = @"{"description":"Password Policy after update.","id":"2c91808e7d976f3b017d9f5ceae440c8","name":"Improved Password Policy","dateCreated":1639056206564,"lastUpdated":1662385430753,"firstExpirationReminder":90,"accountIdMinWordLength":3,"accountNameMinWordLength":3,"maxLength":0,"maxRepeatedChars":4,"minAlpha":1,"minCharacterTypes":-1,"minLength":8,"minLower":0,"minNumeric":1,"minSpecial":0,"minUpper":0,"passwordExpiration":90,"defaultPolicy":false,"enablePasswdExpiration":false,"requireStrongAuthn":false,"requireStrongAuthOffNetwork":false,"requireStrongAuthUntrustedGeographies":false,"useAccountAttributes":false,"useDictionary":false,"useIdentityAttributes":false,"validateAgainstAccountId":true,"validateAgainstAccountName":true,"sourceIds":["2c91808382ffee0b01830de154f14034","2c91808582ffee0c01830de36511405f"]}"@

# Update password policy by id

try {
    $Result = ConvertFrom-JsonToPasswordpolicyv3dto -Json $Passwordpolicyv3dto
    Set-PasswordPolicyV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -Passwordpolicyv3dto $Result 
    
    # Below is a request that includes all optional parameters
    # Set-PasswordPolicyV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -Passwordpolicyv3dto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-PasswordPolicyV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
