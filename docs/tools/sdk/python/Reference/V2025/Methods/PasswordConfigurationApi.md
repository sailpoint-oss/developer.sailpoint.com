---
id: v2025-password-configuration
title: PasswordConfiguration
pagination_label: PasswordConfiguration
sidebar_label: PasswordConfiguration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PasswordConfiguration', 'V2025PasswordConfiguration'] 
slug: /tools/sdk/go/v2025/methods/password-configuration
tags: ['SDK', 'Software Development Kit', 'PasswordConfiguration', 'V2025PasswordConfiguration']
---

# PasswordConfigurationAPI
  Use this API to implement organization password configuration functionality. 
With this functionality in place, organization administrators can create organization-specific password configurations. 

These configurations include details like custom password instructions, as well as digit token length and duration. 

Refer to [Configuring User Authentication for Password Resets](https://documentation.sailpoint.com/saas/help/pwd/pwd_reset.html) for more information about organization password configuration functionality.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-password-org-config**](#create-password-org-config) | **Post** `/password-org-config` | Create Password Org Config
[**get-password-org-config**](#get-password-org-config) | **Get** `/password-org-config` | Get Password Org Config
[**put-password-org-config**](#put-password-org-config) | **Put** `/password-org-config` | Update Password Org Config


## create-password-org-config
Create Password Org Config
This API creates the password org config. Unspecified fields will use default value.
To be able to use the custom password instructions, you must set the `customInstructionsEnabled` field to "true".
Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:write'

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-password-org-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreatePasswordOrgConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordOrgConfig** | [**PasswordOrgConfig**](../models/password-org-config) |  | 

### Return type

[**PasswordOrgConfig**](../models/password-org-config)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    passwordOrgConfig := fmt.Sprintf(`{
          "digitTokenLength" : 9,
          "digitTokenEnabled" : true,
          "digitTokenDurationMinutes" : 10,
          "customInstructionsEnabled" : true
        }`) # PasswordOrgConfig | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.PasswordConfigurationAPI.CreatePasswordOrgConfig(context.Background()).PasswordOrgConfig(passwordOrgConfig).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PasswordConfigurationAPI.CreatePasswordOrgConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreatePasswordOrgConfig`: PasswordOrgConfig
	fmt.Fprintf(os.Stdout, "Response from `PasswordConfigurationAPI.CreatePasswordOrgConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-password-org-config
Get Password Org Config
This API returns the password org config . Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:read'

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-password-org-config)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetPasswordOrgConfigRequest struct via the builder pattern


### Return type

[**PasswordOrgConfig**](../models/password-org-config)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.PasswordConfigurationAPI.GetPasswordOrgConfig(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PasswordConfigurationAPI.GetPasswordOrgConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPasswordOrgConfig`: PasswordOrgConfig
	fmt.Fprintf(os.Stdout, "Response from `PasswordConfigurationAPI.GetPasswordOrgConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## put-password-org-config
Update Password Org Config
This API updates the password org config for specified fields. Other fields will keep original value.
You must set the `customInstructionsEnabled` field to "true" to be able to use custom password instructions. 
Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:write'

[API Spec](https://developer.sailpoint.com/docs/api/v2025/put-password-org-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutPasswordOrgConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordOrgConfig** | [**PasswordOrgConfig**](../models/password-org-config) |  | 

### Return type

[**PasswordOrgConfig**](../models/password-org-config)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    passwordOrgConfig := fmt.Sprintf(`{
          "digitTokenLength" : 9,
          "digitTokenEnabled" : true,
          "digitTokenDurationMinutes" : 10,
          "customInstructionsEnabled" : true
        }`) # PasswordOrgConfig | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.PasswordConfigurationAPI.PutPasswordOrgConfig(context.Background()).PasswordOrgConfig(passwordOrgConfig).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PasswordConfigurationAPI.PutPasswordOrgConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PutPasswordOrgConfig`: PasswordOrgConfig
	fmt.Fprintf(os.Stdout, "Response from `PasswordConfigurationAPI.PutPasswordOrgConfig`: %v\n", resp)
}
```

[[Back to top]](#)

