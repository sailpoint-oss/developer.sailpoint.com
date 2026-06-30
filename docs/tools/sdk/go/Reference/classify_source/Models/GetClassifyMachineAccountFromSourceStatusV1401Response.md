---
id: v1-get-classify-machine-account-from-source-status-v1401-response
title: GetClassifyMachineAccountFromSourceStatusV1401Response
pagination_label: GetClassifyMachineAccountFromSourceStatusV1401Response
sidebar_label: GetClassifyMachineAccountFromSourceStatusV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetClassifyMachineAccountFromSourceStatusV1401Response', 'V1GetClassifyMachineAccountFromSourceStatusV1401Response'] 
slug: /tools/sdk/go/classifysource/models/get-classify-machine-account-from-source-status-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetClassifyMachineAccountFromSourceStatusV1401Response', 'V1GetClassifyMachineAccountFromSourceStatusV1401Response']
---

# GetClassifyMachineAccountFromSourceStatusV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetClassifyMachineAccountFromSourceStatusV1401Response

`func NewGetClassifyMachineAccountFromSourceStatusV1401Response() *GetClassifyMachineAccountFromSourceStatusV1401Response`

NewGetClassifyMachineAccountFromSourceStatusV1401Response instantiates a new GetClassifyMachineAccountFromSourceStatusV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetClassifyMachineAccountFromSourceStatusV1401ResponseWithDefaults

`func NewGetClassifyMachineAccountFromSourceStatusV1401ResponseWithDefaults() *GetClassifyMachineAccountFromSourceStatusV1401Response`

NewGetClassifyMachineAccountFromSourceStatusV1401ResponseWithDefaults instantiates a new GetClassifyMachineAccountFromSourceStatusV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetClassifyMachineAccountFromSourceStatusV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetClassifyMachineAccountFromSourceStatusV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetClassifyMachineAccountFromSourceStatusV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetClassifyMachineAccountFromSourceStatusV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetClassifyMachineAccountFromSourceStatusV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetClassifyMachineAccountFromSourceStatusV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

