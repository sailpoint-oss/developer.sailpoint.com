---
id: v1-model-range
title: ModelRange
pagination_label: ModelRange
sidebar_label: ModelRange
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ModelRange', 'V1ModelRange'] 
slug: /tools/sdk/go/savedsearch/models/model-range
tags: ['SDK', 'Software Development Kit', 'ModelRange', 'V1ModelRange']
---

# ModelRange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Lower** | Pointer to [**Bound**](bound) |  | [optional] 
**Upper** | Pointer to [**Bound**](bound) |  | [optional] 

## Methods

### NewModelRange

`func NewModelRange() *ModelRange`

NewModelRange instantiates a new ModelRange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelRangeWithDefaults

`func NewModelRangeWithDefaults() *ModelRange`

NewModelRangeWithDefaults instantiates a new ModelRange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLower

`func (o *ModelRange) GetLower() Bound`

GetLower returns the Lower field if non-nil, zero value otherwise.

### GetLowerOk

`func (o *ModelRange) GetLowerOk() (*Bound, bool)`

GetLowerOk returns a tuple with the Lower field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLower

`func (o *ModelRange) SetLower(v Bound)`

SetLower sets Lower field to given value.

### HasLower

`func (o *ModelRange) HasLower() bool`

HasLower returns a boolean if a field has been set.

### GetUpper

`func (o *ModelRange) GetUpper() Bound`

GetUpper returns the Upper field if non-nil, zero value otherwise.

### GetUpperOk

`func (o *ModelRange) GetUpperOk() (*Bound, bool)`

GetUpperOk returns a tuple with the Upper field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpper

`func (o *ModelRange) SetUpper(v Bound)`

SetUpper sets Upper field to given value.

### HasUpper

`func (o *ModelRange) HasUpper() bool`

HasUpper returns a boolean if a field has been set.


