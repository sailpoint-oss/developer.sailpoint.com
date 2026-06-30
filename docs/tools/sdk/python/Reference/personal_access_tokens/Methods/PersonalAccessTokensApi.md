---
id: personal-access-tokens
title: Personal_Access_Tokens
pagination_label: Personal_Access_Tokens
sidebar_label: Personal_Access_Tokens
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Personal_Access_Tokens', 'Personal_Access_Tokens'] 
slug: /tools/sdk/python/personal-access-tokens/methods/personal-access-tokens
tags: ['SDK', 'Software Development Kit', 'Personal_Access_Tokens', 'Personal_Access_Tokens']
---

# sailpoint.personal_access_tokens.PersonalAccessTokensApi
  Use this API to implement personal access token (PAT) functionality. 
With this functionality in place, users can use PATs as an alternative to passwords for authentication in Identity Security Cloud. 

PATs embed user information into the client ID and secret. 
This replaces the API clients&#39; need to store and provide a username and password to establish a connection, improving Identity Security Cloud organizations&#39; integration security. 

In Identity Security Cloud, users can do the following to create and manage their PATs: Select the dropdown menu under their names, select Preferences, and then select Personal Access Tokens. 
They must then provide a description about the token&#39;s purpose. 
They can then select &#39;Create Token&#39; at the bottom of the page to generate and view the Secret and Client ID. 

Refer to [Managing Personal Access Tokens](https://documentation.sailpoint.com/saas/help/common/api_keys.html?h&#x3D;token#generating-a-personal-access-token) for more information about PATs.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-personal-access-token-v1**](#create-personal-access-token-v1) | **POST** `/personal-access-tokens/v1` | Create personal access token
[**delete-personal-access-token-v1**](#delete-personal-access-token-v1) | **DELETE** `/personal-access-tokens/v1/{id}` | Delete personal access token
[**list-personal-access-tokens-v1**](#list-personal-access-tokens-v1) | **GET** `/personal-access-tokens/v1` | List personal access tokens
[**patch-personal-access-token-v1**](#patch-personal-access-token-v1) | **PATCH** `/personal-access-tokens/v1/{id}` | Patch personal access token


## create-personal-access-token-v1
Create personal access token
This creates a personal access token.
**expirationDate and userAwareTokenNeverExpires Relationship:**
**Important:** When `expirationDate` is `null` or empty (not included in the request body), the token will never expire.
**Required Validation:** If `expirationDate` is `null` or empty, `userAwareTokenNeverExpires` must be set to `true`. This is a required validation rule.
The valid values for `expirationDate` depend on the value provided for `userAwareTokenNeverExpires`:
* **When `userAwareTokenNeverExpires` is `true` (or required to be `true`):** `expirationDate` can be `null` or omitted from the request body. When `expirationDate` is `null` or empty, the token will never expire. This creates a PAT that never expires and serves as an explicit acknowledgment that the user is aware of the security implications of creating a non-expiring token. * **When `userAwareTokenNeverExpires` is `false` or omitted:** `expirationDate` must be provided and must be a valid date-time string representing a future date (there is no upper limit). `expirationDate` cannot be `null` in this case. In this scenario, `userAwareTokenNeverExpires` can be omitted.
**Validation Rules:** * **If `expirationDate` is `null` or not included in the request body:** `userAwareTokenNeverExpires` must be set to `true` (required). The token will never expire. * **If `expirationDate` is provided and is not `null`:** `userAwareTokenNeverExpires` can be omitted.
**Security Considerations:** The `userAwareTokenNeverExpires` field is designed to ensure that users explicitly acknowledge the security implications of creating tokens that never expire. Setting this field to `true` indicates that the user understands the increased security risks and has made an informed decision to proceed.
**Note:** The `userAwareTokenNeverExpires` field indicates that the user acknowledges they are creating a token that will never expire. It does not affect token behavior beyond indicating this acknowledgment.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-personal-access-token-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | createpersonalaccesstokenrequest | [**Createpersonalaccesstokenrequest**](../models/createpersonalaccesstokenrequest) | True  | Configuration for creating a personal access token, including name, scope, expiration settings, and user acknowledgment of never-expiring tokens. **Important:** See the endpoint description for validation rules regarding the relationship between `expirationDate` and `userAwareTokenNeverExpires`.

### Return type
[**Createpersonalaccesstokenresponse**](../models/createpersonalaccesstokenresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Created. Note - this is the only time Personal Access Tokens&#39; secret attribute will be displayed. | Createpersonalaccesstokenresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListPersonalAccessTokensV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListPersonalAccessTokensV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.personal_access_tokens.api.personal_access_tokens_api import PersonalAccessTokensApi
from sailpoint.personal_access_tokens.api_client import ApiClient
from sailpoint.personal_access_tokens.models.createpersonalaccesstokenrequest import Createpersonalaccesstokenrequest
from sailpoint.personal_access_tokens.models.createpersonalaccesstokenresponse import Createpersonalaccesstokenresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    createpersonalaccesstokenrequest = '''sailpoint.personal_access_tokens.Createpersonalaccesstokenrequest()''' # Createpersonalaccesstokenrequest | Configuration for creating a personal access token, including name, scope, expiration settings, and user acknowledgment of never-expiring tokens. **Important:** See the endpoint description for validation rules regarding the relationship between `expirationDate` and `userAwareTokenNeverExpires`.

    try:
        # Create personal access token
        new_createpersonalaccesstokenrequest = Createpersonalaccesstokenrequest.from_json(createpersonalaccesstokenrequest)
        results = PersonalAccessTokensApi(api_client).create_personal_access_token_v1(createpersonalaccesstokenrequest=new_createpersonalaccesstokenrequest)
        # Below is a request that includes all optional parameters
        # results = PersonalAccessTokensApi(api_client).create_personal_access_token_v1(new_createpersonalaccesstokenrequest)
        print("The response of PersonalAccessTokensApi->create_personal_access_token_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PersonalAccessTokensApi->create_personal_access_token_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-personal-access-token-v1
Delete personal access token
This deletes a personal access token.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-personal-access-token-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListPersonalAccessTokensV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListPersonalAccessTokensV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.personal_access_tokens.api.personal_access_tokens_api import PersonalAccessTokensApi
from sailpoint.personal_access_tokens.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The personal access token id # str | The personal access token id

    try:
        # Delete personal access token
        
        PersonalAccessTokensApi(api_client).delete_personal_access_token_v1(id=id)
        # Below is a request that includes all optional parameters
        # PersonalAccessTokensApi(api_client).delete_personal_access_token_v1(id)
    except Exception as e:
        print("Exception when calling PersonalAccessTokensApi->delete_personal_access_token_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-personal-access-tokens-v1
List personal access tokens
This gets a collection of personal access tokens associated with the optional `owner-id`.  query parameter. If the `owner-id` query parameter is omitted, all personal access tokens  for a tenant will be retrieved, but the caller must have the 'idn:all-personal-access-tokens:read' right.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-personal-access-tokens-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | owner_id | **str** |   (optional) | The identity ID of the owner whose personal access tokens should be listed.  If \"me\", the caller should have the following right: 'idn:my-personal-access-tokens:read' If an actual owner ID or if the `owner-id` parameter is omitted in the request,  the caller should have the following right: 'idn:all-personal-access-tokens:read'.  If the caller has the following right, then managed personal access tokens associated with `owner-id`  will be retrieved: 'idn:managed-personal-access-tokens:read'
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull*

### Return type
[**List[Getpersonalaccesstokenresponse]**](../models/getpersonalaccesstokenresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of personal access tokens. | List[Getpersonalaccesstokenresponse] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListPersonalAccessTokensV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListPersonalAccessTokensV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.personal_access_tokens.api.personal_access_tokens_api import PersonalAccessTokensApi
from sailpoint.personal_access_tokens.api_client import ApiClient
from sailpoint.personal_access_tokens.models.getpersonalaccesstokenresponse import Getpersonalaccesstokenresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    owner_id = '2c9180867b50d088017b554662fb281e' # str | The identity ID of the owner whose personal access tokens should be listed.  If \"me\", the caller should have the following right: 'idn:my-personal-access-tokens:read' If an actual owner ID or if the `owner-id` parameter is omitted in the request,  the caller should have the following right: 'idn:all-personal-access-tokens:read'.  If the caller has the following right, then managed personal access tokens associated with `owner-id`  will be retrieved: 'idn:managed-personal-access-tokens:read' (optional) # str | The identity ID of the owner whose personal access tokens should be listed.  If \"me\", the caller should have the following right: 'idn:my-personal-access-tokens:read' If an actual owner ID or if the `owner-id` parameter is omitted in the request,  the caller should have the following right: 'idn:all-personal-access-tokens:read'.  If the caller has the following right, then managed personal access tokens associated with `owner-id`  will be retrieved: 'idn:managed-personal-access-tokens:read' (optional)
    filters = 'lastUsed le 2023-02-05T10:59:27.214Z' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* (optional)

    try:
        # List personal access tokens
        
        results = PersonalAccessTokensApi(api_client).list_personal_access_tokens_v1()
        # Below is a request that includes all optional parameters
        # results = PersonalAccessTokensApi(api_client).list_personal_access_tokens_v1(owner_id, filters)
        print("The response of PersonalAccessTokensApi->list_personal_access_tokens_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PersonalAccessTokensApi->list_personal_access_tokens_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-personal-access-token-v1
Patch personal access token
This performs a targeted update to the field(s) of a Personal Access Token.
Changing scopes for a Personal Access Token does not impact existing bearer tokens. You will need to create a new bearer token to have the new scopes. Please note that it can take up to 20 minutes for scope changes to be seen on new bearer tokens.
**expirationDate and userAwareTokenNeverExpires Relationship:**
**Important:** When `expirationDate` is `null` or empty (replaced to `null` or omitted from the patch request), the token will never expire.
**Required Validation:** If `expirationDate` is being replaced to `null` or is empty, `userAwareTokenNeverExpires` must be set to `true` in the patch request. This is a required validation rule.
When patching `expirationDate` and `userAwareTokenNeverExpires`, the valid values for `expirationDate` depend on the value provided for `userAwareTokenNeverExpires`:
* **When `userAwareTokenNeverExpires` is being set to `true` (or required to be `true`):** `expirationDate` can be replaced to `null` or omitted from the patch request. When `expirationDate` is `null` or empty, the token will never expire. This sets the PAT to never expire and serves as an explicit acknowledgment that the user is aware of the security implications of creating a non-expiring token. * **When `userAwareTokenNeverExpires` is `false` or omitted:** `expirationDate` must be provided and must be a valid date-time string representing a future date (there is no upper limit). `expirationDate` cannot be `null` in this case. In this scenario, `userAwareTokenNeverExpires` can be omitted.
**Validation Rules:** * **If `expirationDate` is being replaced to `null`:** `userAwareTokenNeverExpires` must also be present in the patch request with a value of `true` (required). The token will never expire. * **If `expirationDate` is not being replaced to `null` (i.e., set to a future date):** `userAwareTokenNeverExpires` can be omitted.
**Security Considerations:** The `userAwareTokenNeverExpires` field is designed to ensure that users explicitly acknowledge the security implications of creating tokens that never expire. Setting this field to `true` indicates that the user understands the increased security risks and has made an informed decision to proceed.
**Note:** The `userAwareTokenNeverExpires` field indicates that the user acknowledges they are creating a token that will never expire. It does not affect token behavior beyond indicating this acknowledgment.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-personal-access-token-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The Personal Access Token id
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * scope * expirationDate * userAwareTokenNeverExpires  **Important:** See the endpoint description for validation rules regarding the relationship between `expirationDate` and `userAwareTokenNeverExpires`. 

### Return type
[**Getpersonalaccesstokenresponse**](../models/getpersonalaccesstokenresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Indicates the PATCH operation succeeded, and returns the PAT&#39;s new representation. | Getpersonalaccesstokenresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListPersonalAccessTokensV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListPersonalAccessTokensV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.personal_access_tokens.api.personal_access_tokens_api import PersonalAccessTokensApi
from sailpoint.personal_access_tokens.api_client import ApiClient
from sailpoint.personal_access_tokens.models.getpersonalaccesstokenresponse import Getpersonalaccesstokenresponse
from sailpoint.personal_access_tokens.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The Personal Access Token id # str | The Personal Access Token id
    jsonpatchoperation = '''[{"op":"replace","path":"/name","value":"New name"},{"op":"replace","path":"/scope","value":["sp:scopes:all"]},{"op":"replace","path":"/expirationDate","value":"2027-12-31T23:59:59.999Z"}]''' # List[Jsonpatchoperation] | A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * scope * expirationDate * userAwareTokenNeverExpires  **Important:** See the endpoint description for validation rules regarding the relationship between `expirationDate` and `userAwareTokenNeverExpires`. 

    try:
        # Patch personal access token
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = PersonalAccessTokensApi(api_client).patch_personal_access_token_v1(id=id, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = PersonalAccessTokensApi(api_client).patch_personal_access_token_v1(id, new_jsonpatchoperation)
        print("The response of PersonalAccessTokensApi->patch_personal_access_token_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PersonalAccessTokensApi->patch_personal_access_token_v1: %s\n" % e)
```



[[Back to top]](#) 



