---
id: beta-create-workflow-request
title: CreateWorkflowRequest
pagination_label: CreateWorkflowRequest
sidebar_label: CreateWorkflowRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateWorkflowRequest', 'BetaCreateWorkflowRequest'] 
slug: /tools/sdk/go/beta/models/create-workflow-request
tags: ['SDK', 'Software Development Kit', 'CreateWorkflowRequest', 'BetaCreateWorkflowRequest']
---

# CreateWorkflowRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the workflow | 
**Owner** | [**WorkflowBodyOwner**](workflow-body-owner) |  | 
**Description** | Pointer to **string** | Description of what the workflow accomplishes | [optional] 
**Definition** | Pointer to [**WorkflowDefinition**](workflow-definition) |  | [optional] 
**Enabled** | Pointer to **bool** | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [optional] [default to false]
**Trigger** | Pointer to [**WorkflowTrigger**](workflow-trigger) |  | [optional] 

## Methods

### NewCreateWorkflowRequest

`func NewCreateWorkflowRequest(name string, owner WorkflowBodyOwner, ) *CreateWorkflowRequest`

NewCreateWorkflowRequest instantiates a new CreateWorkflowRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateWorkflowRequestWithDefaults

`func NewCreateWorkflowRequestWithDefaults() *CreateWorkflowRequest`

NewCreateWorkflowRequestWithDefaults instantiates a new CreateWorkflowRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CreateWorkflowRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateWorkflowRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateWorkflowRequest) SetName(v string)`

SetName sets Name field to given value.


### GetOwner

`func (o *CreateWorkflowRequest) GetOwner() WorkflowBodyOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *CreateWorkflowRequest) GetOwnerOk() (*WorkflowBodyOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *CreateWorkflowRequest) SetOwner(v WorkflowBodyOwner)`

SetOwner sets Owner field to given value.


### GetDescription

`func (o *CreateWorkflowRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateWorkflowRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateWorkflowRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CreateWorkflowRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDefinition

`func (o *CreateWorkflowRequest) GetDefinition() WorkflowDefinition`

GetDefinition returns the Definition field if non-nil, zero value otherwise.

### GetDefinitionOk

`func (o *CreateWorkflowRequest) GetDefinitionOk() (*WorkflowDefinition, bool)`

GetDefinitionOk returns a tuple with the Definition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefinition

`func (o *CreateWorkflowRequest) SetDefinition(v WorkflowDefinition)`

SetDefinition sets Definition field to given value.

### HasDefinition

`func (o *CreateWorkflowRequest) HasDefinition() bool`

HasDefinition returns a boolean if a field has been set.

### GetEnabled

`func (o *CreateWorkflowRequest) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *CreateWorkflowRequest) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *CreateWorkflowRequest) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *CreateWorkflowRequest) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetTrigger

`func (o *CreateWorkflowRequest) GetTrigger() WorkflowTrigger`

GetTrigger returns the Trigger field if non-nil, zero value otherwise.

### GetTriggerOk

`func (o *CreateWorkflowRequest) GetTriggerOk() (*WorkflowTrigger, bool)`

GetTriggerOk returns a tuple with the Trigger field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrigger

`func (o *CreateWorkflowRequest) SetTrigger(v WorkflowTrigger)`

SetTrigger sets Trigger field to given value.

### HasTrigger

`func (o *CreateWorkflowRequest) HasTrigger() bool`

HasTrigger returns a boolean if a field has been set.


