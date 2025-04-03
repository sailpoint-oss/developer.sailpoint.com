---
id: v2025-correlation-config-attribute-assignments-inner
title: CorrelationConfigAttributeAssignmentsInner
pagination_label: CorrelationConfigAttributeAssignmentsInner
sidebar_label: CorrelationConfigAttributeAssignmentsInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CorrelationConfigAttributeAssignmentsInner', 'V2025CorrelationConfigAttributeAssignmentsInner'] 
slug: /tools/sdk/go/v2025/models/correlation-config-attribute-assignments-inner
tags: ['SDK', 'Software Development Kit', 'CorrelationConfigAttributeAssignmentsInner', 'V2025CorrelationConfigAttributeAssignmentsInner']
---

# CorrelationConfigAttributeAssignmentsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Property** | Pointer to **string** | The property of the attribute assignment. | [optional] 
**Value** | Pointer to **string** | The value of the attribute assignment. | [optional] 
**Operation** | Pointer to **string** | The operation of the attribute assignment. | [optional] 
**Complex** | Pointer to **bool** | Whether or not the it's a complex attribute assignment. | [optional] [default to false]
**IgnoreCase** | Pointer to **bool** | Whether or not the attribute assignment should ignore case. | [optional] [default to false]
**MatchMode** | Pointer to **string** | The match mode of the attribute assignment. | [optional] 
**FilterString** | Pointer to **string** | The filter string of the attribute assignment. | [optional] 

## Methods

### NewCorrelationConfigAttributeAssignmentsInner

`func NewCorrelationConfigAttributeAssignmentsInner() *CorrelationConfigAttributeAssignmentsInner`

NewCorrelationConfigAttributeAssignmentsInner instantiates a new CorrelationConfigAttributeAssignmentsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCorrelationConfigAttributeAssignmentsInnerWithDefaults

`func NewCorrelationConfigAttributeAssignmentsInnerWithDefaults() *CorrelationConfigAttributeAssignmentsInner`

NewCorrelationConfigAttributeAssignmentsInnerWithDefaults instantiates a new CorrelationConfigAttributeAssignmentsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProperty

`func (o *CorrelationConfigAttributeAssignmentsInner) GetProperty() string`

GetProperty returns the Property field if non-nil, zero value otherwise.

### GetPropertyOk

`func (o *CorrelationConfigAttributeAssignmentsInner) GetPropertyOk() (*string, bool)`

GetPropertyOk returns a tuple with the Property field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperty

`func (o *CorrelationConfigAttributeAssignmentsInner) SetProperty(v string)`

SetProperty sets Property field to given value.

### HasProperty

`func (o *CorrelationConfigAttributeAssignmentsInner) HasProperty() bool`

HasProperty returns a boolean if a field has been set.

### GetValue

`func (o *CorrelationConfigAttributeAssignmentsInner) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *CorrelationConfigAttributeAssignmentsInner) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *CorrelationConfigAttributeAssignmentsInner) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *CorrelationConfigAttributeAssignmentsInner) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetOperation

`func (o *CorrelationConfigAttributeAssignmentsInner) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *CorrelationConfigAttributeAssignmentsInner) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *CorrelationConfigAttributeAssignmentsInner) SetOperation(v string)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *CorrelationConfigAttributeAssignmentsInner) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetComplex

`func (o *CorrelationConfigAttributeAssignmentsInner) GetComplex() bool`

GetComplex returns the Complex field if non-nil, zero value otherwise.

### GetComplexOk

`func (o *CorrelationConfigAttributeAssignmentsInner) GetComplexOk() (*bool, bool)`

GetComplexOk returns a tuple with the Complex field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComplex

`func (o *CorrelationConfigAttributeAssignmentsInner) SetComplex(v bool)`

SetComplex sets Complex field to given value.

### HasComplex

`func (o *CorrelationConfigAttributeAssignmentsInner) HasComplex() bool`

HasComplex returns a boolean if a field has been set.

### GetIgnoreCase

`func (o *CorrelationConfigAttributeAssignmentsInner) GetIgnoreCase() bool`

GetIgnoreCase returns the IgnoreCase field if non-nil, zero value otherwise.

### GetIgnoreCaseOk

`func (o *CorrelationConfigAttributeAssignmentsInner) GetIgnoreCaseOk() (*bool, bool)`

GetIgnoreCaseOk returns a tuple with the IgnoreCase field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIgnoreCase

`func (o *CorrelationConfigAttributeAssignmentsInner) SetIgnoreCase(v bool)`

SetIgnoreCase sets IgnoreCase field to given value.

### HasIgnoreCase

`func (o *CorrelationConfigAttributeAssignmentsInner) HasIgnoreCase() bool`

HasIgnoreCase returns a boolean if a field has been set.

### GetMatchMode

`func (o *CorrelationConfigAttributeAssignmentsInner) GetMatchMode() string`

GetMatchMode returns the MatchMode field if non-nil, zero value otherwise.

### GetMatchModeOk

`func (o *CorrelationConfigAttributeAssignmentsInner) GetMatchModeOk() (*string, bool)`

GetMatchModeOk returns a tuple with the MatchMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchMode

`func (o *CorrelationConfigAttributeAssignmentsInner) SetMatchMode(v string)`

SetMatchMode sets MatchMode field to given value.

### HasMatchMode

`func (o *CorrelationConfigAttributeAssignmentsInner) HasMatchMode() bool`

HasMatchMode returns a boolean if a field has been set.

### GetFilterString

`func (o *CorrelationConfigAttributeAssignmentsInner) GetFilterString() string`

GetFilterString returns the FilterString field if non-nil, zero value otherwise.

### GetFilterStringOk

`func (o *CorrelationConfigAttributeAssignmentsInner) GetFilterStringOk() (*string, bool)`

GetFilterStringOk returns a tuple with the FilterString field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilterString

`func (o *CorrelationConfigAttributeAssignmentsInner) SetFilterString(v string)`

SetFilterString sets FilterString field to given value.

### HasFilterString

`func (o *CorrelationConfigAttributeAssignmentsInner) HasFilterString() bool`

HasFilterString returns a boolean if a field has been set.


