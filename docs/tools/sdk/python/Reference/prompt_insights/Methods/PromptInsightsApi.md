---
id: prompt-insights
title: Prompt_Insights
pagination_label: Prompt_Insights
sidebar_label: Prompt_Insights
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Prompt_Insights', 'Prompt_Insights'] 
slug: /tools/sdk/python/prompt-insights/methods/prompt-insights
tags: ['SDK', 'Software Development Kit', 'Prompt_Insights', 'Prompt_Insights']
---

# sailpoint.prompt_insights.PromptInsightsApi
  Use this API to retrieve prompt security insights and aggregate metrics for AI agent prompt activity.
With this functionality in place, administrators can review prompt events and their policy decisions,
filter insights by policy decision, category, severity, and other attributes, and view summary metrics
for scanned and redacted prompts over configurable time windows.

Policy decisions indicate whether a prompt was allowed or redacted. Insight categories include anomalies,
data uploads, and MCP tool calls. Supported filter fields include policy decision, category, severity,
user, agent, reason, rule, and policy.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-prompt-insights-metrics-v1**](#get-prompt-insights-metrics-v1) | **GET** `/prompt-insights/v1/metrics` | Get prompt insights metrics
[**list-prompt-insights-v1**](#list-prompt-insights-v1) | **GET** `/prompt-insights/v1` | List prompt insights


## get-prompt-insights-metrics-v1
Get prompt insights metrics
Returns aggregate prompt insights metrics for the requested time window.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-prompt-insights-metrics-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | interval | **str** | True  | Relative lookback window for metrics aggregation.

### Return type
[**Promptinsightsmetrics**](../models/promptinsightsmetrics)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Aggregate prompt insights metrics for the requested interval. | Promptinsightsmetrics |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPromptInsightsMetricsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPromptInsightsMetricsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.prompt_insights.api.prompt_insights_api import PromptInsightsApi
from sailpoint.prompt_insights.api_client import ApiClient
from sailpoint.prompt_insights.models.promptinsightsmetrics import Promptinsightsmetrics
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    interval = '-7d' # str | Relative lookback window for metrics aggregation. # str | Relative lookback window for metrics aggregation.

    try:
        # Get prompt insights metrics
        
        results = PromptInsightsApi(api_client).get_prompt_insights_metrics_v1(interval=interval)
        # Below is a request that includes all optional parameters
        # results = PromptInsightsApi(api_client).get_prompt_insights_metrics_v1(interval)
        print("The response of PromptInsightsApi->get_prompt_insights_metrics_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PromptInsightsApi->get_prompt_insights_metrics_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-prompt-insights-v1
List prompt insights
Returns a paginated list of prompt insights within a lookback window, with optional structured filters. Results are sorted by timestamp descending (most recent first).

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-prompt-insights-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | interval | **str** | True  | Relative lookback window for prompt insights.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **policyDecision**: *eq*  **category**: *eq*  **severity**: *eq*  **user**: *eq, sw, co*  **agent**: *eq, sw, co*  **reason**: *eq, sw, co*  **rule**: *eq, sw, co*  **policy**: *eq, sw, co*

### Return type
[**List[Promptinsight]**](../models/promptinsight)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A paginated list of prompt insight events. | List[Promptinsight] |  * X-Total-Count - Total matching insights for the interval and filters, not limited by limit or offset.  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPromptInsightsMetricsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPromptInsightsMetricsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.prompt_insights.api.prompt_insights_api import PromptInsightsApi
from sailpoint.prompt_insights.api_client import ApiClient
from sailpoint.prompt_insights.models.promptinsight import Promptinsight
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    interval = '-30d' # str | Relative lookback window for prompt insights. # str | Relative lookback window for prompt insights.
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    filters = 'policyDecision eq \"REDACTED\" and severity eq \"CRITICAL\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **policyDecision**: *eq*  **category**: *eq*  **severity**: *eq*  **user**: *eq, sw, co*  **agent**: *eq, sw, co*  **reason**: *eq, sw, co*  **rule**: *eq, sw, co*  **policy**: *eq, sw, co* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **policyDecision**: *eq*  **category**: *eq*  **severity**: *eq*  **user**: *eq, sw, co*  **agent**: *eq, sw, co*  **reason**: *eq, sw, co*  **rule**: *eq, sw, co*  **policy**: *eq, sw, co* (optional)

    try:
        # List prompt insights
        
        results = PromptInsightsApi(api_client).list_prompt_insights_v1(interval=interval)
        # Below is a request that includes all optional parameters
        # results = PromptInsightsApi(api_client).list_prompt_insights_v1(interval, limit, offset, filters)
        print("The response of PromptInsightsApi->list_prompt_insights_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PromptInsightsApi->list_prompt_insights_v1: %s\n" % e)
```



[[Back to top]](#) 



