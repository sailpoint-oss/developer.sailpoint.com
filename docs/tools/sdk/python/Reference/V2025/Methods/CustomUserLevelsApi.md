---
id: v2025-custom-user-levels
title: Custom_User_Levels
pagination_label: Custom_User_Levels
sidebar_label: Custom_User_Levels
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Custom_User_Levels', 'V2025Custom_User_Levels'] 
slug: /tools/sdk/python/v2025/methods/custom-user-levels
tags: ['SDK', 'Software Development Kit', 'Custom_User_Levels', 'V2025Custom_User_Levels']
---

# sailpoint.v2025.CustomUserLevelsApi
  Use this API to implement custom user level functionality.
With this functionality in place, administrators can create custom user levels and configure them for use throughout Identity Security Cloud.

Custom user levels allow administrators to create custom user levels that can be used to control access to Identity Security Cloud features and APIs.

Refer to [User Levels](https://documentation.sailpoint.com/saas/help/common/users/index.html) for more information about User Levels.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-custom-user-level**](#create-custom-user-level) | **POST** `/authorization/custom-user-levels` | Create a custom user level
[**delete-user-level**](#delete-user-level) | **DELETE** `/authorization/custom-user-levels/{id}` | Delete a user level
[**get-user-level**](#get-user-level) | **GET** `/authorization/custom-user-levels/{id}` | Retrieve a user level
[**list-all-authorization-right-sets**](#list-all-authorization-right-sets) | **GET** `/authorization/authorization-assignable-right-sets` | List all uiAssignable right sets
[**list-user-levels**](#list-user-levels) | **GET** `/authorization/custom-user-levels` | List user levels
[**publish-custom-user-level**](#publish-custom-user-level) | **POST** `/authorization/custom-user-levels/{id}/publish` | Publish a custom user level
[**update-user-level**](#update-user-level) | **PATCH** `/authorization/custom-user-levels/{id}` | Update a user level


## create-custom-user-level
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
Create a custom user level
Creates a new custom user level for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-custom-user-level)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | user_level_request | [**UserLevelRequest**](../models/user-level-request) | True  | Payload containing the details of the user level to be created.

### Return type
[**UserLevelSummaryDTO**](../models/user-level-summary-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The user level summary. | UserLevelSummaryDTO |  * accept-language - The locale to use for translations  |
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
from sailpoint.v2025.api.custom_user_levels_api import CustomUserLevelsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.user_level_request import UserLevelRequest
from sailpoint.v2025.models.user_level_summary_dto import UserLevelSummaryDTO
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    user_level_request = '''{
          "owner" : {
            "name" : "William Wilson",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          },
          "rightSets" : [ "idn:ui-right-set-list-read-example", "idn:ui-right-set-write-example" ],
          "name" : "Custom User Level Name",
          "description" : "This is a description of the custom user level."
        }''' # UserLevelRequest | Payload containing the details of the user level to be created.

    try:
        # Create a custom user level
        new_user_level_request = UserLevelRequest.from_json(user_level_request)
        results = CustomUserLevelsApi(api_client).create_custom_user_level(x_sail_point_experimental=x_sail_point_experimental, user_level_request=new_user_level_request)
        # Below is a request that includes all optional parameters
        # results = CustomUserLevelsApi(api_client).create_custom_user_level(x_sail_point_experimental, new_user_level_request)
        print("The response of CustomUserLevelsApi->create_custom_user_level:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CustomUserLevelsApi->create_custom_user_level: %s\n" % e)
```



[[Back to top]](#) 

## delete-user-level
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
Delete a user level
Deletes a specific user level by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-user-level)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
Path   | id | **str** | True  | The unique identifier of the user level.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
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
from sailpoint.v2025.api.custom_user_levels_api import CustomUserLevelsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    id = '6e110911-5984-491b-be74-2707980a46a7' # str | The unique identifier of the user level. # str | The unique identifier of the user level.

    try:
        # Delete a user level
        
        CustomUserLevelsApi(api_client).delete_user_level(x_sail_point_experimental=x_sail_point_experimental, id=id)
        # Below is a request that includes all optional parameters
        # CustomUserLevelsApi(api_client).delete_user_level(x_sail_point_experimental, id)
    except Exception as e:
        print("Exception when calling CustomUserLevelsApi->delete_user_level: %s\n" % e)
```



[[Back to top]](#) 

## get-user-level
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
Retrieve a user level
Fetches the details of a specific user level by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-user-level)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
Path   | id | **str** | True  | The unique identifier of the user level.

### Return type
[**UserLevelSummaryDTO**](../models/user-level-summary-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Successfully retrieved the user level details. | UserLevelSummaryDTO |  * accept-language - The locale to use for translations  |
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
from sailpoint.v2025.api.custom_user_levels_api import CustomUserLevelsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.user_level_summary_dto import UserLevelSummaryDTO
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    id = '6e110911-5984-491b-be74-2707980a46a7' # str | The unique identifier of the user level. # str | The unique identifier of the user level.

    try:
        # Retrieve a user level
        
        results = CustomUserLevelsApi(api_client).get_user_level(x_sail_point_experimental=x_sail_point_experimental, id=id)
        # Below is a request that includes all optional parameters
        # results = CustomUserLevelsApi(api_client).get_user_level(x_sail_point_experimental, id)
        print("The response of CustomUserLevelsApi->get_user_level:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CustomUserLevelsApi->get_user_level: %s\n" % e)
```



[[Back to top]](#) 

## list-all-authorization-right-sets
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
List all uiAssignable right sets
Retrieves a list of authorization assignable right sets for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-all-authorization-right-sets)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **category**: *eq*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, category**
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[HierarchicalRightSet]**](../models/hierarchical-right-set)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Successfully retrieved the list of authorization assignable right sets. | List[HierarchicalRightSet] |  * X-Total-Count - The total result count.  * accept-language - The locale to use for translations  |
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
from sailpoint.v2025.api.custom_user_levels_api import CustomUserLevelsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.hierarchical_right_set import HierarchicalRightSet
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    filters = 'category eq \"identity\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **category**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **category**: *eq* (optional)
    sorters = 'name, -id, -category' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, category** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, category** (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    try:
        # List all uiAssignable right sets
        
        results = CustomUserLevelsApi(api_client).list_all_authorization_right_sets(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = CustomUserLevelsApi(api_client).list_all_authorization_right_sets(x_sail_point_experimental, filters, sorters, limit, offset)
        print("The response of CustomUserLevelsApi->list_all_authorization_right_sets:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CustomUserLevelsApi->list_all_authorization_right_sets: %s\n" % e)
```



[[Back to top]](#) 

## list-user-levels
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
List user levels
Retrieves a list of user levels for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-user-levels)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | detail_level | **str** |   (optional) | Specifies the level of detail for the user levels.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *co*    **owner**: *co*    **status**: *eq*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created**
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[UserLevelSummaryDTO]**](../models/user-level-summary-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Successfully retrieved the list of user levels. | List[UserLevelSummaryDTO] |  * X-Total-Count - The total result count.  * accept-language - The locale to use for translations  |
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
from sailpoint.v2025.api.custom_user_levels_api import CustomUserLevelsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.user_level_summary_dto import UserLevelSummaryDTO
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    detail_level = 'detailLevel=FULL' # str | Specifies the level of detail for the user levels. (optional) # str | Specifies the level of detail for the user levels. (optional)
    filters = 'name co \"identity\", owner co \"john\", status eq \"active\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *co*    **owner**: *co*    **status**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *co*    **owner**: *co*    **status**: *eq* (optional)
    sorters = 'name, -created' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created** (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    try:
        # List user levels
        
        results = CustomUserLevelsApi(api_client).list_user_levels(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = CustomUserLevelsApi(api_client).list_user_levels(x_sail_point_experimental, detail_level, filters, sorters, limit, offset)
        print("The response of CustomUserLevelsApi->list_user_levels:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CustomUserLevelsApi->list_user_levels: %s\n" % e)
```



[[Back to top]](#) 

## publish-custom-user-level
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
Publish a custom user level
Publishes a custom user level for the tenant, making it active and available.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/publish-custom-user-level)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
Path   | id | **str** | True  | The unique identifier of the user level to publish.

### Return type
[**UserLevelPublishSummary**](../models/user-level-publish-summary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The publish status summary for current user level. | UserLevelPublishSummary |  -  |
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
from sailpoint.v2025.api.custom_user_levels_api import CustomUserLevelsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.user_level_publish_summary import UserLevelPublishSummary
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    id = '6e110911-5984-491b-be74-2707980a46a7' # str | The unique identifier of the user level to publish. # str | The unique identifier of the user level to publish.

    try:
        # Publish a custom user level
        
        results = CustomUserLevelsApi(api_client).publish_custom_user_level(x_sail_point_experimental=x_sail_point_experimental, id=id)
        # Below is a request that includes all optional parameters
        # results = CustomUserLevelsApi(api_client).publish_custom_user_level(x_sail_point_experimental, id)
        print("The response of CustomUserLevelsApi->publish_custom_user_level:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CustomUserLevelsApi->publish_custom_user_level: %s\n" % e)
```



[[Back to top]](#) 

## update-user-level
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
Update a user level
Updates the details of a specific user level using JSON Patch.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-user-level)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
Path   | id | **str** | True  | The unique identifier of the user level.
 Body  | json_patch | [**JsonPatch**](../models/json-patch) | True  | JSON Patch payload for updating the user level.

### Return type
[**UserLevelSummaryDTO**](../models/user-level-summary-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Successfully updated the user level. | UserLevelSummaryDTO |  * accept-language - The locale to use for translations  |
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
from sailpoint.v2025.api.custom_user_levels_api import CustomUserLevelsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.json_patch import JsonPatch
from sailpoint.v2025.models.user_level_summary_dto import UserLevelSummaryDTO
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    id = '6e110911-5984-491b-be74-2707980a46a7' # str | The unique identifier of the user level. # str | The unique identifier of the user level.
    json_patch = '''{
          "operations" : [ {
            "op" : "replace",
            "path" : "/description",
            "value" : "New description"
          }, {
            "op" : "replace",
            "path" : "/description",
            "value" : "New description"
          } ]
        }''' # JsonPatch | JSON Patch payload for updating the user level.

    try:
        # Update a user level
        new_json_patch = JsonPatch.from_json(json_patch)
        results = CustomUserLevelsApi(api_client).update_user_level(x_sail_point_experimental=x_sail_point_experimental, id=id, json_patch=new_json_patch)
        # Below is a request that includes all optional parameters
        # results = CustomUserLevelsApi(api_client).update_user_level(x_sail_point_experimental, id, new_json_patch)
        print("The response of CustomUserLevelsApi->update_user_level:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CustomUserLevelsApi->update_user_level: %s\n" % e)
```



[[Back to top]](#) 



