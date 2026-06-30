---
id: api-usage
title: Api_Usage
pagination_label: Api_Usage
sidebar_label: Api_Usage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Api_Usage', 'Api_Usage'] 
slug: /tools/sdk/python/api-usage/methods/api-usage
tags: ['SDK', 'Software Development Kit', 'Api_Usage', 'Api_Usage']
---

# sailpoint.api_usage.ApiUsageApi
  Use this API to retrieve metrics about an org&#39;s API usage.
With this functionality in place, administrators can monitor the usage of APIs within a specified timespan, as well as a breakdown of commonly-used APIs sorted by number of requests.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-total-count-v1**](#get-total-count-v1) | **GET** `/api-usage/v1/count` | Total number of API requests
[**list-api-summary-v1**](#list-api-summary-v1) | **GET** `/api-usage/v1/summary` | Get Api Summary


## get-total-count-v1
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
Total number of API requests
This API gets an aggregated number of all API calls from an org in a specific timespan. Unless specified, the results are aggregated between the first day of the current month and today.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-total-count-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq*

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Total number of API calls in a given timespan. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTotalCountV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTotalCountV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.api_usage.api.api_usage_api import ApiUsageApi
from sailpoint.api_usage.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    filters = 'method eq \"GET\", startDate gt \"2025-08-01\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq* (optional)

    try:
        # Total number of API requests
        
        results = ApiUsageApi(api_client).get_total_count_v1()
        # Below is a request that includes all optional parameters
        # results = ApiUsageApi(api_client).get_total_count_v1(x_sail_point_experimental, filters)
        print("The response of ApiUsageApi->get_total_count_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApiUsageApi->get_total_count_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-api-summary-v1
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
Get Api Summary
This API gets a list of APIs called by the org in a specific timespan, sorted by number of calls. Unless specified,  the results are aggregated between the first day of the current month and today.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-api-summary-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq*
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return.
  Query | offset | **int** |   (optional) | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified.

### Return type
[**List[Summaryresponse]**](../models/summaryresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of API calls sorted by number of requests. | List[Summaryresponse] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTotalCountV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTotalCountV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.api_usage.api.api_usage_api import ApiUsageApi
from sailpoint.api_usage.api_client import ApiClient
from sailpoint.api_usage.models.summaryresponse import Summaryresponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    filters = 'method eq \"GET\", startDate gt \"2025-08-01\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq* (optional)
    limit = 250 # int | Max number of results to return. (optional) (default to 250) # int | Max number of results to return. (optional) (default to 250)
    offset = 10 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional)

    try:
        # Get Api Summary
        
        results = ApiUsageApi(api_client).list_api_summary_v1()
        # Below is a request that includes all optional parameters
        # results = ApiUsageApi(api_client).list_api_summary_v1(x_sail_point_experimental, filters, limit, offset)
        print("The response of ApiUsageApi->list_api_summary_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApiUsageApi->list_api_summary_v1: %s\n" % e)
```



[[Back to top]](#) 



