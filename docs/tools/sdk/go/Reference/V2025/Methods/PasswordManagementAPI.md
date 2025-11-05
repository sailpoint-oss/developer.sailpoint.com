---
id: v2025-password-management
title: PasswordManagement
pagination_label: PasswordManagement
sidebar_label: PasswordManagement
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PasswordManagement', 'V2025PasswordManagement'] 
slug: /tools/sdk/go/v2025/methods/password-management
tags: ['SDK', 'Software Development Kit', 'PasswordManagement', 'V2025PasswordManagement']
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-digit-token**](#create-digit-token) | **Post** `/generate-password-reset-token/digit` | Generate a digit token
[**get-password-change-status**](#get-password-change-status) | **Get** `/password-change-status/{id}` | Get password change request status
[**query-password-info**](#query-password-info) | **Post** `/query-password-info` | Query password info
[**set-password**](#set-password) | **Post** `/set-password` | Set identity&#39;s password


## create-digit-token
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

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-digit-token)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateDigitTokenRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **passwordDigitTokenReset** | [**PasswordDigitTokenReset**](../models/password-digit-token-reset) |  | 

### Return type

[**PasswordDigitToken**](../models/password-digit-token)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    passworddigittokenreset := []byte(`{
          "durationMinutes" : 5,
          "length" : 8,
          "userId" : "Abby.Smith"
        }`) // PasswordDigitTokenReset | 

    var passwordDigitTokenReset v2025.PasswordDigitTokenReset
    if err := json.Unmarshal(passworddigittokenreset, &passwordDigitTokenReset); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.PasswordManagementAPI.CreateDigitToken(context.Background()).XSailPointExperimental(xSailPointExperimental).PasswordDigitTokenReset(passwordDigitTokenReset).Execute()
	  //resp, r, err := apiClient.V2025.PasswordManagementAPI.CreateDigitToken(context.Background()).XSailPointExperimental(xSailPointExperimental).PasswordDigitTokenReset(passwordDigitTokenReset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordManagementAPI.CreateDigitToken``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateDigitToken`: PasswordDigitToken
    fmt.Fprintf(os.Stdout, "Response from `PasswordManagementAPI.CreateDigitToken`: %v\n", resp)
}
```

[[Back to top]](#)

## get-password-change-status
Get password change request status
This API returns the status of a password change request.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-password-change-status)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Password change request ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPasswordChangeStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**PasswordStatus**](../models/password-status)

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
    id := `089899f13a8f4da7824996191587bab9` // string | Password change request ID # string | Password change request ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.PasswordManagementAPI.GetPasswordChangeStatus(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2025.PasswordManagementAPI.GetPasswordChangeStatus(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordManagementAPI.GetPasswordChangeStatus``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPasswordChangeStatus`: PasswordStatus
    fmt.Fprintf(os.Stdout, "Response from `PasswordManagementAPI.GetPasswordChangeStatus`: %v\n", resp)
}
```

[[Back to top]](#)

## query-password-info
Query password info
This API is used to query password related information. 


[API Spec](https://developer.sailpoint.com/docs/api/v2025/query-password-info)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiQueryPasswordInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordInfoQueryDTO** | [**PasswordInfoQueryDTO**](../models/password-info-query-dto) |  | 

### Return type

[**PasswordInfo**](../models/password-info)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    passwordinfoquerydto := []byte(`{
          "sourceName" : "My-AD",
          "userName" : "Abby.Smith"
        }`) // PasswordInfoQueryDTO | 

    var passwordInfoQueryDTO v2025.PasswordInfoQueryDTO
    if err := json.Unmarshal(passwordinfoquerydto, &passwordInfoQueryDTO); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.PasswordManagementAPI.QueryPasswordInfo(context.Background()).PasswordInfoQueryDTO(passwordInfoQueryDTO).Execute()
	  //resp, r, err := apiClient.V2025.PasswordManagementAPI.QueryPasswordInfo(context.Background()).PasswordInfoQueryDTO(passwordInfoQueryDTO).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordManagementAPI.QueryPasswordInfo``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `QueryPasswordInfo`: PasswordInfo
    fmt.Fprintf(os.Stdout, "Response from `PasswordManagementAPI.QueryPasswordInfo`: %v\n", resp)
}
```

[[Back to top]](#)

## set-password
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


[API Spec](https://developer.sailpoint.com/docs/api/v2025/set-password)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetPasswordRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordChangeRequest** | [**PasswordChangeRequest**](../models/password-change-request) |  | 

### Return type

[**PasswordChangeResponse**](../models/password-change-response)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    passwordchangerequest := []byte(`{
          "sourceId" : "8a807d4c73c545510173c545d4b60246",
          "accountId" : "CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com",
          "identityId" : "8a807d4c73c545510173c545f0a002ff",
          "publicKeyId" : "YWQ2NjQ4MTItZjY0NC00MWExLWFjMjktOGNmMzU3Y2VlNjk2",
          "encryptedPassword" : "XzN+YwKgr2C+InkMYFMBG3UtjMEw5ZIql/XFlXo8cJNeslmkplx6vn4kd4/43IF9STBk5RnzR6XmjpEO+FwHDoiBwYZAkAZK/Iswxk4OdybG6Y4MStJCOCiK8osKr35IMMSV/mbO4wAeltoCk7daTWzTGLiI6UaT5tf+F2EgdjJZ7YqM8W8r7aUWsm3p2Xt01Y46ZRx0QaM91QruiIx2rECFT2pUO0wr+7oQ77jypATyGWRtADsu3YcvCk/6U5MqCnXMzKBcRas7NnZdSL/d5H1GglVGz3VLPMaivG4/oL4chOMmFCRl/zVsGxZ9RhN8rxsRGFFKn+rhExTi+bax3A=="
        }`) // PasswordChangeRequest | 

    var passwordChangeRequest v2025.PasswordChangeRequest
    if err := json.Unmarshal(passwordchangerequest, &passwordChangeRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.PasswordManagementAPI.SetPassword(context.Background()).PasswordChangeRequest(passwordChangeRequest).Execute()
	  //resp, r, err := apiClient.V2025.PasswordManagementAPI.SetPassword(context.Background()).PasswordChangeRequest(passwordChangeRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordManagementAPI.SetPassword``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetPassword`: PasswordChangeResponse
    fmt.Fprintf(os.Stdout, "Response from `PasswordManagementAPI.SetPassword`: %v\n", resp)
}
```

[[Back to top]](#)

