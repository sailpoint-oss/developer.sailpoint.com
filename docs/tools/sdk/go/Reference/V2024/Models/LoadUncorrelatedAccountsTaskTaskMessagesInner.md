---
id: v2024-load-uncorrelated-accounts-task-task-messages-inner
title: LoadUncorrelatedAccountsTaskTaskMessagesInner
pagination_label: LoadUncorrelatedAccountsTaskTaskMessagesInner
sidebar_label: LoadUncorrelatedAccountsTaskTaskMessagesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LoadUncorrelatedAccountsTaskTaskMessagesInner', 'V2024LoadUncorrelatedAccountsTaskTaskMessagesInner'] 
slug: /tools/sdk/go/v2024/models/load-uncorrelated-accounts-task-task-messages-inner
tags: ['SDK', 'Software Development Kit', 'LoadUncorrelatedAccountsTaskTaskMessagesInner', 'V2024LoadUncorrelatedAccountsTaskTaskMessagesInner']
---

# LoadUncorrelatedAccountsTaskTaskMessagesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Type of the message. | [optional] 
**Error** | Pointer to **bool** | Flag whether message is an error. | [optional] [default to false]
**Warning** | Pointer to **bool** | Flag whether message is a warning. | [optional] [default to false]
**Key** | Pointer to **string** | Message string identifier. | [optional] 
**LocalizedText** | Pointer to **string** | Message context with the locale based language. | [optional] 

## Methods

### NewLoadUncorrelatedAccountsTaskTaskMessagesInner

`func NewLoadUncorrelatedAccountsTaskTaskMessagesInner() *LoadUncorrelatedAccountsTaskTaskMessagesInner`

NewLoadUncorrelatedAccountsTaskTaskMessagesInner instantiates a new LoadUncorrelatedAccountsTaskTaskMessagesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLoadUncorrelatedAccountsTaskTaskMessagesInnerWithDefaults

`func NewLoadUncorrelatedAccountsTaskTaskMessagesInnerWithDefaults() *LoadUncorrelatedAccountsTaskTaskMessagesInner`

NewLoadUncorrelatedAccountsTaskTaskMessagesInnerWithDefaults instantiates a new LoadUncorrelatedAccountsTaskTaskMessagesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *LoadUncorrelatedAccountsTaskTaskMessagesInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *LoadUncorrelatedAccountsTaskTaskMessagesInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *LoadUncorrelatedAccountsTaskTaskMessagesInner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *LoadUncorrelatedAccountsTaskTaskMessagesInner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetError

`func (o *LoadUncorrelatedAccountsTaskTaskMessagesInner) GetError() bool`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *LoadUncorrelatedAccountsTaskTaskMessagesInner) GetErrorOk() (*bool, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *LoadUncorrelatedAccountsTaskTaskMessagesInner) SetError(v bool)`

SetError sets Error field to given value.

### HasError

`func (o *LoadUncorrelatedAccountsTaskTaskMessagesInner) HasError() bool`

HasError returns a boolean if a field has been set.

### GetWarning

`func (o *LoadUncorrelatedAccountsTaskTaskMessagesInner) GetWarning() bool`

GetWarning returns the Warning field if non-nil, zero value otherwise.

### GetWarningOk

`func (o *LoadUncorrelatedAccountsTaskTaskMessagesInner) GetWarningOk() (*bool, bool)`

GetWarningOk returns a tuple with the Warning field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarning

`func (o *LoadUncorrelatedAccountsTaskTaskMessagesInner) SetWarning(v bool)`

SetWarning sets Warning field to given value.

### HasWarning

`func (o *LoadUncorrelatedAccountsTaskTaskMessagesInner) HasWarning() bool`

HasWarning returns a boolean if a field has been set.

### GetKey

`func (o *LoadUncorrelatedAccountsTaskTaskMessagesInner) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *LoadUncorrelatedAccountsTaskTaskMessagesInner) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *LoadUncorrelatedAccountsTaskTaskMessagesInner) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *LoadUncorrelatedAccountsTaskTaskMessagesInner) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetLocalizedText

`func (o *LoadUncorrelatedAccountsTaskTaskMessagesInner) GetLocalizedText() string`

GetLocalizedText returns the LocalizedText field if non-nil, zero value otherwise.

### GetLocalizedTextOk

`func (o *LoadUncorrelatedAccountsTaskTaskMessagesInner) GetLocalizedTextOk() (*string, bool)`

GetLocalizedTextOk returns a tuple with the LocalizedText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocalizedText

`func (o *LoadUncorrelatedAccountsTaskTaskMessagesInner) SetLocalizedText(v string)`

SetLocalizedText sets LocalizedText field to given value.

### HasLocalizedText

`func (o *LoadUncorrelatedAccountsTaskTaskMessagesInner) HasLocalizedText() bool`

HasLocalizedText returns a boolean if a field has been set.


