---
id: beta-error-message
title: ErrorMessage
pagination_label: ErrorMessage
sidebar_label: ErrorMessage
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ErrorMessage', 'BetaErrorMessage'] 
slug: /tools/sdk/go/beta/models/error-message
tags: ['SDK', 'Software Development Kit', 'ErrorMessage', 'BetaErrorMessage']
---

# ErrorMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Locale** | Pointer to **string** | Locale is the current Locale | [optional] 
**LocaleOrigin** | Pointer to **string** | LocaleOrigin holds possible values of how the locale was selected | [optional] 
**Text** | Pointer to **string** | Text is the actual text of the error message | [optional] 

## Methods

### NewErrorMessage

`func NewErrorMessage() *ErrorMessage`

NewErrorMessage instantiates a new ErrorMessage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewErrorMessageWithDefaults

`func NewErrorMessageWithDefaults() *ErrorMessage`

NewErrorMessageWithDefaults instantiates a new ErrorMessage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLocale

`func (o *ErrorMessage) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *ErrorMessage) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *ErrorMessage) SetLocale(v string)`

SetLocale sets Locale field to given value.

### HasLocale

`func (o *ErrorMessage) HasLocale() bool`

HasLocale returns a boolean if a field has been set.

### GetLocaleOrigin

`func (o *ErrorMessage) GetLocaleOrigin() string`

GetLocaleOrigin returns the LocaleOrigin field if non-nil, zero value otherwise.

### GetLocaleOriginOk

`func (o *ErrorMessage) GetLocaleOriginOk() (*string, bool)`

GetLocaleOriginOk returns a tuple with the LocaleOrigin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocaleOrigin

`func (o *ErrorMessage) SetLocaleOrigin(v string)`

SetLocaleOrigin sets LocaleOrigin field to given value.

### HasLocaleOrigin

`func (o *ErrorMessage) HasLocaleOrigin() bool`

HasLocaleOrigin returns a boolean if a field has been set.

### GetText

`func (o *ErrorMessage) GetText() string`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *ErrorMessage) GetTextOk() (*string, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *ErrorMessage) SetText(v string)`

SetText sets Text field to given value.

### HasText

`func (o *ErrorMessage) HasText() bool`

HasText returns a boolean if a field has been set.


