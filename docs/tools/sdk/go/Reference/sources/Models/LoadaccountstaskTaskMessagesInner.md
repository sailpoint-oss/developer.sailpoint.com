---
id: v1-loadaccountstask-task-messages-inner
title: LoadaccountstaskTaskMessagesInner
pagination_label: LoadaccountstaskTaskMessagesInner
sidebar_label: LoadaccountstaskTaskMessagesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LoadaccountstaskTaskMessagesInner', 'V1LoadaccountstaskTaskMessagesInner'] 
slug: /tools/sdk/go/sources/models/loadaccountstask-task-messages-inner
tags: ['SDK', 'Software Development Kit', 'LoadaccountstaskTaskMessagesInner', 'V1LoadaccountstaskTaskMessagesInner']
---

# LoadaccountstaskTaskMessagesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Type of the message. | [optional] 
**Error** | Pointer to **bool** | Flag whether message is an error. | [optional] [default to false]
**Warning** | Pointer to **bool** | Flag whether message is a warning. | [optional] [default to false]
**Key** | Pointer to **string** | Message string identifier. | [optional] 
**LocalizedText** | Pointer to **string** | Message context with the locale based language. | [optional] 

## Methods

### NewLoadaccountstaskTaskMessagesInner

`func NewLoadaccountstaskTaskMessagesInner() *LoadaccountstaskTaskMessagesInner`

NewLoadaccountstaskTaskMessagesInner instantiates a new LoadaccountstaskTaskMessagesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLoadaccountstaskTaskMessagesInnerWithDefaults

`func NewLoadaccountstaskTaskMessagesInnerWithDefaults() *LoadaccountstaskTaskMessagesInner`

NewLoadaccountstaskTaskMessagesInnerWithDefaults instantiates a new LoadaccountstaskTaskMessagesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *LoadaccountstaskTaskMessagesInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *LoadaccountstaskTaskMessagesInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *LoadaccountstaskTaskMessagesInner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *LoadaccountstaskTaskMessagesInner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetError

`func (o *LoadaccountstaskTaskMessagesInner) GetError() bool`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *LoadaccountstaskTaskMessagesInner) GetErrorOk() (*bool, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *LoadaccountstaskTaskMessagesInner) SetError(v bool)`

SetError sets Error field to given value.

### HasError

`func (o *LoadaccountstaskTaskMessagesInner) HasError() bool`

HasError returns a boolean if a field has been set.

### GetWarning

`func (o *LoadaccountstaskTaskMessagesInner) GetWarning() bool`

GetWarning returns the Warning field if non-nil, zero value otherwise.

### GetWarningOk

`func (o *LoadaccountstaskTaskMessagesInner) GetWarningOk() (*bool, bool)`

GetWarningOk returns a tuple with the Warning field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarning

`func (o *LoadaccountstaskTaskMessagesInner) SetWarning(v bool)`

SetWarning sets Warning field to given value.

### HasWarning

`func (o *LoadaccountstaskTaskMessagesInner) HasWarning() bool`

HasWarning returns a boolean if a field has been set.

### GetKey

`func (o *LoadaccountstaskTaskMessagesInner) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *LoadaccountstaskTaskMessagesInner) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *LoadaccountstaskTaskMessagesInner) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *LoadaccountstaskTaskMessagesInner) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetLocalizedText

`func (o *LoadaccountstaskTaskMessagesInner) GetLocalizedText() string`

GetLocalizedText returns the LocalizedText field if non-nil, zero value otherwise.

### GetLocalizedTextOk

`func (o *LoadaccountstaskTaskMessagesInner) GetLocalizedTextOk() (*string, bool)`

GetLocalizedTextOk returns a tuple with the LocalizedText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocalizedText

`func (o *LoadaccountstaskTaskMessagesInner) SetLocalizedText(v string)`

SetLocalizedText sets LocalizedText field to given value.

### HasLocalizedText

`func (o *LoadaccountstaskTaskMessagesInner) HasLocalizedText() bool`

HasLocalizedText returns a boolean if a field has been set.


