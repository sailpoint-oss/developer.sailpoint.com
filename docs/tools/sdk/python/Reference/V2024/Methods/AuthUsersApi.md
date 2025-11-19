---
id: v2024-auth-users
title: Auth_Users
pagination_label: Auth_Users
sidebar_label: Auth_Users
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Auth_Users', 'V2024Auth_Users'] 
slug: /tools/sdk/python/v2024/methods/auth-users
tags: ['SDK', 'Software Development Kit', 'Auth_Users', 'V2024Auth_Users']
---

# sailpoint.v2024.AuthUsersApi
  Use this API to implement user authentication system functionality. 
With this functionality in place, users can get a user&#39;s authentication system details, including their capabilities, and modify those capabilities. 
The user&#39;s capabilities refer to their access to different systems, or authorization, within the tenant, like access to certifications (CERT_ADMIN) or reports (REPORT_ADMIN). 
These capabilities also determine a user&#39;s access to the different APIs. 
This API provides users with a way to determine a user&#39;s access and make quick and easy changes to that access. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-auth-user**](#get-auth-user) | **GET** `/auth-users/{id}` | Auth user details
[**patch-auth-user**](#patch-auth-user) | **PATCH** `/auth-users/{id}` | Auth user update


## get-auth-user
Auth user details
Return the specified user's authentication system details.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-auth-user)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Identity ID

### Return type
[**AuthUser**](../models/auth-user)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The specified user&#39;s authentication system details. | AuthUser |  -  |
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
from sailpoint.v2024.api.auth_users_api import AuthUsersApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.auth_user import AuthUser
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Identity ID # str | Identity ID

    try:
        # Auth user details
        
        results = AuthUsersApi(api_client).get_auth_user(id=id)
        # Below is a request that includes all optional parameters
        # results = AuthUsersApi(api_client).get_auth_user(id)
        print("The response of AuthUsersApi->get_auth_user:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AuthUsersApi->get_auth_user: %s\n" % e)
```



[[Back to top]](#) 

## patch-auth-user
Auth user update
Use a PATCH request to update an existing user in the authentication system.
Use this endpoint to modify these fields: 
  * `capabilities`

A '400.1.1 Illegal update attempt' detail code indicates that you attempted to PATCH a field that is not allowed.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/patch-auth-user)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Identity ID
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of auth user update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**AuthUser**](../models/auth-user)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Auth user updated. | AuthUser |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.auth_users_api import AuthUsersApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.auth_user import AuthUser
from sailpoint.v2024.models.json_patch_operation import JsonPatchOperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Identity ID # str | Identity ID
    json_patch_operation = '''[{op=replace, path=/capabilities, value=[ORG_ADMIN]}]''' # List[JsonPatchOperation] | A list of auth user update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    try:
        # Auth user update
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = AuthUsersApi(api_client).patch_auth_user(id=id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = AuthUsersApi(api_client).patch_auth_user(id, new_json_patch_operation)
        print("The response of AuthUsersApi->patch_auth_user:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AuthUsersApi->patch_auth_user: %s\n" % e)
```



[[Back to top]](#) 



