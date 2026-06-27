---
id: v1-get-machine-classification-config-v1401-response
title: GetMachineClassificationConfigV1401Response
pagination_label: GetMachineClassificationConfigV1401Response
sidebar_label: GetMachineClassificationConfigV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetMachineClassificationConfigV1401Response', 'V1GetMachineClassificationConfigV1401Response'] 
slug: /tools/sdk/go/machineclassificationconfig/models/get-machine-classification-config-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetMachineClassificationConfigV1401Response', 'V1GetMachineClassificationConfigV1401Response']
---

# GetMachineClassificationConfigV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetMachineClassificationConfigV1401Response

`func NewGetMachineClassificationConfigV1401Response() *GetMachineClassificationConfigV1401Response`

NewGetMachineClassificationConfigV1401Response instantiates a new GetMachineClassificationConfigV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetMachineClassificationConfigV1401ResponseWithDefaults

`func NewGetMachineClassificationConfigV1401ResponseWithDefaults() *GetMachineClassificationConfigV1401Response`

NewGetMachineClassificationConfigV1401ResponseWithDefaults instantiates a new GetMachineClassificationConfigV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetMachineClassificationConfigV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetMachineClassificationConfigV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetMachineClassificationConfigV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetMachineClassificationConfigV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetMachineClassificationConfigV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetMachineClassificationConfigV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

