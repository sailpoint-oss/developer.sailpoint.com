---
id: v1-roleminingidentity
title: Roleminingidentity
pagination_label: Roleminingidentity
sidebar_label: Roleminingidentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roleminingidentity', 'V1Roleminingidentity'] 
slug: /tools/sdk/go/iairolemining/models/roleminingidentity
tags: ['SDK', 'Software Development Kit', 'Roleminingidentity', 'V1Roleminingidentity']
---

# Roleminingidentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Id of the identity | [optional] 
**Name** | Pointer to **string** | Name of the identity | [optional] 
**Attributes** | Pointer to **map[string]string** |  | [optional] 

## Methods

### NewRoleminingidentity

`func NewRoleminingidentity() *Roleminingidentity`

NewRoleminingidentity instantiates a new Roleminingidentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleminingidentityWithDefaults

`func NewRoleminingidentityWithDefaults() *Roleminingidentity`

NewRoleminingidentityWithDefaults instantiates a new Roleminingidentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Roleminingidentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Roleminingidentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Roleminingidentity) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Roleminingidentity) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Roleminingidentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Roleminingidentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Roleminingidentity) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Roleminingidentity) HasName() bool`

HasName returns a boolean if a field has been set.

### GetAttributes

`func (o *Roleminingidentity) GetAttributes() map[string]string`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Roleminingidentity) GetAttributesOk() (*map[string]string, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Roleminingidentity) SetAttributes(v map[string]string)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Roleminingidentity) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.


