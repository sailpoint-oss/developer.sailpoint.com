---
id: v1-spconfigmessage2
title: Spconfigmessage2
pagination_label: Spconfigmessage2
sidebar_label: Spconfigmessage2
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Spconfigmessage2', 'V1Spconfigmessage2'] 
slug: /tools/sdk/go/spconfig/models/spconfigmessage2
tags: ['SDK', 'Software Development Kit', 'Spconfigmessage2', 'V1Spconfigmessage2']
---

# Spconfigmessage2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **string** | Message key. | 
**Text** | **string** | Message text. | 
**Details** | **map[string]map[string]interface{}** | Message details if any, in key:value pairs. | 

## Methods

### NewSpconfigmessage2

`func NewSpconfigmessage2(key string, text string, details map[string]map[string]interface{}, ) *Spconfigmessage2`

NewSpconfigmessage2 instantiates a new Spconfigmessage2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpconfigmessage2WithDefaults

`func NewSpconfigmessage2WithDefaults() *Spconfigmessage2`

NewSpconfigmessage2WithDefaults instantiates a new Spconfigmessage2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *Spconfigmessage2) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Spconfigmessage2) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Spconfigmessage2) SetKey(v string)`

SetKey sets Key field to given value.


### GetText

`func (o *Spconfigmessage2) GetText() string`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *Spconfigmessage2) GetTextOk() (*string, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *Spconfigmessage2) SetText(v string)`

SetText sets Text field to given value.


### GetDetails

`func (o *Spconfigmessage2) GetDetails() map[string]map[string]interface{}`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *Spconfigmessage2) GetDetailsOk() (*map[string]map[string]interface{}, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *Spconfigmessage2) SetDetails(v map[string]map[string]interface{})`

SetDetails sets Details field to given value.



