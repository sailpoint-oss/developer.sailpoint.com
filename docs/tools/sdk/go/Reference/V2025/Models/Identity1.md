---
id: v2025-identity1
title: Identity1
pagination_label: Identity1
sidebar_label: Identity1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identity1', 'V2025Identity1'] 
slug: /tools/sdk/go/v2025/models/identity1
tags: ['SDK', 'Software Development Kit', 'Identity1', 'V2025Identity1']
---

# Identity1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The ID of the object | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the object | [optional] 

## Methods

### NewIdentity1

`func NewIdentity1() *Identity1`

NewIdentity1 instantiates a new Identity1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentity1WithDefaults

`func NewIdentity1WithDefaults() *Identity1`

NewIdentity1WithDefaults instantiates a new Identity1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Identity1) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Identity1) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Identity1) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Identity1) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Identity1) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Identity1) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Identity1) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Identity1) HasName() bool`

HasName returns a boolean if a field has been set.


