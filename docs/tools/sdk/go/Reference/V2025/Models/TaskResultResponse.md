---
id: task-result-response
title: TaskResultResponse
pagination_label: TaskResultResponse
sidebar_label: TaskResultResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TaskResultResponse', 'TaskResultResponse'] 
slug: /tools/sdk/go//models/task-result-response
tags: ['SDK', 'Software Development Kit', 'TaskResultResponse', 'TaskResultResponse']
---

# TaskResultResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | the type of response reference | [optional] 
**Id** | Pointer to **string** | the task ID | [optional] 
**Name** | Pointer to **string** | the task name (not used in this endpoint, always null) | [optional] 

## Methods

### NewTaskResultResponse

`func NewTaskResultResponse() *TaskResultResponse`

NewTaskResultResponse instantiates a new TaskResultResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskResultResponseWithDefaults

`func NewTaskResultResponseWithDefaults() *TaskResultResponse`

NewTaskResultResponseWithDefaults instantiates a new TaskResultResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *TaskResultResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TaskResultResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TaskResultResponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *TaskResultResponse) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *TaskResultResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TaskResultResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TaskResultResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *TaskResultResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *TaskResultResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TaskResultResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TaskResultResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *TaskResultResponse) HasName() bool`

HasName returns a boolean if a field has been set.


