---
id: beta-sp-config-message
title: SpConfigMessage
pagination_label: SpConfigMessage
sidebar_label: SpConfigMessage
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SpConfigMessage', 'BetaSpConfigMessage'] 
slug: /tools/sdk/go/beta/models/sp-config-message
tags: ['SDK', 'Software Development Kit', 'SpConfigMessage', 'BetaSpConfigMessage']
---

# SpConfigMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **string** | Message key. | 
**Text** | **string** | Message text. | 
**Details** | **map[string]map[string]interface{}** | Message details if any, in key:value pairs. | 

## Methods

### NewSpConfigMessage

`func NewSpConfigMessage(key string, text string, details map[string]map[string]interface{}, ) *SpConfigMessage`

NewSpConfigMessage instantiates a new SpConfigMessage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpConfigMessageWithDefaults

`func NewSpConfigMessageWithDefaults() *SpConfigMessage`

NewSpConfigMessageWithDefaults instantiates a new SpConfigMessage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *SpConfigMessage) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *SpConfigMessage) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *SpConfigMessage) SetKey(v string)`

SetKey sets Key field to given value.


### GetText

`func (o *SpConfigMessage) GetText() string`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *SpConfigMessage) GetTextOk() (*string, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *SpConfigMessage) SetText(v string)`

SetText sets Text field to given value.


### GetDetails

`func (o *SpConfigMessage) GetDetails() map[string]map[string]interface{}`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *SpConfigMessage) GetDetailsOk() (*map[string]map[string]interface{}, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *SpConfigMessage) SetDetails(v map[string]map[string]interface{})`

SetDetails sets Details field to given value.



