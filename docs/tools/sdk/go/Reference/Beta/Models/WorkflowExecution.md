---
id: beta-workflow-execution
title: WorkflowExecution
pagination_label: WorkflowExecution
sidebar_label: WorkflowExecution
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkflowExecution', 'BetaWorkflowExecution'] 
slug: /tools/sdk/go/beta/models/workflow-execution
tags: ['SDK', 'Software Development Kit', 'WorkflowExecution', 'BetaWorkflowExecution']
---

# WorkflowExecution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Workflow execution ID. | [optional] 
**WorkflowId** | Pointer to **string** | Workflow ID. | [optional] 
**RequestId** | Pointer to **string** | Backend ID that tracks a workflow request in the system. Provide this ID in a customer support ticket for debugging purposes. | [optional] 
**StartTime** | Pointer to **SailPointTime** | Date/time when the workflow started. | [optional] 
**CloseTime** | Pointer to **SailPointTime** | Date/time when the workflow ended. | [optional] 
**Status** | Pointer to **string** | Workflow execution status. | [optional] 

## Methods

### NewWorkflowExecution

`func NewWorkflowExecution() *WorkflowExecution`

NewWorkflowExecution instantiates a new WorkflowExecution object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowExecutionWithDefaults

`func NewWorkflowExecutionWithDefaults() *WorkflowExecution`

NewWorkflowExecutionWithDefaults instantiates a new WorkflowExecution object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *WorkflowExecution) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *WorkflowExecution) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *WorkflowExecution) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *WorkflowExecution) HasId() bool`

HasId returns a boolean if a field has been set.

### GetWorkflowId

`func (o *WorkflowExecution) GetWorkflowId() string`

GetWorkflowId returns the WorkflowId field if non-nil, zero value otherwise.

### GetWorkflowIdOk

`func (o *WorkflowExecution) GetWorkflowIdOk() (*string, bool)`

GetWorkflowIdOk returns a tuple with the WorkflowId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkflowId

`func (o *WorkflowExecution) SetWorkflowId(v string)`

SetWorkflowId sets WorkflowId field to given value.

### HasWorkflowId

`func (o *WorkflowExecution) HasWorkflowId() bool`

HasWorkflowId returns a boolean if a field has been set.

### GetRequestId

`func (o *WorkflowExecution) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *WorkflowExecution) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *WorkflowExecution) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *WorkflowExecution) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.

### GetStartTime

`func (o *WorkflowExecution) GetStartTime() SailPointTime`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *WorkflowExecution) GetStartTimeOk() (*SailPointTime, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *WorkflowExecution) SetStartTime(v SailPointTime)`

SetStartTime sets StartTime field to given value.

### HasStartTime

`func (o *WorkflowExecution) HasStartTime() bool`

HasStartTime returns a boolean if a field has been set.

### GetCloseTime

`func (o *WorkflowExecution) GetCloseTime() SailPointTime`

GetCloseTime returns the CloseTime field if non-nil, zero value otherwise.

### GetCloseTimeOk

`func (o *WorkflowExecution) GetCloseTimeOk() (*SailPointTime, bool)`

GetCloseTimeOk returns a tuple with the CloseTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloseTime

`func (o *WorkflowExecution) SetCloseTime(v SailPointTime)`

SetCloseTime sets CloseTime field to given value.

### HasCloseTime

`func (o *WorkflowExecution) HasCloseTime() bool`

HasCloseTime returns a boolean if a field has been set.

### GetStatus

`func (o *WorkflowExecution) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *WorkflowExecution) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *WorkflowExecution) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *WorkflowExecution) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


