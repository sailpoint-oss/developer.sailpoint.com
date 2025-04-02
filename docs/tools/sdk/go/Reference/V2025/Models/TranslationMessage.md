---
id: translation-message
title: TranslationMessage
pagination_label: TranslationMessage
sidebar_label: TranslationMessage
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TranslationMessage', 'TranslationMessage'] 
slug: /tools/sdk/go//models/translation-message
tags: ['SDK', 'Software Development Kit', 'TranslationMessage', 'TranslationMessage']
---

# TranslationMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **string** | The key of the translation message | [optional] 
**Values** | Pointer to **[]string** | The values corresponding to the translation messages | [optional] 

## Methods

### NewTranslationMessage

`func NewTranslationMessage() *TranslationMessage`

NewTranslationMessage instantiates a new TranslationMessage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTranslationMessageWithDefaults

`func NewTranslationMessageWithDefaults() *TranslationMessage`

NewTranslationMessageWithDefaults instantiates a new TranslationMessage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *TranslationMessage) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *TranslationMessage) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *TranslationMessage) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *TranslationMessage) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetValues

`func (o *TranslationMessage) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *TranslationMessage) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *TranslationMessage) SetValues(v []string)`

SetValues sets Values field to given value.

### HasValues

`func (o *TranslationMessage) HasValues() bool`

HasValues returns a boolean if a field has been set.


