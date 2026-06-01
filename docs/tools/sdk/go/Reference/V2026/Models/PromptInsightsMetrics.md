---
id: v2026-prompt-insights-metrics
title: PromptInsightsMetrics
pagination_label: PromptInsightsMetrics
sidebar_label: PromptInsightsMetrics
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PromptInsightsMetrics', 'V2026PromptInsightsMetrics'] 
slug: /tools/sdk/go/v2026/models/prompt-insights-metrics
tags: ['SDK', 'Software Development Kit', 'PromptInsightsMetrics', 'V2026PromptInsightsMetrics']
---

# PromptInsightsMetrics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PromptsScanned** | Pointer to **int64** | Count of prompts scanned in the interval. | [optional] 
**PromptsRedacted** | Pointer to **int64** | Count of prompts redacted in the interval. | [optional] 

## Methods

### NewPromptInsightsMetrics

`func NewPromptInsightsMetrics() *PromptInsightsMetrics`

NewPromptInsightsMetrics instantiates a new PromptInsightsMetrics object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPromptInsightsMetricsWithDefaults

`func NewPromptInsightsMetricsWithDefaults() *PromptInsightsMetrics`

NewPromptInsightsMetricsWithDefaults instantiates a new PromptInsightsMetrics object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPromptsScanned

`func (o *PromptInsightsMetrics) GetPromptsScanned() int64`

GetPromptsScanned returns the PromptsScanned field if non-nil, zero value otherwise.

### GetPromptsScannedOk

`func (o *PromptInsightsMetrics) GetPromptsScannedOk() (*int64, bool)`

GetPromptsScannedOk returns a tuple with the PromptsScanned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromptsScanned

`func (o *PromptInsightsMetrics) SetPromptsScanned(v int64)`

SetPromptsScanned sets PromptsScanned field to given value.

### HasPromptsScanned

`func (o *PromptInsightsMetrics) HasPromptsScanned() bool`

HasPromptsScanned returns a boolean if a field has been set.

### GetPromptsRedacted

`func (o *PromptInsightsMetrics) GetPromptsRedacted() int64`

GetPromptsRedacted returns the PromptsRedacted field if non-nil, zero value otherwise.

### GetPromptsRedactedOk

`func (o *PromptInsightsMetrics) GetPromptsRedactedOk() (*int64, bool)`

GetPromptsRedactedOk returns a tuple with the PromptsRedacted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromptsRedacted

`func (o *PromptInsightsMetrics) SetPromptsRedacted(v int64)`

SetPromptsRedacted sets PromptsRedacted field to given value.

### HasPromptsRedacted

`func (o *PromptInsightsMetrics) HasPromptsRedacted() bool`

HasPromptsRedacted returns a boolean if a field has been set.


