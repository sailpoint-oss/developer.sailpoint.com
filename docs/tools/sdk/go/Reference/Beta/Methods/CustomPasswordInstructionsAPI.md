---
id: beta-custom-password-instructions
title: CustomPasswordInstructions
pagination_label: CustomPasswordInstructions
sidebar_label: CustomPasswordInstructions
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CustomPasswordInstructions', 'BetaCustomPasswordInstructions'] 
slug: /tools/sdk/go/beta/methods/custom-password-instructions
tags: ['SDK', 'Software Development Kit', 'CustomPasswordInstructions', 'BetaCustomPasswordInstructions']
---

# CustomPasswordInstructionsAPI
  Use this API to implement custom password instruction functionality.
With this functionality in place, administrators can create custom password instructions to help users reset their passwords, change them, unlock their accounts, or recover their usernames.
This allows administrators to emphasize password policies or provide organization-specific instructions.

Administrators must first use [Update Password Org Config](https://developer.sailpoint.com/docs/api/beta/put-password-org-config/) to set &#x60;customInstructionsEnabled&#x60; to &#x60;true&#x60;.

Once they have enabled custom instructions, they can use [Create Custom Password Instructions](https://developer.sailpoint.com/docs/api/beta/create-custom-password-instructions/) to create custom page content for the specific pageId they select.

For example, an administrator can use the pageId forget-username:user-email to set the custom text for the case when users forget their usernames and must enter their emails.

Refer to [Creating Custom Instruction Text](https://documentation.sailpoint.com/saas/help/pwd/pwd_reset.html#creating-custom-instruction-text) for more information about creating custom password instructions.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-custom-password-instructions**](#create-custom-password-instructions) | **Post** `/custom-password-instructions` | Create Custom Password Instructions
[**delete-custom-password-instructions**](#delete-custom-password-instructions) | **Delete** `/custom-password-instructions/{pageId}` | Delete Custom Password Instructions by page ID
[**get-custom-password-instructions**](#get-custom-password-instructions) | **Get** `/custom-password-instructions/{pageId}` | Get Custom Password Instructions by Page ID


## create-custom-password-instructions
Create Custom Password Instructions
This API creates the custom password instructions for the specified page ID. A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-custom-password-instructions)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCustomPasswordInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    customPasswordInstruction := fmt.Sprintf(`{
          "pageContent" : "Please enter a new password. Your password must be at least 8 characters long and contain at least one number and one letter.",
          "pageId" : "change-password:enter-password",
          "locale" : "en"
        }`) # CustomPasswordInstruction | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.CustomPasswordInstructionsAPI.CreateCustomPasswordInstructions(context.Background()).CustomPasswordInstruction(customPasswordInstruction).Execute()
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
Delete Custom Password Instructions by page ID
This API delete the custom password instructions for the specified page ID. A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-custom-password-instructions)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**pageId** | **string** | The page ID of custom password instructions to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCustomPasswordInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    pageId := mfa:select # string | The page ID of custom password instructions to delete. # string | The page ID of custom password instructions to delete.
    locale := locale_example # string | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\". (optional) # string | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\". (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	r, err := apiClient.Beta.CustomPasswordInstructionsAPI.DeleteCustomPasswordInstructions(context.Background(), pageId).Locale(locale).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomPasswordInstructionsAPI.DeleteCustomPasswordInstructions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-custom-password-instructions
Get Custom Password Instructions by Page ID
This API returns the custom password instructions for the specified page ID. A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-custom-password-instructions)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**pageId** | **string** | The page ID of custom password instructions to query. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCustomPasswordInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    pageId := mfa:select # string | The page ID of custom password instructions to query. # string | The page ID of custom password instructions to query.
    locale := locale_example # string | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\". (optional) # string | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\". (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.CustomPasswordInstructionsAPI.GetCustomPasswordInstructions(context.Background(), pageId).Locale(locale).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomPasswordInstructionsAPI.GetCustomPasswordInstructions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetCustomPasswordInstructions`: CustomPasswordInstruction
	fmt.Fprintf(os.Stdout, "Response from `CustomPasswordInstructionsAPI.GetCustomPasswordInstructions`: %v\n", resp)
}
```

[[Back to top]](#)

