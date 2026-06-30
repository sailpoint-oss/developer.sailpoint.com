---
id: v1-test-external-execute-workflow-v1-request
title: TestExternalExecuteWorkflowV1Request
pagination_label: TestExternalExecuteWorkflowV1Request
sidebar_label: TestExternalExecuteWorkflowV1Request
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TestExternalExecuteWorkflowV1Request', 'V1TestExternalExecuteWorkflowV1Request'] 
slug: /tools/sdk/go/workflows/models/test-external-execute-workflow-v1-request
tags: ['SDK', 'Software Development Kit', 'TestExternalExecuteWorkflowV1Request', 'V1TestExternalExecuteWorkflowV1Request']
---

# TestExternalExecuteWorkflowV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Input** | Pointer to **map[string]interface{}** | The test input for the workflow | [optional] 

## Methods

### NewTestExternalExecuteWorkflowV1Request

`func NewTestExternalExecuteWorkflowV1Request() *TestExternalExecuteWorkflowV1Request`

NewTestExternalExecuteWorkflowV1Request instantiates a new TestExternalExecuteWorkflowV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTestExternalExecuteWorkflowV1RequestWithDefaults

`func NewTestExternalExecuteWorkflowV1RequestWithDefaults() *TestExternalExecuteWorkflowV1Request`

NewTestExternalExecuteWorkflowV1RequestWithDefaults instantiates a new TestExternalExecuteWorkflowV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInput

`func (o *TestExternalExecuteWorkflowV1Request) GetInput() map[string]interface{}`

GetInput returns the Input field if non-nil, zero value otherwise.

### GetInputOk

`func (o *TestExternalExecuteWorkflowV1Request) GetInputOk() (*map[string]interface{}, bool)`

GetInputOk returns a tuple with the Input field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInput

`func (o *TestExternalExecuteWorkflowV1Request) SetInput(v map[string]interface{})`

SetInput sets Input field to given value.

### HasInput

`func (o *TestExternalExecuteWorkflowV1Request) HasInput() bool`

HasInput returns a boolean if a field has been set.


