---
id: v1-start-role-propagation-v1401-response
title: StartRolePropagationV1401Response
pagination_label: StartRolePropagationV1401Response
sidebar_label: StartRolePropagationV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'StartRolePropagationV1401Response', 'V1StartRolePropagationV1401Response'] 
slug: /tools/sdk/go/rolepropagation/models/start-role-propagation-v1401-response
tags: ['SDK', 'Software Development Kit', 'StartRolePropagationV1401Response', 'V1StartRolePropagationV1401Response']
---

# StartRolePropagationV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewStartRolePropagationV1401Response

`func NewStartRolePropagationV1401Response() *StartRolePropagationV1401Response`

NewStartRolePropagationV1401Response instantiates a new StartRolePropagationV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStartRolePropagationV1401ResponseWithDefaults

`func NewStartRolePropagationV1401ResponseWithDefaults() *StartRolePropagationV1401Response`

NewStartRolePropagationV1401ResponseWithDefaults instantiates a new StartRolePropagationV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *StartRolePropagationV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *StartRolePropagationV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *StartRolePropagationV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *StartRolePropagationV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *StartRolePropagationV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *StartRolePropagationV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

