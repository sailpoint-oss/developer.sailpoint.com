---
id: mfa-controller
title: MFAController
pagination_label: MFAController
sidebar_label: MFAController
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MFAController', 'MFAController'] 
slug: /tools/sdk/powershell/v3/methods/mfa-controller
tags: ['SDK', 'Software Development Kit', 'MFAController', 'MFAController']
---


# MFAController

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-SendToken**](#create-send-token) | **POST** `/mfa/token/send` | Create and send user token
[**Ping-VerificationStatus**](#ping-verification-status) | **POST** `/mfa/{method}/poll` | Polling MFA method by VerificationPollRequest
[**Send-DuoVerifyRequest**](#send-duo-verify-request) | **POST** `/mfa/duo-web/verify` | Verifying authentication via Duo method
[**Send-KbaAnswers**](#send-kba-answers) | **POST** `/mfa/kba/authenticate` | Authenticate KBA provided MFA method
[**Send-OktaVerifyRequest**](#send-okta-verify-request) | **POST** `/mfa/okta-verify/verify` | Verifying authentication via Okta method
[**Send-TokenAuthRequest**](#send-token-auth-request) | **POST** `/mfa/token/authenticate` | Authenticate Token provided MFA method


## create-send-token

This API send token request.

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
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
    New-SendToken-SendTokenRequest $Result
    
    # Below is a request that includes all optional parameters
    # New-SendToken -SendTokenRequest $SendTokenRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-SendToken"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## ping-verification-status

This API poll the VerificationPollRequest for the specified MFA method.

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
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
    Ping-VerificationStatus-Method $Method -VerificationPollRequest $Result
    
    # Below is a request that includes all optional parameters
    # Ping-VerificationStatus -Method $Method -VerificationPollRequest $VerificationPollRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Ping-VerificationStatus"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## send-duo-verify-request

This API Authenticates the user via Duo-Web MFA method.

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
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
    Send-DuoVerifyRequest-DuoVerificationRequest $Result
    
    # Below is a request that includes all optional parameters
    # Send-DuoVerifyRequest -DuoVerificationRequest $DuoVerificationRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-DuoVerifyRequest"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## send-kba-answers

This API Authenticate user in KBA MFA method.

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
 # KbaAnswerRequestItem[] | 
 $KbaAnswerRequestItem = @"{
  "answer" : "Your answer",
  "id" : "c54fee53-2d63-4fc5-9259-3e93b9994135"
}"@ 

# Authenticate KBA provided MFA method
try {
    $Result = ConvertFrom-JsonToKbaAnswerRequestItem -Json $KbaAnswerRequestItem
    Send-KbaAnswers-KbaAnswerRequestItem $Result
    
    # Below is a request that includes all optional parameters
    # Send-KbaAnswers -KbaAnswerRequestItem $KbaAnswerRequestItem  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-KbaAnswers"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## send-okta-verify-request

This API Authenticates the user via Okta-Verify MFA method. Request requires a header called 'slpt-forwarding', and it must contain a remote IP Address of caller.

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
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
    Send-OktaVerifyRequest-OktaVerificationRequest $Result
    
    # Below is a request that includes all optional parameters
    # Send-OktaVerifyRequest -OktaVerificationRequest $OktaVerificationRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-OktaVerifyRequest"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## send-token-auth-request

This API Authenticate user in Token MFA method.

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
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
    Send-TokenAuthRequest-TokenAuthRequest $Result
    
    # Below is a request that includes all optional parameters
    # Send-TokenAuthRequest -TokenAuthRequest $TokenAuthRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-TokenAuthRequest"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


