# IAI_Recommendations

# sailpoint.iai_recommendations.IAIRecommendationsApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-recommendations-config-v1**](#get-recommendations-config-v1) | **GET** `/recommendations/v1/config` | Get certification recommendation config values
[**get-recommendations-v1**](#get-recommendations-v1) | **POST** `/recommendations/v1/request` | Returns recommendation based on object
[**update-recommendations-config-v1**](#update-recommendations-config-v1) | **PUT** `/recommendations/v1/config` | Update certification recommendation config values


## get-recommendations-config-v1
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

[API Spec](https://developer.sailpoint.com/docs/api/get-recommendations-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**RecommendationConfigDto**](../models/recommendation-config-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Cert recommendation configuration attributes | RecommendationConfigDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRecommendationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRecommendationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_recommendations.api.iai_recommendations_api import IAIRecommendationsApi
from sailpoint.iai_recommendations.api_client import ApiClient
from sailpoint.iai_recommendations.models.recommendation_config_dto import RecommendationConfigDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get certification recommendation config values
        
        results = IAIRecommendationsApi(api_client).get_recommendations_config_v1()
        # Below is a request that includes all optional parameters
        # results = IAIRecommendationsApi(api_client).get_recommendations_config_v1(x_sail_point_experimental)
        print("The response of IAIRecommendationsApi->get_recommendations_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRecommendationsApi->get_recommendations_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-recommendations-v1
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
Returns recommendation based on object
The getRecommendations API returns recommendations based on the requested object. The recommendations are invoked by IdentityIQ and IdentityNow plug-ins that retrieve recommendations based on the performed calculations.

[API Spec](https://developer.sailpoint.com/docs/api/get-recommendations-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | recommendation_request_dto | [**RecommendationRequestDto**](../models/recommendation-request-dto) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**RecommendationResponseDto**](../models/recommendation-response-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The recommendations for a customer | RecommendationResponseDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRecommendationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRecommendationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_recommendations.api.iai_recommendations_api import IAIRecommendationsApi
from sailpoint.iai_recommendations.api_client import ApiClient
from sailpoint.iai_recommendations.models.recommendation_request_dto import RecommendationRequestDto
from sailpoint.iai_recommendations.models.recommendation_response_dto import RecommendationResponseDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
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
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Returns recommendation based on object
        new_recommendation_request_dto = RecommendationRequestDto.from_json(recommendation_request_dto)
        results = IAIRecommendationsApi(api_client).get_recommendations_v1(recommendation_request_dto=new_recommendation_request_dto)
        # Below is a request that includes all optional parameters
        # results = IAIRecommendationsApi(api_client).get_recommendations_v1(new_recommendation_request_dto, x_sail_point_experimental)
        print("The response of IAIRecommendationsApi->get_recommendations_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRecommendationsApi->get_recommendations_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-recommendations-config-v1
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

[API Spec](https://developer.sailpoint.com/docs/api/update-recommendations-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | recommendation_config_dto | [**RecommendationConfigDto**](../models/recommendation-config-dto) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**RecommendationConfigDto**](../models/recommendation-config-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Cert recommendation configuration attributes after update | RecommendationConfigDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRecommendationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRecommendationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_recommendations.api.iai_recommendations_api import IAIRecommendationsApi
from sailpoint.iai_recommendations.api_client import ApiClient
from sailpoint.iai_recommendations.models.recommendation_config_dto import RecommendationConfigDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    recommendation_config_dto = '''{
          "recommenderFeatures" : [ "jobTitle", "location", "peer_group", "department", "active" ],
          "peerGroupPercentageThreshold" : 0.5,
          "runAutoSelectOnce" : false,
          "onlyTuneThreshold" : false
        }''' # RecommendationConfigDto | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update certification recommendation config values
        new_recommendation_config_dto = RecommendationConfigDto.from_json(recommendation_config_dto)
        results = IAIRecommendationsApi(api_client).update_recommendations_config_v1(recommendation_config_dto=new_recommendation_config_dto)
        # Below is a request that includes all optional parameters
        # results = IAIRecommendationsApi(api_client).update_recommendations_config_v1(new_recommendation_config_dto, x_sail_point_experimental)
        print("The response of IAIRecommendationsApi->update_recommendations_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRecommendationsApi->update_recommendations_config_v1: %s\n" % e)
```



[[Back to top]](#) 



