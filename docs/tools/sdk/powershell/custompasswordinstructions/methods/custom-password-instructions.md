# CustomPasswordInstructions

# CustomPasswordInstructions
  Use this API to implement custom password instruction functionality.
With this functionality in place, administrators can create custom password instructions to help users reset their passwords, change them, unlock their accounts, or recover their usernames.
This allows administrators to emphasize password policies or provide organization-specific instructions.

Administrators must first use [Update Password Org Config](https://developer.sailpoint.com/docs/api/put-password-org-config-v-1) to set &#x60;customInstructionsEnabled&#x60; to &#x60;true&#x60;.

Once they have enabled custom instructions, they can use [Create Custom Password Instructions](https://developer.sailpoint.com/docs/api/create-custom-password-instructions-v-1) to create custom page content for the specific pageId they select.

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

The `pageId` determines which login and password-recovery screen your custom instructions appear on. The following table describes each supported page ID and where its text is displayed:

| Page ID | Where the custom text appears |
| --- | --- |
| `flow-selection:select` | Flow-selection landing screen, under "Need help signing in?", above the navigation links. |
| `reset-password:enter-username` | Reset-password "enter username" step, under the prompt, above the username field. |
| `unlock-account:enter-username` | Unlock-account "enter username" step, under the prompt, above the username field. |
| `forget-username:user-email` | Forgot-username screen, under "Enter the email address for", above the email field. |
| `reset-password:enter-password` | Reset-password "new password" step, under the header, above the password fields. |
| `change-password:enter-password` | Same "new password" screen, but the authenticated app/sync-group change variant. |
| `reset-password:finish` | Reset-password success screen, under the success icon/heading, above the return button. |
| `change-password:finish` | Success screen for the authenticated app/sync-group change, under the heading. |
| `mfa:select` | MFA method-selection step, under the prompt, above the list of MFA options. |
| `mfa:enter-code` | MFA code-entry step, under the option label, above the code field. |
| `mfa:enter-kba` | KBA step, under "Please answer these security questions", above the questions form. |
| `unlock-account:finish` | Unlock-account success screen, under the success icon/heading, above the return button. |

In every case the text shows as an info-icon + paragraph block that only appears if custom text is configured for that page ID, positioned between the screen's built-in heading and its form controls.


[API Spec](https://developer.sailpoint.com/docs/api/create-custom-password-instructions-v-1)

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

# Create custom password instructions

try {
    $Result = ConvertFrom-JsonToCustomPasswordInstruction -Json $CustomPasswordInstruction
    New-CustomPasswordInstructionsV1 -XSailPointExperimental $XSailPointExperimental -CustomPasswordInstruction $Result 
    
    # Below is a request that includes all optional parameters
    # New-CustomPasswordInstructionsV1 -XSailPointExperimental $XSailPointExperimental -CustomPasswordInstruction $Result  
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

[API Spec](https://developer.sailpoint.com/docs/api/delete-custom-password-instructions-v-1)

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

[API Spec](https://developer.sailpoint.com/docs/api/get-custom-password-instructions-v-1)

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
