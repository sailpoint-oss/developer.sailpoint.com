---
id: v2024-connector-rule-response
title: ConnectorRuleResponse
pagination_label: ConnectorRuleResponse
sidebar_label: ConnectorRuleResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConnectorRuleResponse', 'V2024ConnectorRuleResponse'] 
slug: /tools/sdk/go/v2024/models/connector-rule-response
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleResponse', 'V2024ConnectorRuleResponse']
---

# ConnectorRuleResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | the name of the rule | 
**Description** | Pointer to **NullableString** | a description of the rule&#39;s purpose | [optional] 
**Type** | **string** | the type of rule | 
**Signature** | Pointer to [**ConnectorRuleCreateRequestSignature**](connector-rule-create-request-signature) |  | [optional] 
**SourceCode** | [**SourceCode**](source-code) |  | 
**Attributes** | Pointer to **map[string]interface{}** | a map of string to objects | [optional] 
**Id** | **string** | the ID of the rule | 
**Created** | **string** | an ISO 8601 UTC timestamp when this rule was created | 
**Modified** | Pointer to **NullableString** | an ISO 8601 UTC timestamp when this rule was last modified | [optional] 

## Methods

### NewConnectorRuleResponse

`func NewConnectorRuleResponse(name string, type_ string, sourceCode SourceCode, id string, created string, ) *ConnectorRuleResponse`

NewConnectorRuleResponse instantiates a new ConnectorRuleResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorRuleResponseWithDefaults

`func NewConnectorRuleResponseWithDefaults() *ConnectorRuleResponse`

NewConnectorRuleResponseWithDefaults instantiates a new ConnectorRuleResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ConnectorRuleResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ConnectorRuleResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ConnectorRuleResponse) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *ConnectorRuleResponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ConnectorRuleResponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ConnectorRuleResponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ConnectorRuleResponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *ConnectorRuleResponse) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *ConnectorRuleResponse) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetType

`func (o *ConnectorRuleResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ConnectorRuleResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ConnectorRuleResponse) SetType(v string)`

SetType sets Type field to given value.


### GetSignature

`func (o *ConnectorRuleResponse) GetSignature() ConnectorRuleCreateRequestSignature`

GetSignature returns the Signature field if non-nil, zero value otherwise.

### GetSignatureOk

`func (o *ConnectorRuleResponse) GetSignatureOk() (*ConnectorRuleCreateRequestSignature, bool)`

GetSignatureOk returns a tuple with the Signature field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignature

`func (o *ConnectorRuleResponse) SetSignature(v ConnectorRuleCreateRequestSignature)`

SetSignature sets Signature field to given value.

### HasSignature

`func (o *ConnectorRuleResponse) HasSignature() bool`

HasSignature returns a boolean if a field has been set.

### GetSourceCode

`func (o *ConnectorRuleResponse) GetSourceCode() SourceCode`

GetSourceCode returns the SourceCode field if non-nil, zero value otherwise.

### GetSourceCodeOk

`func (o *ConnectorRuleResponse) GetSourceCodeOk() (*SourceCode, bool)`

GetSourceCodeOk returns a tuple with the SourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCode

`func (o *ConnectorRuleResponse) SetSourceCode(v SourceCode)`

SetSourceCode sets SourceCode field to given value.


### GetAttributes

`func (o *ConnectorRuleResponse) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *ConnectorRuleResponse) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *ConnectorRuleResponse) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *ConnectorRuleResponse) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### SetAttributesNil

`func (o *ConnectorRuleResponse) SetAttributesNil(b bool)`

 SetAttributesNil sets the value for Attributes to be an explicit nil

### UnsetAttributes
`func (o *ConnectorRuleResponse) UnsetAttributes()`

UnsetAttributes ensures that no value is present for Attributes, not even an explicit nil
### GetId

`func (o *ConnectorRuleResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ConnectorRuleResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ConnectorRuleResponse) SetId(v string)`

SetId sets Id field to given value.


### GetCreated

`func (o *ConnectorRuleResponse) GetCreated() string`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ConnectorRuleResponse) GetCreatedOk() (*string, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ConnectorRuleResponse) SetCreated(v string)`

SetCreated sets Created field to given value.


### GetModified

`func (o *ConnectorRuleResponse) GetModified() string`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *ConnectorRuleResponse) GetModifiedOk() (*string, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *ConnectorRuleResponse) SetModified(v string)`

SetModified sets Modified field to given value.

### HasModified

`func (o *ConnectorRuleResponse) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *ConnectorRuleResponse) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *ConnectorRuleResponse) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil

