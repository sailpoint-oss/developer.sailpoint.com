---
id: v1-create-workflow-v1-request
title: CreateWorkflowV1Request
pagination_label: CreateWorkflowV1Request
sidebar_label: CreateWorkflowV1Request
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateWorkflowV1Request', 'V1CreateWorkflowV1Request'] 
slug: /tools/sdk/go/workflows/models/create-workflow-v1-request
tags: ['SDK', 'Software Development Kit', 'CreateWorkflowV1Request', 'V1CreateWorkflowV1Request']
---

# CreateWorkflowV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the workflow | 
**Owner** | Pointer to [**WorkflowbodyOwner**](workflowbody-owner) |  | [optional] 
**Description** | Pointer to **string** | Description of what the workflow accomplishes | [optional] 
**Definition** | Pointer to [**Workflowdefinition**](workflowdefinition) |  | [optional] 
**Enabled** | Pointer to **bool** | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [optional] [default to false]
**Trigger** | Pointer to [**Workflowtrigger**](workflowtrigger) |  | [optional] 

## Methods

### NewCreateWorkflowV1Request

`func NewCreateWorkflowV1Request(name string, ) *CreateWorkflowV1Request`

NewCreateWorkflowV1Request instantiates a new CreateWorkflowV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateWorkflowV1RequestWithDefaults

`func NewCreateWorkflowV1RequestWithDefaults() *CreateWorkflowV1Request`

NewCreateWorkflowV1RequestWithDefaults instantiates a new CreateWorkflowV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CreateWorkflowV1Request) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateWorkflowV1Request) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateWorkflowV1Request) SetName(v string)`

SetName sets Name field to given value.


### GetOwner

`func (o *CreateWorkflowV1Request) GetOwner() WorkflowbodyOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *CreateWorkflowV1Request) GetOwnerOk() (*WorkflowbodyOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *CreateWorkflowV1Request) SetOwner(v WorkflowbodyOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *CreateWorkflowV1Request) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetDescription

`func (o *CreateWorkflowV1Request) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateWorkflowV1Request) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateWorkflowV1Request) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CreateWorkflowV1Request) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDefinition

`func (o *CreateWorkflowV1Request) GetDefinition() Workflowdefinition`

GetDefinition returns the Definition field if non-nil, zero value otherwise.

### GetDefinitionOk

`func (o *CreateWorkflowV1Request) GetDefinitionOk() (*Workflowdefinition, bool)`

GetDefinitionOk returns a tuple with the Definition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefinition

`func (o *CreateWorkflowV1Request) SetDefinition(v Workflowdefinition)`

SetDefinition sets Definition field to given value.

### HasDefinition

`func (o *CreateWorkflowV1Request) HasDefinition() bool`

HasDefinition returns a boolean if a field has been set.

### GetEnabled

`func (o *CreateWorkflowV1Request) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *CreateWorkflowV1Request) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *CreateWorkflowV1Request) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *CreateWorkflowV1Request) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetTrigger

`func (o *CreateWorkflowV1Request) GetTrigger() Workflowtrigger`

GetTrigger returns the Trigger field if non-nil, zero value otherwise.

### GetTriggerOk

`func (o *CreateWorkflowV1Request) GetTriggerOk() (*Workflowtrigger, bool)`

GetTriggerOk returns a tuple with the Trigger field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrigger

`func (o *CreateWorkflowV1Request) SetTrigger(v Workflowtrigger)`

SetTrigger sets Trigger field to given value.

### HasTrigger

`func (o *CreateWorkflowV1Request) HasTrigger() bool`

HasTrigger returns a boolean if a field has been set.


