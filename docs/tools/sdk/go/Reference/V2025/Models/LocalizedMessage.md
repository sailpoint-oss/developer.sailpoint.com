---
id: localized-message
title: LocalizedMessage
pagination_label: LocalizedMessage
sidebar_label: LocalizedMessage
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LocalizedMessage', 'LocalizedMessage'] 
slug: /tools/sdk/go//models/localized-message
tags: ['SDK', 'Software Development Kit', 'LocalizedMessage', 'LocalizedMessage']
---

# LocalizedMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Locale** | **string** | Message locale | 
**Message** | **string** | Message text | 

## Methods

### NewLocalizedMessage

`func NewLocalizedMessage(locale string, message string, ) *LocalizedMessage`

NewLocalizedMessage instantiates a new LocalizedMessage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLocalizedMessageWithDefaults

`func NewLocalizedMessageWithDefaults() *LocalizedMessage`

NewLocalizedMessageWithDefaults instantiates a new LocalizedMessage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLocale

`func (o *LocalizedMessage) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *LocalizedMessage) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *LocalizedMessage) SetLocale(v string)`

SetLocale sets Locale field to given value.


### GetMessage

`func (o *LocalizedMessage) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *LocalizedMessage) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *LocalizedMessage) SetMessage(v string)`

SetMessage sets Message field to given value.



