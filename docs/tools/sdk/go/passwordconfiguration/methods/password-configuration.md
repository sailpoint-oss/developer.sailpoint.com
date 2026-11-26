# PasswordConfiguration

# PasswordConfigurationAPI
  Use this API to implement organization password configuration functionality. 
With this functionality in place, organization administrators can create organization-specific password configurations. 

These configurations include details like custom password instructions, as well as digit token length and duration. 

Refer to [Configuring User Authentication for Password Resets](https://documentation.sailpoint.com/saas/help/pwd/pwd_reset.html) for more information about organization password configuration functionality.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-password-org-config-v1**](#create-password-org-config-v1) | **Post** `/password-org-config/v1` | Create password org config
[**get-password-org-config-v1**](#get-password-org-config-v1) | **Get** `/password-org-config/v1` | Get password org config
[**put-password-org-config-v1**](#put-password-org-config-v1) | **Put** `/password-org-config/v1` | Update password org config


## create-password-org-config-v1
Create password org config
This API creates the password org config. Unspecified fields will use default value.
To be able to use the custom password instructions, you must set the `customInstructionsEnabled` field to "true".
Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:write'

[API Spec](https://developer.sailpoint.com/docs/api/create-password-org-config-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreatePasswordOrgConfigV1Request struct via the builder pattern


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
  "encoding/json"
    password_configuration "github.com/sailpoint-oss/golang-sdk/v3/password_configuration"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    passwordorgconfigJson := []byte(`{
          "digitTokenLength" : 9,
          "digitTokenEnabled" : true,
          "digitTokenDurationMinutes" : 10,
          "customInstructionsEnabled" : true
        }`) // PasswordOrgConfig | 

    var passwordOrgConfig password_configuration.PasswordOrgConfig
    if err := json.Unmarshal(passwordorgconfigJson, &passwordOrgConfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PasswordConfigurationAPI.CreatePasswordOrgConfigV1(context.Background()).PasswordOrgConfig(passwordOrgConfig).Execute()
	  //resp, r, err := apiClient.PasswordConfigurationAPI.CreatePasswordOrgConfigV1(context.Background()).PasswordOrgConfig(passwordOrgConfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordConfigurationAPI.CreatePasswordOrgConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreatePasswordOrgConfigV1`: PasswordOrgConfig
    fmt.Fprintf(os.Stdout, "Response from `PasswordConfigurationAPI.CreatePasswordOrgConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-password-org-config-v1
Get password org config
This API returns the password org config . Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:read'

[API Spec](https://developer.sailpoint.com/docs/api/get-password-org-config-v-1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetPasswordOrgConfigV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PasswordConfigurationAPI.GetPasswordOrgConfigV1(context.Background()).Execute()
	  //resp, r, err := apiClient.PasswordConfigurationAPI.GetPasswordOrgConfigV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordConfigurationAPI.GetPasswordOrgConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPasswordOrgConfigV1`: PasswordOrgConfig
    fmt.Fprintf(os.Stdout, "Response from `PasswordConfigurationAPI.GetPasswordOrgConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-password-org-config-v1
Update password org config
This API updates the password org config for specified fields. Other fields will keep original value.
You must set the `customInstructionsEnabled` field to "true" to be able to use custom password instructions. 
Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:write'

[API Spec](https://developer.sailpoint.com/docs/api/put-password-org-config-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutPasswordOrgConfigV1Request struct via the builder pattern


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
  "encoding/json"
    password_configuration "github.com/sailpoint-oss/golang-sdk/v3/password_configuration"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    passwordorgconfigJson := []byte(`{
          "digitTokenLength" : 9,
          "digitTokenEnabled" : true,
          "digitTokenDurationMinutes" : 10,
          "customInstructionsEnabled" : true
        }`) // PasswordOrgConfig | 

    var passwordOrgConfig password_configuration.PasswordOrgConfig
    if err := json.Unmarshal(passwordorgconfigJson, &passwordOrgConfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PasswordConfigurationAPI.PutPasswordOrgConfigV1(context.Background()).PasswordOrgConfig(passwordOrgConfig).Execute()
	  //resp, r, err := apiClient.PasswordConfigurationAPI.PutPasswordOrgConfigV1(context.Background()).PasswordOrgConfig(passwordOrgConfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordConfigurationAPI.PutPasswordOrgConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutPasswordOrgConfigV1`: PasswordOrgConfig
    fmt.Fprintf(os.Stdout, "Response from `PasswordConfigurationAPI.PutPasswordOrgConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

