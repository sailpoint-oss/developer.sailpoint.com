---
id: workflow-trigger
title: WorkflowTrigger
pagination_label: WorkflowTrigger
sidebar_label: WorkflowTrigger
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'WorkflowTrigger'] 
slug: /tools/sdk/go/v3/models/workflow-trigger
tags: ['SDK', 'Software Development Kit', 'WorkflowTrigger']
---

# WorkflowTrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **string** | The trigger type | 
**Attributes** |  [**WorkflowTriggerAttributes**](workflow-trigger-attributes) |  | 

## Methods

### NewWorkflowTrigger

`func NewWorkflowTrigger(type_ string, attributes WorkflowTriggerAttributes, ) *WorkflowTrigger`

NewWorkflowTrigger instantiates a new WorkflowTrigger object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowTriggerWithDefaults

`func NewWorkflowTriggerWithDefaults() *WorkflowTrigger`

NewWorkflowTriggerWithDefaults instantiates a new WorkflowTrigger object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *WorkflowTrigger) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *WorkflowTrigger) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *WorkflowTrigger) SetType(v string)`

SetType sets Type field to given value.


### GetAttributes

`func (o *WorkflowTrigger) GetAttributes() WorkflowTriggerAttributes`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *WorkflowTrigger) GetAttributesOk() (*WorkflowTriggerAttributes, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *WorkflowTrigger) SetAttributes(v WorkflowTriggerAttributes)`

SetAttributes sets Attributes field to given value.



[[Back to top]](#) 


