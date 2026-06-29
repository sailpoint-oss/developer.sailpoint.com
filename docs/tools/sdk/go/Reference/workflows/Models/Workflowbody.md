---
id: v1-workflowbody
title: Workflowbody
pagination_label: Workflowbody
sidebar_label: Workflowbody
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Workflowbody', 'V1Workflowbody'] 
slug: /tools/sdk/go/workflows/models/workflowbody
tags: ['SDK', 'Software Development Kit', 'Workflowbody', 'V1Workflowbody']
---

# Workflowbody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The name of the workflow | [optional] 
**Owner** | Pointer to [**WorkflowbodyOwner**](workflowbody-owner) |  | [optional] 
**Description** | Pointer to **string** | Description of what the workflow accomplishes | [optional] 
**Definition** | Pointer to [**Workflowdefinition**](workflowdefinition) |  | [optional] 
**Enabled** | Pointer to **bool** | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [optional] [default to false]
**Trigger** | Pointer to [**Workflowtrigger**](workflowtrigger) |  | [optional] 

## Methods

### NewWorkflowbody

`func NewWorkflowbody() *Workflowbody`

NewWorkflowbody instantiates a new Workflowbody object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowbodyWithDefaults

`func NewWorkflowbodyWithDefaults() *Workflowbody`

NewWorkflowbodyWithDefaults instantiates a new Workflowbody object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Workflowbody) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Workflowbody) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Workflowbody) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Workflowbody) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOwner

`func (o *Workflowbody) GetOwner() WorkflowbodyOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Workflowbody) GetOwnerOk() (*WorkflowbodyOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Workflowbody) SetOwner(v WorkflowbodyOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Workflowbody) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetDescription

`func (o *Workflowbody) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Workflowbody) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Workflowbody) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Workflowbody) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDefinition

`func (o *Workflowbody) GetDefinition() Workflowdefinition`

GetDefinition returns the Definition field if non-nil, zero value otherwise.

### GetDefinitionOk

`func (o *Workflowbody) GetDefinitionOk() (*Workflowdefinition, bool)`

GetDefinitionOk returns a tuple with the Definition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefinition

`func (o *Workflowbody) SetDefinition(v Workflowdefinition)`

SetDefinition sets Definition field to given value.

### HasDefinition

`func (o *Workflowbody) HasDefinition() bool`

HasDefinition returns a boolean if a field has been set.

### GetEnabled

`func (o *Workflowbody) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Workflowbody) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Workflowbody) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Workflowbody) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetTrigger

`func (o *Workflowbody) GetTrigger() Workflowtrigger`

GetTrigger returns the Trigger field if non-nil, zero value otherwise.

### GetTriggerOk

`func (o *Workflowbody) GetTriggerOk() (*Workflowtrigger, bool)`

GetTriggerOk returns a tuple with the Trigger field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrigger

`func (o *Workflowbody) SetTrigger(v Workflowtrigger)`

SetTrigger sets Trigger field to given value.

### HasTrigger

`func (o *Workflowbody) HasTrigger() bool`

HasTrigger returns a boolean if a field has been set.


