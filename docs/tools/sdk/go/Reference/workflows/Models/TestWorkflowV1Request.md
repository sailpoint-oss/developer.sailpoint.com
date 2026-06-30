---
id: v1-test-workflow-v1-request
title: TestWorkflowV1Request
pagination_label: TestWorkflowV1Request
sidebar_label: TestWorkflowV1Request
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TestWorkflowV1Request', 'V1TestWorkflowV1Request'] 
slug: /tools/sdk/go/workflows/models/test-workflow-v1-request
tags: ['SDK', 'Software Development Kit', 'TestWorkflowV1Request', 'V1TestWorkflowV1Request']
---

# TestWorkflowV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Input** | **map[string]interface{}** | The test input for the workflow. | 

## Methods

### NewTestWorkflowV1Request

`func NewTestWorkflowV1Request(input map[string]interface{}, ) *TestWorkflowV1Request`

NewTestWorkflowV1Request instantiates a new TestWorkflowV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTestWorkflowV1RequestWithDefaults

`func NewTestWorkflowV1RequestWithDefaults() *TestWorkflowV1Request`

NewTestWorkflowV1RequestWithDefaults instantiates a new TestWorkflowV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInput

`func (o *TestWorkflowV1Request) GetInput() map[string]interface{}`

GetInput returns the Input field if non-nil, zero value otherwise.

### GetInputOk

`func (o *TestWorkflowV1Request) GetInputOk() (*map[string]interface{}, bool)`

GetInputOk returns a tuple with the Input field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInput

`func (o *TestWorkflowV1Request) SetInput(v map[string]interface{})`

SetInput sets Input field to given value.



