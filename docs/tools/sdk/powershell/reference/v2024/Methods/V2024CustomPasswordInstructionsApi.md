---
id: v2024-custom-password-instructions
title: CustomPasswordInstructions
pagination_label: CustomPasswordInstructions
sidebar_label: CustomPasswordInstructions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CustomPasswordInstructions'] 
slug: /tools/sdk/powershell/v2024/methods/custom-password-instructions
tags: ['SDK', 'Software Development Kit', 'CustomPasswordInstructions']
---


# CustomPasswordInstructions

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2024CustomPasswordInstructions**](#create-custom-password-instructions) | **POST** `/custom-password-instructions` | Create Custom Password Instructions
[**Remove-V2024CustomPasswordInstructions**](#delete-custom-password-instructions) | **DELETE** `/custom-password-instructions/{pageId}` | Delete Custom Password Instructions by page ID
[**Get-V2024CustomPasswordInstructions**](#get-custom-password-instructions) | **GET** `/custom-password-instructions/{pageId}` | Get Custom Password Instructions by Page ID


## create-custom-password-instructions

This API creates the custom password instructions for the specified page ID.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | CustomPasswordInstruction | [**CustomPasswordInstruction**](../models/custom-password-instruction) | True  | 

### Return type

[**CustomPasswordInstruction**](../models/custom-password-instruction)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the custom password instructions. | CustomPasswordInstruction
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CustomPasswordInstruction = @"{
  "pageContent" : "Please enter a new password. Your password must be at least 8 characters long and contain at least one number and one letter.",
  "pageId" : "change-password:enter-password",
  "locale" : "en"
}"@
# Create Custom Password Instructions
try {
    $Result = ConvertFrom-JsonToCustomPasswordInstruction -Json $CustomPasswordInstruction
    New-V2024CustomPasswordInstructions-V2024XSailPointExperimental $XSailPointExperimental -V2024CustomPasswordInstruction $Result
    
    # Below is a request that includes all optional parameters
    # New-V2024CustomPasswordInstructions -V2024XSailPointExperimental $XSailPointExperimental -V2024CustomPasswordInstruction $CustomPasswordInstruction  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024CustomPasswordInstructions"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-custom-password-instructions

This API delete the custom password instructions for the specified page ID.

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$PageId = "change-password:enter-password" # String | The page ID of custom password instructions to delete.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Locale = "MyLocale" # String | The locale for the custom instructions, a BCP47 language tag. The default value is \""default\"". (optional)
# Delete Custom Password Instructions by page ID
try {
    Remove-V2024CustomPasswordInstructions-V2024PageId $PageId -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024CustomPasswordInstructions -V2024PageId $PageId -V2024XSailPointExperimental $XSailPointExperimental -V2024Locale $Locale  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024CustomPasswordInstructions"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-custom-password-instructions

This API returns the custom password instructions for the specified page ID.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | PageId | **String** | True  | The page ID of custom password instructions to query.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Locale | **String** |   (optional) | The locale for the custom instructions, a BCP47 language tag. The default value is \""default\"".

### Return type

[**CustomPasswordInstruction**](../models/custom-password-instruction)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the custom password instructions. | CustomPasswordInstruction
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$PageId = "change-password:enter-password" # String | The page ID of custom password instructions to query.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Locale = "MyLocale" # String | The locale for the custom instructions, a BCP47 language tag. The default value is \""default\"". (optional)
# Get Custom Password Instructions by Page ID
try {
    Get-V2024CustomPasswordInstructions-V2024PageId $PageId -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024CustomPasswordInstructions -V2024PageId $PageId -V2024XSailPointExperimental $XSailPointExperimental -V2024Locale $Locale  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024CustomPasswordInstructions"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


