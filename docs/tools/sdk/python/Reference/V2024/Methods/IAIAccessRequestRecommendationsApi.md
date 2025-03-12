---
id: v2024-iai-access-request-recommendations
title: IAI_Access_Request_Recommendations
pagination_label: IAI_Access_Request_Recommendations
sidebar_label: IAI_Access_Request_Recommendations
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IAI_Access_Request_Recommendations', 'V2024IAI_Access_Request_Recommendations'] 
slug: /tools/sdk/python/v2024/methods/iai-access-request-recommendations
tags: ['SDK', 'Software Development Kit', 'IAI_Access_Request_Recommendations', 'V2024IAI_Access_Request_Recommendations']
---

# sailpoint.v2024.IAIAccessRequestRecommendationsApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add-access-request-recommendations-ignored-item**](#add-access-request-recommendations-ignored-item) | **POST** `/ai-access-request-recommendations/ignored-items` | Ignore Access Request Recommendation
[**add-access-request-recommendations-requested-item**](#add-access-request-recommendations-requested-item) | **POST** `/ai-access-request-recommendations/requested-items` | Accept Access Request Recommendation
[**add-access-request-recommendations-viewed-item**](#add-access-request-recommendations-viewed-item) | **POST** `/ai-access-request-recommendations/viewed-items` | Mark Viewed Access Request Recommendations
[**add-access-request-recommendations-viewed-items**](#add-access-request-recommendations-viewed-items) | **POST** `/ai-access-request-recommendations/viewed-items/bulk-create` | Bulk Mark Viewed Access Request Recommendations
[**get-access-request-recommendations**](#get-access-request-recommendations) | **GET** `/ai-access-request-recommendations` | Identity Access Request Recommendations
[**get-access-request-recommendations-config**](#get-access-request-recommendations-config) | **GET** `/ai-access-request-recommendations/config` | Get Access Request Recommendations config
[**get-access-request-recommendations-ignored-items**](#get-access-request-recommendations-ignored-items) | **GET** `/ai-access-request-recommendations/ignored-items` | List Ignored Access Request Recommendations
[**get-access-request-recommendations-requested-items**](#get-access-request-recommendations-requested-items) | **GET** `/ai-access-request-recommendations/requested-items` | List Accepted Access Request Recommendations
[**get-access-request-recommendations-viewed-items**](#get-access-request-recommendations-viewed-items) | **GET** `/ai-access-request-recommendations/viewed-items` | List Viewed Access Request Recommendations
[**set-access-request-recommendations-config**](#set-access-request-recommendations-config) | **PUT** `/ai-access-request-recommendations/config` | Update Access Request Recommendations config


## add-access-request-recommendations-ignored-item
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
Ignore Access Request Recommendation
This API ignores a recommended access request item. Once an item is ignored, it will be marked as ignored=true if it is still a recommended item. The consumer can decide to hide ignored recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/add-access-request-recommendations-ignored-item)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | access_request_recommendation_action_item_dto | [**AccessRequestRecommendationActionItemDto**](../models/access-request-recommendation-action-item-dto) | True  | The recommended access item to ignore for an identity.

### Return type
[**AccessRequestRecommendationActionItemResponseDto**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Recommendation successfully stored as ignored. | AccessRequestRecommendationActionItemResponseDto |  -  |
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
from sailpoint.v2024.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.access_request_recommendation_action_item_dto import AccessRequestRecommendationActionItemDto
from sailpoint.v2024.models.access_request_recommendation_action_item_response_dto import AccessRequestRecommendationActionItemResponseDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    access_request_recommendation_action_item_dto = '''{
          "access" : {
            "id" : "2c9180835d2e5168015d32f890ca1581",
            "type" : "ACCESS_PROFILE"
          },
          "identityId" : "2c91808570313110017040b06f344ec9"
        }''' # AccessRequestRecommendationActionItemDto | The recommended access item to ignore for an identity.

    try:
        # Ignore Access Request Recommendation
        new_access_request_recommendation_action_item_dto = AccessRequestRecommendationActionItemDto.from_json(access_request_recommendation_action_item_dto)
        results = IAIAccessRequestRecommendationsApi(api_client).add_access_request_recommendations_ignored_item(x_sail_point_experimental=x_sail_point_experimental, access_request_recommendation_action_item_dto=new_access_request_recommendation_action_item_dto)
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).add_access_request_recommendations_ignored_item(x_sail_point_experimental, new_access_request_recommendation_action_item_dto)
        print("The response of IAIAccessRequestRecommendationsApi->add_access_request_recommendations_ignored_item:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->add_access_request_recommendations_ignored_item: %s\n" % e)
```



[[Back to top]](#) 

## add-access-request-recommendations-requested-item
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
Accept Access Request Recommendation
This API consumes a notification that a recommended access request item was requested. This API does not actually make the request, it is just a notification. This will help provide feedback in order to improve our recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/add-access-request-recommendations-requested-item)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | access_request_recommendation_action_item_dto | [**AccessRequestRecommendationActionItemDto**](../models/access-request-recommendation-action-item-dto) | True  | The recommended access item that was requested for an identity.

### Return type
[**AccessRequestRecommendationActionItemResponseDto**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Notification successfully acknowledged. | AccessRequestRecommendationActionItemResponseDto |  -  |
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
from sailpoint.v2024.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.access_request_recommendation_action_item_dto import AccessRequestRecommendationActionItemDto
from sailpoint.v2024.models.access_request_recommendation_action_item_response_dto import AccessRequestRecommendationActionItemResponseDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    access_request_recommendation_action_item_dto = '''{
          "access" : {
            "id" : "2c9180835d2e5168015d32f890ca1581",
            "type" : "ACCESS_PROFILE"
          },
          "identityId" : "2c91808570313110017040b06f344ec9"
        }''' # AccessRequestRecommendationActionItemDto | The recommended access item that was requested for an identity.

    try:
        # Accept Access Request Recommendation
        new_access_request_recommendation_action_item_dto = AccessRequestRecommendationActionItemDto.from_json(access_request_recommendation_action_item_dto)
        results = IAIAccessRequestRecommendationsApi(api_client).add_access_request_recommendations_requested_item(x_sail_point_experimental=x_sail_point_experimental, access_request_recommendation_action_item_dto=new_access_request_recommendation_action_item_dto)
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).add_access_request_recommendations_requested_item(x_sail_point_experimental, new_access_request_recommendation_action_item_dto)
        print("The response of IAIAccessRequestRecommendationsApi->add_access_request_recommendations_requested_item:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->add_access_request_recommendations_requested_item: %s\n" % e)
```



[[Back to top]](#) 

## add-access-request-recommendations-viewed-item
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
Mark Viewed Access Request Recommendations
This API consumes a notification that a recommended access request item was viewed. Future recommendations with this item will be marked with viewed=true. This can be useful for the consumer to determine if there are any new/unviewed recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/add-access-request-recommendations-viewed-item)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | access_request_recommendation_action_item_dto | [**AccessRequestRecommendationActionItemDto**](../models/access-request-recommendation-action-item-dto) | True  | The recommended access that was viewed for an identity.

### Return type
[**AccessRequestRecommendationActionItemResponseDto**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Recommendation successfully stored as viewed. | AccessRequestRecommendationActionItemResponseDto |  -  |
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
from sailpoint.v2024.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.access_request_recommendation_action_item_dto import AccessRequestRecommendationActionItemDto
from sailpoint.v2024.models.access_request_recommendation_action_item_response_dto import AccessRequestRecommendationActionItemResponseDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    access_request_recommendation_action_item_dto = '''{
          "access" : {
            "id" : "2c9180835d2e5168015d32f890ca1581",
            "type" : "ACCESS_PROFILE"
          },
          "identityId" : "2c91808570313110017040b06f344ec9"
        }''' # AccessRequestRecommendationActionItemDto | The recommended access that was viewed for an identity.

    try:
        # Mark Viewed Access Request Recommendations
        new_access_request_recommendation_action_item_dto = AccessRequestRecommendationActionItemDto.from_json(access_request_recommendation_action_item_dto)
        results = IAIAccessRequestRecommendationsApi(api_client).add_access_request_recommendations_viewed_item(x_sail_point_experimental=x_sail_point_experimental, access_request_recommendation_action_item_dto=new_access_request_recommendation_action_item_dto)
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).add_access_request_recommendations_viewed_item(x_sail_point_experimental, new_access_request_recommendation_action_item_dto)
        print("The response of IAIAccessRequestRecommendationsApi->add_access_request_recommendations_viewed_item:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->add_access_request_recommendations_viewed_item: %s\n" % e)
```



[[Back to top]](#) 

## add-access-request-recommendations-viewed-items
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
Bulk Mark Viewed Access Request Recommendations
This API consumes a notification that a set of recommended access request item were viewed. Future recommendations with these items will be marked with viewed=true. This can be useful for the consumer to determine if there are any new/unviewed recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/add-access-request-recommendations-viewed-items)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | access_request_recommendation_action_item_dto | [**[]AccessRequestRecommendationActionItemDto**](../models/access-request-recommendation-action-item-dto) | True  | The recommended access items that were viewed for an identity.

### Return type
[**List[AccessRequestRecommendationActionItemResponseDto]**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Recommendations successfully stored as viewed. | List[AccessRequestRecommendationActionItemResponseDto] |  -  |
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
from sailpoint.v2024.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.access_request_recommendation_action_item_dto import AccessRequestRecommendationActionItemDto
from sailpoint.v2024.models.access_request_recommendation_action_item_response_dto import AccessRequestRecommendationActionItemResponseDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    access_request_recommendation_action_item_dto = '''[sailpoint.v2024.AccessRequestRecommendationActionItemDto()]''' # List[AccessRequestRecommendationActionItemDto] | The recommended access items that were viewed for an identity.

    try:
        # Bulk Mark Viewed Access Request Recommendations
        new_access_request_recommendation_action_item_dto = AccessRequestRecommendationActionItemDto.from_json(access_request_recommendation_action_item_dto)
        results = IAIAccessRequestRecommendationsApi(api_client).add_access_request_recommendations_viewed_items(x_sail_point_experimental=x_sail_point_experimental, access_request_recommendation_action_item_dto=new_access_request_recommendation_action_item_dto)
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).add_access_request_recommendations_viewed_items(x_sail_point_experimental, new_access_request_recommendation_action_item_dto)
        print("The response of IAIAccessRequestRecommendationsApi->add_access_request_recommendations_viewed_items:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->add_access_request_recommendations_viewed_items: %s\n" % e)
```



[[Back to top]](#) 

## get-access-request-recommendations
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
Identity Access Request Recommendations
This API returns the access request recommendations for the specified identity. The default identity is *me* which indicates the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-access-request-recommendations)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | identity_id | **str** |   (optional) (default to 'me') | Get access request recommendations for an identityId. *me* indicates the current user.
  Query | limit | **int** |   (optional) (default to 15) | Max number of results to return.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | include_translation_messages | **bool** |   (optional) (default to False) | If *true* it will populate a list of translation messages in the response.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.name**: *co*  **access.type**: *eq, in*  **access.description**: *co, eq, in*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, access.type**  By default the recommendations are sorted by highest confidence first.

### Return type
[**List[AccessRequestRecommendationItemDetail]**](../models/access-request-recommendation-item-detail)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of access request recommendations for the identityId | List[AccessRequestRecommendationItemDetail] |  -  |
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
from sailpoint.v2024.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.access_request_recommendation_item_detail import AccessRequestRecommendationItemDetail
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    identity_id = 'me' # str | Get access request recommendations for an identityId. *me* indicates the current user. (optional) (default to 'me') # str | Get access request recommendations for an identityId. *me* indicates the current user. (optional) (default to 'me')
    limit = 15 # int | Max number of results to return. (optional) (default to 15) # int | Max number of results to return. (optional) (default to 15)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    include_translation_messages = False # bool | If *true* it will populate a list of translation messages in the response. (optional) (default to False) # bool | If *true* it will populate a list of translation messages in the response. (optional) (default to False)
    filters = 'access.name co \"admin\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.name**: *co*  **access.type**: *eq, in*  **access.description**: *co, eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.name**: *co*  **access.type**: *eq, in*  **access.description**: *co, eq, in* (optional)
    sorters = 'access.name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, access.type**  By default the recommendations are sorted by highest confidence first. (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, access.type**  By default the recommendations are sorted by highest confidence first. (optional)

    try:
        # Identity Access Request Recommendations
        
        results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations(x_sail_point_experimental, identity_id, limit, offset, count, include_translation_messages, filters, sorters)
        print("The response of IAIAccessRequestRecommendationsApi->get_access_request_recommendations:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->get_access_request_recommendations: %s\n" % e)
```



[[Back to top]](#) 

## get-access-request-recommendations-config
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
Get Access Request Recommendations config
This API returns the configurations for Access Request Recommender for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-access-request-recommendations-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**AccessRequestRecommendationConfigDto**](../models/access-request-recommendation-config-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Configurations for Access Request Recommender for the tenant. | AccessRequestRecommendationConfigDto |  -  |
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
from sailpoint.v2024.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.access_request_recommendation_config_dto import AccessRequestRecommendationConfigDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Get Access Request Recommendations config
        
        results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations_config(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations_config(x_sail_point_experimental)
        print("The response of IAIAccessRequestRecommendationsApi->get_access_request_recommendations_config:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->get_access_request_recommendations_config: %s\n" % e)
```



[[Back to top]](#) 

## get-access-request-recommendations-ignored-items
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
List Ignored Access Request Recommendations
This API returns the list of ignored access request recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-access-request-recommendations-ignored-items)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp**

### Return type
[**List[AccessRequestRecommendationActionItemResponseDto]**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Returns list of ignored access request recommendations. | List[AccessRequestRecommendationActionItemResponseDto] |  -  |
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
from sailpoint.v2024.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.access_request_recommendation_action_item_response_dto import AccessRequestRecommendationActionItemResponseDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'identityId eq \"2c9180846b0a0583016b299f210c1314\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional)
    sorters = 'access.id' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional)

    try:
        # List Ignored Access Request Recommendations
        
        results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations_ignored_items(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations_ignored_items(x_sail_point_experimental, limit, offset, count, filters, sorters)
        print("The response of IAIAccessRequestRecommendationsApi->get_access_request_recommendations_ignored_items:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->get_access_request_recommendations_ignored_items: %s\n" % e)
```



[[Back to top]](#) 

## get-access-request-recommendations-requested-items
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
List Accepted Access Request Recommendations
This API returns a list of requested access request recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-access-request-recommendations-requested-items)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp**

### Return type
[**List[AccessRequestRecommendationActionItemResponseDto]**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Returns the list of requested access request recommendations. | List[AccessRequestRecommendationActionItemResponseDto] |  -  |
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
from sailpoint.v2024.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.access_request_recommendation_action_item_response_dto import AccessRequestRecommendationActionItemResponseDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'access.id eq \"2c9180846b0a0583016b299f210c1314\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional)
    sorters = 'access.id' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional)

    try:
        # List Accepted Access Request Recommendations
        
        results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations_requested_items(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations_requested_items(x_sail_point_experimental, limit, offset, count, filters, sorters)
        print("The response of IAIAccessRequestRecommendationsApi->get_access_request_recommendations_requested_items:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->get_access_request_recommendations_requested_items: %s\n" % e)
```



[[Back to top]](#) 

## get-access-request-recommendations-viewed-items
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
List Viewed Access Request Recommendations
This API returns the list of viewed access request recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-access-request-recommendations-viewed-items)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp**

### Return type
[**List[AccessRequestRecommendationActionItemResponseDto]**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Returns list of viewed access request recommendations. | List[AccessRequestRecommendationActionItemResponseDto] |  -  |
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
from sailpoint.v2024.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.access_request_recommendation_action_item_response_dto import AccessRequestRecommendationActionItemResponseDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'access.id eq \"2c9180846b0a0583016b299f210c1314\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional)
    sorters = 'access.id' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional)

    try:
        # List Viewed Access Request Recommendations
        
        results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations_viewed_items(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations_viewed_items(x_sail_point_experimental, limit, offset, count, filters, sorters)
        print("The response of IAIAccessRequestRecommendationsApi->get_access_request_recommendations_viewed_items:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->get_access_request_recommendations_viewed_items: %s\n" % e)
```



[[Back to top]](#) 

## set-access-request-recommendations-config
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
Update Access Request Recommendations config
This API updates the configurations for Access Request Recommender for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/set-access-request-recommendations-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | access_request_recommendation_config_dto | [**AccessRequestRecommendationConfigDto**](../models/access-request-recommendation-config-dto) | True  | The desired configurations for Access Request Recommender for the tenant.

### Return type
[**AccessRequestRecommendationConfigDto**](../models/access-request-recommendation-config-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Successfully updated configurations for Access Request Recommender for the tenant. | AccessRequestRecommendationConfigDto |  -  |
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
from sailpoint.v2024.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.access_request_recommendation_config_dto import AccessRequestRecommendationConfigDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    access_request_recommendation_config_dto = '''{
          "scoreThreshold" : 0.5,
          "startDateAttribute" : "startDate",
          "restrictionAttribute" : "location",
          "moverAttribute" : "isMover",
          "joinerAttribute" : "isJoiner",
          "useRestrictionAttribute" : true
        }''' # AccessRequestRecommendationConfigDto | The desired configurations for Access Request Recommender for the tenant.

    try:
        # Update Access Request Recommendations config
        new_access_request_recommendation_config_dto = AccessRequestRecommendationConfigDto.from_json(access_request_recommendation_config_dto)
        results = IAIAccessRequestRecommendationsApi(api_client).set_access_request_recommendations_config(x_sail_point_experimental=x_sail_point_experimental, access_request_recommendation_config_dto=new_access_request_recommendation_config_dto)
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).set_access_request_recommendations_config(x_sail_point_experimental, new_access_request_recommendation_config_dto)
        print("The response of IAIAccessRequestRecommendationsApi->set_access_request_recommendations_config:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->set_access_request_recommendations_config: %s\n" % e)
```



[[Back to top]](#) 



