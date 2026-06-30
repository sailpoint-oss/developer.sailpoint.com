---
id: v1-start-activate-workflow-v1401-response
title: StartActivateWorkflowV1401Response
pagination_label: StartActivateWorkflowV1401Response
sidebar_label: StartActivateWorkflowV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'StartActivateWorkflowV1401Response', 'V1StartActivateWorkflowV1401Response'] 
slug: /tools/sdk/go/jitactivations/models/start-activate-workflow-v1401-response
tags: ['SDK', 'Software Development Kit', 'StartActivateWorkflowV1401Response', 'V1StartActivateWorkflowV1401Response']
---

# StartActivateWorkflowV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewStartActivateWorkflowV1401Response

`func NewStartActivateWorkflowV1401Response() *StartActivateWorkflowV1401Response`

NewStartActivateWorkflowV1401Response instantiates a new StartActivateWorkflowV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStartActivateWorkflowV1401ResponseWithDefaults

`func NewStartActivateWorkflowV1401ResponseWithDefaults() *StartActivateWorkflowV1401Response`

NewStartActivateWorkflowV1401ResponseWithDefaults instantiates a new StartActivateWorkflowV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *StartActivateWorkflowV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *StartActivateWorkflowV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *StartActivateWorkflowV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *StartActivateWorkflowV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *StartActivateWorkflowV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *StartActivateWorkflowV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

