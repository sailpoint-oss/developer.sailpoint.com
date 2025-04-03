---
id: v2025-form-owner
title: FormOwner
pagination_label: FormOwner
sidebar_label: FormOwner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'FormOwner', 'V2025FormOwner'] 
slug: /tools/sdk/go/v2025/models/form-owner
tags: ['SDK', 'Software Development Kit', 'FormOwner', 'V2025FormOwner']
---

# FormOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | FormOwnerType value. IDENTITY FormOwnerTypeIdentity | [optional] 
**Id** | Pointer to **string** | Unique identifier of the form's owner. | [optional] 
**Name** | Pointer to **string** | Name of the form's owner. | [optional] 

## Methods

### NewFormOwner

`func NewFormOwner() *FormOwner`

NewFormOwner instantiates a new FormOwner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormOwnerWithDefaults

`func NewFormOwnerWithDefaults() *FormOwner`

NewFormOwnerWithDefaults instantiates a new FormOwner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *FormOwner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *FormOwner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *FormOwner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *FormOwner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *FormOwner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *FormOwner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *FormOwner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *FormOwner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *FormOwner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *FormOwner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *FormOwner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *FormOwner) HasName() bool`

HasName returns a boolean if a field has been set.


