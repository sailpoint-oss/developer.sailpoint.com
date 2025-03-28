---
id: beta-connector-rule-update-request
title: ConnectorRuleUpdateRequest
pagination_label: ConnectorRuleUpdateRequest
sidebar_label: ConnectorRuleUpdateRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConnectorRuleUpdateRequest', 'BetaConnectorRuleUpdateRequest'] 
slug: /tools/sdk/go/beta/models/connector-rule-update-request
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleUpdateRequest', 'BetaConnectorRuleUpdateRequest']
---

# ConnectorRuleUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | the name of the rule | 
**Description** | Pointer to **string** | a description of the rule&#39;s purpose | [optional] 
**Type** | **string** | the type of rule | 
**Signature** | Pointer to [**ConnectorRuleCreateRequestSignature**](connector-rule-create-request-signature) |  | [optional] 
**SourceCode** | [**SourceCode**](source-code) |  | 
**Attributes** | Pointer to **map[string]interface{}** | a map of string to objects | [optional] 
**Id** | **string** | the ID of the rule to update | 

## Methods

### NewConnectorRuleUpdateRequest

`func NewConnectorRuleUpdateRequest(name string, type_ string, sourceCode SourceCode, id string, ) *ConnectorRuleUpdateRequest`

NewConnectorRuleUpdateRequest instantiates a new ConnectorRuleUpdateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorRuleUpdateRequestWithDefaults

`func NewConnectorRuleUpdateRequestWithDefaults() *ConnectorRuleUpdateRequest`

NewConnectorRuleUpdateRequestWithDefaults instantiates a new ConnectorRuleUpdateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ConnectorRuleUpdateRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ConnectorRuleUpdateRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ConnectorRuleUpdateRequest) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *ConnectorRuleUpdateRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ConnectorRuleUpdateRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ConnectorRuleUpdateRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ConnectorRuleUpdateRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetType

`func (o *ConnectorRuleUpdateRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ConnectorRuleUpdateRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ConnectorRuleUpdateRequest) SetType(v string)`

SetType sets Type field to given value.


### GetSignature

`func (o *ConnectorRuleUpdateRequest) GetSignature() ConnectorRuleCreateRequestSignature`

GetSignature returns the Signature field if non-nil, zero value otherwise.

### GetSignatureOk

`func (o *ConnectorRuleUpdateRequest) GetSignatureOk() (*ConnectorRuleCreateRequestSignature, bool)`

GetSignatureOk returns a tuple with the Signature field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignature

`func (o *ConnectorRuleUpdateRequest) SetSignature(v ConnectorRuleCreateRequestSignature)`

SetSignature sets Signature field to given value.

### HasSignature

`func (o *ConnectorRuleUpdateRequest) HasSignature() bool`

HasSignature returns a boolean if a field has been set.

### GetSourceCode

`func (o *ConnectorRuleUpdateRequest) GetSourceCode() SourceCode`

GetSourceCode returns the SourceCode field if non-nil, zero value otherwise.

### GetSourceCodeOk

`func (o *ConnectorRuleUpdateRequest) GetSourceCodeOk() (*SourceCode, bool)`

GetSourceCodeOk returns a tuple with the SourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCode

`func (o *ConnectorRuleUpdateRequest) SetSourceCode(v SourceCode)`

SetSourceCode sets SourceCode field to given value.


### GetAttributes

`func (o *ConnectorRuleUpdateRequest) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *ConnectorRuleUpdateRequest) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *ConnectorRuleUpdateRequest) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *ConnectorRuleUpdateRequest) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### SetAttributesNil

`func (o *ConnectorRuleUpdateRequest) SetAttributesNil(b bool)`

 SetAttributesNil sets the value for Attributes to be an explicit nil

### UnsetAttributes
`func (o *ConnectorRuleUpdateRequest) UnsetAttributes()`

UnsetAttributes ensures that no value is present for Attributes, not even an explicit nil
### GetId

`func (o *ConnectorRuleUpdateRequest) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ConnectorRuleUpdateRequest) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ConnectorRuleUpdateRequest) SetId(v string)`

SetId sets Id field to given value.



