---
id: v2025-o-auth-clients
title: OAuth_Clients
pagination_label: OAuth_Clients
sidebar_label: OAuth_Clients
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'OAuth_Clients', 'V2025OAuth_Clients'] 
slug: /tools/sdk/python/v2025/methods/o-auth-clients
tags: ['SDK', 'Software Development Kit', 'OAuth_Clients', 'V2025OAuth_Clients']
---

# sailpoint.v2025.OAuthClientsApi
  Use this API to implement OAuth client functionality.   
With this functionality in place, users with the appropriate security scopes can create and configure OAuth clients to use as a way to obtain authorization to use the Identity Security Cloud REST API.
Refer to [Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information about OAuth and how it works with the Identity Security Cloud REST API.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-oauth-client**](#create-oauth-client) | **POST** `/oauth-clients` | Create OAuth Client
[**delete-oauth-client**](#delete-oauth-client) | **DELETE** `/oauth-clients/{id}` | Delete OAuth Client
[**get-oauth-client**](#get-oauth-client) | **GET** `/oauth-clients/{id}` | Get OAuth Client
[**list-oauth-clients**](#list-oauth-clients) | **GET** `/oauth-clients` | List OAuth Clients
[**patch-oauth-client**](#patch-oauth-client) | **PATCH** `/oauth-clients/{id}` | Patch OAuth Client


## create-oauth-client
Create OAuth Client
This creates an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-oauth-client)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | create_o_auth_client_request | [**CreateOAuthClientRequest**](../models/create-o-auth-client-request) | True  | 

### Return type
[**CreateOAuthClientResponse**](../models/create-o-auth-client-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Request succeeded. | CreateOAuthClientResponse |  -  |
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
from sailpoint.v2025.api.o_auth_clients_api import OAuthClientsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.create_o_auth_client_request import CreateOAuthClientRequest
from sailpoint.v2025.models.create_o_auth_client_response import CreateOAuthClientResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    create_o_auth_client_request = '''{
          "internal" : false,
          "businessName" : "Acme-Solar",
          "description" : "An API client used for the authorization_code, refresh_token, and client_credentials flows",
          "refreshTokenValiditySeconds" : 86400,
          "type" : "CONFIDENTIAL",
          "redirectUris" : [ "http://localhost:12345" ],
          "enabled" : true,
          "accessType" : "OFFLINE",
          "grantTypes" : [ "AUTHORIZATION_CODE", "CLIENT_CREDENTIALS", "REFRESH_TOKEN" ],
          "strongAuthSupported" : false,
          "homepageUrl" : "http://localhost:12345",
          "accessTokenValiditySeconds" : 750,
          "scope" : [ "demo:api-client-scope:first", "demo:api-client-scope:second" ],
          "name" : "Demo API Client",
          "claimsSupported" : false
        }''' # CreateOAuthClientRequest | 

    try:
        # Create OAuth Client
        new_create_o_auth_client_request = CreateOAuthClientRequest.from_json(create_o_auth_client_request)
        results = OAuthClientsApi(api_client).create_oauth_client(create_o_auth_client_request=new_create_o_auth_client_request)
        # Below is a request that includes all optional parameters
        # results = OAuthClientsApi(api_client).create_oauth_client(new_create_o_auth_client_request)
        print("The response of OAuthClientsApi->create_oauth_client:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling OAuthClientsApi->create_oauth_client: %s\n" % e)
```



[[Back to top]](#) 

## delete-oauth-client
Delete OAuth Client
This deletes an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-oauth-client)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The OAuth client id

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content. |  |  -  |
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
from sailpoint.v2025.api.o_auth_clients_api import OAuthClientsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The OAuth client id # str | The OAuth client id

    try:
        # Delete OAuth Client
        
        OAuthClientsApi(api_client).delete_oauth_client(id=id)
        # Below is a request that includes all optional parameters
        # OAuthClientsApi(api_client).delete_oauth_client(id)
    except Exception as e:
        print("Exception when calling OAuthClientsApi->delete_oauth_client: %s\n" % e)
```



[[Back to top]](#) 

## get-oauth-client
Get OAuth Client
This gets details of an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-oauth-client)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The OAuth client id

### Return type
[**GetOAuthClientResponse**](../models/get-o-auth-client-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Request succeeded. | GetOAuthClientResponse |  -  |
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
from sailpoint.v2025.api.o_auth_clients_api import OAuthClientsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.get_o_auth_client_response import GetOAuthClientResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The OAuth client id # str | The OAuth client id

    try:
        # Get OAuth Client
        
        results = OAuthClientsApi(api_client).get_oauth_client(id=id)
        # Below is a request that includes all optional parameters
        # results = OAuthClientsApi(api_client).get_oauth_client(id)
        print("The response of OAuthClientsApi->get_oauth_client:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling OAuthClientsApi->get_oauth_client: %s\n" % e)
```



[[Back to top]](#) 

## list-oauth-clients
List OAuth Clients
This gets a list of OAuth clients.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-oauth-clients)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull*

### Return type
[**List[GetOAuthClientResponse]**](../models/get-o-auth-client-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of OAuth clients. | List[GetOAuthClientResponse] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.o_auth_clients_api import OAuthClientsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.get_o_auth_client_response import GetOAuthClientResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    filters = 'lastUsed le 2023-02-05T10:59:27.214Z' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* (optional)

    try:
        # List OAuth Clients
        
        results = OAuthClientsApi(api_client).list_oauth_clients()
        # Below is a request that includes all optional parameters
        # results = OAuthClientsApi(api_client).list_oauth_clients(filters)
        print("The response of OAuthClientsApi->list_oauth_clients:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling OAuthClientsApi->list_oauth_clients: %s\n" % e)
```



[[Back to top]](#) 

## patch-oauth-client
Patch OAuth Client
This performs a targeted update to the field(s) of an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-oauth-client)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The OAuth client id
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * tenant * businessName * homepageUrl * name * description * accessTokenValiditySeconds * refreshTokenValiditySeconds * redirectUris * grantTypes * accessType * enabled * strongAuthSupported * claimsSupported 

### Return type
[**GetOAuthClientResponse**](../models/get-o-auth-client-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Indicates the PATCH operation succeeded, and returns the OAuth client&#39;s new representation. | GetOAuthClientResponse |  -  |
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
from sailpoint.v2025.api.o_auth_clients_api import OAuthClientsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.get_o_auth_client_response import GetOAuthClientResponse
from sailpoint.v2025.models.json_patch_operation import JsonPatchOperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The OAuth client id # str | The OAuth client id
    json_patch_operation = '''[{op=replace, path=/strongAuthSupported, value=true}, {op=replace, path=/businessName, value=acme-solar}]''' # List[JsonPatchOperation] | A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * tenant * businessName * homepageUrl * name * description * accessTokenValiditySeconds * refreshTokenValiditySeconds * redirectUris * grantTypes * accessType * enabled * strongAuthSupported * claimsSupported 

    try:
        # Patch OAuth Client
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = OAuthClientsApi(api_client).patch_oauth_client(id=id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = OAuthClientsApi(api_client).patch_oauth_client(id, new_json_patch_operation)
        print("The response of OAuthClientsApi->patch_oauth_client:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling OAuthClientsApi->patch_oauth_client: %s\n" % e)
```



[[Back to top]](#) 



