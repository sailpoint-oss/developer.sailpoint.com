---
id: v2024-range
title: Range
pagination_label: Range
sidebar_label: Range
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Range', 'V2024Range'] 
slug: /tools/sdk/go/v2024/models/range
tags: ['SDK', 'Software Development Kit', 'Range', 'V2024Range']
---

# Range

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Lower** | Pointer to [**Bound**](bound) |  | [optional] 
**Upper** | Pointer to [**Bound**](bound) |  | [optional] 

## Methods

### NewRange

`func NewRange() *Range`

NewRange instantiates a new Range object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRangeWithDefaults

`func NewRangeWithDefaults() *Range`

NewRangeWithDefaults instantiates a new Range object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLower

`func (o *Range) GetLower() Bound`

GetLower returns the Lower field if non-nil, zero value otherwise.

### GetLowerOk

`func (o *Range) GetLowerOk() (*Bound, bool)`

GetLowerOk returns a tuple with the Lower field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLower

`func (o *Range) SetLower(v Bound)`

SetLower sets Lower field to given value.

### HasLower

`func (o *Range) HasLower() bool`

HasLower returns a boolean if a field has been set.

### GetUpper

`func (o *Range) GetUpper() Bound`

GetUpper returns the Upper field if non-nil, zero value otherwise.

### GetUpperOk

`func (o *Range) GetUpperOk() (*Bound, bool)`

GetUpperOk returns a tuple with the Upper field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpper

`func (o *Range) SetUpper(v Bound)`

SetUpper sets Upper field to given value.

### HasUpper

`func (o *Range) HasUpper() bool`

HasUpper returns a boolean if a field has been set.


