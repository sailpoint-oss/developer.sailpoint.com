---
id: password-management
title: Password_Management
pagination_label: Password_Management
sidebar_label: Password_Management
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Password_Management', 'Password_Management'] 
slug: /tools/sdk/python/password-management/methods/password-management
tags: ['SDK', 'Software Development Kit', 'Password_Management', 'Password_Management']
---

# sailpoint.password_management.PasswordManagementApi
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
[**create-digit-token-v1**](#create-digit-token-v1) | **POST** `/generate-password-reset-token/v1/digit` | Generate a digit token
[**get-password-change-status-v1**](#get-password-change-status-v1) | **GET** `/password-change-status/v1/{id}` | Get password change request status
[**query-password-info-v1**](#query-password-info-v1) | **POST** `/query-password-info/v1` | Query password info
[**set-password-v1**](#set-password-v1) | **POST** `/set-password/v1` | Set identity&#39;s password


## create-digit-token-v1
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-digit-token-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | passworddigittokenreset | [**Passworddigittokenreset**](../models/passworddigittokenreset) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Passworddigittoken**](../models/passworddigittoken)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The digit token for password management. | Passworddigittoken |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | QueryPasswordInfoV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | QueryPasswordInfoV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.password_management.api.password_management_api import PasswordManagementApi
from sailpoint.password_management.api_client import ApiClient
from sailpoint.password_management.models.passworddigittoken import Passworddigittoken
from sailpoint.password_management.models.passworddigittokenreset import Passworddigittokenreset
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    passworddigittokenreset = '''{"userId":"Abby.Smith","length":8,"durationMinutes":5}''' # Passworddigittokenreset | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Generate a digit token
        new_passworddigittokenreset = Passworddigittokenreset.from_json(passworddigittokenreset)
        results = PasswordManagementApi(api_client).create_digit_token_v1(passworddigittokenreset=new_passworddigittokenreset)
        # Below is a request that includes all optional parameters
        # results = PasswordManagementApi(api_client).create_digit_token_v1(new_passworddigittokenreset, x_sail_point_experimental)
        print("The response of PasswordManagementApi->create_digit_token_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PasswordManagementApi->create_digit_token_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-password-change-status-v1
Get password change request status
This API returns the status of a password change request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-password-change-status-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Password change request ID

### Return type
[**Passwordstatus**](../models/passwordstatus)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Status of the password change request | Passwordstatus |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | QueryPasswordInfoV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | QueryPasswordInfoV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.password_management.api.password_management_api import PasswordManagementApi
from sailpoint.password_management.api_client import ApiClient
from sailpoint.password_management.models.passwordstatus import Passwordstatus
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '089899f13a8f4da7824996191587bab9' # str | Password change request ID # str | Password change request ID

    try:
        # Get password change request status
        
        results = PasswordManagementApi(api_client).get_password_change_status_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = PasswordManagementApi(api_client).get_password_change_status_v1(id)
        print("The response of PasswordManagementApi->get_password_change_status_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PasswordManagementApi->get_password_change_status_v1: %s\n" % e)
```



[[Back to top]](#) 

## query-password-info-v1
Query password info
This API is used to query password related information. 


[API Spec](https://developer.sailpoint.com/docs/api/v1/query-password-info-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | passwordinfoquerydto | [**Passwordinfoquerydto**](../models/passwordinfoquerydto) | True  | 

### Return type
[**Passwordinfo**](../models/passwordinfo)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reference to the password info. | Passwordinfo |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | QueryPasswordInfoV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | QueryPasswordInfoV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.password_management.api.password_management_api import PasswordManagementApi
from sailpoint.password_management.api_client import ApiClient
from sailpoint.password_management.models.passwordinfo import Passwordinfo
from sailpoint.password_management.models.passwordinfoquerydto import Passwordinfoquerydto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    passwordinfoquerydto = '''sailpoint.password_management.Passwordinfoquerydto()''' # Passwordinfoquerydto | 

    try:
        # Query password info
        new_passwordinfoquerydto = Passwordinfoquerydto.from_json(passwordinfoquerydto)
        results = PasswordManagementApi(api_client).query_password_info_v1(passwordinfoquerydto=new_passwordinfoquerydto)
        # Below is a request that includes all optional parameters
        # results = PasswordManagementApi(api_client).query_password_info_v1(new_passwordinfoquerydto)
        print("The response of PasswordManagementApi->query_password_info_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PasswordManagementApi->query_password_info_v1: %s\n" % e)
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

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | passwordchangerequest | [**Passwordchangerequest**](../models/passwordchangerequest) | True  | 

### Return type
[**Passwordchangeresponse**](../models/passwordchangeresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Reference to the password change. | Passwordchangeresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | QueryPasswordInfoV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | QueryPasswordInfoV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.password_management.api.password_management_api import PasswordManagementApi
from sailpoint.password_management.api_client import ApiClient
from sailpoint.password_management.models.passwordchangerequest import Passwordchangerequest
from sailpoint.password_management.models.passwordchangeresponse import Passwordchangeresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    passwordchangerequest = '''sailpoint.password_management.Passwordchangerequest()''' # Passwordchangerequest | 

    try:
        # Set identity's password
        new_passwordchangerequest = Passwordchangerequest.from_json(passwordchangerequest)
        results = PasswordManagementApi(api_client).set_password_v1(passwordchangerequest=new_passwordchangerequest)
        # Below is a request that includes all optional parameters
        # results = PasswordManagementApi(api_client).set_password_v1(new_passwordchangerequest)
        print("The response of PasswordManagementApi->set_password_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PasswordManagementApi->set_password_v1: %s\n" % e)
```



[[Back to top]](#) 



