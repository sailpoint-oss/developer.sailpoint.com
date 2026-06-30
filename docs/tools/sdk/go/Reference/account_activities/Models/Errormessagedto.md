---
id: v1-errormessagedto
title: Errormessagedto
pagination_label: Errormessagedto
sidebar_label: Errormessagedto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Errormessagedto', 'V1Errormessagedto'] 
slug: /tools/sdk/go/accountactivities/models/errormessagedto
tags: ['SDK', 'Software Development Kit', 'Errormessagedto', 'V1Errormessagedto']
---

# Errormessagedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Locale** | Pointer to **NullableString** | The locale for the message text, a BCP 47 language tag. | [optional] 
**LocaleOrigin** | Pointer to [**NullableLocaleorigin**](localeorigin) |  | [optional] 
**Text** | Pointer to **string** | Actual text of the error message in the indicated locale. | [optional] 

## Methods

### NewErrormessagedto

`func NewErrormessagedto() *Errormessagedto`

NewErrormessagedto instantiates a new Errormessagedto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewErrormessagedtoWithDefaults

`func NewErrormessagedtoWithDefaults() *Errormessagedto`

NewErrormessagedtoWithDefaults instantiates a new Errormessagedto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLocale

`func (o *Errormessagedto) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *Errormessagedto) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *Errormessagedto) SetLocale(v string)`

SetLocale sets Locale field to given value.

### HasLocale

`func (o *Errormessagedto) HasLocale() bool`

HasLocale returns a boolean if a field has been set.

### SetLocaleNil

`func (o *Errormessagedto) SetLocaleNil(b bool)`

 SetLocaleNil sets the value for Locale to be an explicit nil

### UnsetLocale
`func (o *Errormessagedto) UnsetLocale()`

UnsetLocale ensures that no value is present for Locale, not even an explicit nil
### GetLocaleOrigin

`func (o *Errormessagedto) GetLocaleOrigin() Localeorigin`

GetLocaleOrigin returns the LocaleOrigin field if non-nil, zero value otherwise.

### GetLocaleOriginOk

`func (o *Errormessagedto) GetLocaleOriginOk() (*Localeorigin, bool)`

GetLocaleOriginOk returns a tuple with the LocaleOrigin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocaleOrigin

`func (o *Errormessagedto) SetLocaleOrigin(v Localeorigin)`

SetLocaleOrigin sets LocaleOrigin field to given value.

### HasLocaleOrigin

`func (o *Errormessagedto) HasLocaleOrigin() bool`

HasLocaleOrigin returns a boolean if a field has been set.

### SetLocaleOriginNil

`func (o *Errormessagedto) SetLocaleOriginNil(b bool)`

 SetLocaleOriginNil sets the value for LocaleOrigin to be an explicit nil

### UnsetLocaleOrigin
`func (o *Errormessagedto) UnsetLocaleOrigin()`

UnsetLocaleOrigin ensures that no value is present for LocaleOrigin, not even an explicit nil
### GetText

`func (o *Errormessagedto) GetText() string`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *Errormessagedto) GetTextOk() (*string, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *Errormessagedto) SetText(v string)`

SetText sets Text field to given value.

### HasText

`func (o *Errormessagedto) HasText() bool`

HasText returns a boolean if a field has been set.


