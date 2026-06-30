---
id: v1-attrsyncsource
title: Attrsyncsource
pagination_label: Attrsyncsource
sidebar_label: Attrsyncsource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Attrsyncsource', 'V1Attrsyncsource'] 
slug: /tools/sdk/go/sources/models/attrsyncsource
tags: ['SDK', 'Software Development Kit', 'Attrsyncsource', 'V1Attrsyncsource']
---

# Attrsyncsource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | DTO type of target source for attribute synchronization. | [optional] 
**Id** | Pointer to **string** | ID of target source for attribute synchronization. | [optional] 
**Name** | Pointer to **NullableString** | Human-readable name of target source for attribute synchronization. | [optional] 

## Methods

### NewAttrsyncsource

`func NewAttrsyncsource() *Attrsyncsource`

NewAttrsyncsource instantiates a new Attrsyncsource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttrsyncsourceWithDefaults

`func NewAttrsyncsourceWithDefaults() *Attrsyncsource`

NewAttrsyncsourceWithDefaults instantiates a new Attrsyncsource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Attrsyncsource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Attrsyncsource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Attrsyncsource) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Attrsyncsource) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Attrsyncsource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Attrsyncsource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Attrsyncsource) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Attrsyncsource) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Attrsyncsource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Attrsyncsource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Attrsyncsource) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Attrsyncsource) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Attrsyncsource) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Attrsyncsource) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil

