---
id: v1-prompt-insights
title: PromptInsights
pagination_label: PromptInsights
sidebar_label: PromptInsights
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PromptInsights', 'V1PromptInsights'] 
slug: /tools/sdk/go/promptinsights/methods/prompt-insights
tags: ['SDK', 'Software Development Kit', 'PromptInsights', 'V1PromptInsights']
---

# PromptInsightsAPI
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
[**get-prompt-insights-metrics-v1**](#get-prompt-insights-metrics-v1) | **Get** `/prompt-insights/v1/metrics` | Get prompt insights metrics
[**list-prompt-insights-v1**](#list-prompt-insights-v1) | **Get** `/prompt-insights/v1` | List prompt insights


## get-prompt-insights-metrics-v1
Get prompt insights metrics
Returns aggregate prompt insights metrics for the requested time window.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-prompt-insights-metrics-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetPromptInsightsMetricsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **interval** | **string** | Relative lookback window for metrics aggregation. | 

### Return type

[**Promptinsightsmetrics**](../models/promptinsightsmetrics)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/prompt_insights"
)

func main() {
    interval := `-7d` // string | Relative lookback window for metrics aggregation. # string | Relative lookback window for metrics aggregation.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PromptInsightsAPI.GetPromptInsightsMetricsV1(context.Background()).Interval(interval).Execute()
	  //resp, r, err := apiClient.PromptInsightsAPI.GetPromptInsightsMetricsV1(context.Background()).Interval(interval).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PromptInsightsAPI.GetPromptInsightsMetricsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPromptInsightsMetricsV1`: Promptinsightsmetrics
    fmt.Fprintf(os.Stdout, "Response from `PromptInsightsAPI.GetPromptInsightsMetricsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-prompt-insights-v1
List prompt insights
Returns a paginated list of prompt insights within a lookback window, with optional structured filters. Results are sorted by timestamp descending (most recent first).

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-prompt-insights-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListPromptInsightsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **interval** | **string** | Relative lookback window for prompt insights. | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **policyDecision**: *eq*  **category**: *eq*  **severity**: *eq*  **user**: *eq, sw, co*  **agent**: *eq, sw, co*  **reason**: *eq, sw, co*  **rule**: *eq, sw, co*  **policy**: *eq, sw, co* | 

### Return type

[**[]Promptinsight**](../models/promptinsight)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/prompt_insights"
)

func main() {
    interval := `-30d` // string | Relative lookback window for prompt insights. # string | Relative lookback window for prompt insights.
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    filters := `policyDecision eq "REDACTED" and severity eq "CRITICAL"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **policyDecision**: *eq*  **category**: *eq*  **severity**: *eq*  **user**: *eq, sw, co*  **agent**: *eq, sw, co*  **reason**: *eq, sw, co*  **rule**: *eq, sw, co*  **policy**: *eq, sw, co* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **policyDecision**: *eq*  **category**: *eq*  **severity**: *eq*  **user**: *eq, sw, co*  **agent**: *eq, sw, co*  **reason**: *eq, sw, co*  **rule**: *eq, sw, co*  **policy**: *eq, sw, co* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PromptInsightsAPI.ListPromptInsightsV1(context.Background()).Interval(interval).Execute()
	  //resp, r, err := apiClient.PromptInsightsAPI.ListPromptInsightsV1(context.Background()).Interval(interval).Limit(limit).Offset(offset).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PromptInsightsAPI.ListPromptInsightsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListPromptInsightsV1`: []Promptinsight
    fmt.Fprintf(os.Stdout, "Response from `PromptInsightsAPI.ListPromptInsightsV1`: %v\n", resp)
}
```

[[Back to top]](#)

