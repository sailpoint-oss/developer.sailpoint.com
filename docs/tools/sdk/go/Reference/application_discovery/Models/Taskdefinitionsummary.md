---
id: v1-taskdefinitionsummary
title: Taskdefinitionsummary
pagination_label: Taskdefinitionsummary
sidebar_label: Taskdefinitionsummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Taskdefinitionsummary', 'V1Taskdefinitionsummary'] 
slug: /tools/sdk/go/applicationdiscovery/models/taskdefinitionsummary
tags: ['SDK', 'Software Development Kit', 'Taskdefinitionsummary', 'V1Taskdefinitionsummary']
---

# Taskdefinitionsummary

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

### NewTaskdefinitionsummary

`func NewTaskdefinitionsummary(id string, uniqueName string, description NullableString, parentName string, executor NullableString, arguments map[string]interface{}, ) *Taskdefinitionsummary`

NewTaskdefinitionsummary instantiates a new Taskdefinitionsummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskdefinitionsummaryWithDefaults

`func NewTaskdefinitionsummaryWithDefaults() *Taskdefinitionsummary`

NewTaskdefinitionsummaryWithDefaults instantiates a new Taskdefinitionsummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Taskdefinitionsummary) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Taskdefinitionsummary) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Taskdefinitionsummary) SetId(v string)`

SetId sets Id field to given value.


### GetUniqueName

`func (o *Taskdefinitionsummary) GetUniqueName() string`

GetUniqueName returns the UniqueName field if non-nil, zero value otherwise.

### GetUniqueNameOk

`func (o *Taskdefinitionsummary) GetUniqueNameOk() (*string, bool)`

GetUniqueNameOk returns a tuple with the UniqueName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUniqueName

`func (o *Taskdefinitionsummary) SetUniqueName(v string)`

SetUniqueName sets UniqueName field to given value.


### GetDescription

`func (o *Taskdefinitionsummary) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Taskdefinitionsummary) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Taskdefinitionsummary) SetDescription(v string)`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *Taskdefinitionsummary) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Taskdefinitionsummary) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetParentName

`func (o *Taskdefinitionsummary) GetParentName() string`

GetParentName returns the ParentName field if non-nil, zero value otherwise.

### GetParentNameOk

`func (o *Taskdefinitionsummary) GetParentNameOk() (*string, bool)`

GetParentNameOk returns a tuple with the ParentName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentName

`func (o *Taskdefinitionsummary) SetParentName(v string)`

SetParentName sets ParentName field to given value.


### GetExecutor

`func (o *Taskdefinitionsummary) GetExecutor() string`

GetExecutor returns the Executor field if non-nil, zero value otherwise.

### GetExecutorOk

`func (o *Taskdefinitionsummary) GetExecutorOk() (*string, bool)`

GetExecutorOk returns a tuple with the Executor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExecutor

`func (o *Taskdefinitionsummary) SetExecutor(v string)`

SetExecutor sets Executor field to given value.


### SetExecutorNil

`func (o *Taskdefinitionsummary) SetExecutorNil(b bool)`

 SetExecutorNil sets the value for Executor to be an explicit nil

### UnsetExecutor
`func (o *Taskdefinitionsummary) UnsetExecutor()`

UnsetExecutor ensures that no value is present for Executor, not even an explicit nil
### GetArguments

`func (o *Taskdefinitionsummary) GetArguments() map[string]interface{}`

GetArguments returns the Arguments field if non-nil, zero value otherwise.

### GetArgumentsOk

`func (o *Taskdefinitionsummary) GetArgumentsOk() (*map[string]interface{}, bool)`

GetArgumentsOk returns a tuple with the Arguments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArguments

`func (o *Taskdefinitionsummary) SetArguments(v map[string]interface{})`

SetArguments sets Arguments field to given value.



