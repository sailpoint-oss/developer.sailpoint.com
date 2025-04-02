---
id: start-invocation-input
title: StartInvocationInput
pagination_label: StartInvocationInput
sidebar_label: StartInvocationInput
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'StartInvocationInput', 'StartInvocationInput'] 
slug: /tools/sdk/go//models/start-invocation-input
tags: ['SDK', 'Software Development Kit', 'StartInvocationInput', 'StartInvocationInput']
---

# StartInvocationInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TriggerId** | Pointer to **string** | Trigger ID | [optional] 
**Input** | Pointer to **map[string]interface{}** | Trigger input payload. Its schema is defined in the trigger definition. | [optional] 
**ContentJson** | Pointer to **map[string]interface{}** | JSON map of invocation metadata | [optional] 

## Methods

### NewStartInvocationInput

`func NewStartInvocationInput() *StartInvocationInput`

NewStartInvocationInput instantiates a new StartInvocationInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStartInvocationInputWithDefaults

`func NewStartInvocationInputWithDefaults() *StartInvocationInput`

NewStartInvocationInputWithDefaults instantiates a new StartInvocationInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTriggerId

`func (o *StartInvocationInput) GetTriggerId() string`

GetTriggerId returns the TriggerId field if non-nil, zero value otherwise.

### GetTriggerIdOk

`func (o *StartInvocationInput) GetTriggerIdOk() (*string, bool)`

GetTriggerIdOk returns a tuple with the TriggerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTriggerId

`func (o *StartInvocationInput) SetTriggerId(v string)`

SetTriggerId sets TriggerId field to given value.

### HasTriggerId

`func (o *StartInvocationInput) HasTriggerId() bool`

HasTriggerId returns a boolean if a field has been set.

### GetInput

`func (o *StartInvocationInput) GetInput() map[string]interface{}`

GetInput returns the Input field if non-nil, zero value otherwise.

### GetInputOk

`func (o *StartInvocationInput) GetInputOk() (*map[string]interface{}, bool)`

GetInputOk returns a tuple with the Input field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInput

`func (o *StartInvocationInput) SetInput(v map[string]interface{})`

SetInput sets Input field to given value.

### HasInput

`func (o *StartInvocationInput) HasInput() bool`

HasInput returns a boolean if a field has been set.

### GetContentJson

`func (o *StartInvocationInput) GetContentJson() map[string]interface{}`

GetContentJson returns the ContentJson field if non-nil, zero value otherwise.

### GetContentJsonOk

`func (o *StartInvocationInput) GetContentJsonOk() (*map[string]interface{}, bool)`

GetContentJsonOk returns a tuple with the ContentJson field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentJson

`func (o *StartInvocationInput) SetContentJson(v map[string]interface{})`

SetContentJson sets ContentJson field to given value.

### HasContentJson

`func (o *StartInvocationInput) HasContentJson() bool`

HasContentJson returns a boolean if a field has been set.


