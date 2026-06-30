---
id: v1-get-prompt-insights-metrics-v1401-response
title: GetPromptInsightsMetricsV1401Response
pagination_label: GetPromptInsightsMetricsV1401Response
sidebar_label: GetPromptInsightsMetricsV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetPromptInsightsMetricsV1401Response', 'V1GetPromptInsightsMetricsV1401Response'] 
slug: /tools/sdk/go/promptinsights/models/get-prompt-insights-metrics-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetPromptInsightsMetricsV1401Response', 'V1GetPromptInsightsMetricsV1401Response']
---

# GetPromptInsightsMetricsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetPromptInsightsMetricsV1401Response

`func NewGetPromptInsightsMetricsV1401Response() *GetPromptInsightsMetricsV1401Response`

NewGetPromptInsightsMetricsV1401Response instantiates a new GetPromptInsightsMetricsV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetPromptInsightsMetricsV1401ResponseWithDefaults

`func NewGetPromptInsightsMetricsV1401ResponseWithDefaults() *GetPromptInsightsMetricsV1401Response`

NewGetPromptInsightsMetricsV1401ResponseWithDefaults instantiates a new GetPromptInsightsMetricsV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetPromptInsightsMetricsV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetPromptInsightsMetricsV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetPromptInsightsMetricsV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetPromptInsightsMetricsV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetPromptInsightsMetricsV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetPromptInsightsMetricsV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

