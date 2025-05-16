---
id: beta-sp-config-rules
title: SpConfigRules
pagination_label: SpConfigRules
sidebar_label: SpConfigRules
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SpConfigRules', 'BetaSpConfigRules'] 
slug: /tools/sdk/go/beta/models/sp-config-rules
tags: ['SDK', 'Software Development Kit', 'SpConfigRules', 'BetaSpConfigRules']
---

# SpConfigRules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TakeFromTargetRules** | Pointer to [**[]SpConfigRule**](sp-config-rule) |  | [optional] 
**DefaultRules** | Pointer to [**[]SpConfigRule**](sp-config-rule) |  | [optional] 
**Editable** | Pointer to **bool** | Indicates whether the object can be edited. | [optional] [default to false]

## Methods

### NewSpConfigRules

`func NewSpConfigRules() *SpConfigRules`

NewSpConfigRules instantiates a new SpConfigRules object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpConfigRulesWithDefaults

`func NewSpConfigRulesWithDefaults() *SpConfigRules`

NewSpConfigRulesWithDefaults instantiates a new SpConfigRules object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTakeFromTargetRules

`func (o *SpConfigRules) GetTakeFromTargetRules() []SpConfigRule`

GetTakeFromTargetRules returns the TakeFromTargetRules field if non-nil, zero value otherwise.

### GetTakeFromTargetRulesOk

`func (o *SpConfigRules) GetTakeFromTargetRulesOk() (*[]SpConfigRule, bool)`

GetTakeFromTargetRulesOk returns a tuple with the TakeFromTargetRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTakeFromTargetRules

`func (o *SpConfigRules) SetTakeFromTargetRules(v []SpConfigRule)`

SetTakeFromTargetRules sets TakeFromTargetRules field to given value.

### HasTakeFromTargetRules

`func (o *SpConfigRules) HasTakeFromTargetRules() bool`

HasTakeFromTargetRules returns a boolean if a field has been set.

### GetDefaultRules

`func (o *SpConfigRules) GetDefaultRules() []SpConfigRule`

GetDefaultRules returns the DefaultRules field if non-nil, zero value otherwise.

### GetDefaultRulesOk

`func (o *SpConfigRules) GetDefaultRulesOk() (*[]SpConfigRule, bool)`

GetDefaultRulesOk returns a tuple with the DefaultRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultRules

`func (o *SpConfigRules) SetDefaultRules(v []SpConfigRule)`

SetDefaultRules sets DefaultRules field to given value.

### HasDefaultRules

`func (o *SpConfigRules) HasDefaultRules() bool`

HasDefaultRules returns a boolean if a field has been set.

### GetEditable

`func (o *SpConfigRules) GetEditable() bool`

GetEditable returns the Editable field if non-nil, zero value otherwise.

### GetEditableOk

`func (o *SpConfigRules) GetEditableOk() (*bool, bool)`

GetEditableOk returns a tuple with the Editable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditable

`func (o *SpConfigRules) SetEditable(v bool)`

SetEditable sets Editable field to given value.

### HasEditable

`func (o *SpConfigRules) HasEditable() bool`

HasEditable returns a boolean if a field has been set.


