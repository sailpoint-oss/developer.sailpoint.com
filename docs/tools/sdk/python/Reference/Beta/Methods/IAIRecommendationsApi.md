---
id: beta-iai-recommendations
title: IAI_Recommendations
pagination_label: IAI_Recommendations
sidebar_label: IAI_Recommendations
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IAI_Recommendations', 'BetaIAI_Recommendations'] 
slug: /tools/sdk/python/beta/methods/iai-recommendations
tags: ['SDK', 'Software Development Kit', 'IAI_Recommendations', 'BetaIAI_Recommendations']
---

# sailpoint.beta.IAIRecommendationsApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-recommendations**](#get-recommendations) | **POST** `/recommendations/request` | Returns recommendation based on object
[**get-recommendations-config**](#get-recommendations-config) | **GET** `/recommendations/config` | Get certification recommendation config values
[**update-recommendations-config**](#update-recommendations-config) | **PUT** `/recommendations/config` | Update certification recommendation config values


## get-recommendations
Returns recommendation based on object
The getRecommendations API returns recommendations based on the requested object. The recommendations are invoked by IdentityIQ and IdentityNow plug-ins that retrieve recommendations based on the performed calculations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-recommendations)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | recommendation_request_dto | [**RecommendationRequestDto**](../models/recommendation-request-dto) | True  | 

### Return type
[**RecommendationResponseDto**](../models/recommendation-response-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The recommendations for a customer | RecommendationResponseDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_recommendations_api import IAIRecommendationsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.recommendation_request_dto import RecommendationRequestDto
from sailpoint.beta.models.recommendation_response_dto import RecommendationResponseDto
from sailpoint.configuration import Configuration
configuration = Configuration()


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

    try:
        # Returns recommendation based on object
        new_recommendation_request_dto = RecommendationRequestDto.from_json(recommendation_request_dto)
        results = IAIRecommendationsApi(api_client).get_recommendations(recommendation_request_dto=new_recommendation_request_dto)
        # Below is a request that includes all optional parameters
        # results = IAIRecommendationsApi(api_client).get_recommendations(new_recommendation_request_dto)
        print("The response of IAIRecommendationsApi->get_recommendations:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRecommendationsApi->get_recommendations: %s\n" % e)
```



[[Back to top]](#) 

## get-recommendations-config
Get certification recommendation config values
Retrieves configuration attributes used by certification recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-recommendations-config)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**RecommendationConfigDto**](../models/recommendation-config-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Cert recommendation configuration attributes | RecommendationConfigDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_recommendations_api import IAIRecommendationsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.recommendation_config_dto import RecommendationConfigDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get certification recommendation config values
        
        results = IAIRecommendationsApi(api_client).get_recommendations_config()
        # Below is a request that includes all optional parameters
        # results = IAIRecommendationsApi(api_client).get_recommendations_config()
        print("The response of IAIRecommendationsApi->get_recommendations_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRecommendationsApi->get_recommendations_config: %s\n" % e)
```



[[Back to top]](#) 

## update-recommendations-config
Update certification recommendation config values
Updates configuration attributes used by certification recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-recommendations-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | recommendation_config_dto | [**RecommendationConfigDto**](../models/recommendation-config-dto) | True  | 

### Return type
[**RecommendationConfigDto**](../models/recommendation-config-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Cert recommendation configuration attributes after update | RecommendationConfigDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_recommendations_api import IAIRecommendationsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.recommendation_config_dto import RecommendationConfigDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    recommendation_config_dto = '''{
          "recommenderFeatures" : [ "jobTitle", "location", "peer_group", "department", "active" ],
          "peerGroupPercentageThreshold" : 0.5,
          "runAutoSelectOnce" : false,
          "onlyTuneThreshold" : false
        }''' # RecommendationConfigDto | 

    try:
        # Update certification recommendation config values
        new_recommendation_config_dto = RecommendationConfigDto.from_json(recommendation_config_dto)
        results = IAIRecommendationsApi(api_client).update_recommendations_config(recommendation_config_dto=new_recommendation_config_dto)
        # Below is a request that includes all optional parameters
        # results = IAIRecommendationsApi(api_client).update_recommendations_config(new_recommendation_config_dto)
        print("The response of IAIRecommendationsApi->update_recommendations_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRecommendationsApi->update_recommendations_config: %s\n" % e)
```



[[Back to top]](#) 



