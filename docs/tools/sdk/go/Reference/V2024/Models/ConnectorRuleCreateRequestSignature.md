---
id: v2024-connector-rule-create-request-signature
title: ConnectorRuleCreateRequestSignature
pagination_label: ConnectorRuleCreateRequestSignature
sidebar_label: ConnectorRuleCreateRequestSignature
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConnectorRuleCreateRequestSignature', 'V2024ConnectorRuleCreateRequestSignature'] 
slug: /tools/sdk/go/v2024/models/connector-rule-create-request-signature
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleCreateRequestSignature', 'V2024ConnectorRuleCreateRequestSignature']
---

# ConnectorRuleCreateRequestSignature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Input** | [**[]Argument**](argument) |  | 
**Output** | Pointer to [**NullableArgument**](argument) |  | [optional] 

## Methods

### NewConnectorRuleCreateRequestSignature

`func NewConnectorRuleCreateRequestSignature(input []Argument, ) *ConnectorRuleCreateRequestSignature`

NewConnectorRuleCreateRequestSignature instantiates a new ConnectorRuleCreateRequestSignature object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorRuleCreateRequestSignatureWithDefaults

`func NewConnectorRuleCreateRequestSignatureWithDefaults() *ConnectorRuleCreateRequestSignature`

NewConnectorRuleCreateRequestSignatureWithDefaults instantiates a new ConnectorRuleCreateRequestSignature object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInput

`func (o *ConnectorRuleCreateRequestSignature) GetInput() []Argument`

GetInput returns the Input field if non-nil, zero value otherwise.

### GetInputOk

`func (o *ConnectorRuleCreateRequestSignature) GetInputOk() (*[]Argument, bool)`

GetInputOk returns a tuple with the Input field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInput

`func (o *ConnectorRuleCreateRequestSignature) SetInput(v []Argument)`

SetInput sets Input field to given value.


### GetOutput

`func (o *ConnectorRuleCreateRequestSignature) GetOutput() Argument`

GetOutput returns the Output field if non-nil, zero value otherwise.

### GetOutputOk

`func (o *ConnectorRuleCreateRequestSignature) GetOutputOk() (*Argument, bool)`

GetOutputOk returns a tuple with the Output field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutput

`func (o *ConnectorRuleCreateRequestSignature) SetOutput(v Argument)`

SetOutput sets Output field to given value.

### HasOutput

`func (o *ConnectorRuleCreateRequestSignature) HasOutput() bool`

HasOutput returns a boolean if a field has been set.

### SetOutputNil

`func (o *ConnectorRuleCreateRequestSignature) SetOutputNil(b bool)`

 SetOutputNil sets the value for Output to be an explicit nil

### UnsetOutput
`func (o *ConnectorRuleCreateRequestSignature) UnsetOutput()`

UnsetOutput ensures that no value is present for Output, not even an explicit nil

