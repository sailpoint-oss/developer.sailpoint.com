---
id: beta-auth-profile
title: Auth_Profile
pagination_label: Auth_Profile
sidebar_label: Auth_Profile
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Auth_Profile', 'BetaAuth_Profile'] 
slug: /tools/sdk/python/beta/methods/auth-profile
tags: ['SDK', 'Software Development Kit', 'Auth_Profile', 'BetaAuth_Profile']
---

# sailpoint.beta.AuthProfileApi
  Use this API to implement Auth Profile functionality. 
With this functionality in place, users can read authentication profiles and make changes to them. 

An authentication profile represents an identity profile&#39;s authentication configuration. 
When the identity profile is created, its authentication profile is also created. 
An authentication profile includes information like its authentication profile type (&#x60;BLOCK&#x60;, &#x60;MFA&#x60;, &#x60;NON_PTA&#x60;, PTA&#x60;) and settings controlling whether or not it blocks access from off network or untrusted geographies.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-profile-config**](#get-profile-config) | **GET** `/auth-profiles/{id}` | Get Auth Profile.
[**get-profile-config-list**](#get-profile-config-list) | **GET** `/auth-profiles` | Get list of Auth Profiles.
[**patch-profile-config**](#patch-profile-config) | **PATCH** `/auth-profiles/{id}` | Patch a specified Auth Profile


## get-profile-config
Get Auth Profile.
This API returns auth profile information.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-profile-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the Auth Profile to get.

### Return type
[**AuthProfile**](../models/auth-profile)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Auth Profile | AuthProfile |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.auth_profile_api import AuthProfileApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.auth_profile import AuthProfile
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808a7813090a017814121919ecca' # str | ID of the Auth Profile to get. # str | ID of the Auth Profile to get.

    try:
        # Get Auth Profile.
        
        results = AuthProfileApi(api_client).get_profile_config(id=id)
        # Below is a request that includes all optional parameters
        # results = AuthProfileApi(api_client).get_profile_config(id)
        print("The response of AuthProfileApi->get_profile_config:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling AuthProfileApi->get_profile_config: %s\n" % e)
```



[[Back to top]](#) 

## get-profile-config-list
Get list of Auth Profiles.
This API returns a list of auth profiles.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-profile-config-list)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**List[AuthProfileSummary]**](../models/auth-profile-summary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of Auth Profiles | List[AuthProfileSummary] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.auth_profile_api import AuthProfileApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.auth_profile_summary import AuthProfileSummary
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get list of Auth Profiles.
        
        results = AuthProfileApi(api_client).get_profile_config_list()
        # Below is a request that includes all optional parameters
        # results = AuthProfileApi(api_client).get_profile_config_list()
        print("The response of AuthProfileApi->get_profile_config_list:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling AuthProfileApi->get_profile_config_list: %s\n" % e)
```



[[Back to top]](#) 

## patch-profile-config
Patch a specified Auth Profile
This API updates an existing Auth Profile. The following fields are patchable:
**offNetwork**, **untrustedGeography**, **applicationId**, **applicationName**, **type**

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-profile-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the Auth Profile to patch.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | 

### Return type
[**AuthProfile**](../models/auth-profile)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with the Auth Profile as updated. | AuthProfile |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.auth_profile_api import AuthProfileApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.auth_profile import AuthProfile
from sailpoint.beta.models.json_patch_operation import JsonPatchOperation
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808a7813090a017814121919ecca' # str | ID of the Auth Profile to patch. # str | ID of the Auth Profile to patch.
    json_patch_operation = '''[sailpoint.beta.JsonPatchOperation()]''' # List[JsonPatchOperation] | 

    try:
        # Patch a specified Auth Profile
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = AuthProfileApi(api_client).patch_profile_config(id=id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = AuthProfileApi(api_client).patch_profile_config(id, new_json_patch_operation)
        print("The response of AuthProfileApi->patch_profile_config:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling AuthProfileApi->patch_profile_config: %s\n" % e)
```



[[Back to top]](#) 



