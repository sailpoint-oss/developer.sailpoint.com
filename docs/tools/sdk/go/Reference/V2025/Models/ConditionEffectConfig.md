---
id: condition-effect-config
title: ConditionEffectConfig
pagination_label: ConditionEffectConfig
sidebar_label: ConditionEffectConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConditionEffectConfig', 'ConditionEffectConfig'] 
slug: /tools/sdk/go//models/condition-effect-config
tags: ['SDK', 'Software Development Kit', 'ConditionEffectConfig', 'ConditionEffectConfig']
---

# ConditionEffectConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DefaultValueLabel** | Pointer to **string** | Effect type's label. | [optional] 
**Element** | Pointer to **string** | Element's identifier. | [optional] 

## Methods

### NewConditionEffectConfig

`func NewConditionEffectConfig() *ConditionEffectConfig`

NewConditionEffectConfig instantiates a new ConditionEffectConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConditionEffectConfigWithDefaults

`func NewConditionEffectConfigWithDefaults() *ConditionEffectConfig`

NewConditionEffectConfigWithDefaults instantiates a new ConditionEffectConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDefaultValueLabel

`func (o *ConditionEffectConfig) GetDefaultValueLabel() string`

GetDefaultValueLabel returns the DefaultValueLabel field if non-nil, zero value otherwise.

### GetDefaultValueLabelOk

`func (o *ConditionEffectConfig) GetDefaultValueLabelOk() (*string, bool)`

GetDefaultValueLabelOk returns a tuple with the DefaultValueLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultValueLabel

`func (o *ConditionEffectConfig) SetDefaultValueLabel(v string)`

SetDefaultValueLabel sets DefaultValueLabel field to given value.

### HasDefaultValueLabel

`func (o *ConditionEffectConfig) HasDefaultValueLabel() bool`

HasDefaultValueLabel returns a boolean if a field has been set.

### GetElement

`func (o *ConditionEffectConfig) GetElement() string`

GetElement returns the Element field if non-nil, zero value otherwise.

### GetElementOk

`func (o *ConditionEffectConfig) GetElementOk() (*string, bool)`

GetElementOk returns a tuple with the Element field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetElement

`func (o *ConditionEffectConfig) SetElement(v string)`

SetElement sets Element field to given value.

### HasElement

`func (o *ConditionEffectConfig) HasElement() bool`

HasElement returns a boolean if a field has been set.


