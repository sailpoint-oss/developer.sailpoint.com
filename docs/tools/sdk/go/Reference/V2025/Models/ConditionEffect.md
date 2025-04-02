---
id: condition-effect
title: ConditionEffect
pagination_label: ConditionEffect
sidebar_label: ConditionEffect
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConditionEffect', 'ConditionEffect'] 
slug: /tools/sdk/go//models/condition-effect
tags: ['SDK', 'Software Development Kit', 'ConditionEffect', 'ConditionEffect']
---

# ConditionEffect

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EffectType** | Pointer to **string** | Type of effect to perform when the conditions are evaluated for this logic block. HIDE ConditionEffectTypeHide  Disables validations. SHOW ConditionEffectTypeShow  Enables validations. DISABLE ConditionEffectTypeDisable  Disables validations. ENABLE ConditionEffectTypeEnable  Enables validations. REQUIRE ConditionEffectTypeRequire OPTIONAL ConditionEffectTypeOptional SUBMIT_MESSAGE ConditionEffectTypeSubmitMessage SUBMIT_NOTIFICATION ConditionEffectTypeSubmitNotification SET_DEFAULT_VALUE ConditionEffectTypeSetDefaultValue  This value is ignored on purpose. | [optional] 
**Config** | Pointer to [**ConditionEffectConfig**](condition-effect-config) |  | [optional] 

## Methods

### NewConditionEffect

`func NewConditionEffect() *ConditionEffect`

NewConditionEffect instantiates a new ConditionEffect object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConditionEffectWithDefaults

`func NewConditionEffectWithDefaults() *ConditionEffect`

NewConditionEffectWithDefaults instantiates a new ConditionEffect object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEffectType

`func (o *ConditionEffect) GetEffectType() string`

GetEffectType returns the EffectType field if non-nil, zero value otherwise.

### GetEffectTypeOk

`func (o *ConditionEffect) GetEffectTypeOk() (*string, bool)`

GetEffectTypeOk returns a tuple with the EffectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffectType

`func (o *ConditionEffect) SetEffectType(v string)`

SetEffectType sets EffectType field to given value.

### HasEffectType

`func (o *ConditionEffect) HasEffectType() bool`

HasEffectType returns a boolean if a field has been set.

### GetConfig

`func (o *ConditionEffect) GetConfig() ConditionEffectConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *ConditionEffect) GetConfigOk() (*ConditionEffectConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *ConditionEffect) SetConfig(v ConditionEffectConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *ConditionEffect) HasConfig() bool`

HasConfig returns a boolean if a field has been set.


