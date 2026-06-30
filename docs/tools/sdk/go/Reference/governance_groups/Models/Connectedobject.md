---
id: v1-connectedobject
title: Connectedobject
pagination_label: Connectedobject
sidebar_label: Connectedobject
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Connectedobject', 'V1Connectedobject'] 
slug: /tools/sdk/go/governancegroups/models/connectedobject
tags: ['SDK', 'Software Development Kit', 'Connectedobject', 'V1Connectedobject']
---

# Connectedobject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**Connectedobjecttype**](connectedobjecttype) |  | [optional] 
**Id** | Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** | Pointer to **string** | Human-readable name of Connected object | [optional] 
**Description** | Pointer to **NullableString** | Description of the Connected object. | [optional] 

## Methods

### NewConnectedobject

`func NewConnectedobject() *Connectedobject`

NewConnectedobject instantiates a new Connectedobject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectedobjectWithDefaults

`func NewConnectedobjectWithDefaults() *Connectedobject`

NewConnectedobjectWithDefaults instantiates a new Connectedobject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Connectedobject) GetType() Connectedobjecttype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Connectedobject) GetTypeOk() (*Connectedobjecttype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Connectedobject) SetType(v Connectedobjecttype)`

SetType sets Type field to given value.

### HasType

`func (o *Connectedobject) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Connectedobject) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Connectedobject) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Connectedobject) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Connectedobject) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Connectedobject) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Connectedobject) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Connectedobject) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Connectedobject) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Connectedobject) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Connectedobject) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Connectedobject) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Connectedobject) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Connectedobject) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Connectedobject) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil

