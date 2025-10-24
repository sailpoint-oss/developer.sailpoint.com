---
id: v2025-api-usage
title: Api_Usage
pagination_label: Api_Usage
sidebar_label: Api_Usage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Api_Usage', 'V2025Api_Usage'] 
slug: /tools/sdk/python/v2025/methods/api-usage
tags: ['SDK', 'Software Development Kit', 'Api_Usage', 'V2025Api_Usage']
---

# sailpoint.v2025.ApiUsageApi
  Use this API to retrieve metrics about an org&#39;s API usage.
With this functionality in place, administrators can monitor the usage of APIs within a specified timespan, as well as a breakdown of commonly-used APIs sorted by number of requests.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-total-count**](#get-total-count) | **GET** `/api-usage/count` | Total number of API requests
[**list-api-summary**](#list-api-summary) | **GET** `/api-usage/summary` | Get Api Summary


## get-total-count
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
This API gets an aggregated number of all API calls from an org in a given timespan.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-total-count)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq*

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Total number of API calls in a given timespan. | object |  -  |
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
from sailpoint.v2025.api.api_usage_api import ApiUsageApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    filters = 'method eq \"GET\", startDate gt \"2025-08-01\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq* (optional)

    try:
        # Total number of API requests
        
        results = ApiUsageApi(api_client).get_total_count(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = ApiUsageApi(api_client).get_total_count(x_sail_point_experimental, filters)
        print("The response of ApiUsageApi->get_total_count:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApiUsageApi->get_total_count: %s\n" % e)
```



[[Back to top]](#) 

## list-api-summary
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
This API gets a list of APIs called by the org in a specific timespan, sorted by number of calls.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-api-summary)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq*
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return.
  Query | offset | **int** |   (optional) | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified.

### Return type
[**List[SummaryResponse]**](../models/summary-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List API calls sorted by number of requests. | List[SummaryResponse] |  -  |
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
from sailpoint.v2025.api.api_usage_api import ApiUsageApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.summary_response import SummaryResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    filters = 'method eq \"GET\", startDate gt \"2025-08-01\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq* (optional)
    limit = 250 # int | Max number of results to return. (optional) (default to 250) # int | Max number of results to return. (optional) (default to 250)
    offset = 10 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional)

    try:
        # Get Api Summary
        
        results = ApiUsageApi(api_client).list_api_summary(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = ApiUsageApi(api_client).list_api_summary(x_sail_point_experimental, filters, limit, offset)
        print("The response of ApiUsageApi->list_api_summary:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApiUsageApi->list_api_summary: %s\n" % e)
```



[[Back to top]](#) 



