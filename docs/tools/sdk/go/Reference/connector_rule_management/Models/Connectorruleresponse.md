---
id: v1-connectorruleresponse
title: Connectorruleresponse
pagination_label: Connectorruleresponse
sidebar_label: Connectorruleresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Connectorruleresponse', 'V1Connectorruleresponse'] 
slug: /tools/sdk/go/connectorrulemanagement/models/connectorruleresponse
tags: ['SDK', 'Software Development Kit', 'Connectorruleresponse', 'V1Connectorruleresponse']
---

# Connectorruleresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | the name of the rule | 
**Description** | Pointer to **NullableString** | a description of the rule's purpose | [optional] 
**Type** | **string** | the type of rule | 
**Signature** | Pointer to [**ConnectorrulecreaterequestSignature**](connectorrulecreaterequest-signature) |  | [optional] 
**SourceCode** | [**Sourcecode**](sourcecode) |  | 
**Attributes** | Pointer to **map[string]interface{}** | a map of string to objects | [optional] 
**Id** | **string** | the ID of the rule | 
**Created** | **string** | an ISO 8601 UTC timestamp when this rule was created | 
**Modified** | Pointer to **NullableString** | an ISO 8601 UTC timestamp when this rule was last modified | [optional] 

## Methods

### NewConnectorruleresponse

`func NewConnectorruleresponse(name string, type_ string, sourceCode Sourcecode, id string, created string, ) *Connectorruleresponse`

NewConnectorruleresponse instantiates a new Connectorruleresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorruleresponseWithDefaults

`func NewConnectorruleresponseWithDefaults() *Connectorruleresponse`

NewConnectorruleresponseWithDefaults instantiates a new Connectorruleresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Connectorruleresponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Connectorruleresponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Connectorruleresponse) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Connectorruleresponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Connectorruleresponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Connectorruleresponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Connectorruleresponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Connectorruleresponse) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Connectorruleresponse) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetType

`func (o *Connectorruleresponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Connectorruleresponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Connectorruleresponse) SetType(v string)`

SetType sets Type field to given value.


### GetSignature

`func (o *Connectorruleresponse) GetSignature() ConnectorrulecreaterequestSignature`

GetSignature returns the Signature field if non-nil, zero value otherwise.

### GetSignatureOk

`func (o *Connectorruleresponse) GetSignatureOk() (*ConnectorrulecreaterequestSignature, bool)`

GetSignatureOk returns a tuple with the Signature field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignature

`func (o *Connectorruleresponse) SetSignature(v ConnectorrulecreaterequestSignature)`

SetSignature sets Signature field to given value.

### HasSignature

`func (o *Connectorruleresponse) HasSignature() bool`

HasSignature returns a boolean if a field has been set.

### GetSourceCode

`func (o *Connectorruleresponse) GetSourceCode() Sourcecode`

GetSourceCode returns the SourceCode field if non-nil, zero value otherwise.

### GetSourceCodeOk

`func (o *Connectorruleresponse) GetSourceCodeOk() (*Sourcecode, bool)`

GetSourceCodeOk returns a tuple with the SourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCode

`func (o *Connectorruleresponse) SetSourceCode(v Sourcecode)`

SetSourceCode sets SourceCode field to given value.


### GetAttributes

`func (o *Connectorruleresponse) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Connectorruleresponse) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Connectorruleresponse) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Connectorruleresponse) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### SetAttributesNil

`func (o *Connectorruleresponse) SetAttributesNil(b bool)`

 SetAttributesNil sets the value for Attributes to be an explicit nil

### UnsetAttributes
`func (o *Connectorruleresponse) UnsetAttributes()`

UnsetAttributes ensures that no value is present for Attributes, not even an explicit nil
### GetId

`func (o *Connectorruleresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Connectorruleresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Connectorruleresponse) SetId(v string)`

SetId sets Id field to given value.


### GetCreated

`func (o *Connectorruleresponse) GetCreated() string`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Connectorruleresponse) GetCreatedOk() (*string, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Connectorruleresponse) SetCreated(v string)`

SetCreated sets Created field to given value.


### GetModified

`func (o *Connectorruleresponse) GetModified() string`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Connectorruleresponse) GetModifiedOk() (*string, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Connectorruleresponse) SetModified(v string)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Connectorruleresponse) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *Connectorruleresponse) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *Connectorruleresponse) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil

