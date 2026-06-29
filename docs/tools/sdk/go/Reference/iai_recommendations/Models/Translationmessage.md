---
id: v1-translationmessage
title: Translationmessage
pagination_label: Translationmessage
sidebar_label: Translationmessage
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Translationmessage', 'V1Translationmessage'] 
slug: /tools/sdk/go/iairecommendations/models/translationmessage
tags: ['SDK', 'Software Development Kit', 'Translationmessage', 'V1Translationmessage']
---

# Translationmessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **string** | The key of the translation message | [optional] 
**Values** | Pointer to **[]string** | The values corresponding to the translation messages | [optional] 

## Methods

### NewTranslationmessage

`func NewTranslationmessage() *Translationmessage`

NewTranslationmessage instantiates a new Translationmessage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTranslationmessageWithDefaults

`func NewTranslationmessageWithDefaults() *Translationmessage`

NewTranslationmessageWithDefaults instantiates a new Translationmessage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *Translationmessage) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Translationmessage) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Translationmessage) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *Translationmessage) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetValues

`func (o *Translationmessage) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *Translationmessage) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *Translationmessage) SetValues(v []string)`

SetValues sets Values field to given value.

### HasValues

`func (o *Translationmessage) HasValues() bool`

HasValues returns a boolean if a field has been set.


