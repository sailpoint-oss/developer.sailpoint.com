---
id: auth-users
title: Auth_Users
pagination_label: Auth_Users
sidebar_label: Auth_Users
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Auth_Users', 'Auth_Users'] 
slug: /tools/sdk/python/auth-users/methods/auth-users
tags: ['SDK', 'Software Development Kit', 'Auth_Users', 'Auth_Users']
---

# sailpoint.auth_users.AuthUsersApi
  Use this API to implement user authentication system functionality. 
With this functionality in place, users can get a user&#39;s authentication system details, including their capabilities, and modify those capabilities. 
The user&#39;s capabilities refer to their access to different systems, or authorization, within the tenant, like access to certifications (CERT_ADMIN) or reports (REPORT_ADMIN). 
These capabilities also determine a user&#39;s access to the different APIs. 
This API provides users with a way to determine a user&#39;s access and make quick and easy changes to that access. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-auth-user-v1**](#get-auth-user-v1) | **GET** `/auth-users/v1/{id}` | Auth user details
[**patch-auth-user-v1**](#patch-auth-user-v1) | **PATCH** `/auth-users/v1/{id}` | Auth user update


## get-auth-user-v1
Auth user details
Return the specified user's authentication system details.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-auth-user-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Identity ID

### Return type
[**Authuser**](../models/authuser)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The specified user&#39;s authentication system details. | Authuser |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAuthUserV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAuthUserV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.auth_users.api.auth_users_api import AuthUsersApi
from sailpoint.auth_users.api_client import ApiClient
from sailpoint.auth_users.models.authuser import Authuser
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Identity ID # str | Identity ID

    try:
        # Auth user details
        
        results = AuthUsersApi(api_client).get_auth_user_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = AuthUsersApi(api_client).get_auth_user_v1(id)
        print("The response of AuthUsersApi->get_auth_user_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AuthUsersApi->get_auth_user_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-auth-user-v1
Auth user update
Use a PATCH request to update an existing user in the authentication system.
Use this endpoint to modify these fields: 
  * `capabilities`

A '400.1.1 Illegal update attempt' detail code indicates that you attempted to PATCH a field that is not allowed.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-auth-user-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Identity ID
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of auth user update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**Authuser**](../models/authuser)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Auth user updated. | Authuser |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAuthUserV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAuthUserV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.auth_users.api.auth_users_api import AuthUsersApi
from sailpoint.auth_users.api_client import ApiClient
from sailpoint.auth_users.models.authuser import Authuser
from sailpoint.auth_users.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Identity ID # str | Identity ID
    jsonpatchoperation = '''[{"op":"replace","path":"/capabilities","value":["ORG_ADMIN"]}]''' # List[Jsonpatchoperation] | A list of auth user update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    try:
        # Auth user update
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = AuthUsersApi(api_client).patch_auth_user_v1(id=id, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = AuthUsersApi(api_client).patch_auth_user_v1(id, new_jsonpatchoperation)
        print("The response of AuthUsersApi->patch_auth_user_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AuthUsersApi->patch_auth_user_v1: %s\n" % e)
```



[[Back to top]](#) 



