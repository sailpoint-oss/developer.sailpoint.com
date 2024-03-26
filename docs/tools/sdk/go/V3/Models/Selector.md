---
id: selector
title: Selector
pagination_label: Selector
sidebar_label: Selector
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'Selector'] 
slug: /tools/sdk/go/v3/models/selector
tags: ['SDK', 'Software Development Kit', 'Selector']
---

# Selector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  [**SelectorType**](selector-type) |  | 
**Values** |  **[]string** | The selected values.  | 
**Interval** |  Pointer to **NullableInt32** | The selected interval for RANGE selectors.  | [optional] 

## Methods

### NewSelector

`func NewSelector(type_ SelectorType, values []string, ) *Selector`

NewSelector instantiates a new Selector object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSelectorWithDefaults

`func NewSelectorWithDefaults() *Selector`

NewSelectorWithDefaults instantiates a new Selector object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Selector) GetType() SelectorType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Selector) GetTypeOk() (*SelectorType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Selector) SetType(v SelectorType)`

SetType sets Type field to given value.


### GetValues

`func (o *Selector) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *Selector) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *Selector) SetValues(v []string)`

SetValues sets Values field to given value.


### GetInterval

`func (o *Selector) GetInterval() int32`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *Selector) GetIntervalOk() (*int32, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *Selector) SetInterval(v int32)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *Selector) HasInterval() bool`

HasInterval returns a boolean if a field has been set.

### SetIntervalNil

`func (o *Selector) SetIntervalNil(b bool)`

 SetIntervalNil sets the value for Interval to be an explicit nil

### UnsetInterval
`func (o *Selector) UnsetInterval()`

UnsetInterval ensures that no value is present for Interval, not even an explicit nil

[[Back to top]](#) 


