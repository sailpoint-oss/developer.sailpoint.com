---
id: error-message-dto1
title: ErrorMessageDto1
pagination_label: ErrorMessageDto1
sidebar_label: ErrorMessageDto1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ErrorMessageDto1', 'ErrorMessageDto1'] 
slug: /tools/sdk/go//models/error-message-dto1
tags: ['SDK', 'Software Development Kit', 'ErrorMessageDto1', 'ErrorMessageDto1']
---

# ErrorMessageDto1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Locale** | Pointer to **NullableString** | The locale for the message text, a BCP 47 language tag. | [optional] 
**LocaleOrigin** | Pointer to [**NullableLocaleOrigin**](locale-origin) |  | [optional] 
**Text** | Pointer to **string** | Actual text of the error message in the indicated locale. | [optional] 

## Methods

### NewErrorMessageDto1

`func NewErrorMessageDto1() *ErrorMessageDto1`

NewErrorMessageDto1 instantiates a new ErrorMessageDto1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewErrorMessageDto1WithDefaults

`func NewErrorMessageDto1WithDefaults() *ErrorMessageDto1`

NewErrorMessageDto1WithDefaults instantiates a new ErrorMessageDto1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLocale

`func (o *ErrorMessageDto1) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *ErrorMessageDto1) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *ErrorMessageDto1) SetLocale(v string)`

SetLocale sets Locale field to given value.

### HasLocale

`func (o *ErrorMessageDto1) HasLocale() bool`

HasLocale returns a boolean if a field has been set.

### SetLocaleNil

`func (o *ErrorMessageDto1) SetLocaleNil(b bool)`

 SetLocaleNil sets the value for Locale to be an explicit nil

### UnsetLocale
`func (o *ErrorMessageDto1) UnsetLocale()`

UnsetLocale ensures that no value is present for Locale, not even an explicit nil
### GetLocaleOrigin

`func (o *ErrorMessageDto1) GetLocaleOrigin() LocaleOrigin`

GetLocaleOrigin returns the LocaleOrigin field if non-nil, zero value otherwise.

### GetLocaleOriginOk

`func (o *ErrorMessageDto1) GetLocaleOriginOk() (*LocaleOrigin, bool)`

GetLocaleOriginOk returns a tuple with the LocaleOrigin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocaleOrigin

`func (o *ErrorMessageDto1) SetLocaleOrigin(v LocaleOrigin)`

SetLocaleOrigin sets LocaleOrigin field to given value.

### HasLocaleOrigin

`func (o *ErrorMessageDto1) HasLocaleOrigin() bool`

HasLocaleOrigin returns a boolean if a field has been set.

### SetLocaleOriginNil

`func (o *ErrorMessageDto1) SetLocaleOriginNil(b bool)`

 SetLocaleOriginNil sets the value for LocaleOrigin to be an explicit nil

### UnsetLocaleOrigin
`func (o *ErrorMessageDto1) UnsetLocaleOrigin()`

UnsetLocaleOrigin ensures that no value is present for LocaleOrigin, not even an explicit nil
### GetText

`func (o *ErrorMessageDto1) GetText() string`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *ErrorMessageDto1) GetTextOk() (*string, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *ErrorMessageDto1) SetText(v string)`

SetText sets Text field to given value.

### HasText

`func (o *ErrorMessageDto1) HasText() bool`

HasText returns a boolean if a field has been set.


