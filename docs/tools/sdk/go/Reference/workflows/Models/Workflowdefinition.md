---
id: v1-workflowdefinition
title: Workflowdefinition
pagination_label: Workflowdefinition
sidebar_label: Workflowdefinition
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Workflowdefinition', 'V1Workflowdefinition'] 
slug: /tools/sdk/go/workflows/models/workflowdefinition
tags: ['SDK', 'Software Development Kit', 'Workflowdefinition', 'V1Workflowdefinition']
---

# Workflowdefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Start** | Pointer to **string** | The name of the starting step. | [optional] 
**Steps** | Pointer to **map[string]interface{}** | One or more step objects that comprise this workflow.  Please see the Workflow documentation to see the JSON schema for each step type. | [optional] 

## Methods

### NewWorkflowdefinition

`func NewWorkflowdefinition() *Workflowdefinition`

NewWorkflowdefinition instantiates a new Workflowdefinition object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowdefinitionWithDefaults

`func NewWorkflowdefinitionWithDefaults() *Workflowdefinition`

NewWorkflowdefinitionWithDefaults instantiates a new Workflowdefinition object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStart

`func (o *Workflowdefinition) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *Workflowdefinition) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *Workflowdefinition) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *Workflowdefinition) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetSteps

`func (o *Workflowdefinition) GetSteps() map[string]interface{}`

GetSteps returns the Steps field if non-nil, zero value otherwise.

### GetStepsOk

`func (o *Workflowdefinition) GetStepsOk() (*map[string]interface{}, bool)`

GetStepsOk returns a tuple with the Steps field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSteps

`func (o *Workflowdefinition) SetSteps(v map[string]interface{})`

SetSteps sets Steps field to given value.

### HasSteps

`func (o *Workflowdefinition) HasSteps() bool`

HasSteps returns a boolean if a field has been set.


