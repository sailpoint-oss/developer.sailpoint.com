---
id: v2024-task-result-details-messages-inner
title: TaskResultDetailsMessagesInner
pagination_label: TaskResultDetailsMessagesInner
sidebar_label: TaskResultDetailsMessagesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TaskResultDetailsMessagesInner', 'V2024TaskResultDetailsMessagesInner'] 
slug: /tools/sdk/go/v2024/models/task-result-details-messages-inner
tags: ['SDK', 'Software Development Kit', 'TaskResultDetailsMessagesInner', 'V2024TaskResultDetailsMessagesInner']
---

# TaskResultDetailsMessagesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Type of the message. | [optional] 
**Error** | Pointer to **bool** | Flag whether message is an error. | [optional] [default to false]
**Warning** | Pointer to **bool** | Flag whether message is a warning. | [optional] [default to false]
**Key** | Pointer to **string** | Message string identifier. | [optional] 
**LocalizedText** | Pointer to **string** | Message context with the locale based language. | [optional] 

## Methods

### NewTaskResultDetailsMessagesInner

`func NewTaskResultDetailsMessagesInner() *TaskResultDetailsMessagesInner`

NewTaskResultDetailsMessagesInner instantiates a new TaskResultDetailsMessagesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskResultDetailsMessagesInnerWithDefaults

`func NewTaskResultDetailsMessagesInnerWithDefaults() *TaskResultDetailsMessagesInner`

NewTaskResultDetailsMessagesInnerWithDefaults instantiates a new TaskResultDetailsMessagesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *TaskResultDetailsMessagesInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TaskResultDetailsMessagesInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TaskResultDetailsMessagesInner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *TaskResultDetailsMessagesInner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetError

`func (o *TaskResultDetailsMessagesInner) GetError() bool`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *TaskResultDetailsMessagesInner) GetErrorOk() (*bool, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *TaskResultDetailsMessagesInner) SetError(v bool)`

SetError sets Error field to given value.

### HasError

`func (o *TaskResultDetailsMessagesInner) HasError() bool`

HasError returns a boolean if a field has been set.

### GetWarning

`func (o *TaskResultDetailsMessagesInner) GetWarning() bool`

GetWarning returns the Warning field if non-nil, zero value otherwise.

### GetWarningOk

`func (o *TaskResultDetailsMessagesInner) GetWarningOk() (*bool, bool)`

GetWarningOk returns a tuple with the Warning field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarning

`func (o *TaskResultDetailsMessagesInner) SetWarning(v bool)`

SetWarning sets Warning field to given value.

### HasWarning

`func (o *TaskResultDetailsMessagesInner) HasWarning() bool`

HasWarning returns a boolean if a field has been set.

### GetKey

`func (o *TaskResultDetailsMessagesInner) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *TaskResultDetailsMessagesInner) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *TaskResultDetailsMessagesInner) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *TaskResultDetailsMessagesInner) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetLocalizedText

`func (o *TaskResultDetailsMessagesInner) GetLocalizedText() string`

GetLocalizedText returns the LocalizedText field if non-nil, zero value otherwise.

### GetLocalizedTextOk

`func (o *TaskResultDetailsMessagesInner) GetLocalizedTextOk() (*string, bool)`

GetLocalizedTextOk returns a tuple with the LocalizedText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocalizedText

`func (o *TaskResultDetailsMessagesInner) SetLocalizedText(v string)`

SetLocalizedText sets LocalizedText field to given value.

### HasLocalizedText

`func (o *TaskResultDetailsMessagesInner) HasLocalizedText() bool`

HasLocalizedText returns a boolean if a field has been set.


