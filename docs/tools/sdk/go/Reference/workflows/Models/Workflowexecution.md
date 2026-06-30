---
id: v1-workflowexecution
title: Workflowexecution
pagination_label: Workflowexecution
sidebar_label: Workflowexecution
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Workflowexecution', 'V1Workflowexecution'] 
slug: /tools/sdk/go/workflows/models/workflowexecution
tags: ['SDK', 'Software Development Kit', 'Workflowexecution', 'V1Workflowexecution']
---

# Workflowexecution

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

### NewWorkflowexecution

`func NewWorkflowexecution() *Workflowexecution`

NewWorkflowexecution instantiates a new Workflowexecution object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowexecutionWithDefaults

`func NewWorkflowexecutionWithDefaults() *Workflowexecution`

NewWorkflowexecutionWithDefaults instantiates a new Workflowexecution object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Workflowexecution) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Workflowexecution) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Workflowexecution) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Workflowexecution) HasId() bool`

HasId returns a boolean if a field has been set.

### GetWorkflowId

`func (o *Workflowexecution) GetWorkflowId() string`

GetWorkflowId returns the WorkflowId field if non-nil, zero value otherwise.

### GetWorkflowIdOk

`func (o *Workflowexecution) GetWorkflowIdOk() (*string, bool)`

GetWorkflowIdOk returns a tuple with the WorkflowId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkflowId

`func (o *Workflowexecution) SetWorkflowId(v string)`

SetWorkflowId sets WorkflowId field to given value.

### HasWorkflowId

`func (o *Workflowexecution) HasWorkflowId() bool`

HasWorkflowId returns a boolean if a field has been set.

### GetRequestId

`func (o *Workflowexecution) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *Workflowexecution) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *Workflowexecution) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *Workflowexecution) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.

### GetStartTime

`func (o *Workflowexecution) GetStartTime() SailPointTime`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *Workflowexecution) GetStartTimeOk() (*SailPointTime, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *Workflowexecution) SetStartTime(v SailPointTime)`

SetStartTime sets StartTime field to given value.

### HasStartTime

`func (o *Workflowexecution) HasStartTime() bool`

HasStartTime returns a boolean if a field has been set.

### GetCloseTime

`func (o *Workflowexecution) GetCloseTime() SailPointTime`

GetCloseTime returns the CloseTime field if non-nil, zero value otherwise.

### GetCloseTimeOk

`func (o *Workflowexecution) GetCloseTimeOk() (*SailPointTime, bool)`

GetCloseTimeOk returns a tuple with the CloseTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloseTime

`func (o *Workflowexecution) SetCloseTime(v SailPointTime)`

SetCloseTime sets CloseTime field to given value.

### HasCloseTime

`func (o *Workflowexecution) HasCloseTime() bool`

HasCloseTime returns a boolean if a field has been set.

### GetStatus

`func (o *Workflowexecution) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Workflowexecution) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Workflowexecution) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Workflowexecution) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


