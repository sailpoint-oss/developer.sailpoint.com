---
id: v1-conditioneffect-config
title: ConditioneffectConfig
pagination_label: ConditioneffectConfig
sidebar_label: ConditioneffectConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConditioneffectConfig', 'V1ConditioneffectConfig'] 
slug: /tools/sdk/go/customforms/models/conditioneffect-config
tags: ['SDK', 'Software Development Kit', 'ConditioneffectConfig', 'V1ConditioneffectConfig']
---

# ConditioneffectConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DefaultValueLabel** | Pointer to **string** | Effect type's label. | [optional] 
**Element** | Pointer to **string** | Element's identifier. | [optional] 

## Methods

### NewConditioneffectConfig

`func NewConditioneffectConfig() *ConditioneffectConfig`

NewConditioneffectConfig instantiates a new ConditioneffectConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConditioneffectConfigWithDefaults

`func NewConditioneffectConfigWithDefaults() *ConditioneffectConfig`

NewConditioneffectConfigWithDefaults instantiates a new ConditioneffectConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDefaultValueLabel

`func (o *ConditioneffectConfig) GetDefaultValueLabel() string`

GetDefaultValueLabel returns the DefaultValueLabel field if non-nil, zero value otherwise.

### GetDefaultValueLabelOk

`func (o *ConditioneffectConfig) GetDefaultValueLabelOk() (*string, bool)`

GetDefaultValueLabelOk returns a tuple with the DefaultValueLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultValueLabel

`func (o *ConditioneffectConfig) SetDefaultValueLabel(v string)`

SetDefaultValueLabel sets DefaultValueLabel field to given value.

### HasDefaultValueLabel

`func (o *ConditioneffectConfig) HasDefaultValueLabel() bool`

HasDefaultValueLabel returns a boolean if a field has been set.

### GetElement

`func (o *ConditioneffectConfig) GetElement() string`

GetElement returns the Element field if non-nil, zero value otherwise.

### GetElementOk

`func (o *ConditioneffectConfig) GetElementOk() (*string, bool)`

GetElementOk returns a tuple with the Element field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetElement

`func (o *ConditioneffectConfig) SetElement(v string)`

SetElement sets Element field to given value.

### HasElement

`func (o *ConditioneffectConfig) HasElement() bool`

HasElement returns a boolean if a field has been set.


