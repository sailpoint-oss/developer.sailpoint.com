---
id: v2024-personal-access-tokens
title: Personal_Access_Tokens
pagination_label: Personal_Access_Tokens
sidebar_label: Personal_Access_Tokens
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Personal_Access_Tokens', 'V2024Personal_Access_Tokens'] 
slug: /tools/sdk/python/v2024/methods/personal-access-tokens
tags: ['SDK', 'Software Development Kit', 'Personal_Access_Tokens', 'V2024Personal_Access_Tokens']
---

# sailpoint.v2024.PersonalAccessTokensApi
  Use this API to implement personal access token (PAT) functionality. 
With this functionality in place, users can use PATs as an alternative to passwords for authentication in Identity Security Cloud. 

PATs embed user information into the client ID and secret. 
This replaces the API clients&#39; need to store and provide a username and password to establish a connection, improving Identity Security Cloud organizations&#39; integration security. 

In Identity Security Cloud, users can do the following to create and manage their PATs: Select the dropdown menu under their names, select Preferences, and then select Personal Access Tokens. 
They must then provide a description about the token&#39;s purpose. 
They can then select &#39;Create Token&#39; at the bottom of the page to generate and view the Secret and Client ID. 

Refer to [Managing Personal Access Tokens](https://documentation.sailpoint.com/saas/help/common/generate_tokens.html) for more information about PATs.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-personal-access-token**](#create-personal-access-token) | **POST** `/personal-access-tokens` | Create Personal Access Token
[**delete-personal-access-token**](#delete-personal-access-token) | **DELETE** `/personal-access-tokens/{id}` | Delete Personal Access Token
[**list-personal-access-tokens**](#list-personal-access-tokens) | **GET** `/personal-access-tokens` | List Personal Access Tokens
[**patch-personal-access-token**](#patch-personal-access-token) | **PATCH** `/personal-access-tokens/{id}` | Patch Personal Access Token


## create-personal-access-token
Create Personal Access Token
This creates a personal access token.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-personal-access-token)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | create_personal_access_token_request | [**CreatePersonalAccessTokenRequest**](../models/create-personal-access-token-request) | True  | Name and scope of personal access token.

### Return type
[**CreatePersonalAccessTokenResponse**](../models/create-personal-access-token-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Created. Note - this is the only time Personal Access Tokens&#39; secret attribute will be displayed. | CreatePersonalAccessTokenResponse |  -  |
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
from sailpoint.v2024.api.personal_access_tokens_api import PersonalAccessTokensApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.create_personal_access_token_request import CreatePersonalAccessTokenRequest
from sailpoint.v2024.models.create_personal_access_token_response import CreatePersonalAccessTokenResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    create_personal_access_token_request = '''{
          "scope" : [ "demo:personal-access-token-scope:first", "demo:personal-access-token-scope:second" ],
          "accessTokenValiditySeconds" : 36900,
          "name" : "NodeJS Integration"
        }''' # CreatePersonalAccessTokenRequest | Name and scope of personal access token.

    try:
        # Create Personal Access Token
        new_create_personal_access_token_request = CreatePersonalAccessTokenRequest.from_json(create_personal_access_token_request)
        results = PersonalAccessTokensApi(api_client).create_personal_access_token(create_personal_access_token_request=new_create_personal_access_token_request)
        # Below is a request that includes all optional parameters
        # results = PersonalAccessTokensApi(api_client).create_personal_access_token(new_create_personal_access_token_request)
        print("The response of PersonalAccessTokensApi->create_personal_access_token:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PersonalAccessTokensApi->create_personal_access_token: %s\n" % e)
```



[[Back to top]](#) 

## delete-personal-access-token
Delete Personal Access Token
This deletes a personal access token.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-personal-access-token)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The personal access token id

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
from sailpoint.v2024.api.personal_access_tokens_api import PersonalAccessTokensApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The personal access token id # str | The personal access token id

    try:
        # Delete Personal Access Token
        
        PersonalAccessTokensApi(api_client).delete_personal_access_token(id=id)
        # Below is a request that includes all optional parameters
        # PersonalAccessTokensApi(api_client).delete_personal_access_token(id)
    except Exception as e:
        print("Exception when calling PersonalAccessTokensApi->delete_personal_access_token: %s\n" % e)
```



[[Back to top]](#) 

## list-personal-access-tokens
List Personal Access Tokens
This gets a collection of personal access tokens associated with the optional `owner-id`.  query parameter. If the `owner-id` query parameter is omitted, all personal access tokens  for a tenant will be retrieved, but the caller must have the 'idn:all-personal-access-tokens:read' right.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-personal-access-tokens)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | owner_id | **str** |   (optional) | The identity ID of the owner whose personal access tokens should be listed.  If \"me\", the caller should have the following right: 'idn:my-personal-access-tokens:read' If an actual owner ID or if the `owner-id` parameter is omitted in the request,  the caller should have the following right: 'idn:all-personal-access-tokens:read'.  If the caller has the following right, then managed personal access tokens associated with `owner-id`  will be retrieved: 'idn:managed-personal-access-tokens:read'
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull*

### Return type
[**List[GetPersonalAccessTokenResponse]**](../models/get-personal-access-token-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of personal access tokens. | List[GetPersonalAccessTokenResponse] |  -  |
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
from sailpoint.v2024.api.personal_access_tokens_api import PersonalAccessTokensApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.get_personal_access_token_response import GetPersonalAccessTokenResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    owner_id = '2c9180867b50d088017b554662fb281e' # str | The identity ID of the owner whose personal access tokens should be listed.  If \"me\", the caller should have the following right: 'idn:my-personal-access-tokens:read' If an actual owner ID or if the `owner-id` parameter is omitted in the request,  the caller should have the following right: 'idn:all-personal-access-tokens:read'.  If the caller has the following right, then managed personal access tokens associated with `owner-id`  will be retrieved: 'idn:managed-personal-access-tokens:read' (optional) # str | The identity ID of the owner whose personal access tokens should be listed.  If \"me\", the caller should have the following right: 'idn:my-personal-access-tokens:read' If an actual owner ID or if the `owner-id` parameter is omitted in the request,  the caller should have the following right: 'idn:all-personal-access-tokens:read'.  If the caller has the following right, then managed personal access tokens associated with `owner-id`  will be retrieved: 'idn:managed-personal-access-tokens:read' (optional)
    filters = 'lastUsed le 2023-02-05T10:59:27.214Z' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* (optional)

    try:
        # List Personal Access Tokens
        
        results = PersonalAccessTokensApi(api_client).list_personal_access_tokens()
        # Below is a request that includes all optional parameters
        # results = PersonalAccessTokensApi(api_client).list_personal_access_tokens(owner_id, filters)
        print("The response of PersonalAccessTokensApi->list_personal_access_tokens:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PersonalAccessTokensApi->list_personal_access_tokens: %s\n" % e)
```



[[Back to top]](#) 

## patch-personal-access-token
Patch Personal Access Token
This performs a targeted update to the field(s) of a Personal Access Token.
Changing scopes for a Personal Access Token does not impact existing bearer tokens. You will need to create a new bearer token to have the new scopes. Please note that it can take up to 20 minutes for scope changes to be seen on new bearer tokens.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/patch-personal-access-token)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The Personal Access Token id
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * scope 

### Return type
[**GetPersonalAccessTokenResponse**](../models/get-personal-access-token-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Indicates the PATCH operation succeeded, and returns the PAT&#39;s new representation. | GetPersonalAccessTokenResponse |  -  |
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
from sailpoint.v2024.api.personal_access_tokens_api import PersonalAccessTokensApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.get_personal_access_token_response import GetPersonalAccessTokenResponse
from sailpoint.v2024.models.json_patch_operation import JsonPatchOperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The Personal Access Token id # str | The Personal Access Token id
    json_patch_operation = '''[{op=replace, path=/name, value=New name}, {op=replace, path=/scope, value=[sp:scopes:all]}]''' # List[JsonPatchOperation] | A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * scope 

    try:
        # Patch Personal Access Token
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = PersonalAccessTokensApi(api_client).patch_personal_access_token(id=id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = PersonalAccessTokensApi(api_client).patch_personal_access_token(id, new_json_patch_operation)
        print("The response of PersonalAccessTokensApi->patch_personal_access_token:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PersonalAccessTokensApi->patch_personal_access_token: %s\n" % e)
```



[[Back to top]](#) 



