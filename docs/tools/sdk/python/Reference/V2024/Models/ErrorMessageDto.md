---
id: v2024-error-message-dto
title: ErrorMessageDto
pagination_label: ErrorMessageDto
sidebar_label: ErrorMessageDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ErrorMessageDto', 'V2024ErrorMessageDto'] 
slug: /tools/sdk/go/v2024/models/error-message-dto
tags: ['SDK', 'Software Development Kit', 'ErrorMessageDto', 'V2024ErrorMessageDto']
---

# ErrorMessageDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Locale** | Pointer to **NullableString** | The locale for the message text, a BCP 47 language tag. | [optional] 
**LocaleOrigin** | Pointer to [**NullableLocaleOrigin**](locale-origin) |  | [optional] 
**Text** | Pointer to **string** | Actual text of the error message in the indicated locale. | [optional] 

## Methods

### NewErrorMessageDto

`func NewErrorMessageDto() *ErrorMessageDto`

NewErrorMessageDto instantiates a new ErrorMessageDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewErrorMessageDtoWithDefaults

`func NewErrorMessageDtoWithDefaults() *ErrorMessageDto`

NewErrorMessageDtoWithDefaults instantiates a new ErrorMessageDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLocale

`func (o *ErrorMessageDto) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *ErrorMessageDto) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *ErrorMessageDto) SetLocale(v string)`

SetLocale sets Locale field to given value.

### HasLocale

`func (o *ErrorMessageDto) HasLocale() bool`

HasLocale returns a boolean if a field has been set.

### SetLocaleNil

`func (o *ErrorMessageDto) SetLocaleNil(b bool)`

 SetLocaleNil sets the value for Locale to be an explicit nil

### UnsetLocale
`func (o *ErrorMessageDto) UnsetLocale()`

UnsetLocale ensures that no value is present for Locale, not even an explicit nil
### GetLocaleOrigin

`func (o *ErrorMessageDto) GetLocaleOrigin() LocaleOrigin`

GetLocaleOrigin returns the LocaleOrigin field if non-nil, zero value otherwise.

### GetLocaleOriginOk

`func (o *ErrorMessageDto) GetLocaleOriginOk() (*LocaleOrigin, bool)`

GetLocaleOriginOk returns a tuple with the LocaleOrigin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocaleOrigin

`func (o *ErrorMessageDto) SetLocaleOrigin(v LocaleOrigin)`

SetLocaleOrigin sets LocaleOrigin field to given value.

### HasLocaleOrigin

`func (o *ErrorMessageDto) HasLocaleOrigin() bool`

HasLocaleOrigin returns a boolean if a field has been set.

### SetLocaleOriginNil

`func (o *ErrorMessageDto) SetLocaleOriginNil(b bool)`

 SetLocaleOriginNil sets the value for LocaleOrigin to be an explicit nil

### UnsetLocaleOrigin
`func (o *ErrorMessageDto) UnsetLocaleOrigin()`

UnsetLocaleOrigin ensures that no value is present for LocaleOrigin, not even an explicit nil
### GetText

`func (o *ErrorMessageDto) GetText() string`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *ErrorMessageDto) GetTextOk() (*string, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *ErrorMessageDto) SetText(v string)`

SetText sets Text field to given value.

### HasText

`func (o *ErrorMessageDto) HasText() bool`

HasText returns a boolean if a field has been set.


