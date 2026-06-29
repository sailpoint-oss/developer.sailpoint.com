---
id: o-auth-clients
title: OAuth_Clients
pagination_label: OAuth_Clients
sidebar_label: OAuth_Clients
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'OAuth_Clients', 'OAuth_Clients'] 
slug: /tools/sdk/python/oauth-clients/methods/o-auth-clients
tags: ['SDK', 'Software Development Kit', 'OAuth_Clients', 'OAuth_Clients']
---

# sailpoint.oauth_clients.OAuthClientsApi
  Use this API to implement OAuth client functionality.   
With this functionality in place, users with the appropriate security scopes can create and configure OAuth clients to use as a way to obtain authorization to use the Identity Security Cloud REST API.
Refer to [Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information about OAuth and how it works with the Identity Security Cloud REST API.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-oauth-client-v1**](#create-oauth-client-v1) | **POST** `/oauth-clients/v1` | Create oauth client
[**delete-oauth-client-v1**](#delete-oauth-client-v1) | **DELETE** `/oauth-clients/v1/{id}` | Delete oauth client
[**get-oauth-client-v1**](#get-oauth-client-v1) | **GET** `/oauth-clients/v1/{id}` | Get oauth client
[**list-oauth-clients-v1**](#list-oauth-clients-v1) | **GET** `/oauth-clients/v1` | List oauth clients
[**patch-oauth-client-v1**](#patch-oauth-client-v1) | **PATCH** `/oauth-clients/v1/{id}` | Patch oauth client


## create-oauth-client-v1
Create oauth client
This creates an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-oauth-client-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | createoauthclientrequest | [**Createoauthclientrequest**](../models/createoauthclientrequest) | True  | 

### Return type
[**Createoauthclientresponse**](../models/createoauthclientresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Request succeeded. | Createoauthclientresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListOauthClientsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListOauthClientsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.oauth_clients.api.o_auth_clients_api import OAuthClientsApi
from sailpoint.oauth_clients.api_client import ApiClient
from sailpoint.oauth_clients.models.createoauthclientrequest import Createoauthclientrequest
from sailpoint.oauth_clients.models.createoauthclientresponse import Createoauthclientresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    createoauthclientrequest = '''sailpoint.oauth_clients.Createoauthclientrequest()''' # Createoauthclientrequest | 

    try:
        # Create oauth client
        new_createoauthclientrequest = Createoauthclientrequest.from_json(createoauthclientrequest)
        results = OAuthClientsApi(api_client).create_oauth_client_v1(createoauthclientrequest=new_createoauthclientrequest)
        # Below is a request that includes all optional parameters
        # results = OAuthClientsApi(api_client).create_oauth_client_v1(new_createoauthclientrequest)
        print("The response of OAuthClientsApi->create_oauth_client_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling OAuthClientsApi->create_oauth_client_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-oauth-client-v1
Delete oauth client
This deletes an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-oauth-client-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListOauthClientsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListOauthClientsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.oauth_clients.api.o_auth_clients_api import OAuthClientsApi
from sailpoint.oauth_clients.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The OAuth client id # str | The OAuth client id

    try:
        # Delete oauth client
        
        OAuthClientsApi(api_client).delete_oauth_client_v1(id=id)
        # Below is a request that includes all optional parameters
        # OAuthClientsApi(api_client).delete_oauth_client_v1(id)
    except Exception as e:
        print("Exception when calling OAuthClientsApi->delete_oauth_client_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-oauth-client-v1
Get oauth client
This gets details of an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-oauth-client-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The OAuth client id

### Return type
[**Getoauthclientresponse**](../models/getoauthclientresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Request succeeded. | Getoauthclientresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListOauthClientsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListOauthClientsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.oauth_clients.api.o_auth_clients_api import OAuthClientsApi
from sailpoint.oauth_clients.api_client import ApiClient
from sailpoint.oauth_clients.models.getoauthclientresponse import Getoauthclientresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The OAuth client id # str | The OAuth client id

    try:
        # Get oauth client
        
        results = OAuthClientsApi(api_client).get_oauth_client_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = OAuthClientsApi(api_client).get_oauth_client_v1(id)
        print("The response of OAuthClientsApi->get_oauth_client_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling OAuthClientsApi->get_oauth_client_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-oauth-clients-v1
List oauth clients
This gets a list of OAuth clients.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-oauth-clients-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull*

### Return type
[**List[Getoauthclientresponse]**](../models/getoauthclientresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of OAuth clients. | List[Getoauthclientresponse] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListOauthClientsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListOauthClientsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.oauth_clients.api.o_auth_clients_api import OAuthClientsApi
from sailpoint.oauth_clients.api_client import ApiClient
from sailpoint.oauth_clients.models.getoauthclientresponse import Getoauthclientresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    filters = 'lastUsed le 2023-02-05T10:59:27.214Z' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* (optional)

    try:
        # List oauth clients
        
        results = OAuthClientsApi(api_client).list_oauth_clients_v1()
        # Below is a request that includes all optional parameters
        # results = OAuthClientsApi(api_client).list_oauth_clients_v1(filters)
        print("The response of OAuthClientsApi->list_oauth_clients_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling OAuthClientsApi->list_oauth_clients_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-oauth-client-v1
Patch oauth client
This performs a targeted update to the field(s) of an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-oauth-client-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The OAuth client id
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * tenant * businessName * homepageUrl * name * description * accessTokenValiditySeconds * refreshTokenValiditySeconds * redirectUris * grantTypes * accessType * enabled * strongAuthSupported * claimsSupported 

### Return type
[**Getoauthclientresponse**](../models/getoauthclientresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Indicates the PATCH operation succeeded, and returns the OAuth client&#39;s new representation. | Getoauthclientresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListOauthClientsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListOauthClientsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.oauth_clients.api.o_auth_clients_api import OAuthClientsApi
from sailpoint.oauth_clients.api_client import ApiClient
from sailpoint.oauth_clients.models.getoauthclientresponse import Getoauthclientresponse
from sailpoint.oauth_clients.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The OAuth client id # str | The OAuth client id
    jsonpatchoperation = '''[{"op":"replace","path":"/strongAuthSupported","value":true},{"op":"replace","path":"/businessName","value":"acme-solar"}]''' # List[Jsonpatchoperation] | A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * tenant * businessName * homepageUrl * name * description * accessTokenValiditySeconds * refreshTokenValiditySeconds * redirectUris * grantTypes * accessType * enabled * strongAuthSupported * claimsSupported 

    try:
        # Patch oauth client
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = OAuthClientsApi(api_client).patch_oauth_client_v1(id=id, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = OAuthClientsApi(api_client).patch_oauth_client_v1(id, new_jsonpatchoperation)
        print("The response of OAuthClientsApi->patch_oauth_client_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling OAuthClientsApi->patch_oauth_client_v1: %s\n" % e)
```



[[Back to top]](#) 



