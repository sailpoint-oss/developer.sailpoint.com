---
id: v1-spconfigmessage
title: Spconfigmessage
pagination_label: Spconfigmessage
sidebar_label: Spconfigmessage
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Spconfigmessage', 'V1Spconfigmessage'] 
slug: /tools/sdk/go/identityprofiles/models/spconfigmessage
tags: ['SDK', 'Software Development Kit', 'Spconfigmessage', 'V1Spconfigmessage']
---

# Spconfigmessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **string** | Message key. | 
**Text** | **string** | Message text. | 
**Details** | **map[string]interface{}** | Message details if any, in key:value pairs. | 

## Methods

### NewSpconfigmessage

`func NewSpconfigmessage(key string, text string, details map[string]interface{}, ) *Spconfigmessage`

NewSpconfigmessage instantiates a new Spconfigmessage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpconfigmessageWithDefaults

`func NewSpconfigmessageWithDefaults() *Spconfigmessage`

NewSpconfigmessageWithDefaults instantiates a new Spconfigmessage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *Spconfigmessage) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Spconfigmessage) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Spconfigmessage) SetKey(v string)`

SetKey sets Key field to given value.


### GetText

`func (o *Spconfigmessage) GetText() string`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *Spconfigmessage) GetTextOk() (*string, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *Spconfigmessage) SetText(v string)`

SetText sets Text field to given value.


### GetDetails

`func (o *Spconfigmessage) GetDetails() map[string]interface{}`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *Spconfigmessage) GetDetailsOk() (*map[string]interface{}, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *Spconfigmessage) SetDetails(v map[string]interface{})`

SetDetails sets Details field to given value.



