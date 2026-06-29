---
id: v1-spconfigrules
title: Spconfigrules
pagination_label: Spconfigrules
sidebar_label: Spconfigrules
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Spconfigrules', 'V1Spconfigrules'] 
slug: /tools/sdk/go/spconfig/models/spconfigrules
tags: ['SDK', 'Software Development Kit', 'Spconfigrules', 'V1Spconfigrules']
---

# Spconfigrules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TakeFromTargetRules** | Pointer to [**[]Spconfigrule**](spconfigrule) |  | [optional] 
**DefaultRules** | Pointer to [**[]Spconfigrule**](spconfigrule) |  | [optional] 
**Editable** | Pointer to **bool** | Indicates whether the object can be edited. | [optional] [default to false]

## Methods

### NewSpconfigrules

`func NewSpconfigrules() *Spconfigrules`

NewSpconfigrules instantiates a new Spconfigrules object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpconfigrulesWithDefaults

`func NewSpconfigrulesWithDefaults() *Spconfigrules`

NewSpconfigrulesWithDefaults instantiates a new Spconfigrules object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTakeFromTargetRules

`func (o *Spconfigrules) GetTakeFromTargetRules() []Spconfigrule`

GetTakeFromTargetRules returns the TakeFromTargetRules field if non-nil, zero value otherwise.

### GetTakeFromTargetRulesOk

`func (o *Spconfigrules) GetTakeFromTargetRulesOk() (*[]Spconfigrule, bool)`

GetTakeFromTargetRulesOk returns a tuple with the TakeFromTargetRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTakeFromTargetRules

`func (o *Spconfigrules) SetTakeFromTargetRules(v []Spconfigrule)`

SetTakeFromTargetRules sets TakeFromTargetRules field to given value.

### HasTakeFromTargetRules

`func (o *Spconfigrules) HasTakeFromTargetRules() bool`

HasTakeFromTargetRules returns a boolean if a field has been set.

### GetDefaultRules

`func (o *Spconfigrules) GetDefaultRules() []Spconfigrule`

GetDefaultRules returns the DefaultRules field if non-nil, zero value otherwise.

### GetDefaultRulesOk

`func (o *Spconfigrules) GetDefaultRulesOk() (*[]Spconfigrule, bool)`

GetDefaultRulesOk returns a tuple with the DefaultRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultRules

`func (o *Spconfigrules) SetDefaultRules(v []Spconfigrule)`

SetDefaultRules sets DefaultRules field to given value.

### HasDefaultRules

`func (o *Spconfigrules) HasDefaultRules() bool`

HasDefaultRules returns a boolean if a field has been set.

### GetEditable

`func (o *Spconfigrules) GetEditable() bool`

GetEditable returns the Editable field if non-nil, zero value otherwise.

### GetEditableOk

`func (o *Spconfigrules) GetEditableOk() (*bool, bool)`

GetEditableOk returns a tuple with the Editable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditable

`func (o *Spconfigrules) SetEditable(v bool)`

SetEditable sets Editable field to given value.

### HasEditable

`func (o *Spconfigrules) HasEditable() bool`

HasEditable returns a boolean if a field has been set.


