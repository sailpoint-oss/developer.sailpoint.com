---
id: beta-post-external-execute-workflow200-response
title: PostExternalExecuteWorkflow200Response
pagination_label: PostExternalExecuteWorkflow200Response
sidebar_label: PostExternalExecuteWorkflow200Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PostExternalExecuteWorkflow200Response', 'BetaPostExternalExecuteWorkflow200Response'] 
slug: /tools/sdk/go/beta/models/post-external-execute-workflow200-response
tags: ['SDK', 'Software Development Kit', 'PostExternalExecuteWorkflow200Response', 'BetaPostExternalExecuteWorkflow200Response']
---

# PostExternalExecuteWorkflow200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WorkflowExecutionId** | Pointer to **string** | The workflow execution id | [optional] 
**Message** | Pointer to **string** | An error message if any errors occurred | [optional] 

## Methods

### NewPostExternalExecuteWorkflow200Response

`func NewPostExternalExecuteWorkflow200Response() *PostExternalExecuteWorkflow200Response`

NewPostExternalExecuteWorkflow200Response instantiates a new PostExternalExecuteWorkflow200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostExternalExecuteWorkflow200ResponseWithDefaults

`func NewPostExternalExecuteWorkflow200ResponseWithDefaults() *PostExternalExecuteWorkflow200Response`

NewPostExternalExecuteWorkflow200ResponseWithDefaults instantiates a new PostExternalExecuteWorkflow200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkflowExecutionId

`func (o *PostExternalExecuteWorkflow200Response) GetWorkflowExecutionId() string`

GetWorkflowExecutionId returns the WorkflowExecutionId field if non-nil, zero value otherwise.

### GetWorkflowExecutionIdOk

`func (o *PostExternalExecuteWorkflow200Response) GetWorkflowExecutionIdOk() (*string, bool)`

GetWorkflowExecutionIdOk returns a tuple with the WorkflowExecutionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkflowExecutionId

`func (o *PostExternalExecuteWorkflow200Response) SetWorkflowExecutionId(v string)`

SetWorkflowExecutionId sets WorkflowExecutionId field to given value.

### HasWorkflowExecutionId

`func (o *PostExternalExecuteWorkflow200Response) HasWorkflowExecutionId() bool`

HasWorkflowExecutionId returns a boolean if a field has been set.

### GetMessage

`func (o *PostExternalExecuteWorkflow200Response) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *PostExternalExecuteWorkflow200Response) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *PostExternalExecuteWorkflow200Response) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *PostExternalExecuteWorkflow200Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.


