---
id: v1-importobject
title: Importobject
pagination_label: Importobject
sidebar_label: Importobject
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Importobject', 'V1Importobject'] 
slug: /tools/sdk/go/identityprofiles/models/importobject
tags: ['SDK', 'Software Development Kit', 'Importobject', 'V1Importobject']
---

# Importobject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | DTO type of object created or updated by import. | [optional] 
**Id** | Pointer to **string** | ID of object created or updated by import. | [optional] 
**Name** | Pointer to **string** | Display name of object created or updated by import. | [optional] 

## Methods

### NewImportobject

`func NewImportobject() *Importobject`

NewImportobject instantiates a new Importobject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImportobjectWithDefaults

`func NewImportobjectWithDefaults() *Importobject`

NewImportobjectWithDefaults instantiates a new Importobject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Importobject) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Importobject) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Importobject) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Importobject) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Importobject) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Importobject) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Importobject) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Importobject) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Importobject) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Importobject) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Importobject) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Importobject) HasName() bool`

HasName returns a boolean if a field has been set.


