---
id: v1-loaduncorrelatedaccountstask-task-messages-inner
title: LoaduncorrelatedaccountstaskTaskMessagesInner
pagination_label: LoaduncorrelatedaccountstaskTaskMessagesInner
sidebar_label: LoaduncorrelatedaccountstaskTaskMessagesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LoaduncorrelatedaccountstaskTaskMessagesInner', 'V1LoaduncorrelatedaccountstaskTaskMessagesInner'] 
slug: /tools/sdk/go/sources/models/loaduncorrelatedaccountstask-task-messages-inner
tags: ['SDK', 'Software Development Kit', 'LoaduncorrelatedaccountstaskTaskMessagesInner', 'V1LoaduncorrelatedaccountstaskTaskMessagesInner']
---

# LoaduncorrelatedaccountstaskTaskMessagesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Type of the message. | [optional] 
**Error** | Pointer to **bool** | Flag whether message is an error. | [optional] [default to false]
**Warning** | Pointer to **bool** | Flag whether message is a warning. | [optional] [default to false]
**Key** | Pointer to **string** | Message string identifier. | [optional] 
**LocalizedText** | Pointer to **string** | Message context with the locale based language. | [optional] 

## Methods

### NewLoaduncorrelatedaccountstaskTaskMessagesInner

`func NewLoaduncorrelatedaccountstaskTaskMessagesInner() *LoaduncorrelatedaccountstaskTaskMessagesInner`

NewLoaduncorrelatedaccountstaskTaskMessagesInner instantiates a new LoaduncorrelatedaccountstaskTaskMessagesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLoaduncorrelatedaccountstaskTaskMessagesInnerWithDefaults

`func NewLoaduncorrelatedaccountstaskTaskMessagesInnerWithDefaults() *LoaduncorrelatedaccountstaskTaskMessagesInner`

NewLoaduncorrelatedaccountstaskTaskMessagesInnerWithDefaults instantiates a new LoaduncorrelatedaccountstaskTaskMessagesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *LoaduncorrelatedaccountstaskTaskMessagesInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *LoaduncorrelatedaccountstaskTaskMessagesInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *LoaduncorrelatedaccountstaskTaskMessagesInner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *LoaduncorrelatedaccountstaskTaskMessagesInner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetError

`func (o *LoaduncorrelatedaccountstaskTaskMessagesInner) GetError() bool`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *LoaduncorrelatedaccountstaskTaskMessagesInner) GetErrorOk() (*bool, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *LoaduncorrelatedaccountstaskTaskMessagesInner) SetError(v bool)`

SetError sets Error field to given value.

### HasError

`func (o *LoaduncorrelatedaccountstaskTaskMessagesInner) HasError() bool`

HasError returns a boolean if a field has been set.

### GetWarning

`func (o *LoaduncorrelatedaccountstaskTaskMessagesInner) GetWarning() bool`

GetWarning returns the Warning field if non-nil, zero value otherwise.

### GetWarningOk

`func (o *LoaduncorrelatedaccountstaskTaskMessagesInner) GetWarningOk() (*bool, bool)`

GetWarningOk returns a tuple with the Warning field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarning

`func (o *LoaduncorrelatedaccountstaskTaskMessagesInner) SetWarning(v bool)`

SetWarning sets Warning field to given value.

### HasWarning

`func (o *LoaduncorrelatedaccountstaskTaskMessagesInner) HasWarning() bool`

HasWarning returns a boolean if a field has been set.

### GetKey

`func (o *LoaduncorrelatedaccountstaskTaskMessagesInner) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *LoaduncorrelatedaccountstaskTaskMessagesInner) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *LoaduncorrelatedaccountstaskTaskMessagesInner) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *LoaduncorrelatedaccountstaskTaskMessagesInner) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetLocalizedText

`func (o *LoaduncorrelatedaccountstaskTaskMessagesInner) GetLocalizedText() string`

GetLocalizedText returns the LocalizedText field if non-nil, zero value otherwise.

### GetLocalizedTextOk

`func (o *LoaduncorrelatedaccountstaskTaskMessagesInner) GetLocalizedTextOk() (*string, bool)`

GetLocalizedTextOk returns a tuple with the LocalizedText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocalizedText

`func (o *LoaduncorrelatedaccountstaskTaskMessagesInner) SetLocalizedText(v string)`

SetLocalizedText sets LocalizedText field to given value.

### HasLocalizedText

`func (o *LoaduncorrelatedaccountstaskTaskMessagesInner) HasLocalizedText() bool`

HasLocalizedText returns a boolean if a field has been set.


