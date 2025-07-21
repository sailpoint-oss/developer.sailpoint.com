---
id: beta-workflow
title: Workflow
pagination_label: Workflow
sidebar_label: Workflow
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Workflow', 'BetaWorkflow'] 
slug: /tools/sdk/go/beta/models/workflow
tags: ['SDK', 'Software Development Kit', 'Workflow', 'BetaWorkflow']
---

# Workflow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The name of the workflow | [optional] 
**Owner** | Pointer to [**WorkflowBodyOwner**](workflow-body-owner) |  | [optional] 
**Description** | Pointer to **string** | Description of what the workflow accomplishes | [optional] 
**Definition** | Pointer to [**WorkflowDefinition**](workflow-definition) |  | [optional] 
**Enabled** | Pointer to **bool** | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [optional] [default to false]
**Trigger** | Pointer to [**WorkflowTrigger**](workflow-trigger) |  | [optional] 
**Id** | Pointer to **string** | Workflow ID. This is a UUID generated upon creation. | [optional] 
**Modified** | Pointer to **SailPointTime** | The date and time the workflow was modified. | [optional] 
**ModifiedBy** | Pointer to [**WorkflowModifiedBy**](workflow-modified-by) |  | [optional] 
**ExecutionCount** | Pointer to **int32** | The number of times this workflow has been executed. | [optional] 
**FailureCount** | Pointer to **int32** | The number of times this workflow has failed during execution. | [optional] 
**Created** | Pointer to **SailPointTime** | The date and time the workflow was created. | [optional] 
**Creator** | Pointer to [**WorkflowAllOfCreator**](workflow-all-of-creator) |  | [optional] 

## Methods

### NewWorkflow

`func NewWorkflow() *Workflow`

NewWorkflow instantiates a new Workflow object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowWithDefaults

`func NewWorkflowWithDefaults() *Workflow`

NewWorkflowWithDefaults instantiates a new Workflow object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Workflow) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Workflow) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Workflow) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Workflow) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOwner

`func (o *Workflow) GetOwner() WorkflowBodyOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Workflow) GetOwnerOk() (*WorkflowBodyOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Workflow) SetOwner(v WorkflowBodyOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Workflow) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetDescription

`func (o *Workflow) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Workflow) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Workflow) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Workflow) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDefinition

`func (o *Workflow) GetDefinition() WorkflowDefinition`

GetDefinition returns the Definition field if non-nil, zero value otherwise.

### GetDefinitionOk

`func (o *Workflow) GetDefinitionOk() (*WorkflowDefinition, bool)`

GetDefinitionOk returns a tuple with the Definition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefinition

`func (o *Workflow) SetDefinition(v WorkflowDefinition)`

SetDefinition sets Definition field to given value.

### HasDefinition

`func (o *Workflow) HasDefinition() bool`

HasDefinition returns a boolean if a field has been set.

### GetEnabled

`func (o *Workflow) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Workflow) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Workflow) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Workflow) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetTrigger

`func (o *Workflow) GetTrigger() WorkflowTrigger`

GetTrigger returns the Trigger field if non-nil, zero value otherwise.

### GetTriggerOk

`func (o *Workflow) GetTriggerOk() (*WorkflowTrigger, bool)`

GetTriggerOk returns a tuple with the Trigger field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrigger

`func (o *Workflow) SetTrigger(v WorkflowTrigger)`

SetTrigger sets Trigger field to given value.

### HasTrigger

`func (o *Workflow) HasTrigger() bool`

HasTrigger returns a boolean if a field has been set.

### GetId

`func (o *Workflow) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Workflow) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Workflow) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Workflow) HasId() bool`

HasId returns a boolean if a field has been set.

### GetModified

`func (o *Workflow) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Workflow) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Workflow) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Workflow) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetModifiedBy

`func (o *Workflow) GetModifiedBy() WorkflowModifiedBy`

GetModifiedBy returns the ModifiedBy field if non-nil, zero value otherwise.

### GetModifiedByOk

`func (o *Workflow) GetModifiedByOk() (*WorkflowModifiedBy, bool)`

GetModifiedByOk returns a tuple with the ModifiedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedBy

`func (o *Workflow) SetModifiedBy(v WorkflowModifiedBy)`

SetModifiedBy sets ModifiedBy field to given value.

### HasModifiedBy

`func (o *Workflow) HasModifiedBy() bool`

HasModifiedBy returns a boolean if a field has been set.

### GetExecutionCount

`func (o *Workflow) GetExecutionCount() int32`

GetExecutionCount returns the ExecutionCount field if non-nil, zero value otherwise.

### GetExecutionCountOk

`func (o *Workflow) GetExecutionCountOk() (*int32, bool)`

GetExecutionCountOk returns a tuple with the ExecutionCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExecutionCount

`func (o *Workflow) SetExecutionCount(v int32)`

SetExecutionCount sets ExecutionCount field to given value.

### HasExecutionCount

`func (o *Workflow) HasExecutionCount() bool`

HasExecutionCount returns a boolean if a field has been set.

### GetFailureCount

`func (o *Workflow) GetFailureCount() int32`

GetFailureCount returns the FailureCount field if non-nil, zero value otherwise.

### GetFailureCountOk

`func (o *Workflow) GetFailureCountOk() (*int32, bool)`

GetFailureCountOk returns a tuple with the FailureCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailureCount

`func (o *Workflow) SetFailureCount(v int32)`

SetFailureCount sets FailureCount field to given value.

### HasFailureCount

`func (o *Workflow) HasFailureCount() bool`

HasFailureCount returns a boolean if a field has been set.

### GetCreated

`func (o *Workflow) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Workflow) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Workflow) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Workflow) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetCreator

`func (o *Workflow) GetCreator() WorkflowAllOfCreator`

GetCreator returns the Creator field if non-nil, zero value otherwise.

### GetCreatorOk

`func (o *Workflow) GetCreatorOk() (*WorkflowAllOfCreator, bool)`

GetCreatorOk returns a tuple with the Creator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreator

`func (o *Workflow) SetCreator(v WorkflowAllOfCreator)`

SetCreator sets Creator field to given value.

### HasCreator

`func (o *Workflow) HasCreator() bool`

HasCreator returns a boolean if a field has been set.


