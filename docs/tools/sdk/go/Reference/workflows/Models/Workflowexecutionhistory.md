---
id: v1-workflowexecutionhistory
title: Workflowexecutionhistory
pagination_label: Workflowexecutionhistory
sidebar_label: Workflowexecutionhistory
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Workflowexecutionhistory', 'V1Workflowexecutionhistory'] 
slug: /tools/sdk/go/workflows/models/workflowexecutionhistory
tags: ['SDK', 'Software Development Kit', 'Workflowexecutionhistory', 'V1Workflowexecutionhistory']
---

# Workflowexecutionhistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Definition** | Pointer to **map[string]interface{}** |  | [optional] 
**History** | Pointer to **map[string]interface{}** |  | [optional] 
**Trigger** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewWorkflowexecutionhistory

`func NewWorkflowexecutionhistory() *Workflowexecutionhistory`

NewWorkflowexecutionhistory instantiates a new Workflowexecutionhistory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowexecutionhistoryWithDefaults

`func NewWorkflowexecutionhistoryWithDefaults() *Workflowexecutionhistory`

NewWorkflowexecutionhistoryWithDefaults instantiates a new Workflowexecutionhistory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDefinition

`func (o *Workflowexecutionhistory) GetDefinition() map[string]interface{}`

GetDefinition returns the Definition field if non-nil, zero value otherwise.

### GetDefinitionOk

`func (o *Workflowexecutionhistory) GetDefinitionOk() (*map[string]interface{}, bool)`

GetDefinitionOk returns a tuple with the Definition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefinition

`func (o *Workflowexecutionhistory) SetDefinition(v map[string]interface{})`

SetDefinition sets Definition field to given value.

### HasDefinition

`func (o *Workflowexecutionhistory) HasDefinition() bool`

HasDefinition returns a boolean if a field has been set.

### GetHistory

`func (o *Workflowexecutionhistory) GetHistory() map[string]interface{}`

GetHistory returns the History field if non-nil, zero value otherwise.

### GetHistoryOk

`func (o *Workflowexecutionhistory) GetHistoryOk() (*map[string]interface{}, bool)`

GetHistoryOk returns a tuple with the History field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHistory

`func (o *Workflowexecutionhistory) SetHistory(v map[string]interface{})`

SetHistory sets History field to given value.

### HasHistory

`func (o *Workflowexecutionhistory) HasHistory() bool`

HasHistory returns a boolean if a field has been set.

### GetTrigger

`func (o *Workflowexecutionhistory) GetTrigger() map[string]interface{}`

GetTrigger returns the Trigger field if non-nil, zero value otherwise.

### GetTriggerOk

`func (o *Workflowexecutionhistory) GetTriggerOk() (*map[string]interface{}, bool)`

GetTriggerOk returns a tuple with the Trigger field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrigger

`func (o *Workflowexecutionhistory) SetTrigger(v map[string]interface{})`

SetTrigger sets Trigger field to given value.

### HasTrigger

`func (o *Workflowexecutionhistory) HasTrigger() bool`

HasTrigger returns a boolean if a field has been set.


