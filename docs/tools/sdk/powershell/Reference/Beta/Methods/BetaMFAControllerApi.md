---
id: beta-mfa-controller
title: MFAController
pagination_label: MFAController
sidebar_label: MFAController
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MFAController', 'BetaMFAController'] 
slug: /tools/sdk/powershell/beta/methods/mfa-controller
tags: ['SDK', 'Software Development Kit', 'MFAController', 'BetaMFAController']
---

# MFAController
  This API used for multifactor authentication functionality belong to gov-multi-auth service. This controller allow you to verify authentication by specified method 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BetaSendToken**](#create-send-token) | **POST** `/mfa/token/send` | Create and send user token
[**Ping-BetaVerificationStatus**](#ping-verification-status) | **POST** `/mfa/{method}/poll` | Polling MFA method by VerificationPollRequest
[**Send-BetaDuoVerifyRequest**](#send-duo-verify-request) | **POST** `/mfa/duo-web/verify` | Verifying authentication via Duo method
[**Send-BetaKbaAnswers**](#send-kba-answers) | **POST** `/mfa/kba/authenticate` | Authenticate KBA provided MFA method
[**Send-BetaOktaVerifyRequest**](#send-okta-verify-request) | **POST** `/mfa/okta-verify/verify` | Verifying authentication via Okta method
[**Send-BetaTokenAuthRequest**](#send-token-auth-request) | **POST** `/mfa/token/authenticate` | Authenticate Token provided MFA method


## create-send-token
This API send token request.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-send-token)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | SendTokenRequest | [**SendTokenRequest**](../models/send-token-request) | True  | 

### Return type
[**SendTokenResponse**](../models/send-token-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Token send status. | SendTokenResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SendTokenRequest = @"{
  "userAlias" : "will.albin",
  "deliveryType" : "EMAIL_WORK"
}"@

# Create and send user token

try {
    $Result = ConvertFrom-JsonToSendTokenRequest -Json $SendTokenRequest
    New-BetaSendToken -SendTokenRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-BetaSendToken -SendTokenRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaSendToken"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## ping-verification-status
This API poll the VerificationPollRequest for the specified MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/beta/ping-verification-status)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Method | **String** | True  | The name of the MFA method. The currently supported method names are 'okta-verify', 'duo-web', 'kba','token', 'rsa'
 Body  | VerificationPollRequest | [**VerificationPollRequest**](../models/verification-poll-request) | True  | 

### Return type
[**VerificationResponse**](../models/verification-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | MFA VerificationPollRequest status an MFA method. | VerificationResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Method = "okta-verify" # String | The name of the MFA method. The currently supported method names are 'okta-verify', 'duo-web', 'kba','token', 'rsa'
$VerificationPollRequest = @"{
  "requestId" : "089899f13a8f4da7824996191587bab9"
}"@

# Polling MFA method by VerificationPollRequest

try {
    $Result = ConvertFrom-JsonToVerificationPollRequest -Json $VerificationPollRequest
    Ping-BetaVerificationStatus -Method $Method -VerificationPollRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Ping-BetaVerificationStatus -Method $Method -VerificationPollRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Ping-BetaVerificationStatus"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## send-duo-verify-request
This API Authenticates the user via Duo-Web MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/beta/send-duo-verify-request)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | DuoVerificationRequest | [**DuoVerificationRequest**](../models/duo-verification-request) | True  | 

### Return type
[**VerificationResponse**](../models/verification-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The status of verification request. | VerificationResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$DuoVerificationRequest = @"{
  "signedResponse" : "AUTH|d2lsbC5hbGJpbnxESTZNMFpHSThKQVRWTVpZN0M5VXwxNzAxMjUzMDg5|f1f5f8ced5b340f3d303b05d0efa0e43b6a8f970:APP|d2lsbC5hbGJpbnxESTZNMFpHSThKQVRWTVpZN0M5VXwxNzAxMjU2NjE5|cb44cf44353f5127edcae31b1da0355f87357db2",
  "userId" : "2c9180947f0ef465017f215cbcfd004b"
}"@

# Verifying authentication via Duo method

try {
    $Result = ConvertFrom-JsonToDuoVerificationRequest -Json $DuoVerificationRequest
    Send-BetaDuoVerifyRequest -DuoVerificationRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Send-BetaDuoVerifyRequest -DuoVerificationRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaDuoVerifyRequest"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## send-kba-answers
This API Authenticate user in KBA MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/beta/send-kba-answers)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | KbaAnswerRequestItem | [**[]KbaAnswerRequestItem**](../models/kba-answer-request-item) | True  | 

### Return type
[**KbaAuthResponse**](../models/kba-auth-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | KBA authenticated status. | KbaAuthResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
 $KbaAnswerRequestItem = @"{
  "answer" : "Your answer",
  "id" : "c54fee53-2d63-4fc5-9259-3e93b9994135"
}"@ # KbaAnswerRequestItem[] | 
 

# Authenticate KBA provided MFA method

try {
    $Result = ConvertFrom-JsonToKbaAnswerRequestItem -Json $KbaAnswerRequestItem
    Send-BetaKbaAnswers -KbaAnswerRequestItem $Result 
    
    # Below is a request that includes all optional parameters
    # Send-BetaKbaAnswers -KbaAnswerRequestItem $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaKbaAnswers"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## send-okta-verify-request
This API Authenticates the user via Okta-Verify MFA method. Request requires a header called 'slpt-forwarding', and it must contain a remote IP Address of caller.

[API Spec](https://developer.sailpoint.com/docs/api/beta/send-okta-verify-request)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | OktaVerificationRequest | [**OktaVerificationRequest**](../models/okta-verification-request) | True  | 

### Return type
[**VerificationResponse**](../models/verification-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The status of verification request. | VerificationResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$OktaVerificationRequest = @"{
  "userId" : "example@mail.com"
}"@

# Verifying authentication via Okta method

try {
    $Result = ConvertFrom-JsonToOktaVerificationRequest -Json $OktaVerificationRequest
    Send-BetaOktaVerifyRequest -OktaVerificationRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Send-BetaOktaVerifyRequest -OktaVerificationRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaOktaVerifyRequest"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## send-token-auth-request
This API Authenticate user in Token MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/beta/send-token-auth-request)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | TokenAuthRequest | [**TokenAuthRequest**](../models/token-auth-request) | True  | 

### Return type
[**TokenAuthResponse**](../models/token-auth-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Token authenticated status. | TokenAuthResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$TokenAuthRequest = @"{
  "userAlias" : "will.albin",
  "deliveryType" : "EMAIL_WORK",
  "token" : "12345"
}"@

# Authenticate Token provided MFA method

try {
    $Result = ConvertFrom-JsonToTokenAuthRequest -Json $TokenAuthRequest
    Send-BetaTokenAuthRequest -TokenAuthRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Send-BetaTokenAuthRequest -TokenAuthRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaTokenAuthRequest"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
