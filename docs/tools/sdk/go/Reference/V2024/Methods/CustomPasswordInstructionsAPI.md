---
id: v2024-custom-password-instructions
title: CustomPasswordInstructions
pagination_label: CustomPasswordInstructions
sidebar_label: CustomPasswordInstructions
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CustomPasswordInstructions', 'V2024CustomPasswordInstructions'] 
slug: /tools/sdk/go/v2024/methods/custom-password-instructions
tags: ['SDK', 'Software Development Kit', 'CustomPasswordInstructions', 'V2024CustomPasswordInstructions']
---

# CustomPasswordInstructionsAPI
  Use this API to implement custom password instruction functionality.
With this functionality in place, administrators can create custom password instructions to help users reset their passwords, change them, unlock their accounts, or recover their usernames.
This allows administrators to emphasize password policies or provide organization-specific instructions.

Administrators must first use [Update Password Org Config](https://developer.sailpoint.com/docs/api/v2024/put-password-org-config/) to set &#x60;customInstructionsEnabled&#x60; to &#x60;true&#x60;.

Once they have enabled custom instructions, they can use [Create Custom Password Instructions](https://developer.sailpoint.com/docs/api/v2024/create-custom-password-instructions/) to create custom page content for the specific pageId they select.

For example, an administrator can use the pageId forget-username:user-email to set the custom text for the case when users forget their usernames and must enter their emails.

Refer to [Creating Custom Instruction Text](https://documentation.sailpoint.com/saas/help/pwd/pwd_reset.html#creating-custom-instruction-text) for more information about creating custom password instructions.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-custom-password-instructions**](#create-custom-password-instructions) | **Post** `/custom-password-instructions` | Create Custom Password Instructions
[**delete-custom-password-instructions**](#delete-custom-password-instructions) | **Delete** `/custom-password-instructions/{pageId}` | Delete Custom Password Instructions by page ID
[**get-custom-password-instructions**](#get-custom-password-instructions) | **Get** `/custom-password-instructions/{pageId}` | Get Custom Password Instructions by Page ID


## create-custom-password-instructions
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Create Custom Password Instructions
This API creates the custom password instructions for the specified page ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-custom-password-instructions)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCustomPasswordInstructionsRequest struct via the builder pattern


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
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    data := []byte(`{
          "pageContent" : "Please enter a new password. Your password must be at least 8 characters long and contain at least one number and one letter.",
          "pageId" : "change-password:enter-password",
          "locale" : "en"
        }`) // CustomPasswordInstruction | 

  
   var customPasswordInstruction v2024.CustomPasswordInstruction
   if err := json.Unmarshal(data, &customPasswordInstruction); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.CustomPasswordInstructionsAPI.CreateCustomPasswordInstructions(context.Background()).XSailPointExperimental(xSailPointExperimental).CustomPasswordInstruction(customPasswordInstruction).Execute()
	//resp, r, err := apiClient.V2024.CustomPasswordInstructionsAPI.CreateCustomPasswordInstructions(context.Background()).XSailPointExperimental(xSailPointExperimental).CustomPasswordInstruction(customPasswordInstruction).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomPasswordInstructionsAPI.CreateCustomPasswordInstructions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateCustomPasswordInstructions`: CustomPasswordInstruction
	fmt.Fprintf(os.Stdout, "Response from `CustomPasswordInstructionsAPI.CreateCustomPasswordInstructions`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-custom-password-instructions
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Delete Custom Password Instructions by page ID
This API delete the custom password instructions for the specified page ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-custom-password-instructions)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**pageId** | **string** | The page ID of custom password instructions to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCustomPasswordInstructionsRequest struct via the builder pattern


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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    pageId := `mfa:select` // string | The page ID of custom password instructions to delete. # string | The page ID of custom password instructions to delete.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    locale := `locale_example` // string | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\". (optional) # string | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\". (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2024.CustomPasswordInstructionsAPI.DeleteCustomPasswordInstructions(context.Background(), pageId).XSailPointExperimental(xSailPointExperimental).Execute()
	//r, err := apiClient.V2024.CustomPasswordInstructionsAPI.DeleteCustomPasswordInstructions(context.Background(), pageId).XSailPointExperimental(xSailPointExperimental).Locale(locale).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomPasswordInstructionsAPI.DeleteCustomPasswordInstructions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-custom-password-instructions
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get Custom Password Instructions by Page ID
This API returns the custom password instructions for the specified page ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-custom-password-instructions)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**pageId** | **string** | The page ID of custom password instructions to query. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCustomPasswordInstructionsRequest struct via the builder pattern


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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    pageId := `mfa:select` // string | The page ID of custom password instructions to query. # string | The page ID of custom password instructions to query.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    locale := `locale_example` // string | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\". (optional) # string | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\". (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.CustomPasswordInstructionsAPI.GetCustomPasswordInstructions(context.Background(), pageId).XSailPointExperimental(xSailPointExperimental).Execute()
	//resp, r, err := apiClient.V2024.CustomPasswordInstructionsAPI.GetCustomPasswordInstructions(context.Background(), pageId).XSailPointExperimental(xSailPointExperimental).Locale(locale).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomPasswordInstructionsAPI.GetCustomPasswordInstructions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetCustomPasswordInstructions`: CustomPasswordInstruction
	fmt.Fprintf(os.Stdout, "Response from `CustomPasswordInstructionsAPI.GetCustomPasswordInstructions`: %v\n", resp)
}
```

[[Back to top]](#)

