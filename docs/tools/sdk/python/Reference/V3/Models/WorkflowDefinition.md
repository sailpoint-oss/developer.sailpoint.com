---
id: workflow-definition
title: WorkflowDefinition
pagination_label: WorkflowDefinition
sidebar_label: WorkflowDefinition
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkflowDefinition', 'WorkflowDefinition'] 
slug: /tools/sdk/go/v3/models/workflow-definition
tags: ['SDK', 'Software Development Kit', 'WorkflowDefinition', 'WorkflowDefinition']
---

# WorkflowDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Start** | Pointer to **string** | The name of the starting step. | [optional] 
**Steps** | Pointer to **map[string]interface{}** | One or more step objects that comprise this workflow.  Please see the Workflow documentation to see the JSON schema for each step type. | [optional] 

## Methods

### NewWorkflowDefinition

`func NewWorkflowDefinition() *WorkflowDefinition`

NewWorkflowDefinition instantiates a new WorkflowDefinition object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowDefinitionWithDefaults

`func NewWorkflowDefinitionWithDefaults() *WorkflowDefinition`

NewWorkflowDefinitionWithDefaults instantiates a new WorkflowDefinition object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStart

`func (o *WorkflowDefinition) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *WorkflowDefinition) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *WorkflowDefinition) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *WorkflowDefinition) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetSteps

`func (o *WorkflowDefinition) GetSteps() map[string]interface{}`

GetSteps returns the Steps field if non-nil, zero value otherwise.

### GetStepsOk

`func (o *WorkflowDefinition) GetStepsOk() (*map[string]interface{}, bool)`

GetStepsOk returns a tuple with the Steps field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSteps

`func (o *WorkflowDefinition) SetSteps(v map[string]interface{})`

SetSteps sets Steps field to given value.

### HasSteps

`func (o *WorkflowDefinition) HasSteps() bool`

HasSteps returns a boolean if a field has been set.


