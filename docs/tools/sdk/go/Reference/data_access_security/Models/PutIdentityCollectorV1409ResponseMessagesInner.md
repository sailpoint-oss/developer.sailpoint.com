---
id: v1-put-identity-collector-v1409-response-messages-inner
title: PutIdentityCollectorV1409ResponseMessagesInner
pagination_label: PutIdentityCollectorV1409ResponseMessagesInner
sidebar_label: PutIdentityCollectorV1409ResponseMessagesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PutIdentityCollectorV1409ResponseMessagesInner', 'V1PutIdentityCollectorV1409ResponseMessagesInner'] 
slug: /tools/sdk/go/dataaccesssecurity/models/put-identity-collector-v1409-response-messages-inner
tags: ['SDK', 'Software Development Kit', 'PutIdentityCollectorV1409ResponseMessagesInner', 'V1PutIdentityCollectorV1409ResponseMessagesInner']
---

# PutIdentityCollectorV1409ResponseMessagesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Locale** | Pointer to **string** | The locale for the message text, a BCP 47 language tag. | [optional] 
**LocaleOrigin** | Pointer to **string** | An indicator of how the locale was selected. | [optional] 
**Text** | Pointer to **string** | Actual text of the error message in the indicated locale. | [optional] 

## Methods

### NewPutIdentityCollectorV1409ResponseMessagesInner

`func NewPutIdentityCollectorV1409ResponseMessagesInner() *PutIdentityCollectorV1409ResponseMessagesInner`

NewPutIdentityCollectorV1409ResponseMessagesInner instantiates a new PutIdentityCollectorV1409ResponseMessagesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutIdentityCollectorV1409ResponseMessagesInnerWithDefaults

`func NewPutIdentityCollectorV1409ResponseMessagesInnerWithDefaults() *PutIdentityCollectorV1409ResponseMessagesInner`

NewPutIdentityCollectorV1409ResponseMessagesInnerWithDefaults instantiates a new PutIdentityCollectorV1409ResponseMessagesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLocale

`func (o *PutIdentityCollectorV1409ResponseMessagesInner) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *PutIdentityCollectorV1409ResponseMessagesInner) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *PutIdentityCollectorV1409ResponseMessagesInner) SetLocale(v string)`

SetLocale sets Locale field to given value.

### HasLocale

`func (o *PutIdentityCollectorV1409ResponseMessagesInner) HasLocale() bool`

HasLocale returns a boolean if a field has been set.

### GetLocaleOrigin

`func (o *PutIdentityCollectorV1409ResponseMessagesInner) GetLocaleOrigin() string`

GetLocaleOrigin returns the LocaleOrigin field if non-nil, zero value otherwise.

### GetLocaleOriginOk

`func (o *PutIdentityCollectorV1409ResponseMessagesInner) GetLocaleOriginOk() (*string, bool)`

GetLocaleOriginOk returns a tuple with the LocaleOrigin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocaleOrigin

`func (o *PutIdentityCollectorV1409ResponseMessagesInner) SetLocaleOrigin(v string)`

SetLocaleOrigin sets LocaleOrigin field to given value.

### HasLocaleOrigin

`func (o *PutIdentityCollectorV1409ResponseMessagesInner) HasLocaleOrigin() bool`

HasLocaleOrigin returns a boolean if a field has been set.

### GetText

`func (o *PutIdentityCollectorV1409ResponseMessagesInner) GetText() string`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *PutIdentityCollectorV1409ResponseMessagesInner) GetTextOk() (*string, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *PutIdentityCollectorV1409ResponseMessagesInner) SetText(v string)`

SetText sets Text field to given value.

### HasText

`func (o *PutIdentityCollectorV1409ResponseMessagesInner) HasText() bool`

HasText returns a boolean if a field has been set.


