---
id: workflow-all-of-creator
title: WorkflowAllOfCreator
pagination_label: WorkflowAllOfCreator
sidebar_label: WorkflowAllOfCreator
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkflowAllOfCreator', 'WorkflowAllOfCreator'] 
slug: /tools/sdk/go/v3/models/workflow-all-of-creator
tags: ['SDK', 'Software Development Kit', 'WorkflowAllOfCreator', 'WorkflowAllOfCreator']
---

# WorkflowAllOfCreator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Workflow creator's DTO type. | [optional] 
**Id** | Pointer to **string** | Workflow creator's identity ID. | [optional] 
**Name** | Pointer to **string** | Workflow creator's display name. | [optional] 

## Methods

### NewWorkflowAllOfCreator

`func NewWorkflowAllOfCreator() *WorkflowAllOfCreator`

NewWorkflowAllOfCreator instantiates a new WorkflowAllOfCreator object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowAllOfCreatorWithDefaults

`func NewWorkflowAllOfCreatorWithDefaults() *WorkflowAllOfCreator`

NewWorkflowAllOfCreatorWithDefaults instantiates a new WorkflowAllOfCreator object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *WorkflowAllOfCreator) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *WorkflowAllOfCreator) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *WorkflowAllOfCreator) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *WorkflowAllOfCreator) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *WorkflowAllOfCreator) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *WorkflowAllOfCreator) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *WorkflowAllOfCreator) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *WorkflowAllOfCreator) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *WorkflowAllOfCreator) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WorkflowAllOfCreator) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WorkflowAllOfCreator) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *WorkflowAllOfCreator) HasName() bool`

HasName returns a boolean if a field has been set.


