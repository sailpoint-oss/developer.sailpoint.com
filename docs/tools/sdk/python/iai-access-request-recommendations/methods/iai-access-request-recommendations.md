# IAI_Access_Request_Recommendations

# sailpoint.iai_access_request_recommendations.IAIAccessRequestRecommendationsApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add-access-request-recommendations-ignored-item-v1**](#add-access-request-recommendations-ignored-item-v1) | **POST** `/ai-access-request-recommendations/v1/ignored-items` | Ignore access request recommendation
[**add-access-request-recommendations-requested-item-v1**](#add-access-request-recommendations-requested-item-v1) | **POST** `/ai-access-request-recommendations/v1/requested-items` | Accept access request recommendation
[**add-access-request-recommendations-viewed-item-v1**](#add-access-request-recommendations-viewed-item-v1) | **POST** `/ai-access-request-recommendations/v1/viewed-items` | Mark viewed access request recommendations
[**add-access-request-recommendations-viewed-items-v1**](#add-access-request-recommendations-viewed-items-v1) | **POST** `/ai-access-request-recommendations/v1/viewed-items/bulk-create` | Bulk mark viewed access request recommendations
[**get-access-request-recommendations-config-v1**](#get-access-request-recommendations-config-v1) | **GET** `/ai-access-request-recommendations/v1/config` | Get access request recommendations config
[**get-access-request-recommendations-ignored-items-v1**](#get-access-request-recommendations-ignored-items-v1) | **GET** `/ai-access-request-recommendations/v1/ignored-items` | List ignored access request recommendations
[**get-access-request-recommendations-requested-items-v1**](#get-access-request-recommendations-requested-items-v1) | **GET** `/ai-access-request-recommendations/v1/requested-items` | List accepted access request recommendations
[**get-access-request-recommendations-v1**](#get-access-request-recommendations-v1) | **GET** `/ai-access-request-recommendations/v1` | Identity access request recommendations
[**get-access-request-recommendations-viewed-items-v1**](#get-access-request-recommendations-viewed-items-v1) | **GET** `/ai-access-request-recommendations/v1/viewed-items` | List viewed access request recommendations
[**set-access-request-recommendations-config-v1**](#set-access-request-recommendations-config-v1) | **PUT** `/ai-access-request-recommendations/v1/config` | Update access request recommendations config


## add-access-request-recommendations-ignored-item-v1
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
Ignore access request recommendation
This API ignores a recommended access request item. Once an item is ignored, it will be marked as ignored=true if it is still a recommended item. The consumer can decide to hide ignored recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/add-access-request-recommendations-ignored-item-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | access_request_recommendation_action_item_dto | [**AccessRequestRecommendationActionItemDto**](../models/access-request-recommendation-action-item-dto) | True  | The recommended access item to ignore for an identity.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**AccessRequestRecommendationActionItemResponseDto**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Recommendation successfully stored as ignored. | AccessRequestRecommendationActionItemResponseDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestRecommendationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestRecommendationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_access_request_recommendations.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.iai_access_request_recommendations.api_client import ApiClient
from sailpoint.iai_access_request_recommendations.models.access_request_recommendation_action_item_dto import AccessRequestRecommendationActionItemDto
from sailpoint.iai_access_request_recommendations.models.access_request_recommendation_action_item_response_dto import AccessRequestRecommendationActionItemResponseDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    access_request_recommendation_action_item_dto = '''{
          "access" : {
            "id" : "2c9180835d2e5168015d32f890ca1581",
            "type" : "ACCESS_PROFILE"
          },
          "identityId" : "2c91808570313110017040b06f344ec9"
        }''' # AccessRequestRecommendationActionItemDto | The recommended access item to ignore for an identity.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Ignore access request recommendation
        new_access_request_recommendation_action_item_dto = AccessRequestRecommendationActionItemDto.from_json(access_request_recommendation_action_item_dto)
        results = IAIAccessRequestRecommendationsApi(api_client).add_access_request_recommendations_ignored_item_v1(access_request_recommendation_action_item_dto=new_access_request_recommendation_action_item_dto)
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).add_access_request_recommendations_ignored_item_v1(new_access_request_recommendation_action_item_dto, x_sail_point_experimental)
        print("The response of IAIAccessRequestRecommendationsApi->add_access_request_recommendations_ignored_item_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->add_access_request_recommendations_ignored_item_v1: %s\n" % e)
```



[[Back to top]](#) 

## add-access-request-recommendations-requested-item-v1
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
Accept access request recommendation
This API consumes a notification that a recommended access request item was requested. This API does not actually make the request, it is just a notification. This will help provide feedback in order to improve our recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/add-access-request-recommendations-requested-item-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | access_request_recommendation_action_item_dto | [**AccessRequestRecommendationActionItemDto**](../models/access-request-recommendation-action-item-dto) | True  | The recommended access item that was requested for an identity.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**AccessRequestRecommendationActionItemResponseDto**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Notification successfully acknowledged. | AccessRequestRecommendationActionItemResponseDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestRecommendationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestRecommendationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_access_request_recommendations.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.iai_access_request_recommendations.api_client import ApiClient
from sailpoint.iai_access_request_recommendations.models.access_request_recommendation_action_item_dto import AccessRequestRecommendationActionItemDto
from sailpoint.iai_access_request_recommendations.models.access_request_recommendation_action_item_response_dto import AccessRequestRecommendationActionItemResponseDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    access_request_recommendation_action_item_dto = '''{
          "access" : {
            "id" : "2c9180835d2e5168015d32f890ca1581",
            "type" : "ACCESS_PROFILE"
          },
          "identityId" : "2c91808570313110017040b06f344ec9"
        }''' # AccessRequestRecommendationActionItemDto | The recommended access item that was requested for an identity.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Accept access request recommendation
        new_access_request_recommendation_action_item_dto = AccessRequestRecommendationActionItemDto.from_json(access_request_recommendation_action_item_dto)
        results = IAIAccessRequestRecommendationsApi(api_client).add_access_request_recommendations_requested_item_v1(access_request_recommendation_action_item_dto=new_access_request_recommendation_action_item_dto)
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).add_access_request_recommendations_requested_item_v1(new_access_request_recommendation_action_item_dto, x_sail_point_experimental)
        print("The response of IAIAccessRequestRecommendationsApi->add_access_request_recommendations_requested_item_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->add_access_request_recommendations_requested_item_v1: %s\n" % e)
```



[[Back to top]](#) 

## add-access-request-recommendations-viewed-item-v1
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
Mark viewed access request recommendations
This API consumes a notification that a recommended access request item was viewed. Future recommendations with this item will be marked with viewed=true. This can be useful for the consumer to determine if there are any new/unviewed recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/add-access-request-recommendations-viewed-item-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | access_request_recommendation_action_item_dto | [**AccessRequestRecommendationActionItemDto**](../models/access-request-recommendation-action-item-dto) | True  | The recommended access that was viewed for an identity.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**AccessRequestRecommendationActionItemResponseDto**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Recommendation successfully stored as viewed. | AccessRequestRecommendationActionItemResponseDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestRecommendationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestRecommendationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_access_request_recommendations.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.iai_access_request_recommendations.api_client import ApiClient
from sailpoint.iai_access_request_recommendations.models.access_request_recommendation_action_item_dto import AccessRequestRecommendationActionItemDto
from sailpoint.iai_access_request_recommendations.models.access_request_recommendation_action_item_response_dto import AccessRequestRecommendationActionItemResponseDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    access_request_recommendation_action_item_dto = '''{
          "access" : {
            "id" : "2c9180835d2e5168015d32f890ca1581",
            "type" : "ACCESS_PROFILE"
          },
          "identityId" : "2c91808570313110017040b06f344ec9"
        }''' # AccessRequestRecommendationActionItemDto | The recommended access that was viewed for an identity.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Mark viewed access request recommendations
        new_access_request_recommendation_action_item_dto = AccessRequestRecommendationActionItemDto.from_json(access_request_recommendation_action_item_dto)
        results = IAIAccessRequestRecommendationsApi(api_client).add_access_request_recommendations_viewed_item_v1(access_request_recommendation_action_item_dto=new_access_request_recommendation_action_item_dto)
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).add_access_request_recommendations_viewed_item_v1(new_access_request_recommendation_action_item_dto, x_sail_point_experimental)
        print("The response of IAIAccessRequestRecommendationsApi->add_access_request_recommendations_viewed_item_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->add_access_request_recommendations_viewed_item_v1: %s\n" % e)
```



[[Back to top]](#) 

## add-access-request-recommendations-viewed-items-v1
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
Bulk mark viewed access request recommendations
This API consumes a notification that a set of recommended access request item were viewed. Future recommendations with these items will be marked with viewed=true. This can be useful for the consumer to determine if there are any new/unviewed recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/add-access-request-recommendations-viewed-items-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | access_request_recommendation_action_item_dto | [**[]AccessRequestRecommendationActionItemDto**](../models/access-request-recommendation-action-item-dto) | True  | The recommended access items that were viewed for an identity.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[AccessRequestRecommendationActionItemResponseDto]**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Recommendations successfully stored as viewed. | List[AccessRequestRecommendationActionItemResponseDto] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestRecommendationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestRecommendationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_access_request_recommendations.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.iai_access_request_recommendations.api_client import ApiClient
from sailpoint.iai_access_request_recommendations.models.access_request_recommendation_action_item_dto import AccessRequestRecommendationActionItemDto
from sailpoint.iai_access_request_recommendations.models.access_request_recommendation_action_item_response_dto import AccessRequestRecommendationActionItemResponseDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    access_request_recommendation_action_item_dto = '''[sailpoint.iai_access_request_recommendations.AccessRequestRecommendationActionItemDto()]''' # List[AccessRequestRecommendationActionItemDto] | The recommended access items that were viewed for an identity.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Bulk mark viewed access request recommendations
        new_access_request_recommendation_action_item_dto = AccessRequestRecommendationActionItemDto.from_json(access_request_recommendation_action_item_dto)
        results = IAIAccessRequestRecommendationsApi(api_client).add_access_request_recommendations_viewed_items_v1(access_request_recommendation_action_item_dto=new_access_request_recommendation_action_item_dto)
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).add_access_request_recommendations_viewed_items_v1(new_access_request_recommendation_action_item_dto, x_sail_point_experimental)
        print("The response of IAIAccessRequestRecommendationsApi->add_access_request_recommendations_viewed_items_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->add_access_request_recommendations_viewed_items_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-access-request-recommendations-config-v1
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
Get access request recommendations config
This API returns the configurations for Access Request Recommender for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-recommendations-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**AccessRequestRecommendationConfigDto**](../models/access-request-recommendation-config-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Configurations for Access Request Recommender for the tenant. | AccessRequestRecommendationConfigDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestRecommendationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestRecommendationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_access_request_recommendations.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.iai_access_request_recommendations.api_client import ApiClient
from sailpoint.iai_access_request_recommendations.models.access_request_recommendation_config_dto import AccessRequestRecommendationConfigDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get access request recommendations config
        
        results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations_config_v1()
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations_config_v1(x_sail_point_experimental)
        print("The response of IAIAccessRequestRecommendationsApi->get_access_request_recommendations_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->get_access_request_recommendations_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-access-request-recommendations-ignored-items-v1
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
List ignored access request recommendations
This API returns the list of ignored access request recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-recommendations-ignored-items-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp**
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[AccessRequestRecommendationActionItemResponseDto]**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Returns list of ignored access request recommendations. | List[AccessRequestRecommendationActionItemResponseDto] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestRecommendationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestRecommendationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_access_request_recommendations.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.iai_access_request_recommendations.api_client import ApiClient
from sailpoint.iai_access_request_recommendations.models.access_request_recommendation_action_item_response_dto import AccessRequestRecommendationActionItemResponseDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'identityId eq \"2c9180846b0a0583016b299f210c1314\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional)
    sorters = 'access.id' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List ignored access request recommendations
        
        results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations_ignored_items_v1()
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations_ignored_items_v1(limit, offset, count, filters, sorters, x_sail_point_experimental)
        print("The response of IAIAccessRequestRecommendationsApi->get_access_request_recommendations_ignored_items_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->get_access_request_recommendations_ignored_items_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-access-request-recommendations-requested-items-v1
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
List accepted access request recommendations
This API returns a list of requested access request recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-recommendations-requested-items-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp**
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[AccessRequestRecommendationActionItemResponseDto]**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Returns the list of requested access request recommendations. | List[AccessRequestRecommendationActionItemResponseDto] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestRecommendationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestRecommendationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_access_request_recommendations.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.iai_access_request_recommendations.api_client import ApiClient
from sailpoint.iai_access_request_recommendations.models.access_request_recommendation_action_item_response_dto import AccessRequestRecommendationActionItemResponseDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'access.id eq \"2c9180846b0a0583016b299f210c1314\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional)
    sorters = 'access.id' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List accepted access request recommendations
        
        results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations_requested_items_v1()
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations_requested_items_v1(limit, offset, count, filters, sorters, x_sail_point_experimental)
        print("The response of IAIAccessRequestRecommendationsApi->get_access_request_recommendations_requested_items_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->get_access_request_recommendations_requested_items_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-access-request-recommendations-v1
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
Identity access request recommendations
This API returns the access request recommendations for the specified identity. The default identity is *me* which indicates the current user.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-recommendations-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | identity_id | **str** |   (optional) (default to 'me') | Get access request recommendations for an identityId. *me* indicates the current user.
  Query | limit | **int** |   (optional) (default to 15) | Max number of results to return.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | include_translation_messages | **bool** |   (optional) (default to False) | If *true* it will populate a list of translation messages in the response.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.name**: *co*  **access.type**: *eq, in*  **access.description**: *co, eq, in*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, access.type**  By default the recommendations are sorted by highest confidence first.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[AccessRequestRecommendationItemDetail]**](../models/access-request-recommendation-item-detail)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of access request recommendations for the identityId | List[AccessRequestRecommendationItemDetail] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestRecommendationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestRecommendationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_access_request_recommendations.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.iai_access_request_recommendations.api_client import ApiClient
from sailpoint.iai_access_request_recommendations.models.access_request_recommendation_item_detail import AccessRequestRecommendationItemDetail
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    identity_id = 'me' # str | Get access request recommendations for an identityId. *me* indicates the current user. (optional) (default to 'me') # str | Get access request recommendations for an identityId. *me* indicates the current user. (optional) (default to 'me')
    limit = 15 # int | Max number of results to return. (optional) (default to 15) # int | Max number of results to return. (optional) (default to 15)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    include_translation_messages = False # bool | If *true* it will populate a list of translation messages in the response. (optional) (default to False) # bool | If *true* it will populate a list of translation messages in the response. (optional) (default to False)
    filters = 'access.name co \"admin\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.name**: *co*  **access.type**: *eq, in*  **access.description**: *co, eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.name**: *co*  **access.type**: *eq, in*  **access.description**: *co, eq, in* (optional)
    sorters = 'access.name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, access.type**  By default the recommendations are sorted by highest confidence first. (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, access.type**  By default the recommendations are sorted by highest confidence first. (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Identity access request recommendations
        
        results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations_v1()
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations_v1(identity_id, limit, offset, count, include_translation_messages, filters, sorters, x_sail_point_experimental)
        print("The response of IAIAccessRequestRecommendationsApi->get_access_request_recommendations_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->get_access_request_recommendations_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-access-request-recommendations-viewed-items-v1
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
List viewed access request recommendations
This API returns the list of viewed access request recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-recommendations-viewed-items-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp**
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[AccessRequestRecommendationActionItemResponseDto]**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Returns list of viewed access request recommendations. | List[AccessRequestRecommendationActionItemResponseDto] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestRecommendationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestRecommendationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_access_request_recommendations.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.iai_access_request_recommendations.api_client import ApiClient
from sailpoint.iai_access_request_recommendations.models.access_request_recommendation_action_item_response_dto import AccessRequestRecommendationActionItemResponseDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'access.id eq \"2c9180846b0a0583016b299f210c1314\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional)
    sorters = 'access.id' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List viewed access request recommendations
        
        results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations_viewed_items_v1()
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations_viewed_items_v1(limit, offset, count, filters, sorters, x_sail_point_experimental)
        print("The response of IAIAccessRequestRecommendationsApi->get_access_request_recommendations_viewed_items_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->get_access_request_recommendations_viewed_items_v1: %s\n" % e)
```



[[Back to top]](#) 

## set-access-request-recommendations-config-v1
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
Update access request recommendations config
This API updates the configurations for Access Request Recommender for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/set-access-request-recommendations-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | access_request_recommendation_config_dto | [**AccessRequestRecommendationConfigDto**](../models/access-request-recommendation-config-dto) | True  | The desired configurations for Access Request Recommender for the tenant.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**AccessRequestRecommendationConfigDto**](../models/access-request-recommendation-config-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Successfully updated configurations for Access Request Recommender for the tenant. | AccessRequestRecommendationConfigDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestRecommendationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestRecommendationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_access_request_recommendations.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.iai_access_request_recommendations.api_client import ApiClient
from sailpoint.iai_access_request_recommendations.models.access_request_recommendation_config_dto import AccessRequestRecommendationConfigDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    access_request_recommendation_config_dto = '''{
          "scoreThreshold" : 0.5,
          "startDateAttribute" : "startDate",
          "restrictionAttribute" : "location",
          "moverAttribute" : "isMover",
          "joinerAttribute" : "isJoiner",
          "useRestrictionAttribute" : true
        }''' # AccessRequestRecommendationConfigDto | The desired configurations for Access Request Recommender for the tenant.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update access request recommendations config
        new_access_request_recommendation_config_dto = AccessRequestRecommendationConfigDto.from_json(access_request_recommendation_config_dto)
        results = IAIAccessRequestRecommendationsApi(api_client).set_access_request_recommendations_config_v1(access_request_recommendation_config_dto=new_access_request_recommendation_config_dto)
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).set_access_request_recommendations_config_v1(new_access_request_recommendation_config_dto, x_sail_point_experimental)
        print("The response of IAIAccessRequestRecommendationsApi->set_access_request_recommendations_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->set_access_request_recommendations_config_v1: %s\n" % e)
```



[[Back to top]](#) 



