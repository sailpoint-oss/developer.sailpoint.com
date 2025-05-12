---
id: v2024-bound
title: Bound
pagination_label: Bound
sidebar_label: Bound
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Bound', 'V2024Bound'] 
slug: /tools/sdk/go/v2024/models/bound
tags: ['SDK', 'Software Development Kit', 'Bound', 'V2024Bound']
---

# Bound

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **string** | The value of the range's endpoint. | 
**Inclusive** | Pointer to **bool** | Indicates if the endpoint is included in the range. | [optional] [default to false]

## Methods

### NewBound

`func NewBound(value string, ) *Bound`

NewBound instantiates a new Bound object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBoundWithDefaults

`func NewBoundWithDefaults() *Bound`

NewBoundWithDefaults instantiates a new Bound object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *Bound) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Bound) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Bound) SetValue(v string)`

SetValue sets Value field to given value.


### GetInclusive

`func (o *Bound) GetInclusive() bool`

GetInclusive returns the Inclusive field if non-nil, zero value otherwise.

### GetInclusiveOk

`func (o *Bound) GetInclusiveOk() (*bool, bool)`

GetInclusiveOk returns a tuple with the Inclusive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInclusive

`func (o *Bound) SetInclusive(v bool)`

SetInclusive sets Inclusive field to given value.

### HasInclusive

`func (o *Bound) HasInclusive() bool`

HasInclusive returns a boolean if a field has been set.


