---
id: v1-identity2
title: Identity2
pagination_label: Identity2
sidebar_label: Identity2
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identity2', 'V1Identity2'] 
slug: /tools/sdk/go/workreassignment/models/identity2
tags: ['SDK', 'Software Development Kit', 'Identity2', 'V1Identity2']
---

# Identity2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The ID of the object | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the object | [optional] 

## Methods

### NewIdentity2

`func NewIdentity2() *Identity2`

NewIdentity2 instantiates a new Identity2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentity2WithDefaults

`func NewIdentity2WithDefaults() *Identity2`

NewIdentity2WithDefaults instantiates a new Identity2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Identity2) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Identity2) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Identity2) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Identity2) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Identity2) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Identity2) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Identity2) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Identity2) HasName() bool`

HasName returns a boolean if a field has been set.


