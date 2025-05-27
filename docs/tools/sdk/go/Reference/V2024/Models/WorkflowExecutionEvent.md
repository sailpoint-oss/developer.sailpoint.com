---
id: v2024-workflow-execution-event
title: WorkflowExecutionEvent
pagination_label: WorkflowExecutionEvent
sidebar_label: WorkflowExecutionEvent
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkflowExecutionEvent', 'V2024WorkflowExecutionEvent'] 
slug: /tools/sdk/go/v2024/models/workflow-execution-event
tags: ['SDK', 'Software Development Kit', 'WorkflowExecutionEvent', 'V2024WorkflowExecutionEvent']
---

# WorkflowExecutionEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The type of event | [optional] 
**Timestamp** | Pointer to **SailPointTime** | The date-time when the event occurred | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | Additional attributes associated with the event | [optional] 

## Methods

### NewWorkflowExecutionEvent

`func NewWorkflowExecutionEvent() *WorkflowExecutionEvent`

NewWorkflowExecutionEvent instantiates a new WorkflowExecutionEvent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowExecutionEventWithDefaults

`func NewWorkflowExecutionEventWithDefaults() *WorkflowExecutionEvent`

NewWorkflowExecutionEventWithDefaults instantiates a new WorkflowExecutionEvent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *WorkflowExecutionEvent) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *WorkflowExecutionEvent) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *WorkflowExecutionEvent) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *WorkflowExecutionEvent) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTimestamp

`func (o *WorkflowExecutionEvent) GetTimestamp() SailPointTime`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *WorkflowExecutionEvent) GetTimestampOk() (*SailPointTime, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *WorkflowExecutionEvent) SetTimestamp(v SailPointTime)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *WorkflowExecutionEvent) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.

### GetAttributes

`func (o *WorkflowExecutionEvent) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *WorkflowExecutionEvent) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *WorkflowExecutionEvent) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *WorkflowExecutionEvent) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.


