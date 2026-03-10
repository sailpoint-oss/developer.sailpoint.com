---
id: v2026-get-task-status401-response
title: GetTaskStatus401Response
pagination_label: GetTaskStatus401Response
sidebar_label: GetTaskStatus401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetTaskStatus401Response', 'V2026GetTaskStatus401Response'] 
slug: /tools/sdk/go/v2026/models/get-task-status401-response
tags: ['SDK', 'Software Development Kit', 'GetTaskStatus401Response', 'V2026GetTaskStatus401Response']
---

# GetTaskStatus401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **map[string]interface{}** | A message describing the error | [optional] 

## Methods

### NewGetTaskStatus401Response

`func NewGetTaskStatus401Response() *GetTaskStatus401Response`

NewGetTaskStatus401Response instantiates a new GetTaskStatus401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetTaskStatus401ResponseWithDefaults

`func NewGetTaskStatus401ResponseWithDefaults() *GetTaskStatus401Response`

NewGetTaskStatus401ResponseWithDefaults instantiates a new GetTaskStatus401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetTaskStatus401Response) GetError() map[string]interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetTaskStatus401Response) GetErrorOk() (*map[string]interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetTaskStatus401Response) SetError(v map[string]interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetTaskStatus401Response) HasError() bool`

HasError returns a boolean if a field has been set.


