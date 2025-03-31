---
id: beta-connector-rule-create-request
title: ConnectorRuleCreateRequest
pagination_label: ConnectorRuleCreateRequest
sidebar_label: ConnectorRuleCreateRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConnectorRuleCreateRequest', 'BetaConnectorRuleCreateRequest'] 
slug: /tools/sdk/go/beta/models/connector-rule-create-request
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleCreateRequest', 'BetaConnectorRuleCreateRequest']
---

# ConnectorRuleCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | the name of the rule | 
**Description** | Pointer to **string** | a description of the rule&#39;s purpose | [optional] 
**Type** | **string** | the type of rule | 
**Signature** | Pointer to [**ConnectorRuleCreateRequestSignature**](connector-rule-create-request-signature) |  | [optional] 
**SourceCode** | [**SourceCode**](source-code) |  | 
**Attributes** | Pointer to **map[string]interface{}** | a map of string to objects | [optional] 

## Methods

### NewConnectorRuleCreateRequest

`func NewConnectorRuleCreateRequest(name string, type_ string, sourceCode SourceCode, ) *ConnectorRuleCreateRequest`

NewConnectorRuleCreateRequest instantiates a new ConnectorRuleCreateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorRuleCreateRequestWithDefaults

`func NewConnectorRuleCreateRequestWithDefaults() *ConnectorRuleCreateRequest`

NewConnectorRuleCreateRequestWithDefaults instantiates a new ConnectorRuleCreateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ConnectorRuleCreateRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ConnectorRuleCreateRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ConnectorRuleCreateRequest) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *ConnectorRuleCreateRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ConnectorRuleCreateRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ConnectorRuleCreateRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ConnectorRuleCreateRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetType

`func (o *ConnectorRuleCreateRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ConnectorRuleCreateRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ConnectorRuleCreateRequest) SetType(v string)`

SetType sets Type field to given value.


### GetSignature

`func (o *ConnectorRuleCreateRequest) GetSignature() ConnectorRuleCreateRequestSignature`

GetSignature returns the Signature field if non-nil, zero value otherwise.

### GetSignatureOk

`func (o *ConnectorRuleCreateRequest) GetSignatureOk() (*ConnectorRuleCreateRequestSignature, bool)`

GetSignatureOk returns a tuple with the Signature field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignature

`func (o *ConnectorRuleCreateRequest) SetSignature(v ConnectorRuleCreateRequestSignature)`

SetSignature sets Signature field to given value.

### HasSignature

`func (o *ConnectorRuleCreateRequest) HasSignature() bool`

HasSignature returns a boolean if a field has been set.

### GetSourceCode

`func (o *ConnectorRuleCreateRequest) GetSourceCode() SourceCode`

GetSourceCode returns the SourceCode field if non-nil, zero value otherwise.

### GetSourceCodeOk

`func (o *ConnectorRuleCreateRequest) GetSourceCodeOk() (*SourceCode, bool)`

GetSourceCodeOk returns a tuple with the SourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCode

`func (o *ConnectorRuleCreateRequest) SetSourceCode(v SourceCode)`

SetSourceCode sets SourceCode field to given value.


### GetAttributes

`func (o *ConnectorRuleCreateRequest) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *ConnectorRuleCreateRequest) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *ConnectorRuleCreateRequest) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *ConnectorRuleCreateRequest) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### SetAttributesNil

`func (o *ConnectorRuleCreateRequest) SetAttributesNil(b bool)`

 SetAttributesNil sets the value for Attributes to be an explicit nil

### UnsetAttributes
`func (o *ConnectorRuleCreateRequest) UnsetAttributes()`

UnsetAttributes ensures that no value is present for Attributes, not even an explicit nil

