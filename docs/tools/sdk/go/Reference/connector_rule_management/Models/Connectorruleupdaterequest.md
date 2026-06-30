---
id: v1-connectorruleupdaterequest
title: Connectorruleupdaterequest
pagination_label: Connectorruleupdaterequest
sidebar_label: Connectorruleupdaterequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Connectorruleupdaterequest', 'V1Connectorruleupdaterequest'] 
slug: /tools/sdk/go/connectorrulemanagement/models/connectorruleupdaterequest
tags: ['SDK', 'Software Development Kit', 'Connectorruleupdaterequest', 'V1Connectorruleupdaterequest']
---

# Connectorruleupdaterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | the name of the rule | 
**Description** | Pointer to **NullableString** | a description of the rule's purpose | [optional] 
**Type** | **string** | the type of rule | 
**Signature** | Pointer to [**ConnectorrulecreaterequestSignature**](connectorrulecreaterequest-signature) |  | [optional] 
**SourceCode** | [**Sourcecode**](sourcecode) |  | 
**Attributes** | Pointer to **map[string]interface{}** | a map of string to objects | [optional] 
**Id** | **string** | the ID of the rule to update | 

## Methods

### NewConnectorruleupdaterequest

`func NewConnectorruleupdaterequest(name string, type_ string, sourceCode Sourcecode, id string, ) *Connectorruleupdaterequest`

NewConnectorruleupdaterequest instantiates a new Connectorruleupdaterequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorruleupdaterequestWithDefaults

`func NewConnectorruleupdaterequestWithDefaults() *Connectorruleupdaterequest`

NewConnectorruleupdaterequestWithDefaults instantiates a new Connectorruleupdaterequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Connectorruleupdaterequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Connectorruleupdaterequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Connectorruleupdaterequest) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Connectorruleupdaterequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Connectorruleupdaterequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Connectorruleupdaterequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Connectorruleupdaterequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Connectorruleupdaterequest) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Connectorruleupdaterequest) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetType

`func (o *Connectorruleupdaterequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Connectorruleupdaterequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Connectorruleupdaterequest) SetType(v string)`

SetType sets Type field to given value.


### GetSignature

`func (o *Connectorruleupdaterequest) GetSignature() ConnectorrulecreaterequestSignature`

GetSignature returns the Signature field if non-nil, zero value otherwise.

### GetSignatureOk

`func (o *Connectorruleupdaterequest) GetSignatureOk() (*ConnectorrulecreaterequestSignature, bool)`

GetSignatureOk returns a tuple with the Signature field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignature

`func (o *Connectorruleupdaterequest) SetSignature(v ConnectorrulecreaterequestSignature)`

SetSignature sets Signature field to given value.

### HasSignature

`func (o *Connectorruleupdaterequest) HasSignature() bool`

HasSignature returns a boolean if a field has been set.

### GetSourceCode

`func (o *Connectorruleupdaterequest) GetSourceCode() Sourcecode`

GetSourceCode returns the SourceCode field if non-nil, zero value otherwise.

### GetSourceCodeOk

`func (o *Connectorruleupdaterequest) GetSourceCodeOk() (*Sourcecode, bool)`

GetSourceCodeOk returns a tuple with the SourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCode

`func (o *Connectorruleupdaterequest) SetSourceCode(v Sourcecode)`

SetSourceCode sets SourceCode field to given value.


### GetAttributes

`func (o *Connectorruleupdaterequest) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Connectorruleupdaterequest) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Connectorruleupdaterequest) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Connectorruleupdaterequest) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### SetAttributesNil

`func (o *Connectorruleupdaterequest) SetAttributesNil(b bool)`

 SetAttributesNil sets the value for Attributes to be an explicit nil

### UnsetAttributes
`func (o *Connectorruleupdaterequest) UnsetAttributes()`

UnsetAttributes ensures that no value is present for Attributes, not even an explicit nil
### GetId

`func (o *Connectorruleupdaterequest) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Connectorruleupdaterequest) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Connectorruleupdaterequest) SetId(v string)`

SetId sets Id field to given value.



