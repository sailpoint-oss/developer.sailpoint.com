---
id: v1-password-policies
title: PasswordPolicies
pagination_label: PasswordPolicies
sidebar_label: PasswordPolicies
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PasswordPolicies', 'V1PasswordPolicies'] 
slug: /tools/sdk/go/passwordpolicies/methods/password-policies
tags: ['SDK', 'Software Development Kit', 'PasswordPolicies', 'V1PasswordPolicies']
---

# PasswordPoliciesAPI
  Use these APIs to implement password policies functionality.
These APIs allow you to define the policy parameters for choosing passwords.

IdentityNow comes with a default policy that you can modify to define the password requirements your users must meet to log in to IdentityNow, such as requiring a minimum password length, including special characters, and disallowing certain patterns.
If you have licensed Password Management, you can create additional password policies beyond the default one to manage passwords for supported sources in your org.

In the Identity Security Cloud Admin panel, administrators can use the Password Mgmt dropdown menu to select Sync Groups.
Refer to [Managing Password Policies](https://documentation.sailpoint.com/saas/help/pwd/pwd_policies/pwd_policies.html) for more information about password policies.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-password-policy-v1**](#create-password-policy-v1) | **Post** `/password-policies/v1` | Create password policy
[**delete-password-policy-v1**](#delete-password-policy-v1) | **Delete** `/password-policies/v1/{id}` | Delete password policy by id
[**get-password-policy-by-id-v1**](#get-password-policy-by-id-v1) | **Get** `/password-policies/v1/{id}` | Get password policy by id
[**list-password-policies-v1**](#list-password-policies-v1) | **Get** `/password-policies/v1` | List password policies
[**set-password-policy-v1**](#set-password-policy-v1) | **Put** `/password-policies/v1/{id}` | Update password policy by id


## create-password-policy-v1
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
Create password policy
This API creates the specified password policy.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-password-policy-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreatePasswordPolicyV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **passwordpolicyv3dto** | [**Passwordpolicyv3dto**](../models/passwordpolicyv3dto) |  | 

### Return type

[**Passwordpolicyv3dto**](../models/passwordpolicyv3dto)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/password_policies"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/password_policies"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    passwordpolicyv3dto := []byte(`{"description":"New Password Policy with high requirements to password complexity.","id":null,"name":"High security Password Policy","dateCreated":1639056206564,"lastUpdated":1662385430753,"firstExpirationReminder":90,"accountIdMinWordLength":3,"accountNameMinWordLength":3,"maxLength":0,"maxRepeatedChars":4,"minAlpha":1,"minCharacterTypes":-1,"minLength":8,"minLower":0,"minNumeric":1,"minSpecial":0,"minUpper":0,"passwordExpiration":90,"defaultPolicy":false,"enablePasswdExpiration":false,"requireStrongAuthn":false,"requireStrongAuthOffNetwork":false,"requireStrongAuthUntrustedGeographies":false,"useAccountAttributes":false,"useDictionary":false,"useIdentityAttributes":false,"validateAgainstAccountId":true,"validateAgainstAccountName":true,"sourceIds":["2c91808382ffee0b01830de154f14034","2c91808582ffee0c01830de36511405f"]}`) // Passwordpolicyv3dto | 

    var passwordpolicyv3dto v1.Passwordpolicyv3dto
    if err := json.Unmarshal(passwordpolicyv3dto, &passwordpolicyv3dto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PasswordPoliciesAPI.CreatePasswordPolicyV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Passwordpolicyv3dto(passwordpolicyv3dto).Execute()
	  //resp, r, err := apiClient.PasswordPoliciesAPI.CreatePasswordPolicyV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Passwordpolicyv3dto(passwordpolicyv3dto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordPoliciesAPI.CreatePasswordPolicyV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreatePasswordPolicyV1`: Passwordpolicyv3dto
    fmt.Fprintf(os.Stdout, "Response from `PasswordPoliciesAPI.CreatePasswordPolicyV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-password-policy-v1
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
Delete password policy by id
This API deletes the specified password policy.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-password-policy-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of password policy to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeletePasswordPolicyV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/password_policies"
)

func main() {
    id := `ff808081838d9e9d01838da6a03e0002` // string | The ID of password policy to delete. # string | The ID of password policy to delete.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.PasswordPoliciesAPI.DeletePasswordPolicyV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.PasswordPoliciesAPI.DeletePasswordPolicyV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordPoliciesAPI.DeletePasswordPolicyV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-password-policy-by-id-v1
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
Get password policy by id
This API returns the password policy for the specified ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-password-policy-by-id-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of password policy to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPasswordPolicyByIdV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**Passwordpolicyv3dto**](../models/passwordpolicyv3dto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/password_policies"
)

func main() {
    id := `ff808081838d9e9d01838da6a03e0005` // string | The ID of password policy to retrieve. # string | The ID of password policy to retrieve.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PasswordPoliciesAPI.GetPasswordPolicyByIdV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.PasswordPoliciesAPI.GetPasswordPolicyByIdV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordPoliciesAPI.GetPasswordPolicyByIdV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPasswordPolicyByIdV1`: Passwordpolicyv3dto
    fmt.Fprintf(os.Stdout, "Response from `PasswordPoliciesAPI.GetPasswordPolicyByIdV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-password-policies-v1
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
List password policies
This gets list of all Password Policies.
Requires role of ORG_ADMIN

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-password-policies-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListPasswordPoliciesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Passwordpolicyv3dto**](../models/passwordpolicyv3dto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/password_policies"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PasswordPoliciesAPI.ListPasswordPoliciesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.PasswordPoliciesAPI.ListPasswordPoliciesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordPoliciesAPI.ListPasswordPoliciesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListPasswordPoliciesV1`: []Passwordpolicyv3dto
    fmt.Fprintf(os.Stdout, "Response from `PasswordPoliciesAPI.ListPasswordPoliciesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## set-password-policy-v1
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
Update password policy by id
This API updates the specified password policy.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-password-policy-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of password policy to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetPasswordPolicyV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **passwordpolicyv3dto** | [**Passwordpolicyv3dto**](../models/passwordpolicyv3dto) |  | 

### Return type

[**Passwordpolicyv3dto**](../models/passwordpolicyv3dto)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/password_policies"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/password_policies"
)

func main() {
    id := `ff808081838d9e9d01838da6a03e0007` // string | The ID of password policy to update. # string | The ID of password policy to update.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    passwordpolicyv3dto := []byte(`{"description":"Password Policy after update.","id":"2c91808e7d976f3b017d9f5ceae440c8","name":"Improved Password Policy","dateCreated":1639056206564,"lastUpdated":1662385430753,"firstExpirationReminder":90,"accountIdMinWordLength":3,"accountNameMinWordLength":3,"maxLength":0,"maxRepeatedChars":4,"minAlpha":1,"minCharacterTypes":-1,"minLength":8,"minLower":0,"minNumeric":1,"minSpecial":0,"minUpper":0,"passwordExpiration":90,"defaultPolicy":false,"enablePasswdExpiration":false,"requireStrongAuthn":false,"requireStrongAuthOffNetwork":false,"requireStrongAuthUntrustedGeographies":false,"useAccountAttributes":false,"useDictionary":false,"useIdentityAttributes":false,"validateAgainstAccountId":true,"validateAgainstAccountName":true,"sourceIds":["2c91808382ffee0b01830de154f14034","2c91808582ffee0c01830de36511405f"]}`) // Passwordpolicyv3dto | 

    var passwordpolicyv3dto v1.Passwordpolicyv3dto
    if err := json.Unmarshal(passwordpolicyv3dto, &passwordpolicyv3dto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PasswordPoliciesAPI.SetPasswordPolicyV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Passwordpolicyv3dto(passwordpolicyv3dto).Execute()
	  //resp, r, err := apiClient.PasswordPoliciesAPI.SetPasswordPolicyV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Passwordpolicyv3dto(passwordpolicyv3dto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordPoliciesAPI.SetPasswordPolicyV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetPasswordPolicyV1`: Passwordpolicyv3dto
    fmt.Fprintf(os.Stdout, "Response from `PasswordPoliciesAPI.SetPasswordPolicyV1`: %v\n", resp)
}
```

[[Back to top]](#)

