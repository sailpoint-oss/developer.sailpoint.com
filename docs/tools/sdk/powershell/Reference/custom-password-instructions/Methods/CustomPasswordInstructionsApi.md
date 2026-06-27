---
id: custom-password-instructions
title: CustomPasswordInstructions
pagination_label: CustomPasswordInstructions
sidebar_label: CustomPasswordInstructions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CustomPasswordInstructions', 'CustomPasswordInstructions'] 
slug: /tools/sdk/powershell/custompasswordinstructions/methods/custom-password-instructions
tags: ['SDK', 'Software Development Kit', 'CustomPasswordInstructions', 'CustomPasswordInstructions']
---

# CustomPasswordInstructions
  Use this API to implement custom password instruction functionality.
With this functionality in place, administrators can create custom password instructions to help users reset their passwords, change them, unlock their accounts, or recover their usernames.
This allows administrators to emphasize password policies or provide organization-specific instructions.

Administrators must first use [Update Password Org Config](https://developer.sailpoint.com/docs/api/v2025/put-password-org-config/) to set &#x60;customInstructionsEnabled&#x60; to &#x60;true&#x60;.

Once they have enabled custom instructions, they can use [Create Custom Password Instructions](https://developer.sailpoint.com/docs/api/v2025/create-custom-password-instructions/) to create custom page content for the specific pageId they select.

For example, an administrator can use the pageId forget-username:user-email to set the custom text for the case when users forget their usernames and must enter their emails.

Refer to [Creating Custom Instruction Text](https://documentation.sailpoint.com/saas/help/pwd/pwd_reset.html#creating-custom-instruction-text) for more information about creating custom password instructions.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-CustomPasswordInstructionsV1**](#create-custom-password-instructions-v1) | **POST** `/custom-password-instructions/v1` | Create custom password instructions
[**Remove-CustomPasswordInstructionsV1**](#delete-custom-password-instructions-v1) | **DELETE** `/custom-password-instructions/v1/{pageId}` | Delete custom password instructions by page id
[**Get-CustomPasswordInstructionsV1**](#get-custom-password-instructions-v1) | **GET** `/custom-password-instructions/v1/{pageId}` | Get custom password instructions by page id


## create-custom-password-instructions-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API creates the custom password instructions for the specified page ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-custom-password-instructions-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Custompasswordinstruction | [**Custompasswordinstruction**](../models/custompasswordinstruction) | True  | 

### Return type
[**Custompasswordinstruction**](../models/custompasswordinstruction)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the custom password instructions. | Custompasswordinstruction
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Custompasswordinstruction = @"{"pageId":"reset-password:enter-password","pageContent":"See company password policies for details by clicking <a href=\"url\">here</a>"}"@

# Create custom password instructions

try {
    $Result = ConvertFrom-JsonToCustompasswordinstruction -Json $Custompasswordinstruction
    New-CustomPasswordInstructionsV1 -XSailPointExperimental $XSailPointExperimental -Custompasswordinstruction $Result 
    
    # Below is a request that includes all optional parameters
    # New-CustomPasswordInstructionsV1 -XSailPointExperimental $XSailPointExperimental -Custompasswordinstruction $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-CustomPasswordInstructionsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-custom-password-instructions-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API delete the custom password instructions for the specified page ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-custom-password-instructions-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | PageId | **String** | True  | The page ID of custom password instructions to delete.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Locale | **String** |   (optional) | The locale for the custom instructions, a BCP47 language tag. The default value is \""default\"".

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$PageId = "change-password:enter-password" # String | The page ID of custom password instructions to delete.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Locale = "MyLocale" # String | The locale for the custom instructions, a BCP47 language tag. The default value is \""default\"". (optional)

# Delete custom password instructions by page id

try {
    Remove-CustomPasswordInstructionsV1 -PageId $PageId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-CustomPasswordInstructionsV1 -PageId $PageId -XSailPointExperimental $XSailPointExperimental -Locale $Locale  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-CustomPasswordInstructionsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-custom-password-instructions-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the custom password instructions for the specified page ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-custom-password-instructions-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | PageId | **String** | True  | The page ID of custom password instructions to query.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Locale | **String** |   (optional) | The locale for the custom instructions, a BCP47 language tag. The default value is \""default\"".

### Return type
[**Custompasswordinstruction**](../models/custompasswordinstruction)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the custom password instructions. | Custompasswordinstruction
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$PageId = "change-password:enter-password" # String | The page ID of custom password instructions to query.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Locale = "MyLocale" # String | The locale for the custom instructions, a BCP47 language tag. The default value is \""default\"". (optional)

# Get custom password instructions by page id

try {
    Get-CustomPasswordInstructionsV1 -PageId $PageId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-CustomPasswordInstructionsV1 -PageId $PageId -XSailPointExperimental $XSailPointExperimental -Locale $Locale  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-CustomPasswordInstructionsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
