---
id: post-external-execute-workflow-request
title: PostExternalExecuteWorkflowRequest
pagination_label: PostExternalExecuteWorkflowRequest
sidebar_label: PostExternalExecuteWorkflowRequest
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'PostExternalExecuteWorkflowRequest'] 
slug: /tools/sdk/go/beta/models/post-external-execute-workflow-request
tags: ['SDK', 'Software Development Kit', 'PostExternalExecuteWorkflowRequest']
---

# PostExternalExecuteWorkflowRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Input** |  Pointer to **map[string]interface{}** | The input for the workflow | [optional] 

## Methods

### NewPostExternalExecuteWorkflowRequest

`func NewPostExternalExecuteWorkflowRequest() *PostExternalExecuteWorkflowRequest`

NewPostExternalExecuteWorkflowRequest instantiates a new PostExternalExecuteWorkflowRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostExternalExecuteWorkflowRequestWithDefaults

`func NewPostExternalExecuteWorkflowRequestWithDefaults() *PostExternalExecuteWorkflowRequest`

NewPostExternalExecuteWorkflowRequestWithDefaults instantiates a new PostExternalExecuteWorkflowRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInput

`func (o *PostExternalExecuteWorkflowRequest) GetInput() map[string]interface{}`

GetInput returns the Input field if non-nil, zero value otherwise.

### GetInputOk

`func (o *PostExternalExecuteWorkflowRequest) GetInputOk() (*map[string]interface{}, bool)`

GetInputOk returns a tuple with the Input field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInput

`func (o *PostExternalExecuteWorkflowRequest) SetInput(v map[string]interface{})`

SetInput sets Input field to given value.

### HasInput

`func (o *PostExternalExecuteWorkflowRequest) HasInput() bool`

HasInput returns a boolean if a field has been set.


[[Back to top]](#) 


