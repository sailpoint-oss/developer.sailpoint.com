---
id: test-external-execute-workflow-request
title: TestExternalExecuteWorkflowRequest
pagination_label: TestExternalExecuteWorkflowRequest
sidebar_label: TestExternalExecuteWorkflowRequest
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'TestExternalExecuteWorkflowRequest'] 
slug: /tools/sdk/go/v3/models/test-external-execute-workflow-request
tags: ['SDK', 'Software Development Kit', 'TestExternalExecuteWorkflowRequest']
---

# TestExternalExecuteWorkflowRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Input** |  Pointer to **map[string]interface{}** | The test input for the workflow | [optional] 

## Methods

### NewTestExternalExecuteWorkflowRequest

`func NewTestExternalExecuteWorkflowRequest() *TestExternalExecuteWorkflowRequest`

NewTestExternalExecuteWorkflowRequest instantiates a new TestExternalExecuteWorkflowRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTestExternalExecuteWorkflowRequestWithDefaults

`func NewTestExternalExecuteWorkflowRequestWithDefaults() *TestExternalExecuteWorkflowRequest`

NewTestExternalExecuteWorkflowRequestWithDefaults instantiates a new TestExternalExecuteWorkflowRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInput

`func (o *TestExternalExecuteWorkflowRequest) GetInput() map[string]interface{}`

GetInput returns the Input field if non-nil, zero value otherwise.

### GetInputOk

`func (o *TestExternalExecuteWorkflowRequest) GetInputOk() (*map[string]interface{}, bool)`

GetInputOk returns a tuple with the Input field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInput

`func (o *TestExternalExecuteWorkflowRequest) SetInput(v map[string]interface{})`

SetInput sets Input field to given value.

### HasInput

`func (o *TestExternalExecuteWorkflowRequest) HasInput() bool`

HasInput returns a boolean if a field has been set.


[[Back to top]](#) 


