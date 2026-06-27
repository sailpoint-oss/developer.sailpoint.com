---
id: v1-formerror
title: Formerror
pagination_label: Formerror
sidebar_label: Formerror
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Formerror', 'V1Formerror'] 
slug: /tools/sdk/go/customforms/models/formerror
tags: ['SDK', 'Software Development Kit', 'Formerror', 'V1Formerror']
---

# Formerror

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **string** | Key is the technical key | [optional] 
**Messages** | Pointer to [**[]Errormessage**](errormessage) | Messages is a list of web.ErrorMessage items | [optional] 
**Value** | Pointer to **interface{}** | Value is the value associated with a Key | [optional] 

## Methods

### NewFormerror

`func NewFormerror() *Formerror`

NewFormerror instantiates a new Formerror object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormerrorWithDefaults

`func NewFormerrorWithDefaults() *Formerror`

NewFormerrorWithDefaults instantiates a new Formerror object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *Formerror) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Formerror) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Formerror) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *Formerror) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetMessages

`func (o *Formerror) GetMessages() []Errormessage`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *Formerror) GetMessagesOk() (*[]Errormessage, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *Formerror) SetMessages(v []Errormessage)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *Formerror) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetValue

`func (o *Formerror) GetValue() interface{}`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Formerror) GetValueOk() (*interface{}, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Formerror) SetValue(v interface{})`

SetValue sets Value field to given value.

### HasValue

`func (o *Formerror) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *Formerror) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *Formerror) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil

