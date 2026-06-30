---
id: v1-get-task-status-v1401-response
title: GetTaskStatusV1401Response
pagination_label: GetTaskStatusV1401Response
sidebar_label: GetTaskStatusV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetTaskStatusV1401Response', 'V1GetTaskStatusV1401Response'] 
slug: /tools/sdk/go/taskmanagement/models/get-task-status-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetTaskStatusV1401Response', 'V1GetTaskStatusV1401Response']
---

# GetTaskStatusV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetTaskStatusV1401Response

`func NewGetTaskStatusV1401Response() *GetTaskStatusV1401Response`

NewGetTaskStatusV1401Response instantiates a new GetTaskStatusV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetTaskStatusV1401ResponseWithDefaults

`func NewGetTaskStatusV1401ResponseWithDefaults() *GetTaskStatusV1401Response`

NewGetTaskStatusV1401ResponseWithDefaults instantiates a new GetTaskStatusV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetTaskStatusV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetTaskStatusV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetTaskStatusV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetTaskStatusV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetTaskStatusV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetTaskStatusV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

