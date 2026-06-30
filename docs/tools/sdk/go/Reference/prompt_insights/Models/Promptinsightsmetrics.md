---
id: v1-promptinsightsmetrics
title: Promptinsightsmetrics
pagination_label: Promptinsightsmetrics
sidebar_label: Promptinsightsmetrics
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Promptinsightsmetrics', 'V1Promptinsightsmetrics'] 
slug: /tools/sdk/go/promptinsights/models/promptinsightsmetrics
tags: ['SDK', 'Software Development Kit', 'Promptinsightsmetrics', 'V1Promptinsightsmetrics']
---

# Promptinsightsmetrics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PromptsScanned** | Pointer to **int64** | Count of prompts scanned in the interval. | [optional] 
**PromptsRedacted** | Pointer to **int64** | Count of prompts redacted in the interval. | [optional] 

## Methods

### NewPromptinsightsmetrics

`func NewPromptinsightsmetrics() *Promptinsightsmetrics`

NewPromptinsightsmetrics instantiates a new Promptinsightsmetrics object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPromptinsightsmetricsWithDefaults

`func NewPromptinsightsmetricsWithDefaults() *Promptinsightsmetrics`

NewPromptinsightsmetricsWithDefaults instantiates a new Promptinsightsmetrics object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPromptsScanned

`func (o *Promptinsightsmetrics) GetPromptsScanned() int64`

GetPromptsScanned returns the PromptsScanned field if non-nil, zero value otherwise.

### GetPromptsScannedOk

`func (o *Promptinsightsmetrics) GetPromptsScannedOk() (*int64, bool)`

GetPromptsScannedOk returns a tuple with the PromptsScanned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromptsScanned

`func (o *Promptinsightsmetrics) SetPromptsScanned(v int64)`

SetPromptsScanned sets PromptsScanned field to given value.

### HasPromptsScanned

`func (o *Promptinsightsmetrics) HasPromptsScanned() bool`

HasPromptsScanned returns a boolean if a field has been set.

### GetPromptsRedacted

`func (o *Promptinsightsmetrics) GetPromptsRedacted() int64`

GetPromptsRedacted returns the PromptsRedacted field if non-nil, zero value otherwise.

### GetPromptsRedactedOk

`func (o *Promptinsightsmetrics) GetPromptsRedactedOk() (*int64, bool)`

GetPromptsRedactedOk returns a tuple with the PromptsRedacted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromptsRedacted

`func (o *Promptinsightsmetrics) SetPromptsRedacted(v int64)`

SetPromptsRedacted sets PromptsRedacted field to given value.

### HasPromptsRedacted

`func (o *Promptinsightsmetrics) HasPromptsRedacted() bool`

HasPromptsRedacted returns a boolean if a field has been set.


