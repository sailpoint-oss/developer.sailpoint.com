---
id: v1-taskresultdetails-messages-inner
title: TaskresultdetailsMessagesInner
pagination_label: TaskresultdetailsMessagesInner
sidebar_label: TaskresultdetailsMessagesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TaskresultdetailsMessagesInner', 'V1TaskresultdetailsMessagesInner'] 
slug: /tools/sdk/go/reportsdataextraction/models/taskresultdetails-messages-inner
tags: ['SDK', 'Software Development Kit', 'TaskresultdetailsMessagesInner', 'V1TaskresultdetailsMessagesInner']
---

# TaskresultdetailsMessagesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Type of the message. | [optional] 
**Error** | Pointer to **bool** | Flag whether message is an error. | [optional] [default to false]
**Warning** | Pointer to **bool** | Flag whether message is a warning. | [optional] [default to false]
**Key** | Pointer to **string** | Message string identifier. | [optional] 
**LocalizedText** | Pointer to **string** | Message context with the locale based language. | [optional] 

## Methods

### NewTaskresultdetailsMessagesInner

`func NewTaskresultdetailsMessagesInner() *TaskresultdetailsMessagesInner`

NewTaskresultdetailsMessagesInner instantiates a new TaskresultdetailsMessagesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskresultdetailsMessagesInnerWithDefaults

`func NewTaskresultdetailsMessagesInnerWithDefaults() *TaskresultdetailsMessagesInner`

NewTaskresultdetailsMessagesInnerWithDefaults instantiates a new TaskresultdetailsMessagesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *TaskresultdetailsMessagesInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TaskresultdetailsMessagesInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TaskresultdetailsMessagesInner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *TaskresultdetailsMessagesInner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetError

`func (o *TaskresultdetailsMessagesInner) GetError() bool`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *TaskresultdetailsMessagesInner) GetErrorOk() (*bool, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *TaskresultdetailsMessagesInner) SetError(v bool)`

SetError sets Error field to given value.

### HasError

`func (o *TaskresultdetailsMessagesInner) HasError() bool`

HasError returns a boolean if a field has been set.

### GetWarning

`func (o *TaskresultdetailsMessagesInner) GetWarning() bool`

GetWarning returns the Warning field if non-nil, zero value otherwise.

### GetWarningOk

`func (o *TaskresultdetailsMessagesInner) GetWarningOk() (*bool, bool)`

GetWarningOk returns a tuple with the Warning field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarning

`func (o *TaskresultdetailsMessagesInner) SetWarning(v bool)`

SetWarning sets Warning field to given value.

### HasWarning

`func (o *TaskresultdetailsMessagesInner) HasWarning() bool`

HasWarning returns a boolean if a field has been set.

### GetKey

`func (o *TaskresultdetailsMessagesInner) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *TaskresultdetailsMessagesInner) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *TaskresultdetailsMessagesInner) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *TaskresultdetailsMessagesInner) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetLocalizedText

`func (o *TaskresultdetailsMessagesInner) GetLocalizedText() string`

GetLocalizedText returns the LocalizedText field if non-nil, zero value otherwise.

### GetLocalizedTextOk

`func (o *TaskresultdetailsMessagesInner) GetLocalizedTextOk() (*string, bool)`

GetLocalizedTextOk returns a tuple with the LocalizedText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocalizedText

`func (o *TaskresultdetailsMessagesInner) SetLocalizedText(v string)`

SetLocalizedText sets LocalizedText field to given value.

### HasLocalizedText

`func (o *TaskresultdetailsMessagesInner) HasLocalizedText() bool`

HasLocalizedText returns a boolean if a field has been set.


