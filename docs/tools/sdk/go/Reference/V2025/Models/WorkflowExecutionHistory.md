---
id: v2025-workflow-execution-history
title: WorkflowExecutionHistory
pagination_label: WorkflowExecutionHistory
sidebar_label: WorkflowExecutionHistory
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkflowExecutionHistory', 'V2025WorkflowExecutionHistory'] 
slug: /tools/sdk/go/v2025/models/workflow-execution-history
tags: ['SDK', 'Software Development Kit', 'WorkflowExecutionHistory', 'V2025WorkflowExecutionHistory']
---

# WorkflowExecutionHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Definition** | Pointer to **map[string]interface{}** | The workflow definition for the workflow execution | [optional] 
**History** | Pointer to **map[string]interface{}** | List of workflow execution events for the given workflow execution | [optional] 
**Trigger** | Pointer to **map[string]interface{}** | The trigger that initiated the workflow execution | [optional] 

## Methods

### NewWorkflowExecutionHistory

`func NewWorkflowExecutionHistory() *WorkflowExecutionHistory`

NewWorkflowExecutionHistory instantiates a new WorkflowExecutionHistory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowExecutionHistoryWithDefaults

`func NewWorkflowExecutionHistoryWithDefaults() *WorkflowExecutionHistory`

NewWorkflowExecutionHistoryWithDefaults instantiates a new WorkflowExecutionHistory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDefinition

`func (o *WorkflowExecutionHistory) GetDefinition() map[string]interface{}`

GetDefinition returns the Definition field if non-nil, zero value otherwise.

### GetDefinitionOk

`func (o *WorkflowExecutionHistory) GetDefinitionOk() (*map[string]interface{}, bool)`

GetDefinitionOk returns a tuple with the Definition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefinition

`func (o *WorkflowExecutionHistory) SetDefinition(v map[string]interface{})`

SetDefinition sets Definition field to given value.

### HasDefinition

`func (o *WorkflowExecutionHistory) HasDefinition() bool`

HasDefinition returns a boolean if a field has been set.

### GetHistory

`func (o *WorkflowExecutionHistory) GetHistory() map[string]interface{}`

GetHistory returns the History field if non-nil, zero value otherwise.

### GetHistoryOk

`func (o *WorkflowExecutionHistory) GetHistoryOk() (*map[string]interface{}, bool)`

GetHistoryOk returns a tuple with the History field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHistory

`func (o *WorkflowExecutionHistory) SetHistory(v map[string]interface{})`

SetHistory sets History field to given value.

### HasHistory

`func (o *WorkflowExecutionHistory) HasHistory() bool`

HasHistory returns a boolean if a field has been set.

### GetTrigger

`func (o *WorkflowExecutionHistory) GetTrigger() map[string]interface{}`

GetTrigger returns the Trigger field if non-nil, zero value otherwise.

### GetTriggerOk

`func (o *WorkflowExecutionHistory) GetTriggerOk() (*map[string]interface{}, bool)`

GetTriggerOk returns a tuple with the Trigger field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrigger

`func (o *WorkflowExecutionHistory) SetTrigger(v map[string]interface{})`

SetTrigger sets Trigger field to given value.

### HasTrigger

`func (o *WorkflowExecutionHistory) HasTrigger() bool`

HasTrigger returns a boolean if a field has been set.


