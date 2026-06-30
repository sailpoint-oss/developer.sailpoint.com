---
id: v1-completeinvocationinput
title: Completeinvocationinput
pagination_label: Completeinvocationinput
sidebar_label: Completeinvocationinput
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Completeinvocationinput', 'V1Completeinvocationinput'] 
slug: /tools/sdk/go/triggers/models/completeinvocationinput
tags: ['SDK', 'Software Development Kit', 'Completeinvocationinput', 'V1Completeinvocationinput']
---

# Completeinvocationinput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LocalizedError** | Pointer to [**NullableLocalizedmessage**](localizedmessage) |  | [optional] 
**Output** | Pointer to **map[string]interface{}** | Trigger output that completed the invocation. Its schema is defined in the trigger definition. | [optional] 

## Methods

### NewCompleteinvocationinput

`func NewCompleteinvocationinput() *Completeinvocationinput`

NewCompleteinvocationinput instantiates a new Completeinvocationinput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompleteinvocationinputWithDefaults

`func NewCompleteinvocationinputWithDefaults() *Completeinvocationinput`

NewCompleteinvocationinputWithDefaults instantiates a new Completeinvocationinput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLocalizedError

`func (o *Completeinvocationinput) GetLocalizedError() Localizedmessage`

GetLocalizedError returns the LocalizedError field if non-nil, zero value otherwise.

### GetLocalizedErrorOk

`func (o *Completeinvocationinput) GetLocalizedErrorOk() (*Localizedmessage, bool)`

GetLocalizedErrorOk returns a tuple with the LocalizedError field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocalizedError

`func (o *Completeinvocationinput) SetLocalizedError(v Localizedmessage)`

SetLocalizedError sets LocalizedError field to given value.

### HasLocalizedError

`func (o *Completeinvocationinput) HasLocalizedError() bool`

HasLocalizedError returns a boolean if a field has been set.

### SetLocalizedErrorNil

`func (o *Completeinvocationinput) SetLocalizedErrorNil(b bool)`

 SetLocalizedErrorNil sets the value for LocalizedError to be an explicit nil

### UnsetLocalizedError
`func (o *Completeinvocationinput) UnsetLocalizedError()`

UnsetLocalizedError ensures that no value is present for LocalizedError, not even an explicit nil
### GetOutput

`func (o *Completeinvocationinput) GetOutput() map[string]interface{}`

GetOutput returns the Output field if non-nil, zero value otherwise.

### GetOutputOk

`func (o *Completeinvocationinput) GetOutputOk() (*map[string]interface{}, bool)`

GetOutputOk returns a tuple with the Output field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutput

`func (o *Completeinvocationinput) SetOutput(v map[string]interface{})`

SetOutput sets Output field to given value.

### HasOutput

`func (o *Completeinvocationinput) HasOutput() bool`

HasOutput returns a boolean if a field has been set.

### SetOutputNil

`func (o *Completeinvocationinput) SetOutputNil(b bool)`

 SetOutputNil sets the value for Output to be an explicit nil

### UnsetOutput
`func (o *Completeinvocationinput) UnsetOutput()`

UnsetOutput ensures that no value is present for Output, not even an explicit nil

