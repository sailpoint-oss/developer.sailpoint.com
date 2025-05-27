---
id: test-workflow-request
title: TestWorkflowRequest
pagination_label: TestWorkflowRequest
sidebar_label: TestWorkflowRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TestWorkflowRequest', 'TestWorkflowRequest'] 
slug: /tools/sdk/go/v3/models/test-workflow-request
tags: ['SDK', 'Software Development Kit', 'TestWorkflowRequest', 'TestWorkflowRequest']
---

# TestWorkflowRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Input** | **map[string]interface{}** | The test input for the workflow. | 

## Methods

### NewTestWorkflowRequest

`func NewTestWorkflowRequest(input map[string]interface{}, ) *TestWorkflowRequest`

NewTestWorkflowRequest instantiates a new TestWorkflowRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTestWorkflowRequestWithDefaults

`func NewTestWorkflowRequestWithDefaults() *TestWorkflowRequest`

NewTestWorkflowRequestWithDefaults instantiates a new TestWorkflowRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInput

`func (o *TestWorkflowRequest) GetInput() map[string]interface{}`

GetInput returns the Input field if non-nil, zero value otherwise.

### GetInputOk

`func (o *TestWorkflowRequest) GetInputOk() (*map[string]interface{}, bool)`

GetInputOk returns a tuple with the Input field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInput

`func (o *TestWorkflowRequest) SetInput(v map[string]interface{})`

SetInput sets Input field to given value.



