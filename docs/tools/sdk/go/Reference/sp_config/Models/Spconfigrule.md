---
id: v1-spconfigrule
title: Spconfigrule
pagination_label: Spconfigrule
sidebar_label: Spconfigrule
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Spconfigrule', 'V1Spconfigrule'] 
slug: /tools/sdk/go/spconfig/models/spconfigrule
tags: ['SDK', 'Software Development Kit', 'Spconfigrule', 'V1Spconfigrule']
---

# Spconfigrule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Path** | Pointer to **string** | JSONPath expression denoting the path within the object where a value substitution should be applied. | [optional] 
**Value** | Pointer to [**NullableSpconfigruleValue**](spconfigrule-value) |  | [optional] 
**Modes** | Pointer to **[]string** | Draft modes the rule will apply to. | [optional] 

## Methods

### NewSpconfigrule

`func NewSpconfigrule() *Spconfigrule`

NewSpconfigrule instantiates a new Spconfigrule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpconfigruleWithDefaults

`func NewSpconfigruleWithDefaults() *Spconfigrule`

NewSpconfigruleWithDefaults instantiates a new Spconfigrule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPath

`func (o *Spconfigrule) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *Spconfigrule) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *Spconfigrule) SetPath(v string)`

SetPath sets Path field to given value.

### HasPath

`func (o *Spconfigrule) HasPath() bool`

HasPath returns a boolean if a field has been set.

### GetValue

`func (o *Spconfigrule) GetValue() SpconfigruleValue`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Spconfigrule) GetValueOk() (*SpconfigruleValue, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Spconfigrule) SetValue(v SpconfigruleValue)`

SetValue sets Value field to given value.

### HasValue

`func (o *Spconfigrule) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *Spconfigrule) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *Spconfigrule) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetModes

`func (o *Spconfigrule) GetModes() []string`

GetModes returns the Modes field if non-nil, zero value otherwise.

### GetModesOk

`func (o *Spconfigrule) GetModesOk() (*[]string, bool)`

GetModesOk returns a tuple with the Modes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModes

`func (o *Spconfigrule) SetModes(v []string)`

SetModes sets Modes field to given value.

### HasModes

`func (o *Spconfigrule) HasModes() bool`

HasModes returns a boolean if a field has been set.


