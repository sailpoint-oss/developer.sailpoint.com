---
id: v1-connectorrulecreaterequest-signature
title: ConnectorrulecreaterequestSignature
pagination_label: ConnectorrulecreaterequestSignature
sidebar_label: ConnectorrulecreaterequestSignature
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConnectorrulecreaterequestSignature', 'V1ConnectorrulecreaterequestSignature'] 
slug: /tools/sdk/go/connectorrulemanagement/models/connectorrulecreaterequest-signature
tags: ['SDK', 'Software Development Kit', 'ConnectorrulecreaterequestSignature', 'V1ConnectorrulecreaterequestSignature']
---

# ConnectorrulecreaterequestSignature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Input** | [**[]Argument**](argument) |  | 
**Output** | Pointer to [**NullableArgument**](argument) |  | [optional] 

## Methods

### NewConnectorrulecreaterequestSignature

`func NewConnectorrulecreaterequestSignature(input []Argument, ) *ConnectorrulecreaterequestSignature`

NewConnectorrulecreaterequestSignature instantiates a new ConnectorrulecreaterequestSignature object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorrulecreaterequestSignatureWithDefaults

`func NewConnectorrulecreaterequestSignatureWithDefaults() *ConnectorrulecreaterequestSignature`

NewConnectorrulecreaterequestSignatureWithDefaults instantiates a new ConnectorrulecreaterequestSignature object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInput

`func (o *ConnectorrulecreaterequestSignature) GetInput() []Argument`

GetInput returns the Input field if non-nil, zero value otherwise.

### GetInputOk

`func (o *ConnectorrulecreaterequestSignature) GetInputOk() (*[]Argument, bool)`

GetInputOk returns a tuple with the Input field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInput

`func (o *ConnectorrulecreaterequestSignature) SetInput(v []Argument)`

SetInput sets Input field to given value.


### GetOutput

`func (o *ConnectorrulecreaterequestSignature) GetOutput() Argument`

GetOutput returns the Output field if non-nil, zero value otherwise.

### GetOutputOk

`func (o *ConnectorrulecreaterequestSignature) GetOutputOk() (*Argument, bool)`

GetOutputOk returns a tuple with the Output field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutput

`func (o *ConnectorrulecreaterequestSignature) SetOutput(v Argument)`

SetOutput sets Output field to given value.

### HasOutput

`func (o *ConnectorrulecreaterequestSignature) HasOutput() bool`

HasOutput returns a boolean if a field has been set.

### SetOutputNil

`func (o *ConnectorrulecreaterequestSignature) SetOutputNil(b bool)`

 SetOutputNil sets the value for Output to be an explicit nil

### UnsetOutput
`func (o *ConnectorrulecreaterequestSignature) UnsetOutput()`

UnsetOutput ensures that no value is present for Output, not even an explicit nil

