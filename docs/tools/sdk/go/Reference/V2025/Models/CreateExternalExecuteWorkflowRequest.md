---
id: v2025-create-external-execute-workflow-request
title: CreateExternalExecuteWorkflowRequest
pagination_label: CreateExternalExecuteWorkflowRequest
sidebar_label: CreateExternalExecuteWorkflowRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateExternalExecuteWorkflowRequest', 'V2025CreateExternalExecuteWorkflowRequest'] 
slug: /tools/sdk/go/v2025/models/create-external-execute-workflow-request
tags: ['SDK', 'Software Development Kit', 'CreateExternalExecuteWorkflowRequest', 'V2025CreateExternalExecuteWorkflowRequest']
---

# CreateExternalExecuteWorkflowRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Input** | Pointer to **map[string]interface{}** | The input for the workflow | [optional] 

## Methods

### NewCreateExternalExecuteWorkflowRequest

`func NewCreateExternalExecuteWorkflowRequest() *CreateExternalExecuteWorkflowRequest`

NewCreateExternalExecuteWorkflowRequest instantiates a new CreateExternalExecuteWorkflowRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateExternalExecuteWorkflowRequestWithDefaults

`func NewCreateExternalExecuteWorkflowRequestWithDefaults() *CreateExternalExecuteWorkflowRequest`

NewCreateExternalExecuteWorkflowRequestWithDefaults instantiates a new CreateExternalExecuteWorkflowRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInput

`func (o *CreateExternalExecuteWorkflowRequest) GetInput() map[string]interface{}`

GetInput returns the Input field if non-nil, zero value otherwise.

### GetInputOk

`func (o *CreateExternalExecuteWorkflowRequest) GetInputOk() (*map[string]interface{}, bool)`

GetInputOk returns a tuple with the Input field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInput

`func (o *CreateExternalExecuteWorkflowRequest) SetInput(v map[string]interface{})`

SetInput sets Input field to given value.

### HasInput

`func (o *CreateExternalExecuteWorkflowRequest) HasInput() bool`

HasInput returns a boolean if a field has been set.


