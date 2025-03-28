---
id: beta-workflow-body
title: WorkflowBody
pagination_label: WorkflowBody
sidebar_label: WorkflowBody
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkflowBody', 'BetaWorkflowBody'] 
slug: /tools/sdk/go/beta/models/workflow-body
tags: ['SDK', 'Software Development Kit', 'WorkflowBody', 'BetaWorkflowBody']
---

# WorkflowBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The name of the workflow | [optional] 
**Owner** | Pointer to [**WorkflowBodyOwner**](workflow-body-owner) |  | [optional] 
**Description** | Pointer to **string** | Description of what the workflow accomplishes | [optional] 
**Definition** | Pointer to [**WorkflowDefinition**](workflow-definition) |  | [optional] 
**Enabled** | Pointer to **bool** | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [optional] [default to false]
**Trigger** | Pointer to [**WorkflowTrigger**](workflow-trigger) |  | [optional] 

## Methods

### NewWorkflowBody

`func NewWorkflowBody() *WorkflowBody`

NewWorkflowBody instantiates a new WorkflowBody object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowBodyWithDefaults

`func NewWorkflowBodyWithDefaults() *WorkflowBody`

NewWorkflowBodyWithDefaults instantiates a new WorkflowBody object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *WorkflowBody) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WorkflowBody) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WorkflowBody) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *WorkflowBody) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOwner

`func (o *WorkflowBody) GetOwner() WorkflowBodyOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *WorkflowBody) GetOwnerOk() (*WorkflowBodyOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *WorkflowBody) SetOwner(v WorkflowBodyOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *WorkflowBody) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetDescription

`func (o *WorkflowBody) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *WorkflowBody) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *WorkflowBody) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *WorkflowBody) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDefinition

`func (o *WorkflowBody) GetDefinition() WorkflowDefinition`

GetDefinition returns the Definition field if non-nil, zero value otherwise.

### GetDefinitionOk

`func (o *WorkflowBody) GetDefinitionOk() (*WorkflowDefinition, bool)`

GetDefinitionOk returns a tuple with the Definition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefinition

`func (o *WorkflowBody) SetDefinition(v WorkflowDefinition)`

SetDefinition sets Definition field to given value.

### HasDefinition

`func (o *WorkflowBody) HasDefinition() bool`

HasDefinition returns a boolean if a field has been set.

### GetEnabled

`func (o *WorkflowBody) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *WorkflowBody) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *WorkflowBody) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *WorkflowBody) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetTrigger

`func (o *WorkflowBody) GetTrigger() WorkflowTrigger`

GetTrigger returns the Trigger field if non-nil, zero value otherwise.

### GetTriggerOk

`func (o *WorkflowBody) GetTriggerOk() (*WorkflowTrigger, bool)`

GetTriggerOk returns a tuple with the Trigger field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrigger

`func (o *WorkflowBody) SetTrigger(v WorkflowTrigger)`

SetTrigger sets Trigger field to given value.

### HasTrigger

`func (o *WorkflowBody) HasTrigger() bool`

HasTrigger returns a boolean if a field has been set.


