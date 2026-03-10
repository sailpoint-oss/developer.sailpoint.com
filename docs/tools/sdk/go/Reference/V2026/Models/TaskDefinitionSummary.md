---
id: v2026-task-definition-summary
title: TaskDefinitionSummary
pagination_label: TaskDefinitionSummary
sidebar_label: TaskDefinitionSummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TaskDefinitionSummary', 'V2026TaskDefinitionSummary'] 
slug: /tools/sdk/go/v2026/models/task-definition-summary
tags: ['SDK', 'Software Development Kit', 'TaskDefinitionSummary', 'V2026TaskDefinitionSummary']
---

# TaskDefinitionSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | System-generated unique ID of the TaskDefinition | 
**UniqueName** | **string** | Name of the TaskDefinition | 
**Description** | **NullableString** | Description of the TaskDefinition | 
**ParentName** | **string** | Name of the parent of the TaskDefinition | 
**Executor** | **NullableString** | Executor of the TaskDefinition | 
**Arguments** | **map[string]interface{}** | Formal parameters of the TaskDefinition, without values | 

## Methods

### NewTaskDefinitionSummary

`func NewTaskDefinitionSummary(id string, uniqueName string, description NullableString, parentName string, executor NullableString, arguments map[string]interface{}, ) *TaskDefinitionSummary`

NewTaskDefinitionSummary instantiates a new TaskDefinitionSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskDefinitionSummaryWithDefaults

`func NewTaskDefinitionSummaryWithDefaults() *TaskDefinitionSummary`

NewTaskDefinitionSummaryWithDefaults instantiates a new TaskDefinitionSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *TaskDefinitionSummary) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TaskDefinitionSummary) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TaskDefinitionSummary) SetId(v string)`

SetId sets Id field to given value.


### GetUniqueName

`func (o *TaskDefinitionSummary) GetUniqueName() string`

GetUniqueName returns the UniqueName field if non-nil, zero value otherwise.

### GetUniqueNameOk

`func (o *TaskDefinitionSummary) GetUniqueNameOk() (*string, bool)`

GetUniqueNameOk returns a tuple with the UniqueName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUniqueName

`func (o *TaskDefinitionSummary) SetUniqueName(v string)`

SetUniqueName sets UniqueName field to given value.


### GetDescription

`func (o *TaskDefinitionSummary) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TaskDefinitionSummary) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TaskDefinitionSummary) SetDescription(v string)`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *TaskDefinitionSummary) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *TaskDefinitionSummary) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetParentName

`func (o *TaskDefinitionSummary) GetParentName() string`

GetParentName returns the ParentName field if non-nil, zero value otherwise.

### GetParentNameOk

`func (o *TaskDefinitionSummary) GetParentNameOk() (*string, bool)`

GetParentNameOk returns a tuple with the ParentName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentName

`func (o *TaskDefinitionSummary) SetParentName(v string)`

SetParentName sets ParentName field to given value.


### GetExecutor

`func (o *TaskDefinitionSummary) GetExecutor() string`

GetExecutor returns the Executor field if non-nil, zero value otherwise.

### GetExecutorOk

`func (o *TaskDefinitionSummary) GetExecutorOk() (*string, bool)`

GetExecutorOk returns a tuple with the Executor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExecutor

`func (o *TaskDefinitionSummary) SetExecutor(v string)`

SetExecutor sets Executor field to given value.


### SetExecutorNil

`func (o *TaskDefinitionSummary) SetExecutorNil(b bool)`

 SetExecutorNil sets the value for Executor to be an explicit nil

### UnsetExecutor
`func (o *TaskDefinitionSummary) UnsetExecutor()`

UnsetExecutor ensures that no value is present for Executor, not even an explicit nil
### GetArguments

`func (o *TaskDefinitionSummary) GetArguments() map[string]interface{}`

GetArguments returns the Arguments field if non-nil, zero value otherwise.

### GetArgumentsOk

`func (o *TaskDefinitionSummary) GetArgumentsOk() (*map[string]interface{}, bool)`

GetArgumentsOk returns a tuple with the Arguments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArguments

`func (o *TaskDefinitionSummary) SetArguments(v map[string]interface{})`

SetArguments sets Arguments field to given value.



