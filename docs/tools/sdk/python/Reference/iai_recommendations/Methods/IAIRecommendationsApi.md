---
id: iai-recommendations
title: IAI_Recommendations
pagination_label: IAI_Recommendations
sidebar_label: IAI_Recommendations
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IAI_Recommendations', 'IAI_Recommendations'] 
slug: /tools/sdk/python/iai-recommendations/methods/iai-recommendations
tags: ['SDK', 'Software Development Kit', 'IAI_Recommendations', 'IAI_Recommendations']
---

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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-recommendations-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Recommendationconfigdto**](../models/recommendationconfigdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Cert recommendation configuration attributes | Recommendationconfigdto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRecommendationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRecommendationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_recommendations.api.iai_recommendations_api import IAIRecommendationsApi
from sailpoint.iai_recommendations.api_client import ApiClient
from sailpoint.iai_recommendations.models.recommendationconfigdto import Recommendationconfigdto
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-recommendations-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | recommendationrequestdto | [**Recommendationrequestdto**](../models/recommendationrequestdto) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Recommendationresponsedto**](../models/recommendationresponsedto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The recommendations for a customer | Recommendationresponsedto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRecommendationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRecommendationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_recommendations.api.iai_recommendations_api import IAIRecommendationsApi
from sailpoint.iai_recommendations.api_client import ApiClient
from sailpoint.iai_recommendations.models.recommendationrequestdto import Recommendationrequestdto
from sailpoint.iai_recommendations.models.recommendationresponsedto import Recommendationresponsedto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    recommendationrequestdto = '''sailpoint.iai_recommendations.Recommendationrequestdto()''' # Recommendationrequestdto | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Returns recommendation based on object
        new_recommendationrequestdto = Recommendationrequestdto.from_json(recommendationrequestdto)
        results = IAIRecommendationsApi(api_client).get_recommendations_v1(recommendationrequestdto=new_recommendationrequestdto)
        # Below is a request that includes all optional parameters
        # results = IAIRecommendationsApi(api_client).get_recommendations_v1(new_recommendationrequestdto, x_sail_point_experimental)
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-recommendations-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | recommendationconfigdto | [**Recommendationconfigdto**](../models/recommendationconfigdto) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Recommendationconfigdto**](../models/recommendationconfigdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Cert recommendation configuration attributes after update | Recommendationconfigdto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRecommendationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRecommendationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_recommendations.api.iai_recommendations_api import IAIRecommendationsApi
from sailpoint.iai_recommendations.api_client import ApiClient
from sailpoint.iai_recommendations.models.recommendationconfigdto import Recommendationconfigdto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    recommendationconfigdto = '''sailpoint.iai_recommendations.Recommendationconfigdto()''' # Recommendationconfigdto | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update certification recommendation config values
        new_recommendationconfigdto = Recommendationconfigdto.from_json(recommendationconfigdto)
        results = IAIRecommendationsApi(api_client).update_recommendations_config_v1(recommendationconfigdto=new_recommendationconfigdto)
        # Below is a request that includes all optional parameters
        # results = IAIRecommendationsApi(api_client).update_recommendations_config_v1(new_recommendationconfigdto, x_sail_point_experimental)
        print("The response of IAIRecommendationsApi->update_recommendations_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRecommendationsApi->update_recommendations_config_v1: %s\n" % e)
```



[[Back to top]](#) 



