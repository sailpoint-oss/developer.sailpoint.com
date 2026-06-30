---
id: v1-errormessage
title: Errormessage
pagination_label: Errormessage
sidebar_label: Errormessage
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Errormessage', 'V1Errormessage'] 
slug: /tools/sdk/go/customforms/models/errormessage
tags: ['SDK', 'Software Development Kit', 'Errormessage', 'V1Errormessage']
---

# Errormessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Locale** | Pointer to **string** | Locale is the current Locale | [optional] 
**LocaleOrigin** | Pointer to **string** | LocaleOrigin holds possible values of how the locale was selected | [optional] 
**Text** | Pointer to **string** | Text is the actual text of the error message | [optional] 

## Methods

### NewErrormessage

`func NewErrormessage() *Errormessage`

NewErrormessage instantiates a new Errormessage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewErrormessageWithDefaults

`func NewErrormessageWithDefaults() *Errormessage`

NewErrormessageWithDefaults instantiates a new Errormessage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLocale

`func (o *Errormessage) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *Errormessage) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *Errormessage) SetLocale(v string)`

SetLocale sets Locale field to given value.

### HasLocale

`func (o *Errormessage) HasLocale() bool`

HasLocale returns a boolean if a field has been set.

### GetLocaleOrigin

`func (o *Errormessage) GetLocaleOrigin() string`

GetLocaleOrigin returns the LocaleOrigin field if non-nil, zero value otherwise.

### GetLocaleOriginOk

`func (o *Errormessage) GetLocaleOriginOk() (*string, bool)`

GetLocaleOriginOk returns a tuple with the LocaleOrigin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocaleOrigin

`func (o *Errormessage) SetLocaleOrigin(v string)`

SetLocaleOrigin sets LocaleOrigin field to given value.

### HasLocaleOrigin

`func (o *Errormessage) HasLocaleOrigin() bool`

HasLocaleOrigin returns a boolean if a field has been set.

### GetText

`func (o *Errormessage) GetText() string`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *Errormessage) GetTextOk() (*string, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *Errormessage) SetText(v string)`

SetText sets Text field to given value.

### HasText

`func (o *Errormessage) HasText() bool`

HasText returns a boolean if a field has been set.


