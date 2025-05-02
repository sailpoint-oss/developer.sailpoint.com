---
id: v2024-password-management
title: Password_Management
pagination_label: Password_Management
sidebar_label: Password_Management
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Password_Management', 'V2024Password_Management'] 
slug: /tools/sdk/python/v2024/methods/password-management
tags: ['SDK', 'Software Development Kit', 'Password_Management', 'V2024Password_Management']
---

# sailpoint.v2024.PasswordManagementApi
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-digit-token**](#create-digit-token) | **POST** `/generate-password-reset-token/digit` | Generate a digit token
[**get-password-change-status**](#get-password-change-status) | **GET** `/password-change-status/{id}` | Get Password Change Request Status
[**query-password-info**](#query-password-info) | **POST** `/query-password-info` | Query Password Info
[**set-password**](#set-password) | **POST** `/set-password` | Set Identity&#39;s Password


## create-digit-token
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Generate a digit token
This API is used to generate a digit token for password management. Requires authorization scope of "idn:password-digit-token:create".

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-digit-token)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | password_digit_token_reset | [**PasswordDigitTokenReset**](../models/password-digit-token-reset) | True  | 

### Return type
[**PasswordDigitToken**](../models/password-digit-token)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The digit token for password management. | PasswordDigitToken |  -  |
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
from sailpoint.v2024.api.password_management_api import PasswordManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.password_digit_token import PasswordDigitToken
from sailpoint.v2024.models.password_digit_token_reset import PasswordDigitTokenReset
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    password_digit_token_reset = '''{
          "durationMinutes" : 5,
          "length" : 8,
          "userId" : "Abby.Smith"
        }''' # PasswordDigitTokenReset | 

    try:
        # Generate a digit token
        new_password_digit_token_reset = PasswordDigitTokenReset.from_json(password_digit_token_reset)
        results = PasswordManagementApi(api_client).create_digit_token(x_sail_point_experimental=x_sail_point_experimental, password_digit_token_reset=new_password_digit_token_reset)
        # Below is a request that includes all optional parameters
        # results = PasswordManagementApi(api_client).create_digit_token(x_sail_point_experimental, new_password_digit_token_reset)
        print("The response of PasswordManagementApi->create_digit_token:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PasswordManagementApi->create_digit_token: %s\n" % e)
```



[[Back to top]](#) 

## get-password-change-status
Get Password Change Request Status
This API returns the status of a password change request.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-password-change-status)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Password change request ID

### Return type
[**PasswordStatus**](../models/password-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Status of the password change request | PasswordStatus |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.password_management_api import PasswordManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.password_status import PasswordStatus
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '089899f13a8f4da7824996191587bab9' # str | Password change request ID # str | Password change request ID

    try:
        # Get Password Change Request Status
        
        results = PasswordManagementApi(api_client).get_password_change_status(id=id)
        # Below is a request that includes all optional parameters
        # results = PasswordManagementApi(api_client).get_password_change_status(id)
        print("The response of PasswordManagementApi->get_password_change_status:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PasswordManagementApi->get_password_change_status: %s\n" % e)
```



[[Back to top]](#) 

## query-password-info
Query Password Info
This API is used to query password related information. 


[API Spec](https://developer.sailpoint.com/docs/api/v2024/query-password-info)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | password_info_query_dto | [**PasswordInfoQueryDTO**](../models/password-info-query-dto) | True  | 

### Return type
[**PasswordInfo**](../models/password-info)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reference to the password info. | PasswordInfo |  -  |
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
from sailpoint.v2024.api.password_management_api import PasswordManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.password_info import PasswordInfo
from sailpoint.v2024.models.password_info_query_dto import PasswordInfoQueryDTO
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    password_info_query_dto = '''{
          "sourceName" : "My-AD",
          "userName" : "Abby.Smith"
        }''' # PasswordInfoQueryDTO | 

    try:
        # Query Password Info
        new_password_info_query_dto = PasswordInfoQueryDto.from_json(password_info_query_dto)
        results = PasswordManagementApi(api_client).query_password_info(password_info_query_dto=new_password_info_query_dto)
        # Below is a request that includes all optional parameters
        # results = PasswordManagementApi(api_client).query_password_info(new_password_info_query_dto)
        print("The response of PasswordManagementApi->query_password_info:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PasswordManagementApi->query_password_info: %s\n" % e)
```



[[Back to top]](#) 

## set-password
Set Identity's Password
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


[API Spec](https://developer.sailpoint.com/docs/api/v2024/set-password)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | password_change_request | [**PasswordChangeRequest**](../models/password-change-request) | True  | 

### Return type
[**PasswordChangeResponse**](../models/password-change-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Reference to the password change. | PasswordChangeResponse |  -  |
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
from sailpoint.v2024.api.password_management_api import PasswordManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.password_change_request import PasswordChangeRequest
from sailpoint.v2024.models.password_change_response import PasswordChangeResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    password_change_request = '''{
          "sourceId" : "8a807d4c73c545510173c545d4b60246",
          "accountId" : "CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com",
          "identityId" : "8a807d4c73c545510173c545f0a002ff",
          "publicKeyId" : "YWQ2NjQ4MTItZjY0NC00MWExLWFjMjktOGNmMzU3Y2VlNjk2",
          "encryptedPassword" : "XzN+YwKgr2C+InkMYFMBG3UtjMEw5ZIql/XFlXo8cJNeslmkplx6vn4kd4/43IF9STBk5RnzR6XmjpEO+FwHDoiBwYZAkAZK/Iswxk4OdybG6Y4MStJCOCiK8osKr35IMMSV/mbO4wAeltoCk7daTWzTGLiI6UaT5tf+F2EgdjJZ7YqM8W8r7aUWsm3p2Xt01Y46ZRx0QaM91QruiIx2rECFT2pUO0wr+7oQ77jypATyGWRtADsu3YcvCk/6U5MqCnXMzKBcRas7NnZdSL/d5H1GglVGz3VLPMaivG4/oL4chOMmFCRl/zVsGxZ9RhN8rxsRGFFKn+rhExTi+bax3A=="
        }''' # PasswordChangeRequest | 

    try:
        # Set Identity's Password
        new_password_change_request = PasswordChangeRequest.from_json(password_change_request)
        results = PasswordManagementApi(api_client).set_password(password_change_request=new_password_change_request)
        # Below is a request that includes all optional parameters
        # results = PasswordManagementApi(api_client).set_password(new_password_change_request)
        print("The response of PasswordManagementApi->set_password:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PasswordManagementApi->set_password: %s\n" % e)
```



[[Back to top]](#) 



