---
id: mfa-controller
title: MFAController
pagination_label: MFAController
sidebar_label: MFAController
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MFAController', 'MFAController'] 
slug: /tools/sdk/go/v3/methods/mfa-controller
tags: ['SDK', 'Software Development Kit', 'MFAController', 'MFAController']
---

# MFAControllerAPI
  This API used for multifactor authentication functionality belong to gov-multi-auth service. This controller allow you to verify authentication by specified method 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-send-token**](#create-send-token) | **Post** `/mfa/token/send` | Create and send user token
[**ping-verification-status**](#ping-verification-status) | **Post** `/mfa/{method}/poll` | Polling mfa method by verificationpollrequest
[**send-duo-verify-request**](#send-duo-verify-request) | **Post** `/mfa/duo-web/verify` | Verifying authentication via duo method
[**send-kba-answers**](#send-kba-answers) | **Post** `/mfa/kba/authenticate` | Authenticate kba provided mfa method
[**send-okta-verify-request**](#send-okta-verify-request) | **Post** `/mfa/okta-verify/verify` | Verifying authentication via okta method
[**send-token-auth-request**](#send-token-auth-request) | **Post** `/mfa/token/authenticate` | Authenticate token provided mfa method


## create-send-token
Create and send user token
This API send token request.

[API Spec](https://developer.sailpoint.com/docs/api/v3/create-send-token)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSendTokenRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendTokenRequest** | [**SendTokenRequest**](../models/send-token-request) |  | 

### Return type

[**SendTokenResponse**](../models/send-token-response)

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sendtokenrequest := []byte(`{
          "userAlias" : "will.albin",
          "deliveryType" : "EMAIL_WORK"
        }`) // SendTokenRequest | 

    var sendTokenRequest v3.SendTokenRequest
    if err := json.Unmarshal(sendtokenrequest, &sendTokenRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.MFAControllerAPI.CreateSendToken(context.Background()).SendTokenRequest(sendTokenRequest).Execute()
	  //resp, r, err := apiClient.V3.MFAControllerAPI.CreateSendToken(context.Background()).SendTokenRequest(sendTokenRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MFAControllerAPI.CreateSendToken``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSendToken`: SendTokenResponse
    fmt.Fprintf(os.Stdout, "Response from `MFAControllerAPI.CreateSendToken`: %v\n", resp)
}
```

[[Back to top]](#)

## ping-verification-status
Polling mfa method by verificationpollrequest
This API poll the VerificationPollRequest for the specified MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/v3/ping-verification-status)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**method** | **string** | The name of the MFA method. The currently supported method names are &#39;okta-verify&#39;, &#39;duo-web&#39;, &#39;kba&#39;,&#39;token&#39;, &#39;rsa&#39; | 

### Other Parameters

Other parameters are passed through a pointer to a apiPingVerificationStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **verificationPollRequest** | [**VerificationPollRequest**](../models/verification-poll-request) |  | 

### Return type

[**VerificationResponse**](../models/verification-response)

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    method := `okta-verify` // string | The name of the MFA method. The currently supported method names are 'okta-verify', 'duo-web', 'kba','token', 'rsa' # string | The name of the MFA method. The currently supported method names are 'okta-verify', 'duo-web', 'kba','token', 'rsa'
    verificationpollrequest := []byte(`{
          "requestId" : "089899f13a8f4da7824996191587bab9"
        }`) // VerificationPollRequest | 

    var verificationPollRequest v3.VerificationPollRequest
    if err := json.Unmarshal(verificationpollrequest, &verificationPollRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.MFAControllerAPI.PingVerificationStatus(context.Background(), method).VerificationPollRequest(verificationPollRequest).Execute()
	  //resp, r, err := apiClient.V3.MFAControllerAPI.PingVerificationStatus(context.Background(), method).VerificationPollRequest(verificationPollRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MFAControllerAPI.PingVerificationStatus``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PingVerificationStatus`: VerificationResponse
    fmt.Fprintf(os.Stdout, "Response from `MFAControllerAPI.PingVerificationStatus`: %v\n", resp)
}
```

[[Back to top]](#)

## send-duo-verify-request
Verifying authentication via duo method
This API Authenticates the user via Duo-Web MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/v3/send-duo-verify-request)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSendDuoVerifyRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **duoVerificationRequest** | [**DuoVerificationRequest**](../models/duo-verification-request) |  | 

### Return type

[**VerificationResponse**](../models/verification-response)

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    duoverificationrequest := []byte(`{
          "signedResponse" : "AUTH|d2lsbC5hbGJpbnxESTZNMFpHSThKQVRWTVpZN0M5VXwxNzAxMjUzMDg5|f1f5f8ced5b340f3d303b05d0efa0e43b6a8f970:APP|d2lsbC5hbGJpbnxESTZNMFpHSThKQVRWTVpZN0M5VXwxNzAxMjU2NjE5|cb44cf44353f5127edcae31b1da0355f87357db2",
          "userId" : "2c9180947f0ef465017f215cbcfd004b"
        }`) // DuoVerificationRequest | 

    var duoVerificationRequest v3.DuoVerificationRequest
    if err := json.Unmarshal(duoverificationrequest, &duoVerificationRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.MFAControllerAPI.SendDuoVerifyRequest(context.Background()).DuoVerificationRequest(duoVerificationRequest).Execute()
	  //resp, r, err := apiClient.V3.MFAControllerAPI.SendDuoVerifyRequest(context.Background()).DuoVerificationRequest(duoVerificationRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MFAControllerAPI.SendDuoVerifyRequest``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SendDuoVerifyRequest`: VerificationResponse
    fmt.Fprintf(os.Stdout, "Response from `MFAControllerAPI.SendDuoVerifyRequest`: %v\n", resp)
}
```

[[Back to top]](#)

## send-kba-answers
Authenticate kba provided mfa method
This API Authenticate user in KBA MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/v3/send-kba-answers)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSendKbaAnswersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kbaAnswerRequestItem** | [**[]KbaAnswerRequestItem**](../models/kba-answer-request-item) |  | 

### Return type

[**KbaAuthResponse**](../models/kba-auth-response)

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    kbaanswerrequestitem := []byte(`[{id=173423, answer=822cd15d6c15aa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a0859a2fea34}, {id=c54fee53-2d63-4fc5-9259-3e93b9994135, answer=9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08}]`) // []KbaAnswerRequestItem | 

    var kbaAnswerRequestItem []v3.KbaAnswerRequestItem
    if err := json.Unmarshal(kbaanswerrequestitem, &kbaAnswerRequestItem); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.MFAControllerAPI.SendKbaAnswers(context.Background()).KbaAnswerRequestItem(kbaAnswerRequestItem).Execute()
	  //resp, r, err := apiClient.V3.MFAControllerAPI.SendKbaAnswers(context.Background()).KbaAnswerRequestItem(kbaAnswerRequestItem).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MFAControllerAPI.SendKbaAnswers``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SendKbaAnswers`: KbaAuthResponse
    fmt.Fprintf(os.Stdout, "Response from `MFAControllerAPI.SendKbaAnswers`: %v\n", resp)
}
```

[[Back to top]](#)

## send-okta-verify-request
Verifying authentication via okta method
This API Authenticates the user via Okta-Verify MFA method. Request requires a header called 'slpt-forwarding', and it must contain a remote IP Address of caller.

[API Spec](https://developer.sailpoint.com/docs/api/v3/send-okta-verify-request)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSendOktaVerifyRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oktaVerificationRequest** | [**OktaVerificationRequest**](../models/okta-verification-request) |  | 

### Return type

[**VerificationResponse**](../models/verification-response)

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    oktaverificationrequest := []byte(`{
          "userId" : "example@mail.com"
        }`) // OktaVerificationRequest | 

    var oktaVerificationRequest v3.OktaVerificationRequest
    if err := json.Unmarshal(oktaverificationrequest, &oktaVerificationRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.MFAControllerAPI.SendOktaVerifyRequest(context.Background()).OktaVerificationRequest(oktaVerificationRequest).Execute()
	  //resp, r, err := apiClient.V3.MFAControllerAPI.SendOktaVerifyRequest(context.Background()).OktaVerificationRequest(oktaVerificationRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MFAControllerAPI.SendOktaVerifyRequest``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SendOktaVerifyRequest`: VerificationResponse
    fmt.Fprintf(os.Stdout, "Response from `MFAControllerAPI.SendOktaVerifyRequest`: %v\n", resp)
}
```

[[Back to top]](#)

## send-token-auth-request
Authenticate token provided mfa method
This API Authenticate user in Token MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/v3/send-token-auth-request)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSendTokenAuthRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenAuthRequest** | [**TokenAuthRequest**](../models/token-auth-request) |  | 

### Return type

[**TokenAuthResponse**](../models/token-auth-response)

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    tokenauthrequest := []byte(`{
          "userAlias" : "will.albin",
          "deliveryType" : "EMAIL_WORK",
          "token" : "12345"
        }`) // TokenAuthRequest | 

    var tokenAuthRequest v3.TokenAuthRequest
    if err := json.Unmarshal(tokenauthrequest, &tokenAuthRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.MFAControllerAPI.SendTokenAuthRequest(context.Background()).TokenAuthRequest(tokenAuthRequest).Execute()
	  //resp, r, err := apiClient.V3.MFAControllerAPI.SendTokenAuthRequest(context.Background()).TokenAuthRequest(tokenAuthRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MFAControllerAPI.SendTokenAuthRequest``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SendTokenAuthRequest`: TokenAuthResponse
    fmt.Fprintf(os.Stdout, "Response from `MFAControllerAPI.SendTokenAuthRequest`: %v\n", resp)
}
```

[[Back to top]](#)

