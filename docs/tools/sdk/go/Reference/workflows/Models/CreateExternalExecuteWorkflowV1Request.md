---
id: v1-create-external-execute-workflow-v1-request
title: CreateExternalExecuteWorkflowV1Request
pagination_label: CreateExternalExecuteWorkflowV1Request
sidebar_label: CreateExternalExecuteWorkflowV1Request
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateExternalExecuteWorkflowV1Request', 'V1CreateExternalExecuteWorkflowV1Request'] 
slug: /tools/sdk/go/workflows/models/create-external-execute-workflow-v1-request
tags: ['SDK', 'Software Development Kit', 'CreateExternalExecuteWorkflowV1Request', 'V1CreateExternalExecuteWorkflowV1Request']
---

# CreateExternalExecuteWorkflowV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Input** | Pointer to **map[string]interface{}** | The input for the workflow | [optional] 

## Methods

### NewCreateExternalExecuteWorkflowV1Request

`func NewCreateExternalExecuteWorkflowV1Request() *CreateExternalExecuteWorkflowV1Request`

NewCreateExternalExecuteWorkflowV1Request instantiates a new CreateExternalExecuteWorkflowV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateExternalExecuteWorkflowV1RequestWithDefaults

`func NewCreateExternalExecuteWorkflowV1RequestWithDefaults() *CreateExternalExecuteWorkflowV1Request`

NewCreateExternalExecuteWorkflowV1RequestWithDefaults instantiates a new CreateExternalExecuteWorkflowV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInput

`func (o *CreateExternalExecuteWorkflowV1Request) GetInput() map[string]interface{}`

GetInput returns the Input field if non-nil, zero value otherwise.

### GetInputOk

`func (o *CreateExternalExecuteWorkflowV1Request) GetInputOk() (*map[string]interface{}, bool)`

GetInputOk returns a tuple with the Input field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInput

`func (o *CreateExternalExecuteWorkflowV1Request) SetInput(v map[string]interface{})`

SetInput sets Input field to given value.

### HasInput

`func (o *CreateExternalExecuteWorkflowV1Request) HasInput() bool`

HasInput returns a boolean if a field has been set.


