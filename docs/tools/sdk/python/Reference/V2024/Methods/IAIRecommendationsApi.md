---
id: v2024-iai-recommendations
title: IAI_Recommendations
pagination_label: IAI_Recommendations
sidebar_label: IAI_Recommendations
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IAI_Recommendations', 'V2024IAI_Recommendations'] 
slug: /tools/sdk/python/v2024/methods/iai-recommendations
tags: ['SDK', 'Software Development Kit', 'IAI_Recommendations', 'V2024IAI_Recommendations']
---

# sailpoint.v2024.IAIRecommendationsApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-recommendations**](#get-recommendations) | **POST** `/recommendations/request` | Returns Recommendation Based on Object
[**get-recommendations-config**](#get-recommendations-config) | **GET** `/recommendations/config` | Get certification recommendation config values
[**update-recommendations-config**](#update-recommendations-config) | **PUT** `/recommendations/config` | Update certification recommendation config values


## get-recommendations
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
Returns Recommendation Based on Object
The getRecommendations API returns recommendations based on the requested object. The recommendations are invoked by IdentityIQ and IdentityNow plug-ins that retrieve recommendations based on the performed calculations.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-recommendations)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | recommendation_request_dto | [**RecommendationRequestDto**](../models/recommendation-request-dto) | True  | 

### Return type
[**RecommendationResponseDto**](../models/recommendation-response-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The recommendations for a customer | RecommendationResponseDto |  -  |
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
from sailpoint.v2024.api.iai_recommendations_api import IAIRecommendationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.recommendation_request_dto import RecommendationRequestDto
from sailpoint.v2024.models.recommendation_response_dto import RecommendationResponseDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    recommendation_request_dto = '''{
          "prescribeMode" : false,
          "excludeInterpretations" : false,
          "requests" : [ {
            "item" : {
              "id" : "2c938083633d259901633d2623ec0375",
              "type" : "ENTITLEMENT"
            },
            "identityId" : "2c938083633d259901633d25c68c00fa"
          }, {
            "item" : {
              "id" : "2c938083633d259901633d2623ec0375",
              "type" : "ENTITLEMENT"
            },
            "identityId" : "2c938083633d259901633d25c68c00fa"
          } ],
          "includeTranslationMessages" : false,
          "includeDebugInformation" : true
        }''' # RecommendationRequestDto | 

    try:
        # Returns Recommendation Based on Object
        new_recommendation_request_dto = RecommendationRequestDto.from_json(recommendation_request_dto)
        results = IAIRecommendationsApi(api_client).get_recommendations(x_sail_point_experimental=x_sail_point_experimental, recommendation_request_dto=new_recommendation_request_dto)
        # Below is a request that includes all optional parameters
        # results = IAIRecommendationsApi(api_client).get_recommendations(x_sail_point_experimental, new_recommendation_request_dto)
        print("The response of IAIRecommendationsApi->get_recommendations:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling IAIRecommendationsApi->get_recommendations: %s\n" % e)
```



[[Back to top]](#) 

## get-recommendations-config
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
Get certification recommendation config values
Retrieves configuration attributes used by certification recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-recommendations-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**RecommendationConfigDto**](../models/recommendation-config-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Cert recommendation configuration attributes | RecommendationConfigDto |  -  |
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
from sailpoint.v2024.api.iai_recommendations_api import IAIRecommendationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.recommendation_config_dto import RecommendationConfigDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Get certification recommendation config values
        
        results = IAIRecommendationsApi(api_client).get_recommendations_config(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = IAIRecommendationsApi(api_client).get_recommendations_config(x_sail_point_experimental)
        print("The response of IAIRecommendationsApi->get_recommendations_config:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling IAIRecommendationsApi->get_recommendations_config: %s\n" % e)
```



[[Back to top]](#) 

## update-recommendations-config
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
Update certification recommendation config values
Updates configuration attributes used by certification recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-recommendations-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | recommendation_config_dto | [**RecommendationConfigDto**](../models/recommendation-config-dto) | True  | 

### Return type
[**RecommendationConfigDto**](../models/recommendation-config-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Cert recommendation configuration attributes after update | RecommendationConfigDto |  -  |
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
from sailpoint.v2024.api.iai_recommendations_api import IAIRecommendationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.recommendation_config_dto import RecommendationConfigDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    recommendation_config_dto = '''{
          "recommenderFeatures" : [ "jobTitle", "location", "peer_group", "department", "active" ],
          "peerGroupPercentageThreshold" : 0.5,
          "runAutoSelectOnce" : false,
          "onlyTuneThreshold" : false
        }''' # RecommendationConfigDto | 

    try:
        # Update certification recommendation config values
        new_recommendation_config_dto = RecommendationConfigDto.from_json(recommendation_config_dto)
        results = IAIRecommendationsApi(api_client).update_recommendations_config(x_sail_point_experimental=x_sail_point_experimental, recommendation_config_dto=new_recommendation_config_dto)
        # Below is a request that includes all optional parameters
        # results = IAIRecommendationsApi(api_client).update_recommendations_config(x_sail_point_experimental, new_recommendation_config_dto)
        print("The response of IAIRecommendationsApi->update_recommendations_config:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling IAIRecommendationsApi->update_recommendations_config: %s\n" % e)
```



[[Back to top]](#) 



