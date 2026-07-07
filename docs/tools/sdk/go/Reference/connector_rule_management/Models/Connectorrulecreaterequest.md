---
id: v1-connectorrulecreaterequest
title: Connectorrulecreaterequest
pagination_label: Connectorrulecreaterequest
sidebar_label: Connectorrulecreaterequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Connectorrulecreaterequest', 'V1Connectorrulecreaterequest'] 
slug: /tools/sdk/go/connectorrulemanagement/models/connectorrulecreaterequest
tags: ['SDK', 'Software Development Kit', 'Connectorrulecreaterequest', 'V1Connectorrulecreaterequest']
---

# Connectorrulecreaterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | the name of the rule | 
**Description** | Pointer to **NullableString** | a description of the rule's purpose | [optional] 
**Type** | **string** | the type of rule | 
**Signature** | Pointer to [**ConnectorrulecreaterequestSignature**](connectorrulecreaterequest-signature) |  | [optional] 
**SourceCode** | [**Sourcecode**](sourcecode) |  | 
**Attributes** | Pointer to **map[string]interface{}** | a map of string to objects | [optional] 

## Methods

### NewConnectorrulecreaterequest

`func NewConnectorrulecreaterequest(name string, type_ string, sourceCode Sourcecode, ) *Connectorrulecreaterequest`

NewConnectorrulecreaterequest instantiates a new Connectorrulecreaterequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorrulecreaterequestWithDefaults

`func NewConnectorrulecreaterequestWithDefaults() *Connectorrulecreaterequest`

NewConnectorrulecreaterequestWithDefaults instantiates a new Connectorrulecreaterequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Connectorrulecreaterequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Connectorrulecreaterequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Connectorrulecreaterequest) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Connectorrulecreaterequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Connectorrulecreaterequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Connectorrulecreaterequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Connectorrulecreaterequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Connectorrulecreaterequest) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Connectorrulecreaterequest) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetType

`func (o *Connectorrulecreaterequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Connectorrulecreaterequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Connectorrulecreaterequest) SetType(v string)`

SetType sets Type field to given value.


### GetSignature

`func (o *Connectorrulecreaterequest) GetSignature() ConnectorrulecreaterequestSignature`

GetSignature returns the Signature field if non-nil, zero value otherwise.

### GetSignatureOk

`func (o *Connectorrulecreaterequest) GetSignatureOk() (*ConnectorrulecreaterequestSignature, bool)`

GetSignatureOk returns a tuple with the Signature field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignature

`func (o *Connectorrulecreaterequest) SetSignature(v ConnectorrulecreaterequestSignature)`

SetSignature sets Signature field to given value.

### HasSignature

`func (o *Connectorrulecreaterequest) HasSignature() bool`

HasSignature returns a boolean if a field has been set.

### GetSourceCode

`func (o *Connectorrulecreaterequest) GetSourceCode() Sourcecode`

GetSourceCode returns the SourceCode field if non-nil, zero value otherwise.

### GetSourceCodeOk

`func (o *Connectorrulecreaterequest) GetSourceCodeOk() (*Sourcecode, bool)`

GetSourceCodeOk returns a tuple with the SourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCode

`func (o *Connectorrulecreaterequest) SetSourceCode(v Sourcecode)`

SetSourceCode sets SourceCode field to given value.


### GetAttributes

`func (o *Connectorrulecreaterequest) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Connectorrulecreaterequest) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Connectorrulecreaterequest) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Connectorrulecreaterequest) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### SetAttributesNil

`func (o *Connectorrulecreaterequest) SetAttributesNil(b bool)`

 SetAttributesNil sets the value for Attributes to be an explicit nil

### UnsetAttributes
`func (o *Connectorrulecreaterequest) UnsetAttributes()`

UnsetAttributes ensures that no value is present for Attributes, not even an explicit nil

