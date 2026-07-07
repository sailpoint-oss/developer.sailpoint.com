---
id: v1-prompt-insights
title: PromptInsights
pagination_label: PromptInsights
sidebar_label: PromptInsights
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'PromptInsights', 'v1PromptInsights']
slug: /tools/sdk/typescript/prompt_insights/methods/prompt-insights
tags: ['SDK', 'Software Development Kit', 'PromptInsights', 'v1PromptInsights']
---

# PromptInsightsV1Api
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**interval** | `'-1h' | '-1d' | '-7d' | '-30d'` | Relative lookback window for metrics aggregation. |  [default to undefined]

### Return type

`PromptinsightsmetricsV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { PromptInsightsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new PromptInsightsV1Api(configuration);
const interval: string = -7d; // Relative lookback window for metrics aggregation.
const result = await apiInstance.getPromptInsightsMetricsV1({ interval: interval });
console.log(result);
```

[[Back to top]](#)

## list-prompt-insights-v1
List prompt insights
Returns a paginated list of prompt insights within a lookback window, with optional structured filters. Results are sorted by timestamp descending (most recent first).

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-prompt-insights-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**interval** | `'-1h' | '-1d' | '-7d' | '-30d'` | Relative lookback window for prompt insights. |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **policyDecision**: *eq*  **category**: *eq*  **severity**: *eq*  **user**: *eq, sw, co*  **agent**: *eq, sw, co*  **reason**: *eq, sw, co*  **rule**: *eq, sw, co*  **policy**: *eq, sw, co* | [optional] [default to undefined]

### Return type

`Array<PromptinsightV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { PromptInsightsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new PromptInsightsV1Api(configuration);
const interval: string = -30d; // Relative lookback window for prompt insights.
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = policyDecision eq "REDACTED" and severity eq "CRITICAL"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **policyDecision**: *eq*  **category**: *eq*  **severity**: *eq*  **user**: *eq, sw, co*  **agent**: *eq, sw, co*  **reason**: *eq, sw, co*  **rule**: *eq, sw, co*  **policy**: *eq, sw, co* (optional)
const result = await apiInstance.listPromptInsightsV1({ interval: interval });
console.log(result);
```

[[Back to top]](#)

