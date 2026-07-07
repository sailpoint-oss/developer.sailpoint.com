---
id: prompt-insights
title: PromptInsights
pagination_label: PromptInsights
sidebar_label: PromptInsights
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PromptInsights', 'PromptInsights'] 
slug: /tools/sdk/powershell/promptinsights/methods/prompt-insights
tags: ['SDK', 'Software Development Kit', 'PromptInsights', 'PromptInsights']
---

# PromptInsights
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
[**Get-PromptInsightsMetricsV1**](#get-prompt-insights-metrics-v1) | **GET** `/prompt-insights/v1/metrics` | Get prompt insights metrics
[**Get-PromptInsightsV1**](#list-prompt-insights-v1) | **GET** `/prompt-insights/v1` | List prompt insights


## get-prompt-insights-metrics-v1
Returns aggregate prompt insights metrics for the requested time window.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-prompt-insights-metrics-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Interval | **String** | True  | Relative lookback window for metrics aggregation.

### Return type
[**Promptinsightsmetrics**](../models/promptinsightsmetrics)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Aggregate prompt insights metrics for the requested interval. | Promptinsightsmetrics
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPromptInsightsMetricsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPromptInsightsMetricsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Interval = "-1h" # String | Relative lookback window for metrics aggregation.

# Get prompt insights metrics

try {
    Get-PromptInsightsMetricsV1 -Interval $Interval 
    
    # Below is a request that includes all optional parameters
    # Get-PromptInsightsMetricsV1 -Interval $Interval  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-PromptInsightsMetricsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-prompt-insights-v1
Returns a paginated list of prompt insights within a lookback window, with optional structured filters. Results are sorted by timestamp descending (most recent first).

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-prompt-insights-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Interval | **String** | True  | Relative lookback window for prompt insights.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **policyDecision**: *eq*  **category**: *eq*  **severity**: *eq*  **user**: *eq, sw, co*  **agent**: *eq, sw, co*  **reason**: *eq, sw, co*  **rule**: *eq, sw, co*  **policy**: *eq, sw, co*

### Return type
[**Promptinsight[]**](../models/promptinsight)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A paginated list of prompt insight events. | Promptinsight[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPromptInsightsMetricsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPromptInsightsMetricsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Interval = "-1h" # String | Relative lookback window for prompt insights.
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Filters = 'policyDecision eq "REDACTED" and severity eq "CRITICAL"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **policyDecision**: *eq*  **category**: *eq*  **severity**: *eq*  **user**: *eq, sw, co*  **agent**: *eq, sw, co*  **reason**: *eq, sw, co*  **rule**: *eq, sw, co*  **policy**: *eq, sw, co* (optional)

# List prompt insights

try {
    Get-PromptInsightsV1 -Interval $Interval 
    
    # Below is a request that includes all optional parameters
    # Get-PromptInsightsV1 -Interval $Interval -Limit $Limit -Offset $Offset -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-PromptInsightsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
