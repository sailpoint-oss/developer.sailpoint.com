---
id: v1-localizedmessage
title: Localizedmessage
pagination_label: Localizedmessage
sidebar_label: Localizedmessage
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Localizedmessage', 'V1Localizedmessage'] 
slug: /tools/sdk/go/applicationdiscovery/models/localizedmessage
tags: ['SDK', 'Software Development Kit', 'Localizedmessage', 'V1Localizedmessage']
---

# Localizedmessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Locale** | **string** | Message locale | 
**Message** | **string** | Message text | 

## Methods

### NewLocalizedmessage

`func NewLocalizedmessage(locale string, message string, ) *Localizedmessage`

NewLocalizedmessage instantiates a new Localizedmessage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLocalizedmessageWithDefaults

`func NewLocalizedmessageWithDefaults() *Localizedmessage`

NewLocalizedmessageWithDefaults instantiates a new Localizedmessage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLocale

`func (o *Localizedmessage) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *Localizedmessage) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *Localizedmessage) SetLocale(v string)`

SetLocale sets Locale field to given value.


### GetMessage

`func (o *Localizedmessage) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *Localizedmessage) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *Localizedmessage) SetMessage(v string)`

SetMessage sets Message field to given value.



