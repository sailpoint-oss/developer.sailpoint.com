---
id: form-error
title: FormError
pagination_label: FormError
sidebar_label: FormError
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'FormError'] 
slug: /tools/sdk/go/beta/models/form-error
tags: ['SDK', 'Software Development Kit', 'FormError']
---

# FormError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** |  Pointer to **string** | Key is the technical key | [optional] 
**Messages** |  Pointer to [**[]ErrorMessage**](error-message) | Messages is a list of web.ErrorMessage items | [optional] 
**Value** |  Pointer to **map[string]interface{}** | Value is the value associated with a Key | [optional] 

## Methods

### NewFormError

`func NewFormError() *FormError`

NewFormError instantiates a new FormError object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormErrorWithDefaults

`func NewFormErrorWithDefaults() *FormError`

NewFormErrorWithDefaults instantiates a new FormError object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *FormError) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *FormError) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *FormError) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *FormError) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetMessages

`func (o *FormError) GetMessages() []ErrorMessage`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *FormError) GetMessagesOk() (*[]ErrorMessage, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *FormError) SetMessages(v []ErrorMessage)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *FormError) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetValue

`func (o *FormError) GetValue() map[string]interface{}`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *FormError) GetValueOk() (*map[string]interface{}, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *FormError) SetValue(v map[string]interface{})`

SetValue sets Value field to given value.

### HasValue

`func (o *FormError) HasValue() bool`

HasValue returns a boolean if a field has been set.


[[Back to top]](#) 


