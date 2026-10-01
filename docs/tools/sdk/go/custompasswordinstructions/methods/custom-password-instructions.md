# CustomPasswordInstructions

# CustomPasswordInstructionsAPI
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
[**create-custom-password-instructions-v1**](#create-custom-password-instructions-v1) | **Post** `/custom-password-instructions/v1` | Create custom password instructions
[**delete-custom-password-instructions-v1**](#delete-custom-password-instructions-v1) | **Delete** `/custom-password-instructions/v1/{pageId}` | Delete custom password instructions by page id
[**get-custom-password-instructions-v1**](#get-custom-password-instructions-v1) | **Get** `/custom-password-instructions/v1/{pageId}` | Get custom password instructions by page id


## create-custom-password-instructions-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Create custom password instructions
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

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCustomPasswordInstructionsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **customPasswordInstruction** | [**CustomPasswordInstruction**](../models/custom-password-instruction) |  | 

### Return type

[**CustomPasswordInstruction**](../models/custom-password-instruction)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    custom_password_instructions "github.com/sailpoint-oss/golang-sdk/v3/custom_password_instructions"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    custompasswordinstructionJson := []byte(`{
          "pageContent" : "Please enter a new password. Your password must be at least 8 characters long and contain at least one number and one letter.",
          "pageId" : "change-password:enter-password",
          "locale" : "en"
        }`) // CustomPasswordInstruction | 

    var customPasswordInstruction custom_password_instructions.CustomPasswordInstruction
    if err := json.Unmarshal(custompasswordinstructionJson, &customPasswordInstruction); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomPasswordInstructionsAPI.CreateCustomPasswordInstructionsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).CustomPasswordInstruction(customPasswordInstruction).Execute()
	  //resp, r, err := apiClient.CustomPasswordInstructionsAPI.CreateCustomPasswordInstructionsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).CustomPasswordInstruction(customPasswordInstruction).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomPasswordInstructionsAPI.CreateCustomPasswordInstructionsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateCustomPasswordInstructionsV1`: CustomPasswordInstruction
    fmt.Fprintf(os.Stdout, "Response from `CustomPasswordInstructionsAPI.CreateCustomPasswordInstructionsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-custom-password-instructions-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Delete custom password instructions by page id
This API delete the custom password instructions for the specified page ID.

[API Spec](https://developer.sailpoint.com/docs/api/delete-custom-password-instructions-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**pageId** | **string** | The page ID of custom password instructions to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCustomPasswordInstructionsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **locale** | **string** | The locale for the custom instructions, a BCP47 language tag. The default value is \\\&quot;default\\\&quot;. | 

### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    pageId := `mfa:select` // string | The page ID of custom password instructions to delete. # string | The page ID of custom password instructions to delete.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    locale := `locale_example` // string | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\". (optional) # string | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\". (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.CustomPasswordInstructionsAPI.DeleteCustomPasswordInstructionsV1(context.Background(), pageId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.CustomPasswordInstructionsAPI.DeleteCustomPasswordInstructionsV1(context.Background(), pageId).XSailPointExperimental(xSailPointExperimental).Locale(locale).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomPasswordInstructionsAPI.DeleteCustomPasswordInstructionsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-custom-password-instructions-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get custom password instructions by page id
This API returns the custom password instructions for the specified page ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-custom-password-instructions-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**pageId** | **string** | The page ID of custom password instructions to query. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCustomPasswordInstructionsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **locale** | **string** | The locale for the custom instructions, a BCP47 language tag. The default value is \\\&quot;default\\\&quot;. | 

### Return type

[**CustomPasswordInstruction**](../models/custom-password-instruction)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    pageId := `mfa:select` // string | The page ID of custom password instructions to query. # string | The page ID of custom password instructions to query.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    locale := `locale_example` // string | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\". (optional) # string | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\". (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomPasswordInstructionsAPI.GetCustomPasswordInstructionsV1(context.Background(), pageId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.CustomPasswordInstructionsAPI.GetCustomPasswordInstructionsV1(context.Background(), pageId).XSailPointExperimental(xSailPointExperimental).Locale(locale).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomPasswordInstructionsAPI.GetCustomPasswordInstructionsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCustomPasswordInstructionsV1`: CustomPasswordInstruction
    fmt.Fprintf(os.Stdout, "Response from `CustomPasswordInstructionsAPI.GetCustomPasswordInstructionsV1`: %v\n", resp)
}
```

[[Back to top]](#)

