---
id: v2025-create-external-execute-workflow200-response
title: CreateExternalExecuteWorkflow200Response
pagination_label: CreateExternalExecuteWorkflow200Response
sidebar_label: CreateExternalExecuteWorkflow200Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateExternalExecuteWorkflow200Response', 'V2025CreateExternalExecuteWorkflow200Response'] 
slug: /tools/sdk/go/v2025/models/create-external-execute-workflow200-response
tags: ['SDK', 'Software Development Kit', 'CreateExternalExecuteWorkflow200Response', 'V2025CreateExternalExecuteWorkflow200Response']
---

# CreateExternalExecuteWorkflow200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WorkflowExecutionId** | Pointer to **string** | The workflow execution id | [optional] 
**Message** | Pointer to **string** | An error message if any errors occurred | [optional] 

## Methods

### NewCreateExternalExecuteWorkflow200Response

`func NewCreateExternalExecuteWorkflow200Response() *CreateExternalExecuteWorkflow200Response`

NewCreateExternalExecuteWorkflow200Response instantiates a new CreateExternalExecuteWorkflow200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateExternalExecuteWorkflow200ResponseWithDefaults

`func NewCreateExternalExecuteWorkflow200ResponseWithDefaults() *CreateExternalExecuteWorkflow200Response`

NewCreateExternalExecuteWorkflow200ResponseWithDefaults instantiates a new CreateExternalExecuteWorkflow200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkflowExecutionId

`func (o *CreateExternalExecuteWorkflow200Response) GetWorkflowExecutionId() string`

GetWorkflowExecutionId returns the WorkflowExecutionId field if non-nil, zero value otherwise.

### GetWorkflowExecutionIdOk

`func (o *CreateExternalExecuteWorkflow200Response) GetWorkflowExecutionIdOk() (*string, bool)`

GetWorkflowExecutionIdOk returns a tuple with the WorkflowExecutionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkflowExecutionId

`func (o *CreateExternalExecuteWorkflow200Response) SetWorkflowExecutionId(v string)`

SetWorkflowExecutionId sets WorkflowExecutionId field to given value.

### HasWorkflowExecutionId

`func (o *CreateExternalExecuteWorkflow200Response) HasWorkflowExecutionId() bool`

HasWorkflowExecutionId returns a boolean if a field has been set.

### GetMessage

`func (o *CreateExternalExecuteWorkflow200Response) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *CreateExternalExecuteWorkflow200Response) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *CreateExternalExecuteWorkflow200Response) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *CreateExternalExecuteWorkflow200Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.


