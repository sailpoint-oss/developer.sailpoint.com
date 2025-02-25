---
id: mfa-controller
title: MFA_Controller
pagination_label: MFA_Controller
sidebar_label: MFA_Controller
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MFA_Controller', 'MFA_Controller'] 
slug: /tools/sdk/python/v3/methods/mfa-controller
tags: ['SDK', 'Software Development Kit', 'MFA_Controller', 'MFA_Controller']
---

# sailpoint.v3.MFAControllerApi
  This API used for multifactor authentication functionality belong to gov-multi-auth service. This controller allow you to verify authentication by specified method 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-send-token**](#create-send-token) | **POST** `/mfa/token/send` | Create and send user token
[**ping-verification-status**](#ping-verification-status) | **POST** `/mfa/{method}/poll` | Polling MFA method by VerificationPollRequest
[**send-duo-verify-request**](#send-duo-verify-request) | **POST** `/mfa/duo-web/verify` | Verifying authentication via Duo method
[**send-kba-answers**](#send-kba-answers) | **POST** `/mfa/kba/authenticate` | Authenticate KBA provided MFA method
[**send-okta-verify-request**](#send-okta-verify-request) | **POST** `/mfa/okta-verify/verify` | Verifying authentication via Okta method
[**send-token-auth-request**](#send-token-auth-request) | **POST** `/mfa/token/authenticate` | Authenticate Token provided MFA method


## create-send-token
Create and send user token
This API send token request.

[API Spec](https://developer.sailpoint.com/docs/api/v3/create-send-token)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | send_token_request | [**SendTokenRequest**](../models/send-token-request) | True  | 

### Return type
[**SendTokenResponse**](../models/send-token-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Token send status. | SendTokenResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v3
from sailpoint.v3.api.mfa_controller_api import MFAControllerApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.send_token_request import SendTokenRequest
from sailpoint.v3.models.send_token_response import SendTokenResponse
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    send_token_request = {
          "userAlias" : "will.albin",
          "deliveryType" : "EMAIL_WORK"
        } # SendTokenRequest | 

    try:
        # Create and send user token
        new_send_token_request = SendTokenRequest()
        new_send_token_request.from_json(send_token_request)
        results =MFAControllerApi(api_client).create_send_token(new_send_token_request)
        # Below is a request that includes all optional parameters
        # results = MFAControllerApi(api_client).create_send_token(new_send_token_request)
        print("The response of MFAControllerApi->create_send_token:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling MFAControllerApi->create_send_token: %s\n" % e)
```



[[Back to top]](#) 

## ping-verification-status
Polling MFA method by VerificationPollRequest
This API poll the VerificationPollRequest for the specified MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/v3/ping-verification-status)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | method | **str** | True  | The name of the MFA method. The currently supported method names are 'okta-verify', 'duo-web', 'kba','token', 'rsa'
 Body  | verification_poll_request | [**VerificationPollRequest**](../models/verification-poll-request) | True  | 

### Return type
[**VerificationResponse**](../models/verification-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | MFA VerificationPollRequest status an MFA method. | VerificationResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v3
from sailpoint.v3.api.mfa_controller_api import MFAControllerApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.verification_poll_request import VerificationPollRequest
from sailpoint.v3.models.verification_response import VerificationResponse
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    method = 'okta-verify' # str | The name of the MFA method. The currently supported method names are 'okta-verify', 'duo-web', 'kba','token', 'rsa' # str | The name of the MFA method. The currently supported method names are 'okta-verify', 'duo-web', 'kba','token', 'rsa'
    verification_poll_request = {
          "requestId" : "089899f13a8f4da7824996191587bab9"
        } # VerificationPollRequest | 

    try:
        # Polling MFA method by VerificationPollRequest
        new_verification_poll_request = VerificationPollRequest()
        new_verification_poll_request.from_json(verification_poll_request)
        results =MFAControllerApi(api_client).ping_verification_status(method, new_verification_poll_request)
        # Below is a request that includes all optional parameters
        # results = MFAControllerApi(api_client).ping_verification_status(method, new_verification_poll_request)
        print("The response of MFAControllerApi->ping_verification_status:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling MFAControllerApi->ping_verification_status: %s\n" % e)
```



[[Back to top]](#) 

## send-duo-verify-request
Verifying authentication via Duo method
This API Authenticates the user via Duo-Web MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/v3/send-duo-verify-request)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | duo_verification_request | [**DuoVerificationRequest**](../models/duo-verification-request) | True  | 

### Return type
[**VerificationResponse**](../models/verification-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The status of verification request. | VerificationResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v3
from sailpoint.v3.api.mfa_controller_api import MFAControllerApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.duo_verification_request import DuoVerificationRequest
from sailpoint.v3.models.verification_response import VerificationResponse
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    duo_verification_request = {
          "signedResponse" : "AUTH|d2lsbC5hbGJpbnxESTZNMFpHSThKQVRWTVpZN0M5VXwxNzAxMjUzMDg5|f1f5f8ced5b340f3d303b05d0efa0e43b6a8f970:APP|d2lsbC5hbGJpbnxESTZNMFpHSThKQVRWTVpZN0M5VXwxNzAxMjU2NjE5|cb44cf44353f5127edcae31b1da0355f87357db2",
          "userId" : "2c9180947f0ef465017f215cbcfd004b"
        } # DuoVerificationRequest | 

    try:
        # Verifying authentication via Duo method
        new_duo_verification_request = DuoVerificationRequest()
        new_duo_verification_request.from_json(duo_verification_request)
        results =MFAControllerApi(api_client).send_duo_verify_request(new_duo_verification_request)
        # Below is a request that includes all optional parameters
        # results = MFAControllerApi(api_client).send_duo_verify_request(new_duo_verification_request)
        print("The response of MFAControllerApi->send_duo_verify_request:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling MFAControllerApi->send_duo_verify_request: %s\n" % e)
```



[[Back to top]](#) 

## send-kba-answers
Authenticate KBA provided MFA method
This API Authenticate user in KBA MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/v3/send-kba-answers)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | kba_answer_request_item | [**[]KbaAnswerRequestItem**](../models/kba-answer-request-item) | True  | 

### Return type
[**KbaAuthResponse**](../models/kba-auth-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | KBA authenticated status. | KbaAuthResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v3
from sailpoint.v3.api.mfa_controller_api import MFAControllerApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.kba_answer_request_item import KbaAnswerRequestItem
from sailpoint.v3.models.kba_auth_response import KbaAuthResponse
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    [{id=173423, answer=822cd15d6c15aa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a0859a2fea34}, {id=c54fee53-2d63-4fc5-9259-3e93b9994135, answer=9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08}] # List[KbaAnswerRequestItem] | 
     kba_answer_request_item = {
          "answer" : "Your answer",
          "id" : "c54fee53-2d63-4fc5-9259-3e93b9994135"
        } # List[KbaAnswerRequestItem] | 
    

    try:
        # Authenticate KBA provided MFA method
        new_kba_answer_request_item = KbaAnswerRequestItem()
        new_kba_answer_request_item.from_json(kba_answer_request_item)
        results =MFAControllerApi(api_client).send_kba_answers(new_kba_answer_request_item)
        # Below is a request that includes all optional parameters
        # results = MFAControllerApi(api_client).send_kba_answers(new_kba_answer_request_item)
        print("The response of MFAControllerApi->send_kba_answers:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling MFAControllerApi->send_kba_answers: %s\n" % e)
```



[[Back to top]](#) 

## send-okta-verify-request
Verifying authentication via Okta method
This API Authenticates the user via Okta-Verify MFA method. Request requires a header called 'slpt-forwarding', and it must contain a remote IP Address of caller.

[API Spec](https://developer.sailpoint.com/docs/api/v3/send-okta-verify-request)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | okta_verification_request | [**OktaVerificationRequest**](../models/okta-verification-request) | True  | 

### Return type
[**VerificationResponse**](../models/verification-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The status of verification request. | VerificationResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v3
from sailpoint.v3.api.mfa_controller_api import MFAControllerApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.okta_verification_request import OktaVerificationRequest
from sailpoint.v3.models.verification_response import VerificationResponse
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    okta_verification_request = {
          "userId" : "example@mail.com"
        } # OktaVerificationRequest | 

    try:
        # Verifying authentication via Okta method
        new_okta_verification_request = OktaVerificationRequest()
        new_okta_verification_request.from_json(okta_verification_request)
        results =MFAControllerApi(api_client).send_okta_verify_request(new_okta_verification_request)
        # Below is a request that includes all optional parameters
        # results = MFAControllerApi(api_client).send_okta_verify_request(new_okta_verification_request)
        print("The response of MFAControllerApi->send_okta_verify_request:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling MFAControllerApi->send_okta_verify_request: %s\n" % e)
```



[[Back to top]](#) 

## send-token-auth-request
Authenticate Token provided MFA method
This API Authenticate user in Token MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/v3/send-token-auth-request)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | token_auth_request | [**TokenAuthRequest**](../models/token-auth-request) | True  | 

### Return type
[**TokenAuthResponse**](../models/token-auth-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Token authenticated status. | TokenAuthResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v3
from sailpoint.v3.api.mfa_controller_api import MFAControllerApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.token_auth_request import TokenAuthRequest
from sailpoint.v3.models.token_auth_response import TokenAuthResponse
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    token_auth_request = {
          "userAlias" : "will.albin",
          "deliveryType" : "EMAIL_WORK",
          "token" : "12345"
        } # TokenAuthRequest | 

    try:
        # Authenticate Token provided MFA method
        new_token_auth_request = TokenAuthRequest()
        new_token_auth_request.from_json(token_auth_request)
        results =MFAControllerApi(api_client).send_token_auth_request(new_token_auth_request)
        # Below is a request that includes all optional parameters
        # results = MFAControllerApi(api_client).send_token_auth_request(new_token_auth_request)
        print("The response of MFAControllerApi->send_token_auth_request:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling MFAControllerApi->send_token_auth_request: %s\n" % e)
```



[[Back to top]](#) 



