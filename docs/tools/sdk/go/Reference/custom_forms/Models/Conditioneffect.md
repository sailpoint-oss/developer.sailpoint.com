---
id: v1-conditioneffect
title: Conditioneffect
pagination_label: Conditioneffect
sidebar_label: Conditioneffect
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Conditioneffect', 'V1Conditioneffect'] 
slug: /tools/sdk/go/customforms/models/conditioneffect
tags: ['SDK', 'Software Development Kit', 'Conditioneffect', 'V1Conditioneffect']
---

# Conditioneffect

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EffectType** | Pointer to **string** | Type of effect to perform when the conditions are evaluated for this logic block. HIDE ConditionEffectTypeHide  Disables validations. SHOW ConditionEffectTypeShow  Enables validations. DISABLE ConditionEffectTypeDisable  Disables validations. ENABLE ConditionEffectTypeEnable  Enables validations. REQUIRE ConditionEffectTypeRequire OPTIONAL ConditionEffectTypeOptional SUBMIT_MESSAGE ConditionEffectTypeSubmitMessage SUBMIT_NOTIFICATION ConditionEffectTypeSubmitNotification SET_DEFAULT_VALUE ConditionEffectTypeSetDefaultValue  This value is ignored on purpose. | [optional] 
**Config** | Pointer to [**ConditioneffectConfig**](conditioneffect-config) |  | [optional] 

## Methods

### NewConditioneffect

`func NewConditioneffect() *Conditioneffect`

NewConditioneffect instantiates a new Conditioneffect object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConditioneffectWithDefaults

`func NewConditioneffectWithDefaults() *Conditioneffect`

NewConditioneffectWithDefaults instantiates a new Conditioneffect object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEffectType

`func (o *Conditioneffect) GetEffectType() string`

GetEffectType returns the EffectType field if non-nil, zero value otherwise.

### GetEffectTypeOk

`func (o *Conditioneffect) GetEffectTypeOk() (*string, bool)`

GetEffectTypeOk returns a tuple with the EffectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffectType

`func (o *Conditioneffect) SetEffectType(v string)`

SetEffectType sets EffectType field to given value.

### HasEffectType

`func (o *Conditioneffect) HasEffectType() bool`

HasEffectType returns a boolean if a field has been set.

### GetConfig

`func (o *Conditioneffect) GetConfig() ConditioneffectConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *Conditioneffect) GetConfigOk() (*ConditioneffectConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *Conditioneffect) SetConfig(v ConditioneffectConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *Conditioneffect) HasConfig() bool`

HasConfig returns a boolean if a field has been set.


