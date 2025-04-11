---
id: beta-workflow-trigger
title: WorkflowTrigger
pagination_label: WorkflowTrigger
sidebar_label: WorkflowTrigger
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkflowTrigger', 'BetaWorkflowTrigger'] 
slug: /tools/sdk/go/beta/models/workflow-trigger
tags: ['SDK', 'Software Development Kit', 'WorkflowTrigger', 'BetaWorkflowTrigger']
---

# WorkflowTrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The trigger type | 
**DisplayName** | Pointer to **NullableString** |  | [optional] 
**Attributes** | [**NullableWorkflowTriggerAttributes**](workflow-trigger-attributes) |  | 

## Methods

### NewWorkflowTrigger

`func NewWorkflowTrigger(type_ string, attributes NullableWorkflowTriggerAttributes, ) *WorkflowTrigger`

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


### GetDisplayName

`func (o *WorkflowTrigger) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *WorkflowTrigger) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *WorkflowTrigger) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *WorkflowTrigger) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### SetDisplayNameNil

`func (o *WorkflowTrigger) SetDisplayNameNil(b bool)`

 SetDisplayNameNil sets the value for DisplayName to be an explicit nil

### UnsetDisplayName
`func (o *WorkflowTrigger) UnsetDisplayName()`

UnsetDisplayName ensures that no value is present for DisplayName, not even an explicit nil
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


### SetAttributesNil

`func (o *WorkflowTrigger) SetAttributesNil(b bool)`

 SetAttributesNil sets the value for Attributes to be an explicit nil

### UnsetAttributes
`func (o *WorkflowTrigger) UnsetAttributes()`

UnsetAttributes ensures that no value is present for Attributes, not even an explicit nil

