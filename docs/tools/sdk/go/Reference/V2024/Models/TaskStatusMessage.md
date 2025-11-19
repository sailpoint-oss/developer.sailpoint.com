---
id: v2024-task-status-message
title: TaskStatusMessage
pagination_label: TaskStatusMessage
sidebar_label: TaskStatusMessage
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TaskStatusMessage', 'V2024TaskStatusMessage'] 
slug: /tools/sdk/go/v2024/models/task-status-message
tags: ['SDK', 'Software Development Kit', 'TaskStatusMessage', 'V2024TaskStatusMessage']
---

# TaskStatusMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Type of the message | 
**LocalizedText** | [**NullableLocalizedMessage**](localized-message) |  | 
**Key** | **string** | Key of the message | 
**Parameters** | [**[]TaskStatusMessageParametersInner**](task-status-message-parameters-inner) | Message parameters for internationalization | 

## Methods

### NewTaskStatusMessage

`func NewTaskStatusMessage(type_ string, localizedText NullableLocalizedMessage, key string, parameters []TaskStatusMessageParametersInner, ) *TaskStatusMessage`

NewTaskStatusMessage instantiates a new TaskStatusMessage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskStatusMessageWithDefaults

`func NewTaskStatusMessageWithDefaults() *TaskStatusMessage`

NewTaskStatusMessageWithDefaults instantiates a new TaskStatusMessage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *TaskStatusMessage) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TaskStatusMessage) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TaskStatusMessage) SetType(v string)`

SetType sets Type field to given value.


### GetLocalizedText

`func (o *TaskStatusMessage) GetLocalizedText() LocalizedMessage`

GetLocalizedText returns the LocalizedText field if non-nil, zero value otherwise.

### GetLocalizedTextOk

`func (o *TaskStatusMessage) GetLocalizedTextOk() (*LocalizedMessage, bool)`

GetLocalizedTextOk returns a tuple with the LocalizedText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocalizedText

`func (o *TaskStatusMessage) SetLocalizedText(v LocalizedMessage)`

SetLocalizedText sets LocalizedText field to given value.


### SetLocalizedTextNil

`func (o *TaskStatusMessage) SetLocalizedTextNil(b bool)`

 SetLocalizedTextNil sets the value for LocalizedText to be an explicit nil

### UnsetLocalizedText
`func (o *TaskStatusMessage) UnsetLocalizedText()`

UnsetLocalizedText ensures that no value is present for LocalizedText, not even an explicit nil
### GetKey

`func (o *TaskStatusMessage) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *TaskStatusMessage) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *TaskStatusMessage) SetKey(v string)`

SetKey sets Key field to given value.


### GetParameters

`func (o *TaskStatusMessage) GetParameters() []TaskStatusMessageParametersInner`

GetParameters returns the Parameters field if non-nil, zero value otherwise.

### GetParametersOk

`func (o *TaskStatusMessage) GetParametersOk() (*[]TaskStatusMessageParametersInner, bool)`

GetParametersOk returns a tuple with the Parameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameters

`func (o *TaskStatusMessage) SetParameters(v []TaskStatusMessageParametersInner)`

SetParameters sets Parameters field to given value.


### SetParametersNil

`func (o *TaskStatusMessage) SetParametersNil(b bool)`

 SetParametersNil sets the value for Parameters to be an explicit nil

### UnsetParameters
`func (o *TaskStatusMessage) UnsetParameters()`

UnsetParameters ensures that no value is present for Parameters, not even an explicit nil

