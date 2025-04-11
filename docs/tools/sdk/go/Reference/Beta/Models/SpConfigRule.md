---
id: beta-sp-config-rule
title: SpConfigRule
pagination_label: SpConfigRule
sidebar_label: SpConfigRule
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SpConfigRule', 'BetaSpConfigRule'] 
slug: /tools/sdk/go/beta/models/sp-config-rule
tags: ['SDK', 'Software Development Kit', 'SpConfigRule', 'BetaSpConfigRule']
---

# SpConfigRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Path** | Pointer to **string** | JSONPath expression denoting the path within the object where a value substitution should be applied | [optional] 
**Value** | Pointer to [**NullableSpConfigRuleValue**](sp-config-rule-value) |  | [optional] 
**Modes** | Pointer to **[]string** | Draft modes to which this rule will apply | [optional] 

## Methods

### NewSpConfigRule

`func NewSpConfigRule() *SpConfigRule`

NewSpConfigRule instantiates a new SpConfigRule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpConfigRuleWithDefaults

`func NewSpConfigRuleWithDefaults() *SpConfigRule`

NewSpConfigRuleWithDefaults instantiates a new SpConfigRule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPath

`func (o *SpConfigRule) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *SpConfigRule) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *SpConfigRule) SetPath(v string)`

SetPath sets Path field to given value.

### HasPath

`func (o *SpConfigRule) HasPath() bool`

HasPath returns a boolean if a field has been set.

### GetValue

`func (o *SpConfigRule) GetValue() SpConfigRuleValue`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *SpConfigRule) GetValueOk() (*SpConfigRuleValue, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *SpConfigRule) SetValue(v SpConfigRuleValue)`

SetValue sets Value field to given value.

### HasValue

`func (o *SpConfigRule) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *SpConfigRule) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *SpConfigRule) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetModes

`func (o *SpConfigRule) GetModes() []string`

GetModes returns the Modes field if non-nil, zero value otherwise.

### GetModesOk

`func (o *SpConfigRule) GetModesOk() (*[]string, bool)`

GetModesOk returns a tuple with the Modes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModes

`func (o *SpConfigRule) SetModes(v []string)`

SetModes sets Modes field to given value.

### HasModes

`func (o *SpConfigRule) HasModes() bool`

HasModes returns a boolean if a field has been set.


