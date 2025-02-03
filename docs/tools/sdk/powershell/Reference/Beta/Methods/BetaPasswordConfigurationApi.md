---
id: beta-password-configuration
title: PasswordConfiguration
pagination_label: PasswordConfiguration
sidebar_label: PasswordConfiguration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PasswordConfiguration', 'BetaPasswordConfiguration'] 
slug: /tools/sdk/powershell/beta/methods/password-configuration
tags: ['SDK', 'Software Development Kit', 'PasswordConfiguration', 'BetaPasswordConfiguration']
---

# PasswordConfiguration
  Use this API to implement organization password configuration functionality.
With this functionality in place, organization administrators can create organization-specific password configurations.

These configurations include details like custom password instructions, as well as digit token length and duration.

Refer to [Configuring User Authentication for Password Resets](https://documentation.sailpoint.com/saas/help/pwd/pwd_reset.html) for more information about organization password configuration functionality.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BetaPasswordOrgConfig**](#create-password-org-config) | **POST** `/password-org-config` | Create Password Org Config
[**Get-BetaPasswordOrgConfig**](#get-password-org-config) | **GET** `/password-org-config` | Get Password Org Config
[**Send-BetaPasswordOrgConfig**](#put-password-org-config) | **PUT** `/password-org-config` | Update Password Org Config

## create-password-org-config
This API creates the password org config. Unspecified fields will use default value.
To be able to use the custom password instructions, you must set the `customInstructionsEnabled` field to "true".
Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:write'

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | PasswordOrgConfig | [**PasswordOrgConfig**](../models/password-org-config) | True  | 

### Return type
[**PasswordOrgConfig**](../models/password-org-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the password org config. | PasswordOrgConfig
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
$PasswordOrgConfig = @"{
  "digitTokenLength" : 9,
  "digitTokenEnabled" : true,
  "digitTokenDurationMinutes" : 10,
  "customInstructionsEnabled" : true
}"@

# Create Password Org Config

try {
    $Result = ConvertFrom-JsonToPasswordOrgConfig -Json $PasswordOrgConfig
    New-BetaPasswordOrgConfig -BetaPasswordOrgConfig $Result
    
    # Below is a request that includes all optional parameters
    # New-BetaPasswordOrgConfig -BetaPasswordOrgConfig $PasswordOrgConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaPasswordOrgConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-password-org-config
This API returns the password org config . Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:read'

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**PasswordOrgConfig**](../models/password-org-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the password org config. | PasswordOrgConfig
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

# Get Password Org Config

try {
    Get-BetaPasswordOrgConfig
    
    # Below is a request that includes all optional parameters
    # Get-BetaPasswordOrgConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaPasswordOrgConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## put-password-org-config
This API updates the password org config for specified fields. Other fields will keep original value.
You must set the `customInstructionsEnabled` field to "true" to be able to use custom password instructions. 
Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:write'

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | PasswordOrgConfig | [**PasswordOrgConfig**](../models/password-org-config) | True  | 

### Return type
[**PasswordOrgConfig**](../models/password-org-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the password org config. | PasswordOrgConfig
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
$PasswordOrgConfig = @"{
  "digitTokenLength" : 9,
  "digitTokenEnabled" : true,
  "digitTokenDurationMinutes" : 10,
  "customInstructionsEnabled" : true
}"@

# Update Password Org Config

try {
    $Result = ConvertFrom-JsonToPasswordOrgConfig -Json $PasswordOrgConfig
    Send-BetaPasswordOrgConfig -BetaPasswordOrgConfig $Result
    
    # Below is a request that includes all optional parameters
    # Send-BetaPasswordOrgConfig -BetaPasswordOrgConfig $PasswordOrgConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaPasswordOrgConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
