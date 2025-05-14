---
id: beta-password-policies
title: PasswordPolicies
pagination_label: PasswordPolicies
sidebar_label: PasswordPolicies
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PasswordPolicies', 'BetaPasswordPolicies'] 
slug: /tools/sdk/go/beta/methods/password-policies
tags: ['SDK', 'Software Development Kit', 'PasswordPolicies', 'BetaPasswordPolicies']
---

# PasswordPoliciesAPI
  Use these APIs to implement password policies functionality.
These APIs allow you to define the policy parameters for choosing passwords.

IdentityNow comes with a default policy that you can modify to define the password requirements your users must meet to log in to IdentityNow, such as requiring a minimum password length, including special characters, and disallowing certain patterns.
If you have licensed Password Management, you can create additional password policies beyond the default one to manage passwords for supported sources in your org.

In the Identity Security Cloud Admin panel, administrators can use the Password Mgmt dropdown menu to select Sync Groups.

Refer to [Managing Password Policies](https://documentation.sailpoint.com/saas/help/pwd/pwd_policies/pwd_policies.html) for more information about password policies.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-password-policy**](#create-password-policy) | **Post** `/password-policies` | Create Password Policy
[**delete-password-policy**](#delete-password-policy) | **Delete** `/password-policies/{id}` | Delete Password Policy by ID
[**get-password-policy-by-id**](#get-password-policy-by-id) | **Get** `/password-policies/{id}` | Get Password Policy by ID
[**list-password-policies**](#list-password-policies) | **Get** `/password-policies` | List Password Policies
[**set-password-policy**](#set-password-policy) | **Put** `/password-policies/{id}` | Update Password Policy by ID


## create-password-policy
Create Password Policy
This API creates the specified password policy.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-password-policy)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreatePasswordPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordPolicyV3Dto** | [**PasswordPolicyV3Dto**](../models/password-policy-v3-dto) |  | 

### Return type

[**PasswordPolicyV3Dto**](../models/password-policy-v3-dto)

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    passwordpolicyv3dto := []byte(`{
          "validateAgainstAccountName" : true,
          "minLength" : 8,
          "description" : "Information about the Password Policy",
          "requireStrongAuthUntrustedGeographies" : true,
          "enablePasswdExpiration" : true,
          "minNumeric" : 8,
          "lastUpdated" : "2000-01-23T04:56:07.000+00:00",
          "validateAgainstAccountId" : false,
          "dateCreated" : "2000-01-23T04:56:07.000+00:00",
          "accountNameMinWordLength" : 6,
          "minUpper" : 8,
          "firstExpirationReminder" : 45,
          "modified" : "modified",
          "id" : "2c91808e7d976f3b017d9f5ceae440c8",
          "requireStrongAuthn" : true,
          "useDictionary" : false,
          "minSpecial" : 8,
          "sourceIds" : [ "2c91808382ffee0b01830de154f14034", "2f98808382ffee0b01830de154f12134" ],
          "passwordExpiration" : 8,
          "maxRepeatedChars" : 3,
          "minCharacterTypes" : 5,
          "minAlpha" : 5,
          "created" : "created",
          "useAccountAttributes" : false,
          "accountIdMinWordLength" : 4,
          "minLower" : 8,
          "useIdentityAttributes" : false,
          "defaultPolicy" : true,
          "requireStrongAuthOffNetwork" : true,
          "name" : "PasswordPolicy Example",
          "maxLength" : 25
        }`) // PasswordPolicyV3Dto | 

    var passwordPolicyV3Dto beta.PasswordPolicyV3Dto
    if err := json.Unmarshal(passwordpolicyv3dto, &passwordPolicyV3Dto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.PasswordPoliciesAPI.CreatePasswordPolicy(context.Background()).PasswordPolicyV3Dto(passwordPolicyV3Dto).Execute()
	  //resp, r, err := apiClient.Beta.PasswordPoliciesAPI.CreatePasswordPolicy(context.Background()).PasswordPolicyV3Dto(passwordPolicyV3Dto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordPoliciesAPI.CreatePasswordPolicy``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreatePasswordPolicy`: PasswordPolicyV3Dto
    fmt.Fprintf(os.Stdout, "Response from `PasswordPoliciesAPI.CreatePasswordPolicy`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-password-policy
Delete Password Policy by ID
This API deletes the specified password policy.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-password-policy)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of password policy to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeletePasswordPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


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
    id := `ff808081838d9e9d01838da6a03e0002` // string | The ID of password policy to delete. # string | The ID of password policy to delete.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.PasswordPoliciesAPI.DeletePasswordPolicy(context.Background(), id).Execute()
	  //r, err := apiClient.Beta.PasswordPoliciesAPI.DeletePasswordPolicy(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordPoliciesAPI.DeletePasswordPolicy``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-password-policy-by-id
Get Password Policy by ID
This API returns the password policy for the specified ID.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-password-policy-by-id)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of password policy to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPasswordPolicyByIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**PasswordPolicyV3Dto**](../models/password-policy-v3-dto)

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
    id := `ff808081838d9e9d01838da6a03e0005` // string | The ID of password policy to retrieve. # string | The ID of password policy to retrieve.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.PasswordPoliciesAPI.GetPasswordPolicyById(context.Background(), id).Execute()
	  //resp, r, err := apiClient.Beta.PasswordPoliciesAPI.GetPasswordPolicyById(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordPoliciesAPI.GetPasswordPolicyById``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPasswordPolicyById`: PasswordPolicyV3Dto
    fmt.Fprintf(os.Stdout, "Response from `PasswordPoliciesAPI.GetPasswordPolicyById`: %v\n", resp)
}
```

[[Back to top]](#)

## list-password-policies
List Password Policies
This gets list of all Password Policies.
Requires role of ORG_ADMIN

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-password-policies)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListPasswordPoliciesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]PasswordPolicyV3Dto**](../models/password-policy-v3-dto)

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
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.PasswordPoliciesAPI.ListPasswordPolicies(context.Background()).Execute()
	  //resp, r, err := apiClient.Beta.PasswordPoliciesAPI.ListPasswordPolicies(context.Background()).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordPoliciesAPI.ListPasswordPolicies``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListPasswordPolicies`: []PasswordPolicyV3Dto
    fmt.Fprintf(os.Stdout, "Response from `PasswordPoliciesAPI.ListPasswordPolicies`: %v\n", resp)
}
```

[[Back to top]](#)

## set-password-policy
Update Password Policy by ID
This API updates the specified password policy.

[API Spec](https://developer.sailpoint.com/docs/api/beta/set-password-policy)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of password policy to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetPasswordPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **passwordPolicyV3Dto** | [**PasswordPolicyV3Dto**](../models/password-policy-v3-dto) |  | 

### Return type

[**PasswordPolicyV3Dto**](../models/password-policy-v3-dto)

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ff808081838d9e9d01838da6a03e0007` // string | The ID of password policy to update. # string | The ID of password policy to update.
    passwordpolicyv3dto := []byte(`{
          "validateAgainstAccountName" : true,
          "minLength" : 8,
          "description" : "Information about the Password Policy",
          "requireStrongAuthUntrustedGeographies" : true,
          "enablePasswdExpiration" : true,
          "minNumeric" : 8,
          "lastUpdated" : "2000-01-23T04:56:07.000+00:00",
          "validateAgainstAccountId" : false,
          "dateCreated" : "2000-01-23T04:56:07.000+00:00",
          "accountNameMinWordLength" : 6,
          "minUpper" : 8,
          "firstExpirationReminder" : 45,
          "modified" : "modified",
          "id" : "2c91808e7d976f3b017d9f5ceae440c8",
          "requireStrongAuthn" : true,
          "useDictionary" : false,
          "minSpecial" : 8,
          "sourceIds" : [ "2c91808382ffee0b01830de154f14034", "2f98808382ffee0b01830de154f12134" ],
          "passwordExpiration" : 8,
          "maxRepeatedChars" : 3,
          "minCharacterTypes" : 5,
          "minAlpha" : 5,
          "created" : "created",
          "useAccountAttributes" : false,
          "accountIdMinWordLength" : 4,
          "minLower" : 8,
          "useIdentityAttributes" : false,
          "defaultPolicy" : true,
          "requireStrongAuthOffNetwork" : true,
          "name" : "PasswordPolicy Example",
          "maxLength" : 25
        }`) // PasswordPolicyV3Dto | 

    var passwordPolicyV3Dto beta.PasswordPolicyV3Dto
    if err := json.Unmarshal(passwordpolicyv3dto, &passwordPolicyV3Dto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.PasswordPoliciesAPI.SetPasswordPolicy(context.Background(), id).PasswordPolicyV3Dto(passwordPolicyV3Dto).Execute()
	  //resp, r, err := apiClient.Beta.PasswordPoliciesAPI.SetPasswordPolicy(context.Background(), id).PasswordPolicyV3Dto(passwordPolicyV3Dto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordPoliciesAPI.SetPasswordPolicy``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetPasswordPolicy`: PasswordPolicyV3Dto
    fmt.Fprintf(os.Stdout, "Response from `PasswordPoliciesAPI.SetPasswordPolicy`: %v\n", resp)
}
```

[[Back to top]](#)

