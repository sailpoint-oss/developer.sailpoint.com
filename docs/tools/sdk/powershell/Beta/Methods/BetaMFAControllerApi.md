---
id: mfa-controller
title: MFAController
pagination_label: MFAController
sidebar_label: MFAController
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'MFAController'] 
slug: /tools/sdk/powershell/beta/methods/mfa-controller
tags: ['SDK', 'Software Development Kit', 'MFAController']
---


# MFAController

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSendToken**](#create-send-token) | **POST** /mfa/token/send | Create and send user token
[**pingVerificationStatus**](#ping-verification-status) | **POST** /mfa/{method}/poll | Polling MFA method by VerificationPollRequest
[**sendDuoVerifyRequest**](#send-duo-verify-request) | **POST** /mfa/duo-web/verify | Verifying authentication via Duo method
[**sendKbaAnswers**](#send-kba-answers) | **POST** /mfa/kba/authenticate | Authenticate KBA provided MFA method
[**sendOktaVerifyRequest**](#send-okta-verify-request) | **POST** /mfa/okta-verify/verify | Verifying authentication via Okta method
[**sendTokenAuthRequest**](#send-token-auth-request) | **POST** /mfa/token/authenticate | Authenticate Token provided MFA method



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

[[Back to top]](#) 


## ping-verification-status


This API poll the VerificationPollRequest for the specified MFA method. A token with ORG_ADMIN authority is required to call this API.

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

[[Back to top]](#) 


## send-kba-answers


This API Authenticate user in KBA MFA method.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | KbaAnswerRequest | [**KbaAnswerRequest**](../models/kba-answer-request) | True  | 

	
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

[[Back to top]](#) 

