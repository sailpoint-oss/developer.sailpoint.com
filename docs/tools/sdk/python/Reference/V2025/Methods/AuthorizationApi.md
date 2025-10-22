---
id: v2025-authorization
title: Authorization
pagination_label: Authorization
sidebar_label: Authorization
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Authorization', 'V2025Authorization'] 
slug: /tools/sdk/python/v2025/methods/authorization
tags: ['SDK', 'Software Development Kit', 'Authorization', 'V2025Authorization']
---

# sailpoint.v2025.AuthorizationApi
  Use this API to gather information related to the identities associated with a user level.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list-user-level-counts**](#list-user-level-counts) | **POST** `/authorization/user-levels/get-identity-count` | Count user levels identities
[**list-user-level-identities**](#list-user-level-identities) | **GET** `/authorization/user-levels/{id}/identities` | List user level identities


## list-user-level-counts
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
Count user levels identities
List of user levels along with the number of identities associated to it.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-user-level-counts)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | request_body | **[]str** | True  | List of user level ids. Max 50 identifiers can be passed in a single request.

### Return type
[**List[AuthUserLevelsIdentityCount]**](../models/auth-user-levels-identity-count)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of user levels along with the number of identities associated to it. | List[AuthUserLevelsIdentityCount] |  * X-Total-Count - The total result count.  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.authorization_api import AuthorizationApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.auth_user_levels_identity_count import AuthUserLevelsIdentityCount
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    request_body = '''['request_body_example']''' # List[str] | List of user level ids. Max 50 identifiers can be passed in a single request.

    try:
        # Count user levels identities
        new_request_body = RequestBody.from_json(request_body)
        results = AuthorizationApi(api_client).list_user_level_counts(x_sail_point_experimental=x_sail_point_experimental, request_body=new_request_body)
        # Below is a request that includes all optional parameters
        # results = AuthorizationApi(api_client).list_user_level_counts(x_sail_point_experimental, new_request_body)
        print("The response of AuthorizationApi->list_user_level_counts:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AuthorizationApi->list_user_level_counts: %s\n" % e)
```



[[Back to top]](#) 

## list-user-level-identities
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
List user level identities
List of identities associated with a user level.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-user-level-identities)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
Path   | id | **str** | True  | The unique identifier of the user level.
  Query | count | **bool** |   (optional) (default to False) | If true, X-Total-Count header with the the total number of identities for this user level will be included in the response.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName**
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[AuthUserSlimResponse]**](../models/auth-user-slim-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of identities associated with a user level. | List[AuthUserSlimResponse] |  * X-Total-Count - The total result count.  |
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
from sailpoint.v2025.api.authorization_api import AuthorizationApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.auth_user_slim_response import AuthUserSlimResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    id = 'idn:access-request-administrator' # str | The unique identifier of the user level. # str | The unique identifier of the user level.
    count = False # bool | If true, X-Total-Count header with the the total number of identities for this user level will be included in the response. (optional) (default to False) # bool | If true, X-Total-Count header with the the total number of identities for this user level will be included in the response. (optional) (default to False)
    sorters = 'displayName' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName** (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    try:
        # List user level identities
        
        results = AuthorizationApi(api_client).list_user_level_identities(x_sail_point_experimental=x_sail_point_experimental, id=id)
        # Below is a request that includes all optional parameters
        # results = AuthorizationApi(api_client).list_user_level_identities(x_sail_point_experimental, id, count, sorters, limit, offset)
        print("The response of AuthorizationApi->list_user_level_identities:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AuthorizationApi->list_user_level_identities: %s\n" % e)
```



[[Back to top]](#) 



