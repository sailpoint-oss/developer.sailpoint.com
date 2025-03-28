---
id: beta-load-accounts-task-task-messages-inner
title: LoadAccountsTaskTaskMessagesInner
pagination_label: LoadAccountsTaskTaskMessagesInner
sidebar_label: LoadAccountsTaskTaskMessagesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LoadAccountsTaskTaskMessagesInner', 'BetaLoadAccountsTaskTaskMessagesInner'] 
slug: /tools/sdk/go/beta/models/load-accounts-task-task-messages-inner
tags: ['SDK', 'Software Development Kit', 'LoadAccountsTaskTaskMessagesInner', 'BetaLoadAccountsTaskTaskMessagesInner']
---

# LoadAccountsTaskTaskMessagesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Type of the message. | [optional] 
**Error** | Pointer to **bool** | Flag whether message is an error. | [optional] [default to false]
**Warning** | Pointer to **bool** | Flag whether message is a warning. | [optional] [default to false]
**Key** | Pointer to **string** | Message string identifier. | [optional] 
**LocalizedText** | Pointer to **string** | Message context with the locale based language. | [optional] 

## Methods

### NewLoadAccountsTaskTaskMessagesInner

`func NewLoadAccountsTaskTaskMessagesInner() *LoadAccountsTaskTaskMessagesInner`

NewLoadAccountsTaskTaskMessagesInner instantiates a new LoadAccountsTaskTaskMessagesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLoadAccountsTaskTaskMessagesInnerWithDefaults

`func NewLoadAccountsTaskTaskMessagesInnerWithDefaults() *LoadAccountsTaskTaskMessagesInner`

NewLoadAccountsTaskTaskMessagesInnerWithDefaults instantiates a new LoadAccountsTaskTaskMessagesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *LoadAccountsTaskTaskMessagesInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *LoadAccountsTaskTaskMessagesInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *LoadAccountsTaskTaskMessagesInner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *LoadAccountsTaskTaskMessagesInner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetError

`func (o *LoadAccountsTaskTaskMessagesInner) GetError() bool`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *LoadAccountsTaskTaskMessagesInner) GetErrorOk() (*bool, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *LoadAccountsTaskTaskMessagesInner) SetError(v bool)`

SetError sets Error field to given value.

### HasError

`func (o *LoadAccountsTaskTaskMessagesInner) HasError() bool`

HasError returns a boolean if a field has been set.

### GetWarning

`func (o *LoadAccountsTaskTaskMessagesInner) GetWarning() bool`

GetWarning returns the Warning field if non-nil, zero value otherwise.

### GetWarningOk

`func (o *LoadAccountsTaskTaskMessagesInner) GetWarningOk() (*bool, bool)`

GetWarningOk returns a tuple with the Warning field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarning

`func (o *LoadAccountsTaskTaskMessagesInner) SetWarning(v bool)`

SetWarning sets Warning field to given value.

### HasWarning

`func (o *LoadAccountsTaskTaskMessagesInner) HasWarning() bool`

HasWarning returns a boolean if a field has been set.

### GetKey

`func (o *LoadAccountsTaskTaskMessagesInner) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *LoadAccountsTaskTaskMessagesInner) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *LoadAccountsTaskTaskMessagesInner) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *LoadAccountsTaskTaskMessagesInner) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetLocalizedText

`func (o *LoadAccountsTaskTaskMessagesInner) GetLocalizedText() string`

GetLocalizedText returns the LocalizedText field if non-nil, zero value otherwise.

### GetLocalizedTextOk

`func (o *LoadAccountsTaskTaskMessagesInner) GetLocalizedTextOk() (*string, bool)`

GetLocalizedTextOk returns a tuple with the LocalizedText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocalizedText

`func (o *LoadAccountsTaskTaskMessagesInner) SetLocalizedText(v string)`

SetLocalizedText sets LocalizedText field to given value.

### HasLocalizedText

`func (o *LoadAccountsTaskTaskMessagesInner) HasLocalizedText() bool`

HasLocalizedText returns a boolean if a field has been set.


