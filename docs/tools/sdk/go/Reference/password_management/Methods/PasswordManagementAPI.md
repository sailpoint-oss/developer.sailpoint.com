---
id: v1-password-management
title: PasswordManagement
pagination_label: PasswordManagement
sidebar_label: PasswordManagement
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PasswordManagement', 'V1PasswordManagement'] 
slug: /tools/sdk/go/passwordmanagement/methods/password-management
tags: ['SDK', 'Software Development Kit', 'PasswordManagement', 'V1PasswordManagement']
---

# PasswordManagementAPI
  Use this API to implement password management functionality.  
With this functionality in place, users can manage their identity passwords for all their applications.

In Identity Security Cloud, users can select their names in the upper right corner of the page and use the drop-down menu to select Password Manager. 
Password Manager lists the user&#39;s identity&#39;s applications, possibly grouped to share passwords. 
Users can then select &#39;Change Password&#39; to update their passwords. 

Grouping passwords allows users to update their passwords more broadly, rather than requiring them to update each password individually. 
Password Manager may list the applications and sources in the following groups:

- Password Group: This refers to a group of applications that share a password. 
For example, a user can use the same password for Google Drive, Google Mail, and YouTube. 
Updating the password for the password group updates the password for all its included applications.

- Multi-Application Source: This refers to a source with multiple applications that share a password. 
For example, a user can have a source, G Suite, that includes the Google Calendar, Google Drive, and Google Mail applications. 
Updating the password for the multi-application source updates the password for all its included applications. 

- Applications: These are applications that do not share passwords with other applications.

An organization may require some authentication for users to update their passwords. 
Users may be required to answer security questions or use a third-party authenticator before they can confirm their updates. 

Refer to [Managing Passwords](https://documentation.sailpoint.com/saas/user-help/accounts/passwords.html) for more information about password management.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-digit-token-v1**](#create-digit-token-v1) | **Post** `/generate-password-reset-token/v1/digit` | Generate a digit token
[**get-password-change-status-v1**](#get-password-change-status-v1) | **Get** `/password-change-status/v1/{id}` | Get password change request status
[**query-password-info-v1**](#query-password-info-v1) | **Post** `/query-password-info/v1` | Query password info
[**set-password-v1**](#set-password-v1) | **Post** `/set-password/v1` | Set identity&#39;s password


## create-digit-token-v1
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
Generate a digit token
This API is used to generate a digit token for password management. Requires authorization scope of "idn:password-digit-token:create".

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-digit-token-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateDigitTokenV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **passworddigittokenreset** | [**Passworddigittokenreset**](../models/passworddigittokenreset) |  | 

### Return type

[**Passworddigittoken**](../models/passworddigittoken)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/password_management"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/password_management"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    passworddigittokenreset := []byte(`{"userId":"Abby.Smith","length":8,"durationMinutes":5}`) // Passworddigittokenreset | 

    var passworddigittokenreset v1.Passworddigittokenreset
    if err := json.Unmarshal(passworddigittokenreset, &passworddigittokenreset); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PasswordManagementAPI.CreateDigitTokenV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Passworddigittokenreset(passworddigittokenreset).Execute()
	  //resp, r, err := apiClient.PasswordManagementAPI.CreateDigitTokenV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Passworddigittokenreset(passworddigittokenreset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordManagementAPI.CreateDigitTokenV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateDigitTokenV1`: Passworddigittoken
    fmt.Fprintf(os.Stdout, "Response from `PasswordManagementAPI.CreateDigitTokenV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-password-change-status-v1
Get password change request status
This API returns the status of a password change request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-password-change-status-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Password change request ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPasswordChangeStatusV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Passwordstatus**](../models/passwordstatus)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/password_management"
)

func main() {
    id := `089899f13a8f4da7824996191587bab9` // string | Password change request ID # string | Password change request ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PasswordManagementAPI.GetPasswordChangeStatusV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.PasswordManagementAPI.GetPasswordChangeStatusV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordManagementAPI.GetPasswordChangeStatusV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPasswordChangeStatusV1`: Passwordstatus
    fmt.Fprintf(os.Stdout, "Response from `PasswordManagementAPI.GetPasswordChangeStatusV1`: %v\n", resp)
}
```

[[Back to top]](#)

## query-password-info-v1
Query password info
This API is used to query password related information. 


[API Spec](https://developer.sailpoint.com/docs/api/v1/query-password-info-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiQueryPasswordInfoV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordinfoquerydto** | [**Passwordinfoquerydto**](../models/passwordinfoquerydto) |  | 

### Return type

[**Passwordinfo**](../models/passwordinfo)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/password_management"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/password_management"
)

func main() {
    passwordinfoquerydto := []byte(``) // Passwordinfoquerydto | 

    var passwordinfoquerydto v1.Passwordinfoquerydto
    if err := json.Unmarshal(passwordinfoquerydto, &passwordinfoquerydto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PasswordManagementAPI.QueryPasswordInfoV1(context.Background()).Passwordinfoquerydto(passwordinfoquerydto).Execute()
	  //resp, r, err := apiClient.PasswordManagementAPI.QueryPasswordInfoV1(context.Background()).Passwordinfoquerydto(passwordinfoquerydto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordManagementAPI.QueryPasswordInfoV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `QueryPasswordInfoV1`: Passwordinfo
    fmt.Fprintf(os.Stdout, "Response from `PasswordManagementAPI.QueryPasswordInfoV1`: %v\n", resp)
}
```

[[Back to top]](#)

## set-password-v1
Set identity's password
This API is used to set a password for an identity. 

An identity can change their own password (as well as any of their accounts' passwords) if they use a token generated by their ISC user, such as a [personal access token](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens) or ["authorization_code" derived OAuth token](https://developer.sailpoint.com/idn/api/authentication#authorization-code-grant-flow).

>**Note: If you want to set an identity's source account password, you must enable `PASSWORD` as one of the source's features. You can use the [PATCH Source endpoint](https://developer.sailpoint.com/docs/api/v3/update-source) to add the `PASSWORD` feature.**

To generate the encryptedPassword (RSA encrypted using publicKey) for the request body, run the following command:

```bash
echo -n "myPassword" | openssl pkeyutl -encrypt -inkey public_key.pem -pubin | base64
```

In this example, myPassword is the plain text password being set and encrypted, and public_key.pem is the path to the public key file. You can retrieve the required publicKey, along with other information like identityId, sourceId, publicKeyId, accounts, and policies, using the Query Password Info endpoint.

To successfully run this command, you must have OpenSSL installed on your machine. If OpenSSL is unavailable, consider using the Virtual Appliance (VA), which has OpenSSL pre-installed and configured.

If you are using a Windows machine, refer to this [guide](https://tecadmin.net/install-openssl-on-windows/) for instructions on installing OpenSSL.

You can then use [Get Password Change Request Status](https://developer.sailpoint.com/idn/api/v3/get-password-change-status) to check the password change request status. To do so, you must provide the `requestId` from your earlier request to set the password. 


[API Spec](https://developer.sailpoint.com/docs/api/v1/set-password-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetPasswordV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordchangerequest** | [**Passwordchangerequest**](../models/passwordchangerequest) |  | 

### Return type

[**Passwordchangeresponse**](../models/passwordchangeresponse)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/password_management"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/password_management"
)

func main() {
    passwordchangerequest := []byte(``) // Passwordchangerequest | 

    var passwordchangerequest v1.Passwordchangerequest
    if err := json.Unmarshal(passwordchangerequest, &passwordchangerequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PasswordManagementAPI.SetPasswordV1(context.Background()).Passwordchangerequest(passwordchangerequest).Execute()
	  //resp, r, err := apiClient.PasswordManagementAPI.SetPasswordV1(context.Background()).Passwordchangerequest(passwordchangerequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordManagementAPI.SetPasswordV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetPasswordV1`: Passwordchangeresponse
    fmt.Fprintf(os.Stdout, "Response from `PasswordManagementAPI.SetPasswordV1`: %v\n", resp)
}
```

[[Back to top]](#)

