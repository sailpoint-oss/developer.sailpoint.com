---
id: v1-ownerreference
title: Ownerreference
pagination_label: Ownerreference
sidebar_label: Ownerreference
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Ownerreference', 'V1Ownerreference'] 
slug: /tools/sdk/go/roles/models/ownerreference
tags: ['SDK', 'Software Development Kit', 'Ownerreference', 'V1Ownerreference']
---

# Ownerreference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Owner type. This field must be either left null or set to 'IDENTITY' on input, otherwise a 400 Bad Request error will result. | [optional] 
**Id** | Pointer to **string** | Owner's identity ID. | [optional] 
**Name** | Pointer to **string** | Owner's name. It may be left null or omitted in a POST or PATCH. If set, it must match the current value of the owner's display name, otherwise a 400 Bad Request error will result. | [optional] 

## Methods

### NewOwnerreference

`func NewOwnerreference() *Ownerreference`

NewOwnerreference instantiates a new Ownerreference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOwnerreferenceWithDefaults

`func NewOwnerreferenceWithDefaults() *Ownerreference`

NewOwnerreferenceWithDefaults instantiates a new Ownerreference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Ownerreference) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Ownerreference) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Ownerreference) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Ownerreference) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Ownerreference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Ownerreference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Ownerreference) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Ownerreference) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Ownerreference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Ownerreference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Ownerreference) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Ownerreference) HasName() bool`

HasName returns a boolean if a field has been set.


