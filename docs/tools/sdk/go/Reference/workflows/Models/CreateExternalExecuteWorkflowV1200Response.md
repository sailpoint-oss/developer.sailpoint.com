---
id: v1-create-external-execute-workflow-v1200-response
title: CreateExternalExecuteWorkflowV1200Response
pagination_label: CreateExternalExecuteWorkflowV1200Response
sidebar_label: CreateExternalExecuteWorkflowV1200Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateExternalExecuteWorkflowV1200Response', 'V1CreateExternalExecuteWorkflowV1200Response'] 
slug: /tools/sdk/go/workflows/models/create-external-execute-workflow-v1200-response
tags: ['SDK', 'Software Development Kit', 'CreateExternalExecuteWorkflowV1200Response', 'V1CreateExternalExecuteWorkflowV1200Response']
---

# CreateExternalExecuteWorkflowV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WorkflowExecutionId** | Pointer to **string** | The workflow execution id | [optional] 
**Message** | Pointer to **string** | An error message if any errors occurred | [optional] 

## Methods

### NewCreateExternalExecuteWorkflowV1200Response

`func NewCreateExternalExecuteWorkflowV1200Response() *CreateExternalExecuteWorkflowV1200Response`

NewCreateExternalExecuteWorkflowV1200Response instantiates a new CreateExternalExecuteWorkflowV1200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateExternalExecuteWorkflowV1200ResponseWithDefaults

`func NewCreateExternalExecuteWorkflowV1200ResponseWithDefaults() *CreateExternalExecuteWorkflowV1200Response`

NewCreateExternalExecuteWorkflowV1200ResponseWithDefaults instantiates a new CreateExternalExecuteWorkflowV1200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkflowExecutionId

`func (o *CreateExternalExecuteWorkflowV1200Response) GetWorkflowExecutionId() string`

GetWorkflowExecutionId returns the WorkflowExecutionId field if non-nil, zero value otherwise.

### GetWorkflowExecutionIdOk

`func (o *CreateExternalExecuteWorkflowV1200Response) GetWorkflowExecutionIdOk() (*string, bool)`

GetWorkflowExecutionIdOk returns a tuple with the WorkflowExecutionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkflowExecutionId

`func (o *CreateExternalExecuteWorkflowV1200Response) SetWorkflowExecutionId(v string)`

SetWorkflowExecutionId sets WorkflowExecutionId field to given value.

### HasWorkflowExecutionId

`func (o *CreateExternalExecuteWorkflowV1200Response) HasWorkflowExecutionId() bool`

HasWorkflowExecutionId returns a boolean if a field has been set.

### GetMessage

`func (o *CreateExternalExecuteWorkflowV1200Response) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *CreateExternalExecuteWorkflowV1200Response) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *CreateExternalExecuteWorkflowV1200Response) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *CreateExternalExecuteWorkflowV1200Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.


