---
id: v1-custom-password-instructions
title: CustomPasswordInstructions
pagination_label: CustomPasswordInstructions
sidebar_label: CustomPasswordInstructions
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CustomPasswordInstructions', 'V1CustomPasswordInstructions'] 
slug: /tools/sdk/go/custompasswordinstructions/methods/custom-password-instructions
tags: ['SDK', 'Software Development Kit', 'CustomPasswordInstructions', 'V1CustomPasswordInstructions']
---

# CustomPasswordInstructionsAPI
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-custom-password-instructions-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCustomPasswordInstructionsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **custompasswordinstruction** | [**Custompasswordinstruction**](../models/custompasswordinstruction) |  | 

### Return type

[**Custompasswordinstruction**](../models/custompasswordinstruction)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/custom_password_instructions"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/custom_password_instructions"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    custompasswordinstruction := []byte(`{"pageId":"reset-password:enter-password","pageContent":"See company password policies for details by clicking <a href=\"url\">here</a>"}`) // Custompasswordinstruction | 

    var custompasswordinstruction v1.Custompasswordinstruction
    if err := json.Unmarshal(custompasswordinstruction, &custompasswordinstruction); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomPasswordInstructionsAPI.CreateCustomPasswordInstructionsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Custompasswordinstruction(custompasswordinstruction).Execute()
	  //resp, r, err := apiClient.CustomPasswordInstructionsAPI.CreateCustomPasswordInstructionsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Custompasswordinstruction(custompasswordinstruction).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomPasswordInstructionsAPI.CreateCustomPasswordInstructionsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateCustomPasswordInstructionsV1`: Custompasswordinstruction
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-custom-password-instructions-v1)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/custom_password_instructions"
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-custom-password-instructions-v1)

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

[**Custompasswordinstruction**](../models/custompasswordinstruction)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/custom_password_instructions"
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
    // response from `GetCustomPasswordInstructionsV1`: Custompasswordinstruction
    fmt.Fprintf(os.Stdout, "Response from `CustomPasswordInstructionsAPI.GetCustomPasswordInstructionsV1`: %v\n", resp)
}
```

[[Back to top]](#)

