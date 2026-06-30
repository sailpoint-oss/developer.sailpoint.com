---
id: v1-accessduration
title: Accessduration
pagination_label: Accessduration
sidebar_label: Accessduration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessduration', 'V1Accessduration'] 
slug: /tools/sdk/go/roles/models/accessduration
tags: ['SDK', 'Software Development Kit', 'Accessduration', 'V1Accessduration']
---

# Accessduration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **int32** | The numeric value representing the amount of time, which is defined in the **timeUnit**. | [optional] 
**TimeUnit** | Pointer to **string** | The unit of time that corresponds to the **value**. It defines the scale of the time period. | [optional] 

## Methods

### NewAccessduration

`func NewAccessduration() *Accessduration`

NewAccessduration instantiates a new Accessduration object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessdurationWithDefaults

`func NewAccessdurationWithDefaults() *Accessduration`

NewAccessdurationWithDefaults instantiates a new Accessduration object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *Accessduration) GetValue() int32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Accessduration) GetValueOk() (*int32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Accessduration) SetValue(v int32)`

SetValue sets Value field to given value.

### HasValue

`func (o *Accessduration) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetTimeUnit

`func (o *Accessduration) GetTimeUnit() string`

GetTimeUnit returns the TimeUnit field if non-nil, zero value otherwise.

### GetTimeUnitOk

`func (o *Accessduration) GetTimeUnitOk() (*string, bool)`

GetTimeUnitOk returns a tuple with the TimeUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeUnit

`func (o *Accessduration) SetTimeUnit(v string)`

SetTimeUnit sets TimeUnit field to given value.

### HasTimeUnit

`func (o *Accessduration) HasTimeUnit() bool`

HasTimeUnit returns a boolean if a field has been set.


