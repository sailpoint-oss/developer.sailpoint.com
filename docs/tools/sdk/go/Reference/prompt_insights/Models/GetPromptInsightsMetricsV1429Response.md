---
id: v1-get-prompt-insights-metrics-v1429-response
title: GetPromptInsightsMetricsV1429Response
pagination_label: GetPromptInsightsMetricsV1429Response
sidebar_label: GetPromptInsightsMetricsV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetPromptInsightsMetricsV1429Response', 'V1GetPromptInsightsMetricsV1429Response'] 
slug: /tools/sdk/go/promptinsights/models/get-prompt-insights-metrics-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetPromptInsightsMetricsV1429Response', 'V1GetPromptInsightsMetricsV1429Response']
---

# GetPromptInsightsMetricsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetPromptInsightsMetricsV1429Response

`func NewGetPromptInsightsMetricsV1429Response() *GetPromptInsightsMetricsV1429Response`

NewGetPromptInsightsMetricsV1429Response instantiates a new GetPromptInsightsMetricsV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetPromptInsightsMetricsV1429ResponseWithDefaults

`func NewGetPromptInsightsMetricsV1429ResponseWithDefaults() *GetPromptInsightsMetricsV1429Response`

NewGetPromptInsightsMetricsV1429ResponseWithDefaults instantiates a new GetPromptInsightsMetricsV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetPromptInsightsMetricsV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetPromptInsightsMetricsV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetPromptInsightsMetricsV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetPromptInsightsMetricsV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetPromptInsightsMetricsV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetPromptInsightsMetricsV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

