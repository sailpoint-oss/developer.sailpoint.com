---
id: password-configuration
title: PasswordConfiguration
pagination_label: PasswordConfiguration
sidebar_label: PasswordConfiguration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PasswordConfiguration', 'PasswordConfiguration'] 
slug: /tools/sdk/powershell/passwordconfiguration/methods/password-configuration
tags: ['SDK', 'Software Development Kit', 'PasswordConfiguration', 'PasswordConfiguration']
---

# PasswordConfiguration
  Use this API to implement organization password configuration functionality. 
With this functionality in place, organization administrators can create organization-specific password configurations. 

These configurations include details like custom password instructions, as well as digit token length and duration. 

Refer to [Configuring User Authentication for Password Resets](https://documentation.sailpoint.com/saas/help/pwd/pwd_reset.html) for more information about organization password configuration functionality.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-PasswordOrgConfigV1**](#create-password-org-config-v1) | **POST** `/password-org-config/v1` | Create password org config
[**Get-PasswordOrgConfigV1**](#get-password-org-config-v1) | **GET** `/password-org-config/v1` | Get password org config
[**Send-PasswordOrgConfigV1**](#put-password-org-config-v1) | **PUT** `/password-org-config/v1` | Update password org config


## create-password-org-config-v1
This API creates the password org config. Unspecified fields will use default value.
To be able to use the custom password instructions, you must set the `customInstructionsEnabled` field to "true".
Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:write'

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-password-org-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Passwordorgconfig | [**Passwordorgconfig**](../models/passwordorgconfig) | True  | 

### Return type
[**Passwordorgconfig**](../models/passwordorgconfig)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the password org config. | Passwordorgconfig
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPasswordOrgConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPasswordOrgConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Passwordorgconfig = @"{"customInstructionsEnabled":true,"digitTokenEnabled":true,"digitTokenDurationMinutes":12,"digitTokenLength":9}"@

# Create password org config

try {
    $Result = ConvertFrom-JsonToPasswordorgconfig -Json $Passwordorgconfig
    New-PasswordOrgConfigV1 -Passwordorgconfig $Result 
    
    # Below is a request that includes all optional parameters
    # New-PasswordOrgConfigV1 -Passwordorgconfig $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-PasswordOrgConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-password-org-config-v1
This API returns the password org config . Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:read'

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-password-org-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**Passwordorgconfig**](../models/passwordorgconfig)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the password org config. | Passwordorgconfig
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPasswordOrgConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPasswordOrgConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Get password org config

try {
    Get-PasswordOrgConfigV1 
    
    # Below is a request that includes all optional parameters
    # Get-PasswordOrgConfigV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-PasswordOrgConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-password-org-config-v1
This API updates the password org config for specified fields. Other fields will keep original value.
You must set the `customInstructionsEnabled` field to "true" to be able to use custom password instructions. 
Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:write'

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-password-org-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Passwordorgconfig | [**Passwordorgconfig**](../models/passwordorgconfig) | True  | 

### Return type
[**Passwordorgconfig**](../models/passwordorgconfig)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the password org config. | Passwordorgconfig
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPasswordOrgConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPasswordOrgConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Passwordorgconfig = @"{"digitTokenEnabled":true,"digitTokenDurationMinutes":12}"@

# Update password org config

try {
    $Result = ConvertFrom-JsonToPasswordorgconfig -Json $Passwordorgconfig
    Send-PasswordOrgConfigV1 -Passwordorgconfig $Result 
    
    # Below is a request that includes all optional parameters
    # Send-PasswordOrgConfigV1 -Passwordorgconfig $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-PasswordOrgConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
